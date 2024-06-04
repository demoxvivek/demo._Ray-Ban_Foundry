import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCutomerOrdersNew } from '../../../action/cart';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'

const Container = styled.div`
  display: flex;
  padding: 20px;
  margin: 0 100px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Sidebar = styled.div`
  width: 100%;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 200px;
    margin-bottom: 0;
  }
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarItem = styled.li`
  padding: 10px 0;
  cursor: pointer;

  &.active {
    font-weight: bold;
    border-left: 4px solid red;
    padding-left: 6px;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding-left: 0;

  @media (min-width: 768px) {
    padding-left: 20px;
  }
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  margin-top: 0;
  font-size: 23px;
  font-weight: bold;
`;

const SubHeading = styled.h3`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: bold;
`;

const Paragraph = styled.p`
  margin: 5px 0;
`;

const Links = styled.p`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Profile() {
  const [data,setData] = useState({})

  useEffect(() => {
    const storedState = localStorage.getItem('state');
    if (storedState) {
      try {
        const parsedState = JSON.parse(storedState);
        if (parsedState && parsedState.auth && parsedState.auth.user && parsedState.auth.user.user) {
          setData(parsedState.auth.user.user);
        }
      } catch (error) {
        console.error('Error parsing JSON from localStorage', error);
      }
    }
  }, []);

  
 
  return (
    <Container>
      <Sidebar>
        <SidebarList>
          <SidebarItem className="active">My Account</SidebarItem>
          <SidebarItem><Link to="/account/order"> My Orders</Link></SidebarItem>
          <SidebarItem>My Wish List</SidebarItem>
          <SidebarItem>Address Book</SidebarItem>
          <SidebarItem>Store Credit & Refunds</SidebarItem>
          <SidebarItem>My RMA Requests</SidebarItem>
        </SidebarList>
      </Sidebar>
      <Content>
        <Heading>MY ACCOUNT</Heading>
        <Section>
          <SubHeading>Account Information</SubHeading>
        </Section>
        <hr style={{margin:'30px 0'}} />
        <Section>
          <SubHeading>Contact Information</SubHeading>
          <Paragraph><b>Name :</b> {data?.name}</Paragraph>
          <Paragraph><b>Email :</b> {data?.email}</Paragraph>
          <Paragraph><b>Phone Number :</b> {data?.phoneNumber}</Paragraph>
        </Section>
        <Section>
          <SubHeading>Address Book <Link href="#">Manage Addresses</Link></SubHeading>
        </Section>
        <hr style={{margin:'30px 0'}} />
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <Section >
          <SubHeading>Default Billing Address</SubHeading>
          <Paragraph>You have not set a default billing address.</Paragraph>
          <Links href="#">EDIT ADDRESS</Links>
        </Section>
        <Section>
          <SubHeading>Default Shipping Address</SubHeading>
          <Paragraph>You have not set a default shipping address.</Paragraph>
          <Links href="#">EDIT ADDRESS</Links>
        </Section>
        </div>
      </Content>
    </Container>
  );
}
