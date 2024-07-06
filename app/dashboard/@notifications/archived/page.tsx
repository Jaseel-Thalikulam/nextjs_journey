import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

const archivedNotifications = () => {
  return (
    <Card>
      <div className="flex flex-col">

        <h2>Archived Notifications</h2>
      

      <Link href="/dashboard"> Default </Link>
       
      </div>
    </Card>
  );
};

export default archivedNotifications;
