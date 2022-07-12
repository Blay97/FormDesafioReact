import styled from "styled-components";



export const CustomButton = styled.button`

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
cursor: pointer;
&: disabled {
    cursor: default;
    background: #808080;
}
`



