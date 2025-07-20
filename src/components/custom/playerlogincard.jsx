'use client'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from '../ui/input';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import { ChevronDownIcon, ExitIcon } from '@radix-ui/react-icons';
import { Login, Logout } from '@/redux/slices/userslice';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import Image from 'next/image';
import { changeLan } from "@/redux/slices/settingsSlice";




const Playerlogincard = () => {

  const dispatch = useDispatch();
  const language = useSelector((state) => state.lan.language);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      dispatch(changeLan(savedLanguage));
    }
  }, [dispatch]);


  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setErrorMessage('An error occurred. Please try again later');
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 3000);
  };;

  const game = useSelector((state) => state.game.value);
  const user = useSelector((state) => state.user.user);
  const [uid, setUid] = useState('');
  const [loading, setLoading] = useState(false);
  const [prevPlayers, setPrevPlayers] = useState([]);
  const [error, setError] = useState({ appearance: false, message: '' });

  useEffect(() => {
    const storedPlayers = localStorage.getItem('usersArray');
    if (storedPlayers) {
      setPrevPlayers(JSON.parse(storedPlayers));
    }
  }, []);

  const handlePlayerLogin = async () => {
    setUid('');
    setError({ appearance: false, message: '' });
    if (!uid) {
      return setError({ appearance: true, message: 'Enter Player Uid' });
    }
    setLoading(true);
    try {
      const response = await fetch(`/api/get-user/?uid=${uid}&game=${game}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "GET",
      });
      const responseData = await response.json();
      if (!responseData.success) {
        setError({ appearance: true, message: responseData.message });
      } else {
        dispatch(Login({ uid: responseData.message.uid, name: responseData.message.name, game: responseData.message.game }));
      }
    } catch (error) {
      setError({ appearance: true, message: error.message });
    } finally {
      setLoading(false);
    }
  };

  const deletePlayerFromList = (uidToDelete) => {
    let usersArray = JSON.parse(localStorage.getItem('usersArray')) || [];
    usersArray = usersArray.filter(user => user.uid !== uidToDelete);
    localStorage.setItem('usersArray', JSON.stringify(usersArray));
    setPrevPlayers(prev => prev.filter(player => player.uid !== uidToDelete));
  };

  const [placeholderText, setPlaceholderText] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setPlaceholderText(language === 'en' ? 'Please enter player ID' : 'يرجى إدخال معرف اللاعب');
      } else {
        setPlaceholderText(language === 'en' ? 'Please enter player ID here' : 'يرجى إدخال معرف اللاعب هنا');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [language]);


  const handleSvgClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('SVG clicked');
  };

  return (
    <div dir={language === 'en' ? 'ltr' : 'rtl' } className='w-full mt-10'>
      <div className='flex items-center gap-2 max-[736px]:w-full'>
        {user?.loggedIn && <div className={`flex items-end max-[736px]:w-full justify-center gap-28 hover:cursor-pointer ${user ? 'max-[736px]:justify-between' : 'max-[736px]:items-start'}`}>
          <div onClick={() => dispatch(Logout())} className='flex items-center justify-center gap-2'>
            <p className='text-sm font-normal text-[#d81a0d] font-ar '>
              {language === 'en' ? 'Sign out' : 'تسجيل الخروج'}
            </p>
            <ExitIcon className='text text-[#d81a0d]' />
          </div>
          <p className='text-xl font-bold font-ar '>
            {language === 'en' ? 'Login' : 'تسجيل الدخول'}
          </p>
        </div>}


        <div className=" flex items-center gap-2 text-lg/none text-text-title md:text-xl/none">
          <div className="grid items-center" data-marker="true">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="col-start-1 row-start-1 text-2xl text-primary-red"
            >
              <path
                d="M0 3C0 1.34315 1.34315 0 3 0H21C22.6569 0 24 1.34315 24 3V15.7574C24 16.553 23.6839 17.3161 23.1213 17.8787L17.8787 23.1213C17.3161 23.6839 16.553 24 15.7574 24H3C1.34315 24 0 22.6569 0 21V3Z"
                fill="currentColor"
              />
            </svg>
            <div className="col-start-1 row-start-1 text-center text-base/none font-bold text-white">
              1
            </div>
          </div>
          <span className="font-bold" />
        </div>
        {!user.loggedIn && <div className={`flex justify-center gap-28 hover:cursor-pointer ${user ? 'max-[736px]:justify-between' : 'max-[736px]:items-start'}`}>
          <p dir={language === 'en' ? 'ltr' : 'rtl' } className='text-xl font-bold font-ar '>
            {language === 'en' ? 'Login' : 'تسجيل الدخول'}
          </p>
        </div>

        }
      </div>

      {!user?.loggedIn ? (
        <div dir={language === "en" ? "ltr" : "rtl"} className='widthh w-fit max-[736px]:w-full h-fit bg-[#eee] rounded-lg mt-5 gap-5 border-[#e5e7eb] border flex flex-col py-4 pb-6 px-4 justify-center'>
          <div className='flex flex-col justify-center items-start gap-2 max-[736px]:w-full'>
            <div className='flex gap-1'>
            <p className='mr-1 text-sm font-ar  font-medium'>{language === 'en' ? 'Player ID' : 'معرّف الاعب'}</p>
              <button
                type="button"
                className="rounded-full text-sm outline-current transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2"
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_489_1601)">
                    <path
                      d="M4.8999 5.39848C4.89981 4.44579 5.67209 3.67344 6.62478 3.67344H7.37471C8.33038 3.67344 9.09977 4.45392 9.09971 5.40371C9.09967 6.05546 8.73195 6.65677 8.14619 6.94967L7.57416 7.23571C7.49793 7.27382 7.44978 7.35173 7.44978 7.43695V7.49844C7.44978 7.78839 7.21473 8.02344 6.92478 8.02344C6.63483 8.02344 6.39978 7.78839 6.39978 7.49844V7.43695C6.39978 6.95403 6.67262 6.51255 7.10456 6.29657L7.6766 6.01053C7.90385 5.8969 8.0497 5.66087 8.04971 5.40365C8.04973 5.0279 7.74459 4.72344 7.37471 4.72344H6.62478C6.25203 4.72344 5.94987 5.02563 5.9499 5.39838C5.94993 5.68833 5.7149 5.9234 5.42495 5.92343C5.135 5.92346 4.89993 5.68843 4.8999 5.39848Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6.9999 10.1484C7.3865 10.1484 7.6999 9.83504 7.6999 9.44844C7.6999 9.06184 7.3865 8.74844 6.9999 8.74844C6.6133 8.74844 6.2999 9.06184 6.2999 9.44844C6.2999 9.83504 6.6133 10.1484 6.9999 10.1484Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.524902 6.99844C0.524902 3.42239 3.42386 0.523438 6.9999 0.523438C10.5759 0.523438 13.4749 3.42239 13.4749 6.99844C13.4749 10.5745 10.5759 13.4734 6.9999 13.4734C3.42386 13.4734 0.524902 10.5745 0.524902 6.99844ZM6.9999 1.57344C4.00376 1.57344 1.5749 4.00229 1.5749 6.99844C1.5749 9.99458 4.00376 12.4234 6.9999 12.4234C9.99605 12.4234 12.4249 9.99458 12.4249 6.99844C12.4249 4.00229 9.99605 1.57344 6.9999 1.57344Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath>
                      <rect width={14} height={14} fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </button>

            </div>


            <div >
              <div dir={language === 'en' ? 'rtl' : 'ltr'} className='w-full flex '>
                  <>
                    <Button
                      style={language == 'ar' ? {
                        height: "2.75rem",
                        borderTopRightRadius: '0',
                        borderBottomRightRadius: '0',
                        borderTopLeftRadius: '6px',
                        borderBottomLeftRadius: '6px',
                      } : {
                        height: "2.75rem",
                        borderTopRightRadius: '6px',
                        borderBottomRightRadius: '6px',
                        borderTopLeftRadius: '0',
                        borderBottomLeftRadius: '0',
                      }}
                      className={"w-28"}
                      disabled={loading} onClick={handlePlayerLogin} variant='custom' size='custom'>
                      {loading ? (language === 'en' ? 'Login ...' : '... تسجيل الدخول') : (language === 'en' ? 'Login' : 'تسجيل الدخول')}
                    </Button>
                    <div className='relative max-[736px]:w-full'>
                      <Input
                        dir={language === 'en' ? 'ltr' : 'rtl'}
                        value={uid}
                        onChange={(e) => setUid(e.target.value)}
                        className={`oooo font-ar relative w-[400px] max-[736px]:w-full ${language === 'ar' ? 'pr-4' : 'pl-4'} rounded-none bg-white`}
                        placeholder={placeholderText}
                        style={language == 'ar' ? {
                          height: '2.75rem',
                          borderTopRightRadius: '6px',
                          borderBottomRightRadius: '6px',
                          borderTopLeftRadius: '0',
                          borderBottomLeftRadius: '0',
                        } : {
                          height: '2.75rem',
                          borderTopRightRadius: '0',
                          borderBottomRightRadius: '0',
                          borderTopLeftRadius: '6px',
                          borderBottomLeftRadius: '6px',
                        }}
                      />
                      <div className='problem'></div>
                      {error.appearance && <p className='text-sm font-light mt-1 text-red-600 text-right'>{error.message}</p>}
                      <Menubar>
                        <MenubarMenu>
                          <MenubarTrigger>
                            {prevPlayers.length < 0 && (
                              <div className='h-full w-full'>
                                <ChevronDownIcon className='mr-2 text-black h-5 w-5 absolute top-[45%] -translate-y-1/2 hover:cursor-pointer' />
                              </div>
                            )}
                          </MenubarTrigger>
                          <MenubarContent>
                            {prevPlayers?.map((player) => (
                              <React.Fragment key={player.uid}>
                                <MenubarItem >
                                  <Image className=' hover:cursor-pointer' onClick={() => setUid(player.uid)} src='/assets/replace.svg' height={15} width={15} alt='aa' />
                                  <PreviousPlayers
                                    game={player.game}
                                    name={player.name}
                                    id={player.uid}
                                    onDelete={deletePlayerFromList}
                                  />
                                </MenubarItem>
                                <MenubarSeparator />
                              </React.Fragment>
                            ))}
                          </MenubarContent>
                        </MenubarMenu>
                      </Menubar>
                    </div>
                  </>
              </div>
            </div>




            <div dir={language === 'en' ? 'ltr' : 'rtl'} style={{ width: "100%", height: "20px" }} className="relative flex flex-col  gap-4 text-xs/normal text-text-secondary md:text-sm/[22px]">
              <div className="flex  justify-between w-full mb-4">
                <span className="flex-1" style={{ color: "#757575" }}>
                  {language === 'en'
                    ? 'Or login with your game account'
                    : game === "deltaforce"
                      ? 'سجل الدخول باستخدام حساب اللعبة الخاص بك.'
                      : 'أو سجل دخولك بحساب اللعبة الخاص بك'
                  }
                </span>
                {game === "freefire" &&
                  <div className="flex gap-4">
                    <a
                      className="shrink-0 rounded-full p-1.5 transition-opacity hover:opacity-70 bg-[#006AFC]"
                      href="https://authgop.garena.com/universal/oauth?client_id=10017&redirect_uri=https%3A%2F%2Fshop2game.com%2F%3Fapp%3D100067&response_type=token&platform=3&locale=en-US&theme=light"
                      onClick={handleClick}
                    >
                      <img
                        className="h-5 w-5 brightness-0 invert"
                        src="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/ic-fb-485c92b0.svg"
                        alt="Facebook logo"
                      />
                    </a>
                    <a
                      className="shrink-0 rounded-full p-1.5 transition-opacity hover:opacity-70 bg-white"
                      href="https://authgop.garena.com/universal/oauth?client_id=10017&redirect_uri=https%3A%2F%2Fshop2game.com%2F%3Fapp%3D100067&response_type=token&platform=8&locale=en-US&theme=light"
                      onClick={handleClick}
                    >
                      <img
                        className="h-5 w-5"
                        src="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/ic-google-d2ceaa95.svg"
                        alt="Google logo"
                      />
                    </a>
                    <a
                      className="shrink-0 rounded-full p-1.5 transition-opacity hover:opacity-70 bg-white"
                      href="https://authgop.garena.com/universal/oauth?client_id=10017&redirect_uri=https%3A%2F%2Fshop2game.com%2F%3Fapp%3D100067&response_type=token&platform=11&locale=en-US&theme=light"
                      onClick={handleClick}
                    >
                      <img
                        className="h-5 w-5"
                        src="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/ic-twitter-92527e61.svg"
                        alt="Twitter logo"
                      />
                    </a>
                    <a
                      className="shrink-0 rounded-full p-1.5 transition-opacity hover:opacity-70 bg-[#0077FF]"
                      href="https://authgop.garena.com/universal/oauth?client_id=10017&redirect_uri=https%3A%2F%2Fshop2game.com%2F%3Fapp%3D100067&response_type=token&platform=5&locale=en-US&theme=light"
                      onClick={handleClick}
                    >
                      <img
                        className="h-5 w-5 brightness-0 invert"
                        src="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/ic-vk-abadf989.svg"
                        alt="VK logo"
                      />
                    </a>
                  </div>
                }

                {game === "deltaforce" &&
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <a
                        className="shrink-0 rounded-full p-1.5 transition-opacity hover:opacity-70 bg-white"
                        href="https://authgop.garena.com/universal/oauth?client_id=10017&redirect_uri=https%3A%2F%2Fshop2game.com%2F%3Fapp%3D100067&response_type=token&platform=11&locale=en-US&theme=light"
                        onClick={handleClick}
                      >
                        <img
                          className="h-5 w-5"
                          style={{ filter: "invert(15%) sepia(92%) saturate(4396%) hue-rotate(353deg) brightness(89%) contrast(96%)" }}
                          src="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/ic-garena-2fce3e76.svg"
                          alt="Garena logo"
                        />
                      </a>
                      <a
                        className="shrink-0 rounded-full p-1.5 transition-opacity hover:opacity-70 bg-[#006AFC]"
                        href="https://authgop.garena.com/universal/oauth?client_id=10017&redirect_uri=https%3A%2F%2Fshop2game.com%2F%3Fapp%3D100067&response_type=token&platform=3&locale=en-US&theme=light"
                        onClick={handleClick}
                      >
                        <img
                          className="h-5 w-5 brightness-0 invert"
                          src="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/ic-fb-485c92b0.svg"
                          alt="Facebook logo"
                        />
                      </a>
                      <a
                        className="shrink-0 rounded-full p-1.5 transition-opacity hover:opacity-70 bg-white"
                        href="https://authgop.garena.com/universal/oauth?client_id=10017&redirect_uri=https%3A%2F%2Fshop2game.com%2F%3Fapp%3D100067&response_type=token&platform=8&locale=en-US&theme=light"
                        onClick={handleClick}
                      >
                        <img
                          className="h-5 w-5"
                          src="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/ic-google-d2ceaa95.svg"
                          alt="Google logo"
                        />
                      </a>
                    </div>
                  </div>
                }



              </div>
              {errorMessage && showError && (
                <div className="absolute bottom-0 left-0 w-full text-red-500 transition-opacity duration-500 opacity-100">
                  {errorMessage}
                </div>
              )}
            </div>

          </div>
        </div>
      ) : (
        <div className='w-fit max-[736px]:w-full h-fit bg-[#eee] rounded-lg mt-5 gap-5 border-[#e5e7eb] border flex flex-col items-start py-4 pb-6 px-4 justify-center'>
          <div className='hover:cursor-pointer w-full flex items-center gap-20 justify-between px-2 py-2'>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-1'>
                <p>{user?.name}</p>
                <p className='font-semibold font-ar '>

                  {language === 'en' ? 'Username :' : ': اسم المستخدم'}
                </p>
              </div>
              <div className='flex gap-1'>
                <p className='text-[#888] text-sm'>{user?.uid}</p>
                <p className='text-[#888] text-sm font-ar '>


                  {language === 'en' ? 'Player ID :' : ': معرّف الاعب '}

                </p>
              </div>
            </div>
            {user.game === 'freefire' ? (
              <Image src='/assets/freefire-selector.png' width={50} height={50} alt='image' className='rounded-full' />
            ) : (
              <Image src='/assets/deltaforce-selector.png' width={50} height={50} alt='image' className='rounded-full' />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Playerlogincard;



const PreviousPlayers = ({ name, id, game, onDelete }) => {

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div
      className='hover:cursor-pointer w-full flex items-center gap-10 justify-between px-2 py-2'>
      <Cross2Icon onClick={handleDelete} />
      <div className='flex gap-2 items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex gap-1'>
            <p>{name}</p>
            <p className='font-semibold font-ar '>
              {language === 'en' ? 'Username :' : ': اسم المستخدم'}

            </p>
          </div>
          <div className='flex gap-1'>
            <p className='text-[#888] text-sm'>{id}</p>
            <p className='text-[#888] text-sm font-ar '>
              {language === 'en' ? 'Player ID :' : ': معرّف الاعب '}

            </p>
          </div>
        </div>
        {game === 'freefire' ? (
          <Image src='/assets/freefire-selector.png' alt='im' height={30} width={30} className='rounded-full' />
        ) : (
          <Image src='/assets/deltaforce-selector.png' alt='im' height={30} width={30} className='rounded-full' />
        )}
      </div>
    </div>
  );
};


