import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X, ChevronUp, ChevronDown } from "lucide-react";
import { toast } from "sonner";

export interface Student {
  id: string;
  name: string;
  completeness: number;
  sisStatus: "verified" | "pending";
}

interface StudentTableProps {
  students: Student[];
  selectedIds: string[];
  onSelectStudent: (id: string) => void;
  onSelectAll: (checked: boolean) => void;
}

type SortField = "name" | "completeness";
type SortDirection = "asc" | "desc";

export const StudentTable = ({
  students,
  selectedIds,
  onSelectStudent,
  onSelectAll,
}: StudentTableProps) => {
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedStudents = [...students].sort((a, b) => {
    let comparison = 0;
    if (sortField === "name") {
      comparison = a.name.localeCompare(b.name);
    } else {
      comparison = a.completeness - b.completeness;
    }
    return sortDirection === "asc" ? comparison : -comparison;
  });

  const handleApprove = (studentName: string) => {
    toast.success(`Approved ${studentName}'s profile`);
  };

  const handleReject = (studentName: string) => {
    toast.error(`Rejected ${studentName}'s profile`);
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDirection === "asc" ? (
      <ChevronUp className="h-4 w-4 ml-1 inline" />
    ) : (
      <ChevronDown className="h-4 w-4 ml-1 inline" />
    );
  };

  return (
    <div className="rounded-lg border bg-card shadow-soft overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                checked={selectedIds.length === students.length}
                onCheckedChange={onSelectAll}
              />
            </TableHead>
            <TableHead
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => handleSort("name")}
            >
              Student Name <SortIcon field="name" />
            </TableHead>
            <TableHead
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => handleSort("completeness")}
            >
              Profile Completeness <SortIcon field="completeness" />
            </TableHead>
            <TableHead>SIS Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedStudents.map((student) => (
            <TableRow key={student.id}>
              <TableCell>
                <Checkbox
                  checked={selectedIds.includes(student.id)}
                  onCheckedChange={() => onSelectStudent(student.id)}
                />
              </TableCell>
              <TableCell className="font-medium">{student.name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Progress value={student.completeness} className="w-24 h-2" />
                  <span className="text-sm font-medium">{student.completeness}%</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={student.sisStatus === "verified" ? "default" : "secondary"}
                  className={
                    student.sisStatus === "verified"
                      ? "bg-success text-success-foreground"
                      : "bg-warning text-warning-foreground"
                  }
                >
                  {student.sisStatus === "verified" ? "Verified" : "Pending"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1"
                    onClick={() => handleApprove(student.name)}
                  >
                    <Check className="h-4 w-4 text-success" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1"
                    onClick={() => handleReject(student.name)}
                  >
                    <X className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
