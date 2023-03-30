import { useState } from 'react';
import Planet from '../planet/Planet';
import { HeaderContainer, Icon, StyledH1, StyledHeader } from './styles';

const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<HeaderContainer>
			<StyledHeader>
				<StyledH1>THE PLANETS</StyledH1>
				<Icon
					onClick={() => setOpen(!open)}
					src='/public/images/icon-hamburger.svg'
					alt=''
				/>
			</StyledHeader>
			<Planet open={open} setOpen={setOpen}></Planet>
		</HeaderContainer>
	);
};
export default Header;
