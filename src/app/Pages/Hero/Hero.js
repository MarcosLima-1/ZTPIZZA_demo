import Image from 'next/image';

import styles from '@/app/Styles/Pages/Hero/Hero.module.css';


export default function Hero() {
	return (
		<section className='center'>
			<div className={styles.hero_container}>
				<div className={styles.hero_text}>
					<h1 className='title'>
						Tudo é <br /> melhor com <br /> uma <span>Pizza</span>
					</h1>
					<p>
						Pizza é o pedaço que esta faltando, que faz o seu dia mais completo,
						simples e delicioso{' '}
					</p>
					<div className='flex'>
						<button className='button'>
							Order now <Image src='/img/RightArrow.webp' width='24' height='24' alt='Right Arrow' />
						</button>
						<button className='boutline'>
							Learn more <Image src='/img/RightArrow.webp' width='24' height='24' alt='Right Arrow' />
						</button>
					</div>
				</div>
				<Image
					priority
					alt='pizza'
					src='/Img/pizza.webp'
					width='659'
					height='653'
				/>
			</div>
		</section>
	);
}
