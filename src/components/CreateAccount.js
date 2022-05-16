import React, {useState} from "react";
import {Button} from "./Button";
import '../styles/CreateAccount.css'

function CreateAccount(){
    const [name, setName] = useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const [passwordC, setPasswordC] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('name:', name);
        console.log('email:', email);
    }
    return (
        <div className='SignUp-container'>
            <div className='SignUp-column'>
                <span className='title'>Sign Up</span> <br/> <br/>
                <div className = "form-box">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className='form-cat' htmlFor="name">Name:</label>
                            <input
                                placeholder="Username"
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='form-cat' htmlFor="email">Email:</label>
                            <input
                                placeholder="abc@abc.fr"
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='form-cat' htmlFor="password">Password:</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className='form-cat' htmlFor="passwordC">Password Confirmation:</label>
                            <input
                                id="passwordC"
                                type="password"
                                value={passwordC}
                                onChange={(e) => setPasswordC(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
                <div className='SignUp-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        onClick={()=>handleSubmit()}
                    >
                        Create your Account
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default CreateAccount
