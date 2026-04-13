import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Users, CheckCircle, Shield, Clock, TrendingUp } from 'lucide-react'

const HowItWorksPage = () => {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Share Your Details',
      description: 'Provide basic information about your financial needs in our secure online form. The process takes just a few minutes and your information is protected with bank-level encryption.',
      features: [
        'Simple online form',
        'Bank-level security',
        'Takes less than 5 minutes',
        'No impact on credit score'
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Review Available Options',
      description: 'Explore personalized financial options from our network of trusted providers. Each option is clearly presented with transparent terms and conditions.',
      features: [
        'Multiple provider options',
        'Transparent terms',
        'Compare side-by-side',
        'No obligation to proceed'
      ]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Choose What Works',
      description: 'Select the option that best fits your needs and complete your application directly with the provider. You\'re in control of the entire process.',
      features: [
        'You make the choice',
        'Direct provider contact',
        'Complete at your pace',
        'Full control over decisions'
      ]
    }
  ]

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Private',
      description: 'Your information is encrypted and never shared without your consent'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Quick Process',
      description: 'Get connected with options in minutes, not days'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Better Options',
      description: 'Access to multiple providers increases your chances of finding the right fit'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Support',
      description: 'Professional guidance available whenever you need it'
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Simple, transparent process to help you explore financial options from trusted providers
          </p>
        </div>
      </section>

      {/* Main Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 h-full card-shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-purple-600 mb-6 mx-auto">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{step.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-purple-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Process Flow */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Journey to Financial Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From start to finish, we make the process simple and transparent
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-blue-600"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              <div className="flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="md:w-1/2 text-right">
                    <div className="bg-purple-50 rounded-lg p-6 inline-block text-left">
                      <h4 className="font-semibold text-gray-900 mb-2">Start Your Application</h4>
                      <p className="text-gray-600 text-sm">Fill out our secure form with your basic information</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="md:w-1/2"></div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="md:w-1/2">
                    <div className="bg-blue-50 rounded-lg p-6 inline-block">
                      <h4 className="font-semibold text-gray-900 mb-2">Review Your Options</h4>
                      <p className="text-gray-600 text-sm">Explore personalized offers from trusted providers</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="md:w-1/2 text-right">
                    <div className="bg-green-50 rounded-lg p-6 inline-block text-left">
                      <h4 className="font-semibold text-gray-900 mb-2">Choose & Complete</h4>
                      <p className="text-gray-600 text-sm">Select the best option and finalize with your chosen provider</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're designed to make your financial journey easier and more transparent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards exploring your financial options. Our secure platform 
              connects you with trusted providers in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/personal-loans"
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Start Your Application
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/faq"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-yellow-600 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Important Information</h3>
                <p className="text-yellow-700 text-sm leading-relaxed">
                  UpStars is a financial services platform that connects users with third-party lenders and financial service providers. 
                  We do not directly provide loans, make credit decisions, or guarantee approval. All loan terms, rates, and approval decisions 
                  are determined by independent lenders based on their own criteria. Please review all terms carefully before proceeding with any financial agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorksPage
