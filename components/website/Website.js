"use client";

import React, { useState, useEffect } from 'react';
import { WebsiteContent } from '../../entities/WebsiteContent';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import FeaturesSection from './FeaturesSection';
import SolutionRequestSection from './SolutionRequestSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function Website() {
  const [content, setContent] = useState({});

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const contentData = await WebsiteContent.list();
      const contentMap = {};
      contentData.forEach((item) => {
        if (!contentMap[item.section]) {
          contentMap[item.section] = {};
        }
        contentMap[item.section] = item;
      });
      setContent(contentMap);
    } catch (error) {
      console.error('Error loading content:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <HeroSection content={content.hero} />
      <ServicesSection content={content.services} />
      <TestimonialsSection />
      <FeaturesSection content={content.features} />
      <SolutionRequestSection />
      <ContactSection content={content.contact} />
      <Footer content={content.footer} />
    </div>
  );
}