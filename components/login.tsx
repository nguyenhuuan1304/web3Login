"use client";

import { ConnectButton, lightTheme } from "thirdweb/react";
import { chain, client } from "../utils/constants";

const customTheme = lightTheme({
  colors: {
    modalBg: "black",
    primaryText: "white",
    tooltipBg: "red",
    accentButtonBg: "red",
    accentButtonText: "red",
    primaryButtonBg: "red",
    primaryButtonText: "black",
  },
});

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <ConnectButton
        client={client}
        chain={chain}
        // connectModal={{ size: "compact" }}
        // theme={customTheme}
      />
    </div>
  );
};

export default Login;
