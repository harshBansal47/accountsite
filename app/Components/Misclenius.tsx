"use client"
import { motion } from 'framer-motion';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';

import Adhar from '@/public/adhar.png';
import BillPayment from '@/public/bill-payments.png';
import Insurance from '@/public/insurance.png';
import Loan from '@/public/loan.png';
import MoneyTransfer from '@/public/money-transfer.png';
import Pancard from '@/public/pncard.png';
import Recharge from '@/public/recharges.png';
import Tour from '@/public/tour.png';
import Website from '@/public/website.png';
import ServicesBackground from '@/public/slide-2.jpg';
import { ChevronDown } from 'lucide-react';


const servicesData = [
  {
    title: 'PAN Card Services',
    imgSrc: Pancard.src,
    items: [
      'New PAN Card (107 Rs inclusive GST)',
      'Correction Application (107 Rs inclusive GST)',
      'Duplicate Application',
    ],
    imageLeft: true,
    misc: 'We at GST Suvidha Kendra provide information about Pan Card and assistance to Individuals in applying for the same through the authorised agents of the authorities. The services rendered include verifying, supporting and filing the application forms for those who are applying for new PAN card, corrections and changes to their existing PAN data and request for duplicate or replacement of lost or damaged PAN card.'
  },
  {
    title: 'Insurance Services',
    imgSrc: Insurance.src,
    items: [
      'Car Insurance (1st & 3rd Party)',
      'Two-Wheeler Insurance (1st & 3rd Party)',
      'Health Insurance',
      'Term Insurance',
      'Travel Insurance',
      'Critical Insurance',
      'Child Insurance',
      'Investment',
      'Pension',
    ],
    imageLeft: false,
    misc: 'With our Loan services, you can check your eligiblity before applying for a loan & save your time. Our system do this check within 10 minutes. Once approved, you can avail loans very fast.'
  },
  {
    title: 'Loan Services',
    imgSrc: Loan.src,
    items: [
      'Personal loans',
      'Business loans',
      'Loan Against property',
      'Home loans',
      'Vehicle loans',
    ],
    imageLeft: true,
  },
  {
    title: 'Website & Local Marketing Services',
    imgSrc: Website.src,
    items: [
      '1 Page Website + Domain + Hosting + 1 Business Email + Logo',
      'E-Commerce Website + Domain + Hosting + 1 Business Email + Logo + 20 Pages',
      'SSL (Security for Websites)/Logo Design/Brochure/Pamphlet/Visiting Card',
      'Listing in 10 Local Websites',
      'City Wise SEO Promotion',
      'Google Ads Set-Up',
      'Facebook Ads Set-Up',
      'Social Media Pages Creation',
    ],
    imageLeft: false,
  },
  {
    title: 'AEPS (Aadhaar Enabled Payment Systems)',
    imgSrc: Adhar.src,
    items: [
      'Withdrawal of cash',
      'Balance Inquiry',
      'Deposition of the amount',
      'Acquiring mini bank statement',
      'Transferal of funds from one Aadhaar-linked bank account to another Aadhaar-linked accounts',
    ],
    imageLeft: true,
    misc: 'No need to go to the bank when you need cash. Simply, apply for your finger and withdraw the money from us.',
  },
  {
    title: 'Money Transfer Services',
    imgSrc: MoneyTransfer.src,
    items: [
      'Add Beneficiary with Name, IFSC, Account Number & mobile number',
      'Money transfer up to 25,000 Rs in one single transaction',
      'Transfer up to 1 Lakh rupees in multiple transactions per day',
      'RTGS/NEFT/UPI for current accounts',
    ],
    imageLeft: false,
  },
  {
    title: 'Bill Payments',
    imgSrc: BillPayment.src,
    items: [
      'Mobile Post-Paid Bill Payment',
      'Electricity Bill Payment',
      'Landline Bill Payment',
      'Data card Bill Payment',
      'Cable TV Bill Payment',
      'DTH Bill Payment',
      'Piped GAS Bill Payment',
      'Broadband Bill Payment',
      'Insurance Premium Payment',
      'Water Bill Payment',
    ],
    imageLeft: true,
  },
  {
    title: 'Recharges',
    imgSrc: Recharge.src,
    items: [
      'Pre-Paid Mobile/Data Card',
      'Airtel/BSNL/IDEA/JIO/MTNL/VODAFONE',
      'DTH Recharges',
      'Airtel DTH Recharge',
      'Dish TV Recharge',
      'Tata Sky Recharge',
      'Sun Direct Recharge',
      'Videocon D2H Recharge',
    ],
    imageLeft: false,
  },
  {
    title: 'Tours & Travels',
    imgSrc: Tour.src,
    items: [
      'FLIGHT (DOMESTIC)',
      'FLIGHT (INTERNATIONAL)',
      'HOTEL BOOKING (DOMESTIC)',
      'HOTEL BOOKING (INTERNATIONAL)',
      'BUS BOOKING',
      'TRAIN BOOKING',
    ],
    imageLeft: true,
  },
];

const miscellaneousServices = [
  "TDS challan Submission",
  "TDS Return (Quarter filing) for Individual",
  "TDS Return (Quarter filing) for Organization",
  "ADVANCE TAX",
  "CMA Report",
  "ROC E FILING",
  "Alteration/Addition in Company",
  "Letter of Undertaking (LUT) File",
  "Name Change of Company",
  "Name Approval of LLP, Private Limited, OPC(RUN Form)",
  "DIR-3 KYC",
  "Company KYC (Active Form) INC-22",
  "Surrender of DIN",
  "Declaration of Commencement of Business",
  "Change in Director Details",
  "Closing of Company-(Excluding Govt. Fees)"
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 relative overflow-hidden"
      style={{
        backgroundImage: `url(${ServicesBackground.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-16"
      >
        <Typography
          variant="h1"
          className="text-5xl md:text-6xl font-extrabold tracking-tight"
        >
          Our Miscellaneous Services
        </Typography>
        <div className="w-24 h-1 bg-teal-400 rounded-full mx-auto mt-4" />
        <Typography
          variant="body1"
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          We care for every financial need with tailored solutions for your convenience.
        </Typography>
      </motion.div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-teal-400"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <motion.img
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Title */}
              <Typography
                variant="h5"
                className="text-2xl font-semibold text-teal-300 mb-4"
              >
                {service.title}
              </Typography>

              {/* Items */}
              <ul className="space-y-3 text-gray-300 text-sm">
                {service.items.slice(0, 4).map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-2 text-teal-400">•</span>
                    {item}
                  </li>
                ))}
                {/* {service.items.length > 4 && (
                  // <li className="text-teal-400 cursor-pointer hover:underline">
                  //   + {service.items.length - 4} more services
                  // </li>
                )} */}
              </ul>

              {/* Misc Info (if available) */}
              {service.misc && (
                <Typography
                  variant="body2"
                  className="mt-4 text-gray-400 italic"
                >
                  {/* {service.misc} */}
                </Typography>
              )}

              {/* Expand Button */}
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 flex items-center text-teal-400 hover:text-teal-300 transition-colors"
              >
                Learn More <ChevronDown className="ml-2 w-5 h-5" />
              </motion.button> */}
            </motion.div>
          ))}
        </div>

        {/* Miscellaneous Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-700/50"
        >
          <Typography
            variant="h4"
            className="text-3xl font-bold text-teal-300 mb-6 text-center"
          >
            Additional Services
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {miscellaneousServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center text-gray-300 hover:text-teal-300 transition-colors"
              >
                <span className="mr-2 text-teal-400">›</span>
                {service}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 text-center mt-16"
      >
        <Typography variant="h4" className="text-3xl font-bold">
          Ready to Simplify Your Financial Life?
        </Typography>
        <button className="mt-6 px-8 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 transition-colors">
          Contact Us Today
        </button>
      </motion.div>
    </section>
  );
}