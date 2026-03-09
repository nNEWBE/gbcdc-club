"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const faqs = [
  {
    q: "How can I become a member of GBCDC?",
    a: "You can apply for membership by filling out the registration form on our Contact page or visiting the GBCDC club office during operating hours. Membership is open to all students of Gono Bishwabidyalay.",
  },
  {
    q: "What is the membership fee?",
    a: "The annual membership fee is ৳200 BDT, which covers access to all workshops, events, networking sessions, and exclusive resources throughout the academic year.",
  },
  {
    q: "Do you offer certificates for courses?",
    a: "Yes! All our courses and training programs include certificates of completion. Some specialized programs also offer industry-recognized certificates from our partner organizations.",
  },
  {
    q: "Can non-members attend events?",
    a: "Select open events are available to all students. However, workshops, bootcamps, and networking sessions are exclusive to members. Check our Events page for details on event accessibility.",
  },
  {
    q: "How do I volunteer for GBCDC events?",
    a: "Volunteer opportunities are posted on our Notices page. You can also register your interest through the contact form below or visit the club office to join the volunteer roster.",
  },
];

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <main className="min-h-screen pt-28 pb-20" ref={ref}>
      {/* Hero */}
      <section className="pb-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4"
            >
              <Mail size={14} />
              Contact
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Have questions, want to collaborate, or ready to join? We&apos;d
              love to hear from you.
            </motion.p>
          </div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "info@gbcdc.edu.bd",
                href: "mailto:info@gbcdc.edu.bd",
                desc: "We reply within 24 hours",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+880-1234-567890",
                href: "tel:+8801234567890",
                desc: "Mon-Fri, 9AM-5PM",
              },
              {
                icon: MapPin,
                label: "Address",
                value: "Gono Bishwabidyalay, Savar",
                href: "#map",
                desc: "Club Office, Room 104",
              },
              {
                icon: Clock,
                label: "Office Hours",
                value: "Sun-Thu, 9AM-6PM",
                href: "#",
                desc: "Sat 10AM-2PM",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-start gap-4 p-5 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <item.icon size={18} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-black">
                    {item.value}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">{item.desc}</div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form + Info */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-neutral-200/80 p-8 md:p-10 shadow-sm"
              >
                <h3 className="text-xl font-bold text-black mb-2">
                  Send us a message
                </h3>
                <p className="text-sm text-neutral-400 mb-6">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all resize-none placeholder:text-neutral-400"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-neutral-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all resize-none placeholder:text-neutral-400"
                      required
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all placeholder:text-neutral-400"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Write your message here..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all resize-none placeholder:text-neutral-400"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 active:scale-[0.98] cursor-pointer ${
                    submitted
                      ? "bg-green-600 text-white"
                      : "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Side Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Social Links */}
              <div className="bg-neutral-50 rounded-2xl border border-neutral-100 p-6">
                <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-4">
                  Follow Us
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Facebook, label: "Facebook", handle: "@gbcdc.official", href: "#" },
                    { icon: Linkedin, label: "LinkedIn", handle: "@gbcdc", href: "#" },
                    { icon: Instagram, label: "Instagram", handle: "@gbcdc_official", href: "#" },
                    { icon: MessageCircle, label: "WhatsApp", handle: "Group Chat", href: "#" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-neutral-200/80 hover:border-primary/30 hover:shadow-md transition-all duration-300 group cursor-pointer"
                      aria-label={social.label}
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <social.icon size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-black">{social.label}</div>
                        <div className="text-xs text-neutral-400">{social.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div id="map" className="rounded-2xl overflow-hidden border border-neutral-200 h-56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.3!2d90.26!3d23.86!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUxJzM2LjAiTiA5MMKwMTUnMzYuMCJF!5e0!3m2!1sen!2sbd!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GBCDC Location"
                />
              </div>

              {/* Quick Join CTA */}
              <div className="bg-primary rounded-2xl p-6 text-white">
                <h4 className="text-lg font-bold mb-2">Want to join GBCDC?</h4>
                <p className="text-sm text-white/80 mb-4 leading-relaxed">
                  Membership is open to all students. Get access to exclusive events,
                  workshops, mentorship, and more.
                </p>
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-200 cursor-pointer"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="section-container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-neutral-500 text-lg max-w-xl mx-auto">
              Quick answers to the most common questions about GBCDC.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="text-sm font-semibold text-black pr-4">{faq.q}</span>
                  <span className={`shrink-0 w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 transition-transform duration-300 ${expandedFaq === i ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {expandedFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-5 pb-5"
                  >
                    <p className="text-sm text-neutral-500 leading-relaxed border-t border-neutral-100 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
