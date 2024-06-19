import styled, { css } from "styled-components";

export const StyledForm = styled.form`
	display: grid;
	grid-template-columns: 1fr auto;
	grid-gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const Input = styled.input`
	padding: 10px;
	border: 1px solid #ddd;
`

export const FormButton = styled.button`
	padding: 10px;
	background-color: teal;
	color: #fff;
	border: none;
	cursor: pointer;
	transition: scale 0.3s;

    &:hover {
        scale: 1.1;
    }
`