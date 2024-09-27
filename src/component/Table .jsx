import React, {useEffect} from 'react'
import {FaCircleUser} from "react-icons/fa6";

export default function Table() {
    useEffect(() => {
        $('#bootstrap-table').bootstrapTable({
            toolbar: ".toolbar",
            clickToSelect: true,
            showRefresh: true,
            search: true,
            showToggle: true,
            showColumns: true,
            pagination: true,
            searchAlign: 'left',
            pageSize: 8,
            pageList: [8, 10, 25, 50, 100],
            formatShowingRows: function (pageFrom, pageTo, totalRows) {
            },
            formatRecordsPerPage: function (pageNumber) {
                return pageNumber + " rows visible";
            },
            icons: {
                refresh: 'fa fa-refresh',
                toggle: 'fa fa-th-list',
                columns: 'fa fa-columns',
                detailOpen: 'fa fa-plus-circle',
                detailClose: 'ti-close'
            }
        });

        const handleResize = () => {
            $('#bootstrap-table').bootstrapTable('resetView');
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Liste des fournisseurs actuels</h4>
            </div>
            <div className="card-content">
                <div className="toolbar">
                </div>
                <table id="bootstrap-table" className="table">
                    <thead>
                    <tr>
                        <th data-field="state" data-checkbox="true"></th>
                        <th data-field="id" className="text-center">#</th>
                        <th data-field="Nom" data-sortable="true">Nom</th>
                        <th data-field="Numéro telephone" data-sortable="true">Numéro telephone</th>
                        <th data-field="Type de Produit">Type de Produit</th>
                        <th data-field="Pays">Pays</th>
                        <th data-field="Ville">Ville</th>
                        <th data-field="Quartier">Quartier</th>
                        <th data-field="actions" className="td-actions text-right">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td></td>
                        <td>1</td>
                        <td><a href="">Herman store</a></td>
                        <td>651898704</td>
                        <td>Electronique</td>
                        <td>Dubai</td>
                        <td>Shansu</td>
                        <td>Diuj</td>
                        <td>
                            <div className="table-icons">
                                <button rel="tooltip" title="View" className="btn btn-simple btn-info btn-icon table-action view">
                                    <FaCircleUser />
                                </button>
                                <button rel="tooltip" title="Edit" className="btn btn-simple btn-warning btn-icon table-action edit">
                                    <FaCircleUser />
                                </button>
                                <button rel="tooltip" title="Inventory" className="btn btn-simple btn-danger btn-icon table-action">
                                    <FaCircleUser />
                                </button>
                                <button title="Remove" rel="tooltip" className="btn btn-simple btn-danger btn-icon table-action remover">
                                    <FaCircleUser />
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>2</td>
                        <td><a href="">Fernard store</a></td>
                        <td>687898605</td>
                        <td> Vertement</td>
                        <td> Cameroon</td>
                        <td> Douala</td>
                        <td> Akwa</td>
                        <td>
                            <div className="table-icons">
                                <a href="" rel="tooltip" title="View" className="btn btn-simple btn-info btn-icon table-action view">
                                    <FaCircleUser />
                                </a>
                                <a href="" rel="tooltip" title="Edit" className="btn btn-simple btn-warning btn-icon table-action edit">
                                    <FaCircleUser />
                                </a>
                                <a href="" rel="tooltip" title="Inventory" className="btn btn-simple btn-danger btn-icon table-action ">
                                    <FaCircleUser />
                                </a>
                                <a href="" title="Remove" rel="tooltip" className="btn btn-simple btn-danger btn-icon table-action remover">
                                    <FaCircleUser />
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>3</td>
                        <td><a href="">Noname</a></td>
                        <td>651852689</td>
                        <td>Agro</td>
                        <td>Ukraine</td>
                        <td>Kiev</td>
                        <td>Kruj</td>
                        <td>
                            <div className="table-icons">
                                <a href="" rel="tooltip" title="View" className="btn btn-simple btn-info btn-icon table-action view">
                                    <FaCircleUser />
                                </a>
                                <a href="" rel="tooltip" title="Edit" className="btn btn-simple btn-warning btn-icon table-action edit">
                                    <FaCircleUser />
                                </a>
                                <a href="" rel="tooltip" title="Inventory" className="btn btn-simple btn-danger btn-icon table-action ">
                                    <FaCircleUser />
                                </a>
                                <a href="" title="Remove" rel="tooltip" className="btn btn-simple btn-danger btn-icon table-action remover">
                                    <FaCircleUser />
                                </a>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
