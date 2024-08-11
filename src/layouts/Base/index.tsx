interface BaseLayoutProps {
  children: React.ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return <div className=" flex flex-col">{children}</div>
}
