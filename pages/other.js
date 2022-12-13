import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function other() {
	return (
		<div className={styles.container}>
			<Head>
				<title>react testing - jaig</title>
				<meta name="landing" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>other</h1>

				<p className={styles.description}>idk</p>
			</main>
		</div>
	);
}
