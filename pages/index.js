import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
	SiNeovim,
	SiPython,
	SiJava,
	SiJavascript,
	SiCplusplus,
	SiNim,
	SiRust,
	SiPostgresql,
	SiArchlinux,
	SiGithub,
	SiNextdotjs,
	SiDiscord,
} from "react-icons/si";

export default function projects() {
	return (
		<div className={styles.container}>
			<Head>
				<title>react testing - jaig</title>
				<meta name="landing" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>justanotherinternetguy</h1>
				<div className={styles.icons}>
					<SiNeovim className={styles.icon} size={42} />
					<SiPython className={styles.icon} size={42} />
					<SiJava className={styles.icon} size={42} />
					<SiJavascript className={styles.icon} size={42} />
					<SiNextdotjs className={styles.icon} size={42} />
					<SiCplusplus className={styles.icon} size={42} />
					<SiNim className={styles.icon} size={42} />
					<SiRust className={styles.icon} size={42} />
					<SiPostgresql className={styles.icon} size={42} />
					<SiArchlinux className={styles.icon} size={42} />
				</div>

				<div className={styles.icons}>
					<Link
						className={styles.a}
						href="https://github.com/justanotherinternetguy"
						target="_blank"
					>
						<SiGithub className={styles.icon} size={42} />
					</Link>

					<Link className={styles.a} href="/">
						<SiDiscord className={styles.icon} size={42} />
					</Link>
				</div>

				<p className={styles.description}>
					student, software developer, linux nerd
				</p>

				<div className={styles.grid}>
					<Link href="/projects" className={styles.card}>
						<h2>~/Projects &rarr;</h2>
						<p>
							Take a look at what I&apos;ve done and what
							I&apos;ve made.
						</p>
					</Link>

					{/* <Link href="https://example.com" className={styles.card}>
						<h2>~/Experience &rarr;</h2>
						<p>
							My experience in using different tools and
							languages.
						</p>
					</Link> */}

					{/* <Link href="/blog" className={styles.card}>
						<h2>~/Blog &rarr;</h2>
						<p>Splish splash your opinion is trash.</p>
					</Link> */}

					{/* <Link
						href="https://example.com"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.card}
					>
						<h2>~/Contact &rarr;</h2>
						<p>Contact me!</p>
					</Link> */}
				</div>
			</main>
		</div>
	);
}
