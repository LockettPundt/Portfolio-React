import styled from 'styled-components';


export const AppBox = styled.div`
  display: flex;
  
`;


export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(125, 187, 145);
  width: 100%;
  padding: 1.5rem;
`;

export const SocialIcons = styled.div`
  font-size: 2rem;
  padding-left: 1.5rem;
  -webkit-animation: fadein 3.3s;
  -moz-animation: fadein 3.3s;
  -ms-animation: fadein 3.3s;
  -o-animation: fadein 3.3s;
  animation: fadein 3.3s;
  
  a {
  font-family: 'Lato' , sans-serif;
  text-decoration: none;
  color: rgb(38, 38, 39);
  transition: 0.3s ease-in-out;
  }
  
  i:hover {
  color: #ffc89f;
  transform: scale(1.3);
}

`;

export const SideBarDiv = styled.div`
  background-color: rgb(125, 187, 145);
  height: auto;
`;
