import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How quickly can a Care Manager reach me?",
    answer:
      "Our Care Managers typically arrive within 2-4 hours of booking for standard appointments. For urgent care requests, we offer a 24/7 emergency response service with arrival within 2 hours. You can schedule appointments via our app, website, or by calling our dedicated hotline.",
  },
  {
    question: "What equipment do Care Managers bring?",
    answer:
      "Care Managers arrive fully equipped with portable diagnostic devices including the Telth HES Pro Plus (51-parameter testing), vital signs monitors, ECG equipment, blood analysis tools, and connectivity equipment to sync all data in real-time with your health records on RootCloud™ EHR.",
  },
  {
    question: "Can I use health insurance?",
    answer:
      "Yes, we work with major health insurance providers across India. We also offer flexible payment plans and accept various payment methods. Our Care Pay solution helps optimize coverage and ensures transparent pricing. Contact us to verify your specific insurance coverage.",
  },
  {
    question: "How does the 15-minute care cycle work?",
    answer:
      "The 15-minute care cycle includes: (1) Initial assessment and vital signs collection (5 mins), (2) Comprehensive diagnostic testing using our portable equipment (7 mins), (3) Real-time AI analysis and Care Manager consultation (3 mins). The results are instantly available in your health records, and treatment plans are initiated immediately.",
  },
  {
    question: "What if I need specialist care?",
    answer:
      "Your Care Manager coordinates with any specialist you choose—locally, nationally, or internationally. We facilitate virtual consultations, manage referrals, handle local logistics like sample collection and medication delivery, and ensure all specialists have access to your unified health records on RootCloud™ EHR.",
  },
  {
    question: "How are Care Managers trained?",
    answer:
      "All Care Managers undergo rigorous training in clinical assessment, emergency response, diagnostic equipment operation, and care coordination. They are certified healthcare professionals (nurses, paramedics, or equivalent) with additional specialized training in home healthcare, patient advocacy, and our technology platforms.",
  },
  {
    question: "Is my health data secure?",
    answer:
      "Absolutely. All health data is stored on RootCloud™ EHR, which uses blockchain technology for immutable record-keeping and military-grade encryption. Your data is HIPAA-compliant and follows international healthcare data protection standards. You maintain complete control over who can access your records.",
  },
  {
    question: "Can I cancel my care plan?",
    answer:
      "Yes, all our care plans are flexible with no long-term lock-in contracts. You can upgrade, downgrade, or cancel your plan at any time with 30 days' notice. We believe in earning your trust through service quality, not contractual obligations.",
  },
  {
    question: "Will my Care Manager speak my language?",
    answer:
      "Yes! We match you with Care Managers who speak your preferred language. Our team is multilingual and includes speakers of Hindi, English, Tamil, Telugu, Bengali, Marathi, Kannada, and other regional languages across India.",
  },
  {
    question: "What happens in emergencies?",
    answer:
      "Press the one-touch SOS button in our app for immediate Care Manager response. They'll coordinate emergency services, notify your designated family contacts, transmit your medical history to emergency responders, and provide real-time guidance until help arrives. Your Care Manager stays connected throughout the emergency.",
  },
  {
    question: "Can family members use the same Care Manager?",
    answer:
      "Yes, we offer family care plans where one Care Manager serves multiple family members. This ensures continuity of care, better understanding of family health history, and more efficient coordination. Family plans offer significant cost savings compared to individual plans.",
  },
  {
    question: "How does remote monitoring work?",
    answer:
      "Your Care Manager provides you with IoMT devices (smart wearables and home diagnostic kits) that continuously monitor your vitals, activity, and health metrics. All data syncs automatically to RootCloud™ EHR where your Care Manager reviews it daily. They'll proactively reach out if any concerning trends are detected.",
  },
];

export const CareHomeFAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-purple-50/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center">
            <HelpCircle className="h-5 w-5 text-white" strokeWidth={2} />
          </div>
        </div>
        <h2 className="text-4xl font-bold text-center mb-3 bg-gradient-to-r from-telth-teal to-telth-purple bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Get answers to common questions about our Care@Home service
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border border-border/50 hover:border-telth-purple/50 transition-all duration-300 data-[state=open]:border-telth-purple data-[state=open]:bg-gradient-to-br data-[state=open]:from-telth-teal/5 data-[state=open]:to-telth-purple/5"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-telth-teal to-telth-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-9 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
