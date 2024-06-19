import { StyledSection, Header, Title, SectionBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
	<StyledSection>
		<Header>
			<Title className="section__title">{title}</Title>
			{extraHeaderContent}
		</Header>
		<SectionBody>{body}</SectionBody>
	</StyledSection>
);

export default Section;
