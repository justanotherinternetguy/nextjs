import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { SiDiscord } from "react-icons/si";

export default function projects() {
	return (
		<div className={styles.container}>
			<Head>
				<title>react testing - jaig</title>
				<meta name="landing" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>My projects</h1>
				<p className={styles.description}>
					<i>
						I have a bad habit of starting projects and not
						finishing them...
					</i>
				</p>

				<div className={styles.grid}>
					<Link
						href="https://github.com/justanotherinternetguy/nextjs"
						className={styles.card}
						target="_blank"
					>
						<h2>This website &rarr;</h2>
						<p>
							Re-coding my website has always been my go-to
							technique of learning a new webdev tool. Right now,
							I&apos;m using Next.JS and React.JS.
						</p>
					</Link>

					<Link
						href="https://github.com/SaazM/8405FTC"
						className={styles.card}
						target="_blank"
					>
						<h2>8405 Millburn Robotics &rarr;</h2>
						<p>
							This is the codebase for my high school robotics
							team.
						</p>
					</Link>

					<Link
						href="https://github.com/justanotherinternetguy/CS-Resources"
						className={styles.card}
						target="_blank"
					>
						<h2>Competitive Programming &rarr;</h2>
						<p>
							I&apos;ve been getting into Competitive Programming
							recently, this is my collection of solutions and
							snippets.
						</p>
					</Link>

					<Link
						href="https://github.com/justanotherinternetguy/AI-ML"
						className={styles.card}
						target="_blank"
					>
						<h2>AI/Machine Learning &rarr;</h2>
						<p>
							My central repository for all my machine learning
							testing. I&apos;ve used tensorflow, pytorch, and
							pandas in the past.
						</p>
					</Link>

					<Link
						href="https://github.com/justanotherinternetguy/DriftBot"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.card}
					>
						<h2>DriftBot &rarr;</h2>
						<p>
							Discord bot for general utility, moderation, and
							fun.
						</p>
					</Link>
				</div>
			</main>
		</div>
	);
}
