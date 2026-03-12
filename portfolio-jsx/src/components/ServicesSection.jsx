import React from "react";
import { motion } from "framer-motion";
import { Globe, Server, Zap, Database, LayoutDashboard, Code2 } from "lucide-react";
import { container, fadeUpItem as item } from "@/lib/animations";
const services = [
  { icon: Globe, title: "Full Stack Web Apps", description: "End-to-end web applications with React frontend and Node.js backend, deployed to production." },
  { icon: Server, title: "REST API Development", description: "Scalable, well-documented APIs with Express.js, proper authentication, and error handling." },
  { icon: Zap, title: "Real-time Applications", description: "Live collaboration tools, chat systems, and notifications powered by Socket.IO and WebSockets." },
  { icon: Database, title: "Database Design", description: "Efficient MongoDB schemas and data modeling. Query optimization and indexing strategies." },
  { icon: LayoutDashboard, title: "Admin Dashboards", description: "Data-rich admin panels with charts, analytics, user management, and role-based access control." },
  { icon: Code2, title: "Frontend Development", description: "Responsive, accessible UIs built with React.js, modern CSS, and component-driven architecture." }
];
const ServicesSection = () => {
  return /* @__PURE__ */ React.createElement("section", { id: "services", className: "py-24" }, /* @__PURE__ */ React.createElement("div", { className: "section-container" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { type: "spring", duration: 0.4, bounce: 0 },
      className: "mb-12"
    },
    /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium tracking-widest uppercase text-accent mb-2" }, "Services"),
    /* @__PURE__ */ React.createElement("h2", { className: "text-section font-bold text-foreground" }, "What I can ", /* @__PURE__ */ React.createElement("span", { className: "text-accent" }, "build."))
  ), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      variants: container,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true },
      className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
    },
    services.map((service) => /* @__PURE__ */ React.createElement(
      motion.div,
      {
        key: service.title,
        variants: item,
        className: "bg-card rounded-xl p-6 card-shadow group"
      },
      /* @__PURE__ */ React.createElement(service.icon, { size: 24, className: "text-accent mb-4" }),
      /* @__PURE__ */ React.createElement("h3", { className: "font-bold text-foreground mb-2" }, service.title),
      /* @__PURE__ */ React.createElement("p", { className: "text-sm text-muted-foreground leading-relaxed" }, service.description)
    ))
  )));
};
var ServicesSection_default = ServicesSection;
export {
  ServicesSection_default as default
};
