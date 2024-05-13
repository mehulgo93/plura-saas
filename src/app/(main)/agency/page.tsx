import { getAuthUserDetails, verifyAndAcceptInvitation } from "@/lib/queries";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const authUser = await currentUser();
  if (!authUser) {
    return redirect("/sign-in");
  }

  const agencyId = await verifyAndAcceptInvitation();
  // get users details
  // route them to agency or subaccounts

  const user = await getAuthUserDetails();
  return <div>Agency</div>;
};

export default page;
