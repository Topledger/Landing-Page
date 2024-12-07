import Head from "next/head";
import Header from "@/components/Header";
import Page from "@/components/Page";

import TrialSection from "@/components/TrialSection";
import PrivacySection from "./components/PrivacySection";

const pageTitle = "Terms and Conditions";
const pageDescription =
  'These Terms and Conditions ("Terms") govern your access to and use of the TopLedger.xyz website and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our Services.';

const sections = [
  {
    type: "text",
    title: "Introduction",
    text: "Top Ledger is a comprehensive blockchain analytics platform focused on providing insights and data analytics for the Solana blockchain. We aim to deliver reliable data solutions for web3 data teams, institutions, and market intelligence platforms.",
  },
  {
    type: "text",
    title: "User Accounts",
    text: "Services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials.",
  },
  {
    type: "list",
    gap: "1rem",
    title: "Acceptable Use",
    text: "You agree to use our Services only for lawful purposes. You must not:",
    list: {
      items: [
        {
          type: "text",
          definition:
            "Use the Services in any way that violates any applicable federal, state, local, or international law or regulation.",
        },
        {
          type: "text",
          definition:
            "Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services.",
        },
        {
          type: "text",
          definition:
            "Transmit any advertising or promotional material without our prior written consent.",
        },
      ],
    },
  },
  {
    type: "list",
    gap: "1rem",
    title: "Access and Delivery of Services",
    text: "We strive to ensure that access to our online blockchain analytics tool and analytics services is provided promptly upon purchase. Delivery timelines for access credentials or service initiation may vary based on your location, payment confirmation, and the specifics of the service package selected.",
    list: {
      items: [
        {
          type: "definition",
          title: "Service activation",
          definition:
            "Access to our analytics tool is typically granted immediately upon successful payment confirmation. For customized analytics services, timelines will be communicated during the onboarding process.",
        },
        {
          type: "definition",
          title: "Service delivery",
          definition:
            "Estimated timelines for service initiation will be provided at the time of purchase but are not guaranteed. Delays may occur due to unforeseen technical or operational circumstances, and we will make every effort to keep you informed.",
        },
      ],
    },
  },
  {
    type: "markdown",
    title: "Cancellations, Refunds, and Returns",
    text: "**(a) Early Termination**",
    noDivider: true,
  },
  {
    margin: "16px",
    type: "list",
    gap: "1rem",
    list: {
      items: [
        {
          type: "definition",
          title: "Mutual termination",
          definition:
            "Either party may terminate this Agreement before the end of the Service Period for any reason, provided 15 days' written notice is given to the other party. This termination is separate from the specific rights outlined below.",
        },
        {
          type: "definition",
          title: "Breach of agreement",
          definition:
            "If a significant breach of this Agreement occurs, the non-breaching party may terminate the Agreement if the breach is not remedied within 30 days after written notice.",
        },
        {
          type: "definition",
          title: "Top Ledger's right to terminate",
          definition:
            "Top Ledger reserves the right to terminate the Agreement immediately with written notice to the Customer in the following situations:",
          list: {
            gap: "1rem",
            items: [
              {
                type: "text",
                text: "If the Customer breaches provisions of the Agreement (e.g., unauthorized use of the analytics tool, data misuse, or service violations) and fails to remedy the breach after being given a reasonable opportunity to do so.",
                marker: "dot",
              },
              {
                type: "text",
                text: "If necessary for Top Ledger to comply with relevant laws or regulations.",
                marker: "dot",
              },
              {
                type: "text",
                text: "If the Customer defaults on payment obligations under the agreed payment plan for the subscription or service.",
                marker: "dot",
              },
              {
                type: "text",
                text: "If the Customer has purchased the subscription or services through a reseller who is no longer an authorized reseller of Top Ledger.",
                marker: "dot",
              },
            ],
          },
        },
        {
          type: "definition",
          title: "Customer's right to terminate",
          definition:
            "The Customer reserves the right to terminate this Agreement immediately with written notice to Top Ledger if termination is necessary for the Customer to comply with relevant laws or regulations.",
        },
      ],
    },
    noDivider: true,
  },
  {
    margin: "16px",
    type: "markdown",
    text: "**(b) Refunds**",
    noDivider: true,
  },
  {
    margin: "16px",
    type: "markdown",
    text: "**1. Subscriptions (Product)**",
    noDivider: true,
  },
  {
    margin: "16px",
    type: "list",
    gap: "1rem",
    list: {
      items: [
        {
          type: "definition",
          title: "Before access",
          text: "If the subscription is terminated before access to the tool begins, a full refund will be issued.",
        },
        {
          type: "definition",
          title: "Performance issues",
          text: "If the Customer experiences material deficiencies in the analytics tool, they may request a refund within 15 days of subscription activation. Top Ledger will investigate the issue and, if substantiated, provide a refund or service credit.",
        },
        {
          type: "definition",
          title: "No refund for used periods",
          text: "Refunds are not provided for any used portion of the subscription.",
        },
      ],
    },
    noDivider: true,
  },
  {
    margin: "16px",
    type: "markdown",
    text: "**2. Analytics services**",
    noDivider: true,
  },
  {
    margin: "16px",
    type: "list",
    gap: "1rem",
    list: {
      items: [
        {
          type: "text",
          title: "Before service commencement",
          text: "If the Agreement is terminated before the service begins, a full refund will be issued.",
        },
        {
          type: "text",
          title: "Service deficiencies",
          text: "If material deficiencies are identified during the service delivery, the Customer may request a refund within 15 days of service delivery. Top Ledger will assess the issue and, if appropriate, issue a refund or credit.",
        },
        {
          type: "text",
          title: "Completed services",
          text: "Refunds will not be issued for services that have been fully rendered.",
        },
      ],
    },
    noDivider: true,
  },
  {
    margin: "16px",
    type: "markdown",
    text: "**3. Payment defaults**: If the Customer defaults on payment, no refund will be issued for the subscription or services already delivered.",
    noDivider: true,
  },
  {
    margin: "16px",
    type: "markdown",
    text: "**(c) Adjustments and Service Credits**",
    noDivider: true,
  },
  {
    margin: "16px",
    type: "markdown",
    text: "If the Customer is unsatisfied with the analytics tool or services due to performance issues, Top Ledger may offer adjustments or service credits at its discretion. Customers must report issues promptly by contacting [connect@topledger.xyz](connect@topledger.xyz) with detailed information.",
    noDivider: true,
  },
  {
    margin: "16px",
    type: "markdown",
    text: "**(d) Service termination by Top Ledger**",
    noDivider: true,
  },
  {
    margin: "16px",
    text: "In cases where Top Ledger exercises its right to terminate the Agreement:",
    type: "list",
    gap: "1rem",
    list: {
      items: [
        {
          type: "definition",
          definition:
            "For subscriptions, a prorated refund for the unused portion of the subscription period may be provided, except in cases of payment default or breaches caused by the Customer.",
        },
        {
          type: "definition",
          definition:
            "For analytics services, a refund or credit for undelivered portions of the service may be issued, subject to Top Ledger's discretion.",
        },
      ],
    },
  },
  {
    type: "text",
    title: "Intellectual Property",
    text: "All content on TopLedger.xyz, including but not limited to text, graphics, logos, and software, is the property of Top Ledger or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.",
  },
  {
    type: "text",
    title: "Limitation of Liability",
    text: "To the fullest extent permitted by law, Top Ledger shall not be liable for any indirect, incidental, special, consequential damages, or loss of profits arising out of or in connection with your use of the Services. Our total liability shall not exceed the amount paid by you for the Services in the last twelve months.",
  },
  {
    type: "text",
    title: "Dispute Resolution",
    text: "Any disputes arising out of or related to these Terms shall be resolved through binding arbitration in accordance with the rules of Singapore International Arbitration Center (SIAC). The arbitration shall take place in Singapore, and you waive any right to a jury trial.",
  },
  {
    type: "text",
    title: "Governing Law",
    text: "These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law principles.",
  },
  {
    type: "text",
    title: "Changes to Terms",
    text: "We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on our website. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.",
  },
  {
    type: "text",
    title: "Termination",
    text: "We may terminate or suspend your access to our Services immediately, without prior notice or liability, if you breach these Terms.",
  },
  {
    type: "text",
    text: "By using our Services, you acknowledge that you have read these Terms and agree to be bound by them.",
  },
  {
    type: "markdown",
    text: "**Questions or Concerns?** For any inquiries, please email [connect@topledger.xyz](mailto:connect@topledger.xyz).",
  },
];

const ResearchPage = () => {
  return (
    <Page>
      <Head>
        <title>Top Ledger - {pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Top Ledger privacy policy, data privacy, personal data handling, service data, SaaS privacy, data retention policy, data security, global data compliance, privacy rights, blockchain privacy, data sharing policy, GDPR compliance, data protection, cookie policies"
        />
        <meta name="author" content="Top Ledger Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content={`Top Ledger - ${pageTitle}`} />
        <meta
          property="og:description"
          content="Understand how Top Ledger collects, uses, and protects your data. Learn about our commitment to data privacy, security, and compliance with international standards."
        />
        <meta
          property="og:image"
          content="/assets/images/privacy-policy/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://www.topledger.xyz/privacy-policy"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Ledger - Privacy Policy" />
        <meta
          name="twitter:description"
          content="Explore how Top Ledger manages your data securely and transparently. Learn about our data collection, retention, and sharing practices."
        />
        <meta
          name="twitter:image"
          content="/assets/images/privacy-policy/twitter-card-image.jpg"
        />
        <meta name="twitter:site" content="@TopLedger" />

        {/* Extended Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        <meta name="application-name" content="Top Ledger" />
        <meta name="theme-color" content="#FFFFFF" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://www.topledger.xyz/privacy-policy" />
      </Head>
      <Header />
      <PrivacySection
        title={pageTitle}
        description={pageDescription}
        sections={sections}
      />
      <TrialSection />
    </Page>
  );
};

export default ResearchPage;
