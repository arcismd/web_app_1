import React from 'react'
import './fullpost.scss'
import { useParams } from 'react-router-dom';
import axios from '../../axios'

import { Post } from '../../components/Post/Post'
import { Footer } from '../../components/Footer/Footer'

export const FullPost = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const {id} = useParams();
  React.useEffect(() => {
    axios.get(`/posts/${id}`).then(res => {
        setData(res.data);
        setLoading(false);
    }).catch((err) => {
        console.warn(err);
    });
}, []);

  if (isLoading) {
      return <Post isLoading={isLoading} isFullPost/>;
  }

  return (
    <>
          <Post
              id={data._id}
              title={data.title}
              number={data.number}
              mass={data.mass}
              imageUrl={data.imageUrl}
              user={data.user}
              isFullPost>
                <p>{data.text}</p>
          </Post>
          <Footer />
    </>
  )
}
