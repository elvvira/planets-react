import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*
    body{
    background-color: #070724;
    margin: 0;
    }
    h2{
        margin-bottom: 0;
	margin-top: 0;
    }
    ul{
        display: flex;
        flex-direction: column;
	padding: 0;

    }
    li{
        list-style: none;
        display: flex;
        margin: 0;

    }

`;

export { GlobalStyles };
