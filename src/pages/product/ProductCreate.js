import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
// import {
//     createProduct,
// } from "../../../functions/product";

function ProductCreate() {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav />
                </div>

                <div className="col-md-10">
                    product create form
                </div>
            </div>
        </div>
    );
}

export default ProductCreate;
