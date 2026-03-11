import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Arial", "Helvetica", sans-serif; 
        background-color: #0D1117;
        color: #E1F6FC; 
        width: 100%; 
        height: auto; 

        button, input {
            border: none; 
            outline: none; 
        }

        a {
            text-decoration: none;
        }

        li {
            list-style: none;
        }
    }
`;
