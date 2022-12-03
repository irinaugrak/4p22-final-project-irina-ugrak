import "./Textarea.scss";

function Textarea( { id, placeholder } ) {
    return (
        <textarea className="textarea" placeholder={placeholder} name="" id={id} cols="30" rows="10"></textarea>
    )
}

export default Textarea;