import React from "react";
import { getVersion } from '@/helpers/utils'
import { AppVersion } from "@/components/_styled/AppVersion";

const Version = () => {
  const version = getVersion()
  return <AppVersion>v{version}</AppVersion>;
};

export default Version;
