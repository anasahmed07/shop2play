'use client'
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const Adminview = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [authenticated, setAuthenticated] = useState(false)

    function handleformSubmit(e) {
        e.preventDefault()


        if (name === process.env.NEXT_PUBLIC_ADMIN_NAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            setAuthenticated(true)
            alert('تم تسجيل الدخول!')
        } else {
            alert('اسم المستخدم أو كلمة المرور غير صحيحة')
        }
    }





    return (
        <>
            {
                !authenticated ? (
                    <div className='  mt-20 px-3 w-[400px] max-[445px]:w-full  m-auto h-[300px] rounded-lg shadow-lg border border-[#e5e5e5]'>
                        <h1 className=' text-center mx-2 text-xl font-bold mt-10 font-ar '>تسجيل الدخول</h1>
                        <form onSubmit={handleformSubmit}>
                            <Input value={name} onChange={(e) => setName(e.target.value)} className=' font-ar  mt-5' placeholder='اسم المستخدم' />
                            <Input value={password} onChange={(e) => setPassword(e.target.value)} className=' font-ar  mt-5' placeholder='كلمة المرور' />
                            <Button type="submit" variant='custom' className='w-full  rounded-tr-sm rounded-br-sm mt-8'>
                                يُقدِّم
                            </Button>
                        </form>
                    </div>
                ) : (
                    <div className=' w-full flex  items-center justify-center h-full'>
                        <div className=' w-full px-5 flex items-start flex-wrap justify-center gap-40 max-[1036px]:justify-between
                        max-[1036px]:gap-0 max-[888px]:items-center max-[888px]:justify-center mb-20
                        '>
                            <AddPlayer />
                            <AddRedeemCode />
                        </div>

                    </div>
                )
            }
        </>
    );
}

export default Adminview;



const AddPlayer = () => {
    const [playerName, setPlayerName] = useState('');
    const [playerUid, setPlayerUid] = useState('');
    const [playerGameType, setPlayerGameType] = useState('freefire');
    const [loading, setLoading] = useState(false);

    const handleGameTypeChange = (e) => {
        setPlayerGameType(e.target.value);
    };

    async function handlePlayerAdd(e) {
        e.preventDefault();


        if (playerName === '' || !playerUid || !playerGameType) {
            return alert('جميع الحقول مطلوبة');
        }
        // if (playerUid.length !== 8) {
        //     return alert('Player UID must be 8 digits');
        // }
        setLoading(true);
        // const uid = Number(playerUid);
        try {
            setPlayerName('')
            setPlayerUid('')
            setPlayerGameType('freefire')

            const response = await fetch("/api/add-user", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ name: playerName, uid: playerUid, game: playerGameType })
            });


            const responseData = await response.json();
            if (!responseData.success) {
                alert(responseData.message);
            } else {
                alert(responseData.message);
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='mt-20 m-3 px-3 w-[400px] h-fit py-3 rounded-lg shadow-lg border border-[#e5e5e5]'>
            <h1 className='text-center text-xl font-ar  font-bold mt-10'>إضافة لاعب</h1>
            <form onSubmit={handlePlayerAdd}>
                <Input
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className=' font-ar mt-5'
                    placeholder='اسم اللاعب'
                />
                <Input
                    value={playerUid}
                    onChange={(e) => setPlayerUid(e.target.value)}
                    className=' font-ar mt-5'
                    placeholder='معرف اللاعب'
                />
                <select
                    className='w-full px-2 py-2 mt-5 rounded-md shadow-sm border'
                    onChange={handleGameTypeChange}
                    value={playerGameType}
                >
                    <option value="freefire">Freefire</option>

                </select>
                <Button
                    disabled={loading}
                    type="submit"
                    variant='custom'
                    className='w-full rounded-tr-sm rounded-br-sm mt-8'
                >
                    {!loading ? 'يُقدِّم' : '...يُقدِّم'}
                </Button>
            </form>
        </div>
    );
}



const AddRedeemCode = () => {
    const [redeemCodes, setRedeemCodes] = useState([]);
    const [codeLength, setCodeLength] = useState(6);
    const [numCodes, setNumCodes] = useState(1);
    const [cost, setCost] = useState('1'); 
    const [prize, setPrize] = useState('');
    const [game, setGame] = useState('freefire');
    const [loading, setLoading] = useState(false);

    const freefireMappings = {
        '1': 110,
        '2': 231,
        '5': 583,
        '10': 1188,
        '20': 2420
    };



    useEffect(() => {
        if (game === 'freefire') {
            setPrize(freefireMappings[cost] || '');

    }}, [cost, game]);

    const handleGameTypeChange = (e) => {
        setGame(e.target.value);
        setCost('1'); 
        setPrize(''); 
        setRedeemCodes([]); // Clear generated codes when game changes
    };

    const handleCostChange = (e) => {
        setCost(e.target.value);
    };

    const handleCodeLengthChange = (e) => {
        setCodeLength(e.target.value);
    };

    const handleNumCodesChange = (e) => {
        setNumCodes(e.target.value);
    };

    const generateCodes = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let generatedCodes = [];

        for (let i = 0; i < numCodes; i++) {
            let code = '';
            for (let j = 0; j < codeLength; j++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                code += characters[randomIndex];
            }
            generatedCodes.push({ code, cost });
        }

        setRedeemCodes(generatedCodes);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (redeemCodes.length === 0) {
                alert('يرجى توليد رموز صالحة');
                return;
            }

            for (let codeObj of redeemCodes) {
                const response = await fetch('/api/add-code', {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify({ code: codeObj.code, prize: Number(prize), cost: Number(codeObj.cost), game })
                });

                const responseData = await response.json();

                if (!responseData.success) {
                    alert(`فشل حفظ الرمز: ${codeObj.code}`);
                    return;
                }
            }
            const csvData = convertToCSV(redeemCodes.map(codeObj => ({
                code: codeObj.code,
                game,
                price: codeObj.cost
            })));
            
            const link = document.createElement('a');
            link.href = csvData;
            link.download = 'redeem_codes.csv';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            alert('تم حفظ جميع الرموز بنجاح');
            setRedeemCodes([]);
            setPrize('');
            setGame('freefire');
            setCodeLength(6);
            setNumCodes(1);
            setCost('1');
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='mt-20 m-3 px-3 w-[400px] h-fit py-3 rounded-lg shadow-lg border border-[#e5e5e5]'>
            <h1 className='text-center text-xl font-bold mt-10 font-ar'>إنشاء رمز</h1>
            <form onSubmit={handleSubmit}>
                <div className='mt-4'>
                    <label>طول الرمز:</label>
                    <select
                        className='w-full px-2 py-2 mt-2 rounded-md shadow-sm border'
                        value={codeLength}
                        onChange={handleCodeLengthChange}
                    >
                        {[...Array(7)].map((_, i) => (
                            <option key={i} value={6 + i}>{6 + i}</option>
                        ))}
                    </select>
                </div>
                <div className='mt-4'>
                    <label>عدد الرموز لتوليد:</label>
                    <input
                        type='number'
                        className='w-full px-2 py-2 mt-2 rounded-md shadow-sm border'
                        value={numCodes}
                        onChange={handleNumCodesChange}
                        min='1'
                    />
                </div>
                <div className='mt-4'>
                    <label>السعر لكل رمز:</label>
                    <select
                        className='w-full px-2 py-2 mt-2 rounded-md shadow-sm border'
                        value={cost}
                        onChange={handleCostChange}
                    >
                        {game === 'freefire' && (
                            <>
                                <option value='1'>$1</option>
                                <option value='2'>$2</option>
                                <option value='5'>$5</option>
                                <option value='10'>$10</option>
                                <option value='20'>$20</option>
                            </>
                        )}

                    </select>
                </div>
                <Button
                    type='button'
                    onClick={generateCodes}
                    className='mb-4 mt-4'
                    variant='outline'
                >
                    توليد الرموز
                </Button>
                <div className='mt-4'>
                    <label>الرموز المولدة:</label>
                    <textarea
                        value={redeemCodes.map(codeObj => `${codeObj.code} (السعر: ${codeObj.cost})`).join('\n')}
                        readOnly
                        className='w-full px-2 py-2 mt-2 rounded-md shadow-sm border'
                        rows={4}
                    />
                </div>
                <Input
                    value={prize}
                    readOnly
                    className='font-ar mt-5'
                    placeholder='المبلغ'
                />
                <select
                    className='w-full px-2 py-2 mt-5 rounded-md shadow-sm border'
                    value={game}
                    onChange={handleGameTypeChange}
                >
                    <option value='freefire'>Freefire</option>
    
                </select>
                <Button
                    disabled={loading}
                    type='submit'
                    variant='custom'
                    className='w-full rounded-tr-sm rounded-br-sm mt-8'
                >
                    {!loading ? 'يُقدِّم' : '...يُقدِّم'}
                </Button>
            </form>
        </div>
  );
};


const convertToCSV = (data) => {
    const headers = ['Code', 'Game', 'Price'];
    const rows = data.map(codeObj => [codeObj.code, codeObj.game, codeObj.price]);

    let csvContent = "data:text/csv;charset=utf-8," 
        + [headers, ...rows].map(e => e.join(",")).join("\n");

    return encodeURI(csvContent);
};
