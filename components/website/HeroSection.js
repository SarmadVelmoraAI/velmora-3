"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';

/**
 * HeroSection displays the hero area of the homepage. It accepts a `content` prop
 * that may contain a title, subtitle, main content and button text. When no
 * content is provided, sensible defaults are rendered instead.
 */
export default function HeroSection({ content }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 bg-[size:75px_75px] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute bottom-32 left-16 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            {content?.subtitle || 'Next-Generation AI Solutions for Med Spas'}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 bg-clip-text text-transparent">
            {content?.title || 'Automate Your Med Spa with AI'}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {content?.content ||
              'Transform your med spa operations with cutting-edge AI automation solutions. Enhance client experience, streamline bookings, and boost efficiency.'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
          >
            {content?.button_text || 'Get Started'}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 group"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Feature Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: '75%', label: 'Client Retention Rate' },
            { number: '6x', label: 'Faster Booking Process' },
            { number: '50%', label: 'Cost Reduction' },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}