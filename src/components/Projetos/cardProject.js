
const Card = (props) =>
    <div className="projects_container color-6">
        <img className="image_projects" src={props.icon} />
        <p className="coment_projects">{props.titulo}</p>
        <div className="button_card">
            <a href={props.gitHub} target='_blank' className="link_card">GitHub</a>
            <a href={props.deploy} target='_blank' className="link_card">Deploy</a>
        </div>
    </div>
export default Card;