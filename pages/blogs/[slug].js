import Layout from "../../components/Layout"

import { useRouter } from "next/router"

const BlogPage = () => {
  const router = useRouter()
  console.log(router)
  return (
    <Layout>
      <h1></h1>
    </Layout>
  )
}

export default BlogPage
