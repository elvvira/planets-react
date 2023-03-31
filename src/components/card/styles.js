import styled from 'styled-components';

const Container = styled.div`
	width: 90%;
	height: 70px;
	border: 1px solid rgba(255, 255, 255, 0.3);
	margin-right: auto;
	margin-left: auto;
	display: flex;
	flex-direction: row;

	justify-content: space-between;
	padding-right: 2rem;
	padding-left: 2rem;
	@media screen and (min-width: 768px) {
		height: 100px;

		padding-left: 1rem;
		flex-direction: column;
		text-align: left;
		padding: 1 rem;
	}
`;
const Figure = styled.p`
	font-family: 'Antonio';
	font-size: 20px;
	@media screen and (min-width: 768px) {
		font-size: 20px;
		margin-top: 0;
	}
`;
const TitleCard = styled.p`
	letter-spacing: 1px;
	opacity: 0.5;
	margin-top: 25px;
	@media screen and (min-width: 768px) {
		margin-top: 10px;

		font-size: 10px;
	}
`;
export { Container, Figure, TitleCard };
