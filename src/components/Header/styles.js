import styled from "styled-components";
export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 116px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #948F99;
    padding: 24px 123px;
    > h1 {
        color: ${({theme}) => theme.colors.title};
    }
`
export const Profile = styled.div`
    display: flex;
    align-items: center;
    > img {
        width: 64px;
        height: 64px;
        border: 50%;
    }
    > div {
        display: flex;
        flex-direction: column;
        margin-right: 9px;
        text-align: right;
        line-height: 20px;
        strong {
            font-size: 14px;
            color: #F4EDE8;
        }
        span {
            font-size: 12px;
        }
    }
`