'use client';
import styles from "./styles.module.css"
import { useListContext } from '../Context/ListContext';
import Image from "next/image";

interface EditProps {
    data: {
        b: string;
        title: string;
        image: string;
        index : number;
        description: string;
    };
}

const EditBanner: React.FC<EditProps> = ({ data }) => {

    const { updateEditData} = useListContext();
    const EditHandler = () => {
         updateEditData({index : data.index,state : true,image:data.image});
    }
    return(<Image src="/edit.png" width={20} height={20} alt="" className={styles.edit} onClick={EditHandler}/>);

}

export default EditBanner;