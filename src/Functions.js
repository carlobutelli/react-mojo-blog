import { useState } from "react";

const Functions = () => {

    const handleClick = () => {
        console.log('Hallo ninjas');
    }

    const handleClickAgain = (name) => {
        console.log('hello ' + name);
    }

    const handleClickEvent = (e) => {
        console.log(e.target);
    }

    // Use state hooks helps to make values reactive
    // let name = 'mario';
    const [name, setName] = useState('mario');

    const [age, setAge] = useState('25');

    const handleChangeName = () => {
        setName('Giuseppe');
        setAge(30);
    }

    return ( 
        <div className="functions">
            <h1>Functions</h1>
            {/* invoke a reference to the function so when the button is clicked the message will appear */}
            <button onClick={handleClick}>Click me</button> 
            <button onClick={() => handleClickAgain('mario')}>Click me again</button>
            <button onClick={(e) => handleClickEvent(e)}>Get Event</button>
            <p>{ name } is { age } years old</p>
            <button onClick={handleChangeName}>Change Name</button>
        </div>
     );
}
 
export default Functions;