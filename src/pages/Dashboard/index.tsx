import React, { useEffect } from 'react';
import Category from 'components/CategoryDashboard';
import { Container } from 'components/Common';
import { ICategory } from 'interfaces';

import { useCategories } from 'hooks/useCategories';

const Dashboard: React.FC = () => {
  const { categories } = useCategories();
  useEffect(() => {
    localStorage.setItem('backgroundHeader', '#080808');
    localStorage.setItem('backgroundHeaderOnScroll', '#080808');
  }, []);
  return (
    <Container>
      {categories?.slice(0, 3).map((category: ICategory) => (
        <Category
          key={category.id}
          id={category.id}
          title={category.title}
          description={category.description}
        />
      ))}
    </Container>
  );
};

export default Dashboard;
