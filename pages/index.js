import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>react testing - jaig</title>
				<meta name="landing" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>justanotherinternetguy</h1>

				<p className={styles.description}>
					student, software developer, linux nerd
				</p>

				<p className={styles.description}>
					<Link href="other">hi</Link>
				</p>

				<div className={styles.grid}>
					<a href="https://example.com" className={styles.card}>
						<h2>Projects &rarr;</h2>
						<p></p>
					</a>

					<a href="https://example.com" className={styles.card}>
						<h2>Experience &rarr;</h2>
					</a>

					<a href="https://example.com" className={styles.card}>
						<h2>Blog &rarr;</h2>
					</a>

					<a
						href="https://example.com"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.card}
					>
						<h2>Contact &rarr;</h2>
					</a>
				</div>
			</main>
		</div>
	);
}
