import { useState } from 'react';
import Planet from '../planet/Planet';
import { Icon, StyledH1, StyledHeader } from './styles';

const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<div>
			<StyledHeader>
				<StyledH1>THE PLANETS</StyledH1>
				<Icon
					onClick={() => setOpen(!open)}
					src='/public/images/icon-hamburger.svg'
					alt=''
				/>
			</StyledHeader>
			<Planet opne={open}></Planet>
		</div>
	);
};
export default Header;
