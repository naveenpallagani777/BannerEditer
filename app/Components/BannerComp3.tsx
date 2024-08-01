import styles from "./styles.module.css"
import EditBanner from "./Event";
import Image from "next/image";


interface Banner3Props {
    data: {
        b: string;
        title: string;
        image: string;
        index : number;
        description: string;
    };
}

const Banner3: React.FC<Banner3Props> = ({ data}) => {
    return(<>
        <div  className={styles.banner}>
        <div className={styles.imageContainer}>
                <Image
                src="/banner3.jpg"
                alt="Banner"
                layout="fill" 
                objectFit="cover" 
                />
            </div>
            <EditBanner data={data}  />
            <div className={styles.block}>
                <div className={styles.data3}>
                    <h2>{data.title}</h2>
                    <p className={styles.para}>{data.description}</p>
                </div>
                
                <Image src={data.image} width={150} height={150} alt="" className={styles.profileimg3} />
            </div>
            
        </div>
    </>);
}

export default Banner3;