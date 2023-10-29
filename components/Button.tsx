import Image from "next/image"
import Link from "next/link"

type ButtonProps = {
    linkPage: string,
    title: string,
    icon?: string,
    style: string,
    full?: boolean
}


export const Button = ({ linkPage, title, icon, style,full}: ButtonProps) => {
  return (
    <Link href={linkPage} className={`flexCenter gap-3 rounded-full border ${style} ${full && `w-full`}`}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <div className="bold-16 whitespace-nowrap">{title}</div>
    </Link>
  )
}
