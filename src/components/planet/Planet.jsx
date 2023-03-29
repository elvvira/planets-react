import { ContainerPlanet, StyledBall, StyledLink } from './styles';
import { PlanetsInfo } from '../../constants/info';
const Planet = ({ planet }) => {
	return (
		<ContainerPlanet>
			<nav>
				<ul>
					{PlanetsInfo.map(card => {
						return (
							<li key={card.id}>
								<StyledBall />
								<StyledLink to=''>{card.planet}</StyledLink>
								<img src='/public/images/icon-chevron.svg' alt='' />
							</li>
						);
					})}
				</ul>
			</nav>
		</ContainerPlanet>
	);
};
export default Planet;
