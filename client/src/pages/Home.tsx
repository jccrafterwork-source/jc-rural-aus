/**
 * JC RURAL AUS — Tasmanian Field Ledger
 * This page follows a rugged rural field-guide editorial style: eucalypt ink,
 * warm paper, strong signage typography, practical service hierarchy, and clear contact paths.
 */
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Facebook,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  Scissors,
  ShieldCheck,
  Sprout,
  Tractor,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const logoUrl = "/manus-storage/jc-rural-field-stamp-logo_0d815147.png";

// UTM tracking parameters for social and business profile links
const trackingParams = {
  facebook: "?utm_source=jcruralaus_website&utm_medium=social&utm_campaign=engagement",
  googleBusiness: "?utm_source=jcruralaus_website&utm_medium=business_profile&utm_campaign=engagement",
};

// Social and business profile URLs with tracking
const socialLinks = {
  facebook: `https://www.facebook.com/search/top/?q=JC%20RURAL%20AUS${trackingParams.facebook}`,
  googleBusiness: `https://www.google.com/search?q=JC+Rural+AUS+Tasmania${trackingParams.googleBusiness}`,
};

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Rates", href: "#rates" },
  { label: "How it works", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    number: "01",
    title: "Lamb marking",
    description: "Careful, experienced labour for an efficient marking day.",
    rate: "$2.00",
    unit: "per head",
    icon: BadgeCheck,
  },
  {
    number: "02",
    title: "Fencing",
    description: "Practical rural fencing completed with attention to the finish.",
    rate: "$6.00",
    unit: "per metre · labour only",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Shearing support",
    description: "An experienced extra hand to keep the shed moving smoothly.",
    rate: "$50.00",
    unit: "per hour",
    icon: Scissors,
  },
  {
    number: "04",
    title: "Livestock handling",
    description: "Yard work, drafting and moving stock with calm, capable support.",
    rate: "$50.00",
    unit: "per hour",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Tractor operations",
    description: "Tractor work including slashing, spraying, spreading and more.",
    rate: "$60.00",
    unit: "per hour",
    icon: Tractor,
  },
  {
    number: "06",
    title: "General farm labour",
    description: "The extra set of hands that helps keep the whole farm on track.",
    rate: "$50.00",
    unit: "per hour",
    icon: UserRound,
  },
];

const workSteps = [
  {
    number: "01",
    title: "Tell us the job",
    description:
      "Call or email with the work, location and the time you need a hand.",
  },
  {
    number: "02",
    title: "Get a clear rate",
    description:
      "We will confirm the labour-only rate and flag any equipment, fuel or materials needed.",
  },
  {
    number: "03",
    title: "Keep the farm moving",
    description:
      "We turn up prepared, work hard, and leave the job site in good order.",
  },
];

function scrollToSection(href: string) {
  const target = document.querySelector(href);
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <div id="top" className="site-shell">
      <div className="site-grain" aria-hidden="true" />

      <header className="site-header">
        <div className="header-inner">
          <a className="brand-lockup" href="#top" aria-label="JC Rural AUS home">
            <span className="brand-mark-wrap">
              <img className="brand-mark" src={logoUrl} alt="" />
            </span>
            <span className="brand-name">
              <strong>JC Rural</strong>
              <small>Farm contracting · Tasmania</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => scrollToSection(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>

          <Button asChild className="header-call">
            <a href="tel:+61459646941">
              <Phone aria-hidden="true" />
              <span>0459 646 941</span>
            </a>
          </Button>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => handleNavClick(item.href)}>
                {item.label}
                <ChevronRight aria-hidden="true" />
              </a>
            ))}
            <a className="mobile-phone" href="tel:+61459646941">
              <Phone aria-hidden="true" /> Call 0459 646 941
            </a>
          </nav>
        )}
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/manus-storage/jc-rural-hero-tasmanian-dusk_29984fdc.jpg"
            alt="Farm contractor beside a rural gate in a Tasmanian paddock"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-rule" aria-hidden="true" />

          <div className="hero-content section-frame">
            <div className="hero-copy reveal-up">
              <p className="eyebrow eyebrow-light">
                <Sprout aria-hidden="true" /> Tasmania-wide farm contracting
              </p>
              <h1 id="hero-title">
                You relax.
                <span>We get it done.</span>
              </h1>
              <p className="hero-intro">
                Reliable, hardworking support for the jobs that keep a farm running smoothly —
                from fencing and livestock work to tractor operations and general farm labour.
              </p>
              <div className="hero-actions">
                <a className="action-button action-button-primary" href="tel:+61459646941">
                  <Phone aria-hidden="true" />
                  Call for a quote
                </a>
                <a className="action-button action-button-ghost" href="#services" onClick={() => scrollToSection("#services")}>
                  Explore services <ArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>

            <aside className="hero-ledger reveal-up reveal-delay" aria-label="JC Rural AUS service promise">
              <div className="ledger-topline">
                <span>Field note</span>
                <span>EST. 2024</span>
              </div>
              <img className="hero-stamp" src={logoUrl} alt="JC Rural AUS field stamp" />
              <div className="ledger-copy">
                <p>Reliable hands.</p>
                <p>Clear rates.</p>
                <p>Tasmania-wide.</p>
              </div>
              <a href="#contact" onClick={() => scrollToSection("#contact")} className="ledger-link">
                Book a conversation <ArrowRight aria-hidden="true" />
              </a>
            </aside>
          </div>

          <div className="hero-footer section-frame" aria-label="JC Rural AUS qualities">
            <span><Check aria-hidden="true" /> Reliable &amp; hardworking</span>
            <span><Check aria-hidden="true" /> Quality workmanship</span>
            <span><Check aria-hidden="true" /> Attention to detail</span>
            <span><MapPin aria-hidden="true" /> Tasmania wide</span>
          </div>
        </section>

        <section className="intro-band" aria-labelledby="intro-title">
          <div className="section-frame intro-layout">
            <div className="intro-index" aria-hidden="true">
              <span>01</span>
              <div />
              <small>JC Rural AUS</small>
            </div>
            <div className="intro-copy">
              <p className="eyebrow">Straightforward support for rural jobs</p>
              <h2 id="intro-title">An extra hand when the work cannot wait.</h2>
              <p>
                JC Rural AUS provides practical farm contracting support for landholders across
                Tasmania. No job is too big or too small — the focus is on showing up, working
                safely and helping you move the day forward.
              </p>
            </div>
            <div className="intro-quote">
              <Wrench aria-hidden="true" />
              <p>“Hardworking, professional and ready to help.”</p>
            </div>
          </div>
        </section>

        <section id="services" className="services-section section-frame" aria-labelledby="services-title">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">What we can help with</p>
              <h2 id="services-title">Farm work, clearly priced.</h2>
            </div>
            <p className="section-aside">
              Choose the support you need. Every listed rate is a labour-only rate, so you know
              where you stand before the job starts.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-row" key={service.number}>
                  <div className="service-meta">
                    <span className="service-number">{service.number}</span>
                    <span className="service-icon"><Icon aria-hidden="true" /></span>
                  </div>
                  <div className="service-detail">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-rate">
                    <strong>{service.rate}</strong>
                    <span>{service.unit}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="rates" className="rates-section" aria-labelledby="rates-title">
          <div className="section-frame rates-layout">
            <div className="rates-copy">
              <p className="eyebrow eyebrow-light"><CircleDollarSign aria-hidden="true" /> Labour-only rates</p>
              <h2 id="rates-title">Clear labour rates. No guesswork.</h2>
              <p>
                The displayed service rates cover labour only. We will talk through the job before
                work starts so equipment, fuel and materials can be considered separately.
              </p>
              <div className="rates-points">
                <div><Check aria-hidden="true" /><span>Rates are confirmed before the job begins.</span></div>
                <div><Check aria-hidden="true" /><span>Equipment, fuel and materials are additional.</span></div>
                <div><Check aria-hidden="true" /><span>Ask about the work you need done.</span></div>
              </div>
              <a className="text-link text-link-light" href="tel:+61459646941">
                Speak about your job <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <figure className="rates-photo">
              <img
                src="/manus-storage/jc-rural-tractor-field_f1cf1e34.jpg"
                alt="Tractor completing field operations in a rural paddock"
                loading="lazy"
              />
              <figcaption>
                <Clock3 aria-hidden="true" /> Practical help, when you need it.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="field-stories section-frame" aria-label="JC Rural AUS work in the field">
          <article className="story-card story-card-wide">
            <img
              src="/manus-storage/jc-rural-livestock-handling_2a85d4e8.jpg"
              alt="Farm worker handling sheep in rural yards"
              loading="lazy"
            />
            <div className="story-overlay" />
            <div className="story-content">
              <p className="eyebrow eyebrow-light">Livestock handling</p>
              <h3>Calm, capable support in the yards.</h3>
              <p>Drafting, moving and yard work handled with practical care.</p>
            </div>
          </article>
          <article className="story-card story-card-tall">
            <img
              src="/manus-storage/jc-rural-fencing-detail_86ff1ce2.jpg"
              alt="Rural wire fence and hardwood strainer post"
              loading="lazy"
            />
            <div className="story-overlay" />
            <div className="story-content">
              <p className="eyebrow eyebrow-light">Fencing</p>
              <h3>Good lines. Solid work.</h3>
              <a href="#contact" onClick={() => scrollToSection("#contact")}>
                Discuss your fencing <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </article>
        </section>

        <section id="process" className="process-section" aria-labelledby="process-title">
          <div className="section-frame">
            <div className="section-heading process-heading">
              <div>
                <p className="eyebrow">Working together</p>
                <h2 id="process-title">Simple from first call to finished job.</h2>
              </div>
              <span className="process-tag"><Sprout aria-hidden="true" /> Built for the real workday</span>
            </div>
            <ol className="process-list">
              {workSteps.map((step) => (
                <li key={step.number}>
                  <span className="process-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="section-frame contact-layout">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light">Ready when you are</p>
              <h2 id="contact-title">Tell us what needs doing.</h2>
              <p>
                Need a reliable hand on the farm? Give JC Rural AUS a call or send through the
                job details. We will help you work out the next step.
              </p>
              <div className="contact-actions">
                <a className="action-button action-button-primary" href="tel:+61459646941">
                  <Phone aria-hidden="true" /> 0459 646 941
                </a>
                <a className="action-button action-button-ghost" href="mailto:jcruralaus@gmail.com">
                  <Mail aria-hidden="true" /> Send an email
                </a>
              </div>
            </div>

            <aside className="contact-ledger" aria-label="JC Rural AUS contact details">
              <div className="contact-stamp-wrap">
                <img src={logoUrl} alt="JC Rural AUS field stamp" />
              </div>
              <div className="contact-list">
                <a href="tel:+61459646941"><Phone aria-hidden="true" /><span><small>Call</small>0459 646 941</span></a>
                <a href="mailto:jcruralaus@gmail.com"><Mail aria-hidden="true" /><span><small>Email</small>jcruralaus@gmail.com</span></a>
                <span><MapPin aria-hidden="true" /><span><small>Coverage</small>Tasmania wide</span></span>
                <a href={socialLinks.facebook} target="_blank" rel="noreferrer"><Facebook aria-hidden="true" /><span><small>Facebook</small>JC Rural AUS</span></a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-frame footer-inner">
          <div className="footer-brand">
            <img src={logoUrl} alt="" />
            <span><strong>JC Rural AUS</strong><small>You relax, we get it done.</small></span>
          </div>
          <p>Farm contracting support across Tasmania.</p>
          <div className="footer-social-links" style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="JC Rural AUS on Facebook" title="Follow us on Facebook">
              <Facebook aria-hidden="true" style={{ width: "18px", height: "18px" }} />
            </a>
            <a href={socialLinks.googleBusiness} target="_blank" rel="noreferrer" aria-label="JC Rural AUS on Google Business" title="Find us on Google">
              <MapPin aria-hidden="true" style={{ width: "18px", height: "18px" }} />
            </a>
          </div>
          <a href="#top" onClick={() => scrollToSection("#top")}>Back to top <ArrowRight aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
}
