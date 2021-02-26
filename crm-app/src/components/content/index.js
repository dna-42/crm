import styled from 'styled-components'


const ContentConteiner = styled.div`
        grid-area: content;
        height: 100%;
        width: 100%;
        //position: relative;
        align-items: center;
`

function Content(){

return (
    <ContentConteiner>
      Conteudo
    </ContentConteiner>
)
}

export default Content

