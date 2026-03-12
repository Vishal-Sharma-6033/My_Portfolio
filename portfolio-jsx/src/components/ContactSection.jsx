import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const CONTACT_EMAIL = "vishalsharma952877@gmail.com";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          className="mb-12"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">Contact</p>
          <h2 className="text-section font-bold text-foreground">
            Let&apos;s work <span className="text-accent">together.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-[50ch]">
              Have a project in mind or want to discuss an opportunity? I&apos;d love to hear from you. Fill out
              the form or reach out directly.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-accent" />
                <span className="text-sm">{CONTACT_EMAIL}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-accent" />
                <span className="text-sm">India</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.2 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full h-11 px-4 rounded-lg bg-transparent text-foreground text-sm placeholder:text-muted-foreground shadow-[inset_0_0_0_1px_hsl(var(--border))] focus:shadow-[inset_0_0_0_1px_hsl(var(--accent)),0_0_0_3px_hsl(var(--accent)/0.2)] outline-none transition-shadow duration-200"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-11 px-4 rounded-lg bg-transparent text-foreground text-sm placeholder:text-muted-foreground shadow-[inset_0_0_0_1px_hsl(var(--border))] focus:shadow-[inset_0_0_0_1px_hsl(var(--accent)),0_0_0_3px_hsl(var(--accent)/0.2)] outline-none transition-shadow duration-200"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-transparent text-foreground text-sm placeholder:text-muted-foreground shadow-[inset_0_0_0_1px_hsl(var(--border))] focus:shadow-[inset_0_0_0_1px_hsl(var(--accent)),0_0_0_3px_hsl(var(--accent)/0.2)] outline-none transition-shadow duration-200 resize-none"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
            >
              <Send size={16} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
