import Link from "next/link"

import routes from '../routes/index.js'

function Home() {
  return (
    <>
    <Link href={routes.cliente_detalhes}>
      <a>Cliente Detalhes</a>
    </Link>
    </>
    )
}

export default Home