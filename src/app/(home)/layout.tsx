"use client";
import React from "react";

export default function HomeLayout({
  auth,
  children,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <>
      {auth}
      {children}
    </>
  );
}
