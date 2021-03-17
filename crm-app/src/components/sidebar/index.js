import Image from 'next/image'

import styled from 'styled-components'

import {theme} from "../../config/config.json"


const AsideConteiner = styled.div`
    display: flex;
    flex-direction: column;
    height: 70%;
    align-self: center;
    justify-content: space-evenly;
`

const BtnBackGround = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:${props => props.backgroundColor};
    width:${props => props.width};
    height: ${props => props.height};
`

function IconBtn(props){
    return (
        <BtnBackGround backgroundColor={props.backgroundColor} width='80px' height='80px'>
            <a href="">
                <Image src={props.src} width='60%' height='60%' alt={props.alt}/>
            </a>
        </BtnBackGround>
    )
}

function SideBar(){
    return (
        <AsideConteiner>
            <IconBtn className="btn" src="/img/ico_home1.svg" backgroundColor={theme.colors.primary}/>
            <IconBtn className="btn" src="/img/ico_products_hat.svg" backgroundColor={theme.colors.btns.actionLight}/>
            <IconBtn className="btn" src="/img/ico_order.png" backgroundColor={theme.colors.btns.action}/>
            <IconBtn className="btn" src="/img/ico_client.svg" backgroundColor={theme.colors.btns.actionDark}/>
        </AsideConteiner>
    )
    
}

export default SideBar
