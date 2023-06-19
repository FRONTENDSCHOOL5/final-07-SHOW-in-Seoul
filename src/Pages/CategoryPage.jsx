import React from 'react';
import styled from 'styled-components';
import TopBar from '../Components/Common/TopBar';
import InterestsTag from '../Components/Profile/InterestsTag';
import AreaTag from '../Components/Profile/AreaTag';
import CategoryHeader from '../Components/Category/CategoryHeader';
import CategoryPeriod from '../Components/Category/CategoryPeriod';
import BottomNav from '../Components/Common/BottomNav';
import Button from '../Components/Common/Button';

const CategoryPage = () => {
  return (
    <>
      <TopBar />
      <SCategoryPage>
        <section>
          <CategoryHeader title="분야" />
          <InterestsTag />
        </section>
        <section>
          <CategoryHeader title="지역" />
          <AreaTag />
        </section>
        <section>
          <CategoryHeader title="기간" />
          <CategoryPeriod />
        </section>
        <Button size="Large">필터 적용하기</Button>
      </SCategoryPage>
      <BottomNav />
    </>
  );
};

export default CategoryPage;

const SCategoryPage = styled.div`
  margin: 30px 0;
  padding: 0 20px;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 30px;
`;
