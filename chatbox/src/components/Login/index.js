import { React } from "react";
import { Row, Col, Button, Typography } from "antd";
import { auth } from "../../firebase/config";
import { FacebookAuthProvider , signInWithPopup } from 'firebase/auth'

const {Title} = Typography;

const fbProvider = new FacebookAuthProvider();

export default function Login(){
    
    const handleFbLogin = () => {
        signInWithPopup(auth,fbProvider)
        .then( (re) => {
            console.log(re);
        })
        .catch( (error)=>{
            console.log(error.message);
        })
    }

    return (
        <div>
            <Row justify="center" style={{ height: 800 }}>
                <Col span={8}>
                    <Title style={{textAlign: 'center'}} level={3} >Fun chat</Title>
                    <Button style={{width: '100%', marginBottom: 5 }}>
                        Sign in Google
                    </Button>
                    <Button style={{width: '100%'}} onClick={handleFbLogin}>
                        Sign in Facebook
                    </Button>
                </Col>
            </Row>
        </div>
    )
}