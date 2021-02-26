import Image from 'next/image'
import styled from 'styled-components'


const AsideConteiner = styled.div` 
    @media only screen and (min-width: 600px){   
        grid-area: sidebar;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        height: 100%;           
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
    @media only screen and (max-width: 599px){
        grid-area: sidebar;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        background-color: #FFB45C;
        margin-top: 5px;
                        
        a {                                                    
            img{
                width: 35px;
            }
        }
        
    }

`

function SideBar(){

    return (
        <AsideConteiner>
            <a href="{/index}" ><img src="/img/ico_home1.svg" alt=""/></a>
            <a href="#" ><img src="/img/ico_order.svg" alt=""/></a>
            <a href="#" ><img src="/img/ico_products_hat.svg" alt=""/></a>
            <a href="{/cliente_detalhes}" ><img src="/img/ico_client.svg" alt="" /></a>
        </AsideConteiner>
    )
}

export default SideBar