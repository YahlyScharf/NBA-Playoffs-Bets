import React, { useState, useContext } from 'react';
import Team from './Team';
import SrTeam from './SecondRoundTeam';
import TrTeam from './ThirdRoundTeam';
import FinalsTeam from './Finals';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Toast from 'react-bootstrap/Toast'


function Bracket() {

    const [show,setShow] = useState(false);
    const authContext = useContext(AuthContext);
    const {
        userInfo
    } = authContext.authState;

    const [redirect, setRedirect] = useState(false);

    const [teams1, setTeams1] = useState([
        { name: "Jazz", value: 0 },
        { name: "Warriors", value: 0 },
        { name: "Clippers", value: 0 },
        { name: "Mavericks", value: 0 }
    ]);

    const [teams2, setTeams2] = useState([
        { name: "Nuggets", value: 0 },
        { name: "Trail Blazers", value: 0 },
        { name: "Lakers", value: 0 },
        { name: "Suns", value: 0 }
    ]);

    const [teams3, setTeams3] = useState([
        { name: "76ers", value: 0 },
        { name: "Wizards", value: 0 },
        { name: "Knicks", value: 0 },
        { name: "Hawks", value: 0 }
    ]);

    const [teams4, setTeams4] = useState([
        { name: "Bucks", value: 0 },
        { name: "Heat", value: 0 },
        { name: "Celtics", value: 0 },
        { name: "Nets", value: 0 }
    ]);
    const [srTeams1, setSrTeams1] = useState([]);
    const [srTeams2, setSrTeams2] = useState([]);
    const [srTeams3, setSrTeams3] = useState([]);
    const [srTeams4, setSrTeams4] = useState([]);

    const [trTeams1, setTrTeams1] = useState([]);
    const [trTeams2, setTrTeams2] = useState([]);
    const [trTeams3, setTrTeams3] = useState([]);
    const [trTeams4, setTrTeams4] = useState([]);

    const finalsSetUpE = [...trTeams1, ...trTeams2];
    const finalsSetUpW = [...trTeams3, ...trTeams4];

    const [finals1, setFinals1] = useState([]);
    const [finals2, setFinals2] = useState([]);

    function changeHandleR1(e) {
        const { value, name } = e.target
        const number = name;
        parseInt(number);

        if (number === "0") {
            teams1[0].value = parseInt(value);
        } else if (number === "1") {
            teams1[1].value = parseInt(value);
        } else if (number === "2") {
            teams1[2].value = parseInt(value);
        } else if (number === "3") {
            teams1[3].value = parseInt(value);
        } else if (number === "4") {
            teams2[0].value = parseInt(value);
        } else if (number === "5") {
            teams2[1].value = parseInt(value);
        } else if (number === "6") {
            teams2[2].value = parseInt(value);
        } else if (number === "7") {
            teams2[3].value = parseInt(value);
        } else if (number === "8") {
            teams3[0].value = parseInt(value);
        } else if (number === "9") {
            teams3[1].value = parseInt(value);
        } else if (number === "10") {
            teams3[2].value = parseInt(value);
        } else if (number === "11") {
            teams3[3].value = parseInt(value);
        } else if (number === "12") {
            teams4[0].value = parseInt(value);
        } else if (number === "13") {
            teams4[1].value = parseInt(value);
        } else if (number === "14") {
            teams4[2].value = parseInt(value);
        } else if (number === "15") {
            teams4[3].value = parseInt(value);
        }

        if (number === '0' || number === '1' || number === '2' || number === '3') {
            setSrTeams1(() => {
                return teams1.filter(team => team.value === 4);
            });
        }
        if (number === '4' || number === '5' || number === '6' || number === '7') {
            setSrTeams2(() => {
                return teams2.filter(team => team.value === 4);
            });

        }
        if (number === '8' || number === '9' || number === '10' || number === '11') {
            setSrTeams3(() => {
                return teams3.filter(team => team.value === 4);
            });
        }
        if (number === '12' || number === '13' || number === '14' || number === '15') {
            setSrTeams4(() => {
                return teams4.filter(team => team.value === 4);
            });
        }

    }



    function changeHandleR2(e) {
        const { value, name } = e.target
        const number = name;
        parseInt(number);

        if (number === "0") {
            srTeams1[0].value = +value + 4;
        } else if (number === "1") {
            srTeams1[1].value = +value + 4;
        } else if (number === "2") {
            srTeams2[0].value = +value + 4;
        } else if (number === "3") {
            srTeams2[1].value = +value + 4;
        } else if (number === "4") {
            srTeams3[0].value = +value + 4;
        } else if (number === "5") {
            srTeams3[1].value = +value + 4;
        } else if (number === "6") {
            srTeams4[0].value = +value + 4;
        } else if (number === "7") {
            srTeams4[1].value = +value + 4;
        }

        if (number === "0" || number === "1") {
            setTrTeams1(() => {
                return srTeams1.filter(team => team.value === 8);
            })
        }

        if (number === "2" || number === "3") {
            setTrTeams2(() => {
                return srTeams2.filter(team => team.value === 8);
            })
        }

        if (number === "4" || number === "5") {
            setTrTeams3(() => {
                return srTeams3.filter(team => team.value === 8);
            })
        }

        if (number === "6" || number === "7") {
            setTrTeams4(() => {
                return srTeams4.filter(team => team.value === 8);
            })
        }

    }


    function changeHandleR3(e) {
        const { value, name } = e.target

        if (name === "0") {
            trTeams1[0].value = +value + 8;
        } else if (name === "1") {
            trTeams2[0].value = +value + 8;
        } else if (name === "2") {
            trTeams3[0].value = +value + 8;

        } else if (name === "3") {
            trTeams4[0].value = +value + 8;
        }

        if (name === '0' || name === '1') {

            setFinals1(() => {
                return finalsSetUpE.filter(team => team.value === 12)
            })
        }

        if (name === '2' || name === '3') {

            setFinals2(() => {
                return finalsSetUpW.filter(team => team.value === 12)
            })
        }


    }

    function changeHandleR4(e) {
        const { value, name } = e.target

        if (name === "0") {
            finals1[0].value = +value + 12;
        } else if (name === "1") {
            finals2[0].value = +value + 12;
        }
    }


    console.log(teams1, teams2, teams3, teams4, srTeams1, srTeams2, srTeams3, srTeams4, trTeams1, trTeams2, finals1, finals2);

    function clickHandle(e) {

        const teams = [...teams1, ...teams2, ...teams3, ...teams4];
        const srTeams = [...srTeams1, ...srTeams2, ...srTeams3, ...srTeams4];
        const trTeams = [...trTeams1, ...trTeams2, ...trTeams3, ...trTeams4];
        const finals = [...finals1, ...finals2]

        const teamsCheck = teams.map(team => {
            if (team.value >= 0) {
                return true
            } else {
                return false
            }
        });

        const srTeamsCheck = srTeams.map(team => {
            if (team.value >= 4) {
                return true
            } else {
                return false
            }
        });

        const trTeamsCheck = trTeams.map(team => {
            if (team.value >= 8) {
                return true
            } else {
                return false
            }
        });

        const FinalsCheck = finals.map(team => {
            if (team.value >= 12) {
                return true
            } else {
                return false
            }
        });

    
            axios.post("https://nba-playoffbets.herokuapp.com/bet", { teams, srTeams, trTeams, finals, userInfo })
            setRedirect(true);
      

    }

    return (

        <>


            {redirect && <Redirect to="/..." />}


            <div>
                <Toast className="toast" onClose={() => setShow(false)} show={show} delay={4000} autohide>

                    <Toast.Body>Opps! Something went wrong... Please recheck your bet.</Toast.Body>
                </Toast>

                <div id="bracket">
                    <form>
                        <div id='first-round-w'>
                            <ul className="b-ul">
                                <Team team={teams1[0].name} value={teams1[0].value} index="0" changeHandle={changeHandleR1} />
                                <Team team={teams1[1].name} value={teams1[1].value} index="1" changeHandle={changeHandleR1} />
                            </ul>
                            <ul className="b-ul">
                                <Team team={teams1[2].name} value={teams1[2].value} index="2" changeHandle={changeHandleR1} />
                                <Team team={teams1[3].name} value={teams1[3].value} index="3" changeHandle={changeHandleR1} />
                            </ul>
                            <ul className="b-ul">
                                <Team team={teams2[0].name} value={teams2[0].value} index="4" changeHandle={changeHandleR1} />
                                <Team team={teams2[1].name} value={teams2[1].value} index="5" changeHandle={changeHandleR1} />
                            </ul>
                            <ul className="b-ul">
                                <Team team={teams2[2].name} value={teams2[2].value} index="6" changeHandle={changeHandleR1} />
                                <Team team={teams2[3].name} value={teams2[3].value} index="7" changeHandle={changeHandleR1} />
                            </ul>
                        </div>
                        <div id="second-round-w">
                            <ul className="b-ul">
                                <li className="b-li">{srTeams1[0] ? <SrTeam team={srTeams1[0].name} value={srTeams1[0].value} index="0" changeHandle={changeHandleR2} /> : "-"} </li>
                                <li className="b-li">{srTeams1[1] ? <SrTeam team={srTeams1[1].name} value={srTeams1[1].value} index="1" changeHandle={changeHandleR2} /> : "-"}</li>
                            </ul>
                            <br />
                            <br />
                            <br />
                            <ul className="b-ul">
                                <li className="b-li">{srTeams2[0] ? <SrTeam team={srTeams2[0].name} value={srTeams2[0].value} index="2" changeHandle={changeHandleR2} /> : "-"}</li>
                                <li className="b-li">{srTeams2[1] ? <SrTeam team={srTeams2[1].name} value={srTeams2[1].value} index="3" changeHandle={changeHandleR2} /> : "-"}</li>
                            </ul>
                        </div>


                        <div id="third-round-w">
                            <ul className="b-ul">
                                <li className="b-li">{trTeams1[0] ? <TrTeam team={trTeams1[0].name} value={trTeams1[0].value} index="0" changeHandle={changeHandleR3} /> : "-"}</li>
                                <li className="b-li">{trTeams2[0] ? <TrTeam team={trTeams2[0].name} value={trTeams2[0].value} index="1" changeHandle={changeHandleR3} /> : "-"}</li>
                            </ul>
                        </div>

                        <div id="finals">
                            <ul className="b-ul">
                                <h3 className="f-h3">The Finals</h3>
                                <li className="b-li">{finals1[0] ? <FinalsTeam team={finals1[0].name} value={finals1[0].value} index="0" changeHandle={changeHandleR4} /> : "-"}</li>
                                <li className="b-li">{finals2[0] ? <FinalsTeam team={finals2[0].name} value={finals2[0].value} index="1" changeHandle={changeHandleR4} /> : "-"}</li>
                            </ul>

                            {finals1.length === 1 && finals2.length === 1 && trTeams1.length === 1 && trTeams2.length === 1 && trTeams3.length === 1 && trTeams4.length === 1 && srTeams1.length === 2 && srTeams2.length === 2 && srTeams3.length === 2 && srTeams4.length === 2 ?
                                <button onClick={clickHandle} type="submit" className="btn btn-success btn-lg bet-btn"> Submit <FontAwesomeIcon icon={faCheckCircle} /></button> : null
                            }

                        </div>



                        <div id="third-round-e">
                            <ul className="b-ul">
                                <li className="b-li">{trTeams3[0] ? <TrTeam team={trTeams3[0].name} value={trTeams3[0].value} index="2" changeHandle={changeHandleR3} /> : "-"}</li>
                                <li className="b-li">{trTeams4[0] ? <TrTeam team={trTeams4[0].name} value={trTeams4[0].value} index="3" changeHandle={changeHandleR3} /> : "-"}</li>
                            </ul>
                        </div>

                        <div id="second-round-w">
                            <ul className="b-ul">
                                <li className="b-li">{srTeams3[0] ? <SrTeam team={srTeams3[0].name} value={srTeams3[0].value} index="4" changeHandle={changeHandleR2} /> : "-"}</li>
                                <li className="b-li">{srTeams3[1] ? <SrTeam team={srTeams3[1].name} value={srTeams3[1].value} index="5" changeHandle={changeHandleR2} /> : "-"}</li>
                            </ul>
                            <br />
                            <br />
                            <br />
                            <ul className="b-ul">
                                <li className="b-li">{srTeams4[0] ? <SrTeam team={srTeams4[0].name} value={srTeams4[0].value} index="6" changeHandle={changeHandleR2} /> : "-"}</li>
                                <li className="b-li">{srTeams4[1] ? <SrTeam team={srTeams4[1].name} value={srTeams4[1].value} index="7" changeHandle={changeHandleR2} /> : "-"}</li>
                            </ul>
                        </div>

                        <div id='first-round-e'>
                            <ul className="b-ul">
                                <Team team={teams3[0].name} value={teams3[0].value} index="8" changeHandle={changeHandleR1} />
                                <Team team={teams3[1].name} value={teams3[1].value} index="9" changeHandle={changeHandleR1} />
                            </ul>
                            <ul className="b-ul">
                                <Team team={teams3[2].name} value={teams3[2].value} index="10" changeHandle={changeHandleR1} />
                                <Team team={teams3[3].name} value={teams3[3].value} index="11" changeHandle={changeHandleR1} />
                            </ul>
                            <ul className="b-ul">
                                <Team team={teams4[0].name} value={teams4[0].value} index="12" changeHandle={changeHandleR1} />
                                <Team team={teams4[1].name} value={teams4[1].value} index="13" changeHandle={changeHandleR1} />
                            </ul>
                            <ul className="b-ul">
                                <Team team={teams4[2].name} value={teams4[2].value} index="14" changeHandle={changeHandleR1} />
                                <Team team={teams4[3].name} value={teams4[3].value} index="15" changeHandle={changeHandleR1} />
                            </ul>
                        </div>
                    </form>
                </div>
            </div>

        </>

    );



}

export default Bracket;