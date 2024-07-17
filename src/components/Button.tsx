import '@/components/styles/button.css'

interface Props{
    href?: string;
    text: string;
    target?:string;
    children?: preact.ComponentChildren;
    onClick?: (e:MouseEvent) => any
}
export default function Button({ href, text, target, onClick, children }: Props) {
    return (
        href ? (
            <a href={href} className="btn" target={target} onClick={onClick}>
                {children}
                {text}
            </a>
        ) : (
            <button className="btn" onClick={onClick}>
                {children}
                {text}
            </button>
        )
    );
}