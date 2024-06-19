import styled from "styled-components"

export const Span = styled.span`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
		grid-gap: 8px;
    }

    @media (max-width: 414px) {
        font-size: 14px;
    }
`

export const Button = styled.button`
	padding: 4px 12px;
	border: none;
	background: none;
	color: teal;
	cursor: pointer;

    &:disabled {
        color: grey;
        cursor: not-allowed;
    }
`