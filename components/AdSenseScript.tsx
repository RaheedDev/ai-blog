import Script from 'next/script'

export default function AdSenseScript() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}

// AdSense Banner Component
export function AdSenseBanner({ 
  adSlot, 
  adFormat = "auto",
  fullWidthResponsive = true 
}: {
  adSlot: string
  adFormat?: string
  fullWidthResponsive?: boolean
}) {
  return (
    <div className="neo-card my-8 text-center">
      <p className="text-sm text-neo-black/60 mb-4 font-mono uppercase tracking-wide">
        Advertisement
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXXX"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      />
    </div>
  )
}