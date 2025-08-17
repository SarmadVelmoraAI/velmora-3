"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Calendar, Users, BarChart3 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import Link from 'next/link';
import { createPageUrl } from '../../utils';

// Define static data for each solution type. In a production app you might
// fetch this from a CMS or API based on the query parameter.
const solutionData = {
  'appointment-scheduling': {
    title: 'AI-Powered Appointment Scheduling',
    subtitle: 'Transform Your Booking Experience',
    description:
      'Eliminate no-shows, reduce front desk workload, and provide clients with 24/7 booking capabilities through our intelligent scheduling system.',
    features: [
      'Automated appointment confirmations and reminders',
      'AI-powered scheduling optimization to maximize revenue',
      'Integration with existing practice management systems',
      'Real-time availability across all locations',
      'Smart rebooking for cancellations',
      'Client preference learning and suggestions',
    ],
    benefits: [
      '75% reduction in no-shows',
      '50% less time spent on phone bookings',
      '30% increase in appointment bookings',
      '24/7 availability for clients',
    ],
    useCases: [
      'Multi-location med spa chains',
      'High-volume aesthetic practices',
      'Clinics wanting to reduce administrative overhead',
    ],
  },
  'lead-nurturing': {
    title: 'Automated Lead Nurturing',
    subtitle: 'Convert More Prospects Into Clients',
    description:
      'Never lose a potential client again. Our AI automatically nurtures leads from first contact to booking their first appointment.',
    features: [
      'Personalized follow-up sequences',
      'Lead scoring and qualification',
      'Multi-channel communication (email, SMS, calls)',
      'Integration with social media and website forms',
      'Automated appointment scheduling from qualified leads',
      'ROI tracking and analytics',
    ],
    benefits: [
      '300% increase in lead conversion',
      '60% faster response times',
      '40% more qualified consultations',
      'Automated nurturing saves 20 hours/week',
    ],
    useCases: [
      'Med spas focused on growth',
      'Practices with high marketing spend',
      'Clinics wanting to maximize conversion rates',
    ],
  },
  'client-journeys': {
    title: 'Personalized Client Journeys',
    subtitle: 'Enhance Client Experience & Retention',
    description:
      'Create individualized experiences for each client by tracking their treatment history and automating personalized communications.',
    features: [
      'Treatment history tracking and analysis',
      'Personalized aftercare instructions',
      'Automated follow-up based on treatment type',
      'Product recommendations based on client needs',
      'Birthday and anniversary reminders',
      'Client satisfaction surveys and feedback loops',
    ],
    benefits: [
      '85% client retention rate',
      '45% increase in repeat bookings',
      '35% boost in product sales',
      '90% client satisfaction scores',
    ],
    useCases: [
      'Established practices focusing on retention',
      'Med spas with diverse service offerings',
      'Clinics wanting to build long-term relationships',
    ],
  },
  'marketing-campaigns': {
    title: 'AI-Driven Marketing Campaigns',
    subtitle: 'Precision Marketing That Converts',
    description:
      'Target the right audience with data-driven campaigns that maximize your marketing ROI and attract ideal clients.',
    features: [
      'Audience segmentation and targeting',
      'Automated campaign creation and optimization',
      'A/B testing for maximum performance',
      'Cross-platform campaign management',
      'Real-time performance tracking',
      'Competitor analysis and insights',
    ],
    benefits: [
      '250% improvement in ROAS',
      '70% reduction in cost per acquisition',
      '5x more qualified leads',
      '80% time savings on campaign management',
    ],
    useCases: [
      'Med spas in competitive markets',
      'New practices building awareness',
      'Established clinics expanding services',
    ],
  },
  'reputation-management': {
    title: 'Automated Reputation Management',
    subtitle: 'Build Trust & Attract New Clients',
    description:
      'Automatically request reviews from satisfied clients and manage your online reputation to build trust and credibility.',
    features: [
      'Automated review requests after treatments',
      'Multi-platform review monitoring',
      'Response templates for positive and negative reviews',
      'Review analytics and insights',
      'Google My Business optimization',
      'Social proof integration on website',
    ],
    benefits: [
      '400% increase in online reviews',
      '4.8+ average star rating',
      '60% more website inquiries',
      '95% positive review response rate',
    ],
    useCases: [
      'Med spas wanting to build credibility',
      'Practices with few online reviews',
      'Clinics recovering from negative feedback',
    ],
  },
  'inventory-management': {
    title: 'Intelligent Inventory Management',
    subtitle: 'Optimize Stock & Reduce Waste',
    description:
      'Predict product needs, automate ordering, and ensure your most popular treatments and products are always available.',
    features: [
      'AI-powered demand forecasting',
      'Automated reorder points and quantities',
      'Supplier management and comparison',
      'Expiration date tracking',
      'Usage analytics by treatment and client',
      'Cost optimization recommendations',
    ],
    benefits: [
      '40% reduction in inventory costs',
      '90% fewer stockouts',
      '25% less product waste',
      '15 hours saved weekly on inventory tasks',
    ],
    useCases: [
      'High-volume aesthetic practices',
      'Multi-location med spa chains',
      'Clinics with diverse product lines',
    ],
  },
};

export default function Solution() {
  const searchParams = useSearchParams();
  const solutionId = searchParams.get('id');
  const solution = solutionData[solutionId];
  if (!solution) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Solution Not Found</h1>
          <Link href={createPageUrl('Website')}>
            <Button>Return to Homepage</Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href={createPageUrl('Website')}>
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homepage
            </Button>
          </Link>
        </motion.div>
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-slate-900 to-blue-900 bg-clip-text text-transparent">
            {solution.title}
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-6">{solution.subtitle}</p>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {solution.description}
          </p>
        </motion.div>
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-purple-500" />
                  Proven Results
                </h3>
                <ul className="space-y-4">
                  {solution.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-orange-500" />
                Perfect For
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {solution.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg"
                  >
                    <p className="font-medium text-slate-800">{useCase}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl mb-8 opacity-90">
                See how {solution.title.toLowerCase()} can transform your practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-blue-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book a Demo
                </Button>
                <Link href={createPageUrl('Website') + '#contact'}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}