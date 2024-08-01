import styles from "./styles.module.css"
import EditBanner from "./Event";
import Image from "next/image";
interface Banner2Props {
    data: {
        b: string;
        title: string;
        image: string;
        index : number;
        description: string;
    };
}

const Banner2: React.FC<Banner2Props> = ({data}) => {
    return(<>
        <div  className={styles.banner}>
            <EditBanner data={data} />
            <div className={styles.imageContainer}>
                <Image
                src="/banner2.png"
                alt="Banner"
                layout="fill" 
                objectFit="cover" 
                />
            </div>
            <div className={styles.block}>
                <div className={styles.data2}>
                    <h2>{data.title}</h2>
                    <p className={styles.para}>{data.description}</p>
                </div>
                
                <Image src={data.image} width={150} height={150} alt="" className={styles.profileimg2 } />
            </div>
            
        </div>
    </>);
}

export default Banner2;