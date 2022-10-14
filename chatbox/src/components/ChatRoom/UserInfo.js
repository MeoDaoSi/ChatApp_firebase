import React, { useEffect } from 'react'
import { Avatar, Button, Typography} from 'antd';
import styled from 'styled-components';
import {auth} from '../../firebase/config';
import {db} from '../../firebase/config';
import { collection, doc, setDoc, addDoc, getDocs } from "firebase/firestore";

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82, 38, 83);

    .username {
        color: white;
        margin-left: 5px ;
    }
`

export default function UserInfo() {

    useEffect(()=>{
        const result = collection(db,'users')
        getDocs(result)
                .then((snapshot) => {
                    let user = [];
                    
                    snapshot.docs.forEach(doc => {
                        user.push({...doc.data(),id: doc.id})
                    })
                    console.log(user);
                })
                .catch(error => {
                    console.log(error);
                })
    },[])

    return (
        <WrapperStyled>
            <div>
                <Avatar>A</Avatar>
                <Typography.Text className="username">ABC</Typography.Text>
            </div>
            <Button ghost onClick={()=>auth.signOut()}>Sign out</Button>
        </WrapperStyled>
    )
}
