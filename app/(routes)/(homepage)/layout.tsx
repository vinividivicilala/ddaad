import Layout from '@/layouts/Default'

interface Props {
  children: React.ReactNode
}

const HomepageLayout = ({ children }: Props) => <Layout>{children}</Layout>

export default HomepageLayout
