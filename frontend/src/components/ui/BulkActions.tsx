import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import { toast } from "sonner";

interface BulkActionsProps {
  selectedCount: number;
  onBulkApprove: () => void;
}

export const BulkActions = ({ selectedCount, onBulkApprove }: BulkActionsProps) => {
  const handleBulkApprove = () => {
    onBulkApprove();
    toast.success(`Approved ${selectedCount} profiles`);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-card rounded-lg shadow-soft">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">
          {selectedCount} {selectedCount === 1 ? "student" : "students"} selected
        </span>
      </div>
      <Button
        onClick={handleBulkApprove}
        disabled={selectedCount === 0}
        className="gap-2"
      >
        <CheckCheck className="h-4 w-4" />
        Bulk Approve
      </Button>
    </div>
  );
};
