import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;

    background-color: #353535;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;

    &:hover{
        filter: drop-shadow(0 0 0.75rem orange);
    }

    &:active {
        color: #FFFFFF;
        background-color: orange;
    }
    
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
`