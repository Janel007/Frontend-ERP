import React from 'react';
import Sidebar from "../component/Sidebar.jsx";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import Table from "../component/Table .jsx";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import * as Yup from "yup";

const schema = yup.object({
    schoolName: Yup.string()
        .required('Le nom est requis')
        .min(3, 'Le nom doit comporter au moins 3 caractères')
        .matches(/^[A-Z ]+$/, 'Les lettres doivent être majuscules'),
    location: Yup.string()
        .required('La localisation est requise'),
    phoneNumber: Yup.string()
        .required('Le numéro est requis')
        .min(9, 'Le numéro doit contenir 9 chiffres')
        .max(9, 'Le numero doit contenir au maximun 9 chiffres')
        .matches(/^([26]\d+)$/, 'Le numero doit commencer par 2 ou par 6 et ne doit pas contenir d\'espace'),
    logo: Yup.mixed()
        .required('Le logo de l\'école est requis')
        .test('fileSize', 'La taille du fichier doit être inférieure à 3MB', value => {
            return value && value.size <= 3145728; // 3MB en octets
        })
}).required()
export default function School() {
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
                                        <h4 className="card-title">Créer une école</h4>
                                    </div>
                                    <div className="card-content">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <label htmlFor="schoolName" >
                                                            Nom d'école :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="schoolName"
                                                            id="schoolName"
                                                            {...register("schoolName")}
                                                            className={`form-control border ${errors.schoolName ? 'border-red-500 ' : 'border-gray-300'} form-control`}
                                                            placeholder="Spécifiez l'année scolaire"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.schoolName?.message}</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <label htmlFor="location" >
                                                            Localisation :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="location"
                                                            id="location"
                                                            {...register("location")}
                                                            className={`form-control border ${errors.location ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.location?.message}</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <label htmlFor="phoneNumber" >
                                                            Téléphone :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="phoneNumber"
                                                            id="phoneNumber"
                                                            {...register("phoneNumber")}
                                                            className={`form-control border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.phoneNumber?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="logo">
                                                            Logo :
                                                        </label>
                                                        <input
                                                            type="file"
                                                            name="logo"
                                                            id="logo"
                                                            {...register("logo")}
                                                            className={`form-control border ${errors.logo ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                            placeholder="Entrez le budget"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.logo?.message}</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <button type="submit" className="btn btn-primary btn-fill btn-wd my-10">Enregistrer</button>
                                                    </div>
                                                </div>
                                            </div>
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
