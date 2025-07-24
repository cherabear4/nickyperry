'use client'
import { useEffect, useState } from "react";
import { Menu, X, Star, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import useIsUsingMobile from "@/app/hooks/useMobile";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsUsingMobile();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'success', 'booty', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const testimonials = [
    {
      name: "Juliana R.",
      text: "I told her what I wanted to accomplish and doubted it could happen because of my age. She took that on as her personal challenge. My arms don't look old anymore! My butt (ahem) looks and feels great!",
      rating: 5,
      image: "https://static.wixstatic.com/media/cc76ef_18a235f53fc94325b992341eb72a0314~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/21430479_347799318978346_864534357758907.jpg"
    },
    {
      name: "JoAnn S.", 
      text: "I am so fortunate to have had my time with Nicky, and truly recommend her to anyone of any age and fitness level. She is transformative.",
      rating: 5,
      image: "https://static.wixstatic.com/media/cc76ef_8eb1c40af9c042d890fd4e8710d8854c~mv2.jpg/v1/fill/w_255,h_255,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1800256_10205096412751631_91363941433189.jpg"
    },
    {
      name: "Rene P.",
      text: "Nicky came along and has managed to get me moving again. She went above and beyond by ordering meals for me at a local health food delivery service, calculating the macros I needed to meet my goals..",
      rating: 5,
      image: "https://static.wixstatic.com/media/cc76ef_14e745340b134f1d826730731ae62489~mv2.jpeg/v1/fill/w_255,h_266,al_c,lg_1,q_80,enc_avif,quality_auto/Unknown-1.jpeg"
    }
  ];

  const successStories = [
    {
      name: "Name",
      achievement: "Lost 35 lbs and gained confidence",
      story: "After years of crash dieting, Nicky taught me how to eat for my goals while still enjoying life. I've maintained my results for over 2 years now!",
      before: "https://static.wixstatic.com/media/cc76ef_5e78fccfbf584ebe9faacfc4f09e6e1f~mv2.jpg/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cc76ef_5e78fccfbf584ebe9faacfc4f09e6e1f~mv2.jpg",
      after: "https://static.wixstatic.com/media/cc76ef_5e78fccfbf584ebe9faacfc4f09e6e1f~mv2.jpg/v1/fill/w_314,h_314,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/cc76ef_5e78fccfbf584ebe9faacfc4f09e6e1f~mv2.jpg"
    },
    {
      name: "Name",
      achievement: "Built curves and strength",
      story: "I wanted to build a strong, curvy physique. Nicky's program helped me gain muscle in all the right places while staying lean.",
      before: "https://static.wixstatic.com/media/cc76ef_3b1055a201564f17909a5294cf2f77f7~mv2.jpg/v1/crop/x_0,y_242,w_2048,h_2060/fill/w_302,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2019-12-10%2007_01_18.jpg",
      after: "https://static.wixstatic.com/media/cc76ef_3b1055a201564f17909a5294cf2f77f7~mv2.jpg/v1/crop/x_0,y_242,w_2048,h_2060/fill/w_302,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2019-12-10%2007_01_18.jpg"
    }
  ];

  const bootyStories = [
    {
      name: "Ashley Davis",
      achievement: "Built dream curves in 6 months",
      story: "I was always self-conscious about my flat bottom. Nicky's booty building protocol completely transformed my physique and confidence!",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Brittany Miller",
      achievement: "Gained 3 inches and massive strength",
      story: "The progressive overload system works! My glutes have never been stronger or more shapely. I can finally fill out my jeans!",
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      name: "Taylor Wilson",
      achievement: "Competition-ready physique",
      story: "With Nicky's guidance, I built the perfect hourglass figure. Her nutrition and training protocols are game-changing!",
      image: "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#DCAFB2' }}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center w-full">
              <div className="flex items-center space-x-12 text-white">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'services', label: 'Services' },
                  { id: 'success', label: 'Success Stories' },
                  { id: 'booty', label: 'Booty Building' },
                  { id: 'testimonials', label: 'Blog' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white hover:text-pink-200 transition-colors font-light tracking-wide"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-4 absolute right-8">
              <Facebook className="text-white hover:text-pink-200 cursor-pointer" size={20} />
              <Instagram className="text-white hover:text-pink-200 cursor-pointer" size={20} />
              <Twitter className="text-white hover:text-pink-200 cursor-pointer" size={20} />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-pink-200 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-pink-400/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'success', label: 'Success Stories' },
                { id: 'booty', label: 'Booty Building' },
                { id: 'testimonials', label: 'Blog' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-pink-100 raleway"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden bg-image">
        {/* Navigation dots */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <div className="flex flex-col space-y-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full border border-white/50"></div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left z-10">
                <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none tracking-tight ptp">
                  PANCAKES
                  <br />
                  TO
                  <br />
                  PEACHES
                </h1>
                
                <p className="text-xl md:text-2xl text-white mb-12 font-light tracking-wide">
                  <span className="raleway">Nicky Perry - BOOTY BUILDING & FAT LOSS SPECIALIST</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => scrollToSection('services')}
                    className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-pink-500 transition-all duration-300 tracking-wide raleway"
                  >
                    VIEW SERVICES
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-red-500 text-white px-8 py-4 font-semibold hover:bg-red-600 transition-all duration-300 tracking-wide raleway"
                  >
                    CONTACT NOW
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Motivational Quote Section */}
      <section className="bg-red-500 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-relaxed tracking-wide raleway">
            WHAT SEEMS LIKE YOUR DREAM BODY TODAY WILL SOON BECOME YOUR EVERY DAY.
          </h2>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-0 relative bg-weight">
      <div className="max-w-full bg-gray-800/80">
        <div className={`grid ${isMobile ? "" : "lg:grid-cols-2"} items-stretch min-h-screen`}>
          {/* IMAGE SECTION */}
          <div className={`${isMobile ? "py-8 flex justify-center" : "relative"}`}>
            <div className={`${isMobile ? "" : "absolute inset-0"}`}></div>
            <div className={`relative h-full flex items-center justify-center ${isMobile ? "p-0" : "p-8"}`}>
              <div className={`rounded-full overflow-hidden border-8 w-[16rem] h-[16rem] ${isMobile ? "" : "w-[30rem] h-[30rem]"}`}>
                <img 
                  src="https://static.wixstatic.com/media/cc76ef_6a6859a87a724f7f956976ec036c5ea5~mv2.jpg/v1/crop/x_136,y_76,w_385,h_385/fill/w_539,h_539,al_c,lg_1,q_80,enc_avif,quality_auto/2017-01-05%2013_41_01-2.jpg"
                  alt="Nicky Perry"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* TEXT SECTION */}
          <div className={`flex items-center ${isMobile ? "p-6" : "p-12 lg:p-16"}`}>
            <div className={isMobile ? "w-full text-center" : ""}>
              <div className={`${isMobile ? "text-center" : "text-right"} mb-8`}>
                <span className="text-white text-lg font-light tracking-widest raleway">ABOUT ME</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-bold text-red-500 mb-8 tracking-wide">
                NICKY PERRY
              </h2>
              <div className="space-y-6 text-base md:text-lg text-white leading-relaxed raleway">
                <p>
                  I spent 10 LONG years on the diet roller coaster. Every time I lost 3 pounds, I would gain back 5. I finally figured out what works and what doesn't and changed my body in 9 months. For the past 4 years I've been helping women just like you build their dream physiques while still enjoying their favorite foods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 tracking-wide">
              MY <span className="text-red-500">SERVICES</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto raleway">
              Choose the coaching style that fits your lifestyle and goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-red-50 border border-gray-100">
              <div className="absolute top-4 right-4">
                <span className="text-red-100 group-hover:text-red-200 text-6xl font-black transition-colors">01</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-red-600 mb-4 tracking-wide transition-colors">IN PERSON TRAINING</h3>
                <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed raleway transition-colors">
                  Face-to-face coaching with personalized attention and maximum accountability.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-red-50 border border-gray-100">
              <div className="absolute top-4 right-4">
                <span className="text-red-100 group-hover:text-red-200 text-6xl font-black transition-colors">02</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-red-600 mb-4 tracking-wide transition-colors">ONLINE TRAINING</h3>
                <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed raleway transition-colors">
                  Custom workout plans and nutrition guidance delivered digitally worldwide.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-red-50 border border-gray-100">
              <div className="absolute top-4 right-4">
                <span className="text-red-100 group-hover:text-red-200 text-6xl font-black transition-colors">03</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-red-600 mb-4 tracking-wide transition-colors">HYBRID TRAINING</h3>
                <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed raleway transition-colors">
                  Best of both worlds - in-person sessions combined with online support.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-red-50 border border-gray-100 md:col-span-2 lg:col-span-1">
              <div className="absolute top-4 right-4">
                <span className="text-red-100 group-hover:text-red-200 text-6xl font-black transition-colors">04</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-red-600 mb-4 tracking-wide transition-colors">HABIT COACHING</h3>
                <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed raleway transition-colors">
                  Build lasting lifestyle changes through proven habit formation techniques.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-red-50 border border-gray-100 md:col-span-2 lg:col-span-2">
              <div className="absolute top-4 right-4">
                <span className="text-red-100 group-hover:text-red-200 text-6xl font-black transition-colors">05</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-red-600 mb-4 tracking-wide transition-colors">CORPORATE WELLNESS</h3>
                <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed raleway transition-colors">
                  Comprehensive workplace health and fitness programs for your team's success.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-red-500 text-white px-12 py-4 font-bold hover:bg-red-600 transition-all duration-300 tracking-widest raleway transform hover:scale-105 shadow-2xl"
            >
              GET STARTED TODAY
            </button>
          </div>
        </div>
      </section>
      {/* Success Stories Section */}
      <section id="success" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wide">
              SUCCESS <span className="text-red-500">STORIES</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto raleway">
              Real transformations from real women who decided to invest in themselves
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                    <div className="relative group">
                      <img 
                        src={story.before}
                        alt="Before"
                        className="w-60 h-60 object-cover rounded shadow-md"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Before</span>
                    </div>
                    
                    <div className="text-4xl text-red-500">→</div>
                    
                    <div className="relative group">
                      <img 
                        src={story.after}
                        alt="After"
                        className="w-60 h-60 object-cover rounded shadow-md"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">After</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{story.name}</h3>
                  <p className="text-lg font-semibold text-red-500 mb-4 raleway">{story.achievement}</p>
                  <p className="text-gray-700 leading-relaxed raleway">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-wide">
              CLIENT <span className="text-red-500">TESTIMONIALS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto raleway">
              Don't just take my word for it - hear from the amazing women I've had the privilege to work with
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic raleway flex-1">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 raleway">Verified Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide">
              READY TO START YOUR TRANSFORMATION?
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto raleway">
              Let's chat about your goals and create a plan that works for your lifestyle
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 raleway">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-red-100 text-sm raleway">Phone</p>
                    <p className="text-white font-semibold raleway">619-724-37777</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-red-100 text-sm raleway">Email</p>
                    <p className="text-white font-semibold raleway">Nicky@NickyPerryFitness.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-red-100 text-sm raleway">Location</p>
                    <p className="text-white font-semibold raleway">Oceanside, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4 raleway">Follow My Journey</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <Instagram className="text-white" size={24} />
                  </a>
                  <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <Facebook className="text-white" size={24} />
                  </a>
                  <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <Twitter className="text-white" size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6 raleway">Send Me a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-red-100 border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 raleway"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-red-100 border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 raleway"
                  />
                </div>
                
                <div>
                  <select className="w-full px-4 py-3 rounded bg-white/20 text-white border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 raleway">
                    <option className="text-black" value="">What are you interested in?</option>
                    <option className="text-black" value="fat-loss">Fat Loss Coaching</option>
                    <option className="text-black" value="booty-building">Booty Building Program</option>
                    <option className="text-black" value="general">General Consultation</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your goals..."
                    className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-red-100 border border-white/30 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20 raleway"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-red-600 px-8 py-4 rounded font-semibold hover:bg-red-50 transform hover:scale-105 transition-all duration-200 shadow-lg raleway"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-red-500 mb-4 tracking-wide">
              Pancakes to Peaches
            </h3>
            <p className="text-gray-400 mb-6 raleway">
              Transforming lives one peach at a time 🍑
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
            <p className="text-gray-500 text-sm raleway">
              © 2024 Pancakes to Peaches. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
