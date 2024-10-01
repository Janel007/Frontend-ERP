import React, {useState} from 'react';
import Sidebar from "../component/Sidebar.jsx";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import Table from "../component/Table .jsx";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
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
    password: Yup.string()
        .required('Le mot de passe est obligatoire')
        .matches(/^(.{8,})$/, 'Le mot de passe doit contenir au moins 8 caractères'),
    country: Yup.string()
        .required('Le pays est requis'),
    city: Yup.string()
        .required('La ville est requise'),
    district: Yup.string()
        .required('Le quartier est requis'),
    phoneNumber: Yup.string()
        .min(9, 'Le numéro doit contenir 9 chiffres')
        .max(9, 'Le numéro doit contenir au maximun 9 chiffres')
        .required('Le numéro est requis')
        .matches(/^([26]\d+)$/, 'Le numéro doit commencer par 2 ou par 6 et ne doit pas contenir d\'espace'),
    email: Yup.string()
        .required('L\'adresse du parent est requise')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'L\'adresse mail entrée n\'est pas conforme'),
    role: Yup.string()
        .oneOf(['Secrétaire', 'Libraire', 'Chauffeur', 'Gardien', 'Infirmière'],'Sélectionnez un rôle d\'utilisateur'),
    photo: Yup.mixed()
        .required('Le logo de l\'école est requis')
        .test('fileSize', 'La taille du fichier doit être inférieure à 3MB', value => {
            return value && value.size <= 3145728; // 3MB en octets
        })
}).required()
export default function User() {
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
                                        <h4 className="card-title">Ajouter un membre du personnel administratif</h4>
                                    </div>
                                    <div className="card-content">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <label htmlFor="firstName" >
                                                            Nom :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="firstName"
                                                            id="firstName"
                                                            {...register("firstName")}
                                                            className={`form-control border ${errors.firstName ? 'border-red-500 ' : 'border-gray-300'} form-control`}
                                                            placeholder="Spécifiez le nom"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <label htmlFor="lastName" >
                                                            Prénom :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            id="lastName"
                                                            {...register("lastName")}
                                                            className={`form-control border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                            placeholder="Spécifiez le prénom"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="role">
                                                            Rôle :
                                                        </label>
                                                        <select
                                                            name="role"
                                                            id="role"
                                                            className={`form-control border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                        >
                                                            <option value="">Spécifier le rôle de cet utilisateur</option>
                                                            <option value="Secrétaire">Secrétaire</option>
                                                            <option value="Libraire">Libraire</option>
                                                            <option value="Chauffeur">Chauffeur</option>
                                                            <option value="Gardien">Gardien</option>
                                                            <option value="Infirmière">Infirmière</option>
                                                        </select>
                                                        <p className="text-red-500 text-sm">{errors.role?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="password" >
                                                            Mot de passe :
                                                        </label>
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            id="password"
                                                            {...register("password")}
                                                            className={`form-control border ${errors.password ? 'border-red-500 ' : 'border-gray-300'} form-control`}
                                                            placeholder="Entrez le mot de passe"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.password?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="email">
                                                            Email :
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            {...register("email")}
                                                            className={`form-control border ${errors.email ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                            placeholder="Entrez l'email"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.email?.message}</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <label htmlFor="country" >
                                                            Pays :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="country"
                                                            id="country"
                                                            {...register("country")}
                                                            className={`form-control border ${errors.country ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                            placeholder="Spécifiez le pays"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.country?.message}</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <label htmlFor="city" >
                                                            Ville :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            id="city"
                                                            {...register("city")}
                                                            className={`form-control border ${errors.city ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                            placeholder="Spécifiez la ville"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.city?.message}</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <label htmlFor="district" >
                                                            Quartier :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="district"
                                                            id="district"
                                                            {...register("district")}
                                                            className={`form-control border ${errors.district ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                            placeholder="Spécifiez le quartier"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.district?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="phoneNumber">
                                                            Numéro de téléphone :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="phoneNumber"
                                                            id="phoneNumber"
                                                            {...register("phoneNumber")}
                                                            className={`form-control border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                            placeholder="Entrez le mobile"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.phoneNumber?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="photo">
                                                            Photo :
                                                        </label>
                                                        <input
                                                            type="file"
                                                            name="photo"
                                                            id="photo"
                                                            {...register("photo")}
                                                            className={`form-control border ${errors.photo ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                            placeholder="Entrez le budget"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.photo?.message}</p>
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