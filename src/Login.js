import {React, useEffect, useState} from 'react'
import {useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import {db, registerWithEmailAndPassword, signInWithGoogle, logInWithEmailAndPassword} from './firebase-config'
import { collection, query, where, getDocs } from "firebase/firestore";
import "./login.css";

export default function Login() {

    const navigate = useNavigate()

    const [loginEmail, setLoginEmail] = useState("")
    const [loginSenha, setLoginSenha] = useState("")

    const entrar = async () => {
        var estado = false
        if(await logInWithEmailAndPassword(loginEmail, loginSenha) ){
            estado = true
            console.log("logado")
        }

        else{
            estado = false
        }

        if(estado == true){
            navigate("/feed")
        }
    }

  return (
    <div className='mainLogin'>
        <div className='form'>
            <h1 className='tFace'>Facebook</h1>

            <h1 className='regis'>Entrar</h1>

            <h2>Email</h2>
            <input placeholder='Email...' onChange={(event) => {setLoginEmail(event.target.value);}}/>
            
            <h2>Senha</h2>
            <input type="" placeholder='senha...' onChange={(event) => {setLoginSenha(event.target.value);}} />

            <button type="button" onClick={entrar}>Entrar</button>

            <Link to="/creater" className='button1'>
                <label>Usuário novo?</label><button>Criar conta!</button>
            </Link>
        </div>
    </div>
  )
}
