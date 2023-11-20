import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth, Catalog, Home, NotFound, Top } from '@pages/pages';
import { useSelector } from 'react-redux';
import Layout from '@components/layout/Layout';

const Router = () => {
	const theme = useSelector(state => state.theme.theme);
	const body = document.body;

	body.setAttribute('data-theme', theme);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="catalog" element={<Catalog />} />
					<Route path="top" element={<Top />} />
				</Route>
				<Route path="auth" element={<Auth />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
