import { useState } from "react";
import { 
  Brain, 
  Wind, 
  Flower, 
  Clock, 
  TreePine, 
  BookOpen,
  Gamepad2
} from "lucide-react";
import ChatInterface from "./ChatInterface";
import FeatureCard from "./FeatureCard";

const WellbeingDashboard = () => {
  const [isChatExpanded, setIsChatExpanded] = useState(false);

  const features = [
    {
      title: "Relaxing Game",
      icon: Gamepad2,
      color: "hsl(var(--accent-games))",
      onClick: () => console.log("Opening relaxing game..."),
    },
    {
      title: "Guided Breathing",
      icon: Wind,
      color: "hsl(var(--accent-breathing))",
      onClick: () => console.log("Starting guided breathing..."),
    },
    {
      title: "Meditation",
      icon: Flower,
      color: "hsl(var(--accent-meditation))",
      onClick: () => console.log("Opening meditation..."),
    },
    {
      title: "Pomodoro Study",
      icon: Clock,
      color: "hsl(var(--accent-study))",
      onClick: () => console.log("Starting study timer..."),
    },
    {
      title: "Go for a Walk",
      icon: TreePine,
      color: "hsl(var(--accent-exercise))",
      onClick: () => console.log("Walk suggestion..."),
    },
    {
      title: "Daily Highlight",
      icon: BookOpen,
      color: "hsl(var(--accent-journal))",
      onClick: () => console.log("Opening journal..."),
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      {/* Chat Interface */}
      <div className={isChatExpanded ? "chat-fullscreen" : "chat-top"}>
        <ChatInterface
          isExpanded={isChatExpanded}
          onToggle={() => setIsChatExpanded(!isChatExpanded)}
        />
        
        {/* Feature boxes when chat is expanded */}
        {isChatExpanded && (
          <div className="features-horizontal bg-background/95 backdrop-blur-sm border-t border-border">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                icon={feature.icon}
                color={feature.color}
                onClick={feature.onClick}
                isCompact={true}
              />
            ))}
          </div>
        )}
      </div>

      {/* Main Content - only show when chat is not expanded */}
      {!isChatExpanded && (
        <div className="px-8 pt-32 pb-16 transition-all duration-500">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Your Wellbeing Dashboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take care of your mental health with our supportive tools designed specifically for students.
          </p>
        </div>

          {/* Feature Grid Layout */}
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                icon={feature.icon}
                color={feature.color}
                onClick={feature.onClick}
                isCompact={false}
              />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Click on any feature to get started, or chat with our AI assistant for personalized support.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WellbeingDashboard;