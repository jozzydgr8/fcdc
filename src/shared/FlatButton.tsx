
import {JSX} from 'react'
type buttonProps = {
    title:string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void),
    className?:string,
    disabled?:boolean
    icon?: JSX.Element,
    children?:JSX.Element
    style?: React.CSSProperties


}
export const FlatButton = ({children, title, onClick,className,disabled, icon, style}:buttonProps)=>{
    return(
        <button onClick={onClick} className={className} disabled={disabled} style={style}>
            {title} {children} {icon}
        </button>
    )
}