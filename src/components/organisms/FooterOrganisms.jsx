const FooterOrganisms = () => {
    return (
        <footer className="flex flex-wrap justify-center w-full item-start border border-t-[#17171725] pt-10">
            <ul className="w-[100px] m-5">
                <li><img src="./logo.png" alt="" /></li>
                <li className="text-[#17171775]"><p>Copyright@2024 PADUKA</p></li>
            </ul>
            <ul className="w-[100px] m-5">
                <h3 className="text-[24px]">About</h3>
                <li className="text-[#17171775]"><p>Karepmu Creative adalah sebuah perusahaan fiktif untuk bahan latihan projek-projek frontend</p></li>
            </ul>
            <ul className="w-[100px] m-5">
                <h3 className="text-[24px]">Service</h3>
                <li className="text-[#17171775]"><a href="#">UI Design</a></li>
                <li className="text-[#17171775]"><a href="#">Fullstack</a></li>
                <li className="text-[#17171775]"><a href="#">3D Design</a></li>
                <li className="text-[#17171775]"><a href="#">Video Editing</a></li>
                <li className="text-[#17171775]"><a href="#">Graphic Design</a></li>
            </ul>
            <ul className="w-[100px] m-5">
                <h3 className="text-[24px]">Work</h3>
                <li className="text-[#17171775]"><a href="#">RoundRobin</a></li>
                <li className="text-[#17171775]"><a href="#">Edufree</a></li>
                <li className="text-[#17171775]"><a href="#">Jobless</a></li>
                <li className="text-[#17171775]"><a href="#">Klatentravel</a></li>
                <li className="text-[#17171775]"><a href="#">JawirAI</a></li>
                <li className="text-[#17171775]"><a href="#">Koin</a></li>
                <li className="text-[#17171775]"><a href="#">Solo Weather</a></li>
            </ul>
            <ul className="w-[100px] m-5">
                <h3 className="text-[24px]">Links</h3>
                <li className="text-[#17171775]"><a href="#">Home</a></li>
                <li className="text-[#17171775]"><a href="#">Service</a></li>
            </ul>
            <ul className="w-[100px] m-5">
                <h3 className="text-[24px]">Legal</h3>
                <li className="text-[#17171775]"><a href="#">Privacy & Policy</a></li>
            </ul>
        </footer>
    );
};

export default FooterOrganisms;