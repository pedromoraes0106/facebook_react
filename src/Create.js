import {React, useEffect, useState} from 'react'
import {useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import {db, registerWithEmailAndPassword, signInWithGoogle, logInWithEmailAndPassword} from './firebase-config'
import { collection, query, where, getDocs } from "firebase/firestore";
import "./login.css";
import { Create } from '@mui/material/styles/createTransitions';

export default function Creater()
{
    const [newEmail, setNewEmail] = useState("")
    const [newNome, setNewNome] = useState("")
    const [newSenha, setNewSenha] = useState(0)

    const registrar = () => {
    if(!newNome) alert("Digite um nome")
    registerWithEmailAndPassword(newNome, newEmail, newSenha)
    }

    return (
        
        <div className='mainLogin'>
            <div className='form'>
                <h1 className='tFace'>Facebook</h1>
                <h1 className='regis'>Registrar</h1>
    
                <h2>Email</h2>
                <input placeholder='Email...' onChange={(event) => {setNewEmail(event.target.value);}} />
                
                <h2>Nome</h2>
                <input placeholder='Nome...' onChange={(event) => {setNewNome(event.target.value);}} />
                
                <h2>Senha</h2>
                <input type="" placeholder='senha...' onChange={(event) => {setNewSenha(event.target.value);}} />
                <button className="btn btn-primary" onClick={registrar}>Registrar</button>
                <Link to="/" className='button1'>
                <label>Ja possui uma conta?</label><button>Login!</button>
            </Link>
            </div>
        </div>
      )
}