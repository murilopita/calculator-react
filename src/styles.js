import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    
`

export const Header = styled.div`
    width: 100%;
    text-align: center;
    margin: 50px;
    

`

export const Title = styled.h1`
    font-size: 30px;
    color: orange;
    text-shadow: 2px 2px 1px rgb(150, 150, 200);

`

export const Content = styled.div`
    background-color: #000000;
    width: 270px;
    height: auto;
    

    border-radius: 25px;
    box-shadow: 2px 2px 5px orange;
    filter: drop-shadow(0 0 0.75rem blue);
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5.5px 7.5px;

`
export const FooterContainer = styled.div`
    width: 100%;
    height: auto;
    
`

export const FooterContent = styled.p`
    color: #000000;
    font-size: 14px;
    text-align: center;
    padding-bottom: 10px;
`

