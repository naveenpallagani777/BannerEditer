import styles from "./styles.module.css"
import EditBanner from "./Event";

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
            <div className={styles.block}>
                <div className={styles.data4}>
                    <h2>{data.title}</h2>
                    <p className={styles.para}>{data.description}</p>
                </div>
                
                <img src={data.image}alt="" className={styles.profileimg4} />
            </div>
            <img src="/banner4.jpg" alt="" className={styles.background} />
        </div>
    </>);
}

export default Banner4;