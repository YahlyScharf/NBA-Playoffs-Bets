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
        if (userInfo.bet.teams.length === 0 || userInfo.bet.srTeams.length === 0 || userInfo.bet.trTeams.length === 0 || userInfo.bet.finals.length === 0) {
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