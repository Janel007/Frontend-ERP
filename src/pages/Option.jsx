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
    option: Yup.string()
        .required()
        .oneOf(['french', 'english'],'La section de la classe est obligatoire'),
    year: Yup.string()
        .required('Veuillez nommer l\'année d\'étude')
        .matches(/^\d{4}([-/])\d{4}$/, 'L\'attribution de l\'année scolaire doit comporter des chiffres du type 1111/2222 ou 1111-2222'),
    description: Yup.string()
        .required("Veuillez ajouter une description de l'option."),
}).required()
export default function Option() {
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
                                        <h4 className="card-title">Créer une option de parcours scolaire</h4>
                                    </div>
                                    <div className="card-content">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <label htmlFor="option">
                                                        Option :
                                                    </label>
                                                    <select
                                                        name="option"
                                                        id="option"
                                                        {...register("option")}
                                                        className={`form-control border ${errors.option ? 'border-red-500 ' : 'border-gray-300'} form-control`}
                                                    >
                                                        <option value="">Spécifiez la section</option>
                                                        <option value="french">Francophone</option>
                                                        <option value="english">Anglophone</option>
                                                    </select>
                                                    <p className="text-red-500 text-sm">{errors.option?.message}</p>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="year" >
                                                        Année :
                                                    </label>
                                                    <select
                                                        name="option"
                                                        id="option"
                                                        {...register("option")}
                                                        className={`form-control border ${errors.option ? 'border-red-500 ' : 'border-gray-300'} form-control`}
                                                    >
                                                        <option value="">Spécifiez l'année</option>
                                                        <option value="year1">2023/2024</option>
                                                        <option value="year2">2024/2025</option>
                                                    </select>
                                                    <p className="text-red-500 text-sm">{errors.year?.message}</p>
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
                                                <div className="col-md-3">
                                                    <button type="submit" className="btn btn-primary btn-fill btn-wd my-10">Soumettre</button>
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
