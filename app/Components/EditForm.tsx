'use client'
import React, { useState,useEffect } from 'react';
import { useListContext } from '../Context/ListContext';
import styles from './styles.module.css'

import Banner1 from './BannerComp1';
import Banner2 from './BannerComp2';
import Banner3 from './BannerComp3';
import Banner4 from './BannerComp4';
import ImageComp from './ImageComp';

const EditForm: React.FC = () => {
    const { list,EditData,updateEditData,updateList } = useListContext();
    const [formState, setFormState] = useState({...list[EditData.index],index : EditData.index});
    const [save,updateSave] = useState("current");

    let listImg = ["/profile1.jpeg","/profile2.jpg","/profile3.webp","/profile4.jpg",'/profile5.jpg','/profile6.jpg'];

    useEffect(() => {
        setFormState(prevState => ({ ...prevState,image : EditData.image}));
    },[EditData.image]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value ,image : EditData.image}));
    };

    const selectHandler =(e : React.ChangeEvent<HTMLSelectElement>) => {
        updateSave(e.target.value);
    }

    const cancelHandler = () => {
        updateEditData({index : EditData.index,state : false,image:"/"});
    }

    const handleSubmit =  (e: React.FormEvent) => {
        e.preventDefault();

        if (save === "current"){
            const newlist = [
                ...list.slice(0,EditData.index),
                formState,
                ...list.slice(EditData.index+1)
            ]
            updateList([...newlist]);
            localStorage.setItem('myList', JSON.stringify(newlist));
        }
        else {
            let newlist = [...list,formState]
            updateList([...newlist]);
            localStorage.setItem('myList', JSON.stringify(newlist));
        }

        
        
        updateEditData({index:EditData.index,state : false,image: EditData.image});
    };

    return (<>
            <div className={styles.overlay}>
                <form onSubmit={handleSubmit} className={styles.form} id='form'>
                    {
                    formState.b === "b1" ? (
                        <Banner1 data={formState} />
                    ) : formState.b === "b2" ? (
                        <Banner2 data={formState} />
                    ) : formState.b === "b3" ? (
                        <Banner3 data={formState} />
                    ) : formState.b === "b4" ? (
                        <Banner4 data={formState} />
                    ) : null
                    }
                    
                    <div className={styles.formData}>
                        <div className={styles.imgcon}>
                        {
                            listImg.map((ele) => {
                                return(<ImageComp image={ele}/>);
                            })
                        }
                        </div>
                        <h3>Saving Option :</h3>
                        <select name="" onChange={selectHandler} id={styles.select}>
                            <option value="current" id={styles.option}>Change in Current Object</option>
                            <option value="new">Save as New Object</option>
                        </select>
                        <h3>Title :</h3>
                        <input
                            type="text"
                            name="title"
                            value={formState.title}
                            onChange={handleChange}
                            placeholder="Enter title"
                            required
                        />
                        <h3>Description :</h3>
                        <textarea
                            name="description"
                            value={formState.description}
                            onChange={handleChange}
                            placeholder="Enter description"
                            required
                        />
                        
                        <div className={styles.buttons}>
                            <button type="submit" className={styles.submit}><h4>SUBMIT</h4></button>
                            <button onClick ={cancelHandler} className={styles.cancel}><h4>CANCEL</h4></button>
                        </div>
                    </div>
                </form>
            </div>
        </>
  );
};

export default EditForm;
