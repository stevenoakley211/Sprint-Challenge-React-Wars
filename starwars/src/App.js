import React,{useEffect,useState} from 'react';
import './App.css';
import axios from "axios"
import CharacterCard from './components/CharacterCard'
import styled from "styled-components"
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [people,getPeople] = useState([])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const FlexDiv = styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
  `
const getInformation = () =>{ 
  axios
    .get('https://swapi.co/api/people/')
    .then(response =>{
      getPeople(response.data.results)
    })
}
useEffect(getInformation,[])
console.log(people)
  return (
    <FlexDiv className="App">
      {people.map(item =>{
        return <CharacterCard name={item.name}gender={item.gender}height={item.height} />
      })}
    </FlexDiv>
  );
}

export default App;
