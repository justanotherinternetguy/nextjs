import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function foss_alternatives() {
	return (
		<div className={styles.container}>
			<Head>
				<title>react testing - jaig</title>
				<meta name="landing" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>FOSS Alternatives</h1>
				<p className={styles.description}></p>

				<div className={styles.blog}>
					<h3 className={styles.subhead}>What is FOSS?</h3>

					<p className={styles.text}>
						FOSS (Free Open Source Software) is a category of
						software that is designed to be exactly what the name
						suggests. The principles of FOSS include:
					</p>

					<ul>
						<li>
							Free (Libre) - &quot;Free&quot; does not have to
							mean &quot;free of charge.&quot; Instead,
							&quot;free&quot; refers to the freedom that users
							have over the software. For example, many FOSS
							licenses give the user the freedom to view/modify
							the source code, essentially making their own
							&quot;spin-off&quot; of the application. Some FOSS
							licenses also allow the user to redistribute the
							modified software (of course, with some
							limitations.)
						</li>

						<li>
							Open Source - This simply means that the source code
							of an app (code that is written by the developer to
							create the application), is public for anyone to
							view. A lot of open source code is put up on GitHub,
							GitLab, or other alternatives. There are several
							benefits of open sourcing a piece of software,
							including improved code security, reliability, and
							transparency for the end user.
						</li>

						<li>
							There are other (and sometimes stricter) rules that
							are defined by the FSF (
							<Link
								className={styles.a}
								href="https://www.fsf.org/"
								target="_blank"
							>
								https://www.fsf.org/
							</Link>
							) on what is really &quot;libre&quot; software, and
							what is not, but we will ignore some of thosetighter
							restrictions. For the most part, we will define FOSS
							software as software where{" "}
							<i>
								anyone is freely able to copy, use, modify, and
								look at (the source code of) the software.
							</i>
						</li>
					</ul>

					<h3 className={styles.subhead}>
						Why should YOU switch to FOSS?
					</h3>
					<p className={styles.text}>
						It is very easy to just ignore FOSS and keep on using
						proprietary software (opposite of FOSS). While for an
						average computer user there isn&apos;t anything wrong
						with using proprietary software, using FOSS alternatives
						can bring a world of benefits to you and the developers.
						<br />
						Here are some benefits of switching to FOSS:
					</p>

					<ul>
						<li>
							<i>Transparency</i> - This is an important one.
							Because every line of code is publicy available, it
							will be impossible for developers to try and sneak
							in any malicious software that takes advantage of
							your computer (malware, spyware, ransomeware,
							cryptominers, etc.). This also makes implementing
							harmful and unreasonable telemetry (tracking of the
							user, usually for services like targeted ads)
							impossible. If a developer had the gall to add
							unwanted and/or malicious software into an open
							source project, it would be very quickly spotted and
							called out by software developers and auditors
							around the world.
						</li>

						<li>
							<i>Cross - Platform Support and Bugfixes</i> - Ever
							had an app exist &quot;only for Windows&quot; or
							&quot;only for MacOS?&quot; FOSS projects gives an
							user and/or other software developers the freedom
							and ability to <i>port</i> a piece of software from
							one operating system to another. Because the code is
							free to view and modify, it is very easy to change
							the code to fit another operating system.
							Furthermore, FOSS allows a user to recognize and
							report bugs in software. This means there will be
							many users from across the world, using different
							computers, all reporting issues to the developers.
							The developers will get a much more comprehensive
							view of the issues that might exist in the code. On
							top of this, users can contribute to the code and
							fix the bugs themselves.
						</li>

						<li>As a perfect segue in to this next point...</li>
						<li>
							<i>Reliability and Longevity</i> - Developers are
							human, after all. Sometimes, they get bored of a
							project and lose motivation to continue adding
							features and updating the code for new toolchains.
							If this happened to a proprietary app, it would
							probably just die out. The users of the app would be
							left stranded, forced to find an alternative.
							However, an open source project gives an opportunity
							for other developers to step in and continue the
							development of the software even if the original
							developer quits the project entirely. This means
							that software is much more likely to be kept alive
							and updated, giving users time to keep working on
							that software or comfortably transition in to using
							something else.
						</li>

						<li>
							There are many more benefits, just do a quick search
							online!
						</li>
					</ul>

					<h3 className={styles.subhead}>So... any suggestions?</h3>

					<ul>
						<li>Chrome/Edge/Safari ⮞ Firefox, Librewolf</li>
						<li>
							Microsoft Word/Excel/Powerpoint/etc... ⮞ LibreOffice
							Suite
						</li>
						<li>Code Editor/IDE ⮞ VSCodium, Neovim, Emacs</li>
						<li>Photoshop/Photo Editor ⮞ GIMP</li>
						<li>Adobe Illustrator ⮞ Inkscape</li>
						<li>Notes ⮞ Joplin, Logseq</li>
						<li>Microsoft Onenote ⮞ Xournal++</li>
						<li>Drawing/Art ⮞ Krita, Pinta</li>
						<li>Screen Recording/Streaming ⮞ OBS</li>
						<li>Video Editing ⮞ OpenShot, Kdenlive, Shotcut</li>
						<li>Password Manager ⮞ Bitwarden, KeePassXC</li>
						<li>Chatting ⮞ Matrix</li>
						<li>Operating System ⮞ ⭐ A Linux Distro ⭐</li>
					</ul>
				</div>
			</main>
		</div>
	);
}
