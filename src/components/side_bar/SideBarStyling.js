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
  transition: 0.4s ease-in-out;
  
  @media screen and (max-width: 1050px) {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: auto;
      font-size: 0.55rem;
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
      line-height: 0rem;
    }
  }
  
  @media screen and (max-width: 430px) {
    padding: 0rem 1rem;
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
    margin: 0;
    margin-bottom: 0.35rem;
  }
  
  
  > i {
    @media screen and (max-width: 1050px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 768px) {
      /* font-size: 1.4rem; */
    }
    @media screen and (max-width: 430px) {
      font-size: 1.1rem;
    }
  }

  a {
    text-decoration: none;
    transition: 0.4s ease-in-out;
    color: ${(props) => (props.darkMode ? '#ffc89f' : 'rgb(38, 38, 39)')};
    margin-right: 0.8rem;
    
    @media screen and (max-width: 1050px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 768px) {
      margin-right: 1rem;
      /* font-size: 1.4rem; */
    }
    @media screen and (max-width: 430px) {
      
      font-size: 1.1rem;
    }
  }

  i:hover {
  color: var(--hoverPink);
  transform: scale(1.3);
  transition: 0.3s ease-in-out;
  }

`;
