import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function blog() {
	return (
		<div className={styles.container}>
			<Head>
				<title>react testing - jaig</title>
				<meta name="landing" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>My blog</h1>
				<p className={styles.description}>
					<i>New post once every blue moon!</i>
				</p>

				<div className={styles.grid}>
					<Link
						href="./posts/foss_alternatives"
						className={styles.card}
					>
						<h2>
							Open-Source alternatives that YOU can switch to!
						</h2>
					</Link>
				</div>
			</main>
		</div>
	);
}
