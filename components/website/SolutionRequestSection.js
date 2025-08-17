"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Lightbulb } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card, CardContent } from '../ui/card';
import { SolutionRequest } from '../../entities/SolutionRequest';

/**
 * SolutionRequestSection provides a form for users to request custom solutions. It
 * manages its own form state and interacts with the `SolutionRequest` entity to
 * submit new requests. After a successful submission, a thank you message
 * appears.
 */
export default function SolutionRequestSection() {
  const [formData, setFormData] = useState({
    requested_solution: '',
    client_email: '',
    client_name: '',
    company_name: '',
    additional_details: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await SolutionRequest.create(formData);
      setSubmitted(true);
      setFormData({
        requested_solution: '',
        client_email: '',
        client_name: '',
        company_name: '',
        additional_details: '',
      });
    } catch (error) {
      console.error('Error submitting request:', error);
    }
    setIsSubmitting(false);
  };
  if (submitted) {
    return (
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Submitted!</h3>
            <p className="text-slate-600">
              Thank you for your suggestion! We'll review it and work on adding it to our platform.
            </p>
            <Button onClick={() => setSubmitted(false)} className="mt-6" variant="outline">
              Submit Another Request
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4" />
            Have a Custom Need?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-slate-900 to-blue-900 bg-clip-text text-transparent">
            Don't See What You Need?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            If the solution you need isn't listed above, tell us about it! We'll do our best to add these solutions to our platform and help you achieve your goals.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Your Name"
                    value={formData.client_name}
                    onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                    className="border-slate-200 focus:border-blue-500"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.client_email}
                    onChange={(e) => setFormData({ ...formData, client_email: e.target.value })}
                    className="border-slate-200 focus:border-blue-500"
                  />
                </div>
                <Input
                  placeholder="Med Spa Name"
                  value={formData.company_name}
                  onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                  className="border-slate-200 focus:border-blue-500"
                />
                <Input
                  placeholder="What solution do you need? *"
                  value={formData.requested_solution}
                  onChange={(e) => setFormData({ ...formData, requested_solution: e.target.value })}
                  className="border-slate-200 focus:border-blue-500"
                  required
                />
                <Textarea
                  placeholder="Additional details about your needs..."
                  rows={4}
                  value={formData.additional_details}
                  onChange={(e) => setFormData({ ...formData, additional_details: e.target.value })}
                  className="border-slate-200 focus:border-blue-500"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || !formData.requested_solution}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? 'Submitting...' : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Request
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}