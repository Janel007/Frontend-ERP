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
    name: Yup.string()
        .required('Veuillez nommer l\'année d\'étude')
        .matches(/^\d{4}([-/])\d{4}$/, 'L\'attribution de l\'année scolaire doit comporter des chiffres du type 1111/2222 ou 1111-2222'),
    dateStart: Yup.string()
        .required('La date de début est requise'),
    dateEnd: Yup.string()
        .required('La date de fin est requise'),
    budget: Yup.string()
        .required('Insérer le budget annuel')
        .matches(/^\d+$/, 'Le budget ne se défini que par des chiffres')
}).required()
export default function Year() {
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
                                        <h4 className="card-title">Créer une année scolaire</h4>
                                    </div>
                                    <div className="card-content">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <label htmlFor="name" >
                                                            Nom :
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
                                                        <label htmlFor="dateStart" >
                                                            Date de début :
                                                        </label>
                                                        <input
                                                            type="date"
                                                            name="dateStart"
                                                            id="dateStart"
                                                            {...register("dateStart")}
                                                            className={`form-control border ${errors.dateStart ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.dateStart?.message}</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <label htmlFor="dateEnd" >
                                                            Date de fin :
                                                        </label>
                                                        <input
                                                            type="date"
                                                            name="dateEnd"
                                                            id="dateEnd"
                                                            {...register("dateEnd")}
                                                            className={`form-control border ${errors.dateEnd ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.dateEnd?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="budget">
                                                            Budget :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="budget"
                                                            id="budget"
                                                            {...register("budget")}
                                                            className={`form-control border ${errors.budget ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                            placeholder="Entrez le budget"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.budget?.message}</p>
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
