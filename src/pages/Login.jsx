import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images/logo.png';
import {useHistory} from 'react-router'
import cookiesHandler from '../helpers/cookie';

export default function Login () {
    const checkBox = useRef();
    const [hide, setHide] = useState('password');
    const nikRef = useRef();
    const passwordRef = useRef();
    const router = useHistory();

    const isLogin = async() => {
        const isLogin = cookiesHandler.getCookie('nik');
        if (isLogin) return router.push('/');
    }

    const handleClick = () => {
        const data = {
            nik: nikRef.current.value,
            password: passwordRef.current.value
        };
        axios.post('https://sandu-api.herokuapp.com/api/login', data)
            .then(res => {
                cookiesHandler.setCookie('nik', res.data.nik);
                router.push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }

    const togglePassword = () => {
        if(checkBox.current.checked) return setHide("");
        setHide("password")
    }

    useEffect(() => {
        isLogin();
    })

    return(
        <div className="flex flex-col bg-blue">
            <div className="flex justify-center items-center py-16">
                <img src ={images} className="w-28"/>
            </div>
            <div className="bg-white rounded-t-xl pb-10">
                <div className="flex justify-center flex-col w-8/12 mx-auto rounded-t-xl md:w-6/12 lg:w-4/12 xl:w-3/12">
                    <h2 className="text-2xl font-bold mt-4 text-center w-full">Login</h2>
                    <form className="pt-4 flex flex-col w-62">
                        <input type="number" className="border-2 p-2 rounded-xl my-3" placeholder="Nomor Induk Kependudukan" ref={nikRef}/>
                        <input type={hide} className="border-2 p-2 rounded-xl my-3" placeholder="Password" ref={passwordRef}/>
                    </form>
                    <div className="flex items-center w-62 my-2">
                        <input type="checkbox" className="mx-2" onChange={togglePassword} ref={checkBox}/>
                        <p className="text-sm">Tampilkan password</p>
                    </div>
                    <button className="px-4 py-2 bg-blue text-white rounded-lg mt-8" onClick={handleClick}>Masuk</button>
                    <div className="flex flex-row mt-4 justify-center text-sm">
                        <p>Belum punya akun? </p>
                        <Link to="/register" className="text-blue-500 underline ml-2">Daftar disini</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}