import React from "react";
import { Stepper } from "./components/Stepper";
import { SubmitterIdentityCard } from "./components/SubmitterIdentityCard";
import { SubmitGrievanceHeader } from "./components/TopHeader";

export default function SubmitGrievancePage() {
  return (
    <div className="flex flex-col gap-6 font-sans pb-2">
      {/* Page Header */}
      <SubmitGrievanceHeader />

      {/* Stepper */}
      <Stepper />

      {/* Main Content Area */}
      <div className="space-y-6">
        <SubmitterIdentityCard />
      </div>
    </div>
  );
}
