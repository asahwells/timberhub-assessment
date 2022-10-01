import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css"
				/>
			</Head>
			<Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></Script>
			<Component {...pageProps} />{" "}
		</>
	);
}

export default MyApp;
