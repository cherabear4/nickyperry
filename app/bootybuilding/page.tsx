// app/testimonials/page.tsx
import React from 'react';
import Image from 'next/image';

// Define your testimonials data (text messages and peaches)
const testimonials = [
  { type: 'text', src: 'https://static.wixstatic.com/media/cc76ef_803a64e714824b8191eeb12b2b640414~mv2.jpg/v1/fill/w_177,h_206,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Lahrisa%20Butt.jpg' },
  { type: 'peach', src: 'https://static.wixstatic.com/media/nsplsh_6a56596e426e334d395230~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_186,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_6a56596e426e334d395230~mv2_d_5472_3648_s_4_2.jpg' },
  { type: 'text', src: 'https://static.wixstatic.com/media/cc76ef_9bf663c4e7f740fb89af65c6b45f93e1~mv2.jpg/v1/crop/x_0,y_3,w_950,h_690/fill/w_167,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Yasmin%20Butt.jpg' },
  { type: 'peach', src: 'https://static.wixstatic.com/media/nsplsh_73506c65304241775f7373~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_186,h_315,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nsplsh_73506c65304241775f7373~mv2_d_5472_3648_s_4_2.jpg' },
  { type: 'text', src: 'https://static.wixstatic.com/media/cc76ef_00744d46e48946d485d094b293fdac90~mv2.jpg/v1/fill/w_168,h_146,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WINNIE%20BUTT.jpg' },
];

export default function TestimonialsPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-white">
      {/* ——— Full-page Background Image ——— */}
      <img
        src="https://i.imgur.com/bgReeWa.jpeg"
        alt="Peach background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* ——— Header (not flush to top) ——— */}
      <header className="relative z-10 mt-8 mb-4">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold uppercase tracking-widest text-gray-800 text-center lulo pt-10">
            Booty Building
          </h1>
        </div>
      </header>

      {/* ——— Testimonials Grid centered in middle ——— */}
      <section className="relative z-10 flex-grow flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 px-4">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`${
                item.type === 'text' ? 'bg-red-500' : 'bg-[#ffffff]'
              } flex items-center justify-center p-4 rounded-lg`}
            >
              <img
                src={item.src}
                alt={`testimonial-${idx}`}
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ——— Quote pinned to bottom ——— */}
      <section className="relative z-10 bg-red-500 text-white py-16 mt-5 raleway">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium italic">
            "Nothing happens until the pain of remaining the same outweighs the pain of change"
          </blockquote>
          <footer className="mt-4 text-sm font-light uppercase tracking-wide raleway">
            — Arthur Burt
          </footer>
        </div>
      </section>
    </main>
  );
}
