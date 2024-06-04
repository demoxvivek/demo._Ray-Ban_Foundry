import React, { useState } from 'react';
import { MdKeyboardArrowUp,MdKeyboardArrowDown } from "react-icons/md";
import styled from 'styled-components';
import SocialMedia from './SocialMedia';
import NewsLetter from './NewsLetter';
import CountryList from './CountryDropUpper';
import HowCanHelp from './HowCanHelpDropper';
import ContactForm from './ContactUs';

const FooterContainer = styled.div`
  background-color: #f8f8f8;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Container = styled.div`
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const CountrySelector = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  flex: 1;
`;

const CountryFlag = styled.img`
  width: 30px;
  height: 20px;
  margin-right: 10px;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex: 2;
  @media(max-width: 480px){
    flex-direction: column;
  }
`;

const LinkItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  a {
    text-decoration: none;
    color: black;
    margin-right: 5px;

    &:hover {
      text-decoration: underline;
    }
  }

  svg {
    font-size: 18px;
  }
`;

const SecondSection = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
`;

const MiddleSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
  @media(max-width: 600px){
    flex-direction: column;
  }
`;

const Guarantee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex: 1;
  margin-bottom: 10px;
`;

const GuaranteeIcon = styled.span`
  margin-right: 10px;
`;

const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  flex: 1;
`;

const PaymentIcon = styled.img`
  width: 50px;
  height: 30px;
`;

const BottomSection = styled.div`
  padding: 20px 0;
  
`;

const Disclaimer = styled.p`
  font-size: 12px;
  color: #666;
  margin: 20px auto;
  line-height: 1.4;
  text-align: start;
 
`;

const Copyright = styled.p`
  background-color: #666;
  color: white;
  padding: 10px 0;
  margin: 0;
  @media(max-width: 480px){
    font-size: 10px;
  }
`;

const Footer = () => {
  const [countryShow,SetCountryShow] = useState(false)
  const [helpPage,setHelpPage] = useState(false)
  const [contactForm,SetContactForm] = useState(false)
  
  return (
    <FooterContainer>
      <NewsLetter />
      <SocialMedia />
      <CountryList show={countryShow}/>
      <HowCanHelp show={helpPage}/>
      <ContactForm show={contactForm} fn={SetContactForm}/>
      <Container>
        <TopSection>
          <Links >
            <LinkItem onClick={()=>{SetCountryShow(!countryShow); setHelpPage(false);SetContactForm(false);}}>
                <CountryFlag src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India Flag" />
              <p>INDIA</p>
              {countryShow?<MdKeyboardArrowDown/>:<MdKeyboardArrowUp />}
            </LinkItem>
            <LinkItem onClick={()=>{setHelpPage(!helpPage); SetCountryShow(false);SetContactForm(false);}}>
              <p>HOW CAN WE HELP</p>
              {helpPage?<MdKeyboardArrowDown/>:<MdKeyboardArrowUp />}
            </LinkItem>
            <LinkItem onClick={()=>{SetContactForm(!contactForm); SetCountryShow(false);setHelpPage(false);}}>
              <p>CONTACT US</p>
              {contactForm?<MdKeyboardArrowDown/>:<MdKeyboardArrowUp />}
            </LinkItem>
            <LinkItem>
              <a href="#">ORDER STATUS INQUIRY? - CLICK HERE!</a>
            </LinkItem>
          </Links>

        </TopSection>
        <SecondSection>
          <Links style={{  justifyContent:' flex-end'}}>
            <LinkItem>
              <a href="#">STORE LOCATOR</a>
            </LinkItem>
            <LinkItem>
              <a href="#">RETURNS / REFUND POLICY</a>
            </LinkItem>
            <LinkItem>
              <a href="#">LEGAL</a>
            </LinkItem>
            <LinkItem>
              <a href="#">CORPORATE SALE</a>
            </LinkItem>
          </Links>
        </SecondSection>
        <MiddleSection>
          <Guarantee>
            <GuaranteeIcon>🔒</GuaranteeIcon>
            <span>WE GUARANTEE EVERY TRANSACTION IS 100% SECURE</span>
          </Guarantee>
          <PaymentMethods>
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" />
            <PaymentIcon src="https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-bluebox-solid.svg" alt="American Express" />
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Maestro_2016.svg/1200px-Maestro_2016.svg.png" alt="Maestro" />
            <PaymentIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/PayU.svg/1200px-PayU.svg.png" alt="PayU" />
            <PaymentIcon src="https://w7.pngwing.com/pngs/827/101/png-transparent-paytm-logo-online-payment-brand-flat-icon.png" alt="Paytm" />
          </PaymentMethods>
        </MiddleSection>
        <BottomSection>
          <Disclaimer>
            Pictures and images on this website are for illustration purposes only. No qualities or characteristics of the products depicted herein could be inferred from the relevant pictures. Certain activities undertaken by Luxottica Group S.p.A. may be licensed under US Patent No. 6,624,843. Copyright ©2024 Luxottica Group S.p.A. - All Rights Reserved
          </Disclaimer>
        </BottomSection>
      </Container>
      <Copyright>
        Copyright ©2024 Luxottica Group. All Rights Reserved
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
