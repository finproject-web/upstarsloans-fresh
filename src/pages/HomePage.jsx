import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, FileText, Shield, TrendingUp, Star, Phone, Mail, Clock, ChevronDown } from 'lucide-react'

const HomePage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      title: 'Personal Loans',
      description: 'Explore personalized loan options from trusted lenders',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-purple-600 to-blue-600'
    },
    {
      title: 'Secure Process',
      description: 'Bank-level encryption protects your information',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-green-600 to-teal-600'
    },
    {
      title: 'Quick Response',
      description: 'Get connected with financial options efficiently',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-orange-600 to-red-600'
    },
    {
      title: 'Expert Support',
      description: 'Professional guidance throughout your journey',
      icon: <Users className="w-6 h-6" />,
      color: 'from-indigo-600 to-purple-600'
    }
  ]

  const howItWorks = [
    {
      step: '1',
      title: 'Share Your Details',
      description: 'Provide basic information about your financial needs in our secure form'
    },
    {
      step: '2',
      title: 'Review Available Options',
      description: 'Explore personalized financial options from our network of providers'
    },
    {
      step: '3',
      title: 'Choose What Works',
      description: 'Select the option that best fits your needs and complete your application'
    }
  ]

  const faqPreview = [
    {
      question: 'How does this platform work?',
      answer: 'We connect you with trusted financial service providers to help you explore available options based on your needs.'
    },
    {
      question: 'Will checking options affect my credit score?',
      answer: 'Initial exploratory inquiries typically do not impact your credit score. We recommend reviewing terms carefully before proceeding.'
    },
    {
      question: 'Is my information secure?',
      answer: 'Yes, we use bank-level encryption and security measures to protect your personal information.'
    }
  ]

  const stats = [
    { number: '50K+', label: 'Users Served' },
    { number: '100K+', label: 'Applications Processed' },
    { number: '4.8/5', label: 'User Rating' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Make Smarter
                <span className="gradient-text"> Financial Decisions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Explore personalized financial options securely with our trusted platform. 
                Connect with verified lenders and find solutions that work for your unique situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/personal-loans"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 text-center inline-flex items-center justify-center group"
                >
                  Check Your Options
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-purple-600 hover:text-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Learn More
                  <ChevronDown className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-600 font-medium">4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Bank-Level Security</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl p-8 card-shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                      <span className="text-sm font-medium text-gray-500">Your Potential Options</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Updated</span>
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">Personal Loan</h4>
                          <span className="text-sm text-purple-600 font-medium">$2,000 - $10,000</span>
                        </div>
                        <p className="text-sm text-gray-600">Flexible terms for various needs</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">Quick Processing</h4>
                          <span className="text-sm text-blue-600 font-medium">24-48 hrs</span>
                        </div>
                        <p className="text-sm text-gray-600">Fast review and response</p>
                      </div>
                    </div>
                    <Link
                      to="/personal-loans"
                      className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-center block"
                    >
                      View All Options
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to help you explore your options with confidence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-6 h-full card-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent process to help you explore financial options
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 card-shadow-lg h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-purple-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/personal-loans"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose UpStars?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Trusted Network</h4>
                    <p className="text-gray-600">Connect with verified financial service providers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">No Hidden Fees</h4>
                    <p className="text-gray-600">Transparent pricing and clear terms</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Privacy First</h4>
                    <p className="text-gray-600">Your information is always protected and secure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Support</h4>
                    <p className="text-gray-600">Professional guidance when you need it</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 card-shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Thousands of Satisfied Users</h3>
                <p className="text-gray-600">See what our customers say about their experience</p>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic">"Simple, secure, and helped me find the right options for my needs."</p>
                  <p className="text-gray-500 text-xs mt-2">- Sarah M.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic">"Transparent process with no surprises. Highly recommended."</p>
                  <p className="text-gray-500 text-xs mt-2">- John D.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {faqPreview.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/faq"
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 inline-flex items-center"
            >
              View All FAQs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Explore Your Options?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Take the first step towards finding the right financial solution for your needs. 
            Our secure platform helps you explore options from trusted providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/personal-loans"
              className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              Check Your Options
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              Contact Support
              <Phone className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
