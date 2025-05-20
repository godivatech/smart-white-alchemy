
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from '@/components/AnimatedHeading';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import TestimonialSlider from '@/components/TestimonialSlider';
import QuickBookingModal from '@/components/QuickBookingModal';
import ServiceFeatureCard from '@/components/ServiceFeatureCard';
import { Button } from '@/components/ui/button';
import { 
  Scissors, 
  UserCheck, 
  ThumbsUp, 
  Clock,
  Sparkles
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Regular Client",
      avatar: "https://images.unsplash.com/photo-1580518337843-f959e992563b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      content: "SMART & WHITE salon has transformed my look completely. The level of expertise and attention to detail is outstanding. I've been going here for over a year now and wouldn't trust anyone else with my hair.",
      rating: 5
    },
    {
      id: 2,
      name: "Vikram Singh",
      role: "Business Executive",
      avatar: "https://images.unsplash.com/photo-1598879898971-37d8759e1b29?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      content: "As a business professional, looking good is essential. The team at SMART & WHITE understands exactly what I need. Their beard styling service is particularly exceptional, and the staff is always friendly.",
      rating: 5
    },
    {
      id: 3,
      name: "Suresh Patel",
      role: "First-time Customer",
      avatar: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      content: "I was recommended to SMART & WHITE by a friend and I'm so glad I visited. The salon is immaculate, the service is personalized, and my haircut received many compliments. Will definitely be returning!",
      rating: 4
    },
  ];

  // Service data
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

  useEffect(() => {
    const sections = sectionRef.current?.querySelectorAll('.reveal-section');
    
    if (sections) {
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-salon-black/70"></div>
          <img 
            src="/lovable-uploads/e79be5c6-b6c9-462c-8dc0-814f875433da.png" 
            alt="SMART & WHITE Special Features" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="page-container relative z-10 text-center">
          <h1 className="headline text-white mb-6 text-shadow">
            Modern Features
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Experience our innovative salon features designed to enhance your grooming journey
          </p>
          <QuickBookingModal 
            className="bg-salon-gold text-salon-black hover:bg-salon-gold-light shadow-lg shadow-salon-gold/20 py-3 px-8 rounded-md text-base font-semibold animate-pulse-gold"
          />
        </div>
      </section>
      
      <div ref={sectionRef}>
        {/* Before/After Comparison Section */}
        <section className="section bg-salon-darkgray reveal-section">
          <div className="page-container">
            <div className="text-center mb-12">
              <div className="inline-block relative mb-4">
                <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                  See The Difference
                </span>
                <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
              </div>
              <AnimatedHeading 
                text="Before & After Transformations" 
                className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white"
              />
              <p className="text-gray-300 max-w-2xl mx-auto">
                Drag the slider to see how our expert stylists transform our clients' looks.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="hover-lift">
                <h3 className="text-xl font-playfair font-bold text-salon-gold mb-4">
                  Traditional to Modern Style
                </h3>
                <BeforeAfterSlider 
                  beforeImage="https://images.unsplash.com/photo-1579752481789-a1e09ec8242a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3"
                  afterImage="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.0.3"
                />
              </div>
              
              <div className="hover-lift">
                <h3 className="text-xl font-playfair font-bold text-salon-gold mb-4">
                  Beard Transformation
                </h3>
                <BeforeAfterSlider 
                  beforeImage="https://images.unsplash.com/photo-1621605829783-d28103f5ef08?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3"
                  afterImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Services with Animations */}
        <section className="section bg-salon-black reveal-section">
          <div className="page-container">
            <div className="text-center mb-12">
              <div className="inline-block relative mb-4">
                <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                  Our Premium Services
                </span>
                <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
              </div>
              <AnimatedHeading 
                text="Signature Experiences" 
                className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6 text-white"
              />
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our most popular services with a modern twist to elevate your style.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceFeatureCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  price={service.price}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial Slider Section */}
        <section className="section bg-salon-darkgray texture-grain reveal-section">
          <div className="page-container">
            <div className="text-center mb-12">
              <div className="inline-block relative mb-4">
                <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                  Client Voices
                </span>
                <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
              </div>
              <AnimatedHeading 
                text="What Our Clients Say" 
                className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white"
              />
              <p className="text-gray-300 max-w-2xl mx-auto">
                Real feedback from our valued customers.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <TestimonialSlider testimonials={testimonials} />
            </div>
          </div>
        </section>
        
        {/* Quick Booking Section */}
        <section className="section bg-salon-black gold-overlay reveal-section">
          <div className="page-container">
            <div className="bg-gradient-to-r from-salon-darkgray to-salon-black/80 rounded-xl p-8 md:p-12 border border-salon-gold/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-salon-gold/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-salon-gold/5 rounded-full filter blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-salon-gold text-shadow-gold">
                    Ready for a Transformation?
                  </h2>
                  <p className="text-gray-300 text-lg max-w-lg">
                    Book your appointment instantly with our quick booking system. Experience premium grooming at SMART & WHITE.
                  </p>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <QuickBookingModal 
                    variant="default"
                    className="py-3 px-8 rounded-md text-base font-semibold"
                  />
                  
                  <Button variant="outlineGold" className="group">
                    <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
                    <span className="fancy-underline">Special Offers</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
