import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  input {
    height: 3em;
    background: rgba(255, 249, 240, 0.1);
    color: white;
    border-radius: 30px;
    border: none;
    padding-left: 1em;
    ::placeholder {
      font-size: 1.2em;
      letter-spacing: 0.2em;
    }
  }
`;
