import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Leaf, MapPin, Beaker } from "lucide-react";
import { toast } from "sonner";

export default function SoilHealth() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Soil health analysis complete! Check recommendations below.");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Soil Health Advisory</h1>
            <p className="text-muted-foreground text-lg">
              Get personalized fertilizer recommendations based on your soil and crop type
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location & Crop Details
                </CardTitle>
                <CardDescription>Enter your farm information</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Your Location</Label>
                    <Input id="location" placeholder="Village/District" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="crop">Crop Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select crop" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wheat">Wheat (गेहूं)</SelectItem>
                        <SelectItem value="rice">Rice (धान)</SelectItem>
                        <SelectItem value="cotton">Cotton (कपास)</SelectItem>
                        <SelectItem value="sugarcane">Sugarcane (गन्ना)</SelectItem>
                        <SelectItem value="maize">Maize (मक्का)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="area">Farm Area (acres)</Label>
                    <Input id="area" type="number" placeholder="5" />
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Analyzing..." : "Get Recommendations"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-primary/20 bg-leaf-light/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    NPK Recommendation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Nitrogen (N)</span>
                    <span className="font-semibold text-lg">120 kg/acre</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Phosphorus (P)</span>
                    <span className="font-semibold text-lg">60 kg/acre</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Potassium (K)</span>
                    <span className="font-semibold text-lg">40 kg/acre</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Beaker className="h-5 w-5 text-soil-brown" />
                    Application Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex gap-3">
                      <div className="font-semibold min-w-24">Base dose:</div>
                      <div>Apply 50% N + full P + full K at sowing</div>
                    </div>
                    <div className="flex gap-3">
                      <div className="font-semibold min-w-24">First top:</div>
                      <div>25% N after 30 days</div>
                    </div>
                    <div className="flex gap-3">
                      <div className="font-semibold min-w-24">Second top:</div>
                      <div>25% N after 60 days</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
