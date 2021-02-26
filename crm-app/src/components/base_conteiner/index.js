import styled from 'styled-components'
import Image from 'next/image'
import Body from '../body'

const colors = {
    primary: "#FFB45C"
}

const DivConteiner = styled.div`
    margin: 0px;
    padding: 0px;
    --header-size: 100px;
    --footer-size: 30px;
    display: grid;
    grid-template-rows: var(--header-size) 1fr var(--footer-size);
   // grid-template-columns: 4% 1fr;
    grid-template-areas:
        "topbar"
        "body"
        "botbar";
    width: 100vw;
    height: 100vh;

    header{
        grid-area: topbar;
        background-color: ${colors.primary};
    }

    footer{
        grid-area: botbar;
        background-color: ${colors.primary};

    }
      
`

export default function BaseConteiner (props){
    return (
        <DivConteiner>
            <header>
                <img src="/img/ico_padoquinha.png" alt=""/>
            </header>
            <body>
               <Body/>
            </body>              
            <footer></footer>
        </DivConteiner>
    )
}