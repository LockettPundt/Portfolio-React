import styled from 'styled-components';

const SkillIcons = styled.div`
  display: flex;
  font-size: 3.8rem;
  width: 90%;
  margin:  3rem auto;
  justify-content: space-between;
  
  @media screen and (max-width: 768px) {
    font-size: 2.7rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
`;


export default SkillIcons;