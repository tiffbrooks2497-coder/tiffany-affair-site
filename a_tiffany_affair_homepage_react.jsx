import React from "react";
import { motion } from "framer-motion";

// Single-file React component (TailwindCSS + Framer Motion + shadcn/ui-ready structure)
// Usage: Drop this component into a Next.js / Create React App project with Tailwind configured.
// - Tailwind should be enabled in your project.
// - framer-motion installed for simple entrance animations.
// - shadcn/ui components are optionally referenced; replace with your own components if not available.

export default function TiffanyHomepage() {
  return (
    <div className="min-h-screen font-sans text-gray-900 antialiased bg-ivory-50">
      {/* HERO */}
      <header className="relative bg-[center/cover]" style={{ backgroundImage: `url('/images/hero.jpg')` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-ivory-50/60 to-white/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24 pt-20">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-md bg-white/60 flex items-center justify-center shadow">
                <span className="text-xl font-serif text-gold-600">A</span>
              </div>
              <span className="sr-only">A Tiffany Affair and Design</span>
            </div>
            <div className="hidden md:flex gap-8 items-center text-sm uppercase tracking-wider">
              <a href="#services" className="hover:text-gold-600">Services</a>
              <a href="#portfolio" className="hover:text-gold-600">Portfolio</a>
              <a href="#about" className="hover:text-gold-600">About</a>
              <a href="#contact" className="hover:text-gold-600">Contact</a>
            </div>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-6xl leading-tight text-gray-900">
              Luxury Event Planning &amp; Décor Services
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Crafting unforgettable experiences with timeless design.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#contact"
                className="inline-block px-8 py-3 rounded-md border border-gold-600 bg-gold-600 text-white font-medium shadow-md hover:brightness-95"
              >
                Start Planning
              </a>
              <a
                href="#portfolio"
                className="inline-block px-6 py-3 rounded-md text-gold-600 font-medium border border-transparent hover:underline"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 -mt-16">
        {/* ABOUT TEASER */}
        <section id="about" className="bg-white rounded-2xl shadow-lg p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="aspect-[4/3] bg-cover bg-center rounded-xl overflow-hidden" style={{ backgroundImage: `url('/images/about-portrait.jpg')` }} />
          <div>
            <h2 className="font-serif text-3xl">Meet Tiffany</h2>
            <p className="mt-4 text-gray-600">I blend editorial sensibility with meticulous planning to create events that feel curated, vibrant, and utterly personal. From intimate gatherings to grand celebrations, every detail matters.</p>
            <a href="/about" className="inline-block mt-6 text-gold-600 font-medium">Learn more →</a>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mt-10">
          <h3 className="font-serif text-2xl mb-6">Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Event Planning', desc: 'Full-service planning from concept to day-of management.' },
              { title: 'Design & Styling', desc: 'Bespoke design direction, rentals, and installation.' },
              { title: 'Décor Rentals', desc: 'Curated rentals for tablescapes, lounges, and more.' },
            ].map((s) => (
              <article key={s.title} className="p-6 bg-white rounded-lg shadow-sm border">
                <div className="h-12 w-12 rounded-md flex items-center justify-center bg-ivory-100 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v2" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg">{s.title}</h4>
                <p className="mt-2 text-gray-600">{s.desc}</p>
                <a href="/services" className="mt-4 inline-block text-gold-600">Explore →</a>
              </article>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="mt-12">
          <h3 className="font-serif text-2xl mb-6">Featured Work</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {new Array(6).fill(0).map((_, i) => (
              <figure key={i} className="rounded-lg overflow-hidden bg-gray-100">
                <img src={`/images/portfolio-${i + 1}.jpg`} alt={`Portfolio ${i + 1}`} className="w-full h-64 object-cover" />
                <figcaption className="p-4 bg-white">
                  <div className="text-sm font-semibold">Elegant Coastal Wedding</div>
                  <div className="text-xs text-gray-500 mt-1">Wedding • 150 guests</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="/gallery" className="inline-block px-6 py-3 border rounded-md font-medium border-gold-600 text-gold-600">View Full Gallery</a>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-12 bg-ivory-50 rounded-2xl p-8">
          <h3 className="font-serif text-2xl mb-6">What clients say</h3>
          <div className="space-y-6 md:flex md:gap-6 md:space-y-0">
            {[
              { quote: 'Tiffany made our day effortless and stunning beyond imagination.', name: '— K. & J.' },
              { quote: 'The design felt personal and elevated. Guests were blown away.', name: '— L. S.' },
            ].map((t, idx) => (
              <blockquote key={idx} className="flex-1 bg-white p-6 rounded-lg shadow-sm border">
                <p className="italic text-gray-700">“{t.quote}”</p>
                <div className="mt-4 text-sm font-semibold text-gray-600">{t.name}</div>
              </blockquote>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/cta.jpg')] bg-center bg-cover opacity-30" />
          <div className="relative z-10 p-8 md:p-20 text-center bg-gradient-to-r from-white/80 to-ivory-50/80">
            <h3 className="font-serif text-3xl">Your Dream Event, Perfectly Designed.</h3>
            <p className="mt-4 text-gray-600">Connect with our team to start planning an experience your guests will never forget.</p>
            <a href="#contact" className="mt-6 inline-block px-8 py-3 rounded-md bg-gold-600 text-white font-medium">Let’s Get Started</a>
          </div>
        </section>

        {/* CONTACT FORM PLACEHOLDER */}
        <section id="contact" className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="font-serif text-2xl mb-6">Start your inquiry</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="p-3 border rounded-md" placeholder="Name" />
            <input className="p-3 border rounded-md" placeholder="Email" />
            <input className="p-3 border rounded-md" placeholder="Phone (optional)" />
            <input className="p-3 border rounded-md" placeholder="Event Date" />
            <textarea className="p-3 border rounded-md md:col-span-2" rows={4} placeholder="Tell us about your event / vision" />
            <div className="md:col-span-2 flex items-center gap-4">
              <button type="submit" className="px-6 py-3 bg-gold-600 text-white rounded-md">Send Inquiry</button>
              <span className="text-sm text-gray-600">We typically reply within 2 business days.</span>
            </div>
          </form>
        </section>

        {/* FOOTER */}
        <footer className="mt-12 py-12 text-sm text-gray-700">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div>
              <div className="font-serif text-xl">A Tiffany Affair</div>
              <div className="mt-2 text-gray-600">Luxury Event Planning &amp; Décor Services</div>
            </div>
            <div>
              <div className="font-semibold">Quick Links</div>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/gallery">Gallery</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Contact</div>
              <div className="mt-3 text-gray-600">Email: hello@atiffanyaffair.com<br />Phone: (555) 555-5555</div>
            </div>
          </div>
          <div className="mt-10 text-center text-gray-500">© {new Date().getFullYear()} A Tiffany Affair and Design</div>
        </footer>
      </main>

      {/* Tailwind color hints (place in your tailwind config):
        colors: {
          'ivory-50': '#FBF8F5',
          'gold-600': '#B98B4A',
          'ivory-100': '#F6F2EE'
        }
      */}
    </div>
  );
}
