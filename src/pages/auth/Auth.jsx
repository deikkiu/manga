import { changeTheme } from '@store/slices/themeSlice';
import { useSelector, useDispatch } from 'react-redux';

const Auth = () => {
	const theme = useSelector(state => state.theme.theme);
	const dispatch = useDispatch();

	return (
		<>
			<div>{theme}</div>
			<button
				onClick={() =>
					dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'))
				}>
				Поменять тему
			</button>
		</>
	);
};

export default Auth;
