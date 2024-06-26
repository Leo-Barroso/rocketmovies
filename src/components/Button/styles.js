import styled from "styled-components";
export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.colors.title};
    color: ${({theme}) => theme.colors.colorButton};
    height: 56px;
    border: 0;
    border-radius: 10px;
    margin-top: 10px;
    padding: 0 16px;
    font-weight: 500;
    &:disabled {
        opacity: 0.5;
    }
`