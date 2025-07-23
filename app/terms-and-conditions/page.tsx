"use client";
import { motion, Variants } from "framer-motion";

export default function TermsAndConditions() {
  const fadeInVariants : Variants= {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <main className="w-full max-w-7xl mx-auto min-h-screen bg-white font-outfit">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="w-full max-w-4xl mx-auto px-4 py-16 sm:py-24"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-[#921D31]">
          Terms & Conditions – Milan Juice Center
        </h1>
        <div className="text-gray-700 space-y-8">
          <div className="text-sm text-gray-500">
            Effective Date: July 02, 2025
            <br />
            Platform: Mobile App
            <br />
            Website: https://milanjuicecenter.com
          </div>

          <p className="text-base sm:text-lg">
            Welcome to Milan Juice Center! These Terms & Conditions ("Terms") govern your use of our mobile app 
            and services. By downloading, installing, or placing an order through the Milan Juice Center App, 
            you agree to be bound by these Terms.
          </p>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">1. Eligibility</h2>
            <p>To use our app and services, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 13 years old.</li>
              <li>Agree to provide accurate personal and contact information.</li>
            </ul>
            <p>By using the app, you confirm that you meet these requirements.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">2. App Use & Access</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You may use the app solely for personal, non-commercial use.</li>
              <li>Do not attempt to reverse-engineer, clone, or disrupt the app's operations.</li>
              <li>We reserve the right to restrict access or terminate your account if misuse is detected.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">3. Orders & Acceptance</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All orders placed through the app are subject to availability and acceptance.</li>
              <li>You'll receive confirmation once your order is successfully placed.</li>
              <li>We reserve the right to cancel or modify orders due to stock availability, incorrect pricing, or technical issues.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">4. Pricing & Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All prices shown in the app are in INR and include applicable taxes unless stated otherwise.</li>
              <li>Payments must be made via the app using supported payment methods (UPI, Cards, Wallets, COD, etc.).</li>
              <li>Orders will only be processed after successful payment confirmation (excluding COD).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">5. Delivery Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Deliveries are available within our serviceable areas only.</li>
              <li>We aim to deliver fresh juice within the selected time window.</li>
              <li>Delays may occur due to traffic, weather, or other unforeseen circumstances.</li>
              <li>If the delivery fails due to user error (e.g., wrong address or no response), re-delivery may be chargeable.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">6. Refund & Cancellation</h2>
            <p className="font-medium">Cancellation Window:</p>
            <p>Orders can be cancelled within 5 minutes of placement, provided preparation hasn't started.</p>
            
            <p className="font-medium">Refund Eligibility:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Product damaged or spoiled</li>
              <li>Incorrect item delivered</li>
              <li>Non-delivery due to our error</li>
            </ul>
            <p>
              Refund requests must be raised via the app within 2 hours of delivery. All refunds are processed 
              back to the original payment method within 5–7 business days.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">7. Health & Allergy Disclaimer</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All ingredients are listed for each product.</li>
              <li>Our juices may contain or come into contact with allergens like nuts, dairy, or fruits.</li>
              <li>Milan Juice Center is not responsible for allergic reactions. Customers should review ingredients before consumption.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">8. Account & Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are responsible for maintaining the confidentiality of your account and OTPs.</li>
              <li>Any activity under your account will be considered authorized unless reported.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">9. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All rights to app design, branding, content, and media belong to Milan Juice Center.</li>
              <li>No content may be copied, reused, or distributed without permission.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">10. Limitation of Liability</h2>
            <p>We are not liable for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delays beyond our control</li>
              <li>Technical issues in payment gateways</li>
              <li>Any indirect or incidental damages</li>
            </ul>
            <p>Use of the app is at your own risk.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">11. Modifications</h2>
            <p>
              We may update these Terms from time to time. Continued use of the app after changes implies acceptance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes will be subject to the jurisdiction 
              of courts located in Noida.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">13. Contact Us</h2>
            <p>For support, feedback, or complaints, reach out via:</p>
            <div className="pl-6 space-y-1">
              <p>📧 milanjuice91@gmail.com</p>
              <p>📞 +91 8008100687</p>
              <p>📞 +91 6309918500</p>
            </div>
          </section>
        </div>
      </motion.div>
    </main>
  );
}
