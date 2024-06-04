import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,  useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCustomerNew } from '../../../action/Customer';
import { login } from '../../../Redux/Auth/Action';
import { Toaster,toast } from 'react-hot-toast';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    hr{
        margin: 20px 0px ;
        display:none;
        border: 1.3px solid #e0e0e0;
    }
    @media (max-width: 600px) {
        flex-direction: column;
        hr{
            display:block;
        }
    }
`;

const LoginForm = styled.form`
    width: 50%;
    @media (max-width: 600px) {
        width: 98%;
    }
`;

const Heading = styled.h6`
    font-size: 22px;
    color: #333;
`;

const SubHeading = styled.p`
    margin-bottom: 50px;
    color: #666;
`;

const Label = styled.label`
    display: block;
    /* font-weight: bold; */
    font-size:14px;
    color: #444;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: none;
    border-bottom: ${({ showBorder }) => (showBorder ? '1px solid #ddd' : 'none')};
    border-radius: 0;
    outline: none;
    font-size: 16px;
`;

const PasswordContainer = styled.div`
    position: relative;
`;

const ShowPassword = styled.span`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #2d2e2e;
    font-size: 14px;
`;

const ForgotPassword = styled.div`
    text-align: right;
    margin-bottom: 20px;
`;

const ForgotPasswordLink = styled.a`
    color: #2d2e2e;
    text-decoration: none;
    font-size: 14px;
`;
const Button = styled.button`
    padding: 12px;
    background-color: #080808;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-left: auto; /* Aligns the button to the right */

    &:hover {
        background-color: red;
    }
`;


const Sidebar = styled.div`
    width: 35%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    @media (max-width: 600px) {
        width: 100%;
        padding:0;
        justify-content: flex-start;
    }
`;

const SidebarHeading = styled.h3`
    font-size: 14px;
    margin-bottom: 10px;
    color: #333;
    font-weight:600;
`;

const SidebarList = styled.ul`
    list-style: none;
    padding: 0;
    font-weight:600;
`;

const SidebarListItem = styled.li`
    margin-bottom: 5px;
`;

const SidebarLink = styled.a`
    color: #434445;
    text-decoration: none;
    font-size: 12px;
`;

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const navigate = useNavigate()

 // handle submit start
  
    const handleSubmit = async(event) => {
      event.preventDefault();
      const errors = {};
      if (!email) {
          errors.email = 'Email is required';
      }
      if (!password) {
          errors.password = 'Password is required';
      }
      setErrors(errors);
      const data = new FormData(event.currentTarget);
      const userData = {
        email: data.get("email"),
        password: data.get("password"),
      };

      try {
         await dispatch(login(userData,navigate,toast));
         window.location.reload();
      } catch (error) {
        console.log(error)
      }
     
    };

    useEffect(()=>{
        if(jwt){
            navigate('/')
        }
        
    },[jwt])
// handle submit end
  
//  show password start
    const handlePasswordVisibilityToggle = () => {
        setShowPassword(!showPassword);
    };

// show password end

    return (

        <Container>
            <Toaster/>
            <LoginForm onSubmit={handleSubmit}>
                <Heading>LOGIN </Heading>
                <SubHeading>Log in with your account details.</SubHeading>
                <Label htmlFor="email">E-mail address</Label>
                <Input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    showBorder={true}
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                <Label htmlFor="password">Password</Label>
                <PasswordContainer>
                    <Input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        showBorder={true}
                    />
                    <ShowPassword onClick={handlePasswordVisibilityToggle}>
                        {showPassword ? 'Hide' : 'Show'}
                    </ShowPassword>
                </PasswordContainer>
                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                <ForgotPassword>
                    <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
                </ForgotPassword>
                <Button type="submit">LOG IN</Button>

                <div style={{marginTop:'60px'}}>
                    <h3>Not a member? <Link to="/sign-up">CREATE AN ACCOUNT</Link></h3>
                </div>
            </LoginForm>
            <hr />
            <Sidebar>
                <SidebarList>
                <SidebarHeading>POPULAR LINKS</SidebarHeading>
                <hr/>
                    <SidebarListItem><SidebarLink href="#">REGISTER</SidebarLink></SidebarListItem>
                    <SidebarListItem><SidebarLink href="#">MY ORDERS</SidebarLink></SidebarListItem>
                    <SidebarListItem><SidebarLink href="#">MY RETURNS</SidebarLink></SidebarListItem>
                    <SidebarListItem><SidebarLink href="#">CHECK GIFT CARD BALANCE</SidebarLink></SidebarListItem>
                </SidebarList>
            </Sidebar>

        </Container>
    );
}

export default Login;
