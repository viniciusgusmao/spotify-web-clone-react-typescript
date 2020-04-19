import { useState, useEffect } from 'react';
import api from 'config/api';
import { ICategory } from 'interfaces';

export const useCategories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    api
      .get('categories')
      .then((res: any) => {
        setCategories(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return { categories };
};

export const useCategory = (id: number) => {
  const [category, setCategory] = useState();

  useEffect(() => {
    api
      .get(`categories/${id}`)
      .then((res: any) => {
        setCategory(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [id]);

  return { category };
};
