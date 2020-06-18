import styled from 'styled-components';

export const SideBarDiv = styled.div`
  background-color: ${(props) => (props.darkMode ? 'rgb(38, 38, 39)' : 'rgb(125, 187, 145)')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 300px;
  line-height: 0.5rem;
  font-size: 1.2rem;
  color: ${(props) => (props.darkMode ? '#ffc89f' : 'rgb(38, 38, 39)')};
  height: 100%;
  margin: auto 0rem;
  overflow: hidden;
  transition: 0.4s ease-in-out;
  
  
  
  /* @media screen and (max-width: 1024px) {
    font-size: 0.9rem;
    min-width: 260px;
  } */
  
  /* @media screen and (max-width: 768px) {
    font-size: 0.7rem;
    min-width: 200px;
  } */
  
  @media screen and (max-width: 1050px) {
      position: fixed;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: auto;
      font-size: 0.75rem;
      z-index: 2;
      padding-right: 1.5rem;
    }
    
  @media screen and (max-width: 430px) {
    flex-direction: column;
    justify-content: center;
    padding-right: 0rem;
  }
`;


export const NameBox = styled.div`
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  background-color: var(green);
  padding: 0rem 1.5rem;
  .indent {
    padding-left: 2.8rem;
    
    @media screen and (max-width: 1050px) {
      padding-left: 1rem;
    }
  }
  
  
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0.33rem 1rem 0.1rem 1rem;
    line-height: 0.1rem;
  }

`;

export const SocialIcons = styled.div`
  font-size: 2.1rem;
  padding-left: 1.7rem;
  margin: 0.7rem 0;
  
  @media screen and (max-width: 1050px) {
    align-self: flex-end;
    
  }
  
  
  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
  }
  @media screen and (max-width: 430px) {
    align-self: flex-start;
  }
  
  
  > i {
    @media screen and (max-width: 1050px) {
      font-size:1.6rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  a {
    text-decoration: none;
    transition: 0.4s ease-in-out;
    color: ${(props) => (props.darkMode ? '#ffc89f' : 'rgb(38, 38, 39)')};
    margin-right: 0.8rem;
    
    @media screen and (max-width: 1050px) {
      font-size: 1.6rem;
    }
    @media screen and (max-width: 768px) {
      margin-right: 1rem;
      font-size: 1.4rem;
    }
    @media screen and (max-width: 600px) {
      
      font-size: 1.5rem;
    }
  }

  i:hover {
  color: var(--hoverPink);
  transform: scale(1.3);
  transition: 0.3s ease-in-out;
  }

`;
