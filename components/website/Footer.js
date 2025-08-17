"use client";

import React from 'react';
// Import the LegalSection component which renders dropdowns for our legal
// contracts and policies. This will be displayed at the bottom of the
// footer instead of a simple list of legal links.
import LegalSection from './LegalSection';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

/**
 * Footer renders the bottom section of the website. It contains a brand area
 * and a grid of navigational links. Social icons link to placeholder URLs.
 * Content may override the main copy via the `content` prop.
 */
export default function Footer({ content }) {
  // Define the footer link categories and corresponding items.
  const footerLinks = {
    Product: ['Features', 'Integrations', 'Security', 'Pricing'],
    Company: ['About', 'Careers', 'News', 'Partners'],
    Resources: ['Documentation', 'Blog', 'Support', 'Community'],
    // The Legal category is handled separately via the LegalSection component
    // which provides dropdowns for each contract or policy.
  };
  return (
    <footer className="bg-slate-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <h3 className="text-2xl font-bold">Velmora AI</h3>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-md">
              {content?.content ||
                'Transforming businesses worldwide with intelligent automation solutions that scale.'}
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: 'https://instagram.com/velmoraai' },
                { icon: Mail, href: 'mailto:sarmad@velmoraai.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          {/* Links Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-white mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-white transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

        {/* Legal Section
           We inject the LegalSection component here to display a list of
           dropdowns for each legal document. Each dropdown reveals the
           full text of the corresponding contract or policy when clicked. */}
        <LegalSection />
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400">© 2024 Velmora AI. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}