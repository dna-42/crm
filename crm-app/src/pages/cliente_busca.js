import styled from 'styled-components'
import BaseConteiner from "../components/base_conteiner"

const Title = styled.h1`
    position: absolute;
    width: 474px;
    height: 76.34px;
    left: 483px;
    top: 115px;
    font-size: 50px;
`

export default function ClientDetailView(){
    return (
        <BaseConteiner>
            <main>
              <h1>Ola mundo</h1>
            </main>
        </BaseConteiner>
    )
}
