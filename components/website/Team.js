"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import Link from 'next/link';
import { createPageUrl } from '../../utils';

// Define static data for team members. In a real app this could be fetched
// from an API or headless CMS.
const teamData = {
  sarmad: {
    name: 'Sarmad Garawi',
    title: 'Co-Founder & CEO',
    email: 'sarmad@velmoraai.com',
    phone: '562-578-8595',
    bio: 'Sarmad is a visionary leader with over 8 years of experience in AI and automation technologies. He specializes in developing scalable AI solutions for the healthcare and aesthetics industry. His passion for innovation drives Velmora AI\'s mission to transform how med spas operate.',
    expertise: [
      'AI Strategy & Implementation',
      'Healthcare Technology',
      'Business Development',
      'Product Vision',
    ],
    education: 'MS Computer Science, UC San Diego',
    experience: 'Previously led AI initiatives at Fortune 500 healthcare companies',
  },
  hassanain: {
    name: 'Hassanain Garawi',
    title: 'Co-Founder & CTO',
    email: 'hassanain@velmoraai.com',
    phone: '562-298-3644',
    bio: 'Hassanain is a technical expert with deep expertise in machine learning, automation systems, and enterprise software development. He leads the technical vision at Velmora AI and ensures our solutions are robust, scalable, and secure.',
    expertise: [
      'Machine Learning & AI',
      'System Architecture',
      'Automation Engineering',
      'Technical Leadership',
    ],
    education: 'MS Artificial Intelligence, Stanford University',
    experience: 'Former Senior ML Engineer at Google, specialized in healthcare AI applications',
  },
};

export default function Team() {
  const searchParams = useSearchParams();
  const memberKey = searchParams.get('member');
  const member = memberKey ? teamData[memberKey] : null;
  if (!member) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
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
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-slate-900 to-blue-900 bg-clip-text text-transparent">
              Meet Our Team
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The visionaries behind Velmora AI\'s innovative solutions for the aesthetics industry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(teamData).map(([key, person]) => (
              <Link key={key} href={createPageUrl(`Team?member=${key}`)}>
                <Card className="h-full shadow-xl border-0 hover:shadow-2xl transition-all duration-500 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-2xl font-bold">
                        {person.name.split(' ').map((n) => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">
                      {person.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">{person.title}</p>
                    <p className="text-slate-600 leading-relaxed">
                      {person.bio.substring(0, 150)}...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link href={createPageUrl('Team')}>
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Team
            </Button>
          </Link>
        </motion.div>
        {/* Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Card className="shadow-2xl border-0">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-4xl font-bold">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-slate-900 mb-2">{member.name}</h1>
                <p className="text-2xl text-blue-600 font-semibold mb-6">{member.title}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">About</h3>
                  <p className="text-slate-700 leading-relaxed mb-6">{member.bio}</p>
                  <h4 className="font-semibold text-slate-900 mb-2">Education</h4>
                  <p className="text-slate-600 mb-4">{member.education}</p>
                  <h4 className="font-semibold text-slate-900 mb-2">Experience</h4>
                  <p className="text-slate-600">{member.experience}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Expertise</h3>
                  <ul className="space-y-2 mb-8">
                    {member.expertise.map((skill, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-slate-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Contact</h3>
                  <div className="space-y-3">
                    <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                      <Mail className="w-5 h-5" />
                      {member.email}
                    </a>
                    <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-blue-600 hover:text-blue-700">
                      <Phone className="w-5 h-5" />
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Meeting
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}