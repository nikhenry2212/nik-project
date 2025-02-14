export const IconSocial = ({src,href}) => {
    return (
        <a target="_blank" href={href}>

            <img  style={{width: 80, height:80, borderRadius: 50}} src={src}></img>
        </a>
    )
}