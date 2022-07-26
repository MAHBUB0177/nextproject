import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from './header'
import { about } from './about'
import Layout from './layout'
import Meta from '../Component/Meta'
// import { Button } from 'bootstrap'

const Home =({data})=> {
  console.log(data,'name data')
  return (
    < >
      {/* <Meta title='next project1' keyword="react,next.project" description="..."/> */}
      <main className='container mt-4'>
        <div className='row' >
          {
            data?.map((news)=>(
              <div className={styles.card1} key={news.id} >
                <h3>{news?.title.substring(0,20)}</h3>
                <p>{news?.body.substring(0,50)}</p>
                {/* <button type="button" className="btn btn-primary">Primary</button> */}
                </div>
            ))
          }

        </div>

      </main>
     

      
    </>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=12`)
  const data = await res.json()
  console.log(data,'data products')

  // Pass data to the page via props
  return { 
    props: { 
      data
     } 
    }
}


Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}


export default Home;