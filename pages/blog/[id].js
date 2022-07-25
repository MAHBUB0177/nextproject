import styles from '../../styles/Home.module.css'
import {useRouter} from 'next/router'
const post= () => {
          const router=useRouter();
          const{id}=router.query;
  return (
    <div>

<h2>this is a simple post:{id}</h2>
    </div>
  )
}

export default post;