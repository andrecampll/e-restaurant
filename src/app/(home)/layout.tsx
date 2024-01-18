export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>Home layout</header>
      <div>{children}</div>
    </>
  )
}
