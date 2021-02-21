import Image from 'next/image'

import styled from 'styled-components'

import theme from '../../config/theme'
import SideBar from '../sidebar'


const DivConteiner = styled.div`
    margin: 0px;
    padding: 0px;
    --header-size: 10%;
    --footer-size: 5%;
    display: grid;
    grid-template-rows: var(--header-size) 1fr var(--footer-size);
    grid-template-areas:
        "topbar topbar"
        "sidebar main"
        "botbar botbar";
    height: 100vh;
    width: 100vw;

    header{
        grid-area: topbar;
        background-color: ${theme.colors.primary};
    }

    footer{
        grid-area: botbar;
        background-color: ${theme.colors.primary};
    }

    aside{
        width: 10%;
        left: 0px;
        display: flex;
        grid-area: sidebar;
    }
`

function BaseConteiner (props){
    return (
        <DivConteiner>
            <header></header>
            <aside>
                <SideBar/>
            </aside>
                {props.children}
            <footer></footer>
        </DivConteiner>
    )
}

export default BaseConteiner