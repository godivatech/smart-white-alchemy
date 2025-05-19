import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from '@/components/AnimatedHeading';
import founderImage from '/lovable-uploads/f0223669-eff0-471b-98d1-90dda23e0449.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const storyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Story section animation
    if (storyRef.current) {
      const storyImage = storyRef.current.querySelector('.story-image');
      const storyContent = storyRef.current.querySelector('.story-content');
      
      if (storyImage && storyContent) {
        gsap.fromTo(
          storyImage, 
          { x: -100, opacity: 0 }, 
          { 
            x: 0, 
            opacity: 1, 
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: storyImage,
              start: "top 80%",
            }
          }
        );
        
        gsap.fromTo(
          storyContent, 
          { x: 100, opacity: 0 }, 
          { 
            x: 0, 
            opacity: 1, 
            duration: 1,
            ease: "power3.out",
            delay: 0.2,
            scrollTrigger: {
              trigger: storyContent,
              start: "top 80%",
            }
          }
        );
      }
    }
    
    // Stats counter animation
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll('.stat-item');
      
      statItems.forEach((item, index) => {
        const counter = item.querySelector('.counter');
        const targetValue = parseInt(counter?.getAttribute('data-target') || '0');
        
        gsap.fromTo(
          item, 
          { y: 50, opacity: 0 }, 
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
            }
          }
        );
        
        if (counter) {
          ScrollTrigger.create({
            trigger: counter,
            start: "top 90%",
            onEnter: () => {
              gsap.to(counter, {
                duration: 2,
                innerText: targetValue,
                roundProps: "innerText",
                ease: "power1.inOut",
              });
            },
            once: true
          });
        }
      });
    }
    
    // Team members animation
    if (teamRef.current) {
      const teamMembers = teamRef.current.querySelectorAll('.team-member');
      
      teamMembers.forEach((member, index) => {
        gsap.fromTo(
          member, 
          { y: 50, opacity: 0 }, 
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: teamRef.current,
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

  const teamMembers = [
    {
      name: "Amuthan",
      position: "Founder & Master Stylist",
      image: founderImage,
      description: "With over 15 years of experience in men's grooming, Amuthan brings expertise and passion to every haircut."
    },
    {
      name: "Ravi Kumar",
      position: "Senior Barber",
      image: "/images/team-2.jpg",
      description: "Specializing in classic and contemporary cuts, Ravi delivers precision styling with attention to detail."
    },
    {
      name: "Senthil",
      position: "Color Specialist",
      image: "/images/team-3.jpg",
      description: "An expert in hair coloring techniques, Senthil can help you achieve your perfect look with customized solutions."
    },
    {
      name: "Prakash",
      position: "Beard & Skincare Expert",
      image: "/images/team-4.jpg",
      description: "Prakash specializes in facial grooming and skincare treatments to keep you looking your absolute best."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-salon-black/70"></div>
          <img 
            src="/images/about-hero.jpg" 
            alt="About SMART & WHITE" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="page-container relative z-10 text-center">
          <h1 className="headline text-white mb-6">About Us</h1>
          <div className="w-24 h-1 bg-salon-gold mx-auto"></div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="section bg-salon-black">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="story-image">
              <div className="relative">
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-salon-gold"></div>
                <img 
                  src="/lovable-uploads/e79be5c6-b6c9-462c-8dc0-814f875433da.png" 
                  alt="Our Story" 
                  className="w-full rounded-lg relative z-10"
                />
              </div>
            </div>
            <div className="story-content">
              <div className="inline-block relative mb-4">
                <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                  Our Journey
                </span>
                <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
              </div>
              <AnimatedHeading 
                text="The Story of SMART & WHITE" 
                className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white"
              />
              <p className="text-gray-300 mb-6">
                Founded in 2015, SMART & WHITE began with a simple vision: to create a premium grooming destination exclusively for men in Paramakudi, where traditional barbering meets modern style.
              </p>
              <p className="text-gray-300 mb-6">
                What started as a small salon with just two chairs has now evolved into a comprehensive grooming establishment, offering everything from precision haircuts and beard styling to luxurious spa treatments.
              </p>
              <p className="text-gray-300 mb-6">
                Our founder, Amuthan, trained under master barbers across India, bringing back techniques and knowledge to create a unique experience for our clients. Each member of our team is handpicked for their skill, creativity, and dedication to the craft of men's grooming.
              </p>
              <p className="text-gray-300">
                Today, SMART & WHITE stands as a testament to our commitment to excellence, serving gentlemen who appreciate the finer things in life and understand that grooming is an essential part of personal style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section bg-salon-darkgray">
        <div className="page-container">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-4">
              <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                What We Stand For
              </span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
            </div>
            <AnimatedHeading 
              text="Our Core Values" 
              className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white"
            />
            <p className="text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do at SMART & WHITE, from how we train our team to how we serve our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for perfection in every service, constantly refining our techniques and staying updated with the latest trends.",
                icon: (
                  <svg className="w-12 h-12 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                )
              },
              {
                title: "Personalization",
                description: "We believe that every client is unique, deserving a customized approach to meet their specific grooming needs and preferences.",
                icon: (
                  <svg className="w-12 h-12 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                )
              },
              {
                title: "Integrity",
                description: "Honesty and transparency form the foundation of our business, ensuring our clients trust us with their appearance and comfort.",
                icon: (
                  <svg className="w-12 h-12 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                )
              },
              {
                title: "Innovation",
                description: "We continuously explore new techniques, products, and services to enhance the grooming experience for our clients.",
                icon: (
                  <svg className="w-12 h-12 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                )
              },
              {
                title: "Community",
                description: "We're proud to be part of the Paramakudi community, contributing to local initiatives and fostering relationships beyond business.",
                icon: (
                  <svg className="w-12 h-12 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                )
              },
              {
                title: "Craftsmanship",
                description: "We approach men's grooming as an art form, with each haircut and service delivered with precision and attention to detail.",
                icon: (
                  <svg className="w-12 h-12 text-salon-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                  </svg>
                )
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-salon-black border border-salon-gold/10 p-8 rounded-lg text-center transform transition-transform hover:-translate-y-2 duration-300"
              >
                <div className="bg-salon-black/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-playfair font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section py-24 bg-salon-black">
        <div className="page-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 2015, label: "Established", symbol: "", suffix: "" },
              { value: 8, label: "Expert Stylists", symbol: "+", suffix: "" },
              { value: 15000, label: "Happy Clients", symbol: "+", suffix: "" },
              { value: 98, label: "Satisfaction Rate", symbol: "", suffix: "%" }
            ].map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="relative inline-block">
                  <div className="text-5xl sm:text-6xl font-playfair font-bold text-salon-gold mb-2 flex items-center justify-center">
                    <span className="counter" data-target={stat.value}>0</span>
                    <span>{stat.symbol}</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-salon-gold/30"></div>
                </div>
                <p className="text-xl text-white mt-4">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section ref={teamRef} className="section bg-salon-darkgray">
        <div className="page-container">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-4">
              <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                Our Professionals
              </span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
            </div>
            <AnimatedHeading 
              text="Meet Our Expert Team" 
              className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white"
            />
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our skilled team of professionals is dedicated to providing you with exceptional grooming services and experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-salon-black to-transparent opacity-60"></div>
                </div>
                <div className="bg-salon-black border-x border-b border-salon-gold/20 p-6 rounded-b-lg">
                  <h3 className="text-xl font-playfair font-bold text-white">{member.name}</h3>
                  <p className="text-salon-gold mb-3">{member.position}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                  <div className="mt-4 flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-salon-gold transition-colors duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-salon-gold transition-colors duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Preview */}
      <section className="section bg-salon-black">
        <div className="page-container">
          <div className="text-center mb-12">
            <div className="inline-block relative mb-4">
              <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                What Clients Say
              </span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
            </div>
            <AnimatedHeading 
              text="Client Testimonials" 
              className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white"
            />
          </div>
          
          <div className="relative py-8">
            <div className="relative bg-salon-darkgray border border-salon-gold/20 p-8 rounded-lg max-w-3xl mx-auto">
              <svg className="absolute -top-6 left-8 text-salon-gold w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="text-center">
                <p className="text-lg text-gray-300 italic mb-6">
                  "SMART & WHITE provides the best grooming experience in Paramakudi. The attention to detail and personalized service is unmatched. I wouldn't trust anyone else with my hair and beard styling."
                </p>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-salon-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white font-playfair font-medium text-lg">Rajesh Kumar</p>
                <p className="text-salon-gold text-sm">Regular Client</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a href="/testimonials" className="btn-primary py-3 px-8 rounded-md inline-flex items-center">
              <span>View All Testimonials</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
