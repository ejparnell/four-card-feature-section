import Heading from '@/components/Heading';
import CardList from '@/components/CardList';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <Heading />
            <CardList />
        </main>
    );
}
