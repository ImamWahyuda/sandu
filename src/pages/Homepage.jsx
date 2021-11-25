import react, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import BERAT from '../assets/images/berat.png';
import TINGGI from '../assets/images/tinggi.png';
import SUHU from '../assets/images/suhu.png';
import DETAK from '../assets/images/detak.png';
import axios from 'axios';
import cookiesHandler from '../helpers/cookie';
import { useHistory } from 'react-router';
import { setDefaultHandler } from 'workbox-routing';

export default function Homepage() {
    const router = useHistory();
    const [data, setdata] = useState({});

    const isLogin = async () => {
        const isLogin = cookiesHandler.getCookie('nik');
        if (!isLogin) return router.push('/login');
    }

    const getdata = async () => {
        const nik = cookiesHandler.getCookie('nik');
        const result = await axios.get(`https://sandu-api.herokuapp.com/api/data/${nik}`)
        setdata(result.data)
    }

    const sendDeleteRequest = async () => {
        const nik = cookiesHandler.getCookie('nik');
        const res = await axios.delete(`https://sandu-api.herokuapp.com/api/data/${nik}`)
        setdata(res.data);
    }


    const logout = async () => {
        cookiesHandler.deleteCookie('nik');
        return router.push('/login');
    }

    useLayoutEffect(() => {
        isLogin();
        getdata();
    }, []);

    //Fetch Data
    return (
        <div className="flex flex-col bg-blue">
            <div className="flex flex-col py-4 md:w-6/12 lg:w-4/12 xl:w-3/12 m-auto">
                <div className="flex flex-row justify-between items-center text-white w-11/12 m-auto mb-2 ">
                    <div className="flex flex-row items-center">
                        <i className="material-icons text-4xl">account_circle</i>
                        <p>{data.name}</p>
                    </div>
                    <i className="material-icons" onClick={logout}>logout</i>
                </div>
                <div className="w-11/12 bg-white m-auto rounded-xl grid grid-cols-2">
                    <div className="bg-gray-100 m-2 h-16 rounded-lg p-2 flex flex-row justify-between items-center">
                        <img src={BERAT} alt="" className="h-12" />
                        <p>{data.data && data.data[data.data.length - 1].berat} KG</p>
                    </div>
                    <div className="bg-gray-100 m-2 h-16 rounded-lg p-2 flex flex-row justify-between items-center">
                        <img src={TINGGI} alt="" className="h-12" />
                        <p>{data.data && data.data[data.data.length - 1].tinggi} CM</p>
                    </div>
                    <div className="bg-gray-100 m-2 h-16 rounded-lg p-2 flex flex-row justify-between items-center">
                        <img src={SUHU} alt="" className="h-12" />
                        <p>{data.data && data.data[data.data.length - 1].suhu} °C</p>
                    </div>
                    <div className="bg-gray-100 m-2 h-16 rounded-lg p-2 flex flex-row justify-between items-center">
                        <img src={DETAK} alt="" className="h-12" />
                        <p>{data.data && data.data[data.data.length - 1].detak} bpm</p>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-t-xl ">
                <h2 className="text-xl font-bold mt-4 text-center w-full mb-8 ">Riwayat Pengukuran</h2>

                <table className="w-full flex flex-col md:w-9/12 lg:w-6/12 xl:w-5/12 m-auto">
                    <thead>
                        <tr className="flex flex-row justify-between w-full px-4">
                            <th className="w-auto text-xs flex-1">
                                <p>Tanggal</p>
                            </th>
                            <th className="w-auto text-xs flex-1">
                                <p>Berat Badan</p>
                                <p>(Kg)</p>
                            </th>
                            <th className="w-auto text-xs flex-1">
                                <p>Tinggi Badan</p>
                                <p>(Cm)</p>
                            </th>
                            <th className="w-auto text-xs flex-1">
                                <p>Suhu</p>
                                <p>(°C)</p>
                            </th>
                            <th className="w-auto text-xs flex-1">
                                <p>Detak Jantung</p>
                                <p>(bpm)</p>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="mt-2">
                        {
                            data.data && data.data.map(e => {
                                return (
                                    <tr className="flex flex-row justify-between w-full px-4">
                                        <td className="w-auto text-xs flex-1">
                                            <p className="text-center">{e.date.slice(0, 10)}</p>
                                        </td>
                                        <td className="w-auto text-xs flex-1">
                                            <p className="text-center">{e.berat}</p>
                                        </td>
                                        <td className="w-auto text-xs flex-1">
                                            <p className="text-center">{e.tinggi}</p>
                                        </td>
                                        <td className="w-auto text-xs flex-1">
                                            <p className="text-center">{e.suhu}</p>
                                        </td>
                                        <td className="w-auto text-xs flex-1">
                                            <p className="text-center">{e.detak}</p>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
                <div className="flex flex-col md:w-6/12 lg:w-4/12 xl:w-3/12 m-auto text-right pb-4">
                    <button className="flex flex-row items-center justify-end px-2">
                        <i className="material-icons text-red-600" onClick={sendDeleteRequest}>delete</i>
                        <p className="text-red-600">Hapus</p>
                    </button>
                </div>
            </div>
        </div>
    )
}