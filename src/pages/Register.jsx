import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images/logo.png'
import { useHistory } from 'react-router';
import cookiesHandler from '../helpers/cookie';

export default function Register () {
    const checkBox = useRef();
    const [hide, setHide] = useState('password');
    const nikRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const conPasswordRef = useRef();
    const [message, setMessage] = useState('');
    const router = useHistory();

    const isLogin = async() => {
        const isLogin = cookiesHandler.getCookie('nik');
        if (isLogin) return router.push('/');
    }

    const togglePassword = () => {
        if(checkBox.current.checked) return setHide("");
        setHide("password")
    }

    const handleRegister = () => {
        setMessage("");
        const data = {
            name: nameRef.current.value,
            nik: nikRef.current.value,
            password: passwordRef.current.value,
        };

        if (data.password !== conPasswordRef.current.value) {
            setMessage("Konfimasi password tidak valid");
            return 0;
        }
        axios.post('https://sandu-api.herokuapp.com/api/register', data)
            .then(res => {
                setMessage("Akun Berhasil Dibuat");
                setTimeout(() => {
                    router.push('/login');
                }, 2000)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        isLogin();
    })

    return(
        <div className="flex flex-col bg-blue">
            <div className="flex justify-center items-center py-16">
                <img src ={images} className="w-28"/>
            </div>
            <div className="bg-white rounded-t-xl">
                <div className="flex justify-center flex-col w-8/12 mx-auto rounded-t-xl pb-10 md:w-6/12 lg:w-4/12 xl:w-3/12">
                    <h2 className="text-2xl font-bold mt-4 text-center w-full">Daftar Akun</h2>
                    <p className>{message}</p>
                    <form className="pt-4 flex flex-col w-62">
                        <input type="text" className="border-2 p-2 rounded-xl my-3" placeholder="Nama Lengkap Bayi" ref={nameRef}/>
                        <input type="number" className="border-2 p-2 rounded-xl my-3" placeholder="Nomer Induk Kependudukan" ref={nikRef}/>
                        <input type={hide} className="border-2 p-2 rounded-xl my-3" placeholder="Password" ref={passwordRef}/>
                        <input type={hide} className="border-2 p-2 rounded-xl my-3" placeholder="Konfirmasi Password" ref={conPasswordRef}/>
                    </form>
                    <div className="flex items-center w-62 my-2">
                        <input type="checkbox" className="mx-2" onChange={togglePassword} ref={checkBox}/>
                        <p className="text-sm">Tampilkan password</p>
                    </div>
                    <button className="px-4 py-2 bg-blue text-white rounded-lg mt-8" onClick={handleRegister}>Daftar</button>
                    <div className="flex flex-row mt-4 justify-center text-sm">
                        <p>Sudah punya akun? </p>
                        <Link to="/login" className="text-blue-500 underline ml-2">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}