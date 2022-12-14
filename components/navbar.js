import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function navbar() {
	return (
		<div className={styles.container}>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					<li className={styles.li}>
						<Link href="/">Home</Link>
					</li>
					<li className={styles.li}>
						<Link href="/projects">Projects</Link>
					</li>
					<li className={styles.li}>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
