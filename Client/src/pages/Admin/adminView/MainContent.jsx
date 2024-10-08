import React from "react";
import DashboardCard from "./DashboardCard";

const MainContent = () => {
  return (
    <main className="ml-64 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard title="Card 1" content="This is the first card." />
        <DashboardCard title="Card 2" content="This is the second card." />
        <DashboardCard title="Card 3" content="This is the third card." />
      </div>
    </main>
  );
};

export default MainContent;
