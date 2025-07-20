import React from 'react';
import Adminview from '@/components/custom/adminview';

export const metadata = {
    title: "Garena Topup Center | Admin",
    description: "",
};

const Page = () => {
    return (
        <>
            <h1 className=' text-3xl font-bold text-center mt-20'>Welcome To Admin Panel</h1>
            <Adminview />
        </>
    );
}

export default Page;
