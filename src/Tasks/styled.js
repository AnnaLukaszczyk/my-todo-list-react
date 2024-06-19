import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const Item = styled.li`
	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-gap: 10px;
	align-items: center;
	padding: 10px;
	border-bottom: 1px solid #ddd;

	${({ hidden }) =>
		hidden &&
		css`
			display: none;
		`}
`;

export const Content = styled.span`
	${({ done }) =>
		done &&
		css`
			text-decoration: line-through;
		`}
`;

export const Button = styled.button`
	height: 34px;
	width: 34px;
	border: none;
	background-color: green;
	color: #fff;
	cursor: pointer;
	transition: background-color 0.3s;

	${({ toggleDone }) =>
		toggleDone &&
		css`
			&:hover {
				background-color: rgb(1, 152, 1);
			}
		`}

	${({ remove }) =>
		remove &&
		css`
			background-color: red;

			&:hover {
				background-color: rgb(255, 98, 98);
			}
		`}
`;

export const Icon = styled(FontAwesomeIcon)`
	${({ undone }) =>
		undone &&
		css`
			visibility: hidden;
		`}
`;
