import React from "react"
import {navigate} from 'astro:transitions/client'
import { useCookies } from "react-cookie"

function SignIn() {
    const [email,setEmail] = React.useState("")
    const [password,setPassword] = React.useState("")
    const [error,setError] = React.useState("")
    const [token,setToken] = useCookies(['refreshToken','token'])


    if(token.refreshToken) {
        window.location.href = '/'
    }

    React.useEffect(() => {

        return () => {
            setEmail('')
            setPassword('')
            setError('')
        }
    },[])



    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        fetch('/api/auth/login',{
            method: 'POST',
            body: JSON.stringify({email,password})
        }).then(res => {
            if(!res.ok) {
                setError("Error al iniciar sesión")
                return
            }
            return res.json()
        }).then(({ data }: {data:{access:string,refresh: string}}) => {
            setToken('token',data.access)
            setToken('refreshToken',data.refresh)
            return navigate('/')
        })
    }

    return (
        <div 
            className="mt-20 lg:mt-3 flex p-2">
            <div className="w-full flex flex-col justify-items-center  items-center">
                <h1>Iniciar sesión</h1>
                <form
                onSubmit={handleSubmit}
                className="flex flex-col w-1/2 mt-5 gap-4"
                >

                        <label className="input input-bordered flex items-center gap-2" htmlFor="email">
                            <input 
                                type="email" id="email" value={email} onChange={handleChangeEmail} placeholder="Email" className="grow" />
                        </label>

                        <label className="input input-bordered flex items-center gap-2" htmlFor="password">
                            <input type="password" id="password" value={password} onChange={handleChangePassword} placeholder="Contraseña" className="grow" />
                        </label>
                    <button type="submit" className="btn btn-primary w-full">Iniciar sesión</button>
                    {error && <p>{error}</p>}
                </form>
            </div>
            <div className="hidden lg:block w-full h-full">
                <img
                    src="/food-3594552_1280.jpg" alt="imagen de inicio"
                    className="rounded-lg w-full h-full object-cover"
                />
            </div>
        </div>
    )
}


export {
    SignIn
}