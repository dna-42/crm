import styled from 'styled-components'

import SideBar from '../sidebar'


const BaseConteiner = styled.div`
    margin: 0px;
    padding: 0px;
    --header-size: 60px;
    --footer-size: 30px;
    display: grid;
    font-family:${(props) => props.theme.font.family.regular};
    grid-template-rows: var(--header-size) auto var(--footer-size);
    grid-template-columns: auto 1fr;
    grid-template-areas:
        "topbar topbar"
        "sidebar mainContent"
        "botbar botbar";
    min-height: 100vh;
    

    header{
        grid-area: topbar;
        background-color: ${(props) => props.theme.colors.primary};
    }

    aside{
        width: 10%;
        left: 0px;
        margin-right: 10px;
        display: flex;
        grid-area: sidebar;
    }
    main{
        grid-area: mainContent;
        /* height: 111vh; */
    }
    footer{
        grid-area: botbar;
        background-color: ${(props) => props.theme.colors.primary};
    }
`

function BaseLayout (props){
    return (
        <BaseConteiner>
            <header></header>
            <aside>
                <SideBar/>
            </aside>
            <main>
                {props.children}
            </main>
            <footer></footer>
        </BaseConteiner>
    )
}

export default BaseLayout