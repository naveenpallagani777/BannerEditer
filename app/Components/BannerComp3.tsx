import styles from "./styles.module.css"
import EditBanner from "./Event";


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
            <EditBanner data={data}  />
            <div className={styles.block}>
                <div className={styles.data3}>
                    <h2>{data.title}</h2>
                    <p className={styles.para}>{data.description}</p>
                </div>
                
                <img src={data.image} alt="" className={styles.profileimg3} />
            </div>
            <img src="/banner3.jpg" alt="" className={styles.background}/>
        </div>
    </>);
}

export default Banner3;