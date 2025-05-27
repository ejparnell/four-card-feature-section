import Card from '../Card';
import supervisorImage from '../../../public/images/icon-supervisor.svg';
import teamBuilderImage from '../../../public/images/icon-team-builder.svg';
import karmaImage from '../../../public/images/icon-karma.svg';
import calculatorImage from '../../../public/images/icon-calculator.svg';
import styles from './CardList.module.css';

const cardData = [
    {
        title: 'Supervisor',
        description: 'Monitors activity to identify project roadblocks',
        image: supervisorImage,
        alt: 'Supervisor Icon',
        color: 'cyan',
    },
    {
        title: 'Team Builder',
        description:
            'Scans our talent network to create the optimal team for your project',
        image: teamBuilderImage,
        alt: 'Team Builder Icon',
        color: 'red',
    },
    {
        title: 'Karma',
        description: 'Regularly evaluates our talent to ensure quality',
        image: karmaImage,
        alt: 'Karma Icon',
        color: 'orange',
    },
    {
        title: 'Calculator',
        description:
            'Uses data from past projects to provide better delivery estimates',
        image: calculatorImage,
        alt: 'Calculator Icon',
        color: 'blue',
    },
];

export default function CardList() {
    return (
        <section className={styles.cardList}>
            {cardData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    alt={card.alt}
                    color={card.color}
                />
            ))}
        </section>
    );
}
