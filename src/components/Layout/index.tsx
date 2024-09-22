import { Navigation, Captain } from './components';
import { MAIN_HEIGHT, MAIN_WIDTH } from '@/const/layout';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<div className="h-screen w-screen flex flex-wrap bg-gray font-inter">
			<Captain />
			<Navigation />
			<main className="py-5 pr-5" style={{ height: MAIN_HEIGHT, width: MAIN_WIDTH }}>
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
