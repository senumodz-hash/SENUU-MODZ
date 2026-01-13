'use client'

import { Mail, Phone, Github, MessageSquare } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically connect to a backend
    window.location.href = `mailto:senumodz@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'senumodz@gmail.com',
      action: 'mailto:senumodz@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+94 74 390 3048',
      action: 'tel:+94743903048'
    },
    {
      icon: MessageSquare,
      title: 'Telegram',
      value: '@senumodz',
      action: 'https://t.me/senumodz'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'senumodz',
      action: 'https://github.com/senumodz'
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">In Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's build something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <a
                    key={index}
                    href={method.action}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 glass-effect rounded-xl hover:bg-gray-800/50 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 mr-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{method.title}</div>
                      <div className="text-gray-400">{method.value}</div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Quick Response Note */}
            <div className="mt-8 p-6 glass-effect rounded-xl">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <span className="text-green-400 font-semibold">Quick Response Guaranteed</span>
              </div>
              <p className="text-gray-400 mt-2">
                I typically respond within a few hours. For urgent matters, please call or message on Telegram.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors h-32 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:opacity-90 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
