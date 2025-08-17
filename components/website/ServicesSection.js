"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, UserCheck, HeartPulse, Megaphone, Star, PackageCheck, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
// Use Next.js Link component instead of react-router-dom. Next.js provides
// client-side navigation via the `next/link` module. When using Next.js
// you should import Link from 'next/link' and set the `href` prop rather
// than `to`.
import Link from 'next/link';
import { createPageUrl } from '../../utils';

// Define an array of service definitions. Each entry contains an icon component,
// title, description and slug used to generate the URL to its detail page.
const services = [
  {
    icon: CalendarCheck,
    title: 'AI-Powered Appointment Scheduling',
    description: 'Eliminate no-shows and streamline your front desk with our intelligent, automated booking and reminder system.',
    slug: 'appointment-scheduling',
  },
  {
    icon: UserCheck,
    title: 'Automated Lead Nurturing',
    description: 'Capture, qualify, and convert more leads from your website and social media with personalized, automated follow-ups.',
    slug: 'lead-nurturing',
  },
  {
    icon: HeartPulse,
    title: 'Personalized Client Journeys',
    description: 'Enhance client retention with AI that tracks treatment history and automates personalized follow-ups and product recommendations.',
    slug: 'client-journeys',
  },
  {
    icon: Megaphone,
    title: 'AI-Driven Marketing Campaigns',
    description: 'Target the right audience with precision. Our AI analyzes data to create high-converting marketing campaigns for your services.',
    slug: 'marketing-campaigns',
  },
  {
    icon: Star,
    title: 'Automated Reputation Management',
    description: 'Automatically request reviews from happy clients and manage your online reputation to build trust and attract new business.',
    slug: 'reputation-management',
  },
  {
    icon: PackageCheck,
    title: 'Intelligent Inventory Management',
    description: 'Predict product needs and automate ordering to reduce waste and ensure your most popular products are always in stock.',
    slug: 'inventory-management',
  },
];

/**
 * ServicesSection renders a grid of service cards. Each card shows an icon,
 * title, description and a button linking to the solution detail page. Content
 * can override default title and description using the `content` prop.
 */
export default function ServicesSection({ content }) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
            {content?.title || 'Solutions Designed for Your Med Spa'}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {content?.content ||
              'From automated bookings to intelligent marketing, our AI-powered tools are tailored to meet the unique challenges of the aesthetics industry.'}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-500 group bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                  <Link href={createPageUrl(`Solution?id=${service.slug}`)}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 group-hover:text-blue-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}