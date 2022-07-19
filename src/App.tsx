import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import {Reset} from "styled-reset";
import {ReactQueryDevtools} from "react-query/devtools"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Open+Sans:wght@300;400&display=swap');
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${(props)=> props.theme.bgColor};
    color:${(props)=> props.theme.textColor} ;
  }
  * {
    box-sizing:border-box ;
  }
  a {
    text-decoration: none ;
    color : inherit;
  }
`

function App() {
  return (   
  <>
  <Reset/>
  <GlobalStyle/>
  <Router/> 
  <ReactQueryDevtools initialIsOpen={true}/>
  </>
  )
};

export default App;