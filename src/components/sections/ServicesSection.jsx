import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const ServicesSection = () => {
  const services = [
    {
      title: 'Scheduled Flights',
      description: 'Regular domestic and regional flights across South Africa and neighboring countries.',
      icon: '✈️',
      features: ['Daily flights', 'Multiple destinations', 'Competitive pricing', 'On-time performance'],
      link: '/services#scheduled'
    },
    {
      title: 'Charter Services',
      description: 'Private charter flights for business, leisure, or special occasions.',
      icon: '🛩️',
      features: ['Flexible scheduling', 'Private aircraft', 'Custom routes', 'VIP service'],
      link: '/services#charter'
    },
    {
      title: 'Aircraft Leasing',
      description: 'Commercial aircraft leasing solutions for airlines and operators.',
      icon: '🚁',
      features: ['Modern fleet', 'Flexible terms', 'Maintenance included', '24/7 support'],
      link: '/services#leasing'
    },
    {
      title: 'Cargo Services',
      description: 'Reliable cargo transportation for businesses and individuals.',
      icon: '📦',
      features: ['Express delivery', 'Secure handling', 'Tracking system', 'Insurance options'],
      link: '/services#cargo'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            CemAir offers a comprehensive range of aviation services designed to meet 
            your travel and transportation needs with reliability and excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="text-sm text-gray-500 mb-6 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.link}
                  className="btn btn-secondary w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience CemAir?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you need scheduled flights, charter services, or aircraft leasing, 
              we're here to provide exceptional aviation solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="btn btn-primary text-lg px-8 py-3"
              >
                Book a Flight
              </Link>
              <Link
                to="/contact"
                className="btn btn-secondary text-lg px-8 py-3"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
