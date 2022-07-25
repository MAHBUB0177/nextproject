import React from 'react'
import styles from '../styles/Home.module.css'
import Layout from './layout'

const contact = () => {
  return (
          <div className={styles.container}>
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