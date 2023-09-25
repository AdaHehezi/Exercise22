import profilepic from '../component/img/janedoe.png';

const About = () => {
    return (  
        <div className="row" id="about">
        <div className="col-sm-8">
            <h1 className="display-4">Jane Doe</h1>
            <p className="lead"><b> janedoe@geemail.com</b></p>
            <hr className="my-4"/>
            <p><b> Career Objective </b> <br/>Seeking a responsible career opportunity in the field of Computer Science where I can utilize my logical and technical skills towards personal and professional development </p>
            <p className="lead">
             
            </p>
        </div>
        <div className="col-sm-3">
            <span>
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2 proimage" src={profilepic} alt="..." />
            </span>
        </div>
        </div>
    );
}
 
export default About;
