import React, {useState} from 'react'

const Form = props => {
    // const [firstName, setFirstName] =useState('')
    // const [lastName, setLastName] =useState('')
    // const [email, setEmail] =useState('')
    // const [password, setPassword] = useState('')

    const [inputState, setInputState] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        confPassword : ''

    })


    const handleChange = event => {
        const {name, value} = event.target

        setInputState({
        ...inputState,
        [name] : value
        })
        //setEmail(event.target.value)
    }





    return(
        <div>
            <form action="">
                <p>
                    First Name:
                    <input type="text" name="firstName" onChange={handleChange} id="" />
                </p>
                <p>
                    Last Name:
                    <input type="text" name="lastName" onChange={handleChange} id="" />
                </p>
                <p>
                    Email:
                    <input type="text" name="email" onChange={handleChange} id="" />
                </p>
                <p>
                    Password:
                    <input type="password" name="password" onChange={handleChange} id="" />
                </p>
                <p>
                    Confirm Password:
                    <input type="password" name="confPassword" onChange={handleChange} id="" />
                </p>
            </form>
            <div>
                <p>First Name: {inputState.firstName}</p>
                <p>Last Name: {inputState.lastName}</p>
                <p>Email: {inputState.email}</p>
                <p>Password: {inputState.password}</p>
                <p>Confirm Password: {inputState.confPassword}</p>
            </div>
        </div>
    )
    }

export default Form