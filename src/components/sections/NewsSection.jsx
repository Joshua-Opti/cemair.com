import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const NewsSection = () => {
  const newsItems = [
    {
      title: 'CemAir Announces New Route to Cape Town',
      excerpt: 'We\'re excited to announce our new daily service between Johannesburg and Cape Town, starting next month.',
      date: '2024-01-15',
      category: 'Route Updates',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop'
    },
    {
      title: 'Enhanced Safety Measures Implemented',
      excerpt: 'CemAir has implemented additional safety protocols to ensure the highest standards of passenger safety.',
      date: '2024-01-10',
      category: 'Safety',
      image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&h=250&fit=crop'
    },
    {
      title: 'New Aircraft Added to Fleet',
      excerpt: 'Our fleet expansion continues with the addition of two new Beechcraft 1900 aircraft.',
      date: '2024-01-05',
      category: 'Fleet',
      image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=400&h=250&fit=crop'
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

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
            Latest News & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed about CemAir's latest developments, route updates, and industry news.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="card-body">
                <div className="text-sm text-gray-500 mb-2">
                  {formatDate(item.date)}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                
                <Link
                  to={`/news/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/news"
            className="btn btn-secondary text-lg px-8 py-3"
          >
            View All News
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
