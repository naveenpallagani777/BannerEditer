import styles from "./styles.module.css"
import EditBanner from "./Event";

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
            <div className={styles.block}>
                <div className={styles.data2}>
                    <h2>{data.title}</h2>
                    <p className={styles.para}>{data.description}</p>
                </div>
                
                <img src={data.image} alt="" className={styles.profileimg2 } />
            </div>
            <img src="/banner2.png" alt="" className={styles.background}/>
        </div>
    </>);
}

export default Banner2;