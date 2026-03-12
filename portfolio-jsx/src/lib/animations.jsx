const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};
const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.4, bounce: 0 } }
};
const fadeLeftItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.4, bounce: 0 } }
};
const springTransition = { type: "spring", duration: 0.4, bounce: 0 };
export {
  container,
  fadeLeftItem,
  fadeUpItem,
  springTransition
};
