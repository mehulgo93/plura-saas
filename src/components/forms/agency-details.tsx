"use client";

import { Agency } from "@prisma/client";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
  data?: Partial<Agency>;
};

const AgencyDetails = ({ data }: Props) => {
  const { toast } = useToast();
  const router = useRouter();
  const [deleteAgency, setDeleteAgency] = useState(false);
  return <div>AgencyDetails</div>;
};

export default AgencyDetails;
