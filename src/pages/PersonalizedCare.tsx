import { Header } from "@/components/Header";
import { PersonalizedTab } from "@/components/tabs/PersonalizedTab";

const PersonalizedCare = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <PersonalizedTab />
      </main>
    </div>
  );
};

export default PersonalizedCare;
