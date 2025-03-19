"use client";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import Background_Services from "@/public/slide-5.png";
import AccountingImage from "@/public/Accounting.png";
import Audit from "@/public/Audit.png";
import DSC from "@/public/DSC.png";
import EWAY from "@/public/EWAY.png";
import GST from "@/public/GST.jpg";
import IEC from "@/public/IEC.png";
import Ip from "@/public/iP.png";
import ITR from "@/public/ITR.jpg";
import Registration from "@/public/Registration.png";
import { ChevronDown } from "lucide-react";

const serviceData = [
  {
    title: 'Goods and Services Tax (GST) Solutions',
    imgSrc: GST.src,
    items: [
      'Comprehensive GST Enrollment Services',
      'Filing of GST Returns (Nil/Regular, including GSTR1 and GSTR3B)',
      'Management of Composition Scheme Returns (GSTR-4)',
      'Preparation of Annual GST Returns (GSTR 8, GSTR 9/9A, GSTR 10)',
      'Detailed GST Account Reconciliation (Up to 3 months)',
      'Processing GST Refunds and Handling Surrender Requests',
      'GST Audit and Response to Notices',
    ],
    imageLeft: true,
  },
  {
    title: 'Income Tax Filing Services',
    imgSrc: ITR.src,
    items: [
      'Income Tax Returns for Salaried Individuals (ITR-1)',
      'Returns for Capital Gains, House Property, and Other Sources (ITR-2)',
      'Returns for Proprietorship Businesses (ITR-3)',
      'Filing for Companies and Firms (ITR-4, ITR-5)',
      'CA Certification of Tax Returns',
      'Corrections and Responses to Notices for ITR Forms',
    ],
    misc:'We provide all types of Income Tax Return Services for current year, previous years and all types of Amendments.',
    imageLeft: false,
  },
  {
    title: 'Digital Signature Certificates (DSC)',
    imgSrc: DSC.src,
    items: [
      'Class-2 DSC for Individuals (2 Years Validity)',
      'Class-2 DSC Combo for Personal and Organizational Use (2 Years)',
      'Class-3 DSC for Government and Organizational Use (2 Years)',
      'Class-3 DSC for Individuals and Organizations (2 Years)',
      'Digital Signature Token Services',
    ],
    imageLeft: true,
  },
  {
    title: 'Business Registration Services',
    imgSrc: Registration.src,
    items: [
      'Udyog Aadhar (MSME) Registration',
      'FSSAI License and Registration',
      'Government e-Marketplace (GEM) Registration',
      'Shop & Establishment Act Registration',
      'LLP, Partnership, and Proprietorship Registration',
      'Director Identification Number (DIN)',
      'Tax Deduction Account Number (TAN) Registration',
      'Company Conversion Services',
      'Nidhi Company and Section 8 / OPC Registration',
    ],
    imageLeft: false,
  },
  {
    title: 'Comprehensive Accounting Services',
    imgSrc: AccountingImage.src,
    items: [
      'Balance Sheet and Profit & Loss Account Preparation',
      'CA Certification for Financial Statements',
      'Monthly and Annual Accounting Packages',
      'GST Bookkeeping Services (Monthly/Yearly)',
      'Digital Tax Payment Assistance (Monthly/Yearly)',
      'Over 20 Varied Accounting Services Available',
    ],
    misc:'There are more than 20 types of accounting services provided by GST Suvidha Kendra. We can also provide you door step services to save your time.',
    imageLeft: true,
  },
  {
    title: 'Audit Services',
    imgSrc: Audit.src,
    items: [
      'Appointment of Auditor (Form ADT-1)',
      'Income Tax Audit for Businesses (Up to 1 Crore)',
      'Income Tax Audit for Businesses (1 Crore to 2 Crore)',
      'Income Tax Audit for Businesses (2 Crore to 5 Crore)',
      'Income Tax Audit for Businesses (5 Crore to 10 Crore)',
    ],
    imageLeft: false,
  },
  {
    title: 'Import/Export Code (IEC) Services',
    imgSrc: IEC.src,
    items: [
      'IEC Registration with Government Fees (Company)',
      'IEC Registration with Government Fees (Partnership)',
      'IEC Registration with Government Fees (Proprietorship)',
      'Amendment Services for IEC',
    ],
    misc:'We Know Import and Export of any product need lots of verification & drafting. All of your hard work should be taken care by a team of professionals. So, we are here to provide you the necessary support.',
    imageLeft: true,
  },
  {
    title: 'Intellectual Property Services',
    imgSrc: Ip.src,
    items: [
      'Trademark Registration for Individuals (Government Fees Applied)',
      'Trademark Registration for Organizations (Government Fees Applied)',
      'Processing Fees for Trademark Registration',
    ],
    misc:'This is one of the important tasks. From Drafting to publishing, there are so many stages involved. We take care of your trademark application by providing right category whether it is a name or logo.',
    imageLeft: false,
  },
  {
    title: 'E-Way Bill Services',
    imgSrc: EWAY.src,
    items: [
      'E-Way Bill Packs (100 Bills - Quarterly)',
      'E-Way Bill Packs (15 Bills - Monthly)',
      'E-Way Bill Packs (5 Bills - Monthly)',
      'Single E-Way Bill Generation',
      'E-Way Bill Registration',
    ],
    imageLeft: true,
    misc:'This can be a headache when you are new to E-Way Bills. For all the bills which are more than 50,000 Rupees, E-Way bill is mandatory. With our flexible plans, you can relax and order the E-way bill online.',
  },
];


export default function Services() {
  return (
    <section
      id="services"
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 relative overflow-hidden"
      style={{
        backgroundImage: `url(${Background_Services.src})`,
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
        <Typography variant="h1" className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Our Premium Services
        </Typography>
        <div className="w-24 h-1 bg-teal-400 rounded-full mx-auto mt-4" />
        <Typography variant="body1" className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Discover tailored solutions designed to empower your business with efficiency and precision.
        </Typography>
      </motion.div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-teal-400"
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
              <Typography variant="h5" className="text-2xl font-semibold text-teal-300 mb-4">
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
                {service.items.length > 4 && (
                  <li className="text-teal-400 cursor-pointer hover:underline">
                    + {service.items.length - 4} more services
                  </li>
                )}
              </ul>

              {/* Misc Info (if available) */}
              {service.misc && (
                <Typography variant="body2" className="mt-4 text-gray-400 italic">
                  {/* {service.misc} */}
                </Typography>
              )}

              {/* Expand Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 flex items-center text-teal-400 hover:text-teal-300 transition-colors"
              >
                {/* Learn More <ChevronDown className="ml-2 w-5 h-5" /> */}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 text-center mt-16"
      >
        <Typography variant="h4" className="text-3xl font-bold">
          Ready to Elevate Your Business?
        </Typography>
        <button className="mt-6 px-8 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 transition-colors">
          Get Started Now
        </button>
      </motion.div> */}
    </section>
  );
}