"use client";
import { motion, Variants } from "framer-motion";

export default function PrivacyPolicy() {
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
    <main className="w-full min-h-screen max-w-7xl mx-auto bg-white font-outfit">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="w-full max-w-4xl mx-auto px-4 py-16 sm:py-24"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-[#921D31]">
          Privacy Policy – Milan Juice Center
        </h1>
        <div className="text-gray-700 space-y-8">
          <div className="text-sm text-gray-500">
            Effective Date: July 02, 2025
            <br />
            Website: https://milanjuicecenter.com
          </div>

          <p className="text-base sm:text-lg">
            At Milan Juice Center, your privacy is important to us. This Privacy Policy explains how we collect,
            use, disclose, and protect your information when you visit our website or use our services.
          </p>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">1. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium">Personal Details:</span> Name, phone number, email address, delivery address.</li>
              <li><span className="font-medium">Payment Information:</span> Billing details (processed securely through third-party gateways).</li>
              <li><span className="font-medium">Usage Data:</span> IP address, browser type, device information, and pages visited.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fulfill and manage orders</li>
              <li>Improve our website and services</li>
              <li>Send updates, offers, and notifications (if opted-in)</li>
              <li>Ensure security and fraud prevention</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">3. Sharing Your Information</h2>
            <p>We do not sell or rent your data. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment processors</li>
              <li>Delivery partners</li>
              <li>Legal authorities when required</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">4. Cookies and Tracking</h2>
            <p>We use cookies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Store user preferences</li>
              <li>Improve user experience</li>
              <li>Analyze traffic and behavior (using tools like Google Analytics)</li>
            </ul>
            <p>You can disable cookies via your browser settings.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">5. Data Security</h2>
            <p>
              We implement industry-standard measures to protect your information. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">6. Your Rights</h2>
            <p>You may:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request a copy of your data</li>
              <li>Ask for corrections or deletions</li>
              <li>Opt out of marketing communication</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">7. Children's Privacy</h2>
            <p>
              Our services are not intended for users under 13 years of age. We do not knowingly collect
              data from children.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">8. Changes to This Policy</h2>
            <p>
              We may update this policy occasionally. Changes will be posted here with the revised date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#FE5D5C]">9. Contact Us</h2>
            <p>For any questions or concerns, reach out at:</p>
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
