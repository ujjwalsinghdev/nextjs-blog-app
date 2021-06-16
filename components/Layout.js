import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import styles from "../styles/Layout.module.css"
const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header></Header>

      <div className={styles.container}>{children}</div>
      <Footer></Footer>
    </div>
  )
}

Layout.defaultProps = {
  title: "Ujjwal Singh",
  description: "Ujjwal Singh",
  keywords: "Ujjwal Singh"
}

export default Layout
