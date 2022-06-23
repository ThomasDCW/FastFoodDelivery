import styled from 'styled-components';

export default styled.header`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3em;
  letter-spacing: 0.2em;

  ul {
    width: 70%;
    display: flex;
    justify-content: space-around;
    a {
      text-decoration: none;
      cursor: pointer;
      background: linear-gradient(to top, #ff922c, #ff922c, transparent 10%)
        no-repeat left bottom / 0 100%;
      transition: background-size 0.5s;
    }

    a:hover {
      background-size: 100% 100%;
    }
  }
`;
