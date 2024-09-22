import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from '@/routes';
import { SnackbarProvider } from 'notistack';

function App() {
	return (
		<SnackbarProvider
			maxSnack={3}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			className="!p-4 !text-lg"
		>
			<Router>
				<AppRoutes />
			</Router>
		</SnackbarProvider>
	);
}

export default App;
