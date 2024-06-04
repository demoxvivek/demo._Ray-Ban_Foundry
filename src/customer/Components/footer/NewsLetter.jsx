import React from 'react';
import styled from 'styled-components';
import { FaEnvelope } from 'react-icons/fa';

const Container = styled.div`
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 50px 100px;
  text-align: center;
  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const Icon = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  font-size: 24px;
`;

const Text = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;

  border-radius: 10px;

  /* max-width: 400px; */
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #080808;
  color: white;
  font-size: 16px;
  line-height: 1.5; /* Ensure the text is vertically centered */
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center; /* Center the text horizontally */
  white-space: nowrap; /* Prevent text from wrapping to a new line */

  &:hover {
    background-color: #222223;
  }
`

const Disclaimer = styled.p`
  font-size: 12px;
  padding: 0 20px;
  margin-top: 30px;
  color: #ccc;
  text-align: start;
  @media (max-width: 1000px) {
    padding: 0;
    margin-top: 10px;
  }
  @media (max-width: 600px) {
    padding: 0 20px;
    display: none;
  }
`;

const NewsLetter = () => {
  return (
    <Container>
      <Content>
        <IconTextWrapper>
          <Icon><FaEnvelope /></Icon>
          <Text>SIGN UP TO OUR MAILING LIST TO STAY ONE STEP AHEAD.</Text>
        </IconTextWrapper>
        <Form>
          <Input type="email" placeholder="Enter your email address" />
          <Button type="submit">SIGN UP</Button>
        </Form>
      </Content>
      <Disclaimer>
        By clicking sign up, I confirm that I am over 18 years old and I agree that my email address can be used by Luxottica S.p.A. to send me exclusive offers, contents, news and other marketing communication as a member of the Ray-Ban (visit <a href="#" style={{ color: '#fff' }}>Privacy Policy</a> for further information).
      </Disclaimer>
    </Container>
  );
};

export default NewsLetter;
