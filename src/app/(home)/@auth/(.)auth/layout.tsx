"use client";
import React from "react";
import { Modal, ModalBody, ModalContent } from "@shared/ui/animated-modal";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    // router.push("/", { scroll: false });
    window.location.href = "/";
  };

  return (
    <Modal open={open} onOpenChange={handleClose}>
      <ModalBody>
        <ModalContent>{children}</ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default LoginLayout;
