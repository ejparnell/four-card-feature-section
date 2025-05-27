import styles from './Heading.module.css';

export default function Heading() {
    return (
        <header className={styles.header} aria-labelledby='Home Page'>
            <h1 className={styles.heading} id='Home Page'>
                <span className={styles.headingAccent}>
                    Reliable, efficient delivery <br />
                </span>
                Powered by Technology
            </h1>
            <p className={styles.subHeading}>
                Our Artificial Intelligence powered tools use millions of
                project data points to ensure that your project is successful
            </p>
        </header>
    );
}
