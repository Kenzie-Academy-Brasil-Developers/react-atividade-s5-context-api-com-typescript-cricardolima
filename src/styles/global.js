import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
     * {
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
    }

    button {
        cursor:pointer;
    }

    h1 {
        text-align: center;
        font-size: 18pt;
        margin-top: 10px;
    }
`