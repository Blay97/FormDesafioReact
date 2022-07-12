import styled from "styled-components";

export const Container = styled.div`
    background-color: #E5E5E5;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
`
export const Box = styled.div`
    background-color: white;
    border-radius: 20px;
    max-width: 600px;
    width: 30%;
    margin: 0 auto;
    display: flex;
    border: 1px solid #ccc;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 35px 50px 90px 50px;
    @media (max-width: 700px) {
        width: 100%;
        margin: 0px;
    }
        
`

export const Row = styled.div`
display: flex;
margin: 15px 0px;
justify-content: space-between;
align-items: center;

@media (max-width: 700px) {
 
    flex-wrap: wrap; 
}
`
export const Col = styled.div`
width: 70%; 
margin: 5px;
@media (max-width: 700px) {
    width: 100%;
}
`

export const ColSub = styled.div`
width: 30%;
 margin: 5px;
 @media (max-width: 700px) {
    width: 100%;
 
}

`

export const Span = styled.div`
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 12px;
color: #ff0000a6;
line-height: 16px;
`

export const FullLine = styled.div`
align-self: stretch;
flex-basis: 100%;
padding: 7% 0 0 0;
width: 100%;

`

export const Image = styled.div`
flex: 1;
margin-top: 20px;
text-align: center;
`
export const Form = styled.div`
display: flex;
justify-content: center;
color: #767676;
font-family: 'Inter', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px;
`
export const Main = styled.main`
    flex-direction: column;
`;

export const InputFull = styled.input`
box-sizing: border-box;
background: #FFFFFF;
border: 2px solid #AAAAAA;
border-radius: 4px;
flex: 1;
width 100%;
`

export const DivFullName = styled.div`
display: flex;
flex-direction: column;
margin: 5px
`
    
export const DivSuccess = styled.div`
display: flex,
justify-content: center,
align-items: "center,
`

export const DivCheck = styled.div`
display: flex; 
flex-direction: row;
align-items: center
`
export const ButtonBack = styled.button`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;
gap: 6px;
width: 81px;
height: 40px;
left: 670px;
top: 941px;
background: #0DBDBD;
border-radius: 10px;
border: 0px solid gray;
color: white;

`

;