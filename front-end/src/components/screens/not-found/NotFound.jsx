import Layout from "../../layout/Layout.jsx";
import styles from '/src/components/screens/not-found/NotFound.module.scss'

const NotFound = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.nf__text}>
                    Page not found!
                </h1>
            </div>
        </Layout>
    );
};

export default NotFound;