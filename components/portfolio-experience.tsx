"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";

const sections = [
  { id: "inicio", label: "Início" },
  { id: "projetos", label: "Projetos" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];
const preferenceKey = "daniel-portfolio-reduced-motion";

export function PortfolioExperience({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [systemReduced, setSystemReduced] = useState(true);
  const [userReduced, setUserReduced] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("inicio");
  const reduced = systemReduced || userReduced;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncSystem = () => setSystemReduced(query.matches);
    syncSystem();
    try { setUserReduced(localStorage.getItem(preferenceKey) === "true"); } catch { /* Storage is optional. */ }
    query.addEventListener("change", syncSystem);
    setReady(true);
    return () => query.removeEventListener("change", syncSystem);
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      setProgress(maxScroll ? Math.round(Math.min(1, Math.max(0, window.scrollY / maxScroll)) * 100) : 100);
      const current = sections.filter(({ id }) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top <= window.innerHeight * 0.45;
      }).at(-1);
      setActive(current?.id ?? "inicio");
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const container = root.current;
    if (!container || reduced || !ready || !("IntersectionObserver" in window)) return;
    const animations = new Set<Animation>();
    const revealed = new WeakSet<Element>();
    // Content stays visible if scripting or animation support is unavailable.
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle("in-viewport", entry.isIntersecting);
        if (!entry.isIntersecting || revealed.has(entry.target)) continue;
        revealed.add(entry.target);
        if (!(entry.target instanceof HTMLElement) || !entry.target.animate) continue;
        const animation = entry.target.animate(
          [{ opacity: 0.45, translate: "0 20px" }, { opacity: 1, translate: "0 0" }],
          { duration: 620, easing: "cubic-bezier(.2,.7,.2,1)" },
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      }
    }, { threshold: 0.12 });
    const items = container.querySelectorAll(".hero-copy, .developer-panel, .section-heading, .project-card, .about-copy, .stack-panel, .contact-panel");
    items.forEach((item) => observer.observe(item));
    const syncVisibility = () => {
      container.dataset.pageActive = String(!document.hidden);
      animations.forEach((animation) => document.hidden ? animation.pause() : animation.play());
    };
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      document.removeEventListener("visibilitychange", syncVisibility);
      items.forEach((item) => item.classList.remove("in-viewport"));
    };
  }, [ready, reduced]);

  useEffect(() => {
    const container = root.current;
    if (!container || reduced || !ready) return;
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const cards = Array.from(container.querySelectorAll<HTMLElement>(".project-card"));
    const cleanups = cards.map((card) => {
      let frame = 0;
      const reset = () => {
        cancelAnimationFrame(frame);
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
        card.classList.remove("pointer-active");
      };
      const move = (event: PointerEvent) => {
        if (!pointer.matches || event.pointerType !== "mouse") return;
        cancelAnimationFrame(frame);
        const { clientX, clientY } = event;
        frame = requestAnimationFrame(() => {
          const bounds = card.getBoundingClientRect();
          const x = Math.min(1, Math.max(0, (clientX - bounds.left) / bounds.width)) - 0.5;
          const y = Math.min(1, Math.max(0, (clientY - bounds.top) / bounds.height)) - 0.5;
          card.style.setProperty("--tilt-x", `${-y * 4}deg`);
          card.style.setProperty("--tilt-y", `${x * 4}deg`);
          card.classList.add("pointer-active");
        });
      };
      card.addEventListener("pointermove", move, { passive: true });
      card.addEventListener("pointerleave", reset);
      card.addEventListener("pointercancel", reset);
      pointer.addEventListener("change", reset);
      return () => {
        reset();
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", reset);
        card.removeEventListener("pointercancel", reset);
        pointer.removeEventListener("change", reset);
      };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [ready, reduced]);

  const toggleMotion = (enabled: boolean) => {
    setUserReduced(!enabled);
    try { localStorage.setItem(preferenceKey, String(!enabled)); } catch { /* Use the choice for this visit. */ }
  };

  return (
    <div ref={root} className="portfolio" data-motion={reduced ? "reduced" : "full"}>
      <div className="journey-bar">
        <div className="shell journey-content">
          <nav className="journey-steps" aria-label="Etapas do portfólio">
            {sections.map((section, index) => (
              <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? "location" : undefined}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{section.label}
              </a>
            ))}
          </nav>
          <div className="motion-control">
            <label htmlFor="portfolio-animation-switch">{systemReduced && ready ? "Movimento reduzido" : "Animações"}</label>
            <Switch id="portfolio-animation-switch" checked={!reduced} disabled={!ready || systemReduced} onCheckedChange={toggleMotion} />
          </div>
        </div>
        <Progress value={progress} aria-label="Progresso de navegação pela página" className="journey-progress" />
      </div>
      {children}
    </div>
  );
}
