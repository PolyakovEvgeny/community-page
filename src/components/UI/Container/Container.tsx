import './Container.styles.scss'

interface Props{
    children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {

    return (
        <main className={`Container`}>
            {children}
        </main>
    );
};

export default Container;
