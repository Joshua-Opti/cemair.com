import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const AboutSection = () => {
  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '25+', label: 'Destinations' },
    { number: '99%', label: 'On-Time Performance' },
    { number: '50K+', label: 'Happy Passengers' }
  ]

  const values = [
    {
      title: 'Safety First',
      description: 'Our commitment to safety is unwavering, with rigorous maintenance and training programs.',
      icon: '🛡️'
    },
    {
      title: 'Customer Focus',
      description: 'Every decision we make is centered around providing exceptional customer experiences.',
      icon: '❤️'
    },
    {
      title: 'Reliability',
      description: 'We deliver consistent, dependable service that our customers can count on.',
      icon: '⏰'
    },
    {
      title: 'Innovation',
      description: 'Continuously improving our services through technology and modern practices.',
      icon: '🚀'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About CemAir
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              CemAir is South Africa's premier regional airline, connecting communities 
              across the country and beyond with exceptional service, reliability, and 
              comfort. Since our establishment, we've been committed to making air travel 
              accessible and enjoyable for everyone.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our modern fleet of aircraft, experienced crew, and customer-focused approach 
              have made us a trusted choice for both business and leisure travelers. We 
              pride ourselves on our safety record, on-time performance, and the warm, 
              professional service that sets us apart.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="btn btn-primary text-lg px-8 py-3"
            >
              Learn More About Us
            </Link>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-6xl mb-4">✈️</div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To connect South Africa through safe, reliable, and affordable air travel, 
                  fostering economic growth and bringing communities together.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-4 shadow-md"
                >
                  <div className="text-2xl mb-2">{value.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
