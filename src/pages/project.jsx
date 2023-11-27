import Button from '../components/Button';
import {useNavigate } from 'react-router-dom';
import './project.css';

const Project = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    }

    return (
        <div className="project-page">
            <div className='background-card'>
                    <img className="project-image" src="bookstores.png" alt="bookstores"/>
                    <div className='project-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam atque quisquam esse nostrum dolorem delectus doloremque sapiente incidunt eius eligendi ea praesentium necessitatibus corporis, consequatur aliquam non optio quod cumque quis illum sit. Tempore dolorum et cumque repellat cupiditate animi ex ab voluptates nulla aliquam vel exercitationem praesentium, earum itaque quae minus veniam quidem impedit? Tenetur, inventore cumque aliquid aperiam quis vel modi ipsum ut dicta autem, qui explicabo? Suscipit iste dolores alias praesentium excepturi modi, eligendi quam error sit sequi. Illo commodi tenetur atque dolorem ex voluptatem omnis possimus. Dolor ducimus, non iure repudiandae culpa molestiae optio rem? Soluta.</div>
            </div>
            <div className='btnin-project'>
                <Button onClick={goToHome} children="Home"/>
            </div>
        </div>
    )
};

export default Project;