import WellbeingDashboard from "@/components/WellbeingDashboard";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Student Wellbeing Hub - Mental Health Support & Tools";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Comprehensive student wellbeing platform with AI chatbot, meditation, breathing exercises, study tools, and mental health support designed for academic success."
      );
    }
  }, []);

  return (
    <main>
      <WellbeingDashboard />
    </main>
  );
};

export default Index;