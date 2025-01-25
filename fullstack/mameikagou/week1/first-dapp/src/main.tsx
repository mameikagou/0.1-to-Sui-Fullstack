import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { networkConfig } from "./networkConfig.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
			<WalletProvider autoConnect>
				<App />
			</WalletProvider>
		</SuiClientProvider>
	</React.StrictMode>
);
