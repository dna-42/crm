import styled from 'styled-components'

import Image from 'next/image'

const colors = {
    primary: "#FFB45C"
}

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
        background-color: ${colors.primary};
    }

    footer{
        grid-area: botbar;
        background-color: ${colors.primary};
    }

    aside{
        display: flex;
        width: 12%;
        left: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        grid-area: sidebar;
        a {
            width: 100px;
            height: 100px;
            background-color: #FFB45C;
            
            img{
            width: 80%;
            height: 80%;
            margin-top: 10px;
            /* display: block; */
            /* margin: auto 0px; */
            }
        }
    }
`

export default function BaseConteiner (props){
    return (
        <DivConteiner>
            <header></header>
            <aside>
            <a href="#" ><img src="/img/ico_home1.svg" alt=""/></a>
            <a href="#" ><img src="/img/ico_order.png" alt=""/></a>
            <a href="#" ><img src="/img/ico_products_hat.svg" alt=""/></a>
            <a href="#" ><img src="/img/ico_client.svg" alt=""/></a>

            </aside>
                {props.children}
            <footer></footer>
        </DivConteiner>
    )
}