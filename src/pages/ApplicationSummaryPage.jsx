import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Download, FileText, Shield, Clock, Users, AlertCircle, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react'

const ApplicationSummaryPage = () => {
  const [showDetails, setShowDetails] = useState(false)
  
  // Mock data - in real app this would come from the application form
  const applicationData = {
    applicationId: `APP-${Date.now().toString().slice(-8)}`,
    submittedDate: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    requestedAmount: '$5,000',
    loanPurpose: 'Debt Consolidation',
    applicantName: 'John Doe',
    email: 'john.doe@example.com'
  }

  const nextSteps = [
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Provider Review',
      description: 'Your information has been shared with relevant financial providers in our network',
      timeline: 'Within 24 hours'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Contact from Providers',
      description: 'Interested providers may contact you directly with their available options',
      timeline: '1-3 business days'
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: 'Review Offers',
      description: 'Carefully review all terms and conditions before proceeding with any provider',
      timeline: 'When you receive offers'
    }
  ]

  const importantNotes = [
    'UpStars does not directly provide loans or make approval decisions',
    'All loan terms, rates, and approval decisions are determined by independent providers',
    'Review all terms carefully before proceeding with any financial agreement',
    'You are under no obligation to accept any offer presented to you',
    'Never share sensitive financial information with unverified sources'
  ]

  const handleDownload = () => {
    // Simulate download functionality
    const summaryText = `
Application Summary
==================

Application ID: ${applicationData.applicationId}
Submitted Date: ${applicationData.submittedDate}
Applicant: ${applicationData.applicantName}
Email: ${applicationData.email}
Requested Amount: ${applicationData.requestedAmount}
Loan Purpose: ${applicationData.loanPurpose}

Important Information:
- This is a summary of your application submission
- Your information has been shared with financial providers
- Approval decisions are made by individual providers
- You are not obligated to accept any offers
- Review all terms carefully before proceeding

For questions, contact us at support@upstars.com or call 1-800-UPSTARS
    `.trim()

    const blob = new Blob([summaryText], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `application-summary-${applicationData.applicationId}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Application Submitted Successfully
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Thank you for submitting your information. Your request has been shared with relevant financial providers.
          </p>
        </div>
      </section>

      {/* Application Summary */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Application Summary</h2>
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium hover:bg-purple-200 transition-colors duration-200 inline-flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Summary
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Application ID</p>
                  <p className="font-semibold text-gray-900">{applicationData.applicationId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Submitted Date</p>
                  <p className="font-semibold text-gray-900">{applicationData.submittedDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Applicant Name</p>
                  <p className="font-semibold text-gray-900">{applicationData.applicantName}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="font-semibold text-gray-900">{applicationData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Requested Amount</p>
                  <p className="font-semibold text-gray-900">{applicationData.requestedAmount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Loan Purpose</p>
                  <p className="font-semibold text-gray-900">{applicationData.loanPurpose}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
              >
                <span>{showDetails ? 'Hide' : 'Show'} Important Details</span>
                {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              {showDetails && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg animate-fade-in">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Important Information</h4>
                      <ul className="text-yellow-700 text-sm space-y-1">
                        {importantNotes.map((note, index) => (
                          <li key={index}>• {note}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next</h2>
            <div className="space-y-6">
              {nextSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">{step.description}</p>
                    <p className="text-purple-600 text-xs font-medium">Timeline: {step.timeline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Important Reminder */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-purple-200 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3">Important Reminder</h3>
                <p className="text-purple-100 mb-4">
                  Please review any available options carefully before proceeding. Take your time to understand all terms, 
                  conditions, and obligations. You are never required to accept any offer, and legitimate providers will 
                  never pressure you into making quick decisions.
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Red Flags to Watch For:</h4>
                  <ul className="text-sm space-y-1 text-purple-100">
                    <li>• Requests for upfront fees before service delivery</li>
                    <li>• Guaranteed approval regardless of credit history</li>
                    <li>• Pressure to sign documents without proper review time</li>
                    <li>• Unprofessional communication methods</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Assistance?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDownload}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Summary
            </button>
            <Link
              to="/"
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-all duration-300 inline-flex items-center justify-center"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">About UpStars</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  UpStars is a financial services platform that connects users with third-party lenders and financial service providers. 
                  We do not directly provide loans, make credit decisions, or guarantee approval. All loan terms, rates, and approval decisions 
                  are determined by independent lenders based on their own criteria. Your information is shared only with verified providers 
                  in our network, and we use bank-level security to protect your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ApplicationSummaryPage
