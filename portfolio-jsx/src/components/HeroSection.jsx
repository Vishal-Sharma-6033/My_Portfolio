import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FolderOpen } from "lucide-react";
import { useEffect, useRef } from "react";
const HeroSection = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationId;
    const dots = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 60; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");
      const dotColor = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)";
      const lineColor = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";
      dots.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ React.createElement("section", { className: "relative min-h-svh flex items-center justify-center overflow-hidden" }, /* @__PURE__ */ React.createElement("canvas", { ref: canvasRef, className: "absolute inset-0 pointer-events-none" }), /* @__PURE__ */ React.createElement("div", { className: "section-container text-center relative z-10" }, /* @__PURE__ */ React.createElement(
    motion.p,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, delay: 0.2 },
      className: "text-sm font-medium tracking-widest uppercase text-accent mb-4"
    },
    "MERN Stack Developer"
  ), /* @__PURE__ */ React.createElement(
    motion.h1,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, delay: 0.3 },
      className: "text-hero font-bold text-foreground leading-[1.1] mb-6"
    },
    "Building scalable,",
    /* @__PURE__ */ React.createElement("br", null),
    "user-focused web",
    /* @__PURE__ */ React.createElement("br", null),
    /* @__PURE__ */ React.createElement("span", { className: "text-accent" }, "applications.")
  ), /* @__PURE__ */ React.createElement(
    motion.p,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, delay: 0.4 },
      className: "text-lg text-muted-foreground max-w-[50ch] mx-auto mb-10 leading-relaxed"
    },
    "Full-stack developer crafting performant, accessible web experiences with MongoDB, Express, React, and Node.js."
  ), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, delay: 0.5 },
      className: "flex flex-col sm:flex-row items-center justify-center gap-4"
    },
    /* @__PURE__ */ React.createElement(
      motion.a,
      {
        href: "#projects",
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.98 },
        className: "bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
      },
      /* @__PURE__ */ React.createElement(FolderOpen, { size: 18 }),
      "View Projects"
    ),
    /* @__PURE__ */ React.createElement(
      motion.a,
      {
        href: "#contact",
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.98 },
        className: "px-6 py-3 rounded-lg font-medium text-foreground border border-border inline-flex items-center gap-2 hover:border-muted-foreground transition-colors"
      },
      "Contact Me"
    )
  )), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { delay: 1, duration: 0.5 },
      className: "absolute bottom-8 left-1/2 -translate-x-1/2"
    },
    /* @__PURE__ */ React.createElement(ArrowDown, { size: 20, className: "text-muted-foreground animate-bounce" })
  ));
};
var HeroSection_default = HeroSection;
export {
  HeroSection_default as default
};
