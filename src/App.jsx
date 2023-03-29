import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/header/Header';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Header />
		</BrowserRouter>
	);
};

export default App;
