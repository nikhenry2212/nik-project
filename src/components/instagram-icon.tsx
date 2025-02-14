interface IconSocialProps {
    src: string;
    href: string;
  }


export const IconSocial = ({src,href}: IconSocialProps) => {
    return (
        <a target="_blank" href={href}>

            <img  style={{width: 80, height:80, borderRadius: 50}} src={src}></img>
        </a>
    )
}