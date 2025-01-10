import React from 'react';
import './PartnerLogos.css';

const partnerLogos = [
  {
    src: "https://i.ibb.co/qDLKgMF/ALBEDENSLOGO-bwps.png",
    alt: "Albedens"
  },
  {
    src: "https://i.ibb.co/j4CHvG8/White-on-Black.png",
    alt: "Ivana"
  },
  {
    src: "https://www.svgrepo.com/show/331630/upwork.svg",
    alt: "Upwork"
  },
  {
    src: "https://pnghq.com/wp-content/uploads/pnghq.com-beatstars-logo-png-2730-download-1536x1536.png",
    alt: "Beatstars"
  },
  {
    src: "https://shiftdiff.com/wp-content/uploads/2018/12/sutherland-logo_color-stacked-1.png",
    alt: "Sutherland"
  },
  {
    src: "https://myhost.nz/assets/people/MyHost-logo-blog.jpeg",
    alt: "MyHost"
  },
  {
    src: "https://th.bing.com/th/id/R.5dfaea3c7a12a3daaac40463f971029a?rik=5FhtrWk5ZAPZCA",
    alt: "Unitec"
  },
  {
    src: "https://logodix.com/logo/1577919.png",
    alt: "FL Studio"
  },
  {
    src: "https://www.pngall.com/wp-content/uploads/10/Beats-Logo-PNG-Free-Image.png",
    alt: "Beats"
  }
];

const PartnerLogos = () => {
  return (
    <div className="partner-logos-container bg-deep-black py-16">
      <h2 className="text-2xl font-bold text-center text-pure-white mb-12">Our Partners & Clients</h2>
      <div className="carousel">
        <div className="carousel-track">
          {/* First set of logos */}
          <div className="carousel-content">
            {partnerLogos.map((logo, index) => (
              <img 
                key={`logo-1-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="partner-logo"
              />
            ))}
          </div>
          {/* Duplicate set for seamless scrolling */}
          <div className="carousel-content">
            {partnerLogos.map((logo, index) => (
              <img 
                key={`logo-2-${index}`}
                src={logo.src}
                alt={logo.alt}
                className="partner-logo"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;