import {Card} from './Card.jsx'

export function App(){
  return (
    <section className='cards'>
      <Card 
        name='Kevin Powell' 
        usarName='KevinJPowell' 
        initialIsFollowing/>
      <Card 
        name='Freddy Vega' 
        usarName='freddier' 
        initialIsFollowing />
      <Card 
        name='Elon Musk' 
        usarName='elonmusk' 
        initialIsFollowing={false}/>
    </section>
  )
}