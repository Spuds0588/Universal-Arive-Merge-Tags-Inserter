// tags.js
const ARIVE_TAGS = [
  {
    tagString: "{{amcAgent.address}}",
    label: "AMC Address"
  },
  {
    tagString: "{{amcAgent.companyName}}",
    label: "AMC Company Name"
  },
  {
    tagString: "{{amcAgent.email}}",
    label: "AMC Email"
  },
  {
    tagString: "{{amcAgent.name}}",
    label: "AMC Name"
  },
  {
    tagString: "{{amcAgent.cbPosLink}}",
    label: "AMC POS Co-branded Link"
  },
  {
    tagString: "{{amcAgent.phone}}",
    label: "AMC Phone"
  },
  {
    tagString: "{{amcAgent.profileImage}}",
    label: "AMC Profile Image"
  },
  {
    tagString: "{{lender.ariveOrInvestorLoanNo}}",
    label: "ARIVE or Investor Loan No"
  },
  {
    tagString: "{{additionalBorrowers.firstNames}}",
    label: "Additional Borrowers First Names"
  },
  {
    tagString: "{{additionalBorrowers.fullNames}}",
    label: "Additional Borrowers Full Names"
  },
  {
    tagString: "{{additionalBorrowers.lastNames}}",
    label: "Additional Borrowers Last Names"
  },
  {
    tagString: "{{allBorrower.firstNames}}",
    label: "All Borrowers First Names"
  },
  {
    tagString: "{{allBorrower.fullNames}}",
    label: "All Borrowers Full Names"
  },
  {
    tagString: "{{allBorrower.lastNames}}",
    label: "All Borrowers Last Names"
  },
  {
    tagString: "{{appraisalContact.address}}",
    label: "Appraisal Contact Address"
  },
  {
    tagString: "{{appraisalContact.companyName}}",
    label: "Appraisal Contact Company Name"
  },
  {
    tagString: "{{appraisalContact.email}}",
    label: "Appraisal Contact Email"
  },
  {
    tagString: "{{appraisalContact.name}}",
    label: "Appraisal Contact Name"
  },
  {
    tagString: "{{appraisalContact.cbPosLink}}",
    label: "Appraisal Contact POS Co-branded Link"
  },
  {
    tagString: "{{appraisalContact.phone}}",
    label: "Appraisal Contact Phone"
  },
  {
    tagString: "{{appraisalContact.profileImage}}",
    label: "Appraisal Contact Profile Image"
  },
  {
    tagString: "{{architectureEngineer.address}}",
    label: "Architect/Engineer Address"
  },
  {
    tagString: "{{architectureEngineer.companyName}}",
    label: "Architect/Engineer Company Name"
  },
  {
    tagString: "{{architectureEngineer.email}}",
    label: "Architect/Engineer Email"
  },
  {
    tagString: "{{architectureEngineer.name}}",
    label: "Architect/Engineer Name"
  },
  {
    tagString: "{{architectureEngineer.cbPosLink}}",
    label: "Architect/Engineer POS Co-branded Link"
  },
  {
    tagString: "{{architectureEngineer.phone}}",
    label: "Architect/Engineer Phone"
  },
  {
    tagString: "{{architectureEngineer.profileImage}}",
    label: "Architect/Engineer Profile Image"
  },
  {
    tagString: "{{attorney.address}}",
    label: "Attorney Address"
  },
  {
    tagString: "{{attorneyAssistant.address}}",
    label: "Attorney Assistant Address"
  },
  {
    tagString: "{{attorneyAssistant.companyName}}",
    label: "Attorney Assistant Company Name"
  },
  {
    tagString: "{{attorneyAssistant.email}}",
    label: "Attorney Assistant Email"
  },
  {
    tagString: "{{attorneyAssistant.name}}",
    label: "Attorney Assistant Name"
  },
  {
    tagString: "{{attorneyAssistant.cbPosLink}}",
    label: "Attorney Assistant POS Co-branded Link"
  },
  {
    tagString: "{{attorneyAssistant.phone}}",
    label: "Attorney Assistant Phone"
  },
  {
    tagString: "{{attorneyAssistant.profileImage}}",
    label: "Attorney Assistant Profile Image"
  },
  {
    tagString: "{{attorney.companyName}}",
    label: "Attorney Company Name"
  },
  {
    tagString: "{{attorney.email}}",
    label: "Attorney Email"
  },
  {
    tagString: "{{attorney.name}}",
    label: "Attorney Name"
  },
  {
    tagString: "{{attorney.cbPosLink}}",
    label: "Attorney POS Co-branded Link"
  },
  {
    tagString: "{{attorney.phone}}",
    label: "Attorney Phone"
  },
  {
    tagString: "{{attorney.profileImage}}",
    label: "Attorney Profile Image"
  },
  {
    tagString: "{{additionalBorrowers.2.primary.score}}",
    label: "Borrower Credit Score (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.primary.score}}",
    label: "Borrower Credit Score (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.primary.score}}",
    label: "Borrower Credit Score (4th 1003 App)"
  },
  {
    tagString: "{{borrower.currentAddress}}",
    label: "Borrower Current Address"
  },
  {
    tagString: "{{additionalBorrowers.2.primary.currentAddress}}",
    label: "Borrower Current Address (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.primary.currentAddress}}",
    label: "Borrower Current Address (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.primary.currentAddress}}",
    label: "Borrower Current Address (4th 1003 App)"
  },
  {
    tagString: "{{borrower.dob}}",
    label: "Borrower DOB"
  },
  {
    tagString: "{{additionalBorrowers.2.primary.dob}}",
    label: "Borrower DOB (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.primary.dob}}",
    label: "Borrower DOB (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.primary.dob}}",
    label: "Borrower DOB (4th 1003 App)"
  },
  {
    tagString: "{{borrower.email}}",
    label: "Borrower Email"
  },
  {
    tagString: "{{additionalBorrowers.2.primary.email}}",
    label: "Borrower Email (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.primary.email}}",
    label: "Borrower Email (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.primary.email}}",
    label: "Borrower Email (4th 1003 App)"
  },
  {
    tagString: "{{borrower.firstName}}",
    label: "Borrower First Name"
  },
  {
    tagString: "{{additionalBorrowers.2.primary.firstName}}",
    label: "Borrower First Name (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.primary.firstName}}",
    label: "Borrower First Name (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.primary.firstName}}",
    label: "Borrower First Name (4th 1003 App)"
  },
  {
    tagString: "{{borrower.fullName}}",
    label: "Borrower Full Name"
  },
  {
    tagString: "{{additionalBorrowers.2.primary.fullName}}",
    label: "Borrower Full Name (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.primary.fullName}}",
    label: "Borrower Full Name (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.primary.fullName}}",
    label: "Borrower Full Name (4th 1003 App)"
  },
  {
    tagString: "{{borrower.lastName}}",
    label: "Borrower Last Name"
  },
  {
    tagString: "{{additionalBorrowers.2.primary.lastName}}",
    label: "Borrower Last Name (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.primary.lastName}}",
    label: "Borrower Last Name (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.primary.lastName}}",
    label: "Borrower Last Name (4th 1003 App)"
  },
  {
    tagString: "{{borrower.mailingAddress}}",
    label: "Borrower Mailing Address"
  },
  {
    tagString: "{{additionalBorrowers.2.primary.mailingAddress}}",
    label: "Borrower Mailing Address (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.primary.mailingAddress}}",
    label: "Borrower Mailing Address (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.primary.mailingAddress}}",
    label: "Borrower Mailing Address (4th 1003 App)"
  },
  {
    tagString: "{{borrower.maritalStatus}}",
    label: "Borrower Marital Status"
  },
  {
    tagString: "{{additionalBorrowers.2.primary.maritalStatus}}",
    label: "Borrower Marital Status (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.primary.maritalStatus}}",
    label: "Borrower Marital Status (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.primary.maritalStatus}}",
    label: "Borrower Marital Status (4th 1003 App)"
  },
  {
    tagString: "{{borrower.name}}",
    label: "Borrower Name"
  },
  {
    tagString: "{{additionalBorrowers.2.primary.name}}",
    label: "Borrower Name (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.primary.name}}",
    label: "Borrower Name (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.primary.name}}",
    label: "Borrower Name (4th 1003 App)"
  },
  {
    tagString: "{{borrower.nickName}}",
    label: "Borrower Nick Name"
  },
  {
    tagString: "{{additionalBorrowers.2.primary.nickName}}",
    label: "Borrower Nick Name (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.primary.nickName}}",
    label: "Borrower Nick Name (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.primary.nickName}}",
    label: "Borrower Nick Name (4th 1003 App)"
  },
  {
    tagString: "{{borrower.phone}}",
    label: "Borrower Phone"
  },
  {
    tagString: "{{additionalBorrowers.2.primary.phone}}",
    label: "Borrower Phone (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.primary.phone}}",
    label: "Borrower Phone (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.primary.phone}}",
    label: "Borrower Phone (4th 1003 App)"
  },
  {
    tagString: "{{borrower.ssn}}",
    label: "Borrower SSN"
  },
  {
    tagString: "{{additionalBorrowers.2.primary.ssn}}",
    label: "Borrower SSN (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.primary.ssn}}",
    label: "Borrower SSN (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.primary.ssn}}",
    label: "Borrower SSN (4th 1003 App)"
  },
  {
    tagString: "{{builder.address}}",
    label: "Builder/Developer Address"
  },
  {
    tagString: "{{builder.companyName}}",
    label: "Builder/Developer Company Name"
  },
  {
    tagString: "{{builder.email}}",
    label: "Builder/Developer Email"
  },
  {
    tagString: "{{builder.name}}",
    label: "Builder/Developer Name"
  },
  {
    tagString: "{{builder.cbPosLink}}",
    label: "Builder/Developer POS Co-branded Link"
  },
  {
    tagString: "{{builder.phone}}",
    label: "Builder/Developer Phone"
  },
  {
    tagString: "{{builder.profileImage}}",
    label: "Builder/Developer Profile Image"
  },
  {
    tagString: "{{buyerAttorney.address}}",
    label: "Buyer Attorney Address"
  },
  {
    tagString: "{{buyerAttorneyAssistant.address}}",
    label: "Buyer Attorney Assistant Address"
  },
  {
    tagString: "{{buyerAttorneyAssistant.companyName}}",
    label: "Buyer Attorney Assistant Company Name"
  },
  {
    tagString: "{{buyerAttorneyAssistant.email}}",
    label: "Buyer Attorney Assistant Email"
  },
  {
    tagString: "{{buyerAttorneyAssistant.name}}",
    label: "Buyer Attorney Assistant Name"
  },
  {
    tagString: "{{buyerAttorneyAssistant.cbPosLink}}",
    label: "Buyer Attorney Assistant POS Co-branded Link"
  },
  {
    tagString: "{{buyerAttorneyAssistant.phone}}",
    label: "Buyer Attorney Assistant Phone"
  },
  {
    tagString: "{{buyerAttorneyAssistant.profileImage}}",
    label: "Buyer Attorney Assistant Profile Image"
  },
  {
    tagString: "{{buyerAttorney.companyName}}",
    label: "Buyer Attorney Company Name"
  },
  {
    tagString: "{{buyerAttorney.email}}",
    label: "Buyer Attorney Email"
  },
  {
    tagString: "{{buyerAttorney.name}}",
    label: "Buyer Attorney Name"
  },
  {
    tagString: "{{buyerAttorney.cbPosLink}}",
    label: "Buyer Attorney POS Co-branded Link"
  },
  {
    tagString: "{{buyerAttorney.phone}}",
    label: "Buyer Attorney Phone"
  },
  {
    tagString: "{{buyerAttorney.profileImage}}",
    label: "Buyer Attorney Profile Image"
  },
  {
    tagString: "{{buyerREA.address}}",
    label: "Buyer Real Estate Agent Address"
  },
  {
    tagString: "{{buyerREA.companyName}}",
    label: "Buyer Real Estate Agent Company Name"
  },
  {
    tagString: "{{buyerREA.email}}",
    label: "Buyer Real Estate Agent Email"
  },
  {
    tagString: "{{buyerREA.name}}",
    label: "Buyer Real Estate Agent Name"
  },
  {
    tagString: "{{buyerREA.cbPosLink}}",
    label: "Buyer Real Estate Agent POS Co-branded Link"
  },
  {
    tagString: "{{buyerREA.phone}}",
    label: "Buyer Real Estate Agent Phone"
  },
  {
    tagString: "{{buyerREA.profileImage}}",
    label: "Buyer Real Estate Agent Profile Image"
  },
  {
    tagString: "{{buyerTransactionCoordinator.address}}",
    label: "Buyer Transaction Coordinator Address"
  },
  {
    tagString: "{{buyerTransactionCoordinator.companyName}}",
    label: "Buyer Transaction Coordinator Company Name"
  },
  {
    tagString: "{{buyerTransactionCoordinator.email}}",
    label: "Buyer Transaction Coordinator Email"
  },
  {
    tagString: "{{buyerTransactionCoordinator.name}}",
    label: "Buyer Transaction Coordinator Name"
  },
  {
    tagString: "{{buyerTransactionCoordinator.cbPosLink}}",
    label: "Buyer Transaction Coordinator POS Co-branded Link"
  },
  {
    tagString: "{{buyerTransactionCoordinator.phone}}",
    label: "Buyer Transaction Coordinator Phone"
  },
  {
    tagString: "{{buyerTransactionCoordinator.profileImage}}",
    label: "Buyer Transaction Coordinator Profile Image"
  },
  {
    tagString: "{{cpa.address}}",
    label: "CPA Address"
  },
  {
    tagString: "{{cpa.companyName}}",
    label: "CPA Company Name"
  },
  {
    tagString: "{{cpa.email}}",
    label: "CPA Email"
  },
  {
    tagString: "{{cpa.name}}",
    label: "CPA Name"
  },
  {
    tagString: "{{cpa.cbPosLink}}",
    label: "CPA POS Co-branded Link"
  },
  {
    tagString: "{{cpa.phone}}",
    label: "CPA Phone"
  },
  {
    tagString: "{{cpa.profileImage}}",
    label: "CPA Profile Image"
  },
  {
    tagString: "{{cashFromToBorrowerAmt}}",
    label: "Cash from Borrower"
  },
  {
    tagString: "{{closingAgent.address}}",
    label: "Closing Agent Address"
  },
  {
    tagString: "{{closingAgent.companyName}}",
    label: "Closing Agent Company Name"
  },
  {
    tagString: "{{closingAgent.email}}",
    label: "Closing Agent Email"
  },
  {
    tagString: "{{closingAgent.name}}",
    label: "Closing Agent Name"
  },
  {
    tagString: "{{closingAgent.cbPosLink}}",
    label: "Closing Agent POS Co-branded Link"
  },
  {
    tagString: "{{closingAgent.phone}}",
    label: "Closing Agent Phone"
  },
  {
    tagString: "{{closingAgent.profileImage}}",
    label: "Closing Agent Profile Image"
  },
  {
    tagString: "{{closingAssistantAgent.address}}",
    label: "Closing Assistant Agent Address"
  },
  {
    tagString: "{{closingAssistantAgent.companyName}}",
    label: "Closing Assistant Agent Company Name"
  },
  {
    tagString: "{{closingAssistantAgent.email}}",
    label: "Closing Assistant Agent Email"
  },
  {
    tagString: "{{closingAssistantAgent.name}}",
    label: "Closing Assistant Agent Name"
  },
  {
    tagString: "{{closingAssistantAgent.cbPosLink}}",
    label: "Closing Assistant Agent POS Co-branded Link"
  },
  {
    tagString: "{{closingAssistantAgent.phone}}",
    label: "Closing Assistant Agent Phone"
  },
  {
    tagString: "{{closingAssistantAgent.profileImage}}",
    label: "Closing Assistant Agent Profile Image"
  },
  {
    tagString: "{{coBorrowerCreditInfo.score}}",
    label: "Co-Borrower Credit Score"
  },
  {
    tagString: "{{additionalBorrowers.2.secondary.score}}",
    label: "Co-Borrower Credit Score (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.secondary.score}}",
    label: "Co-Borrower Credit Score (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.secondary.score}}",
    label: "Co-Borrower Credit Score (4th 1003 App)"
  },
  {
    tagString: "{{coBorrower.currentAddress}}",
    label: "Co-Borrower Current Address"
  },
  {
    tagString: "{{additionalBorrowers.2.secondary.currentAddress}}",
    label: "Co-Borrower Current Address (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.secondary.currentAddress}}",
    label: "Co-Borrower Current Address (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.secondary.currentAddress}}",
    label: "Co-Borrower Current Address (4th 1003 App)"
  },
  {
    tagString: "{{coBorrower.dob}}",
    label: "Co-Borrower DOB"
  },
  {
    tagString: "{{additionalBorrowers.2.secondary.dob}}",
    label: "Co-Borrower DOB (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.secondary.dob}}",
    label: "Co-Borrower DOB (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.secondary.dob}}",
    label: "Co-Borrower DOB (4th 1003 App)"
  },
  {
    tagString: "{{coBorrower.email}}",
    label: "Co-Borrower Email"
  },
  {
    tagString: "{{additionalBorrowers.2.secondary.email}}",
    label: "Co-Borrower Email (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.secondary.email}}",
    label: "Co-Borrower Email (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.secondary.email}}",
    label: "Co-Borrower Email (4th 1003 App)"
  },
  {
    tagString: "{{coBorrower.firstName}}",
    label: "Co-Borrower First Name"
  },
  {
    tagString: "{{additionalBorrowers.2.secondary.firstName}}",
    label: "Co-Borrower First Name (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.secondary.firstName}}",
    label: "Co-Borrower First Name (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.secondary.firstName}}",
    label: "Co-Borrower First Name (4th 1003 App)"
  },
  {
    tagString: "{{coBorrower.fullName}}",
    label: "Co-Borrower Full Name"
  },
  {
    tagString: "{{additionalBorrowers.2.secondary.fullName}}",
    label: "Co-Borrower Full Name (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.secondary.fullName}}",
    label: "Co-Borrower Full Name (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.secondary.fullName}}",
    label: "Co-Borrower Full Name (4th 1003 App)"
  },
  {
    tagString: "{{coBorrower.lastName}}",
    label: "Co-Borrower Last Name"
  },
  {
    tagString: "{{additionalBorrowers.2.secondary.lastName}}",
    label: "Co-Borrower Last Name (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.secondary.lastName}}",
    label: "Co-Borrower Last Name (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.secondary.lastName}}",
    label: "Co-Borrower Last Name (4th 1003 App)"
  },
  {
    tagString: "{{coBorrower.mailingAddress}}",
    label: "Co-Borrower Mailing Address"
  },
  {
    tagString: "{{additionalBorrowers.2.secondary.mailingAddress}}",
    label: "Co-Borrower Mailing Address (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.secondary.mailingAddress}}",
    label: "Co-Borrower Mailing Address (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.secondary.mailingAddress}}",
    label: "Co-Borrower Mailing Address (4th 1003 App)"
  },
  {
    tagString: "{{coBorrower.maritalStatus}}",
    label: "Co-Borrower Marital Status"
  },
  {
    tagString: "{{additionalBorrowers.2.secondary.maritalStatus}}",
    label: "Co-Borrower Marital Status (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.secondary.maritalStatus}}",
    label: "Co-Borrower Marital Status (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.secondary.maritalStatus}}",
    label: "Co-Borrower Marital Status (4th 1003 App)"
  },
  {
    tagString: "{{coBorrower.name}}",
    label: "Co-Borrower Name"
  },
  {
    tagString: "{{additionalBorrowers.2.secondary.name}}",
    label: "Co-Borrower Name (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.secondary.name}}",
    label: "Co-Borrower Name (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.secondary.name}}",
    label: "Co-Borrower Name (4th 1003 App)"
  },
  {
    tagString: "{{coBorrower.nickName}}",
    label: "Co-Borrower Nick Name"
  },
  {
    tagString: "{{additionalBorrowers.2.secondary.nickName}}",
    label: "Co-Borrower Nick Name (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.secondary.nickName}}",
    label: "Co-Borrower Nick Name (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.secondary.nickName}}",
    label: "Co-Borrower Nick Name (4th 1003 App)"
  },
  {
    tagString: "{{coBorrower.phone}}",
    label: "Co-Borrower Phone"
  },
  {
    tagString: "{{additionalBorrowers.2.secondary.phone}}",
    label: "Co-Borrower Phone (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.secondary.phone}}",
    label: "Co-Borrower Phone (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.secondary.phone}}",
    label: "Co-Borrower Phone (4th 1003 App)"
  },
  {
    tagString: "{{coBorrower.ssn}}",
    label: "Co-Borrower SSN"
  },
  {
    tagString: "{{additionalBorrowers.2.secondary.ssn}}",
    label: "Co-Borrower SSN (2nd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.3.secondary.ssn}}",
    label: "Co-Borrower SSN (3rd 1003 App)"
  },
  {
    tagString: "{{additionalBorrowers.4.secondary.ssn}}",
    label: "Co-Borrower SSN (4th 1003 App)"
  },
  {
    tagString: "{{condoManagementHOAManager.address}}",
    label: "Condo Management/HOA Manager Address"
  },
  {
    tagString: "{{condoManagementHOAManager.companyName}}",
    label: "Condo Management/HOA Manager Company Name"
  },
  {
    tagString: "{{condoManagementHOAManager.email}}",
    label: "Condo Management/HOA Manager Email"
  },
  {
    tagString: "{{condoManagementHOAManager.name}}",
    label: "Condo Management/HOA Manager Name"
  },
  {
    tagString: "{{condoManagementHOAManager.cbPosLink}}",
    label: "Condo Management/HOA Manager POS Co-branded Link"
  },
  {
    tagString: "{{condoManagementHOAManager.phone}}",
    label: "Condo Management/HOA Manager Phone"
  },
  {
    tagString: "{{condoManagementHOAManager.profileImage}}",
    label: "Condo Management/HOA Manager Profile Image"
  },
  {
    tagString: "{{contractor.address}}",
    label: "Contractor Address"
  },
  {
    tagString: "{{contractor.companyName}}",
    label: "Contractor Company Name"
  },
  {
    tagString: "{{contractor.email}}",
    label: "Contractor Email"
  },
  {
    tagString: "{{contractor.name}}",
    label: "Contractor Name"
  },
  {
    tagString: "{{contractor.cbPosLink}}",
    label: "Contractor POS Co-branded Link"
  },
  {
    tagString: "{{contractor.phone}}",
    label: "Contractor Phone"
  },
  {
    tagString: "{{contractor.profileImage}}",
    label: "Contractor Profile Image"
  },
  {
    tagString: "{{loanTransaction.deposit}}",
    label: "Deposit"
  },
  {
    tagString: "{{developer.address}}",
    label: "Developer Address"
  },
  {
    tagString: "{{developer.companyName}}",
    label: "Developer Company Name"
  },
  {
    tagString: "{{developer.email}}",
    label: "Developer Email"
  },
  {
    tagString: "{{developer.name}}",
    label: "Developer Name"
  },
  {
    tagString: "{{developer.cbPosLink}}",
    label: "Developer POS Co-branded Link"
  },
  {
    tagString: "{{developer.phone}}",
    label: "Developer Phone"
  },
  {
    tagString: "{{developer.profileImage}}",
    label: "Developer Profile Image"
  },
  {
    tagString: "{{emailSignature}}",
    label: "Email Signature"
  },
  {
    tagString: "{{emailSubject}}",
    label: "Email Subject"
  },
  {
    tagString: "{{escrowAgent.address}}",
    label: "Escrow Agent Address"
  },
  {
    tagString: "{{escrowAgent.companyName}}",
    label: "Escrow Agent Company Name"
  },
  {
    tagString: "{{escrowAgent.email}}",
    label: "Escrow Agent Email"
  },
  {
    tagString: "{{escrowAgent.name}}",
    label: "Escrow Agent Name"
  },
  {
    tagString: "{{escrowAgent.cbPosLink}}",
    label: "Escrow Agent POS Co-branded Link"
  },
  {
    tagString: "{{escrowAgent.phone}}",
    label: "Escrow Agent Phone"
  },
  {
    tagString: "{{escrowAgent.profileImage}}",
    label: "Escrow Agent Profile Image"
  },
  {
    tagString: "{{escrow.impoundWaivers}}",
    label: "Escrow Impound Waivers"
  },
  {
    tagString: "{{estatePlanner.address}}",
    label: "Estate Planner Address"
  },
  {
    tagString: "{{estatePlanner.companyName}}",
    label: "Estate Planner Company Name"
  },
  {
    tagString: "{{estatePlanner.email}}",
    label: "Estate Planner Email"
  },
  {
    tagString: "{{estatePlanner.name}}",
    label: "Estate Planner Name"
  },
  {
    tagString: "{{estatePlanner.cbPosLink}}",
    label: "Estate Planner POS Co-branded Link"
  },
  {
    tagString: "{{estatePlanner.phone}}",
    label: "Estate Planner Phone"
  },
  {
    tagString: "{{estatePlanner.profileImage}}",
    label: "Estate Planner Profile Image"
  },
  {
    tagString: "{{financialPlanner.address}}",
    label: "Financial Planner Address"
  },
  {
    tagString: "{{financialPlanner.companyName}}",
    label: "Financial Planner Company Name"
  },
  {
    tagString: "{{financialPlanner.email}}",
    label: "Financial Planner Email"
  },
  {
    tagString: "{{financialPlanner.name}}",
    label: "Financial Planner Name"
  },
  {
    tagString: "{{financialPlanner.cbPosLink}}",
    label: "Financial Planner POS Co-branded Link"
  },
  {
    tagString: "{{financialPlanner.phone}}",
    label: "Financial Planner Phone"
  },
  {
    tagString: "{{financialPlanner.profileImage}}",
    label: "Financial Planner Profile Image"
  },
  {
    tagString: "{{inspector.address}}",
    label: "General Inspector Address"
  },
  {
    tagString: "{{inspector.companyName}}",
    label: "General Inspector Company Name"
  },
  {
    tagString: "{{inspector.email}}",
    label: "General Inspector Email"
  },
  {
    tagString: "{{inspector.name}}",
    label: "General Inspector Name"
  },
  {
    tagString: "{{inspector.cbPosLink}}",
    label: "General Inspector POS Co-branded Link"
  },
  {
    tagString: "{{inspector.phone}}",
    label: "General Inspector Phone"
  },
  {
    tagString: "{{inspector.profileImage}}",
    label: "General Inspector Profile Image"
  },
  {
    tagString: "{{hoaAgent.address}}",
    label: "HOA Agent Address"
  },
  {
    tagString: "{{hoaAgent.companyName}}",
    label: "HOA Agent Company Name"
  },
  {
    tagString: "{{hoaAgent.email}}",
    label: "HOA Agent Email"
  },
  {
    tagString: "{{hoaAgent.name}}",
    label: "HOA Agent Name"
  },
  {
    tagString: "{{hoaAgent.cbPosLink}}",
    label: "HOA Agent POS Co-branded Link"
  },
  {
    tagString: "{{hoaAgent.phone}}",
    label: "HOA Agent Phone"
  },
  {
    tagString: "{{hoaAgent.profileImage}}",
    label: "HOA Agent Profile Image"
  },
  {
    tagString: "{{hoiAgent.address}}",
    label: "HOI Agent Address"
  },
  {
    tagString: "{{hoiAgent.companyName}}",
    label: "HOI Agent Company Name"
  },
  {
    tagString: "{{hoiAgent.email}}",
    label: "HOI Agent Email"
  },
  {
    tagString: "{{hoiAgent.name}}",
    label: "HOI Agent Name"
  },
  {
    tagString: "{{hoiAgent.cbPosLink}}",
    label: "HOI Agent POS Co-branded Link"
  },
  {
    tagString: "{{hoiAgent.phone}}",
    label: "HOI Agent Phone"
  },
  {
    tagString: "{{hoiAgent.profileImage}}",
    label: "HOI Agent Profile Image"
  },
  {
    tagString: "{{insuranceAgent.address}}",
    label: "Insurance Agent Address"
  },
  {
    tagString: "{{insuranceAgent.companyName}}",
    label: "Insurance Agent Company Name"
  },
  {
    tagString: "{{insuranceAgent.email}}",
    label: "Insurance Agent Email"
  },
  {
    tagString: "{{insuranceAgent.name}}",
    label: "Insurance Agent Name"
  },
  {
    tagString: "{{insuranceAgent.cbPosLink}}",
    label: "Insurance Agent POS Co-branded Link"
  },
  {
    tagString: "{{insuranceAgent.phone}}",
    label: "Insurance Agent Phone"
  },
  {
    tagString: "{{insuranceAgent.profileImage}}",
    label: "Insurance Agent Profile Image"
  },
  {
    tagString: "{{escrow.insurance}}",
    label: "Insurance Escrow"
  },
  {
    tagString: "{{invitation.fromName}}",
    label: "Inviter"
  },
  {
    tagString: "{{invitation.fromOrgName}}",
    label: "Inviting Organization Name"
  },
  {
    tagString: "{{losLink}}",
    label: "LOS Link"
  },
  {
    tagString: "{{leadId}}",
    label: "Lead Id"
  },
  {
    tagString: "{{leadNote.content}}",
    label: "Lead Notes"
  },
  {
    tagString: "{{leadNote.editorName}}",
    label: "Lead Notes Editor"
  },
  {
    tagString: "{{clientRelationsManager.address}}",
    label: "Lender - AM / CRM / LC Address"
  },
  {
    tagString: "{{clientRelationsManager.companyName}}",
    label: "Lender - AM / CRM / LC Company Name"
  },
  {
    tagString: "{{clientRelationsManager.email}}",
    label: "Lender - AM / CRM / LC Email"
  },
  {
    tagString: "{{clientRelationsManager.name}}",
    label: "Lender - AM / CRM / LC Name"
  },
  {
    tagString: "{{clientRelationsManager.cbPosLink}}",
    label: "Lender - AM / CRM / LC POS Co-branded Link"
  },
  {
    tagString: "{{clientRelationsManager.phone}}",
    label: "Lender - AM / CRM / LC Phone"
  },
  {
    tagString: "{{clientRelationsManager.profileImage}}",
    label: "Lender - AM / CRM / LC Profile Image"
  },
  {
    tagString: "{{accountExecutive.address}}",
    label: "Lender - Account Executive Address"
  },
  {
    tagString: "{{accountExecutive.companyName}}",
    label: "Lender - Account Executive Company Name"
  },
  {
    tagString: "{{accountExecutive.email}}",
    label: "Lender - Account Executive Email"
  },
  {
    tagString: "{{accountExecutive.name}}",
    label: "Lender - Account Executive Name"
  },
  {
    tagString: "{{accountExecutive.cbPosLink}}",
    label: "Lender - Account Executive POS Co-branded Link"
  },
  {
    tagString: "{{accountExecutive.phone}}",
    label: "Lender - Account Executive Phone"
  },
  {
    tagString: "{{accountExecutive.profileImage}}",
    label: "Lender - Account Executive Profile Image"
  },
  {
    tagString: "{{disclosureDesk.address}}",
    label: "Lender - Disclosure Desk Address"
  },
  {
    tagString: "{{disclosureDesk.companyName}}",
    label: "Lender - Disclosure Desk Company Name"
  },
  {
    tagString: "{{disclosureDesk.email}}",
    label: "Lender - Disclosure Desk Email"
  },
  {
    tagString: "{{disclosureDesk.name}}",
    label: "Lender - Disclosure Desk Name"
  },
  {
    tagString: "{{disclosureDesk.cbPosLink}}",
    label: "Lender - Disclosure Desk POS Co-branded Link"
  },
  {
    tagString: "{{disclosureDesk.phone}}",
    label: "Lender - Disclosure Desk Phone"
  },
  {
    tagString: "{{disclosureDesk.profileImage}}",
    label: "Lender - Disclosure Desk Profile Image"
  },
  {
    tagString: "{{funder.address}}",
    label: "Lender - Funder Address"
  },
  {
    tagString: "{{funder.companyName}}",
    label: "Lender - Funder Company Name"
  },
  {
    tagString: "{{funder.email}}",
    label: "Lender - Funder Email"
  },
  {
    tagString: "{{funder.name}}",
    label: "Lender - Funder Name"
  },
  {
    tagString: "{{funder.cbPosLink}}",
    label: "Lender - Funder POS Co-branded Link"
  },
  {
    tagString: "{{funder.phone}}",
    label: "Lender - Funder Phone"
  },
  {
    tagString: "{{funder.profileImage}}",
    label: "Lender - Funder Profile Image"
  },
  {
    tagString: "{{juniorUnderwriter.address}}",
    label: "Lender - Junior Underwriter Address"
  },
  {
    tagString: "{{juniorUnderwriter.companyName}}",
    label: "Lender - Junior Underwriter Company Name"
  },
  {
    tagString: "{{juniorUnderwriter.email}}",
    label: "Lender - Junior Underwriter Email"
  },
  {
    tagString: "{{juniorUnderwriter.name}}",
    label: "Lender - Junior Underwriter Name"
  },
  {
    tagString: "{{juniorUnderwriter.cbPosLink}}",
    label: "Lender - Junior Underwriter POS Co-branded Link"
  },
  {
    tagString: "{{juniorUnderwriter.phone}}",
    label: "Lender - Junior Underwriter Phone"
  },
  {
    tagString: "{{juniorUnderwriter.profileImage}}",
    label: "Lender - Junior Underwriter Profile Image"
  },
  {
    tagString: "{{loanCoordinator.address}}",
    label: "Lender - Loan Coordinator Address"
  },
  {
    tagString: "{{loanCoordinator.companyName}}",
    label: "Lender - Loan Coordinator Company Name"
  },
  {
    tagString: "{{loanCoordinator.email}}",
    label: "Lender - Loan Coordinator Email"
  },
  {
    tagString: "{{loanCoordinator.name}}",
    label: "Lender - Loan Coordinator Name"
  },
  {
    tagString: "{{loanCoordinator.cbPosLink}}",
    label: "Lender - Loan Coordinator POS Co-branded Link"
  },
  {
    tagString: "{{loanCoordinator.phone}}",
    label: "Lender - Loan Coordinator Phone"
  },
  {
    tagString: "{{loanCoordinator.profileImage}}",
    label: "Lender - Loan Coordinator Profile Image"
  },
  {
    tagString: "{{loanOpener.address}}",
    label: "Lender - Loan Opener Address"
  },
  {
    tagString: "{{loanOpener.companyName}}",
    label: "Lender - Loan Opener Company Name"
  },
  {
    tagString: "{{loanOpener.email}}",
    label: "Lender - Loan Opener Email"
  },
  {
    tagString: "{{loanOpener.name}}",
    label: "Lender - Loan Opener Name"
  },
  {
    tagString: "{{loanOpener.cbPosLink}}",
    label: "Lender - Loan Opener POS Co-branded Link"
  },
  {
    tagString: "{{loanOpener.phone}}",
    label: "Lender - Loan Opener Phone"
  },
  {
    tagString: "{{loanOpener.profileImage}}",
    label: "Lender - Loan Opener Profile Image"
  },
  {
    tagString: "{{postCloser.address}}",
    label: "Lender - Post Closer Address"
  },
  {
    tagString: "{{postCloser.companyName}}",
    label: "Lender - Post Closer Company Name"
  },
  {
    tagString: "{{postCloser.email}}",
    label: "Lender - Post Closer Email"
  },
  {
    tagString: "{{postCloser.name}}",
    label: "Lender - Post Closer Name"
  },
  {
    tagString: "{{postCloser.cbPosLink}}",
    label: "Lender - Post Closer POS Co-branded Link"
  },
  {
    tagString: "{{postCloser.phone}}",
    label: "Lender - Post Closer Phone"
  },
  {
    tagString: "{{postCloser.profileImage}}",
    label: "Lender - Post Closer Profile Image"
  },
  {
    tagString: "{{underwriter.address}}",
    label: "Lender - Underwriter Address"
  },
  {
    tagString: "{{underwriter.companyName}}",
    label: "Lender - Underwriter Company Name"
  },
  {
    tagString: "{{underwriter.email}}",
    label: "Lender - Underwriter Email"
  },
  {
    tagString: "{{underwriter.name}}",
    label: "Lender - Underwriter Name"
  },
  {
    tagString: "{{underwriter.cbPosLink}}",
    label: "Lender - Underwriter POS Co-branded Link"
  },
  {
    tagString: "{{underwriter.phone}}",
    label: "Lender - Underwriter Phone"
  },
  {
    tagString: "{{underwriter.profileImage}}",
    label: "Lender - Underwriter Profile Image"
  },
  {
    tagString: "{{lender.displayName}}",
    label: "Lender Display Name"
  },
  {
    tagString: "{{lender.lenderLoanNo}}",
    label: "Lender Loan Number"
  },
  {
    tagString: "{{lender.logoUrl}}",
    label: "Lender Logo Image"
  },
  {
    tagString: "{{lender.mortgageeInfo}}",
    label: "Lender Mortgagee Info"
  },
  {
    tagString: "{{lender.name}}",
    label: "Lender Name"
  },
  {
    tagString: "{{losLoanLink}}",
    label: "Link to LOS Loan"
  },
  {
    tagString: "{{leadLink}}",
    label: "Link to Lead"
  },
  {
    tagString: "{{posLoanLink}}",
    label: "Link to POS Loan"
  },
  {
    tagString: "{{milestoneDates.adverse}}",
    label: "Loan Adverse Date"
  },
  {
    tagString: "{{milestoneDates.appIntake}}",
    label: "Loan App Intake Date"
  },
  {
    tagString: "{{loanKeyDates.AppraisalDate}}",
    label: "Loan Appraisal Contingency Date"
  },
  {
    tagString: "{{loanKeyDates.appraisalCompletedDate}}",
    label: "Loan Appraisal Delivery Date"
  },
  {
    tagString: "{{loanKeyDates.appraisalOrderedDate}}",
    label: "Loan Appraisal Ordered Date"
  },
  {
    tagString: "{{milestoneDates.approvedWithCondition}}",
    label: "Loan Approved w/ Conditions Date"
  },
  {
    tagString: "{{milestoneDates.brokerCheckReceived}}",
    label: "Loan Broker Check Received Date"
  },
  {
    tagString: "{{scenario.loanChannel}}",
    label: "Loan Channel"
  },
  {
    tagString: "{{milestoneDates.clearToClose}}",
    label: "Loan Clear To Close Date"
  },
  {
    tagString: "{{loanKeyDates.LoanDate}}",
    label: "Loan Contingency Date"
  },
  {
    tagString: "{{loanKeyDates.creditExpirationDate}}",
    label: "Loan Credit Expiration Date"
  },
  {
    tagString: "{{loanKeyDates.creditOrderDate}}",
    label: "Loan Credit Report Ordered Date"
  },
  {
    tagString: "{{loanCurrentStatus}}",
    label: "Loan Current Status"
  },
  {
    tagString: "{{loanKeyDates.earlyPayOffDate}}",
    label: "Loan Date to Avoid EPO"
  },
  {
    tagString: "{{milestoneDates.disclosureSent}}",
    label: "Loan Disclosed Date"
  },
  {
    tagString: "{{milestoneDates.docsOut}}",
    label: "Loan Docs Out Date"
  },
  {
    tagString: "{{milestoneDates.docsSigned}}",
    label: "Loan Docs Signed Date"
  },
  {
    tagString: "{{loanDocuments}}",
    label: "Loan Document List"
  },
  {
    tagString: "{{loanKeyDates.estimatedClosingDate}}",
    label: "Loan Est Closing Date"
  },
  {
    tagString: "{{loanKeyDates.estimatedFirstPaymentDate}}",
    label: "Loan Est First Payment Date"
  },
  {
    tagString: "{{loanKeyDates.expectedFundingDate}}",
    label: "Loan Est Funding Date"
  },
  {
    tagString: "{{milestoneDates.commissionPaid}}",
    label: "Loan Finalized Date"
  },
  {
    tagString: "{{loanKeyDates.firstPaymentDate}}",
    label: "Loan First Payment Date"
  },
  {
    tagString: "{{milestoneDates.loanFunded}}",
    label: "Loan Funded Date"
  },
  {
    tagString: "{{loanKeyDates.hoiOrderedDate}}",
    label: "Loan HOI Ordered Date"
  },
  {
    tagString: "{{loanKeyDates.hoiReceivedDate}}",
    label: "Loan HOI Received Date"
  },
  {
    tagString: "{{loanId}}",
    label: "Loan Id"
  },
  {
    tagString: "{{loanKeyDates.initialClosingDisclosureIssueDate}}",
    label: "Loan Initial CD Sent Date"
  },
  {
    tagString: "{{loanKeyDates.closingDisclosureSignDate}}",
    label: "Loan Initial CD Signed Date"
  },
  {
    tagString: "{{loanKeyDates.initialLoanEstimateIssueDate}}",
    label: "Loan Initial LE Sent Date"
  },
  {
    tagString: "{{loanKeyDates.loanEstimateSignDate}}",
    label: "Loan Initial LE Signed Date"
  },
  {
    tagString: "{{loanKeyDates.intentToProceedDate}}",
    label: "Loan Intent to Proceed Date"
  },
  {
    tagString: "{{loanKeyDates.closingDisclosureIssueDate}}",
    label: "Loan Most Recent CD Sent Date"
  },
  {
    tagString: "{{loanKeyDates.mostRecentClosingDisclosureDate}}",
    label: "Loan Most Recent CD Signed Date"
  },
  {
    tagString: "{{loanKeyDates.loanEstimateIssueDate}}",
    label: "Loan Most Recent LE Sent Date"
  },
  {
    tagString: "{{loanKeyDates.mostRecentLoanEstimateDate}}",
    label: "Loan Most Recent LE Signed Date"
  },
  {
    tagString: "{{loanNeedList}}",
    label: "Loan Needs"
  },
  {
    tagString: "{{loanNote.content}}",
    label: "Loan Note"
  },
  {
    tagString: "{{loanNote.editorName}}",
    label: "Loan Note Editor"
  },
  {
    tagString: "{{loanOfficer.alternatePhone}}",
    label: "Loan Officer Alternate Phone"
  },
  {
    tagString: "{{loanLOA.email}}",
    label: "Loan Officer Assistant Email"
  },
  {
    tagString: "{{loanLOA.firstName}}",
    label: "Loan Officer Assistant First Name"
  },
  {
    tagString: "{{loanLOA.lastName}}",
    label: "Loan Officer Assistant Last Name"
  },
  {
    tagString: "{{loanLOA.name}}",
    label: "Loan Officer Assistant Name"
  },
  {
    tagString: "{{loanLOA.formattedPhone}}",
    label: "Loan Officer Assistant Phone"
  },
  {
    tagString: "{{loanLOA.formattedPhoneWithExt}}",
    label: "Loan Officer Assistant Phone With Extension"
  },
  {
    tagString: "{{loanOfficer.email}}",
    label: "Loan Officer Email"
  },
  {
    tagString: "{{loanOfficer.Facebook}}",
    label: "Loan Officer Facebook"
  },
  {
    tagString: "{{loanOfficer.firstName}}",
    label: "Loan Officer First Name"
  },
  {
    tagString: "{{loanOfficer.fullName}}",
    label: "Loan Officer Full Name"
  },
  {
    tagString: "{{loanOfficer.Instagram}}",
    label: "Loan Officer Instagram"
  },
  {
    tagString: "{{loanOfficer.lastName}}",
    label: "Loan Officer Last Name"
  },
  {
    tagString: "{{loanOfficer.LinkedIn}}",
    label: "Loan Officer LinkedIn"
  },
  {
    tagString: "{{loanOfficer.nmlsId}}",
    label: "Loan Officer NMLS"
  },
  {
    tagString: "{{loanOfficer.formattedPhone}}",
    label: "Loan Officer Phone"
  },
  {
    tagString: "{{loanOfficer.formattedPhoneWithExt}}",
    label: "Loan Officer Phone With Extension"
  },
  {
    tagString: "{{loanOfficer.profileImage}}",
    label: "Loan Officer Profile Image"
  },
  {
    tagString: "{{loanOfficer.Twitter}}",
    label: "Loan Officer Twitter"
  },
  {
    tagString: "{{loanKeyDates.preApprovalExpiryDate}}",
    label: "Loan Pre-Approval Expiry Date"
  },
  {
    tagString: "{{milestoneDates.preapproved}}",
    label: "Loan Pre-Approved Date"
  },
  {
    tagString: "{{loanProcessor.email}}",
    label: "Loan Processor Email"
  },
  {
    tagString: "{{loanProcessor.firstName}}",
    label: "Loan Processor First Name"
  },
  {
    tagString: "{{loanProcessor.lastName}}",
    label: "Loan Processor Last Name"
  },
  {
    tagString: "{{loanProcessor.name}}",
    label: "Loan Processor Name"
  },
  {
    tagString: "{{loanProcessor.formattedPhone}}",
    label: "Loan Processor Phone"
  },
  {
    tagString: "{{loanProcessor.formattedPhoneWithExt}}",
    label: "Loan Processor Phone With Extension"
  },
  {
    tagString: "{{loanProduct.name}}",
    label: "Loan Product Name"
  },
  {
    tagString: "{{milestoneDates.qualification}}",
    label: "Loan Qualification Date"
  },
  {
    tagString: "{{loanKeyDates.lockDate}}",
    label: "Loan Rate Lock Date"
  },
  {
    tagString: "{{loanKeyDates.lockExpirationDate}}",
    label: "Loan Rate Lock Expiry Date"
  },
  {
    tagString: "{{milestoneDates.reSubmittal}}",
    label: "Loan Re-Submittal Date"
  },
  {
    tagString: "{{milestoneDates.loanSetup}}",
    label: "Loan Setup Date"
  },
  {
    tagString: "{{milestoneDates.underwritingSubmitted}}",
    label: "Loan Submitted to UW Date"
  },
  {
    tagString: "{{loanKeyDates.tridCompliantDate}}",
    label: "Loan TRID Date"
  },
  {
    tagString: "{{loanKeyDates.taxTranscriptOrderedDate}}",
    label: "Loan Tax Transcript Ordered Date"
  },
  {
    tagString: "{{loanKeyDates.taxTranscriptReceivedDate}}",
    label: "Loan Tax Transcript Received Date"
  },
  {
    tagString: "{{loanKeyDates.titleOrderedDate}}",
    label: "Loan Title Ordered Date"
  },
  {
    tagString: "{{loanKeyDates.titleReceivedDate}}",
    label: "Loan Title Received Date"
  },
  {
    tagString: "{{additionalBorrowers.multi}}",
    label: "Multiple Check Additional Borrowers"
  },
  {
    tagString: "{{allBorrower.multi}}",
    label: "Multiple Check All Borrowers"
  },
  {
    tagString: "{{description}}",
    label: "Need Document Description"
  },
  {
    tagString: "{{name}}",
    label: "Need Name"
  },
  {
    tagString: "{{rejectionReason}}",
    label: "Need Rejection Reason"
  },
  {
    tagString: "{{rejectionType}}",
    label: "Need Rejection Type"
  },
  {
    tagString: "{{fromOrgUnit.address}}",
    label: "Org Address"
  },
  {
    tagString: "{{fromOrgUnit.addressLine1}}",
    label: "Org Address Line 1"
  },
  {
    tagString: "{{fromOrgUnit.addressLine2}}",
    label: "Org Address Line 2"
  },
  {
    tagString: "{{fromOrgUnit.city}}",
    label: "Org City"
  },
  {
    tagString: "{{fromOrgUnit.county}}",
    label: "Org County"
  },
  {
    tagString: "{{fromOrgUnit.displayName}}",
    label: "Org Display Name"
  },
  {
    tagString: "{{fromOrgUnit.logoUrl}}",
    label: "Org Logo Image"
  },
  {
    tagString: "{{fromOrgUnit.nmlsNumber}}",
    label: "Org NMLS"
  },
  {
    tagString: "{{fromOrgUnit.name}}",
    label: "Org Name"
  },
  {
    tagString: "{{fromOrgUnit.formattedPhone}}",
    label: "Org Phone"
  },
  {
    tagString: "{{fromOrgUnit.state}}",
    label: "Org State"
  },
  {
    tagString: "{{fromOrgUnit.url}}",
    label: "Org URL"
  },
  {
    tagString: "{{fromOrgUnit.zipcode}}",
    label: "Org Zip Code"
  },
  {
    tagString: "{{posLink}}",
    label: "POS Link"
  },
  {
    tagString: "{{pestInspector.address}}",
    label: "Pest Inspector Address"
  },
  {
    tagString: "{{pestInspector.companyName}}",
    label: "Pest Inspector Company Name"
  },
  {
    tagString: "{{pestInspector.email}}",
    label: "Pest Inspector Email"
  },
  {
    tagString: "{{pestInspector.name}}",
    label: "Pest Inspector Name"
  },
  {
    tagString: "{{pestInspector.cbPosLink}}",
    label: "Pest Inspector POS Co-branded Link"
  },
  {
    tagString: "{{pestInspector.phone}}",
    label: "Pest Inspector Phone"
  },
  {
    tagString: "{{pestInspector.profileImage}}",
    label: "Pest Inspector Profile Image"
  },
  {
    tagString: "{{appLink}}",
    label: "Portal Link"
  },
  {
    tagString: "{{primaryBorrowerCreditInfo.score}}",
    label: "Primary Borrower Credit Score"
  },
  {
    tagString: "{{primaryBorrower.currentAddress}}",
    label: "Primary Borrower Current Address"
  },
  {
    tagString: "{{primaryBorrower.dob}}",
    label: "Primary Borrower DOB"
  },
  {
    tagString: "{{primaryBorrower.email}}",
    label: "Primary Borrower Email"
  },
  {
    tagString: "{{primaryBorrower.firstName}}",
    label: "Primary Borrower First Name"
  },
  {
    tagString: "{{primaryBorrower.fullName}}",
    label: "Primary Borrower Full Name"
  },
  {
    tagString: "{{primaryBorrower.lastName}}",
    label: "Primary Borrower Last Name"
  },
  {
    tagString: "{{primaryBorrower.mailingAddress}}",
    label: "Primary Borrower Mailing Address"
  },
  {
    tagString: "{{primaryBorrower.maritalStatus}}",
    label: "Primary Borrower Marital Status"
  },
  {
    tagString: "{{primaryBorrower.name}}",
    label: "Primary Borrower Name"
  },
  {
    tagString: "{{primaryBorrower.nickName}}",
    label: "Primary Borrower Nick Name"
  },
  {
    tagString: "{{primaryBorrower.phone}}",
    label: "Primary Borrower Phone"
  },
  {
    tagString: "{{primaryBorrower.ssn}}",
    label: "Primary Borrower SSN"
  },
  {
    tagString: "{{productAndPricing.discountPoints}}",
    label: "Product And Pricing Discount Points"
  },
  {
    tagString: "{{productAndPricing.fico}}",
    label: "Product And Pricing FICO"
  },
  {
    tagString: "{{productAndPricing.finalAmount}}",
    label: "Product And Pricing Final Amount"
  },
  {
    tagString: "{{productAndPricing.finalPoints}}",
    label: "Product And Pricing Final Points"
  },
  {
    tagString: "{{productAndPricing.finalRate}}",
    label: "Product And Pricing Final Rate"
  },
  {
    tagString: "{{productAndPricing.formattedFinalRate}}",
    label: "Product And Pricing Final Rate"
  },
  {
    tagString: "{{productAndPricing.lien}}",
    label: "Product And Pricing Lien Position"
  },
  {
    tagString: "{{productAndPricing.loanAmount}}",
    label: "Product And Pricing Loan Amount"
  },
  {
    tagString: "{{productAndPricing.loanPurpose}}",
    label: "Product And Pricing Loan Purpose"
  },
  {
    tagString: "{{productAndPricing.occupancy}}",
    label: "Product And Pricing Occupancy"
  },
  {
    tagString: "{{productAndPricing.productName}}",
    label: "Product And Pricing Product Name"
  },
  {
    tagString: "{{productAndPricing.productType}}",
    label: "Product And Pricing Product Type"
  },
  {
    tagString: "{{productAndPricing.propertyType}}",
    label: "Product And Pricing Property Type"
  },
  {
    tagString: "{{productAndPricing.rateExceptionDiscount}}",
    label: "Product And Pricing Rate Exception Discount"
  },
  {
    tagString: "{{productAndPricing.rateExceptionReason}}",
    label: "Product And Pricing Rate Exception Reason"
  },
  {
    tagString: "{{productAndPricing.rateExceptionType}}",
    label: "Product And Pricing Rate Exception Type"
  },
  {
    tagString: "{{productAndPricing.rateExpiry}}",
    label: "Product And Pricing Rate Expiry"
  },
  {
    tagString: "{{productAndPricing.rateLockPeriod}}",
    label: "Product And Pricing Rate Lock Period"
  },
  {
    tagString: "{{propertyManager.address}}",
    label: "Property Manager Address"
  },
  {
    tagString: "{{propertyManager.companyName}}",
    label: "Property Manager Company Name"
  },
  {
    tagString: "{{propertyManager.email}}",
    label: "Property Manager Email"
  },
  {
    tagString: "{{propertyManager.name}}",
    label: "Property Manager Name"
  },
  {
    tagString: "{{propertyManager.cbPosLink}}",
    label: "Property Manager POS Co-branded Link"
  },
  {
    tagString: "{{propertyManager.phone}}",
    label: "Property Manager Phone"
  },
  {
    tagString: "{{propertyManager.profileImage}}",
    label: "Property Manager Profile Image"
  },
  {
    tagString: "{{property.titleHolderName}}",
    label: "Property Title Holder Name(s)"
  },
  {
    tagString: "{{property.titleHoldingManner}}",
    label: "Property Title Holding Manner"
  },
  {
    tagString: "{{publicESign.link}}",
    label: "Public E-Sign Link"
  },
  {
    tagString: "{{quoteId}}",
    label: "Quote Id"
  },
  {
    tagString: "{{quoteType}}",
    label: "Quote Type"
  },
  {
    tagString: "{{rateAlert.alertFrequency}}",
    label: "Rate Alert Email Frequency"
  },
  {
    tagString: "{{rateAlert.targetCost}}",
    label: "Rate Alert Target Cost"
  },
  {
    tagString: "{{rateAlert.targetRate}}",
    label: "Rate Alert Target Rate"
  },
  {
    tagString: "{{rateAlert.emailFrequency}}",
    label: "Rate Change Email Frequency"
  },
  {
    tagString: "{{realEstateAgent.address}}",
    label: "Real Estate Agent Address"
  },
  {
    tagString: "{{realEstateAgent.companyName}}",
    label: "Real Estate Agent Company Name"
  },
  {
    tagString: "{{realEstateAgent.email}}",
    label: "Real Estate Agent Email"
  },
  {
    tagString: "{{realEstateAgent.name}}",
    label: "Real Estate Agent Name"
  },
  {
    tagString: "{{realEstateAgent.cbPosLink}}",
    label: "Real Estate Agent POS Co-branded Link"
  },
  {
    tagString: "{{realEstateAgent.phone}}",
    label: "Real Estate Agent Phone"
  },
  {
    tagString: "{{realEstateAgent.profileImage}}",
    label: "Real Estate Agent Profile Image"
  },
  {
    tagString: "{{recipient.firstName}}",
    label: "Recipient First Name"
  },
  {
    tagString: "{{recipient.name}}",
    label: "Recipient Full Name"
  },
  {
    tagString: "{{recipient.lastName}}",
    label: "Recipient Last Name"
  },
  {
    tagString: "{{recipient.nickName}}",
    label: "Recipient Nick Name"
  },
  {
    tagString: "{{rejectedLoanNeedList}}",
    label: "Rejected Loan Needs"
  },
  {
    tagString: "{{scenario.appraisedValue}}",
    label: "Scenario Appraised Value"
  },
  {
    tagString: "{{scenario.baseLoanAmount}}",
    label: "Scenario Base Loan Amount"
  },
  {
    tagString: "{{scenario.downPaymentPercentage}}",
    label: "Scenario Down Payment Percentage"
  },
  {
    tagString: "{{scenario.hoaMonthly}}",
    label: "Scenario HOA Monthly"
  },
  {
    tagString: "{{scenario.rate}}",
    label: "Scenario Interest Rate"
  },
  {
    tagString: "{{scenario.ltv}}",
    label: "Scenario LTV"
  },
  {
    tagString: "{{scenario.lender}}",
    label: "Scenario Lender"
  },
  {
    tagString: "{{scenario.loanAmount}}",
    label: "Scenario Loan Amount"
  },
  {
    tagString: "{{scenario.loanLimitType}}",
    label: "Scenario Loan Limit Type"
  },
  {
    tagString: "{{scenario.amortizationType}}",
    label: "Scenario Loan Program"
  },
  {
    tagString: "{{scenario.loanPurpose}}",
    label: "Scenario Loan Purpose"
  },
  {
    tagString: "{{scenario.loanTerm}}",
    label: "Scenario Loan Term"
  },
  {
    tagString: "{{scenario.mortgageType}}",
    label: "Scenario Mortgage type"
  },
  {
    tagString: "{{scenario.occupancy}}",
    label: "Scenario Occupancy"
  },
  {
    tagString: "{{scenario.principalAndInterest}}",
    label: "Scenario Principal And Interest (P & I)"
  },
  {
    tagString: "{{scenario.propertyState}}",
    label: "Scenario Property State"
  },
  {
    tagString: "{{scenario.propertyStreetAddress}}",
    label: "Scenario Property Street Address"
  },
  {
    tagString: "{{scenario.propertyTaxAnnualDollar}}",
    label: "Scenario Property Taxes Annual"
  },
  {
    tagString: "{{scenario.propertyTaxMonthlyDollar}}",
    label: "Scenario Property Taxes Monthly"
  },
  {
    tagString: "{{scenario.numberOfUnits}}",
    label: "Scenario Property Units"
  },
  {
    tagString: "{{scenario.propertyValue}}",
    label: "Scenario Property Value"
  },
  {
    tagString: "{{scenario.propertyType}}",
    label: "Scenario Property type"
  },
  {
    tagString: "{{scenario.totalLoanAmount}}",
    label: "Scenario Total Loan Amount"
  },
  {
    tagString: "{{scenario.totalPITI}}",
    label: "Scenario Total Monthly Payment (Total PITI)"
  },
  {
    tagString: "{{publicDocUpload.link}}",
    label: "Secure Document Upload Link"
  },
  {
    tagString: "{{seller.address}}",
    label: "Seller Address"
  },
  {
    tagString: "{{sellerAttorney.address}}",
    label: "Seller Attorney Address"
  },
  {
    tagString: "{{sellerAttorneyAssistant.address}}",
    label: "Seller Attorney Assistant Address"
  },
  {
    tagString: "{{sellerAttorneyAssistant.companyName}}",
    label: "Seller Attorney Assistant Company Name"
  },
  {
    tagString: "{{sellerAttorneyAssistant.email}}",
    label: "Seller Attorney Assistant Email"
  },
  {
    tagString: "{{sellerAttorneyAssistant.name}}",
    label: "Seller Attorney Assistant Name"
  },
  {
    tagString: "{{sellerAttorneyAssistant.cbPosLink}}",
    label: "Seller Attorney Assistant POS Co-branded Link"
  },
  {
    tagString: "{{sellerAttorneyAssistant.phone}}",
    label: "Seller Attorney Assistant Phone"
  },
  {
    tagString: "{{sellerAttorneyAssistant.profileImage}}",
    label: "Seller Attorney Assistant Profile Image"
  },
  {
    tagString: "{{sellerAttorney.companyName}}",
    label: "Seller Attorney Company Name"
  },
  {
    tagString: "{{sellerAttorney.email}}",
    label: "Seller Attorney Email"
  },
  {
    tagString: "{{sellerAttorney.name}}",
    label: "Seller Attorney Name"
  },
  {
    tagString: "{{sellerAttorney.cbPosLink}}",
    label: "Seller Attorney POS Co-branded Link"
  },
  {
    tagString: "{{sellerAttorney.phone}}",
    label: "Seller Attorney Phone"
  },
  {
    tagString: "{{sellerAttorney.profileImage}}",
    label: "Seller Attorney Profile Image"
  },
  {
    tagString: "{{seller.companyName}}",
    label: "Seller Company Name"
  },
  {
    tagString: "{{loanTransaction.sellerCredits}}",
    label: "Seller Credits"
  },
  {
    tagString: "{{seller.email}}",
    label: "Seller Email"
  },
  {
    tagString: "{{seller.name}}",
    label: "Seller Name"
  },
  {
    tagString: "{{seller.cbPosLink}}",
    label: "Seller POS Co-branded Link"
  },
  {
    tagString: "{{seller.phone}}",
    label: "Seller Phone"
  },
  {
    tagString: "{{seller.profileImage}}",
    label: "Seller Profile Image"
  },
  {
    tagString: "{{sellerREA.address}}",
    label: "Seller Real Estate Agent Address"
  },
  {
    tagString: "{{sellerREA.companyName}}",
    label: "Seller Real Estate Agent Company Name"
  },
  {
    tagString: "{{sellerREA.email}}",
    label: "Seller Real Estate Agent Email"
  },
  {
    tagString: "{{sellerREA.name}}",
    label: "Seller Real Estate Agent Name"
  },
  {
    tagString: "{{sellerREA.cbPosLink}}",
    label: "Seller Real Estate Agent POS Co-branded Link"
  },
  {
    tagString: "{{sellerREA.phone}}",
    label: "Seller Real Estate Agent Phone"
  },
  {
    tagString: "{{sellerREA.profileImage}}",
    label: "Seller Real Estate Agent Profile Image"
  },
  {
    tagString: "{{sellerTransactionCoordinator.address}}",
    label: "Seller Transaction Coordinator Address"
  },
  {
    tagString: "{{sellerTransactionCoordinator.companyName}}",
    label: "Seller Transaction Coordinator Company Name"
  },
  {
    tagString: "{{sellerTransactionCoordinator.email}}",
    label: "Seller Transaction Coordinator Email"
  },
  {
    tagString: "{{sellerTransactionCoordinator.name}}",
    label: "Seller Transaction Coordinator Name"
  },
  {
    tagString: "{{sellerTransactionCoordinator.cbPosLink}}",
    label: "Seller Transaction Coordinator POS Co-branded Link"
  },
  {
    tagString: "{{sellerTransactionCoordinator.phone}}",
    label: "Seller Transaction Coordinator Phone"
  },
  {
    tagString: "{{sellerTransactionCoordinator.profileImage}}",
    label: "Seller Transaction Coordinator Profile Image"
  },
  {
    tagString: "{{fromUser.alternatePhone}}",
    label: "Sender Alternate Phone"
  },
  {
    tagString: "{{fromUser.email}}",
    label: "Sender Email"
  },
  {
    tagString: "{{fromUser.firstName}}",
    label: "Sender First Name"
  },
  {
    tagString: "{{fromUser.fullName}}",
    label: "Sender Full Name"
  },
  {
    tagString: "{{fromUser.jobTitle}}",
    label: "Sender Job Title"
  },
  {
    tagString: "{{fromUser.lastName}}",
    label: "Sender Last Name"
  },
  {
    tagString: "{{fromUser.nmlsId}}",
    label: "Sender NMLS"
  },
  {
    tagString: "{{fromUser.name}}",
    label: "Sender Name"
  },
  {
    tagString: "{{fromUser.formattedPhone}}",
    label: "Sender Phone"
  },
  {
    tagString: "{{fromUser.formattedPhoneWithExt}}",
    label: "Sender Phone With Extension"
  },
  {
    tagString: "{{fromUser.profileImage}}",
    label: "Sender Profile Image"
  },
  {
    tagString: "{{scenario.propertyAddress}}",
    label: "Subject Property Address"
  },
  {
    tagString: "{{surveyor.address}}",
    label: "Surveyor Address"
  },
  {
    tagString: "{{surveyor.companyName}}",
    label: "Surveyor Company Name"
  },
  {
    tagString: "{{surveyor.email}}",
    label: "Surveyor Email"
  },
  {
    tagString: "{{surveyor.name}}",
    label: "Surveyor Name"
  },
  {
    tagString: "{{surveyor.cbPosLink}}",
    label: "Surveyor POS Co-branded Link"
  },
  {
    tagString: "{{surveyor.phone}}",
    label: "Surveyor Phone"
  },
  {
    tagString: "{{surveyor.profileImage}}",
    label: "Surveyor Profile Image"
  },
  {
    tagString: "{{fromSystem.address.line1}}",
    label: "System Address Line 1"
  },
  {
    tagString: "{{fromSystem.address.line2}}",
    label: "System Address Line 2"
  },
  {
    tagString: "{{fromSystem.copyright}}",
    label: "System Copyright"
  },
  {
    tagString: "{{fromSystem.fromEmail}}",
    label: "System Email"
  },
  {
    tagString: "{{fromSystem.social.facebook}}",
    label: "System FaceBook URL"
  },
  {
    tagString: "{{fromSystem.social.linkedIn}}",
    label: "System LinkedIn URL"
  },
  {
    tagString: "{{fromSystem.logoUrl}}",
    label: "System Logo Image"
  },
  {
    tagString: "{{fromSystem.fromName}}",
    label: "System Name"
  },
  {
    tagString: "{{fromSystem.supportEmail}}",
    label: "System Support Email"
  },
  {
    tagString: "{{fromSystem.support.formattedUrl}}",
    label: "System Support Mail To URL"
  },
  {
    tagString: "{{fromSystem.support.name}}",
    label: "System Support Name"
  },
  {
    tagString: "{{fromSystem.support.url}}",
    label: "System Support URL"
  },
  {
    tagString: "{{fromSystem.url}}",
    label: "System URL"
  },
  {
    tagString: "{{fromSystem.social.youtube}}",
    label: "System YouTube URL"
  },
  {
    tagString: "{{escrow.taxes}}",
    label: "Taxes Escrow"
  },
  {
    tagString: "{{titleAgent.address}}",
    label: "Title Agent Address"
  },
  {
    tagString: "{{titleAgent.companyName}}",
    label: "Title Agent Company Name"
  },
  {
    tagString: "{{titleAgent.email}}",
    label: "Title Agent Email"
  },
  {
    tagString: "{{titleAgent.name}}",
    label: "Title Agent Name"
  },
  {
    tagString: "{{titleAgent.cbPosLink}}",
    label: "Title Agent POS Co-branded Link"
  },
  {
    tagString: "{{titleAgent.phone}}",
    label: "Title Agent Phone"
  },
  {
    tagString: "{{titleAgent.profileImage}}",
    label: "Title Agent Profile Image"
  },
  {
    tagString: "{{transactionCoordinator.address}}",
    label: "Transaction Coordinator Address"
  },
  {
    tagString: "{{transactionCoordinator.companyName}}",
    label: "Transaction Coordinator Company Name"
  },
  {
    tagString: "{{transactionCoordinator.email}}",
    label: "Transaction Coordinator Email"
  },
  {
    tagString: "{{transactionCoordinator.name}}",
    label: "Transaction Coordinator Name"
  },
  {
    tagString: "{{transactionCoordinator.cbPosLink}}",
    label: "Transaction Coordinator POS Co-branded Link"
  },
  {
    tagString: "{{transactionCoordinator.phone}}",
    label: "Transaction Coordinator Phone"
  },
  {
    tagString: "{{transactionCoordinator.profileImage}}",
    label: "Transaction Coordinator Profile Image"
  },
  {
    tagString: "{{wellSepticInspector.address}}",
    label: "Well & Septic Inspector Address"
  },
  {
    tagString: "{{wellSepticInspector.companyName}}",
    label: "Well & Septic Inspector Company Name"
  },
  {
    tagString: "{{wellSepticInspector.email}}",
    label: "Well & Septic Inspector Email"
  },
  {
    tagString: "{{wellSepticInspector.name}}",
    label: "Well & Septic Inspector Name"
  },
  {
    tagString: "{{wellSepticInspector.cbPosLink}}",
    label: "Well & Septic Inspector POS Co-branded Link"
  },
  {
    tagString: "{{wellSepticInspector.phone}}",
    label: "Well & Septic Inspector Phone"
  },
  {
    tagString: "{{wellSepticInspector.profileImage}}",
    label: "Well & Septic Inspector Profile Image"
  }
];