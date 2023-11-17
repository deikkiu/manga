import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth, Catalog, Home, NotFound, Top } from '@pages/pages';
import Layout from '@components/layout/Layout';

const Router = () => {
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
