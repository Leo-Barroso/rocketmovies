import styled from "styled-components";
export const Container = styled.div`
    width: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > input {
        width: 100%;
        height: 56px;
        background-color: #948F99;
        border: none;
        border-radius: 10px;
        padding: 19px 24px;
        color: white;  
        &::placeholder {
            color: white;  
        }
    > sgv {
        margin-left: 16px;
    }
}
`