import React, { useEffect } from 'react';
import Category from 'components/CategoryDashboard';
import { Container } from 'components/Common';
import { IGenericItem } from 'interfaces';

import { useCategories } from 'hooks/useCategories';

type Props = {
  handleCurrentPage: () => void;
  changeBackgroundHeader: (color: string) => void
};

const Dashboard: React.FC<Props> = ({ handleCurrentPage, changeBackgroundHeader } : Props) => {
  const { categories } = useCategories();
  useEffect(() => {
    localStorage.setItem('backgroundHeader', '#080808');
    localStorage.setItem('backgroundHeaderOnScroll', '#080808');
    changeBackgroundHeader('#080808');
    handleCurrentPage();
  }, []);
  return (
    <Container>
      {categories?.slice(0, 3).map((category: IGenericItem) => (
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
