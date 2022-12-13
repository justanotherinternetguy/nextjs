import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function navbar() {
	return (
		<div className={styles.container}>
			<nav>
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>

				<style jsx>{`
					nav {
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 1rem;
					}
					ul {
						display: flex;
						list-style: none;
						margin: 0;
						padding: 0;
					}
					li {
						margin-right: 1rem;
					}
					a {
						color: #333;
						text-decoration: none;
					}
				`}</style>
			</nav>
		</div>
	);
}
