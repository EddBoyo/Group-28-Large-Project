import React, {Component, useState } from 'react';
import {useParams}  from "react-router-dom";
import './GeneralSignup.css';
import axios from "axios"; 

function Activation() {
    var firstName;
    var lastName;
    var schoolName;
    var bioInfo;

    let {token}  = useParams();
    axios.post(`http://localhost:5000/auth/email-activate/`, {token});
   
    const [message, setMessage] = useState('');
    
    const generalCont = async event =>
    {
        event.preventDefault();
        /* for now loops back to signin*/
        window.location.href = '/CourseSetupPage';
    };  
    
    return (
        <div id="GeneralSignupdiv">
            <form onSubmit={generalCont} id="genFormID">
                <span id="firstNameTitle"></span>
                <br />
                <input type="text" id="firstName" placeholder = "First Name" ref={ (c) => firstName = c} />
                <br />
                <span id="lastNameTitle"></span>
                <br />
                <input type="text" id="lastName" placeholder = "Last Name" ref={ (c) => lastName = c} />
                <br />
                <span id="SchoolNametitle"></span>
                <br />
                <input type="text" id="schoolName" placeholder = "Last Name" ref={ (c) => schoolName = c} />
                <br />
                <span id="BioTitle"></span>
                <br />
                <textarea id="bioText" placeholder = "Bio, tell us a bit about your self" ref= { (c) => bioInfo = c}></textarea>
                <br />
                <input type="submit" id="genSubmit" class="buttons" value="Next" onClick={generalCont} />
            </form>
            <span id="generalSignResult">{message}</span>
        </div>
    );
};

export default Activation;