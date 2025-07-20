"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { changeLan } from "@/redux/slices/settingsSlice";
import { useSelector, useDispatch } from "react-redux";

const Topupamountcard = ({ onStickyButtonChange }) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game.value);
  const language = useSelector((state) => state.lan.language);
  const [toggle, settoggle] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      dispatch(changeLan(savedLanguage));
    }
  }, [dispatch]);

  useEffect(() => {
    if (game === "deltaforce") {
      settoggle(true); // Always show Garena voucher panel for Delta Force
    } else {
      settoggle(false); // Set purchase mode as default for Free Fire
    }
  }, [game]);

  const user = useSelector((state) => state.user.user);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ appearance: false, message: "" });
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!user.loggedIn) {
      setError({ appearance: true, message: "Please Login First" });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `/api/get-code?code=${code}&game=${user.game}&uid=${user.uid}`,
        {
          headers: {
            Accept: "application/json",
            // No need for 'Content-Type' for GET requests
          },
          method: "GET",
        }
      );

      const responseData = await response.json();
      console.log(responseData);

      if (!responseData.success) {
        return setError({ appearance: true, message: responseData.message });
      } else {
        let usersArray = JSON.parse(localStorage.getItem("usersArray")) || [];
        usersArray.push(user);
        localStorage.setItem("usersArray", JSON.stringify(usersArray));
        router.push(`/success/${code}`);
      }
    } catch (error) {
      setError({ appearance: true, message: error.message });
    } finally {
      setLoading(false);
    }
  }

  const freefiredata = [
    {
      name: "US$ 1",
      heading: "Diamond 100",
      bonus: language === "en" ? "+ Bonus General 10" : "10 مكافأة عام +",
    },
    {
      name: "US$ 2",
      heading: "Diamond 210",
      bonus: language === "en" ? "+ Bonus General 21" : "21 مكافأة عام +",
    },
    {
      name: "US$ 5",
      heading: "Diamond 530",
      bonus: language === "en" ? "+ Bonus General 53" : "53 مكافأة عام +",
    },
    {
      name: "US$ 10",
      heading: "Diamond 1,080",
      bonus: language === "en" ? "+ Bonus General 108" : "108 مكافأة عام +",
    },
    {
      name: "US$ 20",
      heading: "Diamond 2,200",
      bonus: language === "en" ? "+ Bonus General 220" : "220 مكافأة عام +",
    },
  ];



  const deltaforcedata = [
    { name: "US$ 1", heading: "Delta Coin 60" },
    { name: "US$ 2", heading: "Delta Coin 120" },
    { name: "US$ 5", heading: "Delta Coin 300", bonus: "+ مكافأة عام 21" },
    { name: "US$ 10", heading: "Delta Coin 660", bonus: "+ مكافأة عام 68" },
    { name: "US$ 20", heading: "Delta Coin 1,320", bonus: "+ مكافأة عام 207" },
  ];

  const [selectedCard, setSelectedCard] = useState({
    id: 1,
    value: 50,
    price: "TND 1.95",
    reward: 5,
  });

  const cards = [
    { id: 1, value: 50, price: "TND 1.95", reward: 5 },
    { id: 2, value: 100, price: "TND 3.7", reward: 10 },
    { id: 3, value: 210, price: "TND 7.4", reward: 21 },
    { id: 4, value: 530, price: "TND 18.5", reward: 53 },
  ];

  const handleCardClick = (card) => {
    if (selectedCard?.id === card.id) {
      // Unselect the card
      setSelectedCard(null);
      setLatestCard(null);
      // Also unselect payment method
      setSelected(null);
      setShowMessagee(false);
      setDisable(false);
      setShowButton(false);
    } else {
      // Select the card
      setSelectedCard(card);
      setLatestCard(card);
    }
  };

  const [activeCard, setActiveCard] = useState({
    id: 1,
    value: 50,
    price: "TND 1.95",
    reward: 5,
  });

  const cardss = [
    {
      id: "r1f",
      imgSrc:
        "https://cdn-gop.garenanow.com/gop/app/0000/100/067/rebate/0000/002/058/logo.png",
      altText: "بطاقة رفع المستوى",
      title: language === "en" ? "Level Up Pass" : "بطاقة رفع المستوى",
      price: "TND 3.7",
    },
    {
      id: "r1h",
      imgSrc:
        "https://cdn-gop.garenanow.com/gop/app/0000/100/067/item/0803/000/000/logo.png",
      altText: "تصريح بوياه",
      title: language === "en" ? "Booyah Pass Card" : "تصريح بوياه",
      price: "TND 11",
    },
  ];


  const [showMessage, setShowMessage] = useState(false);
  const errorMessageRef = useRef(null);

  const handleButtonClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  };

  useEffect(() => {
    if (showMessage && errorMessageRef.current) {
      errorMessageRef.current.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        window.scrollBy(0, -100);
      }, 500);
    }
  }, [showMessage]);

  // Set default payment method selection for Free Fire
  const [selected, setSelected] = useState(game === "freefire" ? "channel-230199" : null);

  const [showButton, setShowButton] = useState(game === "freefire");

  const handleClick = (id) => {
    if (selected === id) {
      // Unselect payment method and card
      setSelected(null);
      setShowMessagee();
      setSelectedCard(null);
      setLatestCard(null);
      setDisable(false);
      setShowButton(false);
    } else {
      // Select payment method and first card
      setSelected(id);
      setShowMessagee(true);
      // Auto select first card from the cards array
      if (!selectedCard && !latestCard) {
        const firstCard = cards[0]; // This is the 50 diamonds card
        setSelectedCard(firstCard);
        setLatestCard(firstCard);
      }
      setDisable(true);
    }
  };

  const [showMessagee, setShowMessagee] = useState(game === "freefire");

  const [disable, setDisable] = useState(game === "freefire");

  const handleClickk = () => {
    setShowMessagee((prev) => !prev);
    setDisable((prev) => !prev);
  };

  const handleTabClick = (selected) => {
    settoggle(selected);
    setShowButton(true);
  };

  const [latestCard, setLatestCard] = useState({
    id: 1,
    value: 50,
    price: "TND 1.95",
    reward: 5,
  });

  const handleCardClicck = (card) => {
    if (latestCard?.id === card.id) {
      // Unselect the card
      setLatestCard(null);
      // Also unselect payment method
      setSelected(null);
      setShowMessagee(false);
      setDisable(false);
      setShowButton(false);
    } else {
      // Select the card
      setLatestCard(card);
    }
  };

  const handleTabClickk = () => {
    setSelected(null);
    setShowButton(false);
    setShowMessagee(false);
    setDisable(false);
    setSelectedCard(null);
    setLatestCard(null);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Simplified useEffect to handle button visibility
  useEffect(() => {
    if (game === "freefire" && selected && (selectedCard || latestCard)) {
      setShowButton(true);
      setDisable(true);
    } else if (game === "freefire" && (!selected || (!selectedCard && !latestCard))) {
      setShowButton(false);
      setDisable(false);
    }
  }, [selected, selectedCard, latestCard, game]);

  // Notify parent component about sticky button state
  useEffect(() => {
    if (onStickyButtonChange) {
      onStickyButtonChange({
        show: showButton && !toggle,
        disable,
        latestCard,
        language,
        handleButtonClick
      });
    }
  }, [showButton, toggle, disable, latestCard, language, onStickyButtonChange]);



  return (
    <div
      dir={language === "en" ? "rtl" : "ltr"}
      className="mt-8"
    >
      <div className=" flex items-center justify-end gap-2">
        <p className=" text-xl font-bold font-ar ">
          {language === "en" ? "Top-up Amount" : "كمية الشحن"}
        </p>
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
              2
            </div>
          </div>
          <span className="font-bold" />
        </div>
      </div>

      <div
        dir={language === "en" ? "ltr" : "rtl"}
        className="nowarp mt-5 max-[760px]:items-start max-[1100px]:w-full max-[760px]:flex-col max-[760px]:h-fit relative mb-4 flex"
        role="tablist"
        aria-orientation="horizontal"
      >
        {game === "deltaforce" ? null : (
          <div className="flex gap-2">
            <button
              className={`rounded-full p-2 text-sm/none font-medium  ${!toggle ? "font-bold border-red-600 border-2 bg-red-50" : "border border-gray-500"
                }`}
              onClick={() => {
                settoggle(false);
                // Set default states for purchase mode
                if (game === "freefire") {
                  setSelected("channel-230199");
                  setSelectedCard(cards[0]);
                  setLatestCard(cards[0]);
                  setShowMessagee(true);
                  setDisable(true);
                  setShowButton(true);
                }
              }}
              style={{
                color: !toggle ? "red" : "inherit",
                fontWeight: !toggle ? 700 : "normal",
                fontSize: "14px",
              }}
            >
              {language === "en" ? "Purchase" : "شراء"}
            </button>
            <button
              className={`rounded-full p-2 text-sm/none font-medium ${toggle ? "font-bold border-red-600 border-2 bg bg-red-50" : "border border-gray-500"
                }`}
              onClick={() => {
                handleTabClick("tab1");
                settoggle(true);
              }}
              style={{
                color: toggle ? "red" : "inherit",
                fontWeight: toggle ? 700 : "normal",
                fontSize: "14px",
              }}
            >
              {language === "en" ? "Garena Voucher" : "قسيمة غارينا"}
            </button>
          </div>
        )}
      </div>

      {showMessage && (
        <div
          ref={errorMessageRef}
          style={{
            color: "#D81A0D",
            marginTop: "10px",
            fontWeight: "500",
            marginBottom: "10px",
          }}
          dir={language === "en" ? "ltr" : "ltr"}
        >
          Can't proceed card payment for now. Please use another method.
        </div>
      )}

      {toggle ? (
        <div className="w-[1000px] max-[760px]:items-start h-[450px] flex mt-5 max-[1100px]:w-full max-[760px]:flex-col-reverse max-[760px]:h-fit">
          <div className="relative h-full w-[50%] flex flex-col items-center justify-between py-8 px-10 max-[760px]:w-full max-[760px]:gap-5">
              <div className="absolute start-[3px] top-[3px] overflow-hidden rounded-[3px]">
                <div className="flex text-2xs/none font-bold uppercase">
                  <div
                    style={{
                      backgroundColor: "rgb(230 37 45 / calc(1 * 1))",
                      fontWeight: "500",
                      fontSize: "12px",
                    }}
                    className="h-4 flex items-center gap-1 bg-bg-tag-promo p-0.5 pe-1 text-white"
                  >
                    {language === "en" ? "PROMO" : "عرض خاص"}
                    <img
                      className="h-3 w-3 rounded-sm bg-white object-contain p-0.5"
                      src={
                        game === "deltaforce"
                          ? "https://cdn-gop.garenanow.com/gop/app/0000/100/151/point.png"
                          : "https://cdn-gop.garenanow.com/gop/app/0000/100/067/point.png"
                      }
                      alt="Special Offer"
                    />
                  </div>
                </div>
              </div>
            {game === "freefire" &&
              freefiredata?.map((offer) => {
                return (
                  <Offers
                    key={offer.name}
                    name={offer.name}
                    bonus={offer.bonus}
                    heading={offer.heading}
                  />
                );
              })}



            {game === "deltaforce" &&
              deltaforcedata?.map((offer) => {
                return (
                  <div
                    className="w-full flex items-center justify-between"
                    key={offer.name}
                  >
                    <div className="flex items-center justify-center gap-2 flex-col">
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-medium font-en">
                          {offer.heading}
                        </p>
                      </div>
                      {offer.bonus && (
                        <p
                          className="text-sm font-medium text-[#ff8f00]"
                          dir="rtl"
                        >
                          {offer.bonus}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <p className="text-sm font-[500] font-en">{offer.name}</p>
                      <img
                        src="https://cdn-gop.garenanow.com/gop/app/0000/100/151/point.png"
                        height={30}
                        width={30}
                        alt="Delta Coin"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="h-full w-[50%] py-8 px-10 flex items-end justify-start flex-col max-[760px]:w-full">
            <img
              class="h-[50px] w-[50px] object-contain"
              src="https://cdn-gop.garenanow.com/webmain/static/open_platform/images/icon_ppc.png"
            />

            <p
              style={{
                fontSize: "11px",
              }}
              className={`text-sm ${language === "en" ? "text-left my-2" : "text-right"
                } font-medium text-[#757575] font-ar`}
            >
              {language === "en" ? (
                "You can redeem your Garena voucher here. Garena vouchers can be purchased through our official distributors"
              ) : (
                <>
                  يمكنك استدال رمز قسيمة جارينا من هنا. يمكن شراء قسيمة جارينا
                  من خلال موزعينا الرسمين&nbsp;
                  <Link
                    target="_blank"
                    href="https://menadistributors.ff.garena.com/ar"
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                      className="font-ar underline text-[#2E86C1]"
                    >
                      (أضغط هنا للاكتاع على قائمة الموزعين)
                    </span>
                  </Link>
                </>
              )}
            </p>

            <div className="w-full">
              {user.loggedIn && (
                <p
                  style={{
                    marginTop: "5px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  className={`${language === "en" ? "text-left" : "text-right"
                    } text-md mr-1 font-normal text-[#28292f] mt-8 font-ar`}
                  dir={language === "en" ? "ltr" : "rtl"}
                >
                  {language === "en"
                    ? "Password for the prepaid Garena card"
                    : "كلمة المرور لبطاقة جارينا المدفوعة مسبقاً"}
                </p>
              )}
              <form onSubmit={handleSubmit}>
                {user.loggedIn ? (
                  <Input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className={`${language === "en" ? "text-left" : "text-right"
                      } mt-3 font-ar`}
                    placeholder={
                      language === "en"
                        ? "Prepaid Garena card password"
                        : "كلمة مرور بطاقة جارينا المدفوعة مسبقاً"
                    }
                    style={{
                      opacity: 0.5,
                    }}
                  />
                ) : null}
                {error.appearance && user.loggedIn && (
                  <p className="text-sm font-light mt-1 text-red-600 text-right">
                    {error.message}
                  </p>
                )}
                <Button
                  variant="custom"
                  className="font-bold rounded-md mt-5 h-10 text-lg text-white w-full"
                >
                  {!user.loggedIn
                    ? language === "en"
                      ? "Login"
                      : "تسجيل الدخول"
                    : loading
                      ? language === "en"
                        ? "... Confirm"
                        : "... تأكيد"
                      : language === "en"
                        ? "Confirm"
                        : "تأكيد"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div
          dir={language === "en" ? "ltr" : "rtl"}
          className="flex flex-col gap-9 px-2 lg:px-0"
        >
          <div className="flex flex-col gap-6 empty:hidden" />
          <div>
            <div>
              <div
                id="headlessui-tabs-panel-:r11:"
                role="tabpanel"
                tabIndex={-1}
                data-headlessui-state="selected"
                aria-labelledby="headlessui-tabs-tab-:rv:"
              >
                <div
                  className="flex flex-col gap-4"
                  id="headlessui-radiogroup-:r12:"
                  role="radiogroup"
                >
                  {selected && (
                    <div
                      className="mb-3"
                      style={{
                        backgroundColor: "#f7f7f7",
                      }}
                    >
                      <div className="flex items-center justify-between gap-4 rounded-md bg-border-login-panel px-2 py-1">
                        <div
                          className="text-xs/normal text-text-secondary md:text-sm/[22px]"
                          style={{
                            color: "#757575",
                          }}
                        >
                          الطائفة المعروضة حاليا تدعم الدفع عن طريق{" "}
                          <strong
                            className="font-medium text-text-content2"
                            style={{
                              color: "#D81A0D",
                            }}
                          >
                            أوريدوتونس
                          </strong>
                          . انقر فوق "إعادة تعيين" لإزالة التحديد.
                        </div>
                        <a
                          className="inline-flex items-center justify-center gap-1.5 rounded-md border py-1 text-center leading-none transition-colors border-primary-red text-primary-red hover:bg-bg-selected dark:hover:border-light-primary-red dark:hover:text-light-primary-red bg-bg-base px-3 text-xs font-medium h-7"
                          href=""
                          style={{
                            borderColor: "#D81A0D",
                            color: "#D81A0D",
                            borderWidth: "1px",
                            borderStyle: "solid",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            handleTabClickk();
                          }}
                        >
                          إعادة البط
                        </a>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col empty:hidden" role="none">
                    <div
                      className="flex flex-col gap-4 empty:hidden"
                      role="none"
                    >
                      <div
                        className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-6 md:gap-4 empty:hidden"
                        role="none"
                      >
                        {cards.map((card) => (
                          <div
                            onClick={() => handleCardClicck(card)}
                            key={card.id}
                            className="relative"
                            role="none"
                          >
                            <div
                              className={`borrder group peer relative flex min-h-[50px] cursor-pointer flex-col items-center justify-center rounded-md outline outline-2 outline-gray-200 sm:min-h-[64px] md:min-h-[72px] ${latestCard?.id === card.id
                                  ? "bg-[rgb(255,244,244,calc(1*1))] outline-red-700 outline-2 -outline-offset-2 "
                                  : "bg-bg-unselected outline-box-border"
                                }`}
                              id={`headlessui-radiogroup-option-${card.id}`}
                              role="radio"
                              aria-checked={latestCard?.id === card.id}
                              tabIndex={0}
                              onClick={() => handleCardClick(card)}
                            >
                              <div className="flex items-center group-aria-disabled:opacity-[.45]">
                                <img
                                  className="me-1 h-3 w-3 object-contain md:h-4 md:w-4"
                                  src="https://cdn-gop.garenanow.com/gop/app/0000/100/067/point.png"
                                  alt="Diamond"
                                />
                                <span className="text-sm/none font-medium md:text-lg/none">
                                  {card.value}
                                </span>
                              </div>
                            </div>
                            <div
                              className={`absolute inset-0 hidden cursor-pointer peer-aria-checked:block`}
                              id={`headlessui-radiogroup-option-${card.id}`}
                              role="radio"
                              aria-checked={latestCard?.id === card.id}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col empty:hidden" role="none">
                    <div
                      className="flex flex-col gap-4 empty:hidden"
                      role="none"
                    >
                      <div role="none">
                        <div className="mb-2 flex items-center" role="none">
                          <div
                            style={{ color: "#757575" }}
                            className="text-base/none font-bold text-text-secondary"
                            role="none"
                          >
                            {language === "en"
                              ? "Special Offers"
                              : "العروض الخاصة"}
                          </div>
                          <hr className="ms-2 grow border-line" role="none" />
                        </div>
                        <div
                          className="grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-4"
                          role="none"
                        >
                          {cardss.map((card) => (
                            <div
                              onClick={() => handleCardClicck(card)}
                              key={card.id}
                              className="relative"
                              role="none"
                            >
                              <div
                                className={`group peer relative flex h-full cursor-pointer flex-col items-center rounded-md p-1.5 pb-2 outline outline-1 outline-gray-200 outline-box-border ${latestCard?.id === card.id
                                    ? "bg-[rgb(255,244,244,calc(1*1))] outline-red-700 outline-2 -outline-offset-2"
                                    : "bg-bg-unselected outline-box-border"
                                  }`}
                                id={`headlessui-radiogroup-option-${card.id}`}
                                role="radio"
                                aria-checked={latestCard?.id === card.id}
                                tabIndex={-1}
                                data-headlessui-state=""
                              >
                                <div className="relative mb-2 w-full overflow-hidden rounded-sm pt-[56.25%]">
                                  <img
                                    className="pointer-events-none absolute inset-0 h-full w-full object-cover group-aria-disabled:opacity-[.45]"
                                    src={card.imgSrc}
                                    alt={card.altText}
                                  />
                                </div>
                                <div className="line-clamp-2 text-center text-sm/[18px] font-medium group-aria-disabled:opacity-[.45]">
                                  {card.title}
                                </div>
                              </div>
                              <div
                                className={`absolute inset-0 ${latestCard?.id === card.id
                                    ? "block"
                                    : "hidden"
                                  } cursor-pointer peer-aria-checked:block`}
                                id={`headlessui-radiogroup-option-${card.id}`}
                                role="radio"
                                aria-checked={latestCard?.id === card.id}
                                data-headlessui-state=""
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span
                id="headlessui-tabs-panel-:r1j:"
                role="tabpanel"
                tabIndex={-1}
                aria-labelledby="headlessui-tabs-tab-:r10:"
                style={{
                  position: "fixed",
                  top: 1,
                  left: 1,
                  width: 1,
                  height: 0,
                  padding: 0,
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  borderWidth: 0,
                }}
              />
            </div>
          </div>

          <div
            className="flex flex-col"
            id="headlessui-radiogroup-:rf:"
            role="radiogroup"
          >
            <div
              id="channel-section"
              className="mb-3 flex scroll-mt-36 items-center gap-2 text-lg/none font-bold text-text-title md:text-xl/none"
              role="none"
            >
              <div className="grid items-center" data-marker="true" role="none">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="col-start-1 row-start-1 text-2xl text-primary-red"
                  role="none"
                >
                  <path
                    d="M0 3C0 1.34315 1.34315 0 3 0H21C22.6569 0 24 1.34315 24 3V15.7574C24 16.553 23.6839 17.3161 23.1213 17.8787L17.8787 23.1213C17.3161 23.6839 16.553 24 15.7574 24H3C1.34315 24 0 22.6569 0 21V3Z"
                    fill="currentColor"
                    role="none"
                  />
                </svg>
                <div
                  className="col-start-1 row-start-1 text-center text-base/none text-white"
                  role="none"
                >
                  3
                </div>
              </div>

              <div role="none">
                {language === "en" ? "Payment Methods" : "طرق الدفع"}
              </div>
            </div>

            <div className="relative">
              <div className="relative scroll-mt-40 ">
                {selected && (
                  <div className="mb-4 text-xs/normal text-text-secondary">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block align-middle text-base/none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 18C9 11.9249 13.9249 7 20 7H60C66.0751 7 71 11.9249 71 18V62C71 68.0751 66.0751 73 60 73H20C13.9249 73 9 68.0751 9 62V18ZM20 13C17.2386 13 15 15.2386 15 18V62C15 64.7614 17.2386 67 20 67H60C62.7614 67 65 64.7614 65 62V18C65 15.2386 62.7614 13 60 13H20ZM23 31C23 29.3431 24.3431 28 26 28H54C55.6569 28 57 29.3431 57 31C57 32.6569 55.6569 34 54 34H26C24.3431 34 23 32.6569 23 31ZM26 46C24.3431 46 23 47.3431 23 49C23 50.6569 24.3431 52 26 52H42C43.6569 52 45 50.6569 45 49C45 47.3431 43.6569 46 42 46H26Z"
                        fill="currentColor"
                      />
                    </svg>{" "}
                  { language === 'ar' ? (<span
                      style={{
                        color: "#757575",
                      }}
                    >
                      {" "}
                      يمكن لمشتركي أوريدو في تونس شراء جواهر فري فاير عن طريق
                      إدخال رقم الهاتف بعد اختيار الفئة أدناه. سيتم إرسال رسالة
                      نصية قصيرة إليك لتأكيد الدفع.
                    </span>
                    ):(<span
                      style={{
                        color: "#757575",
                      }}
                    >
                      STC users can purchase Free Fire diamonds through phone balance. Fill your phone number and follow SMS instruction sent to your number. Purchase will deduct your balance
                    </span>)
                    }
                  </div>
                )}
                <div
                  className={`oddd mb-2 outline  outline-red-700 outline-2 -outline-offset-2 group peer relative flex h-full min-h-[80px] cursor-pointer items-start gap-2 rounded-md 
        ${selected === "channel-230199"
                      ? "bg-[rgb(255,244,244,calc(1*1))]"
                      : "bg-bg-unselected outline-box-border"
                    } 
        max-md:flex-col max-md:justify-center md:items-center md:gap-3 md:p-3`}
                  id="channel-230199 headlessui-radiogroup-option-:r32:"
                  role="radio"
                  aria-checked={selected === "channel-230199"}
                  tabIndex={0}
                  onClick={() => {
                    handleClick("channel-230199");
                    handleClickk();
                  }}
                >
                  <div
                    className="ooddd flex w-full flex-nowrap flex-col gap-x-0.5 gap-y-1 text-sm/none font-medium md:flex-col md:gap-y-2 md:text-base/none"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "0.7rem",
                    }}
                  >
                    <span className="items-center [text-decoration:inherit] inline-flex">
                      <span
                        //  style={{color:"#dd4245"}}
                        className="mb-1 items-center [text-decoration:inherit] inline-flex"
                      >
                        {/* {latestCard ? latestCard.price : ''} */}
                        {/* ooredoo */}
                        <img
                          style={{
                            marginTop: "50%",
                            width: "50px",
                            marginBottom: "50%",
                          }}
                          src="https://res.cloudinary.com/dglafz8eh/image/upload/v1721819524/p2wmlaxdf10uj1ygtfgl.png"
                          alt=""
                        />
                      </span>
                    </span>
                    {latestCard && (
                      <span
                        className="inline-flex items-center gap-0.5 text-sm/none text-bonus"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                        }}
                      >
                        {latestCard.price && <span>{latestCard.price}</span>}
                        {!latestCard.isSecondSession &&
                          latestCard.reward !== undefined && (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "0.3rem",
                              }}
                            >
                              <span style={{ color: "#f4841a" }}>
                                {language === "en"
                                  ? ` + Bonus ${latestCard.reward}`
                                  : ` + مكافأة ${latestCard.reward}`}
                              </span>
                              <img
                                className="h-3 w-3 object-contain"
                                src="https://cdn-gop.garenanow.com/gop/app/0000/100/067/point.png"
                                alt="Bonus"
                              />
                            </div>
                          )}
                      </span>
                    )}
                  </div>

                  <div className="absolute end-[3px] top-[3px] overflow-hidden rounded-[3px]">
                    <div className="flex text-2xs/none font-bold uppercase">
                      <div
                        style={{
                          backgroundColor: "rgb(230 37 45 / calc(1 * 1))",
                          fontWeight: "500",
                          fontSize: "12px",
                        }}
                        className="h-4 flex items-center gap-1 bg-bg-tag-promo p-0.5 pe-1 text-white"
                      >
                        <img
                          className="h-3 w-3 rounded-sm bg-white object-contain p-0.5"
                          src="https://cdn-gop.garenanow.com/gop/app/0000/100/067/point.png"
                          alt="Special Offer"
                        />
                        {language === "en" ? "PROMO" : "عرض خاص"}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-0 hidden cursor-pointer peer-aria-checked:block"
                  id="headlessui-radiogroup-option-:r33:"
                  role="radio"
                  aria-checked={selected === "channel-230199"}
                />
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Topupamountcard;

const Offers = ({ name, heading, bonus }) => {
  return (
    <div className=" w-full flex items-center justify-between">
      <p
        className=" text-sm font-[500] font-en"
        style={{
          fontSize: "14px",
        }}
      >
        {name}
      </p>
      <div className=" flex items-center justify-center gap-2">
        <div className=" flex  items-center justify-end flex-col">
          <p
            className=" text-lg font-medium  font-en"
            style={{
              fontSize: "16px",
            }}
          >
            {heading}
          </p>
          <p
            className=" text-sm font-medium text-[#ff8f00]"
            style={{
              fontSize: "14px",
              left: "0px",
            }}
          >
            {bonus}
          </p>
        </div>
        <Image src="/assets/diamond.png" height={30} width={30} alt="diamond" />
      </div>
    </div>
  );
};



const DeltaForceOffers = ({ name, heading, bonus }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center justify-center gap-1">
        <p className="text-sm font-[500] font-en">{name}</p>
      </div>
      <div className="flex items-center justify-center gap-2 flex-col">
        <div className="flex items-center gap-2">
          <p className="text-lg font-medium font-en">{heading}</p>
          <img
            src="https://cdn-gop.garenanow.com/gop/app/0000/100/151/point.png"
            height={30}
            width={30}
            alt="Delta Coin"
          />
        </div>
        {bonus && (
          <p className="text-sm font-medium text-[#ff8f00]" dir="rtl">
            {bonus}
          </p>
        )}
      </div>
    </div>
  );
};
