"use client";
import React from "react";

import HomeView from "@views/HomeView";
import { Modal, ModalBody, ModalContent } from "@shared/ui/animated-modal";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const handleClose = () => {
    window.location.href = "/";
  };
  return (
    <>
      <HomeView />
      <Modal open={true} onOpenChange={handleClose}>
        <ModalBody>
          <ModalContent>{children}</ModalContent>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AuthLayout;
