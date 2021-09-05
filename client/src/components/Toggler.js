import React from 'react'
import {func, string } from 'prop-types';
import styled from "styled-components"
const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display:      block;
  margin-left:  auto;
  margin-right: 0;
  font-size:0.8rem;
  color: violet;
  padding: 0.6rem;
  }`;
const Toggle = ({theme,  toggleTheme }) => {
    return (
        <Button onClick={toggleTheme}   >
          Switch Theme
        </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;