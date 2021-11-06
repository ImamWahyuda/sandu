import react, { useRef, useState } from 'react';
import images from '../assets/images/logo.png'
export default function Register () {
    const checkBox = useRef();
    const [hide, setHide] = useState('password');

    const togglePassword = (e) => {
        e.preventDefault();
        if (!e.target.checked) return setHide('');
        return setHide('password')
    }

    return(
        <div className="flex flex-col bg-blue">
            <div className="flex justify-center items-center py-16">
                <img src ={images} className="w-28"/>
            </div>
            <div className="bg-white rounded-t-xl">
                <div className="flex justify-center flex-col w-8/12 mx-auto rounded-t-xl">
                    <h2 className="text-2xl font-bold mt-4 text-center w-full">Daftar Akun</h2>
                    <form className="pt-4 flex flex-col w-62">
                        <input type="text" className="border-2 p-2 rounded-xl my-3" placeholder="Nama Lengkap Bayi"/>
                        <input type="number" className="border-2 p-2 rounded-xl my-3" placeholder="Nomer Induk Kependudukan"/>
                        <input type={hide} className="border-2 p-2 rounded-xl my-3" placeholder="Password"/>
                        <input type={hide} className="border-2 p-2 rounded-xl my-3" placeholder="Konfirmasi Password"/>
                    </form>
                    <div className="flex items-center w-62 my-2">
                        <input type="checkbox" className="mx-2" onChange={e => togglePassword(e)}/>
                        <p className="text-sm">Tampilkan password</p>
                    </div>
                    <button className="px-4 py-2 bg-blue text-white rounded-lg mt-8">Daftar</button>
                    <div className="flex flex-row mt-4 justify-center text-sm">
                        <p>Sudah punya akun? </p>
                        <p className="text-blue-500 underline ml-2">Login</p>
                    </div>
                </div>
            </div>
        </div>
    )
}