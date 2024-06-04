import React from 'react';
import styled from 'styled-components';
import { RxCross1 } from "react-icons/rx";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding:5px;
    justify-content: space-between;
  }
`;

const FormSection = styled.div`
  width: 50%;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 0;
  }
`;

const InfoSection = styled.div`
  width: 30%;
  @media (max-width: 768px) {
    width: 90%;
    margin-top: 50px;
  }
`;

const Title = styled.h2`
  font-size: 1em;
  font-weight: bold;
  text-align: start;
  margin-bottom: 15px;
  color: #333;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  text-align: start;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
  height: 100px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #333;
  }
`;

const InfoText = styled.p`
  margin: 10px 0;
  text-align: start;
  color: #666;
`;

const ContactForm = ({show,fn}) => {
  return (
    <div style={{backgroundColor: '#f5f5f5',display:`${show?'block':'none'}`}}>
        <div onClick={()=>fn(!show)} style={{display:'flex',justifyContent:'end',marginTop:'20px',marginRight:'20px',fontSize:'28px'}}><RxCross1/></div>
    <Container>
      <FormSection>
        <Title>SEND US A MESSAGE</Title>
        <form>
          <Label htmlFor="name">Name <span style={{ color: 'red' }}>*</span></Label>
          <Input type="text" id="name" name="name" required />

          <Label htmlFor="email">E-mail address <span style={{ color: 'red' }}>*</span></Label>
          <Input type="email" id="email" name="email" required />

          <Label htmlFor="phone">Phone Number</Label>
          <Input type="tel" id="phone" name="phone" />

          <Label htmlFor="message">Your message</Label>
          <InfoText>Maximum 1000 characters (1000 remaining)</InfoText>
          <TextArea id="message" name="message" maxLength="1000"></TextArea>

          <SubmitButton type="submit">SUBMIT</SubmitButton>
        </form>
      </FormSection>

      <InfoSection>
        <Title>CUSTOMER CARE HOURS</Title>
        <InfoText>Monday to Friday __________ 11:00 am to 6:00 pm (IST)</InfoText>
        
        <Title>Contact Ray-Ban</Title>
        <InfoText>Order & Return __________ 080-4463 3989</InfoText>
        <InfoText>Email id __________ support@india.ray-ban.com</InfoText>
      </InfoSection>
    </Container>
    </div>
  );
};

export default ContactForm;
