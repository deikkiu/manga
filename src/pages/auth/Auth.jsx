import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeTheme } from '@store/slices/themeSlice';

import styles from './Auth.module.scss';

const Auth = () => {
	const theme = useSelector(state => state.theme.value);
	const dispatch = useDispatch();

	return (
		<>
			<p className={styles.text}>{theme}</p>
			<button onClick={() => dispatch(changeTheme())}>Поменять тему</button>
			<br />
			<br />
			<Link to="/">Home</Link>
		</>
	);
};

export default Auth;
