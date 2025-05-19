import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedHeading from '@/components/AnimatedHeading';
import GalleryImage from '@/components/GalleryImage';
import { AspectRatio } from '@/components/ui/aspect-ratio';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const galleryRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  
  // Gallery categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'haircuts', name: 'Haircuts' },
    { id: 'beards', name: 'Beards' },
    { id: 'color', name: 'Hair Color' },
    { id: 'spa', name: 'Spa Services' }
  ];
  
  // Gallery images with categories
  const galleryImages = [
    { id: 1, src: '/images/haircut-1.jpg', alt: 'Modern Fade Cut', categories: ['haircuts'] },
    { id: 2, src: '/images/beard-1.jpg', alt: 'Precision Beard Trim', categories: ['beards'] },
    { id: 3, src: '/images/color-1.jpg', alt: 'Platinum Blonde Color', categories: ['color'] },
    { id: 4, src: '/images/spa-1.jpg', alt: 'Relaxing Head Massage', categories: ['spa'] },
    { id: 5, src: '/images/haircut-2.jpg', alt: 'Classic Gentleman Cut', categories: ['haircuts'] },
    { id: 6, src: '/images/beard-2.jpg', alt: 'Full Beard Styling', categories: ['beards'] },
    { id: 7, src: '/images/color-2.jpg', alt: 'Highlights & Texture', categories: ['color'] },
    { id: 8, src: '/images/spa-2.jpg', alt: 'Facial Treatment', categories: ['spa'] },
    { id: 9, src: '/images/haircut-3.jpg', alt: 'Undercut Design', categories: ['haircuts'] },
    { id: 10, src: '/images/beard-3.jpg', alt: 'Beard & Mustache Detail', categories: ['beards'] },
    { id: 11, src: '/images/color-3.jpg', alt: 'Natural Hair Color', categories: ['color'] },
    { id: 12, src: '/images/spa-3.jpg', alt: 'Hot Towel Service', categories: ['spa'] }
  ];
  
  // Filter images based on selected category
  const filteredImages = selectedFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.categories.includes(selectedFilter));

  useEffect(() => {
    if (filtersRef.current) {
      gsap.fromTo(
        filtersRef.current.querySelectorAll('button'), 
        { y: 20, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          delay: 0.5
        }
      );
    }

    // Create a smooth transition effect when changing filters
    if (galleryRef.current) {
      const imageItems = galleryRef.current.querySelectorAll('.gallery-item');
      gsap.fromTo(
        imageItems,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.05,
          duration: 0.6,
          ease: "power3.out"
        }
      );
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [selectedFilter]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-salon-black/80"></div>
          <img 
            src="/lovable-uploads/e79be5c6-b6c9-462c-8dc0-814f875433da.png" 
            alt="Gallery" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="page-container relative z-10 text-center">
          <h1 className="headline text-white mb-6">Our Gallery</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of premium men's haircuts, beard styles, and grooming services
          </p>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-10 bg-salon-darkgray">
        <div className="page-container">
          <div className="text-center mb-8">
            <div className="inline-block relative mb-4">
              <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                Browse By Category
              </span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
            </div>
            <AnimatedHeading 
              text="Our Work" 
              className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white"
            />
          </div>
          
          <div ref={filtersRef} className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === category.id
                    ? 'bg-salon-gold text-salon-black'
                    : 'bg-salon-black text-white hover:bg-salon-gold/20'
                }`}
                onClick={() => setSelectedFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-salon-black">
        <div className="page-container">
          <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div key={image.id} className="gallery-item">
                <div className="overflow-hidden rounded-md">
                  <AspectRatio ratio={3/4}>
                    <GalleryImage 
                      src={image.src}
                      alt={image.alt}
                      index={index}
                    />
                  </AspectRatio>
                </div>
                <div className="mt-2 text-center">
                  <p className="text-salon-gold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-xl text-gray-400">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="section bg-salon-darkgray">
        <div className="page-container">
          <div className="text-center mb-12">
            <div className="inline-block relative mb-4">
              <span className="text-sm uppercase tracking-widest text-salon-gold font-medium relative z-10">
                Follow Us
              </span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-salon-gold/20 -skew-x-6"></div>
            </div>
            <AnimatedHeading 
              text="Instagram Gallery" 
              className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-white"
            />
            <p className="text-gray-300 max-w-2xl mx-auto">
              Follow us on Instagram for daily inspiration, behind-the-scenes content, and special promotions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <a
                key={index}
                href="#"
                className="overflow-hidden rounded-md group relative block"
              >
                <AspectRatio ratio={1/1}>
                  <img 
                    src={`/images/instagram-${index + 1}.jpg`}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-salon-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-outline py-3 px-8 rounded-md inline-flex items-center"
            >
              <span>Follow Us On Instagram</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: 'url(/lovable-uploads/e79be5c6-b6c9-462c-8dc0-814f875433da.png)' }}>
        <div className="absolute inset-0 bg-salon-black/80"></div>
        <div className="page-container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-salon-gold">
            Ready for Your Transformation?
          </h2>
          <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto">
            Visit SMART & WHITE to experience premium grooming services that will elevate your look and confidence.
          </p>
          <a 
            href="/contact"
            className="btn-primary py-3 px-8 rounded-md text-base font-semibold"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
