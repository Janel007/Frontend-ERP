import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";


const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState({
        dashboardOverview: true,
        boutique: false,
        products: false,
        utilisateur: false,
        localisation: false,
        client: false,
        fournisseur: false,
        rapport: false,
        parametre: false,
    });

    const toggleCollapse = (section) => {
        setIsCollapsed((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div className="sidebar" data-background-color="brown" data-active-color="warning">
            <div className="logo">
                <a href="" className="simple-text logo-mini">ET</a>
                <a href="" className="simple-text logo-normal">Educ Tech</a>
            </div>
            <div className="sidebar-wrapper">
                <div className="user">
                    <div className="info">
                        <div className="photo">
                            <img src="/img/faces/image0-Photoroom.png" alt="User" />
                        </div>
                        <a href="#collapseExample" className="collapsed" onClick={() => toggleCollapse('boutique')}>
              <span>
                High School No-NAME <b className="caret"></b>
              </span>
                        </a>
                        <div className="clearfix"></div>
                        {isCollapsed.boutique && (
                            <div className="collapse" id="collapseExample">
                                <ul className="nav">
                                    <div style={{ padding: "20px" }}>
                                        <select className="form-control" data-style="btn btn-primary btn-block" title="Sélectionner" data-size="7">
                                            <option value="Herman Store">Gauthier No-Name</option>
                                            <option value="ms">Director</option>
                                        </select>
                                    </div>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <ul className="nav">
                    <li className={isCollapsed.dashboardOverview ? "active" : ""}>
                        <a href="#dashboardOverview" onClick={() => toggleCollapse('dashboardOverview')}>
                            <FaCircleUser />
                            <p>Tableau de bord <b className="caret"></b></p>
                        </a>
                        {isCollapsed.dashboardOverview && (
                            <div className="collapse in" id="dashboardOverview">
                                <ul className="nav">
                                    <li className="active">
                                        <a href="">
                                            <span className="sidebar-mini">O</span>
                                            <span className="sidebar-normal">Aperçu du Compte</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="sidebar-mini">S</span>
                                            <span className="sidebar-normal">Statistiques</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <a href="#Boutique" onClick={() => toggleCollapse('boutique')}>
                            <FaCircleUser />
                            <p>Gestion de Boutique <b className="caret"></b></p>
                        </a>
                        {isCollapsed.boutique && (
                            <div className="collapse" id="Boutique">
                                <ul className="nav">
                                    <li>
                                        <a href="">
                                            <span className="sidebar-mini">B</span>
                                            <span className="sidebar-normal">List de Boutique</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="sidebar-mini">B</span>
                                            <span className="sidebar-normal">Ajouter une Boutique</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <a href="#Products" onClick={() => toggleCollapse('products')}>
                            <FaCircleUser />
                            <p>Gestion de stock <b className="caret"></b></p>
                        </a>
                        {isCollapsed.products && (
                            <div className="collapse" id="Products">
                                <ul className="nav">
                                    <li>
                                        <a href="">
                                            <span className="sidebar-mini">B</span>
                                            <span className="sidebar-normal">Gestion de Produits</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="sidebar-mini">B</span>
                                            <span className="sidebar-normal">Gestion de Categorie</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="sidebar-mini">B</span>
                                            <span className="sidebar-normal">Retour de produit</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <a href="#Utilisateur" onClick={() => toggleCollapse('utilisateur')}>
                            <FaCircleUser />
                            <p>Gestion Utilisateur <b className="caret"></b></p>
                        </a>
                        {isCollapsed.utilisateur && (
                            <div className="collapse" id="Utilisateur">
                                <ul className="nav">
                                    <li>
                                        <a href="">
                                            <span className="sidebar-mini">B</span>
                                            <span className="sidebar-normal">Nouveau Utilisateur</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="sidebar-mini">B</span>
                                            <span className="sidebar-normal">List d'Utilisateur</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="sidebar-mini">B</span>
                                            <span className="sidebar-normal">Gestion de Role</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <a href="#Localisation" onClick={() => toggleCollapse('localisation')}>
                            <FaCircleUser />
                            <p>Gestion Localisation <b className="caret"></b></p>
                        </a>
                        {isCollapsed.localisation && (
                            <div className="collapse" id="Localisation">
                                <ul className="nav">
                                    <li>
                                        <a href="">
                                            <span className="sidebar-mini">B</span>
                                            <span className="sidebar-normal">Nouveau Localisation</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="sidebar-mini">B</span>
                                            <span className="sidebar-normal">List Localisation</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <a href="#Client" onClick={() => toggleCollapse('client')}>
                            <FaCircleUser />
                            <p>Gestion Client <b className="caret"></b></p>
                        </a>
                        {isCollapsed.client && (
                            <div className="collapse" id="Client">
                                <ul className="nav">
                                    <li>
                                        <a href="">
                                            <span className="sidebar-mini">B</span>
                                            <span className="sidebar-normal">Nouveau Client</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span className="sidebar-mini">B</span>
                                            <span className="sidebar-normal">List Client</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>

                    <li>
                        <a onClick={() => toggleCollapse('founisseur')} href="#Founisseur">
                           <FaCircleUser/>
                            <p>Gestion Founisseur
                                <b className="caret"></b>
                            </p>
                        </a>
                        {isCollapsed.founisseur && (
                        <div className="collapse" id="Founisseur">
                            <ul className="nav">
                                <li>
                                    <a href="">
                                        <span className="sidebar-mini">B</span>
                                        <span className="sidebar-normal">Nouveau Founisseur</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="sidebar-mini">B</span>
                                        <span className="sidebar-normal">List Founisseur</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                        )}
                    </li>

                    <li>
                        <a onClick={() => toggleCollapse('rapport')} href="#Rapport">
                            <FaCircleUser/>
                            <p>Rapport
                                <b className="caret"></b>
                            </p>
                        </a>
                        {isCollapsed.rapport && (
                        <div className="collapse" id="Rapport">
                            <ul className="nav">
                                <li>
                                    <a href="">
                                        <span className="sidebar-mini">B</span>
                                        <span className="sidebar-normal">Stock</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="sidebar-mini">B</span>
                                        <span className="sidebar-normal">Vente</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="sidebar-mini">B</span>
                                        <span className="sidebar-normal">Revenue</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        )}
                    </li>

                    <li>
                        <a onClick={() => toggleCollapse('parametre')} href="#parametre">
                            <FaCircleUser/>
                            <p>Parametre
                                <b className="caret"></b>
                            </p>
                        </a>
                        {isCollapsed.parametre && (
                        <div className="collapse" id="parametre">
                            <ul className="nav">
                                <li>
                                    <a href="">
                                        <span className="sidebar-mini">B</span>
                                        <span className="sidebar-normal">Compte</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="sidebar-mini">B</span>
                                        <span className="sidebar-normal">Facture</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
