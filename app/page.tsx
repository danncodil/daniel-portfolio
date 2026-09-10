import { ArrowDown, ArrowUpRight, Code2, MessageCircle, ExternalLink } from "lucide-react";
import { PortfolioExperience } from "@/components/portfolio-experience";

const whatsapp = "https://wa.me/5571999430012";
const instagram = "https://www.instagram.com/danielconceiicaoo/";
const technologies = [
  { name: "JavaScript", category: "Linguagem", mark: "JS" },
  { name: "Rust", category: "Linguagem", mark: "Rs" },
  { name: "Node.js", category: "Ambiente de execução", mark: "N" },
  { name: "HTML", category: "Estrutura", mark: "</>" },
  { name: "CSS", category: "Estilo", mark: "#" },
];

export default function Home() {
  return (
    <PortfolioExperience>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="site-header">
        <nav className="shell navigation" aria-label="Navegação principal">
          <a className="wordmark" href="#inicio" aria-label="Daniel Conceição, início">D<span className="red-block" />C<span className="wordmark-caption">FULL STACK</span></a>
          <div className="nav-links">
            <a href="#projetos">Projetos</a><a href="#sobre">Sobre mim</a><a href="#contato">Contato</a>
          </div>
          <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="nav-contact">Vamos conversar <ArrowUpRight size={16} /></a>
        </nav>
      </header>
      <main id="conteudo">
        <section id="inicio" className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow"><span className="red-line" /> DESENVOLVEDOR FULL STACK</p>
            <h1>Daniel<br /><span className="name-last">Conceição<span className="red-square" aria-hidden="true" /></span></h1>
            <p className="hero-statement">Ideias reais.<br />Experiências digitais que funcionam.</p>
            <p className="hero-description">Desenvolvo aplicações para transformar necessidades do dia a dia em soluções práticas. Do meu projeto pessoal ao sistema criado para um cliente.</p>
            <div className="actions">
              <a className="button button-primary" href="#projetos">Explorar projetos <ArrowDown size={18} /></a>
              <a className="text-link" href={whatsapp} target="_blank" rel="noopener noreferrer">Conversar sobre uma ideia <ArrowUpRight size={18} /></a>
            </div>
          </div>
          <aside className="developer-panel" aria-label="Resumo profissional">
            <div className="panel-top"><Code2 size={24} /><span>PERFIL DO DESENVOLVEDOR</span><span className="panel-code">DCS_01</span></div>
            <div className="panel-identity">
              <div className="profile-photo">
                <img src="/daniel-profile.png" alt="Retrato de Daniel Conceição" width="1122" height="1402" />
              </div>
              <p>Daniel Conceição de Sousa<br /><strong>Desenvolvimento Full Stack</strong></p>
            </div>
            <dl className="profile-facts">
              <div><dt>Formação</dt><dd>Técnico em Desenvolvimento de Sistemas</dd></div>
              <div><dt>Instituição</dt><dd>SENAI · Lauro de Freitas</dd></div>
              <div><dt>Momento atual</dt><dd>3º de 4 semestres · em curso</dd></div>
            </dl>
            <div className="panel-bottom"><strong>02</strong><span>projetos concluídos<br />com acesso online</span><a href="#projetos" aria-label="Conhecer os dois projetos"><ArrowDown size={22} /></a></div>
          </aside>
          <div className="hero-bottom"><span>DA IDEIA À APLICAÇÃO</span><span>INTERFACE / LÓGICA / EXPERIÊNCIA</span></div>
        </section>

        <section id="projetos" className="projects-section">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow"><span className="red-line" /> 01 / PROJETOS</p><h2>Meu trabalho,<br />na prática.</h2></div>
              <p>Conheça as aplicações e explore<br />cada projeto por conta própria.</p>
            </div>
            <div className="project-grid">
              <article className="project-card trio-project">
                <a className="project-media trio-media" href="https://danncodil.github.io/finance-app/#/" target="_blank" rel="noopener noreferrer" aria-label="Abrir TRIO App">
                  <span className="media-label">PROJETO PESSOAL</span>
                  <img src="/trio-logo-white.jpeg" alt="TRIO — Gestão financeira integrada" width="2048" height="1143" loading="lazy" />
                  <span className="media-action" aria-hidden="true"><ArrowUpRight size={24} /></span>
                </a>
                <div className="project-body">
                  <div className="project-meta"><span>01 / FINANÇAS</span><span>PROJETO PESSOAL</span></div>
                  <h3>TRIO App</h3>
                  <p>Meu aplicativo financeiro pessoal, desenvolvido para apoiar a organização da vida financeira.</p>
                  <div className="project-footer"><span>Autoria · Daniel Conceição</span><a href="https://danncodil.github.io/finance-app/#/" target="_blank" rel="noopener noreferrer">Explorar app <ArrowUpRight size={18} /></a></div>
                </div>
              </article>
              <article className="project-card sal-project">
                <a className="project-media sal-media" href="https://danncodil.github.io/rodiziosal71/" target="_blank" rel="noopener noreferrer" aria-label="Abrir Gerenciador de Rodízio Sal71">
                  <img className="sal-preview" src="/sal71-preview.png" alt="Prévia do painel de rodízio de atendimento da Sal71" width="1903" height="916" loading="lazy" />
                  <span className="media-label">DESENVOLVIDO PARA A SAL71</span>
                  <span className="sal-logo-plate"><img src="/sal71-logo-white.png" alt="Sal71 Barbearia" width="1080" height="1080" loading="lazy" /></span>
                  <span className="media-action" aria-hidden="true"><ArrowUpRight size={24} /></span>
                </a>
                <div className="project-body">
                  <div className="project-meta"><span>02 / GESTÃO DE ATENDIMENTO</span><span>CLIENTE · SAL71</span></div>
                  <h3>Rodízio Sal71</h3>
                  <p>Sistema criado para organizar a vez dos barbeiros e acompanhar os atendimentos da barbearia Sal71.</p>
                  <div className="project-footer"><span>Desenvolvimento · Daniel Conceição</span><a href="https://danncodil.github.io/rodiziosal71/" target="_blank" rel="noopener noreferrer">Explorar sistema <ArrowUpRight size={18} /></a></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="sobre" className="shell about-section">
          <div className="about-copy"><p className="eyebrow"><span className="red-line" /> 02 / SOBRE MIM</p><h2>Aprendizado contínuo.<br />Aplicação real.</h2><p>Sou Daniel Conceição de Sousa, desenvolvedor Full Stack e estudante do curso técnico de Desenvolvimento de Sistemas no SENAI de Lauro de Freitas, atualmente no 3º de 4 semestres.</p><p>Minha trajetória reúne estudo e prática: o TRIO é meu projeto pessoal de finanças, e o Gerenciador de Rodízio foi desenvolvido para a barbearia Sal71.</p><a href="https://github.com/danncodil" target="_blank" rel="noopener noreferrer" className="text-link">Conheça meu GitHub <ExternalLink size={17} /></a></div>
          <div className="stack-panel"><div className="stack-heading"><Code2 size={24} /><h3>Minhas tecnologias</h3></div><ul className="tech-list">{technologies.map((tech) => <li key={tech.name}><span className="tech-mark" aria-hidden="true">{tech.mark}</span><div><strong>{tech.name}</strong><span>{tech.category}</span></div><span className="tech-detail" aria-hidden="true" /></li>)}</ul></div>
        </section>

        <section id="contato" className="shell contact-section">
          <div className="contact-panel"><div><p className="eyebrow"><span className="red-line" /> 03 / PRÓXIMO PROJETO</p><h2>A próxima ideia<br />pode ser a sua.</h2><p>Me conte o que você precisa construir.<br />Vamos conversar sobre seu projeto.</p></div><div className="contact-links"><a className="button button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={21} /> Conversar no WhatsApp <ArrowUpRight size={19} /></a><span className="contact-number">(71) 99943-0012</span><a className="instagram-link" href={instagram} target="_blank" rel="noopener noreferrer"><span>INSTAGRAM<strong>@danielconceiicaoo</strong></span><ArrowUpRight size={22} /></a></div></div>
        </section>
      </main>
      <footer className="shell site-footer"><span>© 2026 Daniel Conceição de Sousa</span><a href="#inicio">Voltar ao início ↑</a></footer>
    </PortfolioExperience>
  );
}
