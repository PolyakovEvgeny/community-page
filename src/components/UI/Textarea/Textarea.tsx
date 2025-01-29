import './Textarea.styles.scss'
import {forwardRef} from "react";

interface Props {
    value?: string,
    onChange?: (value: string) => void,
    placeholder?: string
}

const TextArea: React.FC<Props> = forwardRef<HTMLTextAreaElement, Props>(({ value = 'Content', onChange, placeholder="Post content" }, ref ) => {

    return (
        <textarea
            ref={ref}
            className={'Textarea'}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange ? onChange(e.target.value || '') : undefined}
            rows={1}
            onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                e.currentTarget.style.height = "1.5em";
                e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
            }}
        />
    );
});

export default TextArea;
