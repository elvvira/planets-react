import { Arrow, ContainerPlanet, Nav, StyledLi, StyledLink } from './styles';
import { PlanetsMenu } from '../../constants/info';
const Planet = ({ open, setOpen }) => {
	return (
		<Nav>
			<ContainerPlanet open={open}>
				{PlanetsMenu.map(card => {
					return (
						<StyledLi key={card.id}>
							<StyledLink color={card.color} to={card.path}>
								{card.planet}
							</StyledLink>
							<Arrow
								onClick={() => setOpen(!open)}
								src='/public/images/icon-chevron.svg'
								alt=''
							/>
						</StyledLi>
					);
				})}
			</ContainerPlanet>
		</Nav>
	);
};
export default Planet;
