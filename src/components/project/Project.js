import { Link } from 'react-router-dom'
import './Project.css'

function Project (props){
    return(    
        <div className='project'>
            
            <Link to={props.link}>
                <img src={props.img} className='project-image'/>
            </Link>
            
            <div className='project-description'>
                {props.project}
            </div>
            
        </div>
    );
}

export default Project;