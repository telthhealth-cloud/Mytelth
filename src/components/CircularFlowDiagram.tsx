export const CircularFlowDiagram = () => {
  const stages = [
    {
      number: "1",
      title: "PREVENTION",
      items: ["Annual health screening", "Risk assessment", "Genetic screening", "Lifestyle counseling", "Vaccination programs"],
    },
    {
      number: "2",
      title: "EARLY DETECTION",
      items: ["90+ parameter diagnostics", "AI-powered analysis", "20-year health prediction", "Symptom monitoring", "Regular checkups"],
    },
    {
      number: "3",
      title: "PRIMARY CARE",
      items: ["Acute illness treatment", "Chronic disease management", "Medication management", "Specialist referrals when needed", "Mental health support"],
    },
    {
      number: "4",
      title: "SPECIALIST CARE",
      items: ["Telemedicine consultations", "Referral to Telth network specialists", "Global expert access (USA/UK/India)", "Complex diagnosis support", "Second opinion services"],
    },
    {
      number: "5",
      title: "CONTINUOUS MONITORING",
      items: ["IoMT device tracking", "Care@Home integration", "Medication adherence", "Health parameter trends", "AI-powered alerts"],
    },
    {
      number: "6",
      title: "CARE PLANS & SUBSCRIPTIONS",
      items: ["Personalized health plans", "Preventive care protocols", "Chronic disease management plans", "Family coverage options", "Global network access"],
    },
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto py-16">
      {/* Animated Circular Path */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800">
        {/* Circle Path */}
        <circle
          cx="400"
          cy="400"
          r="280"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeDasharray="8 8"
          opacity="0.3"
        />
        
        {/* Animated Dot moving along path */}
        <circle
          cx="400"
          cy="120"
          r="8"
          fill="hsl(var(--primary))"
          className="animate-flow-dot"
        >
          <animateMotion
            dur="20s"
            repeatCount="indefinite"
            path="M 400 120 A 280 280 0 1 1 399 120 Z"
          />
        </circle>

        {/* Arrow markers at intervals */}
        <g className="animate-pulse">
          <path
            d="M 400 130 L 405 140 L 395 140 Z"
            fill="hsl(var(--primary))"
            opacity="0.6"
          />
        </g>
      </svg>

      {/* Stage Cards arranged in circle */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stages.map((stage, index) => (
          <div
            key={index}
            className="bg-card border rounded-xl p-6 hover-lift"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                {stage.number}
              </div>
              <h3 className="font-bold text-lg">{stage.title}</h3>
            </div>
            <ul className="space-y-1.5">
              {stage.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary text-xs mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Center Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center hidden lg:block">
        <div className="bg-background/95 backdrop-blur-sm border-2 border-primary rounded-full w-64 h-64 flex flex-col items-center justify-center p-6">
          <p className="text-2xl font-bold text-primary mb-2">Continuous</p>
          <p className="text-lg font-semibold">Care Cycle</p>
          <p className="text-sm text-muted-foreground mt-2">Lifelong Wellness Journey</p>
        </div>
      </div>
    </div>
  );
};
