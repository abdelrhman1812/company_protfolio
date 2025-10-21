import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";
import LoadingSpinner from "../loading";

interface DeleteDialogProps<T> {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  nameKey: keyof T;
  selectedItem: T;
  onDelete: (selectedItem: T) => void;
  isLoading?: boolean;
}

export const DeleteDialog = <T,>({
  isOpen,
  setIsOpen,
  nameKey,
  onDelete,
  selectedItem,
  isLoading = false,
}: DeleteDialogProps<T>) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete {selectedItem[nameKey] as string}?</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogDescription>
          This action cannot be undone. This will permanently delete{" "}
          <span className="font-bold">{selectedItem[nameKey] as string}</span>.
        </DialogDescription>
        <DialogFooter>
          <Button
            disabled={isLoading}
            className="bg-red-500 hover:bg-red-700"
            onClick={() => {
              onDelete(selectedItem);
            }}
          >
            {isLoading ? <LoadingSpinner /> : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
