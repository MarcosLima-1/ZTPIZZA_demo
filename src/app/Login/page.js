'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import styles from '../Styles/Pages/RegisterLogin/RegisterLogin.module.css';

import Loading from '../Layout/Loading';

export default function Page() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginInProgress, setLoginInProgress] = useState(false);
	const [error, setError] = useState(false);
	const router = useRouter();
	//	const session = useSession();
	const { data: session, status: sessionStatus } = useSession();

	useEffect(() => {
		if (sessionStatus === 'authenticated') {
			router.replace('/Perfil');
		}
	}, [sessionStatus, router]);

	const isValidEmail = (email) => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		return emailRegex.test(email);
	};

	async function handleFormSubmit(ev) {
		ev.preventDefault();
		setLoginInProgress(true);

		if (!isValidEmail(email)) {
			setError('Email invalido');
			setLoginInProgress(false);
			return false;
		}

		const res = await signIn('Credentials', { redirect: false, email, password });

		if (res?.error) {
			setError('Email ou senha incorretos');
			if (res?.url) router.replace('/');
		} else {
			setError('');
		}

		setLoginInProgress(false);
	}

	if (sessionStatus === 'loading') {
		return (
			<section className='ssection flex center'>
				<Loading />
			</section>
		);
	}

	return (
		sessionStatus !== 'autheticated' && (
			<section className='ssection center flex'>
				<div className={styles.circulo}></div>
				<div className={styles.form_container}>
					<div className='center flex_cl'>
						<form
							className='center flex_cl'
							onSubmit={handleFormSubmit}>
							<h1>Entrar</h1>

							{error && <div className={styles.error}> {error} </div>}

							<label
								disabled={loginInProgress}
								className='input_text'>
								<Image
									src='/img/envelope.webp'
									width='14'
									height='16'
									sizes='(max-width: 24px) 100vw'
									alt='Email icon'
								/>
								<input
									required
									className='input'
									type='Email'
									placeholder='Email'
									name='Email'
									id='Email'
									value={email}
									onChange={(ev) => setEmail(ev.target.value)}
									disabled={loginInProgress}
								/>
							</label>

							<label
								disabled={loginInProgress}
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
									type='Password'
									placeholder='Senha'
									name='Password'
									id='Password'
									value={password}
									onChange={(ev) => setPassword(ev.target.value)}
									disabled={loginInProgress}
								/>
							</label>
							<button
								type='submit'
								className='button w100'
								disabled={loginInProgress}>
								Entrar
							</button>
						</form>

						<div className={styles.divisoria}>ou</div>
						<div>
							<button
								onClick={() => {
									signIn('github');
								}}
								disabled={loginInProgress}
								className={styles.login_buttons}>
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
							Não tem uma conta?{' '}
							<Link
								href={'/Registro'}
								className={styles.link}>
								Crie aqui
							</Link>
						</p>
					</div>
					<div>
						<h1> </h1>
					</div>
				</div>
			</section>
		)
	);
}
