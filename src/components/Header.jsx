import React from 'react';

const Header = ({ label = 'Profile', title = 'Mahasiswa' }) => {
    return (
        <div>
            <div className="bg-[#ef4a00] p-10 rounded-b-md text-white flex justify-between items-start">
                <div>
                    <p className="text-xs m-0">{label}</p>
                    <h1 className="text-5xl font-normal m-0">{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;