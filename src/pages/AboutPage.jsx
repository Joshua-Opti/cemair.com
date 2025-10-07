import React from 'react'
import { motion } from 'framer-motion'

export const AboutPage = () => {
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
              About CemAir
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              South Africa's premier regional airline, connecting communities with 
              exceptional service and reliability since 2005.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2005, CemAir has grown from a small regional operator to become 
                one of South Africa's most trusted airlines. Our journey has been marked 
                by a commitment to safety, reliability, and exceptional customer service.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To connect South Africa through safe, reliable, and affordable air travel, 
                  fostering economic growth and bringing communities together. We believe 
                  that everyone deserves access to quality air transportation.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading regional airline in Southern Africa, known for our 
                  innovation, customer service excellence, and commitment to sustainable 
                  aviation practices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-primary-50 rounded-2xl p-8"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">✈️</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Key Milestones
                  </h4>
                  <div className="space-y-4 text-left">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">2005</div>
                        <div className="text-gray-600">Company founded with first aircraft</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">2010</div>
                        <div className="text-gray-600">Fleet expansion to 5 aircraft</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">2015</div>
                        <div className="text-gray-600">International route expansion</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">2020</div>
                        <div className="text-gray-600">Digital transformation initiative</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Safety First',
                description: 'Safety is our top priority in every decision we make.',
                icon: '🛡️'
              },
              {
                title: 'Customer Focus',
                description: 'We put our customers at the heart of everything we do.',
                icon: '❤️'
              },
              {
                title: 'Reliability',
                description: 'Consistent, dependable service you can count on.',
                icon: '⏰'
              },
              {
                title: 'Innovation',
                description: 'Continuously improving through technology and best practices.',
                icon: '🚀'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="card-body">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of aviation professionals is committed to providing 
              exceptional service and ensuring your safety and comfort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Captain James Mitchell',
                role: 'Chief Executive Officer',
                description: '25+ years in aviation leadership',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
              },
              {
                name: 'Sarah Johnson',
                role: 'Chief Operating Officer',
                description: 'Expert in airline operations and safety',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face'
              },
              {
                name: 'Michael Chen',
                role: 'Head of Customer Service',
                description: 'Passionate about customer experience',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="card-body">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
