'use client'
import { changeLan } from "@/redux/slices/settingsSlice";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {


  const dispatch = useDispatch();
  const language = useSelector((state) => state.lan.language);

  const handleChangeLanguage = (lan) => {
    localStorage.setItem('selectedLanguage', lan);
    dispatch(changeLan(lan));
    console.log(lan);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      dispatch(changeLan(savedLanguage));
    }
  }, [dispatch]);



    const game = useSelector((state) => state.game.value)

    
    return (
      <div className="flex h-full flex-col" style={{paddingTop:"56px"}}>
      <div className="bg-[#151515]">
        
        <div className="group mx-auto w-full max-w-[1366px] md:py-2.5 lg:py-5">
          <div className="relative flex justify-center pt-[43.478%] md:pt-[19.106%]">
            <div className="scrollbar-none absolute inset-0 flex overflow-auto justify-center">
              <a
                className="block h-full w-full shrink-0 snap-center md:w-[50.577%] md:rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2"
                target="_blank"
                data-index={0}
              >
              {
      game === 'freefire' && <img
      className="pointer-events-none h-full w-full object-contain transition-all md:rounded-xl"

      
      src= {language === 'en' ? "https://contentgarena-a.akamaihd.net/GOP/newshop_banners/Shop2gameMainBanner_EN_IQ_PC.jpg?v=1699519630" : "https://contentgarena-a.akamaihd.net/GOP/newshop_banners/Shop2gameMainBanner_AR_EG_PC_20210511.jpg?v=1699518934"} 
    />
  }



  {
    game === 'deltaforce' && <img
      className="pointer-events-none h-full w-full object-contain transition-all md:rounded-xl"
      src="https://webid.cdn.garenanow.com/gstaticid/BD/mena/241213_dfmena/900x340.jpg"
      alt="Delta Force banner"
    />
  }
  
              </a>
            </div>
            <div className="pointer-events-none absolute inset-y-0 hidden w-[21.783%] items-center from-[#151515] md:flex start-0 justify-end bg-gradient-to-r rtl:bg-gradient-to-l"></div>
            <div className="pointer-events-none absolute inset-y-0 hidden w-[21.783%] items-center from-[#151515] md:flex end-0 justify-start bg-gradient-to-l rtl:bg-gradient-to-r"></div>
          </div>
        </div>
      </div>
      <div dir="rtl" className="bg-[#EFEFEF] dark:bg-[#333356]">
        <div
          className="relative w-full"
          id="headlessui-radiogroup-:r5:"
          role="radiogroup"
        >
          <div
            className="absolute inset-0 bg-[#EFEFEF] rtl:-scale-x-100 dark:bg-[linear-gradient(180deg,#16162B_0%,#242443_76.1%,#333356_100%)]"
            role="none"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat dark:opacity-[0.06] md:bg-contain"
              role="none"
              style={{
                backgroundImage:
                  'url("https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/pattern-game-selection-59889447.png")'
              }}
            ></div>
          </div>

{/* style={{
  display: language === 'en' ? 'none' : '' }} */}
          <div 
            className="pointer-events-none absolute inset-0 flex rtl:-scale-x-100 rtl:flex-row-reverse"
            role="none"
          >
            <div
              className="h-[7px] flex-1 bg-[#F2B13E] dark:bg-[#2D337D]/50"
              role="none"
            />
            <svg
              width={390}
              height={27}
              viewBox="0 0 390 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[27px] dark:hidden md:hidden"
              preserveAspectRatio="xMidYMin meet"
              role="none"
            >
              <path
                d="M390 0H0V7H285L301 27H390V0Z"
                fill="url(#paint0_linear_2330_34259)"
                role="none"
              />
              <mask
                id="mask0_2330_34259"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={390}
                height={27}
                role="none"
                style={{ maskType: "alpha" }}
              >
                <path
                  d="M390 0H0V7H285L301 27H390V0Z"
                  fill="url(#paint1_linear_2330_34259)"
                  role="none"
                />
              </mask>
              <g mask="url(#mask0_2330_34259)" role="none">
                <rect
                  x="-15.0254"
                  y="72.4863"
                  width="110.997"
                  height={3}
                  transform="rotate(-45 -15.0254 72.4863)"
                  fill="url(#paint2_linear_2330_34259)"
                  role="none"
                />
                <rect
                  opacity="0.5"
                  x="232.053"
                  y="58.1582"
                  width="110.997"
                  height="25.9753"
                  transform="rotate(-47 232.053 58.1582)"
                  fill="url(#paint3_linear_2330_34259)"
                  role="none"
                />
                <rect
                  opacity="0.3"
                  x="298.977"
                  y="69.4863"
                  width="110.997"
                  height="6.3044"
                  transform="rotate(-45 298.977 69.4863)"
                  fill="url(#paint4_linear_2330_34259)"
                  role="none"
                />
                <path
                  opacity="0.5"
                  d="M192.334 72.0098L268.034 -9.16811L278.223 -7.40131L202.523 73.7766L192.334 72.0098Z"
                  fill="url(#paint5_linear_2330_34259)"
                  role="none"
                />
                <rect
                  opacity="0.15"
                  x={-21}
                  y="123.275"
                  width="179.995"
                  height="4.38032"
                  transform="rotate(-45 -21 123.275)"
                  fill="url(#paint6_linear_2330_34259)"
                  role="none"
                />
              </g>
              <defs role="none">
                <linearGradient
                  id="paint0_linear_2330_34259"
                  x1={-9}
                  y1="7.61906"
                  x2="387.828"
                  y2="41.0361"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#F2B13E" role="none" />
                  <stop
                    offset={1}
                    stopColor="#FDD373"
                    stopOpacity="0.63"
                    role="none"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2330_34259"
                  x1={27}
                  y1="15.2381"
                  x2="388.472"
                  y2="38.7377"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#F3A00C" role="none" />
                  <stop
                    offset={1}
                    stopColor="#FFBB21"
                    stopOpacity="0.76"
                    role="none"
                  />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2330_34259"
                  x1="9.0067"
                  y1="75.3242"
                  x2="64.1695"
                  y2="74.4301"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#DB910B" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="#F09F0B" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_2330_34259"
                  x1="295.701"
                  y1="78.6918"
                  x2="318.228"
                  y2="69.5067"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#DE9611" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="#F79F00" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_2330_34259"
                  x1="323.009"
                  y1="75.4501"
                  x2="378.183"
                  y2="75.0245"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#DE9611" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="#F79F00" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_2330_34259"
                  x1="218.794"
                  y1="56.0898"
                  x2="255.761"
                  y2="15.1365"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#DE9611" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="#F79F00" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_2330_34259"
                  x1="17.9709"
                  y1="127.419"
                  x2="83.65"
                  y2="126.721"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#F79F00" role="none" />
                  <stop
                    offset={1}
                    stopColor="#DE9611"
                    stopOpacity={0}
                    role="none"
                  />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width={390}
              height={27}
              viewBox="0 0 390 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden h-[27px] dark:block dark:md:hidden"
              preserveAspectRatio="xMidYMin meet"
              role="none"
            >
              <g opacity="0.5" role="none">
                <path
                  d="M390 0H0V7H285L301 27H390V0Z"
                  fill="url(#paint0_linear_5721_45163)"
                  role="none"
                />
                <mask
                  id="mask0_5721_45163"
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={390}
                  height={27}
                  role="none"
                  style={{ maskType: "alpha" }}
                >
                  <path
                    d="M390 0H0V7H285L301 27H390V0Z"
                    fill="url(#paint1_linear_5721_45163)"
                    role="none"
                  />
                </mask>
                <g mask="url(#mask0_5721_45163)" role="none">
                  <rect
                    opacity="0.1"
                    x="330.975"
                    y="69.4863"
                    width="110.997"
                    height={3}
                    transform="rotate(-45 330.975 69.4863)"
                    fill="url(#paint2_linear_5721_45163)"
                    role="none"
                  />
                  <rect
                    opacity="0.1"
                    x="-15.0254"
                    y="72.4863"
                    width="110.997"
                    height={3}
                    transform="rotate(-45 -15.0254 72.4863)"
                    fill="url(#paint3_linear_5721_45163)"
                    role="none"
                  />
                  <rect
                    opacity="0.1"
                    x="232.053"
                    y="58.1582"
                    width="110.997"
                    height="25.9753"
                    transform="rotate(-47 232.053 58.1582)"
                    fill="url(#paint4_linear_5721_45163)"
                    role="none"
                  />
                  <path
                    opacity="0.1"
                    d="M192.334 72.0098L268.034 -9.16811L278.223 -7.40131L202.523 73.7766L192.334 72.0098Z"
                    fill="url(#paint5_linear_5721_45163)"
                    role="none"
                  />
                  <rect
                    opacity="0.15"
                    x={-21}
                    y="123.275"
                    width="179.995"
                    height="4.38032"
                    transform="rotate(-45 -21 123.275)"
                    fill="url(#paint6_linear_5721_45163)"
                    role="none"
                  />
                </g>
              </g>
              <defs role="none">
                <linearGradient
                  id="paint0_linear_5721_45163"
                  x1={-9}
                  y1="7.61907"
                  x2="388.361"
                  y2="32.8327"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#2D337D" role="none" />
                  <stop offset={1} stopColor="#3C3E65" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_5721_45163"
                  x1={-9}
                  y1="7.61907"
                  x2="388.361"
                  y2="32.8327"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#2D337D" role="none" />
                  <stop offset={1} stopColor="#3C3E65" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_5721_45163"
                  x1="355.007"
                  y1="72.3242"
                  x2="410.169"
                  y2="71.4301"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="white" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="white" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_5721_45163"
                  x1="9.0067"
                  y1="75.3242"
                  x2="64.1695"
                  y2="74.4301"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="white" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="white" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_5721_45163"
                  x1="295.701"
                  y1="78.6918"
                  x2="318.228"
                  y2="69.5067"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="white" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="white" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_5721_45163"
                  x1="218.794"
                  y1="56.0898"
                  x2="255.761"
                  y2="15.1365"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="white" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="white" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_5721_45163"
                  x1="17.9709"
                  y1="127.419"
                  x2="83.65"
                  y2="126.721"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#F79F00" role="none" />
                  <stop
                    offset={1}
                    stopColor="#DE9611"
                    stopOpacity={0}
                    role="none"
                  />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width={1024}
              height={27}
              viewBox="0 0 1024 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden h-[27px] md:block dark:md:hidden"
              preserveAspectRatio="xMidYMin meet"
              role="none"
            >
              <path
                d="M1024 0H0V7H516L532 27H1024V0Z"
                fill="url(#paint0_linear_2339_34301)"
                role="none"
              />
              <mask
                id="mask0_2339_34301"
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={1024}
                height={27}
                role="none"
                style={{ maskType: "alpha" }}
              >
                <path
                  d="M1024 0H0V7H516L532 27H1024V0Z"
                  fill="url(#paint1_linear_2339_34301)"
                  role="none"
                />
              </mask>
              <g mask="url(#mask0_2339_34301)" role="none">
                <rect
                  x="215.977"
                  y="72.4844"
                  width="110.997"
                  height={3}
                  transform="rotate(-45 215.977 72.4844)"
                  fill="url(#paint2_linear_2339_34301)"
                  role="none"
                />
                <rect
                  opacity="0.5"
                  x="463.055"
                  y="58.1562"
                  width="110.997"
                  height="25.9753"
                  transform="rotate(-47 463.055 58.1562)"
                  fill="url(#paint3_linear_2339_34301)"
                  role="none"
                />
                <rect
                  opacity="0.5"
                  x="561.977"
                  y="69.4844"
                  width="110.997"
                  height={3}
                  transform="rotate(-45 561.977 69.4844)"
                  fill="url(#paint4_linear_2339_34301)"
                  role="none"
                />
                <path
                  opacity="0.5"
                  d="M423.336 72.0078L499.036 -9.17006L509.225 -7.40327L433.525 73.7746L423.336 72.0078Z"
                  fill="url(#paint5_linear_2339_34301)"
                  role="none"
                />
                <rect
                  opacity="0.15"
                  x={210}
                  y="123.273"
                  width="179.995"
                  height="4.38032"
                  transform="rotate(-45 210 123.273)"
                  fill="url(#paint6_linear_2339_34301)"
                  role="none"
                />
              </g>
              <defs role="none">
                <linearGradient
                  id="paint0_linear_2339_34301"
                  x1={222}
                  y1="7.61902"
                  x2="618.827"
                  y2="41.0361"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#F2B13E" role="none" />
                  <stop
                    offset={1}
                    stopColor="#FDD373"
                    stopOpacity="0.63"
                    role="none"
                  />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_2339_34301"
                  x1="258.001"
                  y1="15.2381"
                  x2="619.473"
                  y2="38.7377"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#F3A00C" role="none" />
                  <stop
                    offset={1}
                    stopColor="#FFBB21"
                    stopOpacity="0.76"
                    role="none"
                  />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_2339_34301"
                  x1="240.009"
                  y1="75.3223"
                  x2="295.171"
                  y2="74.4282"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#DB910B" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="#F09F0B" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_2339_34301"
                  x1="526.703"
                  y1="78.6898"
                  x2="549.23"
                  y2="69.5047"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#DE9611" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="#F79F00" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_2339_34301"
                  x1="586.009"
                  y1="72.3223"
                  x2="641.171"
                  y2="71.4282"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#DE9611" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="#F79F00" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_2339_34301"
                  x1="449.796"
                  y1="56.0878"
                  x2="486.763"
                  y2="15.1345"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#DE9611" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="#F79F00" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_2339_34301"
                  x1="248.971"
                  y1="127.417"
                  x2="314.65"
                  y2="126.719"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#F79F00" role="none" />
                  <stop
                    offset={1}
                    stopColor="#DE9611"
                    stopOpacity={0}
                    role="none"
                  />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width={1024}
              height={27}
              viewBox="0 0 1024 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden h-[27px] dark:md:block"
              preserveAspectRatio="xMidYMin meet"
              role="none"
            >
              <g opacity="0.5" role="none">
                <path
                  d="M1024 0H0V7H516L532 27H1024V0Z"
                  fill="url(#paint0_linear_5721_48876)"
                  role="none"
                />
                <mask
                  id="mask0_5721_48876"
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={1024}
                  height={27}
                  role="none"
                  style={{ maskType: "alpha" }}
                >
                  <path
                    d="M1024 0H0V7H516L532 27H1024V0Z"
                    fill="url(#paint1_linear_5721_48876)"
                    role="none"
                  />
                </mask>
                <g mask="url(#mask0_5721_48876)" role="none">
                  <rect
                    opacity="0.1"
                    x="215.977"
                    y="72.4844"
                    width="110.997"
                    height={3}
                    transform="rotate(-45 215.977 72.4844)"
                    fill="url(#paint2_linear_5721_48876)"
                    role="none"
                  />
                  <rect
                    opacity="0.1"
                    x="463.055"
                    y="58.1562"
                    width="110.997"
                    height="25.9753"
                    transform="rotate(-47 463.055 58.1562)"
                    fill="url(#paint3_linear_5721_48876)"
                    role="none"
                  />
                  <rect
                    opacity="0.1"
                    x="561.977"
                    y="69.4844"
                    width="110.997"
                    height={3}
                    transform="rotate(-45 561.977 69.4844)"
                    fill="url(#paint4_linear_5721_48876)"
                    role="none"
                  />
                  <path
                    opacity="0.1"
                    d="M423.336 72.0078L499.036 -9.17006L509.225 -7.40327L433.525 73.7746L423.336 72.0078Z"
                    fill="url(#paint5_linear_5721_48876)"
                    role="none"
                  />
                  <rect
                    opacity="0.15"
                    x={210}
                    y="123.273"
                    width="179.995"
                    height="4.38032"
                    transform="rotate(-45 210 123.273)"
                    fill="url(#paint6_linear_5721_48876)"
                    role="none"
                  />
                </g>
              </g>
              <defs role="none">
                <linearGradient
                  id="paint0_linear_5721_48876"
                  x1="359.075"
                  y1="7.61896"
                  x2="657.474"
                  y2="21.8127"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#2D337D" role="none" />
                  <stop offset={1} stopColor="#3C3E65" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_5721_48876"
                  x1="258.001"
                  y1="15.2381"
                  x2="619.473"
                  y2="38.7377"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#F3A00C" role="none" />
                  <stop
                    offset={1}
                    stopColor="#FFBB21"
                    stopOpacity="0.76"
                    role="none"
                  />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_5721_48876"
                  x1="240.009"
                  y1="75.3223"
                  x2="295.171"
                  y2="74.4282"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="white" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="white" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_5721_48876"
                  x1="526.703"
                  y1="78.6898"
                  x2="549.23"
                  y2="69.5047"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="white" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="white" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_5721_48876"
                  x1="586.009"
                  y1="72.3223"
                  x2="641.171"
                  y2="71.4282"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="white" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="white" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_5721_48876"
                  x1="449.796"
                  y1="56.0878"
                  x2="486.763"
                  y2="15.1345"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="white" stopOpacity={0} role="none" />
                  <stop offset={1} stopColor="white" role="none" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_5721_48876"
                  x1="248.971"
                  y1="127.417"
                  x2="314.65"
                  y2="126.719"
                  gradientUnits="userSpaceOnUse"
                  role="none"
                >
                  <stop stopColor="#F79F00" role="none" />
                  <stop
                    offset={1}
                    stopColor="#DE9611"
                    stopOpacity={0}
                    role="none"
                  />
                </linearGradient>
              </defs>
            </svg>
            <div
              className="h-[27px] flex-1 bg-[#FDD373]/[0.63] dark:bg-[#3C3E65]/50"
              role="none"
            />
          </div>
        </div>
        
      </div>
    </div>
    

    );
}

export default Hero;
