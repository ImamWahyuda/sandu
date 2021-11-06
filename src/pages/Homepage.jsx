import react, { useRef, useState } from 'react';
import BERAT from '../assets/images/berat.png';
import TINGGI from '../assets/images/tinggi.png';
import SUHU from '../assets/images/suhu.png';
import DETAK from '../assets/images/detak.png';

export default function Homepage () {
    

    return(
        <div className="flex flex-col bg-blue">
            <div className="flex flex-col py-4">
                <div className="flex flex-row justify-start items-center text-white w-11/12 m-auto mb-2">
                    <i className="material-icons text-4xl">account_circle</i>
                    <p>User</p>
                </div>
                <div className="w-11/12 bg-white m-auto rounded-xl grid grid-cols-2">
                    <div className="bg-gray-100 m-2 h-16 rounded-lg p-2 flex flex-row justify-between items-center">
                        <img src={BERAT} alt="" className="h-12"/>
                        <p>20 KG</p>
                    </div>
                    <div className="bg-gray-100 m-2 h-16 rounded-lg p-2 flex flex-row justify-between items-center"> 
                        <img src={TINGGI} alt="" className="h-12"/>
                        <p>120 CM</p>
                    </div>
                    <div className="bg-gray-100 m-2 h-16 rounded-lg p-2 flex flex-row justify-between items-center">
                        <img src={SUHU} alt="" className="h-12"/>
                        <p>36 °C</p>
                    </div>
                    <div className="bg-gray-100 m-2 h-16 rounded-lg p-2 flex flex-row justify-between items-center">
                        <img src={DETAK} alt="" className="h-12"/>
                        <p>120 bpm</p>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-t-xl">
            <h2 className="text-xl font-bold mt-4 text-center w-full mb-8">Riwayat Pengukuran</h2>
            <table className="w-full flex flex-col">
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
                    <tr className="flex flex-row justify-between w-full px-4">
                        <td className="w-auto text-xs flex-1">
                            <p className="text-center">06-11-2021</p>
                        </td>
                        <td className="w-auto text-xs flex-1">
                            <p className="text-center">20</p>
                        </td>
                        <td className="w-auto text-xs flex-1">
                            <p className="text-center">120</p>
                        </td>
                        <td className="w-auto text-xs flex-1">
                            <p className="text-center">36</p>
                        </td>
                        <td className="w-auto text-xs flex-1">
                            <p className="text-center">120</p>
                        </td>
                    </tr>
                </tbody>

            </table>
            </div>
        </div>
    )
}