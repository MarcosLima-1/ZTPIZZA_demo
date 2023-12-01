'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import React, { useState } from 'react';

import styles from '../Styles/Layout/Header.module.css';

export default function Header() {
	const { data: session } = useSession();
	const [menuVisible, setMenuVisible] = useState(false);

	const toggleDiv = () => {
		setMenuVisible(!menuVisible);
	};

	const menuClasses = menuVisible
		? `${styles.menu_bar_nav} ${styles.flex}`
		: `${styles.menu_bar_nav}`;
	return (
		<header>
			<div className={styles.header_container}>
				<Link
					className={styles.header_logo}
					href={'/'}>
					ST PIZZA
				</Link>
				<nav className={styles.header_nav}>
					<Link
						className={styles.header_links}
						href={'/'}>
						Home
					</Link>
					<Link
						className={styles.header_links}
						href={'/Perfil'}>
						Menu
					</Link>
					<Link
						className={styles.header_links}
						href={'/'}>
						Quem Somos
					</Link>
					<Link
						className={styles.header_links}
						href={'/'}>
						Contactos
					</Link>
				</nav>

				<button
					onClick={toggleDiv}
					className={styles.header_button}>
					<Image
						src='/img/bars.webp'
						width='14'
						sizes="(max-width: 24px) 100vw"
						height='16'
						alt='NavBar icon'
					/>
				</button>

				<nav
					id='menu_bar_nav'
					className={menuClasses}>
					<div className={styles.menu_bar_nav_container}>
						{!session && (
							<nav className={styles.bar_nav_register}>
								<Link
									className='boutline w100'
									href={'/Login'}>
									Entrar
								</Link>
								<Link
									className='button w100'
									href={'/Registro'}>
									Registrar
								</Link>
								<div className={styles.hr_divider}></div>
							</nav>
						)}
						<Link
							className='button w100'
							href={'/'}>
							Home
						</Link>
						<Link
							className='button w100'
							href={'/Perfil'}>
							Menu
						</Link>
						<Link
							className='button w100'
							href={'/'}>
							Quem Somos
						</Link>
						<Link
							className='button w100'
							href={'/'}>
							Contactos
						</Link>
					</div>
				</nav>

				{session ? (
					<nav className={styles.header_signout}>
						<button
							className='button'
							onClick={() => signOut()}>
							Sign out
						</button>
					</nav>
				) : (
					<nav className={styles.header_register}>
						<Link
							className='boutline'
							href={'/Login'}>
							Entrar
						</Link>
						<Link
							className='button'
							href={'/Registro'}>
							Registrar
						</Link>
					</nav>
				)}
			</div>
		</header>
	);
}
