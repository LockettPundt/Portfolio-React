import styled from 'styled-components';

export const SideBarDiv = styled.div`
  background-color: ${(props) => (props.darkMode ? 'rgb(38, 38, 39)' : 'rgb(125, 187, 145)')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 351px;
  line-height: 0.5rem;
  font-size: 1.45rem;
  color: ${(props) => (props.darkMode ? '#ffc89f' : 'rgb(38, 38, 39)')};
  height: 100%;
  margin: auto 0rem;
  overflow: hidden;
  transition: 0.4s ease-in-out;
  
  
  
  @media screen and (max-width: 991px) {
    font-size: 0.9rem;
    min-width: 260px;
  }
  
  @media screen and (max-width: 800px) {
    min-width: 240px;
  }
  
  @media screen and (max-width: 600px) {
      position: fixed;
      width: 100%;
      height: auto;
      font-size: 1rem;
    }
`;


export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(green);
  padding: 0rem 1.5rem;
  .indent {
    padding-left: 2.8rem;
  }
  
  @media screen and (max-width: 600px) {
    padding: 0.5rem 1rem 0.1rem 1rem;
    line-height: 0.1rem;
  }

`;

export const SocialIcons = styled.div`
  font-size: 2.6rem;
  padding-left: 1.7rem;
  margin: 1rem 0;
  
  @media screen and (max-width: 600px) {
    padding: 0rem 1rem;
  }
  
  > i {
    @media screen and (max-width: 975px) {
      font-size: 1.6rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 1.6rem;
    }
  }

  a {
    text-decoration: none;
    transition: 0.4s ease-in-out;
    color: ${(props) => (props.darkMode ? '#ffc89f' : 'rgb(38, 38, 39)')};
    margin-right: 0.8rem;
    
    @media screen and (max-width: 975px) {
      font-size: 1.6rem;
    }
    @media screen and (max-width: 600px) {
      margin-right: 1rem;
      font-size: 1.6rem;
    }
  }

}

  i:hover {
  color: var(--hoverPink);
  transform: scale(1.3);
  transition: 0.3s ease-in-out;
  }

`;
