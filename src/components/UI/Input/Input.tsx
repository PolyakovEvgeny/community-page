import './Input.styles.scss'

interface Props {
    value?: string,
    onChange?: (value?: string) => void,
    placeholder?: string,
}

const Input: React.FC<Props> = ({ value = 'Title', onChange, placeholder= "Post title"}) => {

    return (
        <input
            className={'Input'}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange ? onChange(e.target.value || '') : undefined}
        />
    );
};

export default Input;
