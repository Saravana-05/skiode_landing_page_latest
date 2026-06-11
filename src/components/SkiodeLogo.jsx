/**
 * SkiodeLogo
 *
 * SVG recreation of the skiode brand logo.
 * Props:
 *   variant  — "full" (pill + wordmark, default) | "wordmark" (text only, no pill background)
 *   size     — height in px, width scales proportionally (default 36)
 *   className — extra classes on the root element
 *
 * HOW TO SWAP:
 *   Replace the entire return body with:
 *     <img src="/assets/skiode-logo.png" alt="skiode" style={{ height: size }} className={className} />
 *   or reference the SVG file directly.
 */
export default function SkiodeLogo({ variant = "full", size = 36, className = "" }) {
  if (variant === "wordmark") {
    /* Text-only variant — transparent background, suits dark navbars */
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        viewBox="0 0 160 48"
        fill="none"
        className={className}
        aria-label="skiode"
      >
        {/* s */}
        <text x="4" y="36" fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontWeight="800" fontSize="34" fill="white">s</text>
        {/* k */}
        <text x="26" y="36" fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontWeight="800" fontSize="34" fill="white">k</text>
        {/* i stem — blue */}
        <text x="50" y="36" fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontWeight="800" fontSize="34" fill="#3b82f6">i</text>
        {/* i dot — lime green, replaces the font dot */}
        <circle cx="57" cy="7" r="4.5" fill="#84cc16" />
        {/* o — blue */}
        <text x="62" y="36" fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontWeight="800" fontSize="34" fill="#3b82f6">o</text>
        {/* d */}
        <text x="88" y="36" fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontWeight="800" fontSize="34" fill="white">d</text>
        {/* e */}
        <text x="113" y="36" fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontWeight="800" fontSize="34" fill="white">e</text>
      </svg>
    )
  }

  /* Full variant — dark pill background (matches the uploaded logo exactly) */
  const pillW = size * (880 / 200)   // maintain original aspect ratio ~4.4:1
  const pillH = size

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={pillW}
      height={pillH}
      viewBox="0 0 880 200"
      fill="none"
      className={className}
      aria-label="skiode"
    >
      {/* Pill background */}
      <rect width="880" height="200" rx="36" fill="#3a3a3a" />

      {/* s — white */}
      <text x="60" y="148" fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontWeight="800" fontSize="130" fill="white">s</text>
      {/* k — white */}
      <text x="178" y="148" fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontWeight="800" fontSize="130" fill="white">k</text>
      {/* i — blue stem (dotless), green dot manually placed */}
      <text x="320" y="148" fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontWeight="800" fontSize="130" fill="#3b82f6">i</text>
      {/* i dot — lime green */}
      <circle cx="344" cy="28" r="20" fill="#84cc16" />
      {/* o — blue */}
      <text x="368" y="148" fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontWeight="800" fontSize="130" fill="#3b82f6">o</text>
      {/* d — white */}
      <text x="518" y="148" fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontWeight="800" fontSize="130" fill="white">d</text>
      {/* e — white */}
      <text x="660" y="148" fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontWeight="800" fontSize="130" fill="white">e</text>
    </svg>
  )
}
