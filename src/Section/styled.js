import styled from "styled-components";

export const StyledSection = styled.section`
	background-color: #fff;
	box-shadow: 0 0 4px rgb(170, 170, 170);
`;

export const Header = styled.header`
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
	padding: 20px;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-gap: 10px;
	}
`;

export const Title = styled.h2`
	margin: 0;
	font-weight: 900;

	@media (max-width: 414px) {
		font-size: 20px;
	}
`;

export const SectionBody = styled.div`
	margin-bottom: 20px;
	padding: 20px;
	border-top: 2px solid #ddd;
`