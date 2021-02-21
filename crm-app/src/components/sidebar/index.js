import Image from 'next/image'

import styled from 'styled-components'

import theme from '../../config/theme'


const AsideConteiner = styled.div`
    display: flex;
    height: 70%;
    align-self: center;
    flex-direction: column;
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

function Btn(props){
    const boxHeight = 80
    const boxWidth = 80
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
            <Btn className="btn" src="/img/ico_home1.svg" backgroundColor={theme.colors.primary}/>
            <Btn className="btn" src="/img/ico_products_hat.svg" backgroundColor={theme.colors.btns.actionLight}/>
            <Btn className="btn" src="/img/ico_order.png" backgroundColor={theme.colors.btns.action}/>
            <Btn className="btn" src="/img/ico_client.svg" backgroundColor={theme.colors.btns.actionDark}/>
        </AsideConteiner>
    )
}

export default SideBar
