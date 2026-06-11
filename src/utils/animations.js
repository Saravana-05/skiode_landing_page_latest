/* ─── Prodmast-style smooth animation variants for Framer Motion ─── */

// Smooth fade up — the signature entrance
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94], // custom easeOutQuart
  },
})

// Fade up with spring — for cards
export const fadeUpSpring = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: {
    duration: 0.7,
    delay,
    type: 'spring',
    stiffness: 80,
    damping: 18,
  },
})

// Scale in — for logos, icons, badges
export const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: '-40px' },
  transition: {
    duration: 0.6,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
})

// Slide in from left
export const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

// Slide in from right
export const slideRight = (delay = 0) => ({
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

// Stagger container
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-60px' },
  variants: {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  },
})

// Stagger child variant
export const staggerChild = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// Stagger child with scale
export const staggerChildScale = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// Smooth hover lift
export const hoverLift = {
  whileHover: {
    y: -8,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

// Smooth hover scale
export const hoverScale = {
  whileHover: {
    scale: 1.03,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

// Text line reveal (clip path)
export const textReveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
})

// Badge / pill entrance
export const badgePop = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.7, y: 10 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.5,
    delay,
    type: 'spring',
    stiffness: 200,
    damping: 15,
  },
})

// Continuous float (for decorative elements)
export const floatY = (duration = 4, distance = 10) => ({
  animate: {
    y: [-distance, distance, -distance],
    transition: {
      duration,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
})

// Counter animation helper
export const counterAnimation = {
  duration: 2,
  ease: [0.25, 0.46, 0.45, 0.94],
}
