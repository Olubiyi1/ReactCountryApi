import { useState } from "react";
import styled from "styled-components";


const Header = () => {  
  return ( 
        <Head>
          <h1>
            Where in the World?
          </h1>
        </Head>
     );
}
 
export default Header;

const Head = styled.div`
/* background-color: lightgray; */
/* height: 60px; */
margin-bottom: 20px;
/* width: 100%; */
z-index: 1;
display: flex;
justify-content: space-between;
align-items: center;

button{
  border: none;
  background-color: transparent;
}
`
