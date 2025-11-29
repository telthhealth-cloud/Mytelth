import { cn } from "@/lib/utils";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "community", label: "Care @ Community" },
  { id: "carehome", label: "Care @ Home" },
  { id: "personalized", label: "Personal Care" },
  { id: "carepay", label: "Telth Care Pay™", comingSoon: true },
];

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  const handleTabClick = (tabId: string, event: React.MouseEvent<HTMLButtonElement>) => {
    onTabChange(tabId);
    
    // Auto-scroll selected tab into view on mobile, showing next tab
    if (window.innerWidth < 768) {
      const button = event.currentTarget;
      button.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  };

  return (
    <div className="border-b border-medium-gray bg-background sticky top-16 md:top-20 z-40 shadow-sm">
      <div className="container">
        <div className="flex items-center gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={(e) => handleTabClick(tab.id, e)}
              className={cn(
                "px-8 py-4 text-base font-semibold transition-all duration-300 whitespace-nowrap relative",
                activeTab === tab.id
                  ? "text-primary"
                  : "text-dark-gray hover:text-primary"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
