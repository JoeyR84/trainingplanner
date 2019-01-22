import React, { Component } from "react";
import styled from "@emotion/styled";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Title>Training Plan</Title>
      </Container>
    );
  }
}

const Title = styled.h1``;
const Container = styled.div``;
