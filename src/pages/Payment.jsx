import React, {useState} from 'react'
import Sidebar from "../component/Sidebar.jsx";
import Navbar from "../component/Navbar.jsx";
import Table from "../component/Table .jsx";
import Footer from "../component/Footer.jsx";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

/*
const schema = yup.object({
    firstName: Yup.string()
        .required('Le prénom est requis')
        .min(3, 'Le prénom doit comporter au moins 3 caractères')
        .matches(/^[a-zA-Z ]+$/, 'Les lettres seules sont demandées'),
    lastName: Yup.string()
        .required('Le nom est requis')
        .min(3, 'Le nom doit comporter au moins 3 caractères')
        .matches(/^[a-zA-Z ]+$/, 'Les lettres seules sont demandées'),
    classe: Yup.string()
        .oneOf(['Petite section', 'Moyenne section', 'Grande section', 'SIL', 'CP', 'CE1', 'CE2', 'CM1', 'CM2',
                'Nursery 1', 'Nursery 2', 'Class 1', 'Class 2', 'Class 3', 'Class 4','Class 5', 'Class 6'],
            'La classe de l\'enseignant est obligatoire pour continuer'),
    amount: Yup.string()
        .required('Insérer le budget annuel')
        .matches(/^\d+$/, 'Le budget ne se défini que par des chiffres'),
    method: Yup.string()
        .required('Le méthode doit être mentionnée'),
    date: Yup.string()
        .required('La date d\'inscription est requise'),
}).required()
*/
export default function Payment({ students }) {

    /*
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => {
        console.log(data) || alert('Vos données ont été validées avec succès')
    }
    */

    const [paymentData, setPaymentData] = useState({
        student: '',
        amount: '',
    });

    // Gérer le changement des entrées du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentData({ ...paymentData, [name]: value });
    };

    // Gérer la soumission du formulaire de paiement
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!students.some((student) => student.name === paymentData.student)) {
            alert('Veuillez inscrire cet élève avant de procéder au paiement.');
            return;
        }
        alert(`Paiement de ${paymentData.amount} pour ${paymentData.student} effectué avec succès !`);
        setPaymentData({
            student: '',
            amount: '',
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
                                        <h4 className="card-title">Faire un paiement</h4>
                                    </div>
                                    <div className="card-content">
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Élève</label>
                                                <select
                                                    name="student"
                                                    value={paymentData.student}
                                                    onChange={handleChange}
                                                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                                                >
                                                    <option value="">Sélectionnez un élève</option>
                                                    {students.map((student, index) => (
                                                        <option key={index} value={student.name}>
                                                            {student.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Montant</label>
                                                <input
                                                    type="number"
                                                    name="amount"
                                                    value={paymentData.amount}
                                                    onChange={handleChange}
                                                    required
                                                    className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
                                            >
                                                Payer la pension
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
