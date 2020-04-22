import { useState, useEffect } from 'react';
import api from 'config/api';
import { IGenericItem } from 'interfaces';

const useCategories = (categoryId: number) => {
  const [playlists, setPlaylists] = useState<IGenericItem[]>([]);
  useEffect(() => {
    api
      .get(`categories/${categoryId}/playlists`)
      .then((res: any) => {
        setPlaylists(res.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [categoryId]);

  return { playlists };
};

export default useCategories;
