import './About.css'
import Header from '../../components/header/Header'
import mypic from '../../media/mypic.png'

function About (){
    return(
        <>
            <Header/>
                        
            <body className='about-page'>
                <img src={mypic} className='about-image'/>
                This is my about page!
                <br/>
                My name is Jacob Laxton and right now my website is bad
            </body>

        </>
    );
}

export default About;