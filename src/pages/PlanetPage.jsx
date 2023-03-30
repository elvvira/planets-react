import { PlanetsInfo } from '../constants/info';
import {
	ContainerButton,
	Name,
	PageContainer,
	PlanetImage,
	StyledText
} from './styles';

const PlanetPage = ({ planetName }) => {
	return (
		<PageContainer>
			<ContainerButton>
				<button>OVERVIEW</button>
				<button>STRUCTURE</button>
				<button>SURFACE</button>
			</ContainerButton>
			<PlanetImage src='' alt='' />
			<div>
				<Name>{PlanetsInfo[0].name}</Name>
				<StyledText>{PlanetsInfo[0].overview.content}</StyledText>
			</div>
		</PageContainer>
	);
};
export default PlanetPage;
