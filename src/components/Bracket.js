import React, { useState, useEffect} from 'react';
import Team from './Team';
import SrTeam from './SecondRoundTeam';
import TrTeam from './ThirdRoundTeam';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Bracket() {

    const [teams, setTeams] = useState([

        { name: "Lakers", value: 4 },
        { name: "Trail Blazers", value: 0 },
        { name: "Rockets", value: 4 },
        { name: "Thunder", value: 0 },
        { name: "Nuggets", value: 4 },
        { name: "Jazz", value: 0 },
        { name: "Mavricks", value: 4 },
        { name: "Clippers", value: 0 },
        { name: "Bucks", value: 4 },
        { name: "Magic", value: 0 },
        { name: "Heat", value: 4 },
        { name: "Pacers", value: 0 },
        { name: "Celtics", value: 4 },
        { name: "76ers", value: 0 },
        { name: "Nets", value: 4 },
        { name: "Raptors", value: 0 }
    ]);


    function changeHandleR1(e) {
        const { value, name } = e.target
        const number = name;
        parseInt(number);

        setTeams(pv => {
            if (number === "0") {
                return [
                    { name: pv[0].name, value: parseInt(value) },
                    { name: pv[1].name, value: pv[1].value },
                    { name: pv[2].name, value: pv[2].value },
                    { name: pv[3].name, value: pv[3].value },
                    { name: pv[4].name, value: pv[4].value },
                    { name: pv[5].name, value: pv[5].value },
                    { name: pv[6].name, value: pv[6].value },
                    { name: pv[7].name, value: pv[7].value },
                    { name: pv[8].name, value: pv[8].value },
                    { name: pv[9].name, value: pv[9].value },
                    { name: pv[10].name, value: pv[10].value },
                    { name: pv[11].name, value: pv[11].value },
                    { name: pv[12].name, value: pv[12].value },
                    { name: pv[13].name, value: pv[13].value },
                    { name: pv[14].name, value: pv[14].value },
                    { name: pv[15].name, value: pv[15].value }
                ]
            } else if (number === "1") {
                return [
                    { name: pv[0].name, value: pv[0].value },
                    { name: pv[1].name, value: parseInt(value) },
                    { name: pv[2].name, value: pv[2].value },
                    { name: pv[3].name, value: pv[3].value },
                    { name: pv[4].name, value: pv[4].value },
                    { name: pv[5].name, value: pv[5].value },
                    { name: pv[6].name, value: pv[6].value },
                    { name: pv[7].name, value: pv[7].value },
                    { name: pv[8].name, value: pv[8].value },
                    { name: pv[9].name, value: pv[9].value },
                    { name: pv[10].name, value: pv[10].value },
                    { name: pv[11].name, value: pv[11].value },
                    { name: pv[12].name, value: pv[12].value },
                    { name: pv[13].name, value: pv[13].value },
                    { name: pv[14].name, value: pv[14].value },
                    { name: pv[15].name, value: pv[15].value }
                ]
            } else if (number === "2") {
                return [
                    { name: pv[0].name, value: pv[0].value },
                    { name: pv[1].name, value: pv[1].value },
                    { name: pv[2].name, value: parseInt(value) },
                    { name: pv[3].name, value: pv[3].value },
                    { name: pv[4].name, value: pv[4].value },
                    { name: pv[5].name, value: pv[5].value },
                    { name: pv[6].name, value: pv[6].value },
                    { name: pv[7].name, value: pv[7].value },
                    { name: pv[8].name, value: pv[8].value },
                    { name: pv[9].name, value: pv[9].value },
                    { name: pv[10].name, value: pv[10].value },
                    { name: pv[11].name, value: pv[11].value },
                    { name: pv[12].name, value: pv[12].value },
                    { name: pv[13].name, value: pv[13].value },
                    { name: pv[14].name, value: pv[14].value },
                    { name: pv[15].name, value: pv[15].value }
                ]
            } else if (number === "3") {
                return [
                    { name: pv[0].name, value: pv[0].value },
                    { name: pv[1].name, value: pv[1].value },
                    { name: pv[2].name, value: pv[2].value },
                    { name: pv[3].name, value: parseInt(value) },
                    { name: pv[4].name, value: pv[4].value },
                    { name: pv[5].name, value: pv[5].value },
                    { name: pv[6].name, value: pv[6].value },
                    { name: pv[7].name, value: pv[7].value },
                    { name: pv[8].name, value: pv[8].value },
                    { name: pv[9].name, value: pv[9].value },
                    { name: pv[10].name, value: pv[10].value },
                    { name: pv[11].name, value: pv[11].value },
                    { name: pv[12].name, value: pv[12].value },
                    { name: pv[13].name, value: pv[13].value },
                    { name: pv[14].name, value: pv[14].value },
                    { name: pv[15].name, value: pv[15].value }
                ]
            } else if (number === "4") {
                return [
                    { name: pv[0].name, value: pv[0].value },
                    { name: pv[1].name, value: pv[1].value },
                    { name: pv[2].name, value: pv[2].value },
                    { name: pv[3].name, value: pv[3].value },
                    { name: pv[4].name, value: parseInt(value) },
                    { name: pv[5].name, value: pv[5].value },
                    { name: pv[6].name, value: pv[6].value },
                    { name: pv[7].name, value: pv[7].value },
                    { name: pv[8].name, value: pv[8].value },
                    { name: pv[9].name, value: pv[9].value },
                    { name: pv[10].name, value: pv[10].value },
                    { name: pv[11].name, value: pv[11].value },
                    { name: pv[12].name, value: pv[12].value },
                    { name: pv[13].name, value: pv[13].value },
                    { name: pv[14].name, value: pv[14].value },
                    { name: pv[15].name, value: pv[15].value }
                ]
            } else if (number === "5") {
                return [
                    { name: pv[0].name, value: pv[0].value },
                    { name: pv[1].name, value: pv[1].value },
                    { name: pv[2].name, value: pv[2].value },
                    { name: pv[3].name, value: pv[3].value },
                    { name: pv[4].name, value: pv[4].value },
                    { name: pv[5].name, value: parseInt(value) },
                    { name: pv[6].name, value: pv[6].value },
                    { name: pv[7].name, value: pv[7].value },
                    { name: pv[8].name, value: pv[8].value },
                    { name: pv[9].name, value: pv[9].value },
                    { name: pv[10].name, value: pv[10].value },
                    { name: pv[11].name, value: pv[11].value },
                    { name: pv[12].name, value: pv[12].value },
                    { name: pv[13].name, value: pv[13].value },
                    { name: pv[14].name, value: pv[14].value },
                    { name: pv[15].name, value: pv[15].value }
                ]
            } else if (number === "6") {
                return [
                    { name: pv[0].name, value: pv[0].value },
                    { name: pv[1].name, value: pv[1].value },
                    { name: pv[2].name, value: pv[2].value },
                    { name: pv[3].name, value: pv[3].value },
                    { name: pv[4].name, value: pv[4].value },
                    { name: pv[5].name, value: pv[5].value },
                    { name: pv[6].name, value: parseInt(value) },
                    { name: pv[7].name, value: pv[7].value },
                    { name: pv[8].name, value: pv[8].value },
                    { name: pv[9].name, value: pv[9].value },
                    { name: pv[10].name, value: pv[10].value },
                    { name: pv[11].name, value: pv[11].value },
                    { name: pv[12].name, value: pv[12].value },
                    { name: pv[13].name, value: pv[13].value },
                    { name: pv[14].name, value: pv[14].value },
                    { name: pv[15].name, value: pv[15].value }
                ]
            } else if (number === "7") {
                return [
                    { name: pv[0].name, value: pv[0].value },
                    { name: pv[1].name, value: pv[1].value },
                    { name: pv[2].name, value: pv[2].value },
                    { name: pv[3].name, value: pv[3].value },
                    { name: pv[4].name, value: pv[4].value },
                    { name: pv[5].name, value: pv[5].value },
                    { name: pv[6].name, value: pv[6].value },
                    { name: pv[7].name, value: parseInt(value) },
                    { name: pv[8].name, value: pv[8].value },
                    { name: pv[9].name, value: pv[9].value },
                    { name: pv[10].name, value: pv[10].value },
                    { name: pv[11].name, value: pv[11].value },
                    { name: pv[12].name, value: pv[12].value },
                    { name: pv[13].name, value: pv[13].value },
                    { name: pv[14].name, value: pv[14].value },
                    { name: pv[15].name, value: pv[15].value }
                ]
            } else if (number === "8") {
                return [
                    { name: pv[0].name, value: pv[0].value },
                    { name: pv[1].name, value: pv[1].value },
                    { name: pv[2].name, value: pv[2].value },
                    { name: pv[3].name, value: pv[3].value },
                    { name: pv[4].name, value: pv[4].value },
                    { name: pv[5].name, value: pv[5].value },
                    { name: pv[6].name, value: pv[6].value },
                    { name: pv[7].name, value: pv[7].value },
                    { name: pv[8].name, value: parseInt(value) },
                    { name: pv[9].name, value: pv[9].value },
                    { name: pv[10].name, value: pv[10].value },
                    { name: pv[11].name, value: pv[11].value },
                    { name: pv[12].name, value: pv[12].value },
                    { name: pv[13].name, value: pv[13].value },
                    { name: pv[14].name, value: pv[14].value },
                    { name: pv[15].name, value: pv[15].value }
                ]
            } else if (number === "9") {
                return [
                    { name: pv[0].name, value: pv[0].value },
                    { name: pv[1].name, value: pv[1].value },
                    { name: pv[2].name, value: pv[2].value },
                    { name: pv[3].name, value: pv[3].value },
                    { name: pv[4].name, value: pv[4].value },
                    { name: pv[5].name, value: pv[5].value },
                    { name: pv[6].name, value: pv[6].value },
                    { name: pv[7].name, value: pv[7].value },
                    { name: pv[8].name, value: pv[8].value },
                    { name: pv[9].name, value: parseInt(value) },
                    { name: pv[10].name, value: pv[10].value },
                    { name: pv[11].name, value: pv[11].value },
                    { name: pv[12].name, value: pv[12].value },
                    { name: pv[13].name, value: pv[13].value },
                    { name: pv[14].name, value: pv[14].value },
                    { name: pv[15].name, value: pv[15].value }
                ]
            } else if (number === "10") {
                return [
                    { name: pv[0].name, value: pv[0].value },
                    { name: pv[1].name, value: pv[1].value },
                    { name: pv[2].name, value: pv[2].value },
                    { name: pv[3].name, value: pv[3].value },
                    { name: pv[4].name, value: pv[4].value },
                    { name: pv[5].name, value: pv[5].value },
                    { name: pv[6].name, value: pv[6].value },
                    { name: pv[7].name, value: pv[7].value },
                    { name: pv[8].name, value: pv[8].value },
                    { name: pv[9].name, value: pv[9].value },
                    { name: pv[10].name, value: parseInt(value) },
                    { name: pv[11].name, value: pv[11].value },
                    { name: pv[12].name, value: pv[12].value },
                    { name: pv[13].name, value: pv[13].value },
                    { name: pv[14].name, value: pv[14].value },
                    { name: pv[15].name, value: pv[15].value }
                ]
            } else if (number === "11") {
                return [
                    { name: pv[0].name, value: pv[0].value },
                    { name: pv[1].name, value: pv[1].value },
                    { name: pv[2].name, value: pv[2].value },
                    { name: pv[3].name, value: pv[3].value },
                    { name: pv[4].name, value: pv[4].value },
                    { name: pv[5].name, value: pv[5].value },
                    { name: pv[6].name, value: pv[6].value },
                    { name: pv[7].name, value: pv[7].value },
                    { name: pv[8].name, value: pv[8].value },
                    { name: pv[9].name, value: pv[9].value },
                    { name: pv[10].name, value: pv[10].value },
                    { name: pv[11].name, value: parseInt(value) },
                    { name: pv[12].name, value: pv[12].value },
                    { name: pv[13].name, value: pv[13].value },
                    { name: pv[14].name, value: pv[14].value },
                    { name: pv[15].name, value: pv[15].value }
                ]
            } else if (number === "12") {
                return [
                    { name: pv[0].name, value: pv[0].value },
                    { name: pv[1].name, value: pv[1].value },
                    { name: pv[2].name, value: pv[2].value },
                    { name: pv[3].name, value: pv[3].value },
                    { name: pv[4].name, value: pv[4].value },
                    { name: pv[5].name, value: pv[5].value },
                    { name: pv[6].name, value: pv[6].value },
                    { name: pv[7].name, value: pv[7].value },
                    { name: pv[8].name, value: pv[8].value },
                    { name: pv[9].name, value: pv[9].value },
                    { name: pv[10].name, value: pv[10].value },
                    { name: pv[11].name, value: pv[11].value },
                    { name: pv[12].name, value: parseInt(value) },
                    { name: pv[13].name, value: pv[13].value },
                    { name: pv[14].name, value: pv[14].value },
                    { name: pv[15].name, value: pv[15].value }
                ]
            } else if (number === "13") {
                return [
                    { name: pv[0].name, value: pv[0].value },
                    { name: pv[1].name, value: pv[1].value },
                    { name: pv[2].name, value: pv[2].value },
                    { name: pv[3].name, value: pv[3].value },
                    { name: pv[4].name, value: pv[4].value },
                    { name: pv[5].name, value: pv[5].value },
                    { name: pv[6].name, value: pv[6].value },
                    { name: pv[7].name, value: pv[7].value },
                    { name: pv[8].name, value: pv[8].value },
                    { name: pv[9].name, value: pv[9].value },
                    { name: pv[10].name, value: pv[10].value },
                    { name: pv[11].name, value: pv[11].value },
                    { name: pv[12].name, value: pv[12].value },
                    { name: pv[13].name, value: parseInt(value) },
                    { name: pv[14].name, value: pv[14].value },
                    { name: pv[15].name, value: pv[15].value }
                ]
            } else if (number === "14") {
                return [
                    { name: pv[0].name, value: pv[0].value },
                    { name: pv[1].name, value: pv[1].value },
                    { name: pv[2].name, value: pv[2].value },
                    { name: pv[3].name, value: pv[3].value },
                    { name: pv[4].name, value: pv[4].value },
                    { name: pv[5].name, value: pv[5].value },
                    { name: pv[6].name, value: pv[6].value },
                    { name: pv[7].name, value: pv[7].value },
                    { name: pv[8].name, value: pv[8].value },
                    { name: pv[9].name, value: pv[9].value },
                    { name: pv[10].name, value: pv[10].value },
                    { name: pv[11].name, value: pv[11].value },
                    { name: pv[12].name, value: pv[12].value },
                    { name: pv[13].name, value: pv[13].value },
                    { name: pv[14].name, value: parseInt(value) },
                    { name: pv[15].name, value: pv[15].value }
                ]
            } else if (number === "15") {
                return [
                    { name: pv[0].name, value: pv[0].value },
                    { name: pv[1].name, value: pv[1].value },
                    { name: pv[2].name, value: pv[2].value },
                    { name: pv[3].name, value: pv[3].value },
                    { name: pv[4].name, value: pv[4].value },
                    { name: pv[5].name, value: pv[5].value },
                    { name: pv[6].name, value: pv[6].value },
                    { name: pv[7].name, value: pv[7].value },
                    { name: pv[8].name, value: pv[8].value },
                    { name: pv[9].name, value: pv[9].value },
                    { name: pv[10].name, value: pv[10].value },
                    { name: pv[11].name, value: pv[11].value },
                    { name: pv[12].name, value: pv[12].value },
                    { name: pv[13].name, value: pv[13].value },
                    { name: pv[14].name, value: pv[14].value },
                    { name: pv[15].name, value: parseInt(value) }
                ]
            }

        })
    }

    const srTeams = teams.filter(team => team.value === 4);

    function changeHandleR2(e) {
        const { value, name } = e.target
        const number = name;
        parseInt(number);

        if (number === "0") {
            srTeams[0].value = +value + 4;
        } else if (number === "1") {
            srTeams[1].value = +value + 4;
        } else if (number === "2") {
            srTeams[2].value = +value + 4;
        } else if (number === "3") {
            srTeams[3].value = +value + 4;
        } else if (number === "4") {
            srTeams[4].value = +value + 4;
        } else if (number === "5") {
            srTeams[5].value = +value + 4;
        } else if (number === "6") {
            srTeams[6].value = +value + 4;
        } else if (number === "7") {
            srTeams[7].value = +value + 4;
        }
    }

    
    
    function Filter(round, score) {
       return round.filter(team => team.value === score);
    }

    useEffect(() => {
    trTeams.push(Filter(srTeams,8));
    console.log(trTeams);
    })

    const trTeams = []
       


    function changeHandleR3(e) {

        const { value, name } = e.target
        const number = name;
        parseInt(number);

        if (number === "0") {
            trTeams[0].value = value + 4;
        } else if (number === "1") {
            trTeams[1].value = value + 4;
        } else if (number === "2") {
            trTeams[2].value = value + 4;
        } else if (number === "3") {
            trTeams[3].value = value + 4;
        }
    }

    const finals = [];

    return (


        <div>

            <div id="bracket">
                <form>
                    <div id='first-round-w'>
                        <ul className="b-ul">
                            <Team team={teams[0].name} value={teams[0].value} index="0" changeHandle={changeHandleR1} />
                            <Team team={teams[1].name} value={teams[1].value} index="1" changeHandle={changeHandleR1} />
                        </ul>
                        <ul className="b-ul">
                            <Team team={teams[2].name} value={teams[2].value} index="2" changeHandle={changeHandleR1} />
                            <Team team={teams[3].name} value={teams[3].value} index="3" changeHandle={changeHandleR1} />
                        </ul>
                        <ul className="b-ul">
                            <Team team={teams[4].name} value={teams[4].value} index="4" changeHandle={changeHandleR1} />
                            <Team team={teams[5].name} value={teams[5].value} index="5" changeHandle={changeHandleR1} />
                        </ul>
                        <ul className="b-ul">
                            <Team team={teams[6].name} value={teams[6].value} index="6" changeHandle={changeHandleR1} />
                            <Team team={teams[7].name} value={teams[7].value} index="7" changeHandle={changeHandleR1} />
                        </ul>
                    </div>
                    <div id="second-round-w">
                        <ul className="b-ul">
                            <li className="b-li">{srTeams[0] ? <SrTeam team={srTeams[0].name} value={srTeams[0].value} index="0" changeHandle={changeHandleR2} /> : "-"}</li>
                            <li className="b-li">{srTeams[1] ? <SrTeam team={srTeams[1].name} value={srTeams[1].value} index="1" changeHandle={changeHandleR2} /> : "-"}</li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <ul className="b-ul">
                            <li className="b-li">{srTeams[2] ? <SrTeam team={srTeams[2].name} value={srTeams[2].value} index="2" changeHandle={changeHandleR2} /> : "-"}</li>
                            <li className="b-li">{srTeams[3] ? <SrTeam team={srTeams[3].name} value={srTeams[3].value} index="3" changeHandle={changeHandleR2} /> : "-"}</li>
                        </ul>
                    </div>


                    <div id="third-round-w">
                        <ul className="b-ul">
                            <li className="b-li">{trTeams.length === 1? <TrTeam team={trTeams[trTeams.length - 1 ][0].name} value={trTeams[trTeams.current.length - 1][0].value} index="0" changeHandle={changeHandleR3} /> : "-"}</li>
                            <li className="b-li">{trTeams[1] ? <TrTeam team={trTeams[1].name} value={trTeams[1].value} index="0" changeHandle={changeHandleR3} /> : "-"}</li>
                        </ul>
                    </div>

                    <div id="finals">
                        <ul className="b-ul">
                            <h3 className="f-h3">The Finals</h3>
                            <li className="b-li">{finals[0] ? finals[0].name : "-"}</li>
                            <li className="b-li">{finals[1] ? finals[1].name : "-"}</li>
                        </ul>
                        <button type="submit" className="btn btn-success btn-lg btn-primary bet-btn"> Submit <FontAwesomeIcon icon={faCheckCircle} /></button>
                    </div>



                    <div id="third-round-e">
                        <ul className="b-ul">
                            <li className="b-li">{trTeams[2] ? <TrTeam team={trTeams[2].name} value={trTeams[2].value} index="2" changeHandle={changeHandleR3} /> : "-"}</li>
                            <li className="b-li">{trTeams[3] ? <TrTeam team={trTeams[3].name} value={trTeams[3].value} index="3" changeHandle={changeHandleR3} /> : "-"}</li>
                        </ul>
                    </div>

                    <div id="second-round-w">
                        <ul className="b-ul">
                            <li className="b-li">{srTeams[4] ? <SrTeam team={srTeams[4].name} value={srTeams[4].value} index="4" changeHandle={changeHandleR2} /> : "-"}</li>
                            <li className="b-li">{srTeams[5] ? <SrTeam team={srTeams[5].name} value={srTeams[5].value} index="5" changeHandle={changeHandleR2} /> : "-"}</li>
                        </ul>
                        <br />
                        <br />
                        <br />
                        <ul className="b-ul">
                            <li className="b-li">{srTeams[6] ? <SrTeam team={srTeams[6].name} value={srTeams[6].value} index="6" changeHandle={changeHandleR2} /> : "-"}</li>
                            <li className="b-li">{srTeams[7] ? <SrTeam team={srTeams[7].name} value={srTeams[7].value} index="7" changeHandle={changeHandleR2} /> : "-"}</li>
                        </ul>
                    </div>

                    <div id='first-round-e'>
                        <ul className="b-ul">
                            <Team team={teams[8].name} value={teams[8].value} index="8" changeHandle={changeHandleR1} />
                            <Team team={teams[9].name} value={teams[9].value} index="9" changeHandle={changeHandleR1} />
                        </ul>
                        <ul className="b-ul">
                            <Team team={teams[10].name} value={teams[10].value} index="10" changeHandle={changeHandleR1} />
                            <Team team={teams[11].name} value={teams[11].value} index="11" changeHandle={changeHandleR1} />
                        </ul>
                        <ul className="b-ul">
                            <Team team={teams[12].name} value={teams[12].value} index="12" changeHandle={changeHandleR1} />
                            <Team team={teams[13].name} value={teams[13].value} index="13" changeHandle={changeHandleR1} />
                        </ul>
                        <ul className="b-ul">
                            <Team team={teams[14].name} value={teams[14].value} index="14" changeHandle={changeHandleR1} />
                            <Team team={teams[15].name} value={teams[15].value} index="15" changeHandle={changeHandleR1} />
                        </ul>
                    </div>
                </form>
            </div>
        </div>



    );



}

export default Bracket;