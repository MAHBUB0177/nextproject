import React from 'react'
import Meta from '../Component/Meta'
import styles from '../styles/Home.module.css'
import Layout from './layout'

const contact = () => {
  return (
          <div className={styles.container}>
            <Meta title='Contact' keyword="react,next.project" description="..."/>
    <div className={styles.card}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore qui similique fuga cumque sit tempora, suscipit vero nobis tempore itaque.</p>

    </div>
    </div>
  )
}

contact.getLayout = function getLayout(page) {
          return (
            <Layout>
              {page}
            </Layout>
          )
        }

export default contact