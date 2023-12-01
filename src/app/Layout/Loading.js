import styles from "../Styles/Layout/Loading.module.css";
export default function Loading() {
	return (
		<div className={styles.lds_circle}>
			<div></div>
		</div>
	);
}
