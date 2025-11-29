import { Header } from "@/components/Header";
import { CarePayTab } from "@/components/tabs/CarePayTab";

const CarePay = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <CarePayTab />
      </main>
    </div>
  );
};

export default CarePay;
