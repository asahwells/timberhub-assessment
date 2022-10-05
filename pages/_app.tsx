import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
import { ProductContextProvider } from "../src/components/Context";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ProductContextProvider>
			<Head>
				<title>TimberHub</title>
				<link rel="icon" type="image/png" href="/wood.ico" />
				<link
					rel="stylesheet"
					href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css"
				/>
			</Head>
			<Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></Script>
			<Component {...pageProps} />{" "}
		</ProductContextProvider>
	);
}

export default MyApp;
