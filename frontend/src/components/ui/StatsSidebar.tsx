import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface StatsSidebarProps {
  totalProfiles: number;
  verifiedPercentage: number;
  pendingCount: number;
}

export const StatsSidebar = ({
  totalProfiles,
  verifiedPercentage,
  pendingCount,
}: StatsSidebarProps) => {
  return (
    <div className="space-y-6">
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-lg">Total Profiles</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-primary">{totalProfiles}</p>
        </CardContent>
      </Card>

      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-lg">Verified</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-success">{verifiedPercentage}%</span>
          </div>
          <Progress value={verifiedPercentage} className="h-2" />
          <p className="text-xs text-muted-foreground">
            {Math.round((totalProfiles * verifiedPercentage) / 100)} students verified
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-soft border-l-4 border-warning">
        <CardHeader>
          <CardTitle className="text-lg">Pending Review</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-warning">{pendingCount}</p>
          <p className="text-xs text-muted-foreground mt-2">Awaiting approval</p>
        </CardContent>
      </Card>
    </div>
  );
};
