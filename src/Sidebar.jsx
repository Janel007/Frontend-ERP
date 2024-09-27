import React from 'react'
import {FaChalkboardTeacher} from "react-icons/fa";
import {IoChatbubbleOutline, IoPeopleOutline, IoPersonAddOutline} from "react-icons/io5";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    let list = document.querySelectorAll(".sidebar-wrapper .nav li");

    function activeLink() {
        list.forEach((item) => {
            item.classList.remove("hovered");
        });
        this.classList.add("hovered");
    }

    list.forEach((item) => item.addEventListener("mouseover", activeLink));

    return (
        <div className="sidebar" data-background-color="brown" >
            <div className="logo">
                <NavLink to="/" className="simple-text logo-mini ">ET</NavLink>
                <NavLink to="/" className="simple-text logo-normal">Educ Tech</NavLink>
            </div>

            <div className="sidebar-wrapper">
                <ul className="nav" id="sidebar-nav">
                    <li className="nav-item">
                        <div className="user">
                            <div className="info">
                                <div className="photo">
                                    <img src="" alt="logo" />
                                </div>

                                    <span>
                                            Noname school
                                    </span>

                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to=''>
                        <span className="icon">
                            <FaChalkboardTeacher className='ion-icon my-3 mx-4'/>
                        </span>
                            <span className="title">Gestion  Infrastructures</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/">
                        <span className="icon">
                            <IoPeopleOutline className='ion-icon my-3 mx-4'/>
                        </span>
                            <span className="title">Gestion Parents</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/">
                        <span className="icon">
                            <IoPersonAddOutline className='ion-icon my-3 mx-4'/>
                        </span>
                            <span className="title">Gestion Eleves</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/">
                        <span className="icon">
                            <FaChalkboardTeacher className='ion-icon my-3 mx-4'/>
                        </span>
                            <span className="title">Gestion  Enseignants</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/">
                        <span className="icon">
                            <FaChalkboardTeacher className='ion-icon my-3 mx-4'/>
                        </span>
                            <span className="title">Gestion  Personnels</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/">
                        <span className="icon">
                            <FaChalkboardTeacher className='ion-icon my-3 mx-4'/>
                        </span>
                            <span className="title">Gestion  Evaluations</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/">
                        <span className="icon">
                            <FaChalkboardTeacher className='ion-icon my-3 mx-4'/>
                        </span>
                            <span className="title">Gestion  Bibiotheques</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/">
                        <span className="icon">
                            <FaChalkboardTeacher className='ion-icon my-3 mx-4'/>
                        </span>
                            <span className="title">Gestion  Transports</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/">
                        <span className="icon">
                            <IoChatbubbleOutline className='ion-icon my-3 mx-4'/>
                        </span>
                            <span className="title">Messageries</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
