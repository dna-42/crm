import Link from "next/link"

import styled from 'styled-components'

import config from "../../config/config.json"

const theme = config.theme


const BtnBox = styled.div`
	border-radius: 29px;
	background-color: ${(props) => props.bgColor};
	margin-top: 10px;
	a{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: ${theme.font.size.large};
		font-family:${theme.font.family.cursive};
		min-width: 207px;
		min-height: 77px;
		text-decoration: none;
		color:black;

		&:hover{
			color: white;
		}
	}
`

function Btn(props){
	const route = props.src
	return (
		<BtnBox bgColor={props.bgColor}>
				<Link href={props.src}>
					<a>
						{props.children}
					</a>
				</Link>
		</BtnBox>
	)
}

export default Btn