
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from '@/components/AnimatedHeading';
import TestimonialCard from '@/components/TestimonialCard';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const quotesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelector('.hero-content'),
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          delay: 0.5,
          ease: "power3.out"
        }
      );
    }
    
    if (quotesRef.current) {
      const quotes = quotesRef.current.querySelectorAll('.quote');
      
      quotes.forEach((quote, index) => {
        gsap.fromTo(
          quote, 
          { y: 50, opacity: 0 }, 
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: quote,
              start: "top 90%",
            }
          }
        );
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Video testimonials data
  const videoTestimonials = [
    {
      name: "Rajesh Kumar",
      text: "SMART & WHITE provides the best grooming experience in Paramakudi. The attention to detail is unmatched.",
      videoSrc: "/videos/testimonial1.mp4",
      image: "/images/testimonial-1.jpg",
      rating: 5
    },
    {
      name: "Vikram Singh",
      text: "I've been coming here for years, and the quality never drops. Always walk out feeling confident.",
      videoSrc: "/videos/testimonial2.mp4",
      image: "/images/testimonial-2.jpg",
      rating: 5
    },
    {
      name: "Karthik Raj",
      text: "Their beard styling service is exceptional! The stylists know exactly what suits your face shape.",
      videoSrc: "/videos/testimonial3.mp4",
      image: "/images/testimonial-3.jpg",
      rating: 4
    }
  ];

  // Text testimonials data
  const textTestimonials = [
    {
      name: "Mahesh P.",
      text: "I've tried many salons, but SMART & WHITE offers a truly premium experience. The staff is professional and the ambiance is excellent.",
      rating: 5
    },
    {
      name: "Arjun D.",
      text: "Great attention to detail in every haircut. They take the time to understand what you want and deliver exactly that.",
      rating: 5
    },
    {
      name: "Suresh K.",
      text: "The spa treatments are outstanding! Very relaxing environment and skilled therapists. Highly recommend the head massage.",
      rating: 4
    },
    {
      name: "Prakash T.",
      text: "Best hair coloring service in the region. The results are always natural-looking and long-lasting.",
      rating: 5
    },
    {
      name: "Vijay R.",
      text: "The pre-wedding package was perfect. Looked my best on my big day thanks to the team at SMART & WHITE.",
      rating: 5
    },
    {
      name: "David M.",
      text: "Clean facility, friendly staff, and excellent service. What more could you ask for?",
      rating: 4
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(/images/testimonial-hero.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-salon-black/90 to-salon-black/70"></div>
        <div className="page-container relative z-10">
          <div className="max-w-2xl hero-content">
            <div className="inline-block relative mb-4">
              <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                Client Experiences
              </span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-white">
              Our Client <span className="text-gradient">Testimonials</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Discover what our clients have to say about their experiences at SMART & WHITE Hair Salon & Spa.
            </p>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="section bg-salon-black">
        <div className="page-container">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-4">
              <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                Client Videos
              </span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
            </div>
            <AnimatedHeading 
              text="Video Testimonials" 
              className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white"
            />
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear directly from our satisfied clients about their experience at SMART & WHITE.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                text={testimonial.text}
                image={testimonial.image}
                videoSrc={testimonial.videoSrc}
                rating={testimonial.rating}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Text Testimonials */}
      <section className="section bg-salon-darkgray">
        <div className="page-container">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-4">
              <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                Client Feedback
              </span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
            </div>
            <AnimatedHeading 
              text="What Our Clients Say" 
              className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white"
            />
            <p className="text-gray-300 max-w-2xl mx-auto">
              Read testimonials from our valued clients who have experienced the SMART & WHITE difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={quotesRef}>
            {textTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="quote bg-salon-black border border-salon-gold/20 p-6 rounded-lg relative"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-salon-gold' : 'text-gray-500'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
                <svg className="absolute top-6 right-6 text-salon-gold/10 w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
                <p className="text-white font-playfair font-medium text-lg">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Statistics */}
      <section className="section bg-salon-black">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-salon-darkgray border border-salon-gold/20 p-8 rounded-lg text-center">
              <div className="text-5xl font-playfair font-bold text-salon-gold mb-4">4.9</div>
              <p className="text-lg text-white">Average Rating</p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 ${i < 5 ? 'text-salon-gold' : 'text-gray-500'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <div className="bg-salon-darkgray border border-salon-gold/20 p-8 rounded-lg text-center">
              <div className="text-5xl font-playfair font-bold text-salon-gold mb-4">98%</div>
              <p className="text-lg text-white">Satisfaction Rate</p>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-4">
                <div className="bg-salon-gold h-2 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div className="bg-salon-darkgray border border-salon-gold/20 p-8 rounded-lg text-center">
              <div className="text-5xl font-playfair font-bold text-salon-gold mb-4">95%</div>
              <p className="text-lg text-white">Returning Clients</p>
              <div className="w-full bg-gray-700 h-2 rounded-full mt-4">
                <div className="bg-salon-gold h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leave Feedback Section */}
      <section className="section bg-salon-darkgray">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block relative mb-4">
                <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                  Your Opinion Matters
                </span>
                <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white">
                Share Your <span className="text-gradient">Experience</span>
              </h2>
              <p className="text-gray-300 mb-8">
                We value your feedback and would love to hear about your experience at SMART & WHITE. Your opinions help us continue to provide exceptional service and make improvements where needed.
              </p>
              <div className="flex flex-wrap gap-6">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#4267B2] text-white rounded-md hover:bg-[#3b5998] transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  Review on Facebook
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#DB4437] text-white rounded-md hover:bg-[#C53929] transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 7h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                  Review on Google
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-salon-gold"></div>
              <form className="bg-salon-black p-8 rounded-lg relative z-10">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-salon-darkgray border border-salon-gold/30 text-white p-3 rounded-md focus:outline-none focus:border-salon-gold"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-white mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-salon-darkgray border border-salon-gold/30 text-white p-3 rounded-md focus:outline-none focus:border-salon-gold"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-white mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className="text-2xl text-salon-gold focus:outline-none"
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="feedback" className="block text-white mb-2">Your Feedback</label>
                  <textarea 
                    id="feedback" 
                    rows={5}
                    className="w-full bg-salon-darkgray border border-salon-gold/30 text-white p-3 rounded-md focus:outline-none focus:border-salon-gold"
                    placeholder="Share your experience with us"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full btn-primary py-3 px-8 rounded-md text-base font-semibold"
                >
                  Submit Feedback
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
