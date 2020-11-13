import Axios from 'axios';
import React from 'react'
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import BASE_URL from '../utils/utils'
const axios = require('axios')

const public_url = axios.create()

public_url.defaults.baseURL = BASE_URL
// axios.defaults.headers.post['Authorization'] = 'Basic MmY4MDBlNWZlOTljNDg1ZGIyNmQ1ZGUzN2Y4ODYwNWY6NTFlYTU1MThlZmFkNGMwMzk1M2U5Mjc3MzczMmM0MDI='
public_url.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



const LogIn = (props) => {
    return (
        <div>
            <h2 className="text-center">Login</h2>
            <Row className="justify-content-center">
                <Col md="6" >
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Create Password" />
                        </FormGroup>
                        <Button color="success" >Login</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}


export default LogIn