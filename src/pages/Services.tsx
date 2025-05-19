
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from '@/components/AnimatedHeading';
import { Scissors, UserCheck, Flame, ThumbsUp, Droplets, Clock, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

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
    
    if (processRef.current) {
      const steps = processRef.current.querySelectorAll('.process-step');
      
      steps.forEach((step, index) => {
        gsap.fromTo(
          step, 
          { x: index % 2 === 0 ? -50 : 50, opacity: 0 }, 
          { 
            x: 0, 
            opacity: 1, 
            duration: 0.8,
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
            }
          }
        );
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const serviceCategories = [
    {
      title: "Haircut & Styling",
      icon: <Scissors className="h-8 w-8" />,
      services: [
        { name: "Classic Haircut", price: "₹200" },
        { name: "Premium Haircut & Style", price: "₹350" },
        { name: "Buzz Cut", price: "₹150" },
        { name: "Kids Haircut", price: "₹150" },
        { name: "Hair & Beard Combo", price: "₹450" }
      ]
    },
    {
      title: "Beard Services",
      icon: <UserCheck className="h-8 w-8" />,
      services: [
        { name: "Beard Trim", price: "₹150" },
        { name: "Beard Styling", price: "₹250" },
        { name: "Royal Shave", price: "₹300" },
        { name: "Beard Color", price: "₹350" },
        { name: "Beard Treatment", price: "₹400" }
      ]
    },
    {
      title: "Hair Coloring",
      icon: <Flame className="h-8 w-8" />,
      services: [
        { name: "Basic Color", price: "₹500" },
        { name: "Highlights", price: "₹800" },
        { name: "Global Color", price: "₹1000" },
        { name: "Fashion Color", price: "₹1200+" },
        { name: "Grey Coverage", price: "₹600" }
      ]
    },
    {
      title: "Hair Treatments",
      icon: <ThumbsUp className="h-8 w-8" />,
      services: [
        { name: "Anti-Dandruff Treatment", price: "₹600" },
        { name: "Hair Spa", price: "₹800" },
        { name: "Scalp Treatment", price: "₹700" },
        { name: "Hair Straightening", price: "₹2000+" },
        { name: "Protein Treatment", price: "₹1200" }
      ]
    },
    {
      title: "Face Treatments",
      icon: <Droplets className="h-8 w-8" />,
      services: [
        { name: "Classic Facial", price: "₹450" },
        { name: "Deep Cleanse", price: "₹550" },
        { name: "De-Tan", price: "₹650" },
        { name: "Face Massage", price: "₹350" },
        { name: "Under-Eye Treatment", price: "₹400" }
      ]
    },
    {
      title: "Express Services",
      icon: <Clock className="h-8 w-8" />,
      services: [
        { name: "Express Haircut", price: "₹180" },
        { name: "Quick Beard Trim", price: "₹120" },
        { name: "Head Massage", price: "₹200" },
        { name: "Neck & Temple Clean", price: "₹100" },
        { name: "Touch-up Color", price: "₹300" }
      ]
    },
    {
      title: "Premium Packages",
      icon: <Sparkles className="h-8 w-8" />,
      services: [
        { name: "Complete Groom", price: "₹1500" },
        { name: "Pre-Wedding Package", price: "₹3500" },
        { name: "Executive Style", price: "₹1000" },
        { name: "Father-Son Combo", price: "₹500" },
        { name: "Monthly Maintenance", price: "₹1200" }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(/images/services-hero.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-salon-black to-salon-black/70"></div>
        <div className="page-container relative z-10">
          <div className="max-w-2xl hero-content">
            <div className="inline-block relative mb-4">
              <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                Our Expertise
              </span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-white">
              Premium Services <br />for <span className="text-gradient">Modern Gentlemen</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Discover our comprehensive range of grooming services designed to enhance your appearance and boost your confidence.
            </p>
            <Link 
              to="/contact"
              className="btn-primary py-3 px-8 rounded-md inline-flex items-center"
            >
              <span>Book an Appointment</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="section bg-salon-black">
        <div className="page-container">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-4">
              <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                What We Offer
              </span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
            </div>
            <AnimatedHeading 
              text="Our Service Categories" 
              className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white"
            />
            <p className="text-gray-300 max-w-2xl mx-auto">
              At SMART & WHITE, we provide a comprehensive range of premium men's grooming services tailored to meet your specific needs.
            </p>
          </div>
          
          {serviceCategories.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="flex items-center mb-8">
                <div className="bg-salon-gold/10 p-3 rounded-full w-14 h-14 flex items-center justify-center text-salon-gold mr-4">
                  {category.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white">{category.title}</h2>
              </div>
              
              <div className="service-pattern bg-salon-darkgray border border-salon-gold/20 rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-x divide-y divide-salon-gold/10">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="p-6 hover:bg-salon-gold/5 transition-colors duration-300">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-white">{service.name}</h3>
                        <span className="text-salon-gold font-playfair font-bold">{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="section bg-salon-darkgray">
        <div className="page-container">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-4">
              <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                Our Process
              </span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
            </div>
            <AnimatedHeading 
              text="The SMART & WHITE Experience" 
              className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white"
            />
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our unique approach ensures that every visit to SMART & WHITE is more than just a haircut—it's a premium grooming experience.
            </p>
          </div>
          
          <div className="space-y-12">
            {[
              {
                title: "Consultation",
                number: "01",
                description: "Every service begins with a thorough consultation to understand your preferences, lifestyle, and specific grooming needs.",
                image: "/images/process-1.jpg"
              },
              {
                title: "Personalized Service Plan",
                number: "02",
                description: "Our experts create a customized service plan based on your hair type, face shape, and personal style to achieve the best results.",
                image: "/images/process-2.jpg"
              },
              {
                title: "Premium Service Delivery",
                number: "03",
                description: "Experience our meticulous approach as we execute each service with precision and attention to detail.",
                image: "/images/process-3.jpg"
              },
              {
                title: "Final Touches & Style Advice",
                number: "04",
                description: "Your experience concludes with finishing touches and expert advice on maintaining your new look at home.",
                image: "/images/process-4.jpg"
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className={`process-step grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="relative">
                    <div className={`absolute -z-10 border-2 border-salon-gold ${index % 2 === 0 ? '-top-4 -right-4' : '-top-4 -left-4'} w-full h-full`}></div>
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full rounded-md"
                    />
                  </div>
                </div>
                <div className={`${index % 2 !== 0 ? 'md:order-1 md:text-right' : ''}`}>
                  <div className="inline-block relative mb-4">
                    <span className="text-5xl font-playfair font-bold text-salon-gold/20">{step.number}</span>
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-full ml-3 w-12 h-[2px] bg-salon-gold"></div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-salon-black">
        <div className="page-container">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-4">
              <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                Premium Products
              </span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
            </div>
            <AnimatedHeading 
              text="Products We Use" 
              className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white"
            />
            <p className="text-gray-300 max-w-2xl mx-auto">
              We partner with leading grooming brands to ensure superior results for every service.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-salon-darkgray border border-salon-gold/10 rounded-lg p-6 flex items-center justify-center h-32">
                <div className="text-center">
                  <h4 className="text-lg font-playfair font-bold text-white mb-2">Brand {index + 1}</h4>
                  <p className="text-sm text-gray-400">Premium Quality</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(/images/cta-services.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-salon-black to-salon-black/90"></div>
        <div className="page-container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-salon-gold">
            Ready to Experience Premium Grooming?
          </h2>
          <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto">
            Visit SMART & WHITE Hair Salon & Spa for the ultimate men's grooming experience in Paramakudi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="btn-primary py-3 px-8 rounded-md text-base font-semibold"
            >
              Book an Appointment
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
      </section>
    </div>
  );
};

export default Services;
