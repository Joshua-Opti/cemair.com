import React from 'react'
import { motion } from 'framer-motion'

export const ServicesPage = () => {
  const services = [
    {
      title: 'Scheduled Flights',
      description: 'Regular domestic and regional flights across South Africa and neighboring countries.',
      icon: '✈️',
      features: [
        'Daily flights to major cities',
        'Multiple daily departures',
        'Competitive pricing',
        'On-time performance guarantee',
        'Online booking and check-in',
        'Loyalty program benefits'
      ],
      routes: [
        'Johannesburg ↔ Cape Town',
        'Johannesburg ↔ Durban',
        'Cape Town ↔ Durban',
        'Johannesburg ↔ Port Elizabeth',
        'Cape Town ↔ East London'
      ]
    },
    {
      title: 'Charter Services',
      description: 'Private charter flights for business, leisure, or special occasions.',
      icon: '🛩️',
      features: [
        'Flexible scheduling',
        'Private aircraft options',
        'Custom routes available',
        'VIP service packages',
        'Catering and amenities',
        'Ground transportation coordination'
      ],
      routes: [
        'Corporate charters',
        'Wedding flights',
        'Sports team transport',
        'Medical emergency flights',
        'Tourist group charters'
      ]
    },
    {
      title: 'Aircraft Leasing',
      description: 'Commercial aircraft leasing solutions for airlines and operators.',
      icon: '🚁',
      features: [
        'Modern, well-maintained fleet',
        'Flexible lease terms',
        'Maintenance included',
        '24/7 technical support',
        'Crew training programs',
        'Insurance coverage'
      ],
      routes: [
        'Short-term leases',
        'Long-term contracts',
        'Wet lease options',
        'Dry lease arrangements',
        'Crew lease services'
      ]
    },
    {
      title: 'Cargo Services',
      description: 'Reliable cargo transportation for businesses and individuals.',
      icon: '📦',
      features: [
        'Express delivery service',
        'Secure handling procedures',
        'Real-time tracking system',
        'Insurance options available',
        'Temperature-controlled transport',
        'Dangerous goods handling'
      ],
      routes: [
        'Same-day delivery',
        'Next-day service',
        'Scheduled cargo flights',
        'Charter cargo services',
        'International cargo'
      ]
    }
  ]

  const fleet = [
    {
      name: 'Beechcraft 1900D',
      capacity: '19 passengers',
      range: '1,500 km',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop',
      features: ['Twin-engine turboprop', 'Pressurized cabin', 'All-weather capability']
    },
    {
      name: 'CRJ-200',
      capacity: '50 passengers',
      range: '3,000 km',
      image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&h=300&fit=crop',
      features: ['Regional jet', 'High-speed cruise', 'Modern avionics']
    },
    {
      name: 'Cessna Citation',
      capacity: '8 passengers',
      range: '2,000 km',
      image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=400&h=300&fit=crop',
      features: ['Business jet', 'Luxury interior', 'Fast climb performance']
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Comprehensive aviation solutions designed to meet your travel and 
              transportation needs with reliability and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
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
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From scheduled flights to specialized charter services, CemAir provides 
              a full range of aviation solutions tailored to your requirements.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Available Routes</h4>
                      <ul className="space-y-2">
                        {service.routes.map((route, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600">{route}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={`bg-gray-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="text-center">
                    <div className="text-4xl mb-4">📋</div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Get a Quote
                    </h4>
                    <p className="text-gray-600 mb-6">
                      Contact us for pricing and availability information for our {service.title.toLowerCase()}.
                    </p>
                    <button className="btn btn-primary w-full">
                      Request Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
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
              Our Fleet
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern, well-maintained aircraft equipped with the latest technology 
              and safety features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleet.map((aircraft, index) => (
              <motion.div
                key={aircraft.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={aircraft.image}
                    alt={aircraft.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="card-body">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {aircraft.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Capacity:</span>
                      <span className="font-medium">{aircraft.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Range:</span>
                      <span className="font-medium">{aircraft.range}</span>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {aircraft.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience CemAir?
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Whether you need scheduled flights, charter services, or aircraft leasing, 
              we're here to provide exceptional aviation solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3">
                Book a Flight
              </button>
              <button className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-3">
                Get a Quote
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
