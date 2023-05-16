import styled from "@emotion/styled";
export const FormBox = styled.div`
 border-radius: 5px;
    width: 350px;
    background-color: lightskyblue;
    padding: 15px;
    border: 2px solid black;`;

export const FormBtn = styled.button
`   margin-top: 15px;
    background-color: beige;
    border-radius: 5px;
    cursor: pointer;
    &:focus{
            background-color: cornflowerblue;
    box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.2),
      0px 3px 3px 0px rgba(0, 0, 0, 0.14),
      0px 3px 5px 0px rgba(0, 0, 0, 0.12);
    }
    `;
