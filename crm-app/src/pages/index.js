import styled from 'styled-components'
import Link from "next/link"
import BaseConteiner from "../components/base_conteiner"
import routes from '../routes/index.js'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <BaseConteiner>
      <Link href={routes.cliente_detalhes}>
        <a>Cliente Detalhes</a>
      </Link>
    </BaseConteiner>
    )
}