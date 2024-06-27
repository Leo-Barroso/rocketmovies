import styled from "styled-components";
import backgroundImg from "../../assets/img.png"
export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

`
export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > h1 {
        font-size: 48px;
        color: ${({theme}) => theme.colors.title};
    }
    > p {
        font-size: 14px;
        color: ${({theme}) => theme.colors.subtitle};
    }
    > h2 {
        font-size: 24px;
        margin-top: 48px;
        margin-bottom: 48px;
        color: ${({theme}) => theme.colors.callToAction};
    }
    > a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 42px;
        text-align: center;
        color: ${({theme}) => theme.colors.title};
    }
`
export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`