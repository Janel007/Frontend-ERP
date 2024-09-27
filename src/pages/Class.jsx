import React from 'react';
import Sidebar from "../component/Sidebar.jsx";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import Table from "../component/Table .jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as Yup from "yup";

const schema = yup.object({
    name: Yup.string()
        .required('Le nom d\'une classe est obligatoire pour sa création'),
    level: Yup.string()
        .required('Ce champ est obligatoire')
        .oneOf(['primary', 'secondary'],'Le niveau d\'enseignement de cette classe est requis'),
}).required()
export default function Class() {
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
                                        <h4 className="card-title">Créer une classe</h4>
                                    </div>
                                    <div className="card-content">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <label htmlFor="name" >
                                                            Nom de la classe :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            {...register("name")}
                                                            className={`form-control border ${errors.name ? 'border-red-500 ' : 'border-gray-300'} form-control`}
                                                            placeholder="Spécifiez l'année scolaire"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.name?.message}</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <label htmlFor="level" className="block text-gray-700 font-medium mb-1">
                                                            Niveau d'enseignement :
                                                        </label>
                                                        <select
                                                            id="level"
                                                            name="level"
                                                            className={`form-control border ${errors.level ? 'border-red-500 ' : 'border-gray-300'} form-control`}
                                                        >
                                                            <option value="">Sélectionnez le niveau</option>
                                                            <option value="primary">Maternel</option>
                                                            <option value="secondary">Primaire</option>
                                                        </select>
                                                        <p className="text-red-500 text-sm">{errors.level?.message}</p>
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
