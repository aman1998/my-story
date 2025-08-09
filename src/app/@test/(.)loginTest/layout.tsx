"use client";
import React from "react";
import { Dialog, DialogContent } from "@shared/ui/dialog";
import { useRouter } from "next/navigation";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(true);
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    router.back();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default LoginLayout;
