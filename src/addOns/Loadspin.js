import React,{useContext,useState, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext';
import {ClipLoader } from 'react-spinners';
import axios from 'axios';

function Loading () {
    
    return (
        <ClipLoader/>
    )
     
}

export default Loading;