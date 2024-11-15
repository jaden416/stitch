import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  component: WorkComponent,
});

function WorkComponent() {
  return (
    <div className="p-2">
      <h3>We working here</h3>
    </div>
  );
}
