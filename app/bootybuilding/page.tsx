// app/testimonials/page.tsx
import React from 'react';
import Image from 'next/image';
import ProgramTimeline from '../components/ProgramTimeline';

export default function TestimonialsPage() {
  const successStories = [
    {
      name: "Name",
      achievement: "Lost 35 lbs and gained confidence",
      story:
        "After years of crash dieting, Nicky taught me how to eat for my goals while still enjoying life. I've maintained my results for over 2 years now!",
      before:
        "https://static.wixstatic.com/media/cc76ef_5e78fccfbf584ebe9faacfc4f09e6e1f~mv2.jpg/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cc76ef_5e78fccfbf584ebe9faacfc4f09e6e1f~mv2.jpg",
      after:
        "https://static.wixstatic.com/media/cc76ef_5e78fccfbf584ebe9faacfc4f09e6e1f~mv2.jpg/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cc76ef_5e78fccfbf584ebe9faacfc4f09e6e1f~mv2.jpg",
    },
    {
      name: "Name",
      achievement: "Built curves and strength",
      story:
        "I wanted to build a strong, curvy physique. Nicky's program helped me gain muscle in all the right places while staying lean.",
      before:
        "https://static.wixstatic.com/media/cc76ef_3b1055a201564f17909a5294cf2f77f7~mv2.jpg/v1/crop/x_0,y_242,w_2048,h_2060/fill/w_302,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2019-12-10%2007_01_18.jpg",
      after:
        "https://static.wixstatic.com/media/cc76ef_3b1055a201564f17909a5294cf2f77f7~mv2.jpg/v1/crop/x_0,y_242,w_2048,h_2060/fill/w_302,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2019-12-10%2007_01_18.jpg",
    },
    {
      name: "Name",
      achievement: "Built curves and strength",
      story:
        "I wanted to build a strong, curvy physique. Nicky's program helped me gain muscle in all the right places while staying lean.",
      before:
        "https://static.wixstatic.com/media/cc76ef_3b1055a201564f17909a5294cf2f77f7~mv2.jpg/v1/crop/x_0,y_242,w_2048,h_2060/fill/w_302,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2019-12-10%2007_01_18.jpg",
      after:
        "https://static.wixstatic.com/media/cc76ef_3b1055a201564f17909a5294cf2f77f7~mv2.jpg/v1/crop/x_0,y_242,w_2048,h_2060/fill/w_302,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2019-12-10%2007_01_18.jpg",
    },
    {
      name: "Name",
      achievement: "Built curves and strength",
      story:
        "I wanted to build a strong, curvy physique. Nicky's program helped me gain muscle in all the right places while staying lean.",
      before:
        "https://static.wixstatic.com/media/cc76ef_3b1055a201564f17909a5294cf2f77f7~mv2.jpg/v1/crop/x_0,y_242,w_2048,h_2060/fill/w_302,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2019-12-10%2007_01_18.jpg",
      after:
        "https://static.wixstatic.com/media/cc76ef_3b1055a201564f17909a5294cf2f77f7~mv2.jpg/v1/crop/x_0,y_242,w_2048,h_2060/fill/w_302,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2019-12-10%2007_01_18.jpg",
    },
    {
      name: "Name",
      achievement: "Built curves and strength",
      story:
        "I wanted to build a strong, curvy physique. Nicky's program helped me gain muscle in all the right places while staying lean.",
      before:
        "https://static.wixstatic.com/media/cc76ef_3b1055a201564f17909a5294cf2f77f7~mv2.jpg/v1/crop/x_0,y_242,w_2048,h_2060/fill/w_302,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2019-12-10%2007_01_18.jpg",
      after:
        "https://static.wixstatic.com/media/cc76ef_3b1055a201564f17909a5294cf2f77f7~mv2.jpg/v1/crop/x_0,y_242,w_2048,h_2060/fill/w_302,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2019-12-10%2007_01_18.jpg",
    },
  ];

  return (
    <main className="relative flex flex-col min-h-screen bg-white w-full">
      {/* Background */}
      <img
        src="https://i.imgur.com/bgReeWa.jpeg"
        alt="Peach background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Header */}
      <header className="relative z-10 mt-16 mb-4">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-6xl font-bold uppercase tracking-widest text-gray-800 text-center lulo pt-10">
            Booty Building
          </h1>
          <p className="text-lg text-gray-800 font-semibold text-center p-4">
            Don't just take it from me — here's what my clients have to say
          </p>
        </div>
      </header>

      {/* Success Stories — Horizontal Snap Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <section
          id="success"
          className="py-20 bg-gradient-to-b from-white/50 to-red-100 backdrop-blur-2xl rounded-lg"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Fade edges for a premium feel (no-JS) */}
            <div
              className="relative"
              style={{
                WebkitMaskImage:
                  'linear-gradient(90deg, transparent 0, black 4%, black 96%, transparent 100%)',
                maskImage:
                  'linear-gradient(90deg, transparent 0, black 4%, black 96%, transparent 100%)',
              }}
            >
              <ul
                className="
                  flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-4
                  
                "
              >
                {successStories.map((story, index) => (
                  <li
                    key={index}
                    className="snap-center shrink-0 w-[min(85vw,28rem)]"
                    aria-label={`Success story ${index + 1}`}
                  >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden ring-1 ring-black/5">
                      <div className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <img
                              src={story.before}
                              alt={`${story.name} before`}
                              className="w-40 h-40 object-cover rounded shadow-md"
                            />
                            <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              Before
                            </span>
                          </div>

                          <div className="text-3xl text-red-500">→</div>

                          <div className="relative">
                            <img
                              src={story.after}
                              alt={`${story.name} after`}
                              className="w-40 h-40 object-cover rounded shadow-md"
                            />
                            <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                              After
                            </span>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 mt-6">
                          {story.name}
                        </h3>
                        <p className="text-lg font-semibold text-red-500 mb-2 raleway">
                          {story.achievement}
                        </p>
                        <p className="text-gray-700 leading-relaxed raleway">
                          {story.story}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional helper text */}
            <p className="mt-4 text-center text-sm text-gray-600">
              Swipe on mobile · Scroll horizontally on desktop
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
