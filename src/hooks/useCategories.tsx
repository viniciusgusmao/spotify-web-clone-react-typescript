import { useState, useEffect } from 'react';
import api from 'config/api';
import { ICategory } from 'interfaces';

const useCategories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    api.get('categories')
      .then((res: any) => {
        setCategories(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return { categories };
};

export default useCategories;
