
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from '@/components/AnimatedHeading';
import ServiceCard from '@/components/ServiceCard';

// Import icons
import { Scissors, UserCheck, Clock, ThumbsUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!heroRef.current || !parallaxRef.current || !aboutSectionRef.current) return;
    
    // Hero animation
    const heroTl = gsap.timeline();
    const heroTexts = heroRef.current.querySelectorAll('.hero-text');
    
    heroTl.fromTo(
      heroTexts, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
      0.5
    );
    
    // Parallax effect
    gsap.to(parallaxRef.current, {
      backgroundPosition: `50% ${window.innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top bottom", 
        end: "bottom top",
        scrub: true
      }
    });
    
    // About section animation
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
    
    const aboutImage = aboutSectionRef.current.querySelector('.about-image');
    const aboutContent = aboutSectionRef.current.querySelector('.about-content');
    
    aboutTl
      .fromTo(
        aboutImage, 
        { x: -100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(
        aboutContent, 
        { x: 100, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
        "-=0.4"
      );
      
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  // Featured services
  const services = [
    {
      title: "Expert Haircut",
      description: "Precision cuts tailored to your face shape and style preferences by our master barbers.",
      icon: <Scissors className="h-8 w-8" />,
      price: "₹250+"
    },
    {
      title: "Beard Styling",
      description: "Expert beard trimming and styling to enhance your facial features and personal style.",
      icon: <UserCheck className="h-8 w-8" />,
      price: "₹150+"
    },
    {
      title: "Hair Color",
      description: "Premium hair coloring services using top quality products for vibrant, long-lasting results.",
      icon: <ThumbsUp className="h-8 w-8" />,
      price: "₹500+"
    },
    {
      title: "Express Treatment",
      description: "Quick grooming sessions for the busy gentleman who needs to look sharp in minimal time.",
      icon: <Clock className="h-8 w-8" />,
      price: "₹350+"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-salon-black"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-salon-black opacity-60"></div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="page-container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 hero-text">
              SMART <span className="text-salon-gold">&</span> WHITE
            </h1>
            <h2 className="text-2xl md:text-3xl text-white mb-8 hero-text">
              Premium Hair Salon <span className="text-salon-gold">&</span> Spa for Men
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 hero-text">
              Experience the art of grooming excellence at Tamil Nadu's most exclusive men's salon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center hero-text">
              <Link 
                to="/services"
                className="btn-primary py-3 px-8 rounded-md text-base font-semibold"
              >
                Our Services
              </Link>
              <Link 
                to="/contact"
                className="btn-outline py-3 px-8 rounded-md text-base font-semibold"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* About Preview Section */}
      <section ref={aboutSectionRef} className="section bg-salon-darkgray">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="about-image">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-salon-gold"></div>
                <img 
                  src="/images/about-salon.jpg" 
                  alt="SMART & WHITE Salon Interior" 
                  className="w-full rounded-md relative z-10"
                />
              </div>
            </div>
            <div className="about-content">
              <div className="inline-block relative mb-4">
                <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                  About Us
                </span>
                <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white">
                Welcome to <span className="text-gradient">SMART & WHITE</span>
              </h2>
              <p className="text-gray-300 mb-6">
                At SMART & WHITE, we believe that grooming is an essential part of a gentleman's lifestyle. Our premium salon offers more than just haircuts and styling—we provide an experience that makes you look and feel exceptional.
              </p>
              <p className="text-gray-300 mb-8">
                Our team of skilled barbers and stylists combine traditional techniques with modern trends to deliver services tailored specifically to each client's needs and preferences.
              </p>
              <Link 
                to="/about"
                className="btn-outline py-3 px-8 rounded-md inline-flex items-center group"
              >
                <span>Learn More</span>
                <svg 
                  className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Parallax Section */}
      <div 
        ref={parallaxRef}
        className="h-80 bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url(/images/parallax-bg.jpg)' }}
      >
        <div className="bg-salon-black/60 w-full h-full flex items-center">
          <div className="page-container text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-salon-gold">
              The Perfect Cut Every Time
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Experience precision grooming and unmatched service at Paramakudi's premier men's salon
            </p>
          </div>
        </div>
      </div>
      
      {/* Featured Services Section */}
      <section className="section bg-salon-black">
        <div className="page-container">
          <div className="text-center mb-12">
            <div className="inline-block relative mb-4">
              <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                What We Offer
              </span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
            </div>
            <AnimatedHeading 
              text="Our Featured Services" 
              className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white"
            />
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our range of premium grooming services designed to elevate your style and confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={service.price}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services"
              className="btn-primary py-3 px-8 rounded-md inline-flex items-center group"
            >
              <span>View All Services</span>
              <svg 
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(/images/cta-bg.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-salon-black to-salon-black/80"></div>
        <div className="page-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-salon-gold">
                Ready for a Fresh New Look?
              </h2>
              <p className="text-gray-200 mb-8 text-lg">
                Visit SMART & WHITE Hair Salon & Spa for Men in Paramakudi for the ultimate grooming experience. Our team of experts is ready to transform your style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="btn-primary py-3 px-8 rounded-md text-base font-semibold"
                >
                  Book Now
                </Link>
                <a 
                  href="tel:+918870076219"
                  className="btn-outline py-3 px-8 rounded-md text-base font-semibold inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  Call Us
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <div className="bg-salon-black/50 border border-salon-gold/30 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-5 w-5 text-salon-gold" />
                      <h3 className="font-playfair font-bold text-salon-gold">Opening Hours</h3>
                    </div>
                    <p className="text-white text-sm">Mon-Sun: 9:00 AM - 9:00 PM</p>
                  </div>
                  <div className="bg-salon-black/50 border border-salon-gold/30 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-5 w-5 text-salon-gold" />
                      <h3 className="font-playfair font-bold text-salon-gold">Location</h3>
                    </div>
                    <p className="text-white text-sm">Madurai mandapam road, Paramakudi</p>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="bg-salon-black/50 border border-salon-gold/30 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Phone className="h-5 w-5 text-salon-gold" />
                      <h3 className="font-playfair font-bold text-salon-gold">Contact</h3>
                    </div>
                    <p className="text-white text-sm">+91 88700 76219</p>
                    <p className="text-white text-sm">amuthan38@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
