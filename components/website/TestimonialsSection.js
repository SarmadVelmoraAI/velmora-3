"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Testimonial } from '../../entities/Testimonial';

/**
 * TestimonialsSection fetches and displays customer testimonials. It queries
 * `Testimonial.list` ordered by descending priority and shows up to 6 cards.
 * If there are no testimonials, the section is not rendered.
 */
export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    loadTestimonials();
  }, []);
  const loadTestimonials = async () => {
    try {
      const data = await Testimonial.list('-order_priority');
      setTestimonials(data);
    } catch (error) {
      console.error('Error loading testimonials:', error);
    }
  };
  if (testimonials.length === 0) return null;
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100/50 bg-[size:50px_50px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.8),white)] -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Trusted by Leading Med Spas
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See how aesthetic practices across the country are transforming their operations with Velmora AI.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Quote className="w-10 h-10 text-blue-500 mb-4" />
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6 italic">
                    "{testimonial.testimonial_text}"
                  </p>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    {testimonial.image_url ? (
                      <img
                        src={testimonial.image_url}
                        alt={testimonial.client_name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {testimonial.client_name?.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.client_name}</p>
                      <p className="text-sm text-slate-500">{testimonial.client_title}</p>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.company_name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}