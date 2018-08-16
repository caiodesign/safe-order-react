import Styled from 'styled-components';

const Title = Styled.p`
	font-size: ${props => (props.size ? props.size : '12px')};
	margin: ${props => (props.margin ? props.margin : '0px')};
`;

export default Title;
