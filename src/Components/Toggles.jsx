import { useState } from "react";
// import styled from "styled-components";

const Toggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    // const changeTheme = ()=>{
    //     document.body.classList.Toggle("darkMode");
    //     setDarkMode(!darkMode)
    // }


    return ( 
       
           <button>
            {darkMode ? "light mode" : "dark mode"}
            </button>

     );
}
 
export default Toggle;

// const Div = styled.div`
//     background-color: transparent;
// `