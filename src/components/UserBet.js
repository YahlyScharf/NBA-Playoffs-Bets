import React, { useEffect, useState } from 'react';
import { AuthContext } from './../context/AuthContext';
import { Redirect, useParams } from 'react-router-dom';
import axios from 'axios'
import UserLoading from "../addOns/UserLoading";
import UserBracket from './UserBetLand';

function UserBet() {

    const { id } = useParams();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        axios.post("https://nba-playoffbets.herokuapp.com/user", { id })
            .then(res => {
                setUserInfo(res.data)
            })
    });


    function redirectOnEmptyBetArray() {
        if (userInfo.hasBet === false || userInfo.bet.finals[0].value === 0 || userInfo.bet.finals[1].value === 0 ) {
            return <Redirect to="/standings" />
        } else {
            return (
                <UserBracket userInfo={userInfo} />

            )
        }
    }

    return (
        <>
            {userInfo ? redirectOnEmptyBetArray() : <UserLoading />}

        </>
    );




}

export default UserBet;