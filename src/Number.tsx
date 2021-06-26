import React from "react";
import styled from 'styled-components';

const Container = styled.span``;

type IProps = {
    count : number;
}

const Number: React.FunctionComponent<IProps> = ({count}) => <Container>{count}</Container>
//함수형 컴포넌트는 이렇게 props를 전달해야함
export default Number;