import Image from 'next/image';
import styles from './Card.module.css';

interface CardProps {
    title: string;
    description: string;
    image: string;
    alt: string;
    color: string;
}

export default function Card({
    title,
    description,
    image,
    alt,
    color,
}: CardProps) {
    const IMAGE_SIZE = 64;

    return (
        <div>
            <div className={`${styles.cardAccent} ${styles[color]}`} />

            <div className={styles.card}>
                <h2 className={styles.cardHeader}>{title}</h2>

                <p className={styles.cardContent}>{description}</p>
                <Image
                    src={image}
                    alt={alt}
                    width={IMAGE_SIZE}
                    height={IMAGE_SIZE}
                    className={styles.cardImage}
                />
            </div>
        </div>
    );
}
