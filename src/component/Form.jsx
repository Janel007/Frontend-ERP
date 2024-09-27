import React from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import * as Yup from "yup";

const schema = yup.object({
    name: Yup.string()
        .required('Veuillez nommer l\'année d\'étude'),
    dateStart: Yup.string()
        .required('La date de début est requise'),
    dateEnd: Yup.string()
        .required('La date de fin est requise'),
    budget: Yup.number()
        .required('Inserer le budget annuelle')
}).required()


const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => console.log(data)

    return (
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Creer une année scolaire </h4>
                        </div>
                        <div className="card-content">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label htmlFor="name" >
                                                Nom
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
                                        <div className="col-md-3">
                                            <label htmlFor="budget">
                                                Budget
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
                                            <label htmlFor="dateStart" >
                                                Date de début
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
                                                Date de fin
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
                                        <div className="col-md-2">
                                            <button type="submit" className="btn btn-primary btn-fill btn-wd my-10">Enregistrer</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
    );
};

export default Form;
