import Button from '../components/Button';
import './home.css';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    const goToProject = () => {
        navigate("/project");
    };

    const goToProfile = () => {
        navigate("/profile");
    }


    return (
        <div className="home">
            <div className="background_card">
                <div className='btn_card'>
                    <Button onClick={goToProject} children="Projects"/>
                    <Button onClick={goToProfile} children="Profile"/>
                </div>
                <div className='card'>
                    <div className='intro'>
                        <h2>Hi, I am Junior Fullstack Developer</h2>
                        <h3>I am a software engineer who has learned to create full stack websites. I really like connecting the back-end and front-end so that it creates an elegant website harmony.</h3>
                        <div className='contact'>
                            <h3>Contact : </h3>
                            <div>
                                <a href='https://github.com/firleichjordan'><img src='github-48.png' alt='github'/></a>
                                <a href='https://www.linkedin.com/in/jordan-sihombing-7ab171a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src='/public/linkedin-48.png' alt='linkedin'/></a>
                                <a href='https://jordanhombing.js@gmail.com'><img src='/public/gmail-48.png' alt='github'/></a>
                            </div>
                        </div>
                    </div>
                    <div className='image-page'>
                        <image className='image' src="profile.jpg"></image>
                        <h1 className='name'>Firleich Jordan</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;