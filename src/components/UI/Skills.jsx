export default function Skills(){
    const skills = [
        'SQL',
        'PostgreSQL',
        'MongoDB',
        'React',
        'Node.js',
        'Express',
        'HTML',
        'CSS',
        'JavaScript',
    
    ];

    const listItems = skills.map(skill => <li>{skill}</li>);
    return(
        <ul>{listItems}</ul>
    )
}