import React from "react";

const HeroOrganisms = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full p-5">
            {/* Headline & Logo */}
            <img className="w-[512px] mt-12 mb-12" src="./logo.png" alt="logo" />
            <h1 className="text-[64px] leading-[80%] font-bold text-[#171717] text-center">Safe, Trust and Fast</h1>
            <p className="mt-3 text-[#17171775] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Dignissimos vitae reiciendis tenetur. Aliquam veniam porro ullam libero numquam nihil, <br />s odit dicta tenetur quas voluptatibus sunt, quo facere. In, a dicta?</p>
            
            {/* Title */}
            <h1 className="text-[32px] leading-[80%] font-bold text-[#171717] text-center mt-12">Langkah-langkah</h1>

            {/* Card */}
            <div className="flex flex-wrap mt-5 justify-center">
                <div className="border border-[#17171725] p-10 m-1 w-[400px] rounded-[24px]">
                    <p className="text-[32px] font-bold">01</p>
                    <p className="text-[#17171775]">Tekan Button "Ajukan Perpindahan"</p>
                </div>
                <div className="border border-[#17171725] p-10 m-1 w-[400px] rounded-[24px]">
                    <p className="text-[32px] font-bold">02</p>
                    <p className="text-[#17171775]">Buat Akun, jika belum punya akun</p>
                </div>
                <div className="border border-[#17171725] p-10 m-1 w-[400px] rounded-[24px]">
                    <p className="text-[32px] font-bold">03</p>
                    <p className="text-[#17171775]">Masuk Akun, jika sudah punya akun</p>
                </div>
                <div className="border border-[#17171725] p-10 m-1 w-[400px] rounded-[24px]">
                    <p className="text-[32px] font-bold">04</p>
                    <p className="text-[#17171775]">Isi Form</p>
                </div>
                <div className="border border-[#17171725] p-10 m-1 w-[400px] rounded-[24px]">
                    <p className="text-[32px] font-bold">05</p>
                    <p className="text-[#17171775]">Selesai</p>
                </div>
            </div>   
        </div>
    );
};

export default HeroOrganisms;