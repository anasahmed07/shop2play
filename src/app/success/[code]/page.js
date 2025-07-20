'use client'
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/custom/navbar';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux'

const Page = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const user = useSelector((state) => state.user.user);
    const [data, setData] = useState(null);
    const [formattedDate, setFormattedDate] = useState('');
    const params = useParams();
    const { code } = params;

    async function handleBackToHome() {
        setLoading(true)
        const response = await fetch(`/api/delete-code?code=${code}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET",
        });
        const responseData = await response.json();
        router.push('/')
        return setLoading(false)

    }

    useEffect(() => {
        if (!user.loggedIn) {
            return router.push('/')
        }
    }, [user])

    useEffect(() => {

        const fetchData = async () => {
            if (!user.loggedIn) {
                return router.push('/')
            }
            setLoading(true);
            try {
                const response = await fetch(`/api/get-code-details?code=${code}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "GET",
                });
                const responseData = await response.json();
                setData(responseData);

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const formatDateAndTime = () => {
            const date = new Date();

            let hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            const day = date.getDate();
            const month = date.getMonth() + 1; // Months are zero-based
            const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year

            const period = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12; // Convert to 12-hour format


            const formattedHours = hours.toString().padStart(2, '0');
            const formattedMinutes = minutes.toString().padStart(2, '0');
            const formattedSeconds = seconds.toString().padStart(2, '0');
            const formattedDay = day.toString().padStart(2, '0');
            const formattedMonth = month.toString().padStart(2, '0');

            return `${period} ${formattedHours}:${formattedMinutes}:${formattedSeconds},${formattedMonth}/${formattedDay}/${year}`;
        }

        setFormattedDate(formatDateAndTime());
    }, []);
    console.log(data);




    return (
        <>
            <Navbar />
            <div style={{ backgroundImage: `url("/assets/success-bg.jpg")` }} className='gap-3 py-12 flex-col p-4 flex items-center justify-center h-[300px] w-full bg-[#efefef] bg-center'>
                {!loading ? (
                    <>
                        <Image src='/assets/success.svg' alt='imgg' width={90} height={90} />
                        <h1 className='text-3xl font-bold text-center font-ar '>تم التسديد</h1>
                        <p className='text-lg font-light text-center font-ar '>رقم المعاملة</p>
                        <p className='text-lg font-light text-center'>{data?.message?._id}</p>
                    </>
                ) : (
                    <div className=' animate-spin h-[50px] w-[50px]  rounded-full border-[7px]   border-t-red-600  border-b-red-600 border-r-red-600   ' ></div>
                )}
            </div>
            {!loading && data && <div className='p-2 h-fit gap-5 mt-10 w-[600px] max-[672px]:w-full m-auto flex flex-col'>
                <Formatter title={data?.message?.prize} subtitle='المجموع' img='/assets/diamond.png' />
                <div className='w-full bg-[#efefef] rounded-lg p-2 flex items-center justify-center gap-2 flex-col'>
                    <Formatter title={data?.message?.prize - 10} subtitle='السعر الأصلي' img='/assets/diamond.png' />
                    <Formatter title='10' subtitle='مكافأة عامة +' img='/assets/diamond.png' />
                </div>
                <Formatter title={data?.message?.cost} subtitle='سعر' img='/assets/bc-shells.svg' />
                <Formatter title={data?.message?.game} subtitle='لعبة' />
                <Formatter title='Garena Prepaid Card (Intl)' subtitle='طريقة الدفع' />
                <Formatter title={formattedDate} subtitle='وقت المعاملة' />
                <Button onClick={handleBackToHome} variant='custom' className='rounded-tr-sm rounded-br-sm'>
                    العودة إلى الصفحة الرئيسية
                </Button>
            </div>

            }
        </>
    );
}

const Formatter = ({ title, subtitle, img }) => {
    return (
        <div className='w-full flex items-center justify-between'>
            <div className='flex items-center justify-center gap-2'>
                <div className='flex items-center justify-end flex-col'>
                    <p className='text-sm font-medium font-en'>{title}</p>
                </div>
                {img && <Image src={img} height={20} width={20} alt='diamond' />}
            </div>
            <p className='text-sm font-normal font-ar '>{subtitle}</p>
        </div>
    );
}



export default Page;




