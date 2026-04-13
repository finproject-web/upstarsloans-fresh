import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, Lock, Eye, Database, Users, FileText } from 'lucide-react'

const PrivacyPolicyPage = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  const sections = [
    {
      title: 'Information We Collect',
      icon: <Database className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you use our platform, we collect information you provide directly to us, such as your name, email address, phone number, mailing address, date of birth, and Social Security number. We also collect financial information including bank details, income information, and loan preferences.'
        },
        {
          subtitle: 'Application Information',
          text: 'When you submit an application, we collect details about your financial needs, requested loan amounts, loan purposes, and other relevant information needed to match you with appropriate financial providers.'
        },
        {
          subtitle: 'Technical Information',
          text: 'We automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, operating system, and browsing behavior on our site.'
        },
        {
          subtitle: 'Communication Information',
          text: 'We record communications with our customer support team and may collect information from third-party sources to verify your identity and prevent fraud.'
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      icon: <Eye className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to connect you with financial service providers, process your applications, and provide you with relevant financial options that match your needs.'
        },
        {
          subtitle: 'Communication',
          text: 'We use your contact information to communicate with you about your applications, respond to your inquiries, and send you important updates about our services.'
        },
        {
          subtitle: 'Platform Improvement',
          text: 'We analyze usage patterns and feedback to improve our platform, develop new features, and enhance the user experience.'
        },
        {
          subtitle: 'Legal Compliance',
          text: 'We use your information to comply with legal obligations, prevent fraud, and ensure the security and integrity of our platform.'
        }
      ]
    },
    {
      title: 'Data Protection Measures',
      icon: <Lock className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Encryption',
          text: 'All data transmitted between your device and our servers is encrypted using industry-standard SSL/TLS protocols. Sensitive information is encrypted at rest using advanced encryption methods.'
        },
        {
          subtitle: 'Access Controls',
          text: 'We implement strict access controls and authentication mechanisms to ensure that only authorized personnel can access your personal information.'
        },
        {
          subtitle: 'Regular Security Audits',
          text: 'We conduct regular security assessments and audits to identify and address potential vulnerabilities in our systems.'
        },
        {
          subtitle: 'Compliance Standards',
          text: 'Our security practices comply with industry standards including PCI DSS for payment processing and applicable data protection regulations.'
        }
      ]
    },
    {
      title: 'Third-Party Sharing',
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Financial Providers',
          text: 'We share your information with verified financial service providers in our network to process your applications and provide you with financial options. We only share information that is necessary for these providers to evaluate your application.'
        },
        {
          subtitle: 'Service Providers',
          text: 'We work with third-party service providers who assist us in operating our platform, such as cloud hosting services, payment processors, and analytics providers. These providers are contractually obligated to protect your information.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information when required by law, court order, or government request, or to protect our rights, property, or safety, or that of our users or the public.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or sale of all or part of our assets, user information may be transferred as part of the transaction.'
        }
      ]
    },
    {
      title: 'Your Rights and Choices',
      icon: <Shield className="w-6 h-6" />,
      content: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access and update your personal information through your account settings or by contacting our support team.'
        },
        {
          subtitle: 'Data Deletion',
          text: 'You may request deletion of your personal information, subject to legal obligations and our legitimate business interests.'
        },
        {
          subtitle: 'Marketing Preferences',
          text: 'You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or updating your preferences in your account.'
        },
        {
          subtitle: 'Cookie Controls',
          text: 'You can control cookies through your browser settings, though disabling certain cookies may affect your ability to use some features of our platform.'
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
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Learn how we collect, use, and protect your personal information
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

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              At UpStars, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, share, and protect your information when you use our financial 
              services platform. By using UpStars, you agree to the practices described in this policy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are transparent about our data practices and provide you with control over your personal information. 
              If you have any questions about this Privacy Policy or our data practices, please contact us at 
              <a href="mailto:privacy@upstars.com" className="text-purple-600 hover:text-purple-700"> privacy@upstars.com</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
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

      {/* Data Retention */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information for as long as necessary to provide our services, comply with legal obligations, 
              resolve disputes, and enforce our agreements. The specific retention periods vary depending on the type of information 
              and the purpose for which it was collected.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When your information is no longer needed, we securely delete or anonymize it in accordance with applicable laws 
              and our data retention policies.
            </p>
          </div>
        </div>
      </section>

      {/* International Transfers */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your own. When we transfer your 
              information internationally, we ensure appropriate safeguards are in place to protect your privacy and data 
              security in accordance with applicable data protection laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These safeguards may include standard contractual clauses, binding corporate rules, or other legally recognized 
              mechanisms for international data transfers.
            </p>
          </div>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-yellow-800 mb-6">Children's Privacy</h2>
            <p className="text-yellow-700 leading-relaxed">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
              information from children under 18. If we become aware that we have collected information from a child under 18, 
              we will take steps to delete such information promptly. If you believe we have collected information from a child 
              under 18, please contact us immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Changes to This Policy */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, applicable laws, 
              or operational requirements. When we make material changes, we will notify you by email or through prominent 
              notices on our website prior to the effective date of the changes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <FileText className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <a href="mailto:privacy@upstars.com" className="text-purple-100 hover:text-white">
                privacy@upstars.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <FileText className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Mail</h3>
              <p className="text-purple-100 text-sm">
                UpStars Privacy Team<br />
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

export default PrivacyPolicyPage
