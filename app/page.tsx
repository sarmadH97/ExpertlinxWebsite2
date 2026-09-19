import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Fragment } from "react";
import { MotionDirector } from "@/components/motion-director";

const services = [
  [
    "Microsoft Solutions",
    "Azure, Dynamics 365, Microsoft 365, Power Platform and Power BI solutions designed around business operations.",
  ],
  [
    "Cloud & Infrastructure",
    "Cloud migration, modernization and scalable infrastructure designed for long-term growth.",
  ],
  [
    "Custom Software & AI",
    "Web, mobile, enterprise and AI-powered software designed around real operational needs.",
  ],
];

const capabilities = [
  ["01", "Microsoft expertise", "Solutions across Azure, Dynamics 365, Microsoft 365, Power Platform and Power BI."],
  ["02", "Custom software", "Web, mobile and enterprise software shaped around the way your people actually work."],
  ["03", "Cloud", "Migration, modernization and scalable architecture for dependable operations."],
  ["04", "AI", "AI-powered applications, intelligent workflows and practical business automation."],
  ["05", "End-to-end delivery", "Strategy, engineering, deployment and ongoing support in one capable team."],
  ["06", "Security", "Security-conscious thinking woven into software and cloud implementation."],
  ["07", "Long-term partnership", "Technology designed to evolve as your organization grows."],
];

const faqs = [
  ["What types of businesses does ExpertLinx work with?", "ExpertLinx works with organizations looking to modernize operations, introduce Microsoft technology, improve cloud infrastructure or build software around a real business need."],
  ["Can ExpertLinx modernize an existing application?", "Yes. The team can assess an existing application, identify the right modernization path, and improve its experience, architecture and maintainability."],
  ["Do you work with Microsoft Azure?", "Yes. Azure cloud migration, infrastructure setup and managed services are part of ExpertLinx's Microsoft technology offering."],
  ["Can you implement Dynamics 365?", "Yes. ExpertLinx supports Dynamics 365 implementations across Business Central, Sales, Customer Service and Field Service."],
  ["Can you build completely custom software?", "Yes. ExpertLinx builds custom web, mobile and enterprise applications when an off-the-shelf product is not the right fit."],
  ["Do you provide ongoing support?", "Ongoing support and optimization can be part of the engagement, so the solution continues to serve the organization after launch."],
];

const insights = [
  { category: "Cloud", date: "November 15, 2024", dateTime: "2024-11-15", title: "Azure Cloud Migration: A Complete Enterprise Guide for 2024" },
  { category: "ERP", date: "November 8, 2024", dateTime: "2024-11-08", title: "Dynamics 365 Business Central: Complete Implementation Guide for Growing Businesses" },
  { category: "Automation", date: "October 28, 2024", dateTime: "2024-10-28", title: "Power Automate Mastery: 15 Business Process Automations That Deliver Immediate ROI" },
];

const flowLines = [
  { x: -74, y: -18, color: "#0a777c", opacity: 0.25 },
  { x: -65, y: -15, color: "#0b8f93", opacity: 0.32 },
  { x: -56, y: -12, color: "#0c9ea1", opacity: 0.38 },
  { x: -47, y: -9, color: "#11aeb0", opacity: 0.44 },
  { x: -38, y: -6, color: "#13babc", opacity: 0.5 },
  { x: -29, y: -3, color: "#18c3c3", opacity: 0.56 },
  { x: -20, y: 0, color: "#20c7c5", opacity: 0.64 },
  { x: -11, y: 3, color: "#28ceca", opacity: 0.7 },
  { x: -2, y: 6, color: "#31d3ce", opacity: 0.76 },
  { x: 7, y: 9, color: "#3bd7d2", opacity: 0.8 },
  { x: 16, y: 12, color: "#45dbd5", opacity: 0.76 },
  { x: 25, y: 15, color: "#50ded8", opacity: 0.7 },
  { x: 34, y: 18, color: "#5ae1da", opacity: 0.62 },
  { x: 43, y: 21, color: "#63e3dd", opacity: 0.56 },
  { x: 52, y: 24, color: "#6ce5df", opacity: 0.48 },
  { x: 61, y: 27, color: "#76e7e2", opacity: 0.4 },
  { x: 70, y: 30, color: "#81e9e5", opacity: 0.33 },
  { x: 79, y: 33, color: "#8aebe7", opacity: 0.26 },
];

function ArrowLink({ children, href = "#contact", light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return <a className={`text-link${light ? " text-link-light" : ""}`} href={href}><span>{children}</span><ArrowUpRight aria-hidden="true" size={18} /></a>;
}

function HeroFlow() {
  return <div className="hero-flow" aria-hidden="true"><div className="hero-flow-ambient"><svg viewBox="0 0 1200 900" role="presentation" preserveAspectRatio="xMidYMid slice"><g className="flow-paths">{flowLines.map((line, index) => <g key={index} data-flow-drift={index % 3} transform={`translate(${line.x} ${line.y})`}><path data-flow-line data-flow-speed={index % 3} d="M 1110 -150 C 805 -20 575 120 520 310 C 465 505 850 485 970 630 C 1125 820 850 995 560 825 C 345 700 300 535 105 625 C -85 715 15 930 355 1010" fill="none" stroke={line.color} strokeOpacity={line.opacity} strokeWidth={index === 8 || index === 9 ? 2.2 : 1.35} vectorEffect="non-scaling-stroke" /></g>)}</g></svg></div></div>;
}

function MicrosoftEcosystem() {
  return <div className="microsoft-ecosystem page-grid" role="img" aria-label="Microsoft technology ecosystem with Azure, Dynamics 365, Power Platform, Microsoft 365 and Power BI">
    <div className="page-gutter ecosystem-shell">
      <div className="ecosystem-intro" data-heading-reveal><p className="micro-label">Connected Microsoft ecosystem</p><h3>One platform.<br />Working together.</h3><p>ExpertLinx connects the Microsoft technologies your teams rely on into one coherent operating environment.</p></div>
      <div className="orbit-stage" data-orbit-stage>
        <div className="orbit-ring orbit-ring-outer" data-orbit-ring data-orbit-duration="36" data-orbit-direction="1">
          <div className="orbit-node orbit-node-top"><span data-orbit-label>Power Platform</span></div>
          <div className="orbit-node orbit-node-bottom"><span data-orbit-label>Microsoft 365</span></div>
        </div>
        <div className="orbit-ring orbit-ring-middle" data-orbit-ring data-orbit-duration="27" data-orbit-direction="-1">
          <div className="orbit-node orbit-node-left"><span data-orbit-label>Azure</span></div>
          <div className="orbit-node orbit-node-right"><span data-orbit-label>Dynamics 365</span></div>
        </div>
        <div className="orbit-ring orbit-ring-inner" data-orbit-ring data-orbit-duration="21" data-orbit-direction="1">
          <div className="orbit-node orbit-node-lower-right"><span data-orbit-label>Power BI</span></div>
        </div>
        <div className="orbit-core"><span>Microsoft</span><small>Connected ecosystem</small></div>
      </div>
    </div>
  </div>;
}

export default function Home() {
  return <>
    <MotionDirector />

    <header className="site-header" id="top">
      <a className="brand" href="#top" aria-label="ExpertLinx home"><span className="brand-mark">E</span><span>ExpertLinx</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#services">Services</a><a href="#capabilities">Solutions</a><a href="#faq">FAQ</a><a href="#insights">Insights</a></nav>
      <a className="header-cta" href="#contact">Start a conversation <ArrowUpRight size={16} /></a>
      <details className="mobile-menu"><summary aria-label="Open navigation menu"><span /><span /><span /></summary><nav aria-label="Mobile navigation"><a href="#services">Services</a><a href="#capabilities">Solutions</a><a href="#faq">FAQ</a><a href="#insights">Insights</a><a href="#contact">Start a conversation</a></nav></details>
    </header>

    <main>
      <section className="hero page-grid" aria-labelledby="hero-title">
        <div className="hero-inner page-gutter">
          <div className="hero-copy">
            <p className="micro-label">Microsoft · Cloud · AI · Software</p>
            <h1 id="hero-title"><span>Microsoft.</span><span>Cloud. AI.</span><span>Custom</span><span>software.</span></h1>
            <p className="hero-summary">One technology partner for the systems that move your organization forward.</p>
            <a className="primary-cta" href="#contact">Start a conversation <ArrowUpRight size={18} /></a>
          </div>
          <HeroFlow />
        </div>
      </section>

      <section className="services page-grid" id="services" aria-label="Primary services">
        {services.map(([title, description], index) => <Fragment key={title}><article className="service-row" data-transition-service={index === 0 ? "" : undefined} data-row-reveal={index === 0 ? undefined : ""}><div className="page-gutter service-grid"><span className="row-number">0{index + 1}</span><h2>{title}</h2><p>{description}</p><ArrowLink>Explore service</ArrowLink></div></article>{index === 0 ? <MicrosoftEcosystem /> : null}</Fragment>)}
      </section>

      <section className="capabilities" id="capabilities" aria-labelledby="capabilities-title">
        <div className="page-gutter">
          <div className="capabilities-heading" data-heading-reveal><p className="micro-label">The ExpertLinx difference</p><h2 id="capabilities-title"><span>One partner.</span><span>Every capability.</span></h2></div>
          <ol className="capability-list">{capabilities.map(([number, title, body]) => <li key={number} data-row-reveal><span className="capability-number">{number}</span><h3>{title}</h3><p>{body}</p></li>)}</ol>
        </div>
      </section>

      <section className="faq-section page-grid" id="faq" aria-labelledby="faq-title">
        <div className="page-gutter faq-grid">
          <div className="faq-heading" data-heading-reveal><p className="micro-label">FAQ</p><h2 id="faq-title">Questions?<br />We&apos;re here<br />to help.</h2><div className="faq-contact"><p>Can&apos;t find what you&apos;re looking for?</p><ArrowLink href="#contact">Contact us</ArrowLink></div></div>
          <div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0} data-row-reveal><summary>{question}<ChevronDown aria-hidden="true" size={22} /></summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="insights page-grid" id="insights" aria-labelledby="insights-title">
        <div className="page-gutter insights-heading" data-heading-reveal><p className="micro-label">Insights</p><h2 id="insights-title">Ideas for what&apos;s next.</h2></div>
        <div className="insight-list">{insights.map((insight, index) => <article key={insight.title} data-row-reveal><a className="page-gutter insight-row" href="https://expertlinx.com/blog"><span className="insight-number">0{index + 1}</span><p className="insight-category">{insight.category}</p><h3>{insight.title}</h3><time dateTime={insight.dateTime}>{insight.date}</time><ArrowUpRight aria-hidden="true" size={26} /></a></article>)}</div>
        <div className="page-gutter insights-footer"><ArrowLink href="https://expertlinx.com/blog">View all insights</ArrowLink></div>
      </section>

      <section className="final-cta" id="contact">
        <div className="page-gutter cta-grid">
          <div data-heading-reveal><p className="micro-label">Start a conversation</p><h2>Let&apos;s build<br />what comes next.</h2></div>
          <div className="cta-copy" data-row-reveal><p>Microsoft systems, cloud, AI or custom software—bring us the business challenge.</p><a className="cta-button" href="https://expertlinx.com/contact">Start a conversation <ArrowUpRight size={20} /></a></div>
        </div>
      </section>
    </main>

    <footer>
      <div className="page-gutter footer-top">
        <div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark">E</span><span>ExpertLinx</span></a><p>Microsoft solutions, cloud infrastructure, AI and custom software built around your business.</p></div>
        <nav aria-label="Services"><p>Services</p><a href="#services">Microsoft Solutions</a><a href="#services">Cloud & Infrastructure</a><a href="#services">Custom Software & AI</a></nav>
        <nav aria-label="Explore"><p>Explore</p><a href="#capabilities">Capabilities</a><a href="#faq">FAQ</a><a href="#insights">Insights</a><a href="#contact">Contact</a></nav>
        <nav aria-label="Contact"><p>Contact</p><a href="mailto:sales@expertlinx.com">sales@expertlinx.com</a><a href="tel:+12892050570">+1 (289) 205 0570</a></nav>
      </div>
      <div className="page-gutter footer-bottom"><span>© {new Date().getFullYear()} ExpertLinx. All rights reserved.</span><a href="#top">Back to top ↑</a></div>
    </footer>
  </>;
}
