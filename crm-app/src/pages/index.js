import styled from 'styled-components'
import Link from "next/link"


import routes from "./routes"

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Link href={routes.cliente_detalhes}>
      <a>Cliente Detalhes</a>
    </Link>
    )
}
