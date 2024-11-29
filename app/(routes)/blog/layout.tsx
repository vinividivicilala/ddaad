import Layout from '@/layouts/Default'

interface Props {
  children: React.ReactNode
}

const BlogLayout = ({ children }: Props) => <Layout variant="blog">{children}</Layout>

export default BlogLayout
