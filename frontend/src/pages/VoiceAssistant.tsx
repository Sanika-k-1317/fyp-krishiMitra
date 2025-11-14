import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, MicOff, Volume2, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export default function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: "assistant", 
      text: "नमस्ते! मैं आपकी खेती में मदद के लिए यहां हूं। मुझसे कुछ भी पूछें।",
      textEn: "Hello! I'm here to help with your farming. Ask me anything."
    }
  ]);

  const toggleListening = () => {
    if (!isListening) {
      setIsListening(true);
      toast.info("Listening... Speak now");
      
      setTimeout(() => {
        setIsListening(false);
        const userMessage = "मुझे गेहूं के लिए खाद की सलाह चाहिए";
        setMessages(prev => [...prev, { 
          role: "user", 
          text: userMessage,
          textEn: "I need fertilizer advice for wheat"
        }]);
        
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            role: "assistant", 
            text: "गेहूं के लिए मिट्टी परीक्षण के आधार पर 120 किलो नाइट्रोजन, 60 किलो फास्फोरस, और 40 किलो पोटाश प्रति एकड़ की सिफारिश की जाती है।",
            textEn: "For wheat, based on soil testing, 120 kg Nitrogen, 60 kg Phosphorus, and 40 kg Potash per acre is recommended."
          }]);
        }, 1500);
      }, 3000);
    }
  };

  const playAudio = (text: string) => {
    toast.success("Playing audio response");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Voice Assistant</h1>
            <p className="text-muted-foreground text-lg">
              Speak in your language and get farming advice instantly
            </p>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Supported Languages</CardTitle>
              <CardDescription>You can speak in any of these languages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {["Hindi (हिंदी)", "English", "Marathi (मराठी)", "Telugu (తెలుగు)", "Gujarati (ગુજરાતી)", "Kannada (ಕನ್ನಡ)"].map((lang) => (
                  <span key={lang} className="px-3 py-1 rounded-full bg-primary/10 text-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6 min-h-[400px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Conversation
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`flex-1 p-4 rounded-lg ${
                    msg.role === "user" 
                      ? "bg-primary text-primary-foreground ml-12" 
                      : "bg-muted mr-12"
                  }`}>
                    <p className="font-medium mb-1">{msg.text}</p>
                    <p className="text-sm opacity-75">{msg.textEn}</p>
                    {msg.role === "assistant" && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mt-2 gap-2 h-8"
                        onClick={() => playAudio(msg.text)}
                      >
                        <Volume2 className="h-4 w-4" />
                        Play Audio
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center gap-6">
                <Button
                  size="lg"
                  onClick={toggleListening}
                  className={`h-32 w-32 rounded-full ${
                    isListening 
                      ? "bg-destructive hover:bg-destructive/90 animate-pulse" 
                      : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  {isListening ? (
                    <MicOff className="h-12 w-12" />
                  ) : (
                    <Mic className="h-12 w-12" />
                  )}
                </Button>
                
                <div className="text-center">
                  <p className="text-lg font-semibold mb-1">
                    {isListening ? "Listening..." : "Tap to Speak"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isListening 
                      ? "Speak now in your preferred language" 
                      : "Hold and speak your question"
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
