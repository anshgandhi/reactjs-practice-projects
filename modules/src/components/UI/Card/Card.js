import classes from './Card.module.css';
 
function Card(props) {
    // 'props.children' would give the HTML content passed to React Component.
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
}

export default  Card;