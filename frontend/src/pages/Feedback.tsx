import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Star, Send } from "lucide-react";
import { toast } from "sonner";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thank you for your feedback! We'll use it to improve our services.");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Feedback & Support</h1>
            <p className="text-muted-foreground text-lg">
              Your feedback helps us serve farmers better
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Share Your Experience</CardTitle>
              <CardDescription>
                Tell us about your experience using KrishiMitra
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label>Overall Rating</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="transition-all hover:scale-110"
                      >
                        <Star
                          className={`h-8 w-8 ${
                            star <= rating
                              ? "fill-harvest-gold text-harvest-gold"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>

                <div className="space-y-2">
                  <Label>Which feature did you use?</Label>
                  <RadioGroup defaultValue="soil">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="soil" id="soil" />
                      <Label htmlFor="soil" className="font-normal">Soil Health Advisory</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weather" id="weather" />
                      <Label htmlFor="weather" className="font-normal">Weather Alerts</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pest" id="pest" />
                      <Label htmlFor="pest" className="font-normal">Pest Detection</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="market" id="market" />
                      <Label htmlFor="market" className="font-normal">Market Prices</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="voice" id="voice" />
                      <Label htmlFor="voice" className="font-normal">Voice Assistant</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Tell us about your experience, suggestions for improvement, or any issues you faced..."
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full gap-2" disabled={loading}>
                  <Send className="h-4 w-4" />
                  {loading ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Need immediate help?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="font-medium">Helpline</span>
                <span className="text-primary font-semibold">1800-XXX-XXXX</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="font-medium">Email</span>
                <span className="text-primary font-semibold">support@krishimitra.in</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                <span className="font-medium">WhatsApp</span>
                <span className="text-primary font-semibold">+91 XXXXX XXXXX</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
