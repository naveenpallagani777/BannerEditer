import styles from './styles.module.css'
import { useListContext } from '../Context/ListContext';

interface Imageprops{
    image : string;
}

const ImageComp : React.FC<Imageprops>=({image}) => {

    let {updateEditData,EditData} = useListContext();

    const ChangeImage = ()=> {
        console.log(image);
        updateEditData({index : EditData.index,state : EditData.state,image : image});
    }

    return(<img className={styles.editimg} src={image} onClick={ChangeImage}></img>);
}

export default ImageComp;