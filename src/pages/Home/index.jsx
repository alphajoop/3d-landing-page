import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Drink from '../../assets/drink.svg';
import colors from '../../utils/style/colors';
import Facebook from '../../assets/Facebook.svg';
import Twitter from '../../assets/Twitter.svg';
import Instagram from '../../assets/Instagram.svg';
import Behance from '../../assets/Behance.svg';
import Dribble from '../../assets/Dribble.svg';

const Main = styled.div`
  overflow: hidden;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: -1;
`;

const StyledContainerFluid = styled(Container)`
  padding: 20px;
`;

const H2 = styled.h2`
  color: ${colors.primaryColor};
  font-size: 3.5625rem;
  font-weight: 800;
`;

const P = styled.p`
  color: ${colors.bodyColor};
  font-size: 1.25rem;
  font-weight: 600;
`;

const StyledInputWithButton = styled.div`
  display: flex;
  align-items: center;
  border: none;
  font-size: 0.875rem;
  border-radius: 1.875rem;
  overflow: hidden;
  width: 100%;
  height: 3.64131rem;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  input {
    color: ${colors.primaryColor};
    padding: 0.5rem;
    width: calc(100% - 30px);
    border: none;
    outline: none;

    &::placeholder {
      font-size: 0.875rem;
      line-height: 2.25rem;
      color: #a0a4a8;
    }
  }

  button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    color: white;
    border: none;
    width: 9.5625rem;
    height: 2.5625rem;
    border-radius: 1.875rem;
    background: linear-gradient(88deg, #ec74e7 -45.12%, #8468f5 74.37%);

    svg {
      margin-left: 0.5rem;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
`;

const SocialIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

function Home() {
  return (
    <Main>
      <StyledContainerFluid>
        <Row border="primary">
          <Col md={6}>
            <H2>
              A massive library of free 3D{' '}
              <span style={{ color: `${colors.secondaryColor}` }}>shapes</span>
            </H2>
            <P>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries
            </P>
            <StyledInputWithButton>
              <input type="text" placeholder="Your email address" />
              <button>
                Download
                <span>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.2045 0.139091L0.669134 8.39106C0.0704262 8.72794 0.0941905 9.22746 0.723562 9.4963L2.57718 10.2904C3.20272 10.5559 4.15176 10.4107 4.68531 9.96013L12.746 3.08225C13.2757 2.62837 13.3332 2.69641 12.8717 3.23078L6.49983 10.6148C6.03757 11.1459 6.17633 11.7972 6.80416 12.0636L7.02111 12.1532C7.64971 12.4171 8.67618 12.8577 9.29942 13.1365L11.3592 14.0409C11.9856 14.3164 12.4946 14.5462 12.4976 14.5495C12.4976 14.5529 12.5007 14.5653 12.5038 14.5653C12.5061 14.5686 12.6533 13.9919 12.8296 13.2883L15.968 0.8029C16.1451 0.100093 15.8001 -0.198621 15.2045 0.139091Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.96152 12.9442L5.74114 12.2462C5.20459 11.9421 4.94749 12.2994 5.17105 13.0441C5.17105 13.0441 6.30399 16.8511 6.27308 16.9876C6.23955 17.1195 7.36196 14.7259 7.36196 14.7259C7.67824 14.0536 7.49807 13.2484 6.96152 12.9442Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </StyledInputWithButton>
          </Col>
          <Col md={6}>
            <img
              src={Drink}
              alt="drink"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
          <Col md={6}>
            <SocialIcons>
              <SocialIcon src={Facebook} alt="Facebook" />
              <SocialIcon src={Twitter} alt="Facebook" />
              <SocialIcon src={Instagram} alt="Facebook" />
              <SocialIcon src={Behance} alt="Facebook" />
              <SocialIcon src={Dribble} alt="Facebook" />
            </SocialIcons>
          </Col>
        </Row>
      </StyledContainerFluid>
    </Main>
  );
}

export default Home;
