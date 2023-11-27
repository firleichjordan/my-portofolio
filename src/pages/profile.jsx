import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Profile = () => {

    const navigate = useNavigate();

    const goToProject = () => {
        navigate("/project");
    };

    const goToHome = () => {
        navigate("/");
    }

    return(
        <div className="home">
            <div className="background_card">
                <div className='btn_card'>
                    <Button onClick={goToProject} children="Projects"/>
                    <Button onClick={goToHome} children="Home"/>
                </div>
                <div className='card'>
                    <div className='intro-profile'>
                        <h2>I am Junior Fullstack Developer</h2>
                        <h3>I usually create websites using JavaScript as a programming language, with React.js as the library and Next.js as the framework. I am also interested to learning other programming languages.</h3>
                        <div className="tech">
                            <h3>Tech Front-End</h3>
                            <div className="icon">
                                <img src="html-48.png" alt="html-48"/>
                                <img src="css-48.png" alt="css-48"/>
                                <img src="tailwindcss-48.png" alt="tailwindcss-48"/>
                                <img src="javascript-48.png" alt="javascript-48"/>
                                <img src="react-48.png" alt="react-48"/>
                            </div>
                        </div>
                        <div className="tech">
                            <h3>Tech Back-End</h3>
                            <div className="icon">
                                <img src="express-js-48.png" alt="express-js-48"/>
                                <img src="nodejs-48.png" alt="node-js-48"/>
                                <img src="mysql-48.png" alt="mysql-48"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;