import styled from "styled-components";
export const Container = styled.div`
    width: 100%; 
    display: flex;
    align-items: center;
    background-color: #312E38;
    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;
        display: flex;
        padding: 12px;
        color: white;  
        background: transparent;
        border: 0;
        &:placeholder {
            color: white;  
        }
    }
    svg {
        margin-left: 16px;
    }
`