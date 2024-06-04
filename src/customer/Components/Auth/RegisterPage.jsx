import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { register } from '../../../Redux/Auth/Action';
import { Toaster } from 'react-hot-toast';

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
    margin-bottom: 20px;
`;

const SubHeading = styled.p`
    margin-bottom: 50px;
    color: #666;
`;

const Label = styled.label`
    display: block;
    /* font-weight: bold; */
    margin-top: 20px;
    font-size:14px;
    color: #444;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 5px;
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
        background-color: #080808;
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

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch()

    const handlePasswordVisibilityToggle = () => {
        setShowPassword(!showPassword);
    };

// handle submit start

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Basic validation
        const errors = {};
        if (!firstName) {
            errors.firstName = 'First Name is required';
        }
        if (!lastName) {
            errors.lastName = 'Last Name is required';
        }
        if (!phoneNumber) {
            errors.phoneNumber = 'Phone Number is required';
        }
        if (!email) {
            errors.email = 'Email is required';
        }
        if (!password) {
            errors.password = 'Password is required';
        }

        setErrors(errors);
        // Submit logic...
        const data = new FormData(e.currentTarget);
        const userData = {
            firstName: data.get("first_name"),
            lastName: data.get("last_name"),
            phoneNumber: data.get("phone_number"),
            email: data.get("email"),
            password: data.get("password")
        };

        try {
            await dispatch(register(userData))
        } catch (error) {

        }
    };
// handle submit end

    return (

        <Container>
            <Toaster />
            <LoginForm onSubmit={handleSubmit}>
                <Heading>CREATE ACCOUNT</Heading>

                <Label htmlFor="first_name">First Name</Label>
                <Input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    showBorder={true}
                />
                {errors.firstName && <span style={{ color: 'red', fontSize: '10px' }}>{errors.firstName}</span>}

                <Label htmlFor="last_name">Last Name</Label>
                <Input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    showBorder={true}
                />
                {errors.lastName && <span style={{ color: 'red', fontSize: '10px' }}>{errors.lastName}</span>}

                <Label htmlFor="phone_number">Phone Number</Label>
                <PasswordContainer>
                    <Input

                        id="phone_number"
                        name="phone_number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        showBorder={true}
                    />
                    {errors.phoneNumber && <span style={{ color: 'red', fontSize: '10px' }}>{errors.phoneNumber}</span>}
                </PasswordContainer>


                <Label htmlFor="email">E-mail address</Label>
                <Input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    showBorder={true}
                />
                {errors.email && <span style={{ color: 'red', fontSize: '10px' }}>{errors.email}</span>}

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
                    {errors.password && <span style={{ color: 'red', fontSize: '10px' }}>{errors.password}</span>}
                </PasswordContainer>

                <ForgotPassword>
                    <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
                </ForgotPassword>

                <Button type="submit">CREATE ACCOUNT</Button>

                <div style={{ marginTop: '60px' }}>
                    <h3>Not a member? <span>Already a member? LOGIN</span></h3>
                </div>
            </LoginForm>
            <hr />
            <Sidebar>
                <SidebarList>
                    <SidebarHeading>POPULAR LINKS</SidebarHeading>
                    <hr style={{ color: "black" }} />
                    <SidebarListItem><SidebarLink href="#">REGISTER</SidebarLink></SidebarListItem>
                    <SidebarListItem><SidebarLink href="#">MY ORDERS</SidebarLink></SidebarListItem>
                    <SidebarListItem><SidebarLink href="#">MY RETURNS</SidebarLink></SidebarListItem>
                    <SidebarListItem><SidebarLink href="#">CHECK GIFT CARD BALANCE</SidebarLink></SidebarListItem>
                </SidebarList>
            </Sidebar>
        </Container>
    );
}

export default RegisterPage;
