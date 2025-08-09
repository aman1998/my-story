"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@shared/ui/dialog";
import { RedirectType, useRouter } from "next/navigation";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(true);

  const router = useRouter();
  const handleClose = () => {
    setOpen(false);
    router.push("/", { scroll: false });
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Auth</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default LoginLayout;
