import React, { useEffect, useState } from 'react';
import { api } from '../../API/Api';
import styled from 'styled-components';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

const SignUpContainer = styled(Container)`
    padding: 50px 0;
`;

const StyledForm = styled(Form)`
    padding: 40px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
    color: #007bff;
    &:hover {
        color: #0056b3;
        text-decoration: underline;
    }
`;
const Title = styled.h2`
    margin-bottom: 20px;
    text-align: center;
`;

const SignUp = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        email: '',
        phoneNumber: '',
        gst: '',
        pan_card: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/api/sellers', formData);
            alert('User created successfully!');
            setIsSignUpSuccessful(true);
        } catch (err) {
            setError(err.response ? err.response.data : 'An error occurred');
        }
    };

    // Navigate to the SignIn page after a successful sign-up
   useEffect(() => {
        if (isSignUpSuccessful) {
            navigate('/signin');
        }
    }, [isSignUpSuccessful, navigate]);

    return (
        <SignUpContainer>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <StyledForm onSubmit={handleSubmit}>
                        <Title>Sign Up</Title>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="businessName"
                                value={formData.businessName}
                                onChange={handleChange}
                                placeholder="Business Name"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="bankAccountNumber"
                                value={formData.bankAccountNumber}
                                onChange={handleChange}
                                placeholder="Bank account number"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="gst"
                                value={formData.gst}
                                onChange={handleChange}
                                placeholder="GST"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                name="pan_card"
                                value={formData.pan_card}
                                onChange={handleChange}
                                placeholder="PAN Card"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Sign Up
                        </Button>

                        {error && <Alert severity="error" className="mt-3">{error}</Alert>}
                        <div className="mt-3 text-center">
                            Already have an account? <StyledLink to="/signin">Sign In</StyledLink>
                        </div>
                    </StyledForm>
                </Col>
            </Row>
        </SignUpContainer>
    );
};

export default SignUp;

