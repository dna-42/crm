import styled from 'styled-components'


const colors = {
    primary: "#FFB45C"
}

const BaseConteiner = styled.div`
    --header-size: 140px;
    --footer-size: 40px;
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
`


export default function ClientDetailView(){
    return (
        <BaseConteiner>
            <header></header>
            <footer></footer>
        </BaseConteiner>
    )
}