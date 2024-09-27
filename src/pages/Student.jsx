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
        .required('Le prénom est requis')
        .min(3, 'Le prénom doit comporter au moins 3 caractères')
        .matches(/^[a-zA-Z ]+$/, 'Les lettres seules sont demandées'),
    lastName: Yup.string()
        .required('Le nom est requis')
        .min(3, 'Le nom doit comporter au moins 3 caractères')
        .matches(/^[a-zA-Z ]+$/, 'Les lettres seules sont demandées'),
    gender: Yup.string()
        .oneOf(['male', 'female', 'other'], 'Le sexe de l\'enfant est obligatoire pour continuer'),
    classe: Yup.string()
        .oneOf(['Petite section', 'Moyenne section', 'Grande section', 'SIL', 'CP', 'CE1', 'CE2', 'CM1', 'CM2',
                'Nursery 1', 'Nursery 2', 'Class 1', 'Class 2', 'Class 3', 'Class 4','Class 5', 'Class 6'],
            'La classe de l\'élève est obligatoire pour continuer'),
    parent: Yup.string()
        .oneOf(['parentx', 'parenty', 'parentz'], 'Le parent de l\'élève est requis pour la suite'),
    birthDate: Yup.date()
        .required('La date de naissance de l\'élève est requise'),
    residence: Yup.string()
        .required('L\'adresse du parent est requise'),
    matricule: Yup.string()
        .required('Le matricule est obligatoire')
        .matches(/^[A-Z]{3}[0-9]{3}$/, 'Le matricule doit être au format AAA111 (3 lettres majuscules suivies de 3 chiffres)'),
    photo: Yup.mixed()
        .required('Le logo de l\'école est requis')
        .test('fileSize', 'La taille du fichier doit être inférieure à 3MB', value => {
            return value && value.size <= 3145728; // 3MB en octets
        })
}).required()
export default function Student() {
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

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
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
                                        <h4 className="card-title">Créer un élève</h4>
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
                                                            placeholder="Spécifiez l'année scolaire"
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
                                                            placeholder="Spécifiez le matricule de l'élève"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="birthDate">
                                                            Date de naissance :
                                                        </label>
                                                        <input
                                                            type="date"
                                                            name="birthDate"
                                                            id="birthDate"
                                                            {...register("birthDate")}
                                                            className={`form-control border ${errors.birthDate ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                            placeholder="Entrez le budget"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.birthDate?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="gender">
                                                            Sexe :
                                                        </label>
                                                        <select
                                                            id="gender"
                                                            name="gender"
                                                            className={`form-control border ${errors.birthDate ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                        >
                                                            <option value="">Sélectionnez le sexe</option>
                                                            <option value="male">Masculin</option>
                                                            <option value="female">Féminin</option>
                                                            <option value="other">Autre</option>
                                                        </select>
                                                        <p className="text-red-500 text-sm">{errors.gender?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="classe" className="block text-gray-700 font-semibold mb-1">
                                                            Classe :
                                                        </label>
                                                        <select
                                                            name="classe"
                                                            id="classe"
                                                            className={`form-control border ${errors.birthDate ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                        >
                                                            <optgroup label="Section Francophone"></optgroup>
                                                            <option value="Petite section">Petite section</option>
                                                            <option value="Moyenne section">Moyenne section</option>
                                                            <option value="Grande section">Grande section</option>
                                                            <option value="SIL">Sil</option>
                                                            <option value="CP">CP</option>
                                                            <option value="CE1">CE1</option>
                                                            <option value="CE2">CE2</option>
                                                            <option value="CM1">CM1</option>
                                                            <option value="CM2">CM2</option>
                                                            <optgroup label="Section Anglophone"></optgroup>
                                                            <option value="Nursery 1">Nursery 1</option>
                                                            <option value="Nursery 2">Nursery 2</option>
                                                            <option value="Class 1">Class 1</option>
                                                            <option value="Class 2">Class 2</option>
                                                            <option value="Class 3">Class 3</option>
                                                            <option value="Class 4">Class 4</option>
                                                            <option value="Class 5">Class 5</option>
                                                            <option value="Class 6">Class 6</option>

                                                        </select>
                                                        <p className="text-red-500 text-sm">{errors.classe?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="matricule" >
                                                            Matricule :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="matricule"
                                                            id="matricule"
                                                            {...register("matricule")}
                                                            className={`form-control border ${errors.matricule ? 'border-red-500 ' : 'border-gray-300'} form-control`}
                                                            placeholder="Spécifiez le matricule de l'élève"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.matricule?.message}</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="residence">
                                                            Lieu de résidence :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="residence"
                                                            id="residence"
                                                            {...register("residence")}
                                                            className={`form-control border ${errors.residence ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                            placeholder="Entrez le budget"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.residence?.message}</p>
                                                    </div>
                                                    <div>
                                                        <p className="block text-gray-700 mb-1">Condition physique</p>
                                                        <div className="flex items-center">
                                                            <input
                                                                type="radio"
                                                                id="option1"
                                                                name="options"
                                                                value="Option 1"
                                                                checked={selectedOption === 'Option 1'}
                                                                onChange={handleOptionChange}
                                                                className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                            />
                                                            <label htmlFor="option1" className="ml-2 text-gray-700">
                                                                Apte
                                                            </label>
                                                        </div>

                                                        <div className="flex items-center">
                                                            <input
                                                                type="radio"
                                                                id="option2"
                                                                name="options"
                                                                value="Option 2"
                                                                checked={selectedOption === 'Option 2'}
                                                                onChange={handleOptionChange}
                                                                className="form-radio h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                                            />
                                                            <label htmlFor="option2" className="ml-2 text-gray-700">
                                                                Inapte
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <label htmlFor="parent">
                                                            Parent :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="parent"
                                                            id="parent"
                                                            {...register("parent")}
                                                            className={`form-control border ${errors.parent ? 'border-red-500' : 'border-gray-300'} form-control`}
                                                            placeholder="Entrez le budget"
                                                        />
                                                        <p className="text-red-500 text-sm">{errors.parent?.message}</p>
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
