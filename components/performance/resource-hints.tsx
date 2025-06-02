export default function ResourceHints() {
  return (
    <>
      {/* Preload critical resources */}
      <link rel="preload" href="/hero-image.webp" as="image" />
      <link rel="preload" href="/main.css" as="style" />

      {/* Prefetch important pages */}
      <link rel="prefetch" href="/blog" />
      <link rel="prefetch" href="/projects" />

      {/* DNS prefetch for third-party domains */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* Preconnect to important third-party origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  )
}
