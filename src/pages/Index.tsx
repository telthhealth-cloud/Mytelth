import { Header } from "@/components/Header";
import { CommunityTab } from "@/components/tabs/CommunityTab";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <CommunityTab />
      </main>
    </div>
  );
};

export default Index;
