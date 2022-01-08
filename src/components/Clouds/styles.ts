import { CloudsProps } from '../../types/clouds';
import styled from 'styled-components';
import screenMove from './keyframes';

export const Container = styled.div<CloudsProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;

  @media screen and (max-width: 950px) {display: none;}

  i {
    background: #4b4b4b;
    width: 400px;
    height: 200px;
    position: absolute;
    filter: blur(80px);
    border-radius: 30%;
    transform-origin: bottom left;
    animation: ${screenMove} 5s linear infinite;
    z-index: -1;
  }
`;