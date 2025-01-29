import {voidFunction} from "../../../utils/helpers/VoidFunction";
import './Button.styles.scss'

export enum ButtonColor {
    primary = 'primary',
    secondary = 'secondary',
}

export enum ButtonSize {
    small ='small',
    medium ='medium',
    large = 'large',
}

interface Props{
    onClick?: () => void;
    color?: ButtonColor;
    size?: ButtonSize;
    children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ onClick = voidFunction, color= ButtonColor.primary, size = ButtonSize.medium, children = 'Button' }) => {

    return (
        <button onClick={onClick} className={`Button Button__${color} Button__${size}`}>
            {children}
        </button>
    );
};

export default Button;
