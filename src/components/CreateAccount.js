import React, {useEffect, useState} from "react";
import {Button} from "./utils/Button";
import '../styles/CreateAccount.css'
import validator from 'validator'

function CreateAccount(){
    const [name, setName] = useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const [passwordC, setPasswordC] = useState('');
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
    const imageMimeType = /image\/(png|jpg|jpeg)/i;

    const [emailError, setEmailError] = useState('')
    const [nameError, setnameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const validateEmail = (email) => {

        if (validator.isEmail(email)) {
            setEmail(email)
            console.log("Valid Email")
        } else {
            setEmailError('Enter valid Email!')
            setEmail('')
            console.log("Invalid Email")
        }
    }
    const validateInput = () =>{
        if (name.length <= 1){
            setnameError("You must enter a name!")
            console.log('No name error')
        } else {
            setnameError('')
        }
        validateEmail(email)
        if (password !== passwordC){
            setPasswordError("Passwords do not match :(")
            setPassword('')
            setPasswordC('')
            console.log("Password not match error")
        } else {
            setPasswordError('')
        }
    }

    const changeHandler = (e) => {
        const file = e.target.files[0];
        if (!file.type.match(imageMimeType)) {
            alert("Image type is not valid");
            return;
        }
        setFile(file);
    }
    useEffect(() => {
        let fileReader, isCancel = false;
        if (file) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result && !isCancel) {
                    setFileDataURL(result)
                }
            }
            fileReader.readAsDataURL(file);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        }

    }, [file]);
    function handleSubmit(event) {
        //event.preventDefault();
        validateInput()
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
                            <span className='error-message'>{nameError}</span>
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
                            <span className='error-message'>{emailError}</span>
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
                            <span className='error-message'>{passwordError}</span>
                        </div>
                        <div>
                            <label className='form-cat' htmlFor="image">(Optional) Profile Picture:</label>
                            <input
                                id="file"
                                type="file"
                                accept='.png, .jpg, .jpeg'
                                onChange={changeHandler}
                            />
                            {fileDataURL ?
                                <p className="img-preview-wrapper">
                                    {
                                        <img src={fileDataURL} alt="preview" />
                                    }
                                </p> : null}
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
