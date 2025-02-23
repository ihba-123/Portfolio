import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonial"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <>
      {testimonials.length > 0 && testimonials[currentIndex] && (
        <>
          <div className="app__testimonial-items app__flex">
            {/* ✅ Safely check if image exists */}
            {testimonials[currentIndex]?.image && (
              <img 
                src={urlFor(testimonials[currentIndex]?.image)?.url() || ''} 
                alt={testimonials[currentIndex]?.name || 'Testimonial'} 
              />
            )}

            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex]?.feedback || 'No feedback available'}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex]?.name || 'Anonymous'}</h4>
                <h5 className="p-text">{testimonials[currentIndex]?.company || 'No company'}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div 
              className="app__flex" 
              onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
            >
              <HiChevronLeft />
            </div>

            <div 
              className="app__flex" 
              onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            {/* ✅ Safely check if brand image exists */}
            {brand?.image && (
              <img 
                src={urlFor(brand?.image)?.url() || ''} 
                alt={brand?.name || 'Brand'} 
              />
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);
