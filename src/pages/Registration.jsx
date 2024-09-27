import React, {useState} from 'react'
import Sidebar from "../component/Sidebar.jsx";
import Navbar from "../component/Navbar.jsx";
import Table from "../component/Table .jsx";
import Footer from "../component/Footer.jsx";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as Yup from "yup";

const schema = yup.object({
    firstName: Yup.string()
        .min(3, 'Le prénom doit comporter au moins 3 caractères')
        .matches(/^[a-zA-Z ]+$/, 'Les lettres seules sont demandées')
        .required('Le prénom est requis'),
    lastName: Yup.string()
        .min(3, 'Le nom doit comporter au moins 3 caractères')
        .matches(/^[a-zA-Z ]+$/, 'Les lettres seules sont demandées')
        .required('Le nom est requis'),
    classe: Yup.string()
        .oneOf(['Petite section', 'Moyenne section', 'Grande section', 'SIL', 'CP', 'CE1', 'CE2', 'CM1', 'CM2',
                'Nursery 1', 'Nursery 2', 'Class 1', 'Class 2', 'Class 3', 'Class 4','Class 5', 'Class 6'],
            'La classe de l\'enseignant est obligatoire pour continuer'),
    date: Yup.string()
        .required('La date d\'inscription est requise'),
}).required()
export default function Registration({ addStudent }) {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(formData);
        setFormData({
            name: '',
            age: '',
        });
    };

    return (
        <div className="wrapper">
            <Sidebar/>
            <div className="main-panel">
                <Navbar/>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Inscrire un élève</h4>
                                    </div>
                                    <div className="card-content">
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Nom</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Âge</label>
                                                <input
                                                    type="number"
                                                    name="age"
                                                    value={formData.age}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                                            >
                                                Inscrire l'élève
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <Table/>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
