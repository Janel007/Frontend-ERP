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
    registrationNumber: Yup.string()
        .required('L\'immatriculation est obligatoire.'),
    busNumber: Yup.string()
        .required('Entrer une reférence à ce véhicule'),
    road: Yup.string()
        .required("Veuillez ajouter un itinéraire."),
    hour: Yup.string()
        .required('Spécifier l\'heure de départ'),
}).required()
export default function Transport () {
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
                                        <h4 className="card-title">Ajouter un véhicule</h4>
                                    </div>
                                    <div className="card-content">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <label htmlFor="registrationNumber" >
                                                            Numéro d'immatriculation :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="registrationNumber"
                                                            id="registrationNumber"
                                                            {...register("registrationNumber")}
                                                            className={`form-control border ${errors.registrationNumber ? 'border-red-500 ' : 'border-gray-300'} form-control`}
                                                            placeholder="Entrez l'immatriculation"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.registrationNumber?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="busNumber" >
                                                            Numéro :
                                                        </label>
                                                        <input
                                                            type="number"
                                                            name="busNumber"
                                                            id="busNumber"
                                                            {...register("busNumber")}
                                                            className={`form-control border ${errors.busNumber ? 'border-red-500 ' : 'border-gray-300'} form-control`}
                                                            placeholder="Entrez une reférence"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.busNumber?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="road" >
                                                            Itinéraire :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="road"
                                                            id="road"
                                                            {...register("road")}
                                                            className={`form-control border ${errors.road ? 'border-red-500 ' : 'border-gray-300'} form-control`}
                                                            placeholder="Spécifiez l'itinéraire"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.road?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="hour" >
                                                            Heure de départ:
                                                        </label>
                                                        <input
                                                            type="time"
                                                            name="hour"
                                                            id="hour"
                                                            {...register("hour")}
                                                            className={`form-control border ${errors.hour ? 'border-red-500 ' : 'border-gray-300'} form-control`}
                                                            placeholder="Spécifiez l'heure de sortie"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.hour?.message}</p>
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
