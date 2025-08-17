"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Calendar, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent } from '../ui/card';
// Use Next.js Link component instead of react-router-dom. Next.js pages
// leverage `next/link` for client-side navigation. The `href` prop should
// be used instead of `to` when linking to another page.
import Link from 'next/link';
import { createPageUrl } from '../../utils';

/**
 * ContactSection renders a contact form and contact information. It accepts a
 * `content` prop to override title, copy and button text. It uses local state
 * to manage form inputs and simply logs submissions. In a real application
 * you would integrate this with an email service or backend API.
 */
export default function ContactSection({ content }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, send the form data to your server or email service here.
  };
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
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
            {content?.title || 'Revolutionize Your Med Spa with AI'}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {content?.content ||
              'Discover how Velmora AI can enhance patient care, streamline operations, and boost efficiency at your Med Spa. Schedule a personalized demo today.'}
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Started Today</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-slate-200 focus:border-blue-500 transition-colors duration-300"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-slate-200 focus:border-blue-500 transition-colors duration-300"
                    />
                  </div>
                  <Input
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="border-slate-200 focus:border-blue-500 transition-colors duration-300"
                  />
                  <Textarea
                    placeholder="Tell us about your automation needs..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-slate-200 focus:border-blue-500 transition-colors duration-300"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                  >
                    {content?.button_text || 'Send Message'}
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our team of AI specialists is ready to help you unlock the full potential of automation for your practice.
              </p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { name: 'Sarmad Garawi', email: 'sarmad@velmoraai.com', phone: '562-578-8595' },
                  { name: 'Hassanain Garawi', email: 'hassanain@velmoraai.com', phone: '562-298-3644' },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={createPageUrl(`Team?member=${contact.name.split(' ')[0].toLowerCase()}`)}>
                      <Button
                        variant="outline"
                        className="w-full p-6 h-auto hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-left">
                            <h4 className="font-semibold text-slate-900 mb-1 group-hover:text-blue-600">
                              {contact.name}
                            </h4>
                            <p className="text-sm text-blue-600 mb-1">{contact.email}</p>
                            <p className="text-sm text-blue-600">{contact.phone}</p>
                          </div>
                        </div>
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Button
                  size="lg"
                  onClick={() => {
                    // TODO: Replace with actual booking link once provided
                    window.open('#booking-calendar', '_blank');
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Book a Free Demo
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </Button>
                <p className="text-center text-sm text-slate-500 mt-3">
                  30-minute consultation • See our platform in action
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}