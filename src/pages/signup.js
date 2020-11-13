import React from 'react'
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

import BASE_URL from '../utils/utils'
const axios = require('axios')

const public_url = axios.create()

public_url.defaults.baseURL = BASE_URL
// axios.defaults.headers.post['Authorization'] = 'Basic MmY4MDBlNWZlOTljNDg1ZGIyNmQ1ZGUzN2Y4ODYwNWY6NTFlYTU1MThlZmFkNGMwMzk1M2U5Mjc3MzczMmM0MDI='
// axios.default.headers = 'Access-Control-Allow-Origin: *'
// public_url.defaults.headers.post['Content-Type'] = 'text/plain';

const onSubmit = e => {
    e.preventDefault()
    console.log('Here is click')
    axios({
        method: 'post',
        url: BASE_URL + '/dev/v1/project',
        headers: {
            Authorization: 'Basic MmY4MDBlNWZlOTljNDg1ZGIyNmQ1ZGUzN2Y4ODYwNWY6NTFlYTU1MThlZmFkNGMwMzk1M2U5Mjc3MzczMmM0MDI='
        }, 
        data: {
            "name": "Test three",
            "enable_sign_key": true
        }
      })
    // public_url.post('/dev/v1/project', 
    // {
    //     "name": "Test three",
    //     "enable_sign_key": true
    // }, {
    //     headers: {
    //         Authorization: 'Basic MmY4MDBlNWZlOTljNDg1ZGIyNmQ1ZGUzN2Y4ODYwNWY6NTFlYTU1MThlZmFkNGMwMzk1M2U5Mjc3MzczMmM0MDI=',
    //     }
    // })
    .then(res => console.log('response ', res)).catch(err => console.log('err ', err ))
    // axios.post('https://jsonplaceholder.typicode.com/posts',  {
    //     "title": "Title for test",
    //     "body": "This is body",
    //     "userId": '2'
    // }, {
    //     headers: {
    //         // Authorization: 'Basic MmY4MDBlNWZlOTljNDg1ZGIyNmQ1ZGUzN2Y4ODYwNWY6NTFlYTU1MThlZmFkNGMwMzk1M2U5Mjc3MzczMmM0MDI='
    //         'Access-Control-Allow-Origin': '*',
    //     }
    // }
    // ).then(res => console.log('response ', res)).catch(err => console.log('err ', err ))
}

const SignUp = (props) => {
    return (
        <div>
            <h2 className="text-center">Register</h2>
            <Row className="justify-content-center">
                <Col md="6" >
                    <Form>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" placeholder="Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Create Password" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword">Confirm Password</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Passowrd" />
                        </FormGroup>
                        <Button color="success"  onClick={onSubmit} >Register</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}


export default SignUp