import styles from './Header.module.scss';
import logo from '@assets/images/logo.svg';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.logo}>
					<img src={logo} alt="MangaOwl" />
				</div>
			</div>
		</header>
	);
};

export default Header;
