import styled from 'styled-components'

import Image from 'next/image'

const colors = {
    primary: "#FFB45C"
}

const DivConteiner = styled.div`
    margin: 0px;
    padding: 0px;
    --header-size: 200px;
    --footer-size: 80px;
    display: grid;
    grid-template-rows: var(--header-size) 1fr var(--footer-size);
    grid-template-columns: 4% 1fr;
    grid-template-areas:
        "topbar topbar"
        "sidebar content"
        "botbar botbar";
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
  
    aside{
       // position: absolute;
        
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: left;
       grid-area: sidebar;
        
        
        a {
            //position: relative;
            max-width: 150px;
            max-height: 150px;
            width: 100%;
            margin: 25px 0;
            padding: 10px 10px;
            background-color: #FFB45C;            
            display: flex;
            justify-content: center;
            align-items: center;

            img{
                width: 80%;
               //height: 80%
                /* display: block; */
                /* margin: auto 0px; */
            }
        }
    }

    content{
        height: 100%;
        width: 100%;
        background-color: red;
        position: responsive;
        grid-area: content;
        align-items: center;
    }      
`

export default function BaseConteiner (props){
    return (
        <DivConteiner>
            <header></header>
            <aside>
                <a href="{/index}" ><img src="/img/ico_home1.svg" alt=""/></a>
                <a href="#" ><img src="/img/ico_order.png" alt=""/></a>
                <a href="#" ><img src="/img/ico_products_hat.svg" alt=""/></a>
                <a href="{/cliente_detalhes}" ><img src="/img/ico_client.svg" alt="" /></a>
            </aside>

            <content>
                {props.children}
            </content>

                
            <footer></footer>
        </DivConteiner>
    )
}