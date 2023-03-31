import { Container, Figure, TitleCard } from './styles';

const Card = ({ title }) => {
	return (
		<Container>
			<TitleCard>{title}</TitleCard>
			<Figure>58.6 DAYS</Figure>
		</Container>
	);
};
export default Card;
