import React from 'react'
import { selectIsAuth } from '../../redux/slices/auth'
import { useSelector } from 'react-redux'
import { Link, useNavigate, Navigate } from "react-router-dom";
import axios from "../../axios";

import './addposts.scss'

export const AddPostPage = () => {


  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setIsLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [mass, setMass] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [category, setCategory] = React.useState("");
  const inputFileRef = React.useRef(null);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setImageUrl(data.url);
    } catch (error) {
      console.warn(error);
      alert("Fisierul nu poate fi incarcat");
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl("");
  };

  const onChange = React.useCallback((value) => {
		setCategory(value);
	}, []);

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      const fields = {
        title,
        imageUrl,
        number,
        mass,
        category,
      };

      const { data } = await axios.post("/posts", fields);

      const id = data._id;

      navigate(`/posts/${id}`);
    } catch (error) {
      console.warn(error);
      alert("Nu poate fi publicat");
    }
  };

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/admin" />;
  }

  return (
        <>
        <div className='addposts-wrapper'>
         <h1>Adaugă <span>Bijuterie</span></h1>
        <div className="addposts-container">
    
    <div className='inputs'>
        <input
            placeholder="Denumire bijuterie"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Număr bijuterie"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <input
            placeholder="Greutate g. (doar cifra)"
            value={mass}
            onChange={(e) => setMass(e.target.value)}
          />
          </div>
          <div className="flex-post-image">
          <button className="add-image-btn" onClick={() => inputFileRef.current.click()}>Încarcă poză</button>
          <input
            ref={inputFileRef}
            type="file"
            onChange={handleChangeFile}
            hidden
          />
          {imageUrl && (
            <div className="flex-post-image">
              <img
                className="post-image"
                src={`http://localhost:4444${imageUrl}`}
                alt="Uploaded"
              />
              <button className="delete-image-btn" onClick={onClickRemoveImage}>Șterge poza</button>
            </div>
          )}
          </div>

<div className='categories'>
          <button className='select-cat' onClick={() => setCategory('inele')}>
        Inele
      </button>
      <button className='select-cat' onClick={() => setCategory('verighete')}>
        Verighete
      </button>
      <button className='select-cat' onClick={() => setCategory('cercei')}>
        Cercei
      </button>
      <button className='select-cat' onClick={() => setCategory('lanturi')}>
        Lanțuri
      </button>
      <button className='select-cat' onClick={() => setCategory('bratari')}>
        Brățări
      </button>
      <button className='select-cat' onClick={() => setCategory('csm')}>
        Cruciulițe
      </button>
      </div>
    
          <div className="flex-bottom-btns">
            <button className="pub-btn" onClick={onSubmit}>Publică</button>
            <Link to="/admin">
              <button className="ann-btn">Anulează</button>
            </Link>
          </div>
        </div>
        </div>
        </>
      );
    };