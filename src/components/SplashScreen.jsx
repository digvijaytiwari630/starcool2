import React, { useEffect, useState } from 'react';

export default function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 500);
    }, 1500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-navy-dark flex flex-col items-center justify-center p-4 transition-all duration-500 ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      <div class="relative flex flex-col items-center max-w-sm w-full px-4">
        {/* Glow Aura */}
        <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-gold/30 via-electric/30 to-gold/30 blur-2xl animate-pulse"></div>

        {/* Logo Container */}
        <div className="relative z-10 p-2.5 bg-navy-card rounded-2xl border-2 border-gold/50 shadow-2xl shadow-gold/30 mb-6 w-full">
          <img
            src="/assets/starcool-logo.jpg"
            alt="STAR COOL AIR CON 3D Metallic Banner"
            className="w-full h-auto rounded-xl object-contain shadow-lg"
          />
        </div>

        {/* Glowing Airflow Effect */}
        <div className="flex items-center gap-3 mb-4 animate-airflow">
          <i className="fa-solid fa-snowflake text-electric text-2xl"></i>
          <div className="h-1.5 w-32 bg-gradient-to-r from-electric via-white to-gold rounded-full shadow-lg"></div>
          <i className="fa-solid fa-wind text-gold text-2xl"></i>
        </div>

        {/* Tagline */}
        <div className="text-center">
          <h1 className="text-3xl font-black tracking-wider gold-gradient-text">STAR COOL AIR CON</h1>
          <p className="text-xs font-bold tracking-[0.35em] text-electric uppercase mt-1">AC REPAIR & SERVICES</p>
        </div>
      </div>
    </div>
  );
}

