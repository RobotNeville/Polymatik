
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return(

    <div>
      <p>Homepage</p>
       <UserButton afterSignOutUrl='/' />   
    </div>
   
  )
}
