import Head from 'next/head';
import Image from 'next/image';

const testimonials = [
  {
    quote:
      "I told her what I wanted to accomplish and doubted it could happen because of my age. She took that on as her personal challenge. My arms don't look old anymore! My butt (ahem) looks and feels great!",
    name: 'Juliana R.',
    role: 'Verified Client',
    avatar: '/images/avatar1.png',
    rating: 5,
  },
  {
    quote:
      'I am so fortunate to have had my time with Nicky, and truly recommend her to anyone of any age and fitness level. She is transformative.',
    name: 'JoAnn S.',
    role: 'Verified Client',
    avatar: '/images/avatar2.png',
    rating: 5,
  },
  {
    quote:
      'Nicky came along and has managed to get me moving again. She went above and beyond by ordering meals for me at a local health food delivery service, calculating the macros I needed to meet my goals.',
    name: 'Rene P.',
    role: 'Verified Client',
    avatar: '/images/avatar3.png',
    rating: 5,
  },
  {
    quote:
      'Nicky came along and has managed to get me moving again. She went above and beyond by ordering meals for me at a local health food delivery service, calculating the macros I needed to meet my goals.',
    name: 'Rene P.',
    role: 'Verified Client',
    avatar: '/images/avatar3.png',
    rating: 5,
  },
  {
    quote:
      'Nicky came along and has managed to get me moving again. She went above and beyond by ordering meals for me at a local health food delivery service, calculating the macros I needed to meet my goals.',
    name: 'Rene P.',
    role: 'Verified Client',
    avatar: '/images/avatar3.png',
    rating: 5,
  },
  {
    quote:
      'Nicky came along and has managed to get me moving again. She went above and beyond by ordering meals for me at a local health food delivery service, calculating the macros I needed to meet my goals.',
    name: 'Rene P.',
    role: 'Verified Client',
    avatar: '/images/avatar3.png',
    rating: 5,
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 flex flex-col h-full">
      <div className="flex mb-4" />
      <p className="text-white italic mb-6 flex-grow">"{testimonial.quote}"</p>
      <div className="flex items-center">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
        <div className="ml-4">
          <p className="text-white font-semibold">{testimonial.name}</p>
          <span className="text-gray-300 text-sm">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <Head>
        <title>Client Testimonials | Nicky Perry Fitness</title>
        <meta
          name="description"
          content="Hear from the incredible women who have transformed their bodies and lives with Nicky Perry's coaching."
        />
      </Head>
      <main className="font-sans">
        {/* Hero section */}
        <section className="relative min-h-[100svh] md:min-h-screen isolate">
          {/* Background image */}
          <Image
            src="https://i.imgur.com/bgReeWa.jpeg"
            alt="Peach background"
            fill
            priority
            className="object-contain blur-md"
          />
          {/* Optional soft scrim for text contrast */}
          <div className="absolute inset-0" />

          {/* Foreground content */}
          <div className="relative z-10 container mx-auto px-6 py-28 md:py-40 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-widest text-[#e8564f]">
              Client Testimonials
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-2xl text-gray-700">
              Don&apos;t just take my word for it – hear from the amazing women I&apos;ve had the privilege to work with.
            </p>
          </div>

          {/* Testimonials section (added horizontal scroll on mobile) */}
          <section className="relative">
            <div className="container mx-auto px-6">
              {/* Mobile: horizontal snap strip */}
              <div
                className="md:hidden relative"
                style={{
                  WebkitMaskImage:
                    'linear-gradient(90deg, transparent 0, black 6%, black 94%, transparent 100%)',
                  maskImage:
                    'linear-gradient(90deg, transparent 0, black 6%, black 94%, transparent 100%)',
                }}
              >
                <ul className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-px-5 [-ms-overflow-style:none] [scrollbar-width:none]">
                  {testimonials.map((t, idx) => (
                    <li key={idx} className="snap-start shrink-0 w-[85vw]">
                      <TestimonialCard testimonial={t} />
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-center text-sm text-gray-700">Swipe to see more</p>
              </div>

              {/* Desktop: classic grid */}
              <div className="hidden md:flex gap-5 overflow-x-scroll items-stretch">
                {testimonials.map((t, idx) => (
                <div key={idx} className="w-[300px] flex-shrink-0">
                  <TestimonialCard testimonial={t} className="h-full" />
                  </div>
                ))} 
              </div>


              {/* Button */}
              <div className="mt-12 text-center">
                <button className="bg-[#e8564f] hover:bg-[#d84a45] text-white uppercase tracking-wider py-3 px-8 rounded-full transition-colors">
                  View More
                </button>
              </div>
            </div>
          </section>
        </section>

        {/* Call to action */}
        <section className="relative bg-[#e8564f] text-white py-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wider">
                Ready to start your transformation?
              </h2>
              <p className="mt-4 text-lg md:text-xl">
                Let&apos;s chat about your goals and create a plan that works for your lifestyle.
              </p>
            </div>
            <div>
              <a
                href="/contact"
                className="bg-white text-[#e8564f] hover:bg-gray-100 font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-colors"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
