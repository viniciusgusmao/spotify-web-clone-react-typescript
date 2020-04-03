import React, { useEffect, useState } from 'react';
import Header from 'components/Header';
import Category from 'components/Category';
import { Container } from 'components/Common';
import axios from 'axios';

interface ICategory {
  id: number,
  title: string,
  description: string,
  playlists: {
    id: number,
    name: string,
    description: string,
    image: string
  }[]
}

const Dashboard:React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>();

  useEffect(() => {
    axios.get('http://localhost:3001/categories').then((res: any) => {
      setCategories(res.data);
    }).catch((error: any) => {
      console.log(error)
    })
  }, []);

  return (
    <>
      <Header />
      <Container>
        {categories?.map((category:ICategory) => (
          <Category
            id={category.id}
            title={category.title}
            description={category.description}
            playlists={category.playlists}
          />
        ))}
      </Container>
    </>
  );
}

export default Dashboard;
