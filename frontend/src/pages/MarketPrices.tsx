import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, MapPin } from "lucide-react";

const priceData = [
  { 
    crop: "Wheat (गेहूं)", 
    price: "₹2,450", 
    change: "+5.2%", 
    trend: "up",
    market: "Pune APMC",
    avg7day: "₹2,380"
  },
  { 
    crop: "Rice (धान)", 
    price: "₹3,120", 
    change: "-2.1%", 
    trend: "down",
    market: "Mumbai APMC",
    avg7day: "₹3,190"
  },
  { 
    crop: "Cotton (कपास)", 
    price: "₹7,800", 
    change: "+8.5%", 
    trend: "up",
    market: "Nagpur APMC",
    avg7day: "₹7,200"
  },
  { 
    crop: "Sugarcane (गन्ना)", 
    price: "₹380", 
    change: "+1.8%", 
    trend: "up",
    market: "Kolhapur APMC",
    avg7day: "₹373"
  },
  { 
    crop: "Maize (मक्का)", 
    price: "₹1,890", 
    change: "-0.5%", 
    trend: "down",
    market: "Pune APMC",
    avg7day: "₹1,900"
  },
  { 
    crop: "Onion (प्याज)", 
    price: "₹2,100", 
    change: "+12.3%", 
    trend: "up",
    market: "Lasalgaon",
    avg7day: "₹1,870"
  },
];

export default function MarketPrices() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Market Prices</h1>
            <p className="text-muted-foreground text-lg">
              Real-time mandi rates and price trends from major agricultural markets
            </p>
          </div>

          <Card className="mb-6 bg-harvest-gold/10 border-harvest-gold/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-harvest-gold" />
                Best Selling Opportunity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">Cotton (कपास)</div>
                  <p className="text-muted-foreground">Price 8.5% above 7-day average</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-harvest-gold">₹7,800</div>
                  <p className="text-sm text-muted-foreground">per quintal</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            {priceData.map((item, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{item.crop}</h3>
                        <Badge 
                          variant={item.trend === "up" ? "default" : "secondary"}
                          className="gap-1"
                        >
                          {item.trend === "up" ? (
                            <TrendingUp className="h-3 w-3" />
                          ) : (
                            <TrendingDown className="h-3 w-3" />
                          )}
                          {item.change}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {item.market}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary">{item.price}</div>
                      <div className="text-sm text-muted-foreground">per quintal</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        7-day avg: {item.avg7day}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Price Analysis Tips</CardTitle>
              <CardDescription>Maximize your profit with smart timing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-sm">
                  Sell when prices are 10% or more above the 7-day average for better returns
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-sm">
                  Check multiple nearby mandis to compare rates before transport
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-sm">
                  Weekend prices may differ - plan your selling schedule accordingly
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
