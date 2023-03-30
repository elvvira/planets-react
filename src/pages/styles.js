import styled from 'styled-components';
const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	color: white;
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
`;
const PlanetImage = styled.img`
	width: 30%;
	margin-bottom: 4rem;
`;
const Name = styled.h1`
	color: white;
	font-family: 'Antonio';
	font-style: normal;
	font-weight: 400;
	font-size: 40px;
	line-height: 52px;
`;
const StyledText = styled.p`
	font-weight: 400;
	font-size: 11px;
	line-height: 22px;
	width: 327px;
	letter-spacing: 1px;
`;
export { PageContainer, ContainerButton, PlanetImage, Name, StyledText };
