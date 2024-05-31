import Skills from "../components/UI/Skills";
import { Link } from 'react-router-dom';

export default function ResumePage(){
    return (
        <div>
            <main>
                <h3>Skills Learned at Bootcamp:</h3>
                <Skills />
                <br />
                <Link to="/assets/resume.pdf" target="_blank" download>Download my personal Resume</Link>
            </main>
        </div>
    )
}