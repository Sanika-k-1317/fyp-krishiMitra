import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  variant?: "default" | "primary" | "secondary" | "accent";
}

export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  href,
  variant = "default" 
}: FeatureCardProps) => {
  const variantStyles = {
    default: "hover:border-primary/50",
    primary: "border-primary/20 bg-crop-green/5 hover:border-primary/50",
    secondary: "border-secondary/20 bg-soil-brown/5 hover:border-secondary/50",
    accent: "border-accent/20 bg-weather-blue/5 hover:border-accent/50",
  };

  return (
    <Link to={href}>
      <Card className={`h-full transition-all hover:shadow-lg cursor-pointer ${variantStyles[variant]}`}>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
          <Button variant="link" className="mt-3 p-0 h-auto text-primary">
            Learn more →
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};
