import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import {
  createCategory,
  getCategories,
  removeCategory,
} from "../../../functions/category";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import CategoryForm from "../../../components/forms/CategoryForm";
import LocalSearch from "../../../components/forms/LocalSearch";

function CategoryCreate() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () =>
    getCategories().then((res) => {
      setCategories(res.data);
    });

  const handleRemove = async (slug) => {
    let answer = window.confirm("Delete?");
    if (answer) {
      setLoading(true);
      removeCategory(slug, user.token)
        .then((res) => {
          setLoading(false);
          loadCategories();
          toast.success(`${res.data.name} deleted successfully!`);
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.message);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createCategory({ name }, user.token)
      .then((res) => {
        setLoading(false);
        setName("");
        loadCategories();
        toast.success(`${res.data.name} created`);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          {loading ? (
            <h4 className="text-danger">loading...</h4>
          ) : (
            <h4>Create category</h4>
          )}
          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />

          <LocalSearch keyword={keyword} setKeyword={setKeyword}/>

          <hr />

          {categories.filter(searched(keyword)).map((c) => (
            <div className="alert alert-primary" key={c._id}>
              {c.name}{" "}
              <span
                onClick={() => handleRemove(c.slug)}
                className="btn btn-sm float-right"
              >
                <DeleteOutlined className="text-danger" />
              </span>{" "}
              <Link to={`/admin/category/${c.slug}`}>
                <span className="btn btn-sm float-right">
                  <EditOutlined />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryCreate;
