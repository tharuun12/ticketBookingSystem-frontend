"use client";

import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}
// passthrough component
export default function Providers({ children }: ProvidersProps) {
  return <>{children}</>;
}