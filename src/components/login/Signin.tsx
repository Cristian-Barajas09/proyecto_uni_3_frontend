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
        <div className="flex h-screen items-center justify-center">
            <div className="w-1/2 h-1/2 flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 lg:w-1/2 lg:h-2/3 w-full h-full  shadow-lg justify-center items-center "
                >
                    <div className="flex flex-col">
                        <label htmlFor="">Email</label>
                        <input
                            title="Email"
                            onChange={handleChangeEmail}
                            type="text" className="border"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Contraseña</label>
                        <input
                            title="Contraseña"
                            type="password"
                            onChange={handleChangePassword}
                            className="border"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-black text-white py-2 px-5 cursor-pointer"
                        >Iniciar Sesión</button>
                        { error }
                    </div>
                </form>
            </div>
        </div>
    )
}


export {
    SignIn
}