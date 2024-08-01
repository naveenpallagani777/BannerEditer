'use client';
import React, { createContext, useState, useEffect,ReactNode } from 'react';


interface ListItem {
  b: string;
  title: string;
  image: string;
  description: string;
}

interface ListContextType {
  list: ListItem[];
  updateList: React.Dispatch<React.SetStateAction<ListItem[]>>;
  EditData: Index;
  updateEditData: React.Dispatch<React.SetStateAction<Index>>;
}

interface Index {
  index: number;
  state: boolean;
  image : string;
}

const ListContext = createContext<ListContextType | undefined>(undefined);

export const ListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [list, updateList] = useState<ListItem[]>([
    { b: "b1", title: "Next.js", image: "/profile1.jpeg", description: "Next.js is a popular React framework that simplifies server-side rendering and static site generation for improved performance and SEO. It offers features like automatic code splitting, optimized image handling, and built-in routing for efficient and scalable web development." },
    { b: "b2", title: "React.js", image: "/profile2.jpg" , description: "React.js is a JavaScript library designed for creating and managing user interfaces. It simplifies the process of building dynamic and interactive UIs with reusable components." },
    { b: "b3", title: "Node.js", image: "/profile3.webp",description: "Node.js is a JavaScript runtime built on Chrome's V8 engine, designed for building scalable network applications. It uses an event-driven, non-blocking I/O model to handle concurrent connections efficiently." },
    { b: "b4", title: "Mongoose", image: "/profile4.jpg", description: "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a schema-based solution to model application data. It simplifies database operations with features like data validation, query building, and middleware support." },
    { b: "b1", title: "Mongoose", image: "/profile5.jpg", description: "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a schema-based solution to model application data. It simplifies database operations with features like data validation, query building, and middleware support." }
  ]);

  const [EditData, updateEditData] = useState<Index>({ index: -1, state: false,image :"/"});

  useEffect(() => {
    const storedList = localStorage.getItem('myList');
    if (storedList) {
      updateList(JSON.parse(storedList));
    }
  }, []);

 

  return (
    <ListContext.Provider value={{ list, updateList, EditData, updateEditData }}>
      {children}
    </ListContext.Provider>
  );
};


export const useListContext = () => {
  const context = React.useContext(ListContext);
  if (context === undefined) {
    throw new Error('useListContext must be used within a ListProvider');
  }
  return context;
};
