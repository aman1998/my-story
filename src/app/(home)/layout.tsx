"use client";
import React from "react";
import Link from "next/link";

export default function HomeLayout({
  auth,
  children,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <>
      <Link href="/auth/login">Login</Link>
      {auth}
      {children}
    </>
  );
}
