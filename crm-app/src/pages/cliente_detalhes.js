import styled from 'styled-components'

import Link from "next/link"

import BaseLayout from "../components/base_conteiner"
import Btn from "../components/btns"
import config from "../config/config.json"

const theme = config.theme


const ClientDetails = styled.section`
/* background-color: orange; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;

	.buttons{
		display: flex;
		flex-wrap: wrap;
		width: 30%;
		justify-content: space-around;
		margin-top: 30px;
	}
`

ClientDetails.InfoBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 420px;
	column-gap: 60px;
	flex-wrap: wrap;
`

ClientDetails.HeaderLine = styled.div`
	display: flex;
	align-items: center;
	h1{
		font-size: ${theme.font.size.xlarge};
		margin-right: 25px;
	}
	a {
		text-decoration: none;
		font-family: ${theme.font.family.cursive};
		font-size: ${theme.font.size.medium};
		color: ${theme.colors.link};

		&:hover{
			color: ${theme.colors.btns.action};
		}
	}

	@media (max-width: 420px){
		h1{
			font-size: 32px;
		}
	}
`

ClientDetails.InfoLine = styled.div`
	display: flex;
	font-size: ${theme.font.size.medium};
	/* width: 300px; */
	.label{
		text-align:right;
		margin-right: 20px;
		font-weight: bold;
	}
	.data{
		text-align:left;
		width: 100%;
	}
	@media (max-width: 420px){
		font-size: 24px;
	}
`



export default function ClientDetailView(){
	return (
		<BaseLayout>
				<ClientDetails>
					<ClientDetails.HeaderLine>
						<h1><span id="client_id">001</span>-<span id="client_name">Alessandro Duarte</span></h1>
						<Link href="\">
							<a>Visualizar Pedidos</a>
						</Link>
					</ClientDetails.HeaderLine>
							<ClientDetails.InfoBox>
								{/* Inserir as linhas abaixo dinamicamente com map */}
									<div className="col-right">
										<ClientDetails.InfoLine>
											<p className="label">Rua</p>
											<p className="data">José Antonio Silveira</p>
										</ClientDetails.InfoLine>
										<ClientDetails.InfoLine>
											<p className="label">Nº</p>
											<p className="data">250</p>
										</ClientDetails.InfoLine>
										<ClientDetails.InfoLine>
											<p className="label">Compl</p>
											<p className="data">Ap 42</p>
										</ClientDetails.InfoLine>
										<ClientDetails.InfoLine>
											<p className="label">Bairro</p>
											<p className="data">Freguesia do Ó</p>
										</ClientDetails.InfoLine>
									</div>
									<div className="col-left">
										<ClientDetails.InfoLine>
											<p className="label">CEP</p>
											<p className="data">01234-500</p>
										</ClientDetails.InfoLine>
										<ClientDetails.InfoLine>
											<p className="label">CPF</p>
											<p className="data">300.132.546-50</p>
										</ClientDetails.InfoLine>
										<ClientDetails.InfoLine>
											<p className="label">Email</p>
											<p className="data">email@gmail.com</p>
										</ClientDetails.InfoLine>
										<ClientDetails.InfoLine>
											<p className="label">Celular</p>
											<p className="data">11 98008-5059</p>
										</ClientDetails.InfoLine>
									</div>
								</ClientDetails.InfoBox>
					<div className="buttons">
						<Btn bgColor={theme.colors.btns.danger} src="/confirm">Excluir</Btn>
						<Btn bgColor={theme.colors.btns.actionDark} src="/updated">Atualizar</Btn>
					</div>
				</ClientDetails>
		</BaseLayout>
	)
}