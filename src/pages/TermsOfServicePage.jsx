import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Shield, AlertCircle, Users, Scale, Clock } from 'lucide-react'

const TermsOfServicePage = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  const sections = [
    {
      title: 'Platform Usage Terms',
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Acceptance of Terms',
          text: 'By accessing and using UpStars ("the Platform"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Platform.'
        },
        {
          subtitle: 'Eligibility',
          text: 'You must be at least 18 years of age and have the legal capacity to enter into contracts. By using our Platform, you represent and warrant that you meet these eligibility requirements.'
        },
        {
          subtitle: 'Account Registration',
          text: 'You may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.'
        },
        {
          subtitle: 'Prohibited Uses',
          text: 'You may not use our Platform for illegal purposes, to harass others, to transmit harmful content, or to interfere with the proper functioning of the Platform. We reserve the right to suspend or terminate accounts that violate these provisions.'
        }
      ]
    },
    {
      title: 'User Responsibilities',
      icon: <Shield className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Accurate Information',
          text: 'You are responsible for providing accurate, complete, and current information when using our Platform. Providing false or misleading information may result in termination of your account and inability to access our services.'
        },
        {
          subtitle: 'Communication with Providers',
          text: 'When communicating with financial providers through our Platform, you must conduct yourself professionally and honestly. We are not responsible for the conduct or decisions of third-party providers.'
        },
        {
          subtitle: 'Financial Decisions',
          text: 'You are solely responsible for evaluating and selecting financial products and services. We do not provide financial advice, and you should consult with qualified professionals before making financial decisions.'
        },
        {
          subtitle: 'Security Obligations',
          text: 'You must maintain the security of your account and immediately notify us of any unauthorized use. You are responsible for all activities that occur under your account.'
        }
      ]
    },
    {
      title: 'Third-Party Providers',
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Platform Role',
          text: 'UpStars is a financial services platform that connects users with third-party lenders and financial service providers. We do not directly provide loans, make credit decisions, or guarantee approval of any financial products.'
        },
        {
          subtitle: 'Provider Relationships',
          text: 'We work with various financial providers but do not endorse or guarantee any specific provider. All terms, rates, and conditions are determined by individual providers based on their own criteria.'
        },
        {
          subtitle: 'Provider Communications',
          text: 'Financial providers may contact you directly based on the information you provide. We are not responsible for the content, accuracy, or timing of these communications.'
        },
        {
          subtitle: 'Provider Disputes',
          text: 'Any disputes with financial providers must be resolved directly with the provider. We may assist in facilitating communication but are not responsible for provider decisions or actions.'
        }
      ]
    },
    {
      title: 'Limitation of Liability',
      icon: <Scale className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Platform Availability',
          text: 'We strive to maintain our Platform\'s availability but do not guarantee uninterrupted service. We are not liable for any losses resulting from platform downtime, maintenance, or technical issues.'
        },
        {
          subtitle: 'Financial Outcomes',
          text: 'We do not guarantee any specific financial outcomes, loan approvals, or interest rates. All financial decisions are made by third-party providers based on their own evaluation criteria.'
        },
        {
          subtitle: 'Indirect Damages',
          text: 'To the maximum extent permitted by law, we are not liable for any indirect, incidental, consequential, or punitive damages arising from your use of our Platform.'
        },
        {
          subtitle: 'Liability Cap',
          text: 'Our total liability for any claims related to your use of the Platform shall not exceed the amount you have paid, if any, for our services during the twelve months preceding the claim.'
        }
      ]
    },
    {
      title: 'Dispute Resolution',
      icon: <AlertCircle className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Informal Resolution',
          text: 'We encourage users to contact us directly to resolve any disputes or concerns. Our customer support team will work with you to address issues promptly and fairly.'
        },
        {
          subtitle: 'Governing Law',
          text: 'These Terms are governed by and construed in accordance with the laws of the State of New York, without regard to conflict of law principles.'
        },
        {
          subtitle: 'Arbitration Agreement',
          text: 'Any disputes arising from or relating to these Terms or your use of the Platform shall be resolved through binding arbitration, except for claims that may be brought in small claims court.'
        },
        {
          subtitle: 'Class Action Waiver',
          text: 'You agree to resolve disputes individually and waive any right to participate in class action lawsuits or class-wide arbitration against UpStars.'
        }
      ]
    }
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            The legal terms governing your use of the UpStars platform
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 mt-1" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
                <p className="text-yellow-700 leading-relaxed">
                  Please read these Terms of Service carefully before using UpStars. These terms establish a legally 
                  binding agreement between you and UpStars. By using our platform, you acknowledge that you have read, 
                  understood, and agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Welcome to UpStars, a financial services platform that connects users with trusted lenders and financial 
              service providers. These Terms of Service ("Terms") govern your use of our website, services, and platform 
              (collectively, the "Platform").
            </p>
            <p className="text-gray-700 leading-relaxed">
              UpStars is not a direct lender and does not make credit decisions or guarantee loan approvals. We serve as 
              an intermediary to help you explore financial options from third-party providers. Please read these Terms 
              carefully and contact us if you have any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.subtitle}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content, features, and functionality of the UpStars Platform are owned by UpStars and are protected 
                by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, 
                or create derivative works without our express written permission.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You retain ownership of any information you provide to us, but you grant us a license to use, process, 
                and share this information as necessary to provide our services and as described in our Privacy Policy.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may suspend or terminate your account and access to the Platform at any time, with or without cause, 
                with or without notice. Upon termination, your right to use the Platform ceases immediately.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may terminate your account at any time by contacting our customer support team. Termination does not 
                relieve you of any obligations incurred prior to termination.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify, defend, and hold harmless UpStars and its affiliates, officers, directors, 
                employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including 
                reasonable attorneys\' fees, arising from your use of the Platform or violation of these Terms.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. When we make changes, we will post the updated 
                Terms on our Platform and update the "Last updated" date. Your continued use of the Platform after any 
                changes constitutes acceptance of the modified Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For material changes, we will provide additional notice, such as sending you an email or displaying a 
                prominent notice on our Platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            If you have any questions about these Terms of Service, please contact our legal team.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <FileText className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <a href="mailto:legal@upstars.com" className="text-purple-100 hover:text-white">
                legal@upstars.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <FileText className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Mail</h3>
              <p className="text-purple-100 text-sm">
                UpStars Legal Department<br />
                123 Financial District<br />
                Suite 100, New York, NY 10004
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfServicePage
