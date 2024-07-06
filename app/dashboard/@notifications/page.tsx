import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

const notifications = () => {
  return (
    <Card>
      <div className="flex flex-col">

      <h2>Default Notifications</h2>
      <Link href="/dashboard/archived"> Archived </Link>
      </div>
    </Card>
  );
};

export default notifications;
