import Card from '../components/card/Card';
import { CardText, PLANETS_INFO, PlanetsInfo } from '../constants/info';
import {
	Button,
	ContainerButton,
	ContainerCard,
	ContainerText,
	Name,
	PageContainer,
	PlanetImage,
	Source,
	StyledText
} from './styles';

const PlanetPage = ({ planetName }) => {
	return (
		<PageContainer>
			<ContainerButton>
				<Button>OVERVIEW</Button>
				<Button>STRUCTURE</Button>
				<Button>SURFACE</Button>
			</ContainerButton>
			<PlanetImage src={PlanetsInfo[0].images.planet} alt='' />
			<ContainerText>
				<Name>{planetName}</Name>
				<StyledText>{PLANETS_INFO[planetName].texts[0].content}</StyledText>
				<Source>
					Source{' '}
					<a href={PlanetsInfo[3].overview.source}>
						Wikipedia <img src='/public/images/icon-source.svg' alt='' />
					</a>
				</Source>
			</ContainerText>

			<ContainerCard>
				{CardText.map(card => {
					return <Card key={card.id} {...card} />;
				})}
			</ContainerCard>
		</PageContainer>
	);
};
export default PlanetPage;
