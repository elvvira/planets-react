import { ContainerPlanet, StyledBall, StyledLi, StyledLink } from './styles';
import { PlanetsInfo } from '../../constants/info';
const Planet = ({ open }) => {
	return (
		<nav>
			<ContainerPlanet open={open}>
				{PlanetsInfo.map(card => {
					return (
						<StyledLi key={card.id}>
							<StyledBall />
							<StyledLink to=''>{card.planet}</StyledLink>
							<img src='/public/images/icon-chevron.svg' alt='' />
						</StyledLi>
					);
				})}
			</ContainerPlanet>
		</nav>
	);
};
export default Planet;
