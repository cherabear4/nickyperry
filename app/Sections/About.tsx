import React from 'react'

// Example About Section Component

export default function AboutSection({ 
  personImg,
  bgImg,
  name,
  description 
}: {
  personImg: string;
  bgImg: string;
  name: string;
  description: string;
}) {
  return (
    <section 
      className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-16 text-center overflow-hidden"
      style={{
        backgroundImage: `url('${bgImg}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Optional background overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="relative z-10 max-w-lg w-full flex flex-col items-center">
        <h2 className="text-white text-xl font-semibold tracking-wide mb-1 raleway">ABOUT ME</h2>
        <h1 className="text-6xl font-bold text-red-500 mb-8">{name.toLocaleUpperCase()}</h1>
        <div className="size-80 rounded-full overflow-hidden border-4 border-white mb-6 shadow-xl bg-white/30">
          <img 
            src={personImg} 
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-white text-lg font-medium leading-relaxed px-4 py-6 text-right">
          {description}
        </p>
      </div>
    </section>
  );
}
