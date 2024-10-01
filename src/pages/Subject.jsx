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
    description: Yup.string()
        .required("Veuillez ajouter une description de l'option."),
}).required()
export default function Subject() {
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
                                        <h4 className="card-title">Ajouter une matière</h4>
                                    </div>
                                    <div className="card-content">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <label htmlFor="name" >
                                                            Nom de la matière :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            {...register("name")}
                                                            className={`form-control border ${errors.name ? 'border-red-500 ' : 'border-gray-300'} form-control`}
                                                            placeholder="Entrez la matière"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.name?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="description" >
                                                            Description :
                                                        </label>
                                                        <textarea
                                                            className={`form-control border ${errors.option ? 'border-red-500 ' : 'border-gray-300'} form-control`}
                                                            placeholder="Ajouter une description"
                                                            rows="2"
                                                        ></textarea>
                                                        <p className="text-red-500 text-sm">{errors.description?.message}</p>
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
