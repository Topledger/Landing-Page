import Head from "next/head";
import Header from "@/components/Header";
import Page from "@/components/Page";

import TrialSection from "@/components/TrialSection";
import PrivacySection from "./components/PrivacySection";

const pageTitle = "Privacy Policy";
const pageDescription =
  "Thank you for choosing Top Ledger. By using our website, engaging with our services, or accessing our software-as-a-service (SaaS) offerings, you agree to the practices described in this policy. If you're representing an organization, your agreement confirms you're authorized to bind your entity and its users to these terms. If you lack such authority, or if you disagree with any part of these terms, you will not be able to access our services.";

const sections = [
  {
    type: "text",
    title: "Effective date",
    text: "This policy is effective as of January 1st, 2024. We are committed to managing any significant changes with transparency, affecting your rights or obligations and seeking your consent where required by law.",
  },
  {
    type: "text",
    title: "Who we are",
    text: "Top Ledger specializes in cutting-edge blockchain data analytics through our sophisticated SaaS platform. Our Privacy Policy is designed to protect information collected directly through our services and does not cover third-party websites or services you might interact with. We encourage you to review their privacy policies. If our data handling practices are not aligned with your expectations, consider removing cookies from your device after using our site and reconsidering your use of our services.",
  },
  {
    type: "text",
    title: "Understanding our data use",
    text: "We collect data directly when you interact with our website, sign up for trials, or communicate with us, and indirectly through tracking technologies like cookies. This helps us understand your navigation of our website and integrate data from third-party sources to enhance our services. Our goal is to deliver and improve the valuable services you expect from us, maintaining the highest standards of data security.",
  },
  {
    type: "list",
    title: "Types of data we collect",
    list: {
      items: [
        {
          type: "definition",
          title: "Personal data",
          definition:
            "Information you provide that allows us to offer personalized services, respond to queries, send updates, and market our offerings. This is crucial for access to our platform, content delivery, and regulatory compliance.",
        },
        {
          type: "definition",
          title: "Service data",
          definition:
            "Used to facilitate the services you've subscribed to, ensuring functionality and performance.",
        },
        {
          type: "definition",
          title: "Other data",
          definition:
            "Treated with the same level of care as personal data in jurisdictions with stringent data protection laws, respecting your privacy and rights under our policy.",
        },
      ],
    },
  },
  {
    title: "How do we share data",
    text: "We do not sell your data. Sharing is limited to:",
    type: "list",
    list: {
      items: [
        {
          type: "definition",
          title: "Service providers",
          definition:
            "Partners providing essential services, from infrastructure to operational assistance.",
        },
        {
          type: "definition",
          title: "Partners and legal entities",
          definition: "For service integrations and legal compliance.",
        },
      ],
    },
  },
  {
    type: "text",
    title: "Security measures and data retention",
    text: "We employ rigorous security measures to protect your data and retain it only as long as necessary or as required by law, after which it is securely disposed of or anonymized.",
  },
  {
    type: "text",
    title: "Use by minors and your data rights",
    text: "Our services are not intended for minors. You have the right to access, correct, or delete your personal information. We provide mechanisms for updating or removing your data, except where retention is legally required.",
  },
  {
    type: "text",
    title: "Global presence and your data",
    text: "Your data may be processed in any country where we or our service providers are located, subject to different data protection laws. We ensure international data transfers comply with legal requirements, safeguarding your information according to this policy.",
  },
  {
    type: "markdown",
    text: "**Questions or Concerns?** For any inquiries related to your data privacy to contact our Data Privacy Officer, please email [connect@topledger.xyz](mailto:connect@topledger.xyz). We are committed to managing your data with care and respect, in line with our commitment to privacy and security.",
  },
];

const ResearchPage = () => {
  return (
    <Page>
      <Head>
        
        <title>Top Ledger - Privacy Policy</title>
        <meta
          name="description"
          content="Review Top Ledger's privacy policy to understand how we handle your data, including personal and service data. Learn about our data collection, retention, sharing, security measures, and your privacy rights."
        />
        <meta
          name="keywords"
          content="Top Ledger privacy policy, data privacy, personal data handling, service data, SaaS privacy, data retention policy, data security, global data compliance, privacy rights, blockchain privacy, data sharing policy, GDPR compliance, data protection, cookie policies"
        />
        <meta name="author" content="Top Ledger Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Tags for Social Media */}
        <meta
          property="og:title"
          content="Top Ledger - Privacy Policy"
        />
        <meta
          property="og:description"
          content="Understand how Top Ledger collects, uses, and protects your data. Learn about our commitment to data privacy, security, and compliance with international standards."
        />
        <meta property="og:image" content="/assets/images/privacy-policy/og-image.jpg" />
        <meta property="og:url" content="https://www.topledger.xyz/privacy-policy" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Ledger - Privacy Policy" />
        <meta
          name="twitter:description"
          content="Explore how Top Ledger manages your data securely and transparently. Learn about our data collection, retention, and sharing practices."
        />
        <meta name="twitter:image" content="/assets/images/privacy-policy/twitter-card-image.jpg" />
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
