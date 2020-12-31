import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../context/AuthContext';
import axios from 'axios';


function Bracket() {
    const authContext = useContext(AuthContext);
    const {
        userInfo
    } = authContext.authState;
 
    return (

        <div>

            <div id="bracket">
                <form>
                    <div id='first-round-w'>
                        <ul className="b-ul">
                            <li className="b-li">{userInfo.bet.teams[0].name}  {userInfo.bet.teams[0].value}</li>
                            <li className="b-li">{userInfo.bet.teams[1].name}  {userInfo.bet.teams[1].value}</li>
                        </ul>
                        <ul className="b-ul">
                            <li className="b-li">{userInfo.bet.teams[2].name}  {userInfo.bet.teams[2].value}</li>
                            <li className="b-li">{userInfo.bet.teams[3].name}  {userInfo.bet.teams[3].value}</li>
                        </ul>
                        <ul className="b-ul">
                            <li className="b-li">{userInfo.bet.teams[4].name}  {userInfo.bet.teams[4].value}</li>
                            <li className="b-li">{userInfo.bet.teams[5].name}  {userInfo.bet.teams[5].value}</li>
                        </ul>
                        <ul className="b-ul">
                            <li className="b-li">{userInfo.bet.teams[6].name}  {userInfo.bet.teams[6].value}</li>
                            <li className="b-li">{userInfo.bet.teams[7].name}  {userInfo.bet.teams[7].value}</li>
                        </ul>
                    </div>
                    <div id="second-round-w">
                        <ul className="b-ul">
                            <li className="b-li">{userInfo.bet.srTeams[0].name}  {userInfo.bet.srTeams[0].value}</li>
                            <li className="b-li">{userInfo.bet.srTeams[1].name}  {userInfo.bet.srTeams[1].value}</li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <ul className="b-ul">
                            <li className="b-li">{userInfo.bet.srTeams[2].name}  {userInfo.bet.srTeams[2].value}</li>
                            <li className="b-li">{userInfo.bet.srTeams[3].name}  {userInfo.bet.srTeams[3].value}</li>
                        </ul>
                    </div>


                    <div id="third-round-w">
                        <ul className="b-ul">
                            <li className="b-li">{userInfo.bet.trTeams[0].name}  {userInfo.bet.trTeams[0].value}</li>
                            <li className="b-li">{userInfo.bet.trTeams[1].name}  {userInfo.bet.trTeams[1].value}</li>
                        </ul>
                    </div>

                    <div id="finals">
                        <ul className="b-ul">
                            <h3 className="f-h3">The Finals</h3>
                            <li className="b-li">{userInfo.bet.finals[0].name}  {userInfo.bet.finals[0].value}</li>
                            <li className="b-li">{userInfo.bet.finals[1].name}  {userInfo.bet.finals[1].value}</li>
                        </ul>
                    </div>



                    <div id="third-round-e">
                        <ul className="b-ul">
                            <li className="b-li">{userInfo.bet.trTeams[2].name} {userInfo.bet.trTeams[2].value}</li>
                            <li className="b-li">{userInfo.bet.trTeams[3].name}  {userInfo.bet.trTeams[3].value}</li>
                        </ul>
                    </div>

                    <div id="second-round-w">
                        <ul className="b-ul">
                            <li className="b-li">{userInfo.bet.srTeams[4].name}  {userInfo.bet.srTeams[4].value}</li>
                            <li className="b-li">{userInfo.bet.srTeams[5].name}  {userInfo.bet.srTeams[5].value}</li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <ul className="b-ul">
                            <li className="b-li">{userInfo.bet.srTeams[6].name}  {userInfo.bet.srTeams[6].value}</li>
                            <li className="b-li">{userInfo.bet.srTeams[7].name}  {userInfo.bet.srTeams[7].value}</li>
                        </ul>
                    </div>

                    <div id='first-round-e'>
                        <ul className="b-ul">
                            <li className="b-li">{userInfo.bet.teams[8].name}  {userInfo.bet.teams[8].value}</li>
                            <li className="b-li">{userInfo.bet.teams[9].name}  {userInfo.bet.teams[9].value}</li>
                        </ul>
                        <ul className="b-ul">
                            <li className="b-li">{userInfo.bet.teams[10].name}  {userInfo.bet.teams[10].value}</li>
                            <li className="b-li">{userInfo.bet.teams[11].name}  {userInfo.bet.teams[11].value}</li>
                        </ul>
                        <ul className="b-ul">
                            <li className="b-li">{userInfo.bet.teams[12].name}  {userInfo.bet.teams[12].value}</li>
                            <li className="b-li">{userInfo.bet.teams[13].name}  {userInfo.bet.teams[13].value}</li>
                        </ul>
                        <ul className="b-ul">
                            <li className="b-li">{userInfo.bet.teams[14].name}  {userInfo.bet.teams[14].value}</li>
                            <li className="b-li">{userInfo.bet.teams[15].name}  {userInfo.bet.teams[15].value}</li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>



    );



}

export default Bracket;