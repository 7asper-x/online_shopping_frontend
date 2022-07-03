import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import AdminNav from "../../components/nav/AdminNav";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {
    createProduct,
} from "../../functions/product";

const initialState = {
    title: '',
    description: '',
    price: '',
    // categories: [],
    // category: '',
    // subs: [],
    shipping: '',
    quantity: '',
    // images: [],
    colors: ["Silver", "Blue", "Brown", "Black", "White"],
    brands: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
    color: "",
    brand: "",
}

function ProductCreate() {
    const [values, setValues] = useState(initialState);
    const { user } = useSelector((state) => ({ ...state }));

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(values, user.token)
            .then(res => {
                toast.success(`${res.data.title} created`);
                setValues(initialState);
            }).catch(err => {
                if (err.response.status === 400) toast.error(err.response.data);
            }
        );
    }

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <AdminNav/>
                </div>

                <div className="col-md-10">
                    <h4 className="mt-2">Create Product</h4>
                    <hr/>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type={"text"} className="form-control" id="title" name="title"
                                   onChange={handleChange} value={values.title}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type={"text"} className="form-control" id="description" name="description"
                                   onChange={handleChange} value={values.description}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input type={"text"} className="form-control" id="price" name="price"
                                   onChange={handleChange} value={values.price}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="shipping">Shipping</label>
                            <select className="form-control" id="shipping" name="shipping" onChange={handleChange}>
                                <option value="">Select</option>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="quantity">Quantity</label>
                            <input type={"number"} className="form-control" id="quantity" name="quantity"
                                   onChange={handleChange} value={values.quantity}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="color">Color</label>
                            <select className="form-control" id="color" name="color" onChange={handleChange}>
                                <option value="">Select</option>
                                {values.colors.map(color => <option key={color} value={color}>{color}</option>)}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="brand">Brand</label>
                            <select className="form-control" id="brand" name="brand" onChange={handleChange}>
                                <option value="">Select</option>
                                {values.brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
                            </select>
                        </div>

                        <button className="btn btn-outline-info">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ProductCreate;
