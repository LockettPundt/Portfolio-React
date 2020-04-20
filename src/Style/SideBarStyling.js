import styled from 'styled-components';

export const SideBarDiv = styled.div`
  background-color: rgb(125, 187, 145);
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* min-width: 360px; */
  width: 25%;
  line-height: 0.8rem;
  font-size: 1.45rem;
  height: 100%;
  margin: auto 0rem;
  overflow: hidden;
  @media screen and (max-width: 600px) {
      position: fixed;
      width: 100%;
      height: auto;
      font-size: 2.7rem;
      padding: 2rem;
    }
`;


export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(125, 187, 145);
  width: auto;
  padding: 0rem 1.5rem;

  .indent {
    padding-left: 2.8rem;
  }

`;

export const SocialIcons = styled.div`
  font-size: 2.3rem;
  padding-left: 1.5rem;


  a {
    font-family: 'Lato' , sans-serif;
    text-decoration: none;
    color: rgb(38, 38, 39);
    margin-right: 0.5rem;
    
    @media screen and (max-width: 600px) {
      margin-right: 2rem;
    }

}

  i:hover {
  color: #ffc89f;
  transform: scale(1.3);
  transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 600px) {
      font-size: 5.7rem;
      
    }
`;
