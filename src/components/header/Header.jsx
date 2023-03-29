import Planet from './components/planet/Planet';
import { Icon, StyledH1, StyledHeader } from './styles';

const Header = () => {
	return (
		<div>
			<StyledHeader>
				<StyledH1>THE PLANETS</StyledH1>
				<Icon src='/public/images/icon-hamburger.svg' alt='' />
			</StyledHeader>

			<Planet></Planet>
		</div>
	);
};
export default Header;
