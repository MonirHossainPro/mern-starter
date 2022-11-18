import styled from 'styled-components';

const Wrapper = styled.div`
  border: 3px solid #eee;
  border-radius: 50%;
  border-top: 3px solid #000;
  width: 50px;
  height: 50px;
  -webkit-animation: spin 0.5s linear infinite; /* Safari */
  animation: spin 0.5s linear infinite;
  margin: 30px auto;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Wrapper;
