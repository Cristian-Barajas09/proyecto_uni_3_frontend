// imports
import React from "react"
import { useDispatch } from "react-redux"
import { loginAsync } from "../../features/authSlice"
import { AppDispatch } from '@shared/store/store'
import './styles.css';

export function LoginPage() {
    // todo: add structure and styles here XD

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const dispatch = useDispatch<AppDispatch>();

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleChagePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch(loginAsync({ username: email, password }));
    }


    return (
        <div>
            <section className="login-header">
                <h1>Login</h1>
            </section>
            <section>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={handleChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={handleChagePassword} />
                    </div>
                    <button className="save-button" type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}