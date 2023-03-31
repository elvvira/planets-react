import styled from 'styled-components';
const HeaderContainer = styled.header`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		flex-direction: column;
		margin-bottom: 20px;
	}
	@media screen and (min-width: 1040px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding-right: 2rem;
		padding-left: 2rem;
	}
`;
const StyledHeader = styled.header`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 1rem;
	padding-right: 1rem;
	color: white;
	&::after {
		display: block;
		content: '';
		position: absolute;
		width: 120%;
		height: 1px;
		background-color: #ffffff;
		opacity: 0.2;
		left: -2rem;
		bottom: 0;

		@media screen and (min-width: 768px) {
			bottom: -80px;
		}
		@media screen and (min-width: 1040px) {
			width: 1300%;
			bottom: -10px;
		}
	}
`;
const Icon = styled.img`
	display: block;
	opacity: 0.3;
	padding-right: 2rem;
	@media screen and (min-width: 768px) {
		display: none;
		padding-right: 0rem;
	}
`;
const StyledH1 = styled.h1`
	font-family: antonio;
	font-size: 28px;
	padding-left: 1rem;
	@media screen and (min-width: 768px) {
		text-align: center;
		padding-left: 0rem;
		margin-right: auto;
		margin-left: auto;
		z-index: 10;
	}
	@media screen and (min-width: 768px) {
		width: 200px;
		margin-bottom: 20px;
	}
`;
export { HeaderContainer, StyledHeader, StyledH1, Icon };
