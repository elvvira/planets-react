import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/header/Header';
import Router from './components/router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Header />
			<Router />
		</BrowserRouter>
	);
};

export default App;
