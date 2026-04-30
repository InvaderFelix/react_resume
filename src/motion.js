export const pageTransition = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },

  transition: {
    duration: 0.22,
    ease: [0.25, 0.1, 0.25, 1] // smooth
  }
};