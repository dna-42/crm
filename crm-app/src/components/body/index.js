import styled from 'styled-components'
import SideBar from '../sidebar'
import Content from '../content'

const BodyConteiner = styled.div`
    @media only screen and (min-width: 600px){
        //grid-area: body;
        display: grid;
        grid-template-columns: 50px 1fr;
        grid-template-areas:
            "sidebar content";
        height: 100%;
    }

    @media only screen and (max-width: 599px){
        //grid-area: body;
        display: grid;
        grid-template-rows: 50px 1fr;
        grid-template-areas:
            "sidebar" 
            "content";
        height: 92%;
    }        
`

function Body(){

return (
    <BodyConteiner>
        <aside>
            <SideBar/>
        </aside>
        <content>
            <Content/>
        </content>   
    </BodyConteiner>
)
}

export default Body