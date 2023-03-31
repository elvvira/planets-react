import styled from 'styled-components';
const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	color: white;
	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: 60% 40%;
		grid-template-rows: 400px 200px 200px;
		gap: 2rem;
		padding: 1rem;
	}
`;
const ContainerButton = styled.div`
	text-transform: uppercase;
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 3rem;
	padding: 2rem;
	position: relative;
	border-bottom: 1px solid rgba(151, 151, 151, 0.5);
	margin-bottom: 7rem;
	@media screen and (min-width: 768px) {
		flex-direction: column;
		grid-column: 2/3;
		grid-row: 2/2;
		gap: 1rem;
		border-bottom: transparent;
		top: 60px;
	}
`;
const Button = styled.button`
	border: transparent;
	padding: 0rem;
	text-align: center;
	@media screen and (min-width: 768px) {
		border: 1px solid rgba(255, 255, 255, 0.3);
		padding: 1rem;
		text-align: left;
	}
`;
const PlanetImage = styled.img`
	width: 30%;
	margin-bottom: 4rem;
	@media screen and (min-width: 768px) {
		margin-right: auto;
		margin-left: auto;
		grid-column: 1/3;
		grid-row: 1/2;
	}
`;
const Name = styled.h1`
	text-transform: uppercase;
	color: white;
	font-family: 'Antonio';
	font-style: normal;
	font-weight: 400;
	font-size: 40px;
	line-height: 52px;
	margin-left: 0px;

	@media screen and (min-width: 768px) {
		margin-left: 20px;
	}
`;
const ContainerText = styled.div`
	margin-bottom: 70px;
	@media screen and (min-width: 768px) {
		width: 80%;
		text-align: left;
	}
`;
const StyledText = styled.p`
	font-weight: 400;
	font-size: 11px;
	line-height: 22px;
	width: 90%;
	letter-spacing: 1px;
	margin-right: auto;
	margin-left: auto;
`;
const ContainerCard = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		grid-column: 1/3;
		grid-row: 3/3;
	}
`;
const Source = styled.div`
	margin-left: 0px;

	@media screen and (min-width: 768px) {
		margin-left: 20px;
		grid-column: 1/3;
		grid-row: 3/4;
	}
`;
export {
	PageContainer,
	ContainerButton,
	PlanetImage,
	Name,
	ContainerText,
	StyledText,
	ContainerCard,
	Button,
	Source
};
