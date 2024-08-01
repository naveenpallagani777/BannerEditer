'use client'

import React from 'react';
import Banner1 from './Components/BannerComp1';
import Banner2 from './Components/BannerComp2';
import Banner3 from './Components/BannerComp3';
import Banner4 from './Components/BannerComp4';
import EditForm from './Components/EditForm';
import { ListProvider, useListContext } from './Context/ListContext';
import styles from './Components/styles.module.css';

const HomeContent: React.FC = () => {
  const { list,EditData } = useListContext();

  return (
    <>
    {EditData.state && <EditForm ></EditForm>}
    <main className={styles.con}>
      {list.map((ele, i) => {
        let element = {...ele,index : i}
        if (ele.b === "b1") return <Banner1 key={i} data={element} />;
        else if (ele.b === "b2") return <Banner2 key={i} data={element} />;
        else if (ele.b === "b3") return <Banner3 key={i} data={element} />;
        else if (ele.b === "b4") return <Banner4 key={i} data={element} />;
        return null;
      })}
      
    </main>
    
    </>
  );
};

const Home: React.FC = () => {
  return (
    <ListProvider>
      <HomeContent />
    </ListProvider>
  );
};

export default Home;
