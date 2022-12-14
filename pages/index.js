import Head from "next/head";
import styles from "../styles/Home.module.css";
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
					<a
						className={styles.a}
						href="https://github.com/justanotherinternetguy"
					>
						<SiGithub className={styles.icon} size={42} />
					</a>

					<a
						className={styles.a}
						href="https://github.com/justanotherinternetguy"
					>
						<SiDiscord className={styles.icon} size={42} />
					</a>
				</div>

				<p className={styles.description}>
					student, software developer, linux nerd
				</p>

				<div className={styles.grid}>
					<a href="/projects" className={styles.card}>
						<h2>Projects &rarr;</h2>
						<p>Take a look at what I've done and what I've made.</p>
					</a>

					<a href="https://example.com" className={styles.card}>
						<h2>Experience &rarr;</h2>
						<p>
							My experience in using different tools and
							languages.
						</p>
					</a>

					<a href="https://example.com" className={styles.card}>
						<h2>Blog &rarr;</h2>
						<p>Splish splash your opinion is trash.</p>
					</a>

					<a
						href="https://example.com"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.card}
					>
						<h2>Contact &rarr;</h2>
						<p>Contact me!</p>
					</a>
				</div>
			</main>
		</div>
	);
}
