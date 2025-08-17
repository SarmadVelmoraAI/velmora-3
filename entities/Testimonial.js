"use client";

// This entity provides a simple in-memory list of testimonials. In a real
// application, these methods would fetch data from a database or API. The
// `list` method accepts an optional sort string (e.g. '-order_priority') to
// order results.

export const Testimonial = {
  async list(sort) {
    const testimonials = [
      {
        id: 1,
        client_name: 'Jane Doe',
        client_title: 'Spa Owner',
        company_name: 'Serenity Spa',
        testimonial_text:
          'Velmora AI has completely transformed our booking process. Our no-shows have dropped and our clients love the seamless experience!',
        rating: 5,
        image_url: '',
        order_priority: 1,
      },
      {
        id: 2,
        client_name: 'John Smith',
        client_title: 'Manager',
        company_name: 'Luxury Aesthetics',
        testimonial_text:
          'We saw an immediate improvement in client retention after implementing personalized journeys. The AI follow-ups are a game changer.',
        rating: 5,
        image_url: '',
        order_priority: 2,
      },
      {
        id: 3,
        client_name: 'Sarah Johnson',
        client_title: 'Director',
        company_name: 'Glow Clinic',
        testimonial_text:
          'From marketing to inventory, Velmora’s AI tools have streamlined every aspect of our business.',
        rating: 4,
        image_url: '',
        order_priority: 3,
      },
    ];
    if (sort === '-order_priority') {
      return testimonials.sort((a, b) => b.order_priority - a.order_priority);
    }
    return testimonials;
  },
};
export default Testimonial;