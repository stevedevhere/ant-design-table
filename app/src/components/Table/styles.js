import {css} from 'react-emotion';

const tableStyle = props => css`
  border-collapse: collapse;
  font-family: monospace;
  * {
    margin: 0;
  }
  ${props.fixed ? `
    position: absolute;
    top: 0;
    ${props.fixed === 'left'
    ? 'left: 0;'
    : props.fixed === 'right'
    ? 'right: 0;' : ''}
  ` : ''}
`

const tdStyles = props => css`
  text-align: left;
  padding: 16px; 
  background: #fff;
  ${props.width 
    ? `
      min-width: ${props.width}px
    ` : ''}
    
  ${props.fixed ? 'color: white;' : ''}
`;

const trStyles = props => css`
  border-bottom: 1px solid #e8e8e8;

  // &:hover td {
  //   background: #e6f7ff;
  // }

  a {
    text-decoration: none;
  }

  ${props.fixed ? `
    position: absolute;
    top: 0;
    z-index: 999;
    left: 0;
  ` : 'overflow: auto;'} 
`;

const headerStyles = css`
  background: lightgreen;
  text-align: left;
  th {
    padding: 16px;
  }
`;

const ContainerStyles = props => css`
${props.width ? `width: ${props.width}` : 'display: table;'}
position: relative;
`;

const mainContainerStyle = props => css`
  overflow: auto;
  ${props.width ? `width: ${props.width}` : ''}
`;


export default ({
  mainContainerStyle,
  ContainerStyles,
  headerStyles,
  trStyles,
  tdStyles,
  tableStyle,
})