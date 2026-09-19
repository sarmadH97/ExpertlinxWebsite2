import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { MotionDirector } from "@/components/motion-director";

const offerings = [
  {
    number: "01",
    title: "Microsoft Solutions",
    summary:
      "Azure, Dynamics 365, Microsoft 365, Power Platform and Power BI—connected around how your organization actually works.",
    variant: "microsoft",
    tone: "light",
  },
  {
    number: "02",
    title: "Cloud & Infrastructure",
    summary:
      "Migration, modernization and scalable cloud architecture for secure, dependable operations.",
    variant: "cloud",
    tone: "teal",
  },
  {
    number: "03",
    title: "Custom Software & AI",
    summary:
      "Web, mobile, enterprise and AI-powered software built around the work that makes your business distinct.",
    variant: "software",
    tone: "mist",
  },
] as const;

const capabilities = [
  ["01", "Microsoft expertise", "Solutions across Azure, Dynamics 365, Microsoft 365, Power Platform and Power BI."],
  ["02", "Custom software", "Web, mobile and enterprise software shaped around the way your people actually work."],
  ["03", "Cloud", "Migration, modernization and scalable architecture for dependable operations."],
  ["04", "AI", "AI-powered applications, intelligent workflows and practical business automation."],
  ["05", "End-to-end delivery", "Strategy, engineering, deployment and ongoing support in one capable team."],
  ["06", "Security", "Security-conscious thinking woven into software and cloud implementation."],
  ["07", "Long-term partnership", "Technology designed to evolve as your organization grows."],
];

const projects = [
  {
    number: "01",
    name: "Inner City Health Associates",
    sector: "Healthcare · Toronto, Canada",
    service: "Dynamics 365 Business Central",
    description: "An ERP transformation focused on financial management and inventory tracking.",
    monogram: "ICHA",
    tone: "aqua",
  },
  {
    number: "02",
    name: "Diamond Architectural Openings",
    sector: "Architecture & Design · Canada",
    service: "Unified business operations",
    description: "Multiple legacy systems consolidated into Dynamics 365 Business Central to support collaboration and operations.",
    monogram: "DAO",
    tone: "blue",
  },
  {
    number: "03",
    name: "Nomad Nexus",
    sector: "Customer Services · Poland",
    service: "Dynamics 365 Sales & Customer Service",
    description: "Manual practices replaced with a centralized customer view and connected service workflows.",
    monogram: "NN",
    tone: "green",
  },
] as const;

const faqs = [
  ["What types of businesses does ExpertLinx work with?", "ExpertLinx works with organizations looking to modernize operations, introduce Microsoft technology, improve cloud infrastructure or build software around a real business need."],
  ["Can ExpertLinx modernize an existing application?", "Yes. The team can assess an existing application, identify the right modernization path, and improve its experience, architecture and maintainability."],
  ["Do you work with Microsoft Azure?", "Yes. Azure cloud migration, infrastructure setup and managed services are part of ExpertLinx's Microsoft technology offering."],
  ["Can you implement Dynamics 365?", "Yes. ExpertLinx supports Dynamics 365 implementations across Business Central, Sales, Customer Service and Field Service."],
  ["Can you build completely custom software?", "Yes. ExpertLinx builds custom web, mobile and enterprise applications when an off-the-shelf product is not the right fit."],
  ["Do you provide ongoing support?", "Ongoing support and optimization can be part of the engagement, so the solution continues to serve the organization after launch."],
];

const insights = [
  { category: "Cloud", date: "November 15, 2024", title: "Azure Cloud Migration: A Complete Enterprise Guide for 2024" },
  { category: "ERP", date: "November 8, 2024", title: "Dynamics 365 Business Central: Complete Implementation Guide for Growing Businesses" },
  { category: "Automation", date: "October 28, 2024", title: "Power Automate Mastery: 15 Business Process Automations That Deliver Immediate ROI" },
];

function ArrowLink({ children, href = "#contact", light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return <a className={`text-link${light ? " text-link-light" : ""}`} href={href}><span>{children}</span><ArrowUpRight aria-hidden="true" size={18} /></a>;
}

function OfferingVisual({ variant }: { variant: (typeof offerings)[number]["variant"] }) {
  if (variant === "microsoft") {
    return <div className="offering-visual visual-microsoft" aria-hidden="true"><span className="visual-note">CONNECTED MICROSOFT ECOSYSTEM</span><div className="ms-core">M</div><span className="orbit orbit-one"><i>365</i></span><span className="orbit orbit-two"><i>AZURE</i></span><span className="orbit orbit-three"><i>POWER</i></span></div>;
  }
  if (variant === "cloud") {
    return <div className="offering-visual visual-cloud" aria-hidden="true"><span className="visual-note">RESILIENT BY DESIGN</span><div className="cloud-plane plane-one"><span>01</span><i /></div><div className="cloud-plane plane-two"><span>02</span><i /></div><div className="cloud-plane plane-three"><span>03</span><i /></div><b>OPERATE<br />WITH CLARITY</b></div>;
  }
  return <div className="offering-visual visual-software" aria-hidden="true"><span className="visual-note">SOFTWARE SHAPED TO THE WORK</span><div className="code-window"><span>WORKFLOW / 03</span><strong>human need</strong><i /><i /><i /></div><div className="ai-pulse"><span>AI</span></div></div>;
}

export default function Home() {
  return <>
    <MotionDirector />
    <header className="site-header" id="top">
      <a className="brand" href="#top" aria-label="ExpertLinx home"><span className="brand-mark">E</span><span>ExpertLinx</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#services">Services</a><a href="#capabilities">Solutions</a><a href="#work">Case Studies</a><a href="#insights">Insights</a></nav>
      <a className="header-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
      <details className="mobile-menu"><summary aria-label="Open navigation menu"><span /><span /><span /></summary><nav aria-label="Mobile navigation"><a href="#services">Services</a><a href="#capabilities">Solutions</a><a href="#work">Case Studies</a><a href="#insights">Insights</a><a href="#contact">Let&apos;s talk</a></nav></details>
    </header>

    <main>
      <section className="hero ruled-background" aria-labelledby="hero-title">
        <div className="page-gutter hero-grid">
          <p className="micro-label hero-label" data-line-reveal>Microsoft · Cloud · AI · Software</p>
          <div className="mask-lines hero-heading-mask"><h1 id="hero-title" data-heading><span>Microsoft.</span><span>Cloud. AI.</span><span>Custom software.</span></h1></div>
          <div className="hero-bottom" data-reveal><p>One technology partner for the systems that move your organization forward.</p><a className="round-arrow" href="#services" aria-label="Explore services"><ArrowRight size={26} /></a></div>
        </div>
      </section>

      <section className="offerings" id="services" aria-labelledby="services-title">
        <div className="page-gutter chapter-heading" data-reveal><p className="micro-label">What we do</p><h2 id="services-title">Built for what&apos;s next.</h2></div>
        {offerings.map((offering) => <article className={`offering-row offering-${offering.tone}`} key={offering.number} data-offering><div className="page-gutter offering-grid"><span className="offering-number">{offering.number}</span><div className="offering-copy"><h3>{offering.title}</h3><p>{offering.summary}</p><ArrowLink>Explore the service</ArrowLink></div><OfferingVisual variant={offering.variant} /></div></article>)}
      </section>

      <section className="capabilities" id="capabilities" aria-labelledby="capabilities-title">
        <div className="page-gutter"><div className="capabilities-heading mask-lines"><p className="micro-label">The ExpertLinx difference</p><h2 id="capabilities-title" data-heading><span>One partner.</span><span>Every capability.</span></h2></div><ol className="capability-list">{capabilities.map(([number, title, body]) => <li key={number} data-capability><span className="capability-number">{number}</span><h3>{title}</h3><p>{body}</p><ArrowUpRight aria-hidden="true" size={24} /></li>)}</ol></div>
      </section>

      <section className="selected-work" id="work" aria-labelledby="work-title">
        <div className="page-gutter work-heading" data-reveal><p className="micro-label">Selected work</p><h2 id="work-title">Technology with<br />a job to do.</h2><p className="work-intro">Selected public examples from ExpertLinx client case studies.</p></div>
        <div className="page-gutter project-list">{projects.map((project) => <article className="project" key={project.number} data-project><span className="project-number">{project.number}</span><div className="project-copy"><p className="project-meta">{project.sector}</p><h3>{project.name}</h3><strong>{project.service}</strong><p>{project.description}</p><ArrowLink href="https://expertlinx.com/case-studies" light>View case study</ArrowLink></div><div className={`project-visual project-${project.tone}`} aria-hidden="true"><span>{project.monogram}</span><div className="project-axis axis-x" /><div className="project-axis axis-y" /><i className="project-point point-one" /><i className="project-point point-two" /></div></article>)}</div>
      </section>

      <section className="faq-section ruled-background" id="faq" aria-labelledby="faq-title">
        <div className="page-gutter faq-grid"><div className="faq-heading" data-reveal><p className="micro-label">FAQ</p><h2 id="faq-title">Questions?<br />We&apos;re here<br />to help.</h2><p>Can&apos;t find what you&apos;re looking for?</p><ArrowLink href="#contact">Contact us</ArrowLink></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0} data-reveal><summary>{question}<ChevronDown aria-hidden="true" size={22} /></summary><p>{answer}</p></details>)}</div></div>
      </section>

      <section className="insights" id="insights" aria-labelledby="insights-title">
        <div className="page-gutter insights-heading" data-reveal><p className="micro-label">Insights</p><h2 id="insights-title">Ideas for what&apos;s next.</h2></div>
        <div className="page-gutter insights-grid"><article className="lead-insight" data-reveal><a href="https://expertlinx.com/blog"><div className="insight-art" aria-hidden="true"><span>FIELD NOTES / 01</span><i /><i /><i /></div><p className="insight-meta">{insights[0].category}<time>{insights[0].date}</time></p><h3>{insights[0].title}</h3><ArrowUpRight aria-hidden="true" size={28} /></a></article><div className="insight-rows">{insights.slice(1).map((insight, index) => <article key={insight.title} data-reveal><a href="https://expertlinx.com/blog"><span className="insight-index">0{index + 2}</span><p className="insight-meta">{insight.category}<time>{insight.date}</time></p><h3>{insight.title}</h3><ArrowUpRight aria-hidden="true" size={24} /></a></article>)}<ArrowLink href="https://expertlinx.com/blog">View all insights</ArrowLink></div></div>
      </section>

      <section className="final-cta" id="contact"><div className="page-gutter cta-grid"><p className="micro-label">Start a conversation</p><div className="mask-lines"><h2 data-heading><span>Let&apos;s build</span><span>what comes next.</span></h2></div><div className="cta-bottom" data-reveal><p>Microsoft systems, cloud, AI or custom software—bring us the business challenge.</p><a className="cta-button" href="https://expertlinx.com/contact">Start a conversation <ArrowUpRight size={20} /></a></div></div></section>
    </main>

    <footer><div className="page-gutter footer-top"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark">E</span><span>ExpertLinx</span></a><p>Technology built around your business.</p></div><nav aria-label="Services"><p>Services</p><a href="#services">Microsoft Solutions</a><a href="#services">Cloud & Infrastructure</a><a href="#services">Custom Software & AI</a></nav><nav aria-label="Company"><p>Company</p><a href="#work">Case Studies</a><a href="#insights">Insights</a><a href="#contact">Contact</a></nav><nav aria-label="Connect"><p>Connect</p><a href="mailto:sales@expertlinx.com">sales@expertlinx.com</a><a href="tel:+12892050570">+1 (289) 205 0570</a></nav></div><div className="page-gutter footer-bottom"><span>© {new Date().getFullYear()} ExpertLinx. All rights reserved.</span><a href="#top">Back to top ↑</a></div></footer>
  </>;
}
