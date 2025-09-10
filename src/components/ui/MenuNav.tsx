import Link from "next/link"

export const MenuNav = ({
  href,
  children,
  bgClassName = "bg-primary",
  textClassName = "",
  target = "_self",
}: {
  href: string
  children: React.ReactNode
  bgClassName?: string
  target?: string
  textClassName?: string
}) => {
  return (
    <Link
      href={href}
      key={href}
      target={target}
      className="group flex flex-col gap-y-0.5"
    >
      <p className={textClassName}>{children}</p>
      <span
        className={`h-px w-0 transition-all duration-300 group-hover:w-full ${bgClassName}`}
      ></span>
    </Link>
  )
}
