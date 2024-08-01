import styles from "./styles.module.css"
import EditBanner from "./Event";

interface Banner1Props {
    data: {
      b: string;
      title: string;
      image: string;
      index : number;
      description: string;
    };
  }

  const Banner1: React.FC<Banner1Props> = ({ data }) => {
    return(<>
        <div  className={styles.banner}>
            <EditBanner data={data} />
            <img src="/banner1.jpg" alt="" className={styles.background} />
            <div className={styles.block}>
                <div className={styles.data}>
                    <h2>{data.title}</h2>
                    <p className={styles.para}>{data.description}</p>
                </div>
                
                <img src={data.image} alt="" className={styles.profileimg1 }/>
            </div>
        </div>
    </>);
}

export default Banner1;