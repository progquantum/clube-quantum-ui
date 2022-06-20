import dynamic from 'next/dynamic'

const Header = dynamic(() => import('components/Header').then((mod) => mod.Header), { ssr: false })

export function DashboardPage () {
  return (
    <>
      <Header />
    </>
  )
}
