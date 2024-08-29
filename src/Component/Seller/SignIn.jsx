// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { api } from '../../API/Api';

// const SignIn = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // Adjust the URL based on your actual API endpoint
//             const response = await api.post('/api/sellers/signin', formData);
//             alert('Signed in successfully!');
//             navigate('/products'); 
//             console.log(response.data);
//         } catch (err) {
//             setError(err.response ? err.response.data : 'An error occurred');
//         }
//     };

//     return (
//         <div className="signin-container">
//             <h2>Sign In</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Email"
//                     required
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="Password"
//                     required
//                 />
//                 <button type="submit">Sign In</button>
//             </form>
//             {error && <p className="error">{error}</p>}
//             <p>
//                 Don't have an account? <Link to="/signup">Sign Up</Link>
//             </p>
//         </div>
//     );
// };

// export default SignIn;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

const StyledLink = styled(Link)`
    color: #007bff;
    &:hover {
        color: #0056b3;
        text-decoration: underline;
    }
`;

const SignIn = () => {
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
            const response = await api.post('/api/sellers/signin', formData);
            const seller = response.data.seller.id;
            alert('Signed in successfully!');
            navigate(`/products/${seller}`);
        } catch (err) {
            setError(err.response ? err.response.data : 'An error occurred');
        }
    };

    return (
        <SignInContainer>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <StyledForm onSubmit={handleSubmit}>
                        <Title>Sign In</Title>
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

                        <div className="mt-3 text-center">
                            Don't have an account? <StyledLink to="/signup">Sign Up</StyledLink>
                        </div>
                    </StyledForm>
                </Col>
            </Row>
        </SignInContainer>
    );
};

export default SignIn;