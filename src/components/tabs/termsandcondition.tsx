import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

const TelthTermsAndConditions: React.FC = () => {
  return (
    <div style={styles.page}>
      {/* ===== HEADER ===== */}
      <Header />

      {/* ===== CONTENT ===== */}
      <main style={styles.content}>
        <h2 style={styles.title}>TERMS AND CONDITIONS</h2>
        <p style={styles.updated}>Last Updated: April 22, 2025</p>

        {/* 1 */}
        <Section title="1. INTRODUCTION AND ACCEPTANCE OF TERMS">
          <Sub title="1.1 Agreement Overview">
            <p>
              These Terms and Conditions ("Terms") constitute a legally binding
              agreement between you ("User," "you," or "your") and Telth
              Healthcare Private Limited and its subsidiaries ("Telth," "we,"
              "us," or "our"). By accessing or using any of Telth's platforms,
              services, devices, care facilities, or healthcare solutions, you
              acknowledge that you have read, understood, and agree to be bound
              by these Terms.
            </p>
          </Sub>

          <Sub title="1.2 Services Covered">
            <p>These Terms apply to all Telth services including but not limited to:</p>
            <ul>
              <li>Telth Multi-Specialty Smart Care Hubs and Clinics</li>
              <li>Telth Ecosystem devices and gadgets</li>
              <li>Telth DigiDoc AI Central platform</li>
              <li>Telth Care Plans and subscription services</li>
              <li>Telth MobileMed services</li>
              <li>Telth Air Ambulance (T-Chopper)</li>
              <li>Telth Healthcare devices (HES, Dia Lab, Cardio Chip, etc.)</li>
              <li>G-Med ID and Root Cloud EMR systems</li>
              <li>P3DSC (Precise Data-Driven Digital Smart Care) services</li>
              <li>Training and education programs</li>
              <li>E-Pharmacy and Telth Mart services</li>
            </ul>
          </Sub>
        </Section>

        {/* 2 */}
        <Section title="2. DEFINITIONS">
          <Sub title="2.1 Key Terms">
            <ul>
              <li><strong>P3DSC:</strong> Precise Data-Driven Digital Smart Care, Telth's proprietary healthcare delivery algorithm</li>
              <li><strong>G-Med ID:</strong> Global Medical Identification system utilizing blockchain technology</li>
              <li><strong>Root Cloud:</strong> Telth's cloud-based Electronic Medical Records system</li>
              <li><strong>HES:</strong> Health Examination System</li>
              <li><strong>CCM:</strong> Community Care Manager</li>
              <li><strong>CM:</strong> Care Manager</li>
              <li><strong>IoMT:</strong> Internet of Medical Things</li>
              <li><strong>TWBAN:</strong> Telth Wireless Body Area Network</li>
            </ul>
          </Sub>
        </Section>

        {/* 3 */}
        <Section title="3. USER ELIGIBILITY AND ACCOUNT REGISTRATION">
          <Sub title="3.1 Eligibility Requirements">
            <p>You must be at least 18 years of age to use Telth services. By registering, you represent that:</p>
            <ul>
              <li>You have the legal capacity to enter into binding agreements</li>
              <li>All information provided is accurate, current, and complete</li>
              <li>You will maintain the accuracy of such information</li>
            </ul>
          </Sub>

          <Sub title="3.2 Account Security">
            <ul>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You agree to notify Telth immediately of any unauthorized use</li>
              <li>You will not share your account with others</li>
              <li>Telth reserves the right to suspend or terminate accounts for security violations</li>
            </ul>
          </Sub>
        </Section>

        {/* 4 */}
        <Section title="4. HEALTHCARE SERVICES AND DEVICES">
          <Sub title="4.1 Healthcare Services">
            <p>Telth provides various healthcare services including:</p>
            <ul>
              <li>Primary, preventive, urgent, and emergency care</li>
              <li>Diagnostic testing and monitoring</li>
              <li>Collaborative care management</li>
              <li>Remote health monitoring</li>
              <li>Data-driven treatment protocols</li>
              <li>Robotic surgery facilities</li>
              <li>Mobile medical services</li>
            </ul>
          </Sub>

          <Sub title="4.2 Medical Devices and Equipment">
            <p>Users acknowledge that:</p>
            <ul>
              <li>All devices must be used according to provided instructions</li>
              <li>Misuse may result in inaccurate results or health risks</li>
              <li>Telth is not liable for improper device usage</li>
              <li>Regular maintenance and calibration may be required</li>
            </ul>
          </Sub>

          <Sub title="4.3 Limitations of Services">
            <ul>
              <li>Telth services are not substitutes for emergency medical care</li>
              <li>In case of emergency, contact local emergency services immediately</li>
              <li>Some services may have geographical limitations</li>
              <li>Certain treatments may require in-person evaluation</li>
            </ul>
          </Sub>
        </Section>

        {/* 5 */}
        <Section title="5. DATA COLLECTION, PRIVACY, AND SECURITY">
          <Sub title="5.1 Data Collection">
            <p>Telth collects:</p>
            <ul>
              <li>Personal information (name, contact details, etc.)</li>
              <li>Medical history and health data</li>
              <li>Device usage data</li>
              <li>Treatment and diagnostic information</li>
              <li>Payment and insurance information</li>
            </ul>
          </Sub>

          <Sub title="5.2 Data Usage">
            <p>Your data is used for:</p>
            <ul>
              <li>Providing healthcare services</li>
              <li>Personalizing treatment plans</li>
              <li>Research and improvement of services</li>
              <li>Compliance with legal requirements</li>
              <li>Quality assurance and training</li>
            </ul>
          </Sub>

          <Sub title="5.3 G-Med ID and Blockchain Security">
            <ul>
              <li>All patient data is secured using blockchain technology</li>
              <li>Access is controlled through consent-based mechanisms</li>
              <li>Data integrity and confidentiality are maintained through encryption</li>
              <li>Users control their data sharing permissions</li>
            </ul>
          </Sub>
        </Section>

        {/* 6 */}
        <Section title="6. CARE PLANS AND SUBSCRIPTIONS">
          <Sub title="6.1 Care Plan Services">
            <ul>
              <li>Care plans are personalized based on P3DSC algorithm analysis</li>
              <li>Plans may include home visits, monitoring, medication, and consultations</li>
              <li>Specific services vary by plan type and subscription level</li>
              <li>Insurance coverage may apply depending on your policy</li>
            </ul>
          </Sub>

          <Sub title="6.2 Payment Terms">
            <ul>
              <li>Subscription fees are billed according to chosen payment schedule</li>
              <li>All payments are non-refundable unless otherwise specified</li>
              <li>Prices are subject to change with notice</li>
              <li>Late payments may result in service suspension</li>
            </ul>
          </Sub>

          <Sub title="6.3 Cancellation Policy">
            <ul>
              <li>Users may cancel subscriptions with 30 days' notice</li>
              <li>Pro-rated refunds may be available for annual subscriptions</li>
              <li>Certain services may have minimum commitment periods</li>
              <li>Device rentals must be returned upon cancellation</li>
            </ul>
          </Sub>
        </Section>

        {/* 7 */}
        <Section title="7. TELEMEDICINE AND REMOTE CARE">
          <Sub title="7.1 Telemedicine Services">
            <ul>
              <li>Available through DigiDoc platform</li>
              <li>Subject to applicable laws and regulations</li>
              <li>Requires stable internet connection</li>
              <li>Not suitable for emergency situations</li>
            </ul>
          </Sub>

          <Sub title="7.2 Remote Monitoring">
            <ul>
              <li>Continuous monitoring through IoMT devices</li>
              <li>Data transmission is encrypted and secure</li>
              <li>Alert systems for critical health parameters</li>
              <li>Regular health status updates</li>
            </ul>
          </Sub>
        </Section>

        {/* 8 */}
        <Section title="8. INTELLECTUAL PROPERTY">
          <Sub title="8.1 Telth Property">
            <p>All intellectual property including:</p>
            <ul>
              <li>P3DSC algorithm</li>
              <li>Software and applications</li>
              <li>Device designs and technology</li>
              <li>Trademarks and logos</li>
              <li>Content and documentation</li>
            </ul>
            <p>remains the exclusive property of Telth.</p>
          </Sub>

          <Sub title="8.2 User License">
            <p>Users are granted a limited, non-exclusive, non-transferable license to:</p>
            <ul>
              <li>Access and use Telth services</li>
              <li>Use provided software and applications</li>
              <li>View and download permitted content</li>
              <li>Utilize devices as intended</li>
            </ul>
          </Sub>
        </Section>

        {/* 9 */}
        <Section title="9. LIABILITY AND INDEMNIFICATION">
          <Sub title="9.1 Limitation of Liability">
            <p>Telth shall not be liable for:</p>
            <ul>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of data or profits</li>
              <li>Service interruptions</li>
              <li>Third-party actions</li>
            </ul>
          </Sub>

          <Sub title="9.2 Indemnification">
            <p>Users agree to indemnify and hold Telth harmless from:</p>
            <ul>
              <li>Misuse of services or devices</li>
              <li>Violation of these Terms</li>
              <li>Infringement of third-party rights</li>
              <li>Fraudulent or illegal activities</li>
            </ul>
          </Sub>
        </Section>

        {/* 10 */}
        <Section title="10. INTERNATIONAL OPERATIONS">
          <Sub title="10.1 Global Presence">
            <p>Telth operates in multiple countries including:</p>
            <ul>
              <li>India (Chennai, Delhi, Bangalore)</li>
              <li>United States</li>
              <li>United Kingdom (London, Birmingham)</li>
              <li>Saint Lucia</li>
            </ul>
          </Sub>

          <Sub title="10.2 Jurisdiction">
            <p>These Terms are governed by the laws of the jurisdiction where services are provided.</p>
          </Sub>
        </Section>

        {/* 11 */}
        <Section title="11. MODIFICATIONS AND TERMINATION">
          <Sub title="11.1 Term Updates">
            <p>Telth reserves the right to modify these Terms at any time. Changes will be effective upon posting to our website or platforms.</p>
          </Sub>

          <Sub title="11.2 Service Termination">
            <p>Telth may terminate or suspend services:</p>
            <ul>
              <li>For violation of Terms</li>
              <li>For fraudulent activities</li>
              <li>For non-payment</li>
              <li>At our discretion with notice</li>
            </ul>
          </Sub>
        </Section>

        {/* 12 */}
        <Section title="12. SPECIAL PROVISIONS">
          <Sub title="12.1 Healthcare Professional Users">
            <p>Additional terms apply to healthcare professionals using Telth systems for practice management.</p>
          </Sub>

          <Sub title="12.2 Training and Certification">
            <p>Users participating in Telth training programs agree to additional terms specific to educational services.</p>
          </Sub>

          <Sub title="12.3 Research Participation">
            <p>Users participating in research studies must provide separate informed consent.</p>
          </Sub>
        </Section>

        {/* 13 */}
        <Section title="13. CONTACT INFORMATION">
          <p>For questions regarding these Terms, please contact:</p>
          <p style={styles.contactBox}>
            <strong>Telth Healthcare Private Limited</strong><br />
            <strong>India:</strong><br />
            1. Telth Healthcare Pvt Ltd.<br />
            Vardhaman Trade Centre, New Delhi<br />
            2. Telth Healthcare Pvt Limited<br />
            <br />
            <strong>Email:</strong> info@telth.org<br />
            <strong>Website:</strong> www.telth.org
          </p>
        </Section>

        {/* 15 */}
        <Section title="15. MISCELLANEOUS">
          <Sub title="15.1 Entire Agreement">
            <p>These Terms constitute the entire agreement between you and Telth.</p>
          </Sub>

          <Sub title="15.2 Severability">
            <p>If any provision is found unenforceable, the remaining provisions shall remain in effect.</p>
          </Sub>

          <Sub title="15.3 No Waiver">
            <p>Failure to enforce any right shall not constitute a waiver of such right.</p>
          </Sub>

          <Sub title="15.4 Force Majeure">
            <p>Telth shall not be liable for failures due to circumstances beyond reasonable control.</p>
          </Sub>
        </Section>

        <div style={styles.acknowledgement}>
          <p>By using Telth services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
        </div>
   
      </main>
         <p className="text-center">
          © 2025 Telth Healthcare Private Limited. All rights reserved.
        </p>
    </div>
  );
};

/* ===== Reusable Components ===== */
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section style={styles.section}>
    <h3 style={styles.sectionTitle}>{title}</h3>
    {children}
  </section>
);

const Sub: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div style={styles.subSection}>
    <h4 style={styles.subTitle}>{title}</h4>
    {children}
  </div>
);

/* ===== Styles ===== */
const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    backgroundImage: "url('/assets/telth-bg.png')",
    backgroundRepeat: "repeat",
    backgroundSize: "600px",
    backgroundPosition: "center",
    fontFamily: "'Georgia', 'Times New Roman', serif",
  },
  content: {
    maxWidth: "900px",
    margin: "20px auto",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  mainTitle: {
    fontSize: "32px",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "8px",
    color: "#1a1a1a",
  },
  subtitle: {
    fontSize: "24px",
    fontWeight: 600,
    textAlign: "center",
    marginBottom: "16px",
    color: "#333",
  },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "12px",
    color: "#5e9dee",
  },
  updated: {
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: "32px",
    color: "#666",
  },
  section: {
    marginTop: "32px",
    marginBottom: "24px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: 700,
    marginBottom: "16px",
    color: "#b94ae6",
    borderBottom: "2px solid #0066cc",
    paddingBottom: "8px",
  },
  subSection: {
    marginTop: "16px",
    marginBottom: "16px",
  },
  subTitle: {
    fontSize: "17px",
    fontWeight: 600,
    marginBottom: "8px",
    marginTop: "12px",
    color: "#333",
  },
  contactBox: {
    padding: "16px",
    borderRadius: "4px",
    marginTop: "12px",
    lineHeight: "1.8",
  },
  acknowledgement: {
    padding: "20px",
    borderRadius: "4px",
    marginTop: "32px",
    marginBottom: "24px",
    border: "2px solid #0066cc",
    textAlign: "center",
    fontWeight: 600,
  },
  footer: {
    marginTop: "40px",
    textAlign: "center",
    fontSize: "14px",
    color: "#666",
    paddingTop: "20px",
    borderTop: "1px solid #ccc",
  },
};

export default TelthTermsAndConditions;