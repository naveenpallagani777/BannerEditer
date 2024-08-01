import styles from './styles.module.css'
import { useListContext } from '../Context/ListContext';
import Image from 'next/image';

interface Imageprops{
    image : string;
}

const ImageComp : React.FC<Imageprops>=({image}) => {

    let {updateEditData,EditData} = useListContext();

    const ChangeImage = ()=> {
        console.log(image);
        updateEditData({index : EditData.index,state : EditData.state,image : image});
    }

    return(<Image width={60} height={60} className={styles.editimg} src={image} onClick={ChangeImage} alt='something is wrong' />);
}

export default ImageComp;