import styled from "styled-components";

export const ButtonWrapper = styled.button`
    border: 1px solid ${({theme}) => theme.colors.second};
    padding: ${({theme}) => theme.sizes.sm} ${({theme}) => theme.sizes.smx};

    cursor: pointer;
    transition: 0.3s ease-in-out;

    :hover {
        background-color: ${({theme}) => theme.colors.third} !important;
        border-color: ${({theme}) => theme.colors.third} !important;
    }
`;
