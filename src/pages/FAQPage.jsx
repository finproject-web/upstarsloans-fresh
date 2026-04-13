import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp, Shield, Clock, Users, FileText, Phone, Mail } from 'lucide-react'

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How does this platform work?',
      answer: 'UpStars is a financial services platform that connects you with trusted lenders and financial service providers. You start by filling out our secure form with basic information about your financial needs. We then match you with available options from our network of providers, allowing you to compare and choose what works best for your situation.',
      category: 'General'
    },
    {
      question: 'Will checking options affect my credit score?',
      answer: 'Initial exploratory inquiries through our platform typically do not impact your credit score. However, when you proceed with a specific lender, they may perform a credit check as part of their approval process. We recommend reviewing all terms carefully before authorizing any credit inquiries.',
      category: 'Credit & Score'
    },
    {
      question: 'How long does the process take?',
      answer: 'The initial application process takes just 5-10 minutes. After submission, you may receive options within minutes to a few hours, depending on provider availability and response times. The complete process from application to final decision varies by provider and their specific requirements.',
      category: 'Process'
    },
    {
      question: 'Is my information secure?',
      answer: 'Yes, absolutely. We use bank-level encryption and security measures to protect your personal information. Your data is never shared with unauthorized parties, and we only connect you with verified financial service providers. We comply with all applicable data protection regulations.',
      category: 'Security'
    },
    {
      question: 'What happens after I submit my details?',
      answer: 'After submission, your information is securely shared with relevant financial providers in our network. You\'ll be redirected to an application summary page where you can review available options. Providers may contact you directly with their specific offers and next steps.',
      category: 'Process'
    },
    {
      question: 'Are there any fees for using this platform?',
      answer: 'UpStars does not charge any fees for using our platform to explore financial options. However, individual lenders and providers may have their own fees, interest rates, and charges. All such fees will be clearly disclosed by the providers before you commit to any financial product.',
      category: 'Costs & Fees'
    },
    {
      question: 'What types of financial products are available?',
      answer: 'Our network offers various financial products including personal loans, debt consolidation options, and other financing solutions. The specific products available to you depend on your location, credit profile, and the providers in our network.',
      category: 'Products'
    },
    {
      question: 'Can I choose which providers contact me?',
      answer: 'Yes, you have control over the process. After reviewing available options, you can choose which providers you\'d like to proceed with. You\'re never obligated to accept any offer, and you can decline any provider\'s offer without penalty.',
      category: 'Control'
    },
    {
      question: 'What if I\'m not approved by any providers?',
      answer: 'If you don\'t receive approval from providers initially, this doesn\'t mean you won\'t have options in the future. Credit requirements and product availability vary by provider and change over time. We recommend reviewing your financial situation and trying again when your circumstances change.',
      category: 'Approval'
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can reach our customer support team through the Contact page on our website, via email at support@upstars.com, or by calling 1-800-UPSTARS during business hours. We typically respond to inquiries within 24-48 hours.',
      category: 'Support'
    },
    {
      question: 'Is UpStars a direct lender?',
      answer: 'No, UpStars is not a direct lender. We are a financial services platform that connects users with third-party lenders and financial service providers. We do not make lending decisions, set interest rates, or provide loans directly.',
      category: 'General'
    },
    {
      question: 'What are the eligibility requirements?',
      answer: 'Eligibility requirements vary by provider and product type. Generally, you must be at least 18 years old, have a valid bank account, and meet the specific criteria set by individual lenders. Each provider will have their own requirements which will be clearly communicated.',
      category: 'Requirements'
    }
  ]

  const categories = ['All', 'General', 'Process', 'Security', 'Credit & Score', 'Costs & Fees', 'Products', 'Control', 'Approval', 'Support', 'Requirements']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredFAQs = selectedCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Get answers to common questions about our platform and process
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 font-semibold text-sm">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-4 animate-fade-in">
                      <div className="pl-11">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No FAQs Found</h3>
              <p className="text-gray-600">There are no questions in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our support team is here to help you with any questions about our platform, 
                the application process, or anything else you need assistance with.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone Support</h4>
                    <p className="text-gray-600">1-800-UPSTARS</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Support</h4>
                    <p className="text-gray-600">support@upstars.com</p>
                    <p className="text-sm text-gray-500">Response within 24-48 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Live Chat</h4>
                    <p className="text-gray-600">Available on our website</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-purple-100 mb-6">
                Take the first step towards exploring your financial options. 
                Our secure platform makes it easy to connect with trusted providers.
              </p>
              <div className="space-y-3">
                <Link
                  to="/personal-loans"
                  className="block w-full px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
                >
                  Start Your Application
                </Link>
                <Link
                  to="/contact"
                  className="block w-full px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 text-center"
                >
                  Contact Support Team
                </Link>
              </div>
              
              <div className="mt-6 pt-6 border-t border-purple-500">
                <div className="flex items-center space-x-2 text-purple-100 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Bank-level security for your protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Links</h3>
            <p className="text-gray-600">Explore more about our platform</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/how-it-works"
              className="p-4 bg-white rounded-lg text-center hover:shadow-md transition-all duration-300"
            >
              <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">How It Works</span>
            </Link>
            
            <Link
              to="/personal-loans"
              className="p-4 bg-white rounded-lg text-center hover:shadow-md transition-all duration-300"
            >
              <FileText className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">Apply Now</span>
            </Link>
            
            <Link
              to="/privacy-policy"
              className="p-4 bg-white rounded-lg text-center hover:shadow-md transition-all duration-300"
            >
              <Shield className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">Privacy Policy</span>
            </Link>
            
            <Link
              to="/terms-of-service"
              className="p-4 bg-white rounded-lg text-center hover:shadow-md transition-all duration-300"
            >
              <FileText className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <span className="text-sm font-medium text-gray-900">Terms of Service</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQPage
