import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../API/Api';
import styled from 'styled-components';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignInContainer = styled(Container)`
    padding: 50px 0;
`;

const StyledForm = styled(Form)`
    padding: 40px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
    margin-bottom: 20px;
    text-align: center;
`;


const Adminlogin = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/api/users/signin', formData);
            alert('Signed in successfully!');
            navigate(`/adminDashboard`);
        } catch (err) {
            setError(err.response ? err.response.data : 'An error occurred');
        }
    };

    return (
        <SignInContainer>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <StyledForm onSubmit={handleSubmit}>
                        <Title>Admin Sign In</Title>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter email"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
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
                            Sign In
                        </Button>

                        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

                       
                    </StyledForm>
                </Col>
            </Row>
        </SignInContainer>
    );
};

export default Adminlogin;