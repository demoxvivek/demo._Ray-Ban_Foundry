import React from 'react';
import styled from 'styled-components';

// Styled Components
const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack sections vertically on small screens */
  padding: 20px;
  background-color: #f5f5f5;
  text-align: start;

  @media (min-width: 768px) {
    flex-direction: row; /* Display sections side by side on larger screens */
    justify-content: space-between;
  }
`;

const Section = styled.div`
  flex: 1; /* Each section takes equal space */
  margin-bottom: 20px;

  h3 {
    font-weight: bold;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 5px;
  }
`;

const HowCanHelp = ({ show }) => {
  return (
    <div style={{ display: `${show ? 'block' : 'none'}` }}>
      <WidgetContainer>
        <Section>
          <h3>RETURNS, CANCELLATIONS & EXCHANGE POLICIES</h3>
          <ul>
            <li>Shipping Information</li>
            <li>Returns / Refund Policy</li>
            <li>Corporate Sales</li>
            <li>Check Gift Card Balance</li>
            <li>Order Return</li>
          </ul>
        </Section>
        <Section>
          <h3>SHOPPING ONLINE</h3>
          <ul>
            <li>Accepted Payment Methods</li>
            <li>Sales Tax And Proof Of Purchase</li>
            <li>FAQs</li>
            <li>Size Guide</li>
            <li>Face Guide</li>
          </ul>
        </Section>
        <Section>
          <h3>PRIVACY & SECURITY</h3>
          <ul>
            <li>Internet Privacy Policy</li>
          </ul>
        </Section>
        <Section>
          <h3>LEGAL</h3>
          <ul>
            <li>Terms Of Use</li>
            <li>Terms Of Sale</li>
            <li>Copyright Information</li>
            <li>Gift Card Terms Of Use</li>
          </ul>
        </Section>
      </WidgetContainer>
    </div>
  );
};

export default HowCanHelp;
