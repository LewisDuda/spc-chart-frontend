import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/components';
import Dashboard from '@/pages/Dashboard';
import History from '@/pages/History';
import ChartsDefinitions from '@/pages/ChartsDefinitions';
import ChartsData from '@/pages/ChartsData';
import NotFound from '@/pages/NotFound';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Dashboard />} />
				<Route path="history" element={<History />} />
				<Route path="chartsdefinitions" element={<ChartsDefinitions />} />
				<Route path="chartsdata" element={<ChartsData />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
