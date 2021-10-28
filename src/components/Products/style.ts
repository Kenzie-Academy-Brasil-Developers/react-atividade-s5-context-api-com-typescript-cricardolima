import styled, {css} from "styled-components";

interface ProductsContainerProps{
    toogleCart: boolean;
}

export const ProductsContainer = styled.div<ProductsContainerProps>`
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: whitesmoke;
    margin: 15px 0px;
    border-radius: 10px;

    p {
        width: 78%;
        text-align: center;
    }

    img {
        width: 150px;
        height: 300px;
    }

    button {
        border-radius: 5px;
        border: none;
        width: 200px;
        height: 30px;
        font-weight: 800;
        background-color: green;
        margin-bottom: 10px;

        ${(props) => 
            props.toogleCart &&
            css `
                background-color: red;
                color: white;
            `
        }
    }
`