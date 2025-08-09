"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@shared/ui/animated-modal";

export function AnimatedModalDemo() {
  return (
    <Modal open={true}>
      <ModalBody>
        <ModalContent>hello</ModalContent>
      </ModalBody>
    </Modal>
  );
}
