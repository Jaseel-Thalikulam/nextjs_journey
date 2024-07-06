import React, { ReactNode } from "react";
/**
 # Parallel routing
  * This is an example for parallel routing
  * main feature of this parallel routing is sub-navigation
  * parallel routing may lead to unmatched which give 404 on page refresh.To prevent this we need to add default.tsx for each pages that didn't have a parallel path in that layout.
 
 # Template
  * Alternative for layout.
  * The difference between layout and template is that the layout preserves state values even when its children change, but the template does not preserve its state.
  */
const DashboardLayout = ({
  children,
  notifications,
  paymentanalysis,
  useranalysis,
}: {
  children: ReactNode;
  notifications: ReactNode;
  paymentanalysis: ReactNode;
  useranalysis: ReactNode;
}) => {
  return (
    <>
      <div>{children}</div>
      <div className="flex gap-5 ml-5 mt-5">
        <div className="flex flex-col space-y-5 h-64 ">
          <div className="flex-1">{paymentanalysis}</div>
          <div className="flex-1">{useranalysis}</div>
        </div>
        <div className="flex flex-col space-y-10">
          <div className="flex-1">{notifications}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;