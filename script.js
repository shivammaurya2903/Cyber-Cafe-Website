

//scroll animation
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}, { passive: true });


// Service information data (same as in index.html)
const serviceInfo = {
  'AePS': {
    title: 'AePS (Aadhaar Enabled Payment System)',
    description: 'Aadhaar Enabled Payment System (AePS) is a payment service that allows customers to use their Aadhaar number to make financial transactions like cash withdrawal, balance inquiry, and fund transfer at any bank branch or ATM.',
    brief: 'Secure Aadhaar-based banking transactions.'
  },
  'Aadhaar Pay': {
    title: 'Aadhaar Pay',
    description: 'Aadhaar Pay is a digital payment solution that uses Aadhaar authentication for secure transactions. It enables cashless payments and is integrated with various banking services.',
    brief: 'Cashless payments using Aadhaar.'
  },
  'Cash Deposit': {
    title: 'Cash Deposit',
    description: 'Cash deposit services allow you to deposit money into your bank account through our authorized agents. We provide secure and convenient cash deposit facilities.',
    brief: 'Secure cash deposits to your account.'
  },
  'Account Opening': {
    title: 'Account Opening',
    description: 'We assist in opening new bank accounts, including savings accounts, current accounts, and other banking products. Our experts guide you through the entire process.',
    brief: 'Expert assistance for new bank accounts.'
  },
  'Money Transfer': {
    title: 'Money Transfer',
    description: 'Transfer money securely to any bank account within India or internationally. We offer various money transfer services including NEFT, RTGS, and IMPS.',
    brief: 'Secure money transfers nationwide.'
  },
  'Loan Apply': {
    title: 'Loan Application',
    description: 'Apply for various types of loans including personal loans, home loans, business loans, and education loans. We help you find the best loan options and complete the application process.',
    brief: 'Apply for loans with expert guidance.'
  },
  'Credit Card Apply': {
    title: 'Credit Card Application',
    description: 'Apply for credit cards from leading banks. We help you choose the right credit card based on your needs and assist with the application and approval process.',
    brief: 'Get the best credit card for you.'
  },
  'Loan Repayment': {
    title: 'Loan Repayment',
    description: 'Make loan repayments conveniently through our services. We accept payments for various types of loans and ensure timely processing.',
    brief: 'Convenient loan repayment services.'
  },
  'Mobile Recharge': {
    title: 'Mobile Recharge',
    description: 'Recharge your mobile phone instantly with our prepaid and postpaid recharge services. We support all major telecom operators in India.',
    brief: 'Instant mobile recharges for all operators.'
  },
  'DTH Recharge': {
    title: 'DTH Recharge',
    description: 'Recharge your Direct-to-Home (DTH) connection for uninterrupted entertainment. We support all major DTH service providers.',
    brief: 'Recharge DTH for continuous viewing.'
  },
  'Electricity Bill': {
    title: 'Electricity Bill Payment',
    description: 'Pay your electricity bills online through our secure platform. We support bill payments for all major electricity distribution companies.',
    brief: 'Online electricity bill payments.'
  },
  'Water Bill': {
    title: 'Water Bill Payment',
    description: 'Pay your water utility bills conveniently. Our service covers water bill payments for various municipal corporations and water boards.',
    brief: 'Convenient water bill payments.'
  },
  'Gas Bill': {
    title: 'Gas Bill Payment',
    description: 'Pay your gas bills (LPG, PNG) online. We support bill payments for all major gas distribution companies.',
    brief: 'Online gas bill payments.'
  },
  'Insurance': {
    title: 'Insurance Services',
    description: 'Get insurance quotes and purchase policies for life insurance, health insurance, vehicle insurance, and other types of insurance coverage.',
    brief: 'Comprehensive insurance solutions.'
  },
  'Landline Bill': {
    title: 'Landline Bill Payment',
    description: 'Pay your landline telephone bills online. We support bill payments for all major telecom service providers.',
    brief: 'Online landline bill payments.'
  },
  'Credit Card Bill': {
    title: 'Credit Card Bill Payment',
    description: 'Pay your credit card bills securely through our platform. We support payments for all major credit card issuers.',
    brief: 'Secure credit card bill payments.'
  },
  'LIC Bill': {
    title: 'LIC Premium Payment',
    description: 'Pay your Life Insurance Corporation (LIC) premiums online. We ensure timely payment processing to avoid policy lapses.',
    brief: 'Timely LIC premium payments.'
  },
  'FASTag': {
    title: 'FASTag Recharge',
    description: 'Recharge your FASTag for toll payments. We support FASTag recharges for all major banks and service providers.',
    brief: 'Recharge FASTag for toll roads.'
  },
  'Aadhaar Udyog': {
    title: 'Aadhaar Udyog',
    description: 'Update your Aadhaar card details or apply for new Aadhaar. We assist with Aadhaar enrollment, updates, and corrections.',
    brief: 'Aadhaar services and updates.'
  },
  'Aadhaar Update': {
    title: 'Aadhaar Update',
    description: 'Update your Aadhaar information including address, mobile number, and email. Our services ensure accurate and timely updates.',
    brief: 'Update Aadhaar details securely.'
  },
  'PAN NSDL': {
    title: 'PAN Card (NSDL)',
    description: 'Apply for or correct your Permanent Account Number (PAN) card through NSDL. We provide end-to-end assistance for PAN card services.',
    brief: 'PAN card services via NSDL.'
  },
  'PAN UTI': {
    title: 'PAN Card (UTI)',
    description: 'Apply for or correct your Permanent Account Number (PAN) card through UTI. We offer comprehensive PAN card services.',
    brief: 'PAN card services via UTI.'
  },
  'Driving Licence': {
    title: 'Driving Licence Services',
    description: 'Apply for learner\'s licence, permanent licence, or renew your driving licence. We assist with all driving licence related services.',
    brief: 'Complete driving licence services.'
  },
  'Voter ID': {
    title: 'Voter ID Services',
    description: 'Apply for new voter ID card or update existing voter details. We help with voter registration and corrections.',
    brief: 'Voter ID application and updates.'
  },
  'E-Shram Card': {
    title: 'E-Shram Card',
    description: 'Apply for E-Shram card under the government\'s scheme for unorganized workers. We assist with registration and application process.',
    brief: 'E-Shram card for unorganized workers.'
  },
  'Disability Certificate': {
    title: 'Disability Certificate',
    description: 'Apply for disability certificate for various government benefits. We guide you through the medical assessment and certification process.',
    brief: 'Disability certificate services.'
  },
  'Passport': {
    title: 'Passport Services',
    description: 'Apply for new passport, reissue, or renewal. Our experts help with passport applications and document verification.',
    brief: 'Complete passport services.'
  },
  'Caste Certificate': {
    title: 'Caste Certificate',
    description: 'Apply for caste certificate for SC/ST/OBC categories. We assist with document collection and application submission.',
    brief: 'Caste certificate applications.'
  },
  'Domicile Certificate': {
    title: 'Domicile Certificate',
    description: 'Obtain domicile certificate for proof of residence. We help with the application process for various purposes.',
    brief: 'Domicile certificate services.'
  },
  'PMJAY': {
    title: 'PMJAY (Ayushman Bharat)',
    description: 'Enroll in Pradhan Mantri Jan Arogya Yojana (PMJAY) for health insurance coverage. We assist with registration and card issuance.',
    brief: 'Health insurance under PMJAY.'
  },
  'Labour Card': {
    title: 'Labour Card',
    description: 'Apply for construction worker labour card for government benefits. We help with registration under the Building and Other Construction Workers Act.',
    brief: 'Labour card for construction workers.'
  },
  'Ration Card': {
    title: 'Ration Card Services',
    description: 'Apply for new ration card or update existing one. We assist with ration card applications and corrections.',
    brief: 'Ration card services.'
  },
  'Birth Certificate': {
    title: 'Birth Certificate',
    description: 'Apply for birth certificate or obtain duplicate copies. We help with municipal corporation applications.',
    brief: 'Birth certificate services.'
  },
  'GST Registration': {
    title: 'GST Registration',
    description: 'Register your business for Goods and Services Tax (GST). We provide consultation and complete registration assistance.',
    brief: 'GST registration for businesses.'
  },
  'One Person Company': {
    title: 'One Person Company Registration',
    description: 'Register a One Person Company (OPC) with our expert guidance. We handle all documentation and filing requirements.',
    brief: 'OPC registration services.'
  },
  'Private Limited Registration': {
    title: 'Private Limited Company Registration',
    description: 'Register your private limited company. Our services include name approval, documentation, and incorporation.',
    brief: 'Private limited company registration.'
  },
  'Change Business Name': {
    title: 'Change Business Name',
    description: 'Change the name of your existing business entity. We assist with the legal process and documentation.',
    brief: 'Business name change services.'
  },
  'Add/Remove Director': {
    title: 'Add/Remove Director',
    description: 'Add new directors or remove existing ones from your company. We handle all compliance and filing requirements.',
    brief: 'Director changes in company.'
  },
  'GST Correction': {
    title: 'GST Correction',
    description: 'Correct errors in your GST registration details. We help with amendments and updates to GST records.',
    brief: 'GST details correction.'
  },
  'Section-8 Company': {
    title: 'Section-8 Company Registration',
    description: 'Register a Section-8 company for non-profit purposes. We provide complete assistance for charitable organizations.',
    brief: 'Section-8 company registration.'
  },
  'Income Tax Return': {
    title: 'Income Tax Return Filing',
    description: 'File your income tax returns accurately. Our experts help with tax planning and return preparation.',
    brief: 'Accurate ITR filing services.'
  },
  'GST Return': {
    title: 'GST Return Filing',
    description: 'File your GST returns on time. We assist with GSTR-1, GSTR-3B, and other GST return filings.',
    brief: 'Timely GST return filings.'
  },
  'TDS Return': {
    title: 'TDS Return Filing',
    description: 'File Tax Deducted at Source (TDS) returns. We help with quarterly and annual TDS return filings.',
    brief: 'TDS return filing assistance.'
  },
  'TAN Registration': {
    title: 'TAN Registration',
    description: 'Apply for Tax Deduction and Collection Account Number (TAN). We assist with TAN application and allotment.',
    brief: 'TAN registration services.'
  },
  'FSSAI': {
    title: 'FSSAI Registration',
    description: 'Register your food business with FSSAI. We help with FSSAI licence application and renewal.',
    brief: 'FSSAI registration for food businesses.'
  }
};

// Modal functionality (same as in index.html)
const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.getElementsByClassName('close')[0];

// Tooltip functionality
let tooltip = null;

function createTooltip() {
  tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);
}

function showTooltip(card, text) {
  if (!tooltip) createTooltip();
  tooltip.textContent = text;
  const rect = card.getBoundingClientRect();
  tooltip.style.left = rect.left + (rect.width / 2) + 'px';
  tooltip.style.top = rect.top - 40 + 'px';
  tooltip.style.display = 'block';
}

function hideTooltip() {
  if (tooltip) {
    tooltip.style.display = 'none';
  }
}

// Add event listeners to service cards
document.querySelectorAll('.card').forEach(card => {
  const serviceName = card.textContent.trim();

  // Hover to show tooltip
  card.addEventListener('mouseenter', function() {
    if (serviceInfo[serviceName] && serviceInfo[serviceName].brief) {
      showTooltip(this, serviceInfo[serviceName].brief);
    }
  });

  card.addEventListener('mouseleave', function() {
    hideTooltip();
  });

  // Click to show modal
  card.addEventListener('click', function() {
    if (serviceInfo[serviceName]) {
      modalTitle.textContent = serviceInfo[serviceName].title;
      modalDescription.textContent = serviceInfo[serviceName].description;
      modal.style.display = 'block';
    }
  }, { passive: true });
});

// Close modal when clicking close button
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
}, { passive: true });

// Close modal when clicking outside
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}, { passive: true });




