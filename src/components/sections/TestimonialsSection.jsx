import React from 'react'
import { motion } from 'framer-motion'

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Cape Town',
      rating: 5,
      text: 'CemAir has been my go-to airline for business travel. The service is consistently excellent, and I always arrive on time.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      location: 'Johannesburg',
      rating: 5,
      text: 'Outstanding service from booking to landing. The crew is professional and friendly, making every flight enjoyable.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Amanda Williams',
      location: 'Durban',
      rating: 5,
      text: 'I\'ve been flying with CemAir for years. Their reliability and customer service are unmatched in the industry.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'David Thompson',
      location: 'Port Elizabeth',
      rating: 5,
      text: 'The charter service for our company events has been exceptional. Professional, reliable, and always on time.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Lisa Brown',
      location: 'East London',
      rating: 5,
      text: 'CemAir makes traveling between cities so convenient. The booking process is simple and the flights are comfortable.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    },
    {
      name: 'Robert Wilson',
      location: 'Bloemfontein',
      rating: 5,
      text: 'Excellent value for money. The aircraft are well-maintained and the service is top-notch. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say 
            about their CemAir experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="text-gray-600 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h3>
            <div className="flex justify-center items-center mb-4">
              <div className="flex mr-4">
                {renderStars(5)}
              </div>
              <span className="text-3xl font-bold text-gray-900">4.9</span>
              <span className="text-gray-500 ml-2">/ 5.0</span>
            </div>
            <p className="text-gray-600 mb-6">
              Based on 2,500+ customer reviews
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600">99%</div>
                <div className="text-sm text-gray-500">On-Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">95%</div>
                <div className="text-sm text-gray-500">Would Recommend</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
