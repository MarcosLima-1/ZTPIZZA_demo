import Image from 'next/image';

import BoxMenu from '@/app/Pages/Hero/BoxMenu';

import styles from '@/app/Styles/Pages/Hero/MenuHero.module.css';

export default function MenuHero() {
	return (
		<section className='center'>
			<Image
				className={styles.hero_menu_iconb}
				alt='salada fundo'
				src='/img/sallad1.png'
				width='109'
				height='189'
			/>
			<Image
				className={styles.hero_menu_iconb}
				alt='salada fundo'
				src='/img/sallad2.png'
				width='107'
				height='195'
			/>
			<div className={styles.hero_menu_container}>
				<div className='flex_cl'>
					<h2>Veja nosso</h2>
					<h1 className='title'>
						<span className={styles.padding_left}>Menu</span>
					</h1>
				</div>
				<div className={styles.boxes_menu}>
					<BoxMenu
						pizza_name={'peperoni'}
						pizza_desc={'muito gostosa'}
						pizza_price={'12'}
					/>
					<BoxMenu
						pizza_name={'Calabresa'}
						pizza_desc={'muito gostosa'}
						pizza_price={'24'}
					/>
					<BoxMenu
						pizza_name={'Mussarela'}
						pizza_desc={'muito gostosa'}
						pizza_price={'56'}
					/>
					<BoxMenu
						pizza_name={'Frango com catupiri'}
						pizza_desc={'muito gostosa'}
						pizza_price={'23'}
					/>
					<BoxMenu
						pizza_name={'peperoni'}
						pizza_desc={'muito gostosa'}
						pizza_price={'12'}
					/>
					<BoxMenu
						pizza_name={'peperoni'}
						pizza_desc={'muito gostosa'}
						pizza_price={'12'}
					/>
				</div>
			</div>
		</section>
	);
}
