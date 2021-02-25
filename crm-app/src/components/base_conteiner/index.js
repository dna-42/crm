import styled from 'styled-components'

import Image from 'next/image'

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
    
    @media only screen and (min-width: 600px){
        body{
            grid-area: body;
            display: grid;
            grid-template-columns: 50px 1fr;
            grid-template-areas:
                "sidebar content";

            aside{
            // position: absolute;
                
            grid-area: sidebar;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: left;
                
                
                a {
                    //position: relative;
                    width: 50px;
                    height: 30px;
                    margin: 10px 0 10px 0;
                    padding: 10px 0 10px 0;
                    background-color: #FFB45C;            
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img{
                        width: 60%;
                    //height: 80%
                        
                    }
                }
            }
            content{
                grid-area: content;
                height: 100%;
                width: 100%;
                background-color: red;
                //position: responsive;
                align-items: center;
            }      
        }
    }

    @media only screen and (max-width: 599px){
        body{
            grid-area: body;
            display: row;
            grid-template-rows: 5% 1fr;
            grid-template-areas:
                "sidebar" 
                "content";

            aside{
                grid-area: sidebar;
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: justify;
                background-color: #FFB45C;
                margin-top: 5px;
                                
                a {                               
                                    
                    img{
                        width: 35px;
                    }
                }
            }

            content{
                grid-area: content;
                height: 100%;
                width: 100%;
                background-color: red;
                align-items: center;
                justify-content: center;
            }      
        }        
    }


`

export default function BaseConteiner (props){
    return (
        <DivConteiner>
            <header>
            <img src="/img/ico_padoquinha.png" alt=""/>
            </header>
            <body>
                <aside>
                    <a href="{/index}" ><img src="/img/ico_home1.svg" alt=""/></a>
                    <a href="#" ><img src="/img/ico_order.svg" alt=""/></a>
                    <a href="#" ><img src="/img/ico_products_hat.svg" alt=""/></a>
                    <a href="{/cliente_detalhes}" ><img src="/img/ico_client.svg" alt="" /></a>
                </aside>
                <content>
                    {props.children}
                </content>
            </body>


                
            <footer></footer>
        </DivConteiner>
    )
}