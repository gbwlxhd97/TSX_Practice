import React from "react";
import styled from 'styled-components';

const Container = styled.span<{ isBlue : boolean}>`
    color: ${props => (props.isBlue ? props.theme.blueColor : "red")}
`;

type IProps = {
    count : number;
}

const Number: React.FunctionComponent<IProps> = ({count}) => 
<Container isBlue={count > 10 }> {count}</Container>
//함수형 컴포넌트는 이렇게 props를 전달해야함
export default Number;