"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

/**
 * FeaturesSection highlights reasons why the platform is ideal for multi-location med spas. It renders
 * a list of pre-defined features along with some statistics and a call-to-action button. A
 * `content` prop may override the title, main copy or button text.
 */
export default function FeaturesSection({ content }) {
  // List of static feature strings describing product highlights.
  const features = [
    'HIPAA-compliant security and data protection',
    'Multi-location management and reporting',
    'Real-time analytics and performance tracking',
    'Seamless integration with existing practice software',
    '24/7 expert support and training',
    'Custom AI solutions for your specific needs',
  ];
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1),transparent)] -z-10" />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute top-32 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -z-10"
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {content?.title || 'Built for Multi-Location Med Spas'}
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {content?.content ||
                'Perfect for growing aesthetic practices with 2-5 locations. Our platform scales with your business while maintaining the personal touch your clients expect.'}
            </p>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg text-slate-200">{feature}</span>
                </motion.div>
              ))}
            </div>
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
            >
              {content?.button_text || 'Learn More'}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { metric: '200+', label: 'Med Spas Served' },
                  { metric: '99.2%', label: 'Client Satisfaction' },
                  { metric: '< 2min', label: 'Average Response Time' },
                  { metric: '3-5', label: 'Locations Supported' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.metric}</div>
                    <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}