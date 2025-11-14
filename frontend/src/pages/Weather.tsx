import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, CloudRain, Sun, Wind, Droplets, AlertTriangle } from "lucide-react";

export default function Weather() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Weather Dashboard</h1>
            <p className="text-muted-foreground text-lg">
              Real-time weather updates and agricultural alerts for your region
            </p>
          </div>

          <div className="grid gap-6 mb-6">
            <Card className="bg-accent/10 border-accent">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">Today's Weather</CardTitle>
                    <CardDescription className="text-base">Pune, Maharashtra</CardDescription>
                  </div>
                  <Sun className="h-12 w-12 text-harvest-gold" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold">28°C</span>
                  <span className="text-muted-foreground">Feels like 30°C</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-weather-blue" />
                    <div>
                      <div className="text-sm text-muted-foreground">Humidity</div>
                      <div className="font-semibold">65%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">Wind</div>
                      <div className="font-semibold">12 km/h</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CloudRain className="h-4 w-4 text-weather-blue" />
                    <div>
                      <div className="text-sm text-muted-foreground">Rain</div>
                      <div className="font-semibold">20%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-destructive bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="h-5 w-5" />
                  Active Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                  <CloudRain className="h-5 w-5 text-weather-blue mt-0.5" />
                  <div className="flex-1">
                    <div className="font-semibold">Heavy Rainfall Expected</div>
                    <p className="text-sm text-muted-foreground">
                      Moderate to heavy rain expected tomorrow. Delay pesticide application.
                    </p>
                    <Badge variant="outline" className="mt-2">Tomorrow, 10 AM - 6 PM</Badge>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                  <Wind className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div className="flex-1">
                    <div className="font-semibold">High Wind Alert</div>
                    <p className="text-sm text-muted-foreground">
                      Strong winds (25-30 km/h) may affect young plants. Provide support.
                    </p>
                    <Badge variant="outline" className="mt-2">Today, 3 PM - 7 PM</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>7-Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                {[
                  { day: "Mon", icon: Sun, temp: "32°C", rain: "10%" },
                  { day: "Tue", icon: CloudRain, temp: "28°C", rain: "80%" },
                  { day: "Wed", icon: Cloud, temp: "27°C", rain: "40%" },
                  { day: "Thu", icon: Sun, temp: "31°C", rain: "5%" },
                  { day: "Fri", icon: Sun, temp: "33°C", rain: "0%" },
                  { day: "Sat", icon: Cloud, temp: "30°C", rain: "20%" },
                  { day: "Sun", icon: Sun, temp: "32°C", rain: "10%" },
                ].map((forecast, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
                    <div className="font-semibold">{forecast.day}</div>
                    <forecast.icon className="h-8 w-8 text-primary" />
                    <div className="text-lg font-bold">{forecast.temp}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Droplets className="h-3 w-3" />
                      {forecast.rain}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
