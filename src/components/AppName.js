import styled from "styled-components";

export default styled.h1`
 color: ${props => props.expanded ? 'black' : 'white'};
 font-size: 20px;
 font-family: sans-serif;
 font-weight: 400;
 position: absolute;
 z-index: 1;
 margin: 0;
 left: 55px;
 top: 15px;
 transition: 1s;
`