import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}

    body{
    background-color: #070724;
    margin: 0;
	background-image: url('/public/images/background-stars.svg');
    background-size: 200%;
    background-position: -1000px 200px;

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
    button{
        background-color: transparent;
        color: white;
        border: transparent;
    }

`;

export { GlobalStyles };
