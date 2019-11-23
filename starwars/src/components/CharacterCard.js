import React from "react";
import styled from "styled-components"
const CharacterCard = props => {
    const StyledH1 = styled.h1 `
    text-decoration: underline overline red;
    
    `
    const Card = styled.div`
    background-color:white;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    transition: 0.3s;
    border-radius: 5px;
    width:500px;
    padding:20px;
    margin: 20px;
    font-family:'Helvetica';
    `
    // const Image = styled.img `
    //     max-width:100%;
    //     border-radius: 5px;
    // `
    // const Paragraph = styled.p `
    //     font-size:1.25em;
    // `
    return(
        <Card>
            <StyledH1>{props.name}</StyledH1>
            <p>Gender:{props.gender}</p>
            <p>Height:{props.height}</p>
            
        </Card>
    )
}
export default CharacterCard