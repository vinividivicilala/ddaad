import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Props {
  children: React.ReactNode
  variant?: 'default' | 'blog' | 'post'
}

const Layout = ({ children, variant = 'default' }: Props) => (
  <div className="flex flex-col w-full min-h-screen justify-between">
    <Header variant={variant} />

    <main className="grow">{children}</main>

    <Footer />
  </div>
)

export default Layout
