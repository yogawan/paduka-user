import React, { useState } from 'react';
import axios from '../../utilities/axiosInstance';

const Home = () => {
    const [formData, setFormData] = useState({
        Nik: '',
        Nama_Lengkap: '',
        Gol_Darah: '',
        Tempat_Lahir: '',
        Tanggal_Lahir: '',
        Jenis_Kelamin: '',
        Agama: '',
        Status_Kawin: '',
        Pekerjaan: '',
        Provinsi: '',
        Kabupaten: '',
        Kecamatan: '',
        Kelurahan: '',
        Dusun: '',
        NewProvinsi: '',
        NewKabupaten: '',
        NewKecamatan: '',
        NewKelurahan: '',
        NewDusun: '',
        Kewarganegaraan: ''
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/userdata', formData);
            setMessage(response.data.message);
            setError('');
            // Reset form
            setFormData({
                Nik: '',
                Nama_Lengkap: '',
                Gol_Darah: '',
                Tempat_Lahir: '',
                Tanggal_Lahir: '',
                Jenis_Kelamin: '',
                Agama: '',
                Status_Kawin: '',
                Pekerjaan: '',
                Provinsi: '',
                Kabupaten: '',
                Kecamatan: '',
                Kelurahan: '',
                Dusun: '',
                NewProvinsi: '',
                NewKabupaten: '',
                NewKecamatan: '',
                NewKelurahan: '',
                NewDusun: '',
                Kewarganegaraan: ''
            });
        } catch (err) {
            setMessage('');
            setError(err.response?.data?.error || 'An error occurred while submitting the data.');
        }
    };

    return (
        <div className='mt-16'>
            {/* <form className='flex flex-col' onSubmit={handleSubmit}>
                <input type="text" name="Nik" placeholder="NIK" value={formData.Nik} onChange={handleChange} required />
                <input type="text" name="Nama_Lengkap" placeholder="Nama Lengkap" value={formData.Nama_Lengkap} onChange={handleChange} required />
                <input type="text" name="Gol_Darah" placeholder="Golongan Darah" value={formData.Gol_Darah} onChange={handleChange} required />
                <input type="text" name="Tempat_Lahir" placeholder="Tempat Lahir" value={formData.Tempat_Lahir} onChange={handleChange} required />
                <input type="date" name="Tanggal_Lahir" value={formData.Tanggal_Lahir} onChange={handleChange} required />
                <input type="text" name="Jenis_Kelamin" placeholder="Jenis Kelamin" value={formData.Jenis_Kelamin} onChange={handleChange} required />
                <input type="text" name="Agama" placeholder="Agama" value={formData.Agama} onChange={handleChange} required />
                <input type="text" name="Status_Kawin" placeholder="Status Kawin" value={formData.Status_Kawin} onChange={handleChange} required />
                <input type="text" name="Pekerjaan" placeholder="Pekerjaan" value={formData.Pekerjaan} onChange={handleChange} required />
                <input type="text" name="Provinsi" placeholder="Provinsi" value={formData.Provinsi} onChange={handleChange} required />
                <input type="text" name="Kabupaten" placeholder="Kabupaten" value={formData.Kabupaten} onChange={handleChange} required />
                <input type="text" name="Kecamatan" placeholder="Kecamatan" value={formData.Kecamatan} onChange={handleChange} required />
                <input type="text" name="Kelurahan" placeholder="Kelurahan" value={formData.Kelurahan} onChange={handleChange} required />
                <input type="text" name="Dusun" placeholder="Dusun" value={formData.Dusun} onChange={handleChange} required />
                <input type="text" name="NewProvinsi" placeholder="New Provinsi" value={formData.NewProvinsi} onChange={handleChange} required />
                <input type="text" name="NewKabupaten" placeholder="New Kabupaten" value={formData.NewKabupaten} onChange={handleChange} required />
                <input type="text" name="NewKecamatan" placeholder="New Kecamatan" value={formData.NewKecamatan} onChange={handleChange} required />
                <input type="text" name="NewKelurahan" placeholder="New Kelurahan" value={formData.NewKelurahan} onChange={handleChange} required />
                <input type="text" name="NewDusun" placeholder="New Dusun" value={formData.NewDusun} onChange={handleChange} required />
                <input type="text" name="Kewarganegaraan" placeholder="Kewarganegaraan" value={formData.Kewarganegaraan} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form> */}
          {/* Form */}
          <form
            className="flex flex-wrap justify-center items-start space-y-6 mobile:flex-wrap"
            onSubmit={handleSubmit}
          >
            {/* Left */}
            <div className="w-[400px] p-4 mobile:w-[300px]">
              {/* NIK */}
              <div className="space-y-2">
                <div className="flex items-center mt-3 ml-3 text-[#17171795]">
                  <label
                    className="block font-medium text-gray-700 mr-2"
                    htmlFor="form"
                  >
                    NIK
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 13h5v-2h-5zm0-3h5V8h-5zm-9 6h8v-.55q0-1.125-1.1-1.787T9 13t-2.9.663T5 15.45zm4-4q.825 0 1.413-.587T11 10t-.587-1.412T9 8t-1.412.588T7 10t.588 1.413T9 12m-5 8q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"
                    ></path>
                  </svg>
                </div>

                <input
                  type="text"
                  name="Nik"
                  value={formData.Nik}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                  placeholder="Masukan nik anda"
                />
              </div>

              {/* Nama Lengkap */}
              <div className="space-y-2">
                <div className="flex items-center mt-3 ml-3 text-[#17171795]">
                  <label
                    className="block font-medium text-gray-700 mr-2"
                    htmlFor="form"
                  >
                    Nama Lengkap
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 13h5v-2h-5zm0-3h5V8h-5zm-9 6h8v-.55q0-1.125-1.1-1.787T9 13t-2.9.663T5 15.45zm4-4q.825 0 1.413-.587T11 10t-.587-1.412T9 8t-1.412.588T7 10t.588 1.413T9 12m-5 8q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="Nama_Lengkap"
                  value={formData.Nama_Lengkap}
                  onChange={handleChange}
                  className="w-full bg-[#FFFFFF50] p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                  placeholder="Masukan nama lengkap anda"
                />
              </div>

              {/* Gol. Darah */}
              <div className="space-y-2">
                <div className="flex items-center mt-3 ml-3 text-[#17171795]">
                  <label
                    className="block font-medium text-gray-700 mr-2"
                    htmlFor="form"
                  >
                    Gol. Darah
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 22q-3.425 0-5.712-2.35T4 13.8q0-1.55.7-3.1t1.75-2.975T8.725 5.05T11 2.875q.2-.2.463-.287T12 2.5t.538.088t.462.287q1.05.925 2.275 2.175t2.275 2.675T19.3 10.7t.7 3.1q0 3.5-2.287 5.85T12 22m.275-3q.3-.025.513-.238T13 18.25q0-.35-.225-.562T12.2 17.5q-1.025.075-2.175-.562t-1.45-2.313q-.05-.275-.262-.45T7.825 14q-.35 0-.575.263t-.15.612q.425 2.275 2 3.25t3.175.875"
                    ></path>
                  </svg>
                </div>
                <select
                  type="text"
                  name="Gol_Darah"
                  value={formData.Gol_Darah}
                  onChange={handleChange}
                  className="w-full bg-[#FFFFFF50] p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                >
                  <option value="">Pilih</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="AB">AB</option>
                  <option value="O">O</option>
                </select>
              </div>

              <div className="flex justify-between">
                {/* Tempat Lahir */}
                <div className="space-y-2 w-[40%]">
                  <div className="flex items-center mt-3 ml-3 text-[#17171795]">
                    <label
                      className="block font-medium text-gray-700 mr-2"
                      htmlFor="form"
                    >
                      Tempat
                    </label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M3 19V9q0-.825.588-1.412T5 7h4V5.825q0-.4.15-.763t.425-.637l1-1Q11.15 2.85 12 2.85t1.425.575l1 1q.275.275.425.638t.15.762V11h4q.825 0 1.413.588T21 13v6q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19m2 0h2v-2H5zm0-4h2v-2H5zm0-4h2V9H5zm6 8h2v-2h-2zm0-4h2v-2h-2zm0-4h2V9h-2zm0-4h2V5h-2zm6 12h2v-2h-2zm0-4h2v-2h-2z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="Tempat_Lahir"
                    value={formData.Tempat_Lahir}
                    onChange={handleChange}
                    className="w-full bg-[#FFFFFF50] p-[13px] border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                    placeholder="Masukan kota/kabupaten"
                  />
                </div>

                {/* Tanggal Lahir */}
                <div className="space-y-2 w-[60%]">
                  <div className="flex items-center mt-3 ml-3 text-[#17171795]">
                    <label
                      className="block font-medium text-gray-700 mr-2"
                      htmlFor="form"
                    >
                      Tanggal Lahir
                    </label>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M8 14q-.425 0-.712-.288T7 13t.288-.712T8 12t.713.288T9 13t-.288.713T8 14m4 0q-.425 0-.712-.288T11 13t.288-.712T12 12t.713.288T13 13t-.288.713T12 14m4 0q-.425 0-.712-.288T15 13t.288-.712T16 12t.713.288T17 13t-.288.713T16 14M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="date"
                    name="Tanggal_Lahir"
                    value={formData.Tanggal_Lahir}
                    onChange={handleChange}
                    className="w-full bg-[#FFFFFF50] p-3 border border-gray-300 rounded-r-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                  />
                </div>
              </div>

              {/* Jenis Kelamin */}
              <div className="space-y-2">
                <div className="flex items-center mt-3 ml-3 text-[#17171795]">
                  <label
                    className="block font-medium text-gray-700 mr-2"
                    htmlFor="form"
                  >
                    Jenis Kelamin
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 15q1.45 0 2.475-1.025T15.5 11.5t-1.025-2.475T12 8T9.525 9.025T8.5 11.5t1.025 2.475T12 15m-1 6h-1q-.425 0-.712-.288T9 20t.288-.712T10 19h1v-2.1q-1.95-.35-3.225-1.875T6.5 11.5q0-.825.238-1.625T7.45 8.4l-.65-.65l-.7.7q-.275.275-.687.287T4.7 8.45q-.275-.275-.275-.687T4.7 7.05l.7-.725l-1.9-1.9V6q0 .425-.288.713T2.5 7t-.712-.288T1.5 6V2q0-.425.288-.712T2.5 1h4q.425 0 .713.288T7.5 2t-.288.713T6.5 3H4.925l1.9 1.9l.725-.725q.275-.275.688-.275t.712.3q.275.275.275.688T8.95 5.6l-.7.725l.65.65q.675-.5 1.475-.737T12 6t1.625.238t1.475.737L19.075 3H17.5q-.425 0-.712-.287T16.5 2t.288-.712T17.5 1h4q.425 0 .713.288T22.5 2v4q0 .425-.288.713T21.5 7t-.712-.288T20.5 6V4.425l-3.975 3.95q.475.7.725 1.488t.25 1.637q0 2-1.275 3.525T13 16.9V19h1q.425 0 .713.288T15 20t-.288.713T14 21h-1v1q0 .425-.288.713T12 23t-.712-.288T11 22z"
                    ></path>
                  </svg>
                </div>
                <select
                  type="text"
                  name="Jenis_Kelamin"
                  value={formData.Jenis_Kelamin}
                  onChange={handleChange}
                  className="w-[100%] bg-[#FFFFFF50] p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                >
                  <option value="">Pilih</option>
                  <option value="L">Laki-laki</option>
                  <option value="P">Perempuan</option>
                </select>
              </div>

              {/* Agama */}
              <div className="space-y-2">
                <div className="flex items-center mt-3 ml-3 text-[#17171795]">
                  <label
                    className="block font-medium text-gray-700 mr-2"
                    htmlFor="form"
                  >
                    Agama
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 23.3L8.65 20H4v-4.65L.7 12L4 8.65V4h4.65L12 .7L15.35 4H20v4.65L23.3 12L20 15.35V20h-4.65zm1.025-11.8l1.475-1.075l1.45 1.075l-.575-1.7l1.475-1.075h-1.8L14.5 7l-.55 1.725h-1.825L13.6 9.8zM12 17q2.075 0 3.538-1.45T17 12q0-.2-.012-.4t-.063-.4q-.275 1.175-1.225 1.938t-2.225.762q-1.5 0-2.525-1.025T9.925 10.35q0-1.15.65-2.062T12.275 7H12Q9.9 7 8.45 8.463T7 12q0 2.1 1.45 3.55T12 17"
                    ></path>
                  </svg>
                </div>
                <select
                  type="text"
                  name="Agama"
                  value={formData.Agama}
                  onChange={handleChange}
                  className="w-full bg-[#FFFFFF50] p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                >
                  <option value="">Pilih</option>
                  <option value="Islam">Islam</option>
                  <option value="Kristen">Kristen</option>
                  <option value="Katolik">Katolik</option>
                  <option value="Hindu">Hindu</option>
                  <option value="Buddha">Buddha</option>
                  <option value="Konghucu">Konghucu</option>
                </select>
              </div>
              
              {/* Status Perkawinan */}
              <div className="space-y-2">
                <div className="flex items-center mt-3 ml-3 text-[#17171795]">
                  <label
                    className="block font-medium text-gray-700 mr-2"
                    htmlFor="form"
                  >
                    Status Perkawinan
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M10.3 19.8q1.125-2.275 3-3.037T16.5 16q.575 0 1.125.1t1.075.25q.6-.95.95-2.05T20 12q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12q0 1.125.287 2.15t.863 1.9q1.025-.5 2.125-.775T9.5 15q.8 0 1.537.138t1.463.362q-.575.3-1.088.7t-.962.85q-.3-.05-.512-.05H9.5q-.8 0-1.588.175T6.4 17.7q.8.8 1.788 1.338t2.112.762M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m-2.5-8.5q-1.45 0-2.475-1.025T6 10t1.025-2.475T9.5 6.5t2.475 1.025T13 10t-1.025 2.475T9.5 13.5m0-2q.625 0 1.063-.437T11 10t-.437-1.062T9.5 8.5t-1.062.438T8 10t.438 1.063T9.5 11.5m7 3q-1.05 0-1.775-.725T14 12t.725-1.775T16.5 9.5t1.775.725T19 12t-.725 1.775t-1.775.725M12 12"
                    ></path>
                  </svg>
                </div>
                <select
                  type="text"
                  name="Status_Kawin"
                  value={formData.Status_Kawin}
                  onChange={handleChange}
                  className="w-full bg-[#FFFFFF50] p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                >
                  <option value="">Pilih</option>
                  <option value="Belum Kawin">Belum Kawin</option>
                  <option value="Kawin">Kawin</option>
                  <option value="Cerai Hidup">Cerai Hidup</option>
                  <option value="Cerai Mati">Cerai Mati</option>
                </select>
              </div>
            </div>

            {/* Right */}
            <div className="w-[400px] p-4 mobile:w-[300px]">
              {/* Pekerjaan */}
              <div className="space-y-2">
                <div className="flex items-center mt-3 ml-3 text-[#17171795]">
                  <label
                    className="block font-medium text-gray-700 mr-2"
                    htmlFor="form"
                  >
                    Pekerjaan
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zm6-15h4V4h-4z"
                    ></path>
                  </svg>
                </div>
                <select
                  name="Pekerjaan"
                  value={formData.Pekerjaan}
                  onChange={handleChange}
                  className="w-full bg-[#FFFFFF50] p-4 border border-[#17171725] rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                >
                  <option value="">Pilih Pekerjaan</option>
                  <option value="Belum / Tidak Bekerja">
                    Belum / Tidak Bekerja
                  </option>
                  <option value="Mengurus Rumah Tangga">
                    Mengurus Rumah Tangga
                  </option>
                  <option value="Pelajar / Mahasiswa">
                    Pelajar / Mahasiswa
                  </option>
                  <option value="Pensiunan">Pensiunan</option>
                  <option value="Pegawai Negeri Sipil">
                    Pegawai Negeri Sipil
                  </option>
                  <option value="Tentara Nasional Indonesia">
                    Tentara Nasional Indonesia
                  </option>
                  <option value="Kepolisian RI">Kepolisian RI</option>
                  <option value="Perdagangan">Perdagangan</option>
                </select>
              </div>

              {/* Alamat */}
              <div className="space-y-1">
                <div className="flex items-center mt-3 ml-3 text-[#17171795]">
                  <label
                    className="block font-medium text-gray-700 mr-2"
                    htmlFor="form"
                  >
                    Alamat Lama
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M17.5 16.5v2q0 .2.15.35T18 19t.35-.15t.15-.35v-2h2q.2 0 .35-.15T21 16t-.15-.35t-.35-.15h-2v-2q0-.2-.15-.35T18 13t-.35.15t-.15.35v2h-2q-.2 0-.35.15T15 16t.15.35t.35.15zM18 21q-2.075 0-3.537-1.463T13 16t1.463-3.537T18 11t3.538 1.463T23 16t-1.463 3.538T18 21M4 17V8q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 8v.525q0 .3-.238.463t-.537.112q-1.675-.3-3.312.213T13.05 11.05q-1.35 1.35-1.838 3.15t.013 3.625q.125.45-.125.813t-.675.362H6q-.825 0-1.412-.587T4 17"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="bg-[#FFFFFF50]  rounded-[32px] mt-2 p-2 border border-[#17171725]">
                <div className="space-y-2">

                  {/* Provinsi */}
                  <select
                    type="text"
                    name="Provinsi"
                    value={formData.Provinsi}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#FFFFFF50] rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                  >
                    <option value="">Pilih Provinsi</option>
                    <option value="DI Yogyakarta">Daerah Istimewa Yogyakarta</option>
                    <option value="Aceh">Aceh</option>
                    <option value="Sumatera Utara">Sumatera Utara</option>
                    <option value="Sumatera Barat">Sumatera Barat</option>
                    <option value="Riau">Riau</option>
                    <option value="Kepulauan Riau">Kepulauan Riau</option>
                    <option value="Jambi">Jambi</option>
                    <option value="Sumatera Selatan">Sumatera Selatan</option>
                    <option value="Bangka Belitung">Kepulauan Bangka Belitung</option>
                    <option value="Bengkulu">Bengkulu</option>
                    <option value="Lampung">Lampung</option>
                    <option value="DKI Jakarta">DKI Jakarta</option>
                    <option value="Jawa Barat">Jawa Barat</option>
                    <option value="Jawa Tengah">Jawa Tengah</option>
                    <option value="Jawa Timur">Jawa Timur</option>
                    <option value="Banten">Banten</option>
                    <option value="Bali">Bali</option>
                    <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                    <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                    <option value="Kalimantan Barat">Kalimantan Barat</option>
                    <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                    <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                    <option value="Kalimantan Timur">Kalimantan Timur</option>
                    <option value="Kalimantan Utara">Kalimantan Utara</option>
                    <option value="Sulawesi Utara">Sulawesi Utara</option>
                    <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                    <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                    <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                    <option value="Gorontalo">Gorontalo</option>
                    <option value="Sulawesi Barat">Sulawesi Barat</option>
                    <option value="Maluku">Maluku</option>
                    <option value="Maluku Utara">Maluku Utara</option>
                    <option value="Papua">Papua</option>
                    <option value="Papua Barat">Papua Barat</option>
                    <option value="Papua Tengah">Papua Tengah</option>
                    <option value="Papua Pegunungan">Papua Pegunungan</option>
                    <option value="Papua Selatan">Papua Selatan</option>
                    <option value="Papua Barat Daya">Papua Barat Daya</option>
                  </select>


                  {/* Kabupaten */}
                  <select
                    type="text"
                    name="Kabupaten"
                    value={formData.Kabupaten}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#FFFFFF50] rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                  >
                    <option value="">Kabupaten/Kota</option>
                    <option value="Sleman">Sleman</option>
                    <option value="Yogyakarta">Yogyakarta</option>
                    <option value="Gunung Kidul">Gunung Kidul</option>
                    <option value="Bantul">Bantul</option>
                    <option value="Kulon Progo">Kulon Progo</option>
                  </select>

                  {/* Kecamatan */}
                  <select
                    type="text"
                    name="Kecamatan"
                    value={formData.Kecamatan}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#FFFFFF50] rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                  >
                    <option value="">Pilih Kecamatan</option>
                    <option value="Samigaluh">Samigaluh</option>
                    <option value="Kalibawang">Kalibawang</option>
                    <option value="Girimulyo">Girimulyo</option>
                    <option value="Nanggulan">Nanggulan</option>
                    <option value="Sentolo">Sentolo</option>
                    <option value="Panjatan">Panjatan</option>
                    <option value="Wates">Wates</option>
                    <option value="Temon">Temon</option>
                    <option value="Kokap">Kokap</option>
                    <option value="Pengasih">Pengasih</option>
                  </select>

                  {/* Kelurahan/Desa */}
                  <select
                    type="text"
                    name="Kelurahan"
                    value={formData.Kelurahan}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#FFFFFF50] rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                  >
                    <option value="">Pilih Kelurahan/Desa</option>
                    <option value="Temon Kulon">Temon Kulon</option>
                    <option value="Temon Wetan">Temon Wetan</option>
                    <option value="Sindutan">Sindutan</option>
                    <option value="Kaligintung">Kaligintung</option>
                    <option value="Palihan">Palihan</option>
                    <option value="Glagah">Glagah</option>
                    <option value="Jangkaran">Jangkaran</option>
                    <option value="Kebonrejo">Kebonrejo</option>
                    <option value="Kalidengen">Kalidengen</option>
                    <option value="Demangrejo">Demangrejo</option>
                  </select>

                  {/* Dusun */}
                  <textarea
                    type="text"
                    name="Dusun"
                    placeholder="Masukan Alamat"
                    value={formData.Dusun}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#FFFFFF50] border border-[#17171725] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    rows={3}
                    required
                  ></textarea>

                </div>
              </div>

              {/* Alamat Baru */}
              <div className="space-y-1">
                <div className="flex items-center mt-3 ml-3 text-[#17171795]">
                  <label
                    className="block font-medium text-gray-700 mr-2"
                    htmlFor="form"
                  >
                    Alamat Baru
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M17.5 16.5v2q0 .2.15.35T18 19t.35-.15t.15-.35v-2h2q.2 0 .35-.15T21 16t-.15-.35t-.35-.15h-2v-2q0-.2-.15-.35T18 13t-.35.15t-.15.35v2h-2q-.2 0-.35.15T15 16t.15.35t.35.15zM18 21q-2.075 0-3.537-1.463T13 16t1.463-3.537T18 11t3.538 1.463T23 16t-1.463 3.538T18 21M4 17V8q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 8v.525q0 .3-.238.463t-.537.112q-1.675-.3-3.312.213T13.05 11.05q-1.35 1.35-1.838 3.15t.013 3.625q.125.45-.125.813t-.675.362H6q-.825 0-1.412-.587T4 17"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="bg-[#FFFFFF50]  rounded-[32px] mt-2 p-2 border border-[#17171725]">
                <div className="space-y-2">

                  {/* Provinsi */}
                  <select
                    type="text"
                    name="NewProvinsi"
                    value={formData.NewProvinsi}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#FFFFFF50] rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                  >
                    <option value="">Pilih Provinsi</option>
                    <option value="DI Yogyakarta">Daerah Istimewa Yogyakarta</option>
                    <option value="Aceh">Aceh</option>
                    <option value="Sumatera Utara">Sumatera Utara</option>
                    <option value="Sumatera Barat">Sumatera Barat</option>
                    <option value="Riau">Riau</option>
                    <option value="Kepulauan Riau">Kepulauan Riau</option>
                    <option value="Jambi">Jambi</option>
                    <option value="Sumatera Selatan">Sumatera Selatan</option>
                    <option value="Bangka Belitung">Kepulauan Bangka Belitung</option>
                    <option value="Bengkulu">Bengkulu</option>
                    <option value="Lampung">Lampung</option>
                    <option value="DKI Jakarta">DKI Jakarta</option>
                    <option value="Jawa Barat">Jawa Barat</option>
                    <option value="Jawa Tengah">Jawa Tengah</option>
                    <option value="Jawa Timur">Jawa Timur</option>
                    <option value="Banten">Banten</option>
                    <option value="Bali">Bali</option>
                    <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                    <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                    <option value="Kalimantan Barat">Kalimantan Barat</option>
                    <option value="Kalimantan Tengah">Kalimantan Tengah</option>
                    <option value="Kalimantan Selatan">Kalimantan Selatan</option>
                    <option value="Kalimantan Timur">Kalimantan Timur</option>
                    <option value="Kalimantan Utara">Kalimantan Utara</option>
                    <option value="Sulawesi Utara">Sulawesi Utara</option>
                    <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                    <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                    <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                    <option value="Gorontalo">Gorontalo</option>
                    <option value="Sulawesi Barat">Sulawesi Barat</option>
                    <option value="Maluku">Maluku</option>
                    <option value="Maluku Utara">Maluku Utara</option>
                    <option value="Papua">Papua</option>
                    <option value="Papua Barat">Papua Barat</option>
                    <option value="Papua Tengah">Papua Tengah</option>
                    <option value="Papua Pegunungan">Papua Pegunungan</option>
                    <option value="Papua Selatan">Papua Selatan</option>
                    <option value="Papua Barat Daya">Papua Barat Daya</option>
                  </select>


                  {/* Kabupaten */}
                  <select
                    type="text"
                    name="NewKabupaten"
                    value={formData.NewKabupaten}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#FFFFFF50] rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                  >
                    <option value="">Kabupaten/Kota</option>
                    <option value="Sleman">Sleman</option>
                    <option value="Yogyakarta">Yogyakarta</option>
                    <option value="Gunung Kidul">Gunung Kidul</option>
                    <option value="Bantul">Bantul</option>
                    <option value="Kulon Progo">Kulon Progo</option>
                  </select>

                  {/* Kecamatan */}
                  <select
                    type="text"
                    name="NewKecamatan"
                    value={formData.NewKecamatan}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#FFFFFF50] rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                  >
                    <option value="">Pilih Kecamatan</option>
                    <option value="Samigaluh">Samigaluh</option>
                    <option value="Kalibawang">Kalibawang</option>
                    <option value="Girimulyo">Girimulyo</option>
                    <option value="Nanggulan">Nanggulan</option>
                    <option value="Sentolo">Sentolo</option>
                    <option value="Panjatan">Panjatan</option>
                    <option value="Wates">Wates</option>
                    <option value="Temon">Temon</option>
                    <option value="Kokap">Kokap</option>
                    <option value="Pengasih">Pengasih</option>
                  </select>

                  {/* Kelurahan/Desa */}
                  <select
                    type="text"
                    name="NewKelurahan"
                    value={formData.NewKelurahan}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#FFFFFF50] rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    required
                  >
                    <option value="">Pilih Kelurahan/Desa</option>
                    <option value="Temon Kulon">Temon Kulon</option>
                    <option value="Temon Wetan">Temon Wetan</option>
                    <option value="Sindutan">Sindutan</option>
                    <option value="Kaligintung">Kaligintung</option>
                    <option value="Palihan">Palihan</option>
                    <option value="Glagah">Glagah</option>
                    <option value="Jangkaran">Jangkaran</option>
                    <option value="Kebonrejo">Kebonrejo</option>
                    <option value="Kalidengen">Kalidengen</option>
                    <option value="Demangrejo">Demangrejo</option>
                  </select>

                  {/* Dusun */}
                  <textarea
                    type="text"
                    name="NewDusun"
                    placeholder="Masukan Alamat"
                    value={formData.NewDusun}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#FFFFFF50] border border-[#17171725] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                    rows={3}
                    required
                  ></textarea>

                </div>
              </div>




              {/* Kewarganegaraan */}
              <div className="space-y-2">
                <div className="flex items-center mt-3 ml-3 text-[#17171795]">
                  <label
                    className="block font-medium text-gray-700 mr-2"
                    htmlFor="form"
                  >
                    Kewarganegaraan
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5 16v-5q0-.425.288-.712T6 10t.713.288T7 11v5q0 .425-.288.713T6 17t-.712-.288T5 16m6 0v-5q0-.425.288-.712T12 10t.713.288T13 11v5q0 .425-.288.713T12 17t-.712-.288T11 16m-8 5q-.425 0-.712-.288T2 20t.288-.712T3 19h18q.425 0 .713.288T22 20t-.288.713T21 21zm14-5v-5q0-.425.288-.712T18 10t.713.288T19 11v5q0 .425-.288.713T18 17t-.712-.288T17 16m4-8H2.9q-.375 0-.638-.262T2 7.1v-.55q0-.275.138-.475T2.5 5.75l8.6-4.3q.425-.2.9-.2t.9.2l8.55 4.275q.275.125.413.375t.137.525V7q0 .425-.287.713T21 8"
                    ></path>
                  </svg>
                </div>
                <select
                  type="text"
                  name="Kewarganegaraan"
                  value={formData.Kewarganegaraan}
                  onChange={handleChange}
                  className="w-full p-4 bg-[#FFFFFF50] border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#171717] text-[#17171795]"
                  required
                >
                  <option value="">Pilih</option>
                  <option value="WNI">WNI</option>
                  <option value="WNA">WNA</option>
                </select>
              </div>

              {/* Button */}
              <div className="flex justify-end">
                {/* Tombol dengan Efek Gradient dan Blur */}
                <div className="relative inline-flex group mt-8">
                  {/* Background Gradient dan Blur Effect */}
                  <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                  {/* Tombol dengan Efek Hover dan Fokus */}
                  <button
                    type="submit"
                    className="relative inline-flex items-center justify-center px-12 py-6 text-lg font-bold text-white bg-[#171717] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all duration-200"
                  >
                    Simpan Data
                  </button>
                </div>
              </div>
            </div>
          </form>
        
        

            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Home;
