// import React, { useState } from 'react';
// import { api } from '../../API/Api';

// const SignUp = () => {
//     const [formData, setFormData] = useState({
//         businessName: '',
//         email: '',
//         phoneNumber: '',
//         gst: '',
//         pan_card: '',
//         password: ''
//     });

//     const [error, setError] = useState('');

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
//             const response = await api.post('/api/sellers', formData);
//             alert('User created successfully!');
//             console.log(response.data);
//         } catch (err) {
//             setError(err.response ? err.response.data : 'An error occurred');
//         }
//     };

//     return (
//         <div className="signup-container">
//             <h2>Sign Up</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="businessName"
//                     value={formData.businessName}
//                     onChange={handleChange}
//                     placeholder="Business Name"
//                     required
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Email"
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     placeholder="Phone Number"
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="gst"
//                     value={formData.gst}
//                     onChange={handleChange}
//                     placeholder="GST"
//                     required
//                 />
//                 <input
//                     type="text"
//                     name="pan_card"
//                     value={formData.pan_card}
//                     onChange={handleChange}
//                     placeholder="PAN Card"
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
//                 <button type="submit">Sign Up</button>
//             </form>
//             {error && <p className="error">{error}</p>}
//         </div>
//     );
// };

// export default SignUp;

import React, { useState } from 'react';
import { api } from '../../API/Api';
import styled from 'styled-components';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpContainer = styled(Container)`
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
            const response = await api.post('/api/sellers', formData);
            alert('User created successfully!');
            console.log(response.data);
        } catch (err) {
            setError(err.response ? err.response.data : 'An error occurred');
        }
    };

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

                        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                    </StyledForm>
                </Col>
            </Row>
        </SignUpContainer>
    );
};

export default SignUp;
