import '@/components/styles/pill.css';

interface Props {
    text: string;
    icon: preact.ComponentChildren;
}

export default function Pill({text, icon}: Props){
    return (
        <div className="pill">
            {icon}
            <span className="pill__text">{text}</span>
        </div>
    )
}