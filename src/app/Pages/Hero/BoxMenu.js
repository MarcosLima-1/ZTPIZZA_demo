import Image from 'next/image';

import styles from '@/app/Styles/Pages/Hero/MenuHero.module.css';

export default function BoxMenu({ pizza_name, pizza_desc, pizza_price }) {
	return (
		<div className={styles.box_menu}>
			<Image
				className={styles.box_img}
				alt='pizza'
				src='/Img/pizza.png'
				width='659'
				height='653'
			/>
			<h1>{pizza_name}</h1>
			<p>{pizza_desc}</p>

			<h2>Por {pizza_price} R$</h2>
			<button className='button'>Adicionar no Carrinho</button>
		</div>
	);
}
