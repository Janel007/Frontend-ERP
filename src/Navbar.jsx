import React from 'react'
import {IoLogOutOutline, IoSettingsOutline} from "react-icons/io5";
import {BiBell, BiChat, BiCheckCircle, BiInfoCircle, BiUser, BiXCircle} from "react-icons/bi";
import {FaExclamationCircle} from "react-icons/fa";
import {CgMoreVerticalAlt} from "react-icons/cg";
import {Link, NavLink} from "react-router-dom";
const Navbar = () => {

    return (

        <nav className="navbar navbar-default sticky shadow  bg-black">
            <div className="container-fluid">
                <div className="navbar-minimize max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <button id="minimizeSidebar" className="btn btn-fill btn-icon flex items-center space-x-3 rtl:space-x-reverse"><CgMoreVerticalAlt/>
                    </button>
                </div>
                <div className='flex flex-row-reverse my-11 mx-2'>
                    <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName"
                            className="flex items-center text-xl mx-1 pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
                            type="button">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-14 w-14 me-2 rounded-full"  src="/assets/imgs/messages-3.jpg"
                             alt="user photo"/>
                        <span className="text-violet-900 text-lg">name</span>
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    <div id="dropdownAvatarName"
                         className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div className="font-medium ">email</div>
                            <div className="truncate">role</div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                            <li>
                                <Link to='/' className="block px-4 py-2  text-gray-700 data-[focus]:bg-violet-500 data-[focus]:text-white text-start text-lg">
                                    <span className='flex items-start'><BiUser className='mx-1 text-xl'/><span className="text-sm">My Profile</span></span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/' className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-violet-500 data-[focus]:text-white">
                                    <span className='flex items-start'><IoSettingsOutline className='mx-1'/> <span className="text-sm">Account Settings</span></span>
                                </Link>
                            </li>
                        </ul>
                        <div className="py-2">
                            <Link to=''  as="button" className="block px-4 py-2 text-lg text-gray-700 data-[focus]:bg-violet-500 data-[focus]:text-white">
                                <span className='flex items-start' ><IoLogOutOutline className='mx-1'/><span className="text-sm">Sign Out</span></span>
                            </Link>
                        </div>
                    </div>
                    <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification"
                            className="relative inline-flex mx-1 items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                            type="button">
                        <BiBell aria-hidden="true" className="h-14 w-14 text-violet-900" />
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-700 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                            4
                        </div>
                    </button>
                    <div id="dropdownNotification"
                         className="z-20 hidden w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700"
                         aria-labelledby="dropdownNotificationButton">
                        <div
                            className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                            You have 4 new notifications
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-gray-700">
                            <Link to="/" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="flex-shrink-0">
                                    <FaExclamationCircle className="rounded-full w-11 h-11 text-yellow-400"/>
                                </div>
                                <div className="w-full ps-3">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">New message
                                        from <span
                                            className="font-semibold text-gray-900 dark:text-white">Jese Leos</span>:
                                        "Hey, what's up? All set for the presentation?"
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                                </div>
                            </Link>
                            <Link to="/" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="flex-shrink-0">
                                    <BiXCircle className="rounded-full w-11 h-11 text-red-600" />
                                </div>
                                <div className="w-full ps-3">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span
                                        className="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span
                                        className="font-medium text-gray-900 dark:text-white">5 others</span> started
                                        following you.
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
                                </div>
                            </Link>
                            <Link to="/" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="flex-shrink-0">
                                    <BiCheckCircle className="rounded-full w-11 h-11 text-green-600" />
                                </div>
                                <div className="w-full ps-3">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span
                                        className="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> and <span
                                        className="font-medium text-gray-900 dark:text-white">141 others</span> love
                                        your story. See it and view more stories.
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">44 minutes ago</div>
                                </div>
                            </Link>
                            <Link to="/" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="flex-shrink-0">
                                    <BiInfoCircle className="rounded-full w-11 h-11 text-blue-700" />
                                </div>
                                <div className="w-full ps-3">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span
                                        className="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> mentioned
                                        you in a comment: <span className="font-medium text-blue-500"
                                        >@bonnie.green</span> what do you say?
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">1 hour ago</div>
                                </div>
                            </Link>
                        </div>
                        <Link to="/"
                              className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                            <div className="inline-flex items-center ">
                                <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                    <path
                                        d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                </svg>
                                View all
                            </div>
                        </Link>
                    </div>
                    <button id="dropdownNotificationButton2" data-dropdown-toggle="dropdownNotification2"
                            className="relative inline-flex mx-1 items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                            type="button">
                        <BiChat aria-hidden="true" className="h-14 w-14 text-violet-900" />
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-700 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                            2
                        </div>
                    </button>
                    <div id="dropdownNotification2"
                         className="z-20 hidden w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700"
                         aria-labelledby="dropdownNotificationButton2">
                        <div
                            className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                            You have 3 new messages
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-gray-700">
                            <Link to="/" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="flex-shrink-0">
                                    <img className="rounded-full w-11 h-11" src="/assets/imgs/messages-1.jpg"
                                         alt="Jese image"/>
                                    <div
                                        className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                                        <svg className="w-2 h-2 text-white" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                            <path
                                                d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z"/>
                                            <path
                                                d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full ps-3">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">New message from <span
                                        className="font-semibold text-gray-900 dark:text-white">Jese Leos</span>: "Hey,
                                        what's up? All set for the presentation?"
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">a few moments ago</div>
                                </div>
                            </Link>
                            <Link to="/" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="flex-shrink-0">
                                    <img className="rounded-full w-11 h-11" src="/assets/imgs/messages-2.jpg"
                                         alt="Joseph image"/>
                                    <div
                                        className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
                                        <svg className="w-2 h-2 text-white" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path
                                                d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full ps-3">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span
                                        className="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span
                                        className="font-medium text-gray-900 dark:text-white">5 others</span> started
                                        following you.
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</div>
                                </div>
                            </Link>
                            <Link to="/" className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="flex-shrink-0">
                                    <img className="rounded-full w-11 h-11" src="/assets/imgs/messages-3.jpg"
                                         alt="Bonnie image"/>
                                    <div
                                        className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
                                        <svg className="w-2 h-2 text-white" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path
                                                d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="w-full ps-3">
                                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400"><span
                                        className="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> and <span
                                        className="font-medium text-gray-900 dark:text-white">141 others</span> love your
                                        story. See it and view more stories.
                                    </div>
                                    <div className="text-xs text-blue-600 dark:text-blue-500">44 minutes ago</div>
                                </div>
                            </Link>
                        </div>
                        <Link to="/"
                              className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                            <div className="inline-flex items-center ">
                                <svg className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                    <path
                                        d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                </svg>
                                View all
                            </div>
                        </Link>
                    </div>

                </div>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar bar1"></span>
                        <span className="icon-bar bar2"></span>
                        <span className="icon-bar bar3"></span>
                    </button>
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse mx-2 ">
                        <li className="inline-flex items-center">
                            <NavLink to="/"
                               className="inline-flex items-center text-xl font-medium text-violet-900 hover:text-blue-900 dark:text-gray-400 dark:hover:text-white">
                                <svg className="w-8 h-8 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-8 h-8 text-gray-400 mx-1" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <NavLink to="/"
                                   className="ms-1 text-xl font-medium text-violet-900 hover:text-blue-900 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</NavLink>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-8 h-8 text-gray-400 mx-1" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span
                                    className="ms-1 text-xl font-medium text-blue-900 md:ms-2 dark:text-gray-400">Flowbite</span>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
