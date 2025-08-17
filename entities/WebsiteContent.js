"use client";

// This entity provides a simple in-memory storage for website content. In a
// production app, you would replace these methods with API calls to your
// backend or a CMS.

export const WebsiteContent = {
  async list(section) {
    // Return sample content grouped by section. If a specific section is
    // requested, return only matching items; otherwise return all items.
    const contents = [
      {
        id: 1,
        section: 'hero',
        title: 'Automate Your Med Spa with AI',
        subtitle: 'Next-Generation AI Solutions for Med Spas',
        content:
          'Transform your med spa operations with cutting-edge AI automation solutions. Enhance client experience, streamline bookings, and boost efficiency.',
        button_text: 'Get Started',
        button_url: '#',
        is_active: true,
      },
      {
        id: 2,
        section: 'services',
        title: 'Solutions Designed for Your Med Spa',
        content:
          'From automated bookings to intelligent marketing, our AI-powered tools are tailored to meet the unique challenges of the aesthetics industry.',
        is_active: true,
      },
      {
        id: 3,
        section: 'features',
        title: 'Built for Multi-Location Med Spas',
        content:
          'Perfect for growing aesthetic practices with 2-5 locations. Our platform scales with your business while maintaining the personal touch your clients expect.',
        button_text: 'Learn More',
        is_active: true,
      },
      {
        id: 4,
        section: 'contact',
        title: 'Revolutionize Your Med Spa with AI',
        content:
          'Discover how Velmora AI can enhance patient care, streamline operations, and boost efficiency at your Med Spa. Schedule a personalized demo today.',
        button_text: 'Send Message',
        is_active: true,
      },
      {
        id: 5,
        section: 'footer',
        content: 'Transforming businesses worldwide with intelligent automation solutions that scale.',
        is_active: true,
      },
    ];
    if (section) {
      return contents.filter((c) => c.section === section);
    }
    return contents;
  },
  async update(id, data) {
    // Placeholder for updating content; returns updated object.
    return { id, ...data };
  },
  async create(data) {
    // Placeholder for creating a new content item; returns created object with new id.
    return { id: Date.now(), ...data };
  },
  async delete(id) {
    // Placeholder for deletion; returns true.
    return true;
  },
};
export default WebsiteContent;