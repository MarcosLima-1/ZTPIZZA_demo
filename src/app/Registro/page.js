'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

import Loading from '../Layout/Loading';

import styles from '../Styles/Pages/RegisterLogin/RegisterLogin.module.css';

export default function Page() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [creatingUser, setCreatingUser] = useState(false);
	const [error, setError] = useState(0);
	const router = useRouter();
	const { data: session, status: sessionStatus } = useSession();

	const isValidEmail = (email) => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		return emailRegex.test(email);
	};

	const isValidPassword = (password) => {
		if (password.length < 6 || !/[A-Z]/.test(password) || !/\d/.test(password)) {
			return false;
		}
		return true;
	};

	useEffect(() => {
		if (sessionStatus === 'authenticated') {
			router.replace('/Perfil');
		}
	}, [sessionStatus, router]);

	async function handleFormSubmit(ev) {
		ev.preventDefault();
		setCreatingUser(true);

		if (!isValidEmail(email)) {
			setError(1);
			setCreatingUser(false);
			return false;
		}

		if (!password || !isValidPassword(password)) {
			setError(2);
			console.log('senha invalida');
			setCreatingUser(false);
			return false;
		}

		const res = await fetch('/api/register', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: { 'Content-Type': 'application/json' },
		});
		if (res.status === 400) {
			setError(4);
		}
		if (res.status === 200) {
			router.push('/Login');
		}

		setCreatingUser(false);
	}
	if (sessionStatus === 'loading') {
		return (
			<section className='ssection flex center'>
				<Loading />
			</section>
		);
	}
	return (
		sessionStatus !== 'authenticated' && (
			<section className='ssection center flex'>
				<div className={styles.circulo}></div>
				<div className={styles.form_container}>
					<div className='flex_cl center'>
						<form
							className='center flex_cl'
							onSubmit={handleFormSubmit}>
							<h1>Cadastrar-se</h1>

							{error === 1 && <div className={styles.error}>Email invalido</div>}

							{error === 2 && (
								<div className={styles.error}>
									<h2>Sua senha deve conter:</h2>
									<ul className='flex_cl'>
										<li>Pelo menos 6 caracteres</li>
										<li>Uma Letra maiuscula</li>
										<li>Um numero</li>
									</ul>
								</div>
							)}

							{error === 4 && (
								<div className={styles.error}>Esse Email já está em uso</div>
							)}

							<label
								disabled={creatingUser}
								className='input_text'>
								<Image
									src='/img/envelope.webp'
									width='14'
									height='16'
									sizes="(max-width: 24px) 100vw"
									alt='Email icon'
								/>
								<input
									required
									className='input'
									type='email'
									placeholder='Email'
									name='email'
									id='email'
									value={email}
									onChange={(ev) => setEmail(ev.target.value)}
									disabled={creatingUser}
								/>
							</label>

							<label
								disabled={creatingUser}
								className='input_text'>
								<Image
									src='/img/lock.webp'

									width='14'
									height='16'
									sizes="(max-width: 24px) 100vw"
									alt='PassWord Icon'
								/>
								<input
									required
									className='input'
									type='password'
									placeholder='Senha'
									name='password'
									id='password'
									value={password}
									onChange={(ev) => setPassword(ev.target.value)}
									disabled={creatingUser}
								/>
							</label>

							<button
								type='submit'
								className='button w100'
								disabled={creatingUser}>
								Cadastrar
							</button>
						</form>
						<div className={styles.divisoria}>ou</div>
						<div>
							<button
								disabled={creatingUser}
								className={styles.login_buttons}
								onClick={() => {
									signIn('github');
								}}>
								<Image
									src='/img/Github.webp'
									width='24'
									height='24'
									sizes="(max-width: 30px) 100vw"
									alt='GitHub icon'
								/>
							</button>
						</div>
						<p>
							Já tem uma conta?{' '}
							<Link
								href={'/Login'}
								className={styles.link}>
								Entre aqui
							</Link>
						</p>
					</div>
					<div>
						<h1>1</h1>
					</div>
				</div>
			</section>
		)
	);
}
