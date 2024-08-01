import styles from "./styles.module.css"
import EditBanner from "./Event";
import Image from "next/image";

interface Banner4Props {
    data: {
        b: string;
        title: string;
        image: string;
        index : number;
        description: string;
    };
}

const Banner4: React.FC<Banner4Props> = ({ data }) => {
    return(<>
        <div  className={styles.banner}>
            <EditBanner data={data} />
            <div className={styles.imageContainer}>
                <Image
                src="/banner4.jpg"
                alt="Banner"
                layout="fill" 
                objectFit="cover" 
                />
            </div>
            <div className={styles.block}>
                <div className={styles.data4}>
                    <h2>{data.title}</h2>
                    <p className={styles.para}>{data.description}</p>
                </div>
                
                <Image src={data.image} width={158} height={200} alt="" className={styles.profileimg4} />
            </div>
            
        </div>
    </>);
}

export default Banner4;