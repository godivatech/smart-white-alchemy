
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Phone, Mail, MapPin, Clock, User, MessageSquare, Send } from 'lucide-react';
import AnimatedHeading from '@/components/AnimatedHeading';

const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1,
          delay: 0.5,
          ease: "power3.out"
        }
      );
    }
    
    if (contactInfoRef.current) {
      const contactItems = contactInfoRef.current.querySelectorAll('.contact-item');
      
      gsap.fromTo(
        contactItems,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.2,
          duration: 0.8,
          delay: 0.7,
          ease: "power3.out"
        }
      );
    }
    
    if (mapRef.current) {
      gsap.fromTo(
        mapRef.current,
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 1,
          delay: 0.8,
          ease: "power3.out"
        }
      );
    }
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center flex items-center" style={{ backgroundImage: 'url(/images/contact-hero.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-salon-black/90 to-salon-black/70"></div>
        <div className="page-container relative z-10">
          <div className="max-w-2xl">
            <div className="inline-block relative mb-4">
              <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                Get in Touch
              </span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-white">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Reach out to schedule an appointment, ask questions, or provide feedback. We're here to assist you with all your grooming needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section bg-salon-black">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <AnimatedHeading 
                text="Get In Touch" 
                className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white"
              />
              <p className="text-gray-300 mb-10">
                Whether you want to book an appointment, ask questions about our services, or provide feedback, we're here to help. Reach out through any of the contact methods below.
              </p>
              
              <div ref={contactInfoRef} className="space-y-8">
                <div className="flex items-start contact-item">
                  <div className="bg-salon-gold/10 p-3 rounded-full w-12 h-12 flex items-center justify-center text-salon-gold mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-medium text-white mb-2">Location</h3>
                    <p className="text-gray-300">
                      Madurai mandapam road santhaikadai,<br />
                      Paramakudi, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start contact-item">
                  <div className="bg-salon-gold/10 p-3 rounded-full w-12 h-12 flex items-center justify-center text-salon-gold mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-medium text-white mb-2">Phone</h3>
                    <p className="text-gray-300">
                      <a href="tel:+918870076219" className="hover:text-salon-gold transition-colors duration-300">+91 88700 76219</a><br />
                      <a href="tel:+918870076219" className="hover:text-salon-gold transition-colors duration-300">088700 76219</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start contact-item">
                  <div className="bg-salon-gold/10 p-3 rounded-full w-12 h-12 flex items-center justify-center text-salon-gold mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-medium text-white mb-2">Email</h3>
                    <p className="text-gray-300">
                      <a href="mailto:amuthan38@gmail.com" className="hover:text-salon-gold transition-colors duration-300">amuthan38@gmail.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start contact-item">
                  <div className="bg-salon-gold/10 p-3 rounded-full w-12 h-12 flex items-center justify-center text-salon-gold mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-medium text-white mb-2">Business Hours</h3>
                    <p className="text-gray-300">
                      Monday - Sunday: 9:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-playfair font-medium text-white mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-salon-gold flex items-center justify-center hover:bg-salon-gold hover:text-salon-black transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-salon-gold flex items-center justify-center hover:bg-salon-gold hover:text-salon-black transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-salon-gold flex items-center justify-center hover:bg-salon-gold hover:text-salon-black transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-salon-gold flex items-center justify-center hover:bg-salon-gold hover:text-salon-black transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div ref={formRef}>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-full h-full border-2 border-salon-gold"></div>
                <form className="bg-salon-darkgray p-8 rounded-lg relative z-10">
                  <h3 className="text-2xl font-playfair font-bold text-white mb-6">Send us a Message</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-white mb-2">Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-salon-gold h-5 w-5" />
                        <input 
                          type="text" 
                          id="name" 
                          placeholder="Your Name"
                          className="w-full bg-salon-black border border-salon-gold/30 text-white py-3 pl-10 pr-4 rounded-md focus:outline-none focus:border-salon-gold"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-salon-gold h-5 w-5" />
                        <input 
                          type="email" 
                          id="email" 
                          placeholder="Your Email"
                          className="w-full bg-salon-black border border-salon-gold/30 text-white py-3 pl-10 pr-4 rounded-md focus:outline-none focus:border-salon-gold"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-white mb-2">Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-salon-gold h-5 w-5" />
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="Your Phone Number"
                        className="w-full bg-salon-black border border-salon-gold/30 text-white py-3 pl-10 pr-4 rounded-md focus:outline-none focus:border-salon-gold"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-white mb-2">Select Service</label>
                    <select 
                      id="service" 
                      className="w-full bg-salon-black border border-salon-gold/30 text-white py-3 px-4 rounded-md focus:outline-none focus:border-salon-gold appearance-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23D4AF37'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                    >
                      <option value="">Select a Service</option>
                      <option value="haircut">Haircut & Styling</option>
                      <option value="beard">Beard Styling</option>
                      <option value="color">Hair Coloring</option>
                      <option value="treatment">Hair Treatment</option>
                      <option value="facial">Facial Treatment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 text-salon-gold h-5 w-5" />
                      <textarea 
                        id="message" 
                        rows={5}
                        placeholder="Your Message"
                        className="w-full bg-salon-black border border-salon-gold/30 text-white py-3 pl-10 pr-4 rounded-md focus:outline-none focus:border-salon-gold"
                      ></textarea>
                    </div>
                  </div>
                  
                  <button 
                    type="submit"
                    className="btn-primary py-3 px-8 w-full rounded-md text-base font-semibold inline-flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef} className="h-[400px] bg-salon-darkgray relative">
        <div className="absolute inset-0">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15756.90624303853!2d78.57834009232176!3d9.543507835483302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3b8e5555555555%3A0xb0b0b0b0b0b0b0b0!2sParamakudi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            loading="lazy"
            title="SMART & WHITE Hair Salon & Spa Location"
          ></iframe>
        </div>
        <div className="absolute top-4 left-4 bg-salon-black/90 border border-salon-gold p-4 rounded-md max-w-xs">
          <h3 className="text-lg font-playfair font-bold text-salon-gold mb-2">Visit Our Salon</h3>
          <p className="text-sm text-white">
            SMART & WHITE Hair Salon & Spa for Men<br />
            Madurai mandapam road santhaikadai,<br />
            Paramakudi, Tamil Nadu, India
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-salon-black">
        <div className="page-container">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-4">
              <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                FAQ
              </span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
            </div>
            <AnimatedHeading 
              text="Frequently Asked Questions" 
              className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white"
            />
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find answers to commonly asked questions about our services and policies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Do I need an appointment or can I walk in?",
                answer: "While we do accept walk-ins based on availability, we highly recommend booking an appointment to ensure you get your preferred time slot and stylist."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept cash, all major credit/debit cards, and popular mobile payment apps."
              },
              {
                question: "How long does a typical haircut service take?",
                answer: "A standard haircut typically takes 30-45 minutes, while premium services like haircut with beard styling may take 60-75 minutes."
              },
              {
                question: "Do you offer gift cards or gift certificates?",
                answer: "Yes, we offer gift cards in various denominations that make perfect gifts for any occasion."
              },
              {
                question: "What happens if I need to cancel my appointment?",
                answer: "We appreciate at least 24 hours notice for cancellations. For late cancellations, a small fee may apply."
              },
              {
                question: "Do you sell hair products that you use?",
                answer: "Yes, we carry a selection of premium hair and grooming products used in our services, available for purchase in-salon."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-salon-darkgray border border-salon-gold/20 p-6 rounded-lg">
                <h3 className="text-xl font-playfair font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
