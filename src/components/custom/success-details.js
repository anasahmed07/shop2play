import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
const SuccessDetails = () => {
    return (
        <div className=' p-2 h-fit gap-5 mt-10 w-[600px] m-auto flex flex-col'>
            <Formatter title='110' subtitle='المجموع' img='/assets/diamond.png' />
            <div className=' w-full bg-[#efefef] rounded-lg p-2 flex items-center justify-center gap-2 flex-col '>
                <Formatter title='100' subtitle='السعر الأصلي' img='/assets/diamond.png' />
                <Formatter title='10' subtitle='مكافأة عامة +' img='/assets/diamond.png' />
            </div>
            <Formatter title='50' subtitle='سعر' img='/assets/bc-shells.svg' />
            <Formatter title='FreeFire' subtitle='لعبة' />
            <Formatter title='Garena Prepaid Card (Intl)' subtitle='طريقة الدفع' />
            <Formatter title='PM 13:23:6,7/16/90' subtitle='وقت المعاملة' />
            <Button variant='custom' className=' rounded-tr-sm rounded-br-sm'  >
                العودة إلى الصفحة الرئيسية
            </Button>
        </div>
    );
}

const Formatter = ({ title, subtitle, img }) => {
    return (
        <div className=' w-full flex items-center justify-between'>
            <div className=' flex items-center justify-center gap-2'>
                <div className=' flex  items-center justify-end flex-col'>
                    <p className=' text-sm font-medium  font-en'>{title}</p>

                </div>
                {img && <Image src={img} height={20} width={20} alt='diamond' />}
            </div>
            <p className=' text-sm font-normal'>{subtitle}</p>
        </div>
    );
}

export default SuccessDetails;
