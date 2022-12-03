import "./Input.scss";

function Input( { id, type, placeholder } ) {
    return (
        <input id={id} className="input" type={type} placeholder={placeholder}/>
    )
}

export default Input;