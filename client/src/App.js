import { Layout } from './components/Navbar/Layout'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { AboutUsPage } from './pages/AboutUsPage'
import { ContactsPage } from './pages/Contacts/ContactsPage'
import { OurWorksPage } from './pages/OurWorksPage'

import { AddPostPage } from './pages/Posts/AddPostPage'
import { EditPostPage } from './pages/Posts/EditPostPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { AdminPage } from './pages/AdminPage/AdminPage'
import { FullPost } from './pages/Posts/FullPost'

import { InelePage } from './pages/Posts/Categories/InelePage'

import './styles/app.scss'


import React from "react";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";

function App() {

	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);

	React.useEffect(() => {
		dispatch(fetchAuthMe());
	}, []);
  
  return (
    <>
      <Layout>
        <Routes>
        <Route path='/' element={ <MainPage /> } />
          <Route path='our-works' element={ <OurWorksPage /> } />
          <Route path='about-us' element={ <AboutUsPage /> } />
          <Route path='contacts' element={ <ContactsPage /> } />

        <Route path=":id/edit" element={<EditPostPage />} />
				<Route path="add" element={<AddPostPage />} />
				<Route path="posts/:id" element={<FullPost />} />

        <Route path="admin" element={<LoginPage />} />
        <Route path="admin/ap" element={<AdminPage />} />

        <Route path="inele" element={<InelePage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
