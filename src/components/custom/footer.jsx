import React, { useEffect } from 'react';
import Link from 'next/link';
import { changeLan } from "@/redux/slices/settingsSlice";
import { useDispatch, useSelector } from "react-redux";



const Footer = () => {

  const dispatch = useDispatch();
  const language = useSelector((state) => state.lan.language);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      dispatch(changeLan(savedLanguage));
    }
  }, [dispatch]);

    return (
      <footer dir={language ==='en' ? 'ltr' : 'rtl'}>
      <div className="mx-auto w-full max-w-5xl">
        <hr className="hidden border-t border-t-short-line/50 dark:border-t-line/50 md:block" />
        <div className="flex flex-col items-center gap-3 p-4 text-center text-xs text-text-secondary max-md:pb-5 md:items-start">
          <div className="flex flex-col items-center gap-3 leading-none md:w-full md:flex-row md:justify-between">
            <div>
              
              {language ==='en' ? "© Garena Online. All rights reserved." : "© Garena Online. الحقوق كاملة." }
              </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              <a className="transition-opacity hover:opacity-70" href="/faq">
                FAQ
              </a>
              <div className="h-2 w-px bg-short-line" />
              <a
                className="transition-opacity hover:opacity-70"
                href="http://content.garena.com/legal/tos/tos_ar.html"
              >
                  {language ==='en' ? "Terms and Conditions" : "الشروط والأحكام" }
                
              </a>
              <div className="h-2 w-px bg-short-line" />
              <a
                className="transition-opacity hover:opacity-70"
                href="http://content.garena.com/legal/pp/pp_ar.html"
              >
                  {language ==='en' ? "Privacy Policy" : "سياسة الخصوصية" }
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
    );
}

export default Footer;
