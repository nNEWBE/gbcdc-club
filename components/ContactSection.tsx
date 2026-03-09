"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";
export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };
  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-50" ref={ref}>
      <div className="section-container">
        {}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-semibold uppercase tracking-widest rounded-full mb-4"
          >
            Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto"
          >
            Have questions or want to join? We&apos;d love to hear from you.
            Reach out through any of the channels below.
          </motion.p>
        </div>
        <div className="grid lg:grid-cols-5 gap-12">
          {}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            {}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@gbcdc.edu.bd",
                  href: "mailto:info@gbcdc.edu.bd",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+880-1234-567890",
                  href: "tel:+8801234567890",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "Gono Bishwabidyalay, Savar, Dhaka",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm font-medium text-black">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            {}
            <div>
              <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: MessageCircle, href: "#", label: "WhatsApp" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 rounded-full bg-white border border-border hover:bg-primary hover:text-white hover:border-primary flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            {}
            <div className="rounded-xl overflow-hidden border border-border h-48">
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
          </motion.div>
          {}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-border p-8 md:p-10 shadow-sm"
            >
              <h3 className="text-xl font-bold text-black mb-6">
                Send us a message
              </h3>
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
                    className="w-full px-4 py-3 rounded-xl border border-border bg-neutral-50 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all resize-none placeholder:text-neutral-400"
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
                    className="w-full px-4 py-3 rounded-xl border border-border bg-neutral-50 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/10 transition-all resize-none placeholder:text-neutral-400"
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
                  className="w-full px-4 py-3 rounded-xl border border-border bg-neutral-50 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10 transition-all placeholder:text-neutral-400"
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
                  className="w-full px-4 py-3 rounded-xl border border-border bg-neutral-50 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black/10 transition-all resize-none placeholder:text-neutral-400"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold transition-all duration-300 active:scale-[0.98] ${
                  submitted
                    ? "bg-green-600 text-white"
                    : "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                }`}
              >
                {submitted ? (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
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
        </div>
      </div>
    </section>
  );
}
