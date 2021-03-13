import './Home.css'
import Header from '../../components/header/Header'
import Project from '../../components/project/Project'

import wetask from '../../media/wetask.png'
import grocerypal from '../../media/grocerypal.png'

function Home (){
    return(
        <>
            <Header/>
            <div className='splash'>

                <div className='opener'>
                    Hi, I'm Jacob
                    <br/>
                </div>
                
                <div className='opener2'>
                    I’m an User Experience Designer in the Seattle Area
                    <br/>
                    Scroll down to see what I’ve been up to!
                </div>
            
            </div>

            <div className='project-list'>
                <Project project='WeTask: A thing for your thing' img={wetask} link='/wetask'/>

                <Project project='GroceryPal: A Food Tracker for your phone' img={grocerypal} link='/grocerypal'/>
            </div>
        </>
    );
}

export default Home;