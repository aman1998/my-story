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
    <Modal>
      <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
        open
      </ModalTrigger>
      <ModalBody>
        <ModalContent>hello</ModalContent>
      </ModalBody>
    </Modal>
  );
}
