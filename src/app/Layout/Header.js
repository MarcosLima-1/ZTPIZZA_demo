'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import React, { useState } from 'react';

import Dropdown from '../Layout/DropDown';

import styles from '../Styles/Layout/Header.module.css';

export default function Header() {
	const { data: session, status: sessionStatus } = useSession();
	const userData = session?.user;
	const userName = userData?.name;
	var userImage;
	if (userData?.image) {
		userImage = userData?.image;
	} else {
		userImage = '/img/profile.webp';
	}

	const [menuVisible, setMenuVisible] = useState(false);
	const toggleDiv = () => {
		setMenuVisible(!menuVisible);
	};

	const menuClasses = menuVisible
		? `${styles.menu_bar_nav} ${styles.flex}`
		: `${styles.menu_bar_nav}`;
console.log(sessionStatus)
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
						Contatos
					</Link>

					<Dropdown title="Menu 1" links={[{ href: '/perfil', label: 'perfil' }, { href: '/page2', label: 'Page 2' }]} />
				</nav>

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
				<div className='flex'>
					{sessionStatus == 'authenticated' && (
						<div
							data-dropdown
							className={styles.header_signout}>
							<button
								data-dropdown-button
								className={styles.header_button_perfil}
								>
								<Image
									data-dropdown-button
									src={userImage}
									width='50'
									height='50'
									alt='Foto perfil'
								/>
							</button>
							      <DropdownMenu isOpen={isOpen}>
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <MenuLink>{link.label}</MenuLink>
          </Link>
        ))}
      </DropdownMenu>
							<nav className={styles.profile_links}>
								<div className={'flex center'}>
									<Image
										src={userImage}
										width='50'
										height='50'
										alt='Foto perfil'
									/>
									{userName}
								</div>

								<Link href='/Perfil'>Perfil</Link>
								<Link href='/Pedidos'>Meus Pedidos</Link>
								<button onClick={() => signOut()}>Sair</button>
							</nav>
						</div>
					)}{' '}
					{sessionStatus !== 'authenticated' && (
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
					<button
						onClick={toggleDiv}
						className={styles.header_button}>
						<Image
							src='/img/bars.webp'
							width='14'
							sizes='(max-width: 24px) 100vw'
							height='16'
							alt='NavBar icon'
						/>
					</button>
				</div>
			</div>
		</header>
	);
}
