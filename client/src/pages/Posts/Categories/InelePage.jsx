import React, { useEffect, useState } from 'react';
import { Post } from '../../../components/Post/Post'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../../redux/slices/posts';

import { SubNavbar } from '../../../components/Navbar/SubNavbar';
import { Footer } from '../../../components/Footer/Footer';
import { Feedback } from '../../../components/Feedback/Feedback';
import './index.scss'

export const InelePage = () => {

  
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);

  const isPostsLoading = posts.status === 'loading';

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
  <div>
    <SubNavbar 
        headerImg = 'header-hero-img-inele'
        headerHero = 'header-hero-works'
        headerTitle = 'Inele'
      />
      <div className='item-wrapper'>
      <h1 className='page-title'>Exemplare de <span>inele</span> create de către noi</h1>
          <div className='flex-items'>
  {(isPostsLoading ? [...Array(1)] : posts.items).map((obj, index) => 
    isPostsLoading ? ( <Post key={index} isLoading={true}/> ) :

<div className='item'>
    <Post
      id={obj._id}
      title={obj.title}
      number={obj.number}
      imageUrl={obj.imageUrl}
    />
    </div>

  )}
 
      </div>
      </div>
    <Feedback />
    <Footer />
  </div>
  )
}
