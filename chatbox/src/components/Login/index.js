import { React } from "react";
import { Row, Col, Button, Typography } from "antd";
import { auth, db } from "../../firebase/config";
import { FacebookAuthProvider , signInWithPopup, signInAnonymously, getAdditionalUserInfo  } from 'firebase/auth'
import { collection, doc, setDoc, addDoc, getDocs } from "firebase/firestore";
import { addDocument } from "../../firebase/services";

const {Title} = Typography;


export default function Login(){
    const handleFbLogin = () => {
        const fbProvider = new FacebookAuthProvider();
        signInWithPopup(auth,fbProvider)
        .then( (re) => {
            console.log(re);
            const details = getAdditionalUserInfo(re)
            if(details.isNewUser){
                addDocument('users', {
                    displayName: re.user.displayName,
                    email: re.user.email,
                    photoURL: re.user.photoURL,
                    uid: re.user.uid,
                    providerId: re.user.providerId
                })
                    .then(()=>{
                        console.log('success');
                    })
            }
            // getDocs(result)
            //     .then((snapshot) => {
            //         let user = [];
                    
            //         snapshot.docs.forEach(doc => {
            //             user.push({...doc.data(),id: doc.id})
            //         })
            //         console.log(user);
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     })
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