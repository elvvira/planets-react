import { Route, Routes } from 'react-router-dom';
import { PlanetsMenu } from '../../constants/info';
import PlanetPage from '../../pages/PlanetPage';

const Router = () => {
	return (
		<Routes>
			{PlanetsMenu.map(planet => {
				return (
					<Route
						key={planet.id}
						path={planet.path}
						element={<PlanetPage planetName={planet.planet} />}
					/>
				);
			})}
		</Routes>
	);
};

export default Router;
