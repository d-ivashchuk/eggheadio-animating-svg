import React, { Component } from 'react';
import './App.css';
import { ReactComponent as ReactLogo } from './logo.svg'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fade = keyframes`
0% {
fill:#61DAFB;
}
50% {
 fill:white;
}
100%{
  fill:#61DAFB;
}
`;

const pulse = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
  transform-origin: center;
}
100% {
  transform: scale(4.5);
  opacity: 0;
  transform-origin: center;
}
`;

const StyledLogo = styled(ReactLogo)`
animation: ${rotate} infinite 20s linear;
width:20em;
height:20em;
.lines{
  animation: ${fade} infinite 8s linear;
		}

.circle{
  animation: ${pulse} infinite 4s linear;
  &:hover{
    animation-play-state: paused;
    cursor:pointer;
}
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <StyledLogo />
        </header>
      </div>
    );
  }
}

export default App;
