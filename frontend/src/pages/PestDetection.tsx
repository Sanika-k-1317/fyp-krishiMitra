import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Upload, AlertCircle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import cropHealthImg from "@/assets/crop-health.jpg";

export default function PestDetection() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleImageUpload = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResult({
        disease: "Leaf Blight",
        confidence: 87,
        treatment: [
          "Remove and destroy infected leaves",
          "Apply copper-based fungicide",
          "Ensure proper drainage",
          "Avoid overhead irrigation"
        ]
      });
      toast.success("Analysis complete!");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Pest & Disease Detection</h1>
            <p className="text-muted-foreground text-lg">
              Upload or capture a photo of your crop leaves for instant disease identification
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Upload Image</CardTitle>
                <CardDescription>Take a clear photo of the affected leaf</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <img 
                    src={cropHealthImg}
                    alt="Crop leaf sample"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-sm text-muted-foreground mb-4">
                    Sample image loaded
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={handleImageUpload}
                  >
                    <Camera className="h-4 w-4" />
                    Take Photo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={handleImageUpload}
                  >
                    <Upload className="h-4 w-4" />
                    Upload
                  </Button>
                </div>

                <Button 
                  className="w-full" 
                  onClick={handleImageUpload}
                  disabled={analyzing}
                >
                  {analyzing ? "Analyzing..." : "Analyze Image"}
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {result ? (
                <>
                  <Card className="border-destructive/50 bg-destructive/5">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-destructive">
                        <AlertCircle className="h-5 w-5" />
                        Detection Result
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Identified Disease</div>
                          <div className="text-2xl font-bold">{result.disease}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">Confidence Level</div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary transition-all"
                                style={{ width: `${result.confidence}%` }}
                              />
                            </div>
                            <span className="font-semibold">{result.confidence}%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        Treatment Recommendations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-3">
                        {result.treatment.map((step: string, i: number) => (
                          <li key={i} className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                              {i + 1}
                            </span>
                            <span className="flex-1 pt-0.5">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="h-full flex items-center justify-center p-12">
                  <div className="text-center text-muted-foreground">
                    <Camera className="h-16 w-16 mx-auto mb-4 opacity-20" />
                    <p>Upload an image to see detection results</p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
