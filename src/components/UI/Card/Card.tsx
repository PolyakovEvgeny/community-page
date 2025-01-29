import './Card.styles.scss'

interface Props {
    children?: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {

    return (
        <div className={'Card'}>
            {children}
        </div>
    );
};

export default Card;
