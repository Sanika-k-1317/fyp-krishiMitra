import { Header } from "@/components/Header";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Leaf, Cloud, Bug, TrendingUp, Mic, MessageSquare } from "lucide-react";
import farmHeroImg from "@/assets/farm-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${farmHeroImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              Smart Farming,
              <span className="block text-primary">Better Harvests</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              AI-powered crop advisory system designed for small and marginal farmers. 
              Get expert guidance in your language, anytime, anywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <MessageSquare className="h-5 w-5" />
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need for Smart Farming
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools and insights to help you make informed decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Leaf}
            title="Soil Health Advisory"
            description="Get personalized fertilizer recommendations based on your soil type and crop selection"
            href="/soil-health"
            variant="primary"
          />
          
          <FeatureCard
            icon={Cloud}
            title="Weather Alerts"
            description="Receive real-time weather updates and predictive insights for better farm planning"
            href="/weather"
            variant="accent"
          />
          
          <FeatureCard
            icon={Bug}
            title="Pest Detection"
            description="Upload crop images for instant pest and disease identification with treatment advice"
            href="/pest-detection"
            variant="secondary"
          />
          
          <FeatureCard
            icon={TrendingUp}
            title="Market Prices"
            description="Track daily mandi rates and get alerts on the best time to sell your produce"
            href="/market-prices"
          />
          
          <FeatureCard
            icon={Mic}
            title="Voice Assistant"
            description="Ask questions in your language and receive audio responses for easy understanding"
            href="/voice-assistant"
            variant="primary"
          />
          
          <FeatureCard
            icon={MessageSquare}
            title="Feedback & Support"
            description="Share your experience and help us improve our services for all farmers"
            href="/feedback"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-lg opacity-90">Active Farmers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">8</div>
              <div className="text-lg opacity-90">Languages Supported</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of farmers already benefiting from smart agricultural advisory
          </p>
          <Button size="lg" className="gap-2">
            <Mic className="h-5 w-5" />
            Try Voice Assistant
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">🌾</span>
                </div>
                <span className="font-bold text-lg">KrishiMitra</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering farmers with AI-driven agricultural insights
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Soil Health</li>
                <li>Weather Alerts</li>
                <li>Pest Detection</li>
                <li>Market Prices</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Training Videos</li>
                <li>FAQs</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Languages</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>हिंदी (Hindi)</li>
                <li>मराठी (Marathi)</li>
                <li>తెలుగు (Telugu)</li>
                <li>English</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 KrishiMitra. Made with ❤️ for Indian farmers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
