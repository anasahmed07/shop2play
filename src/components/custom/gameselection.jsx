"use client";
import { useSelector, useDispatch } from "react-redux";
import { toggleToFF, toggleToDF } from "@/redux/slices/gameslice";
import Image from "next/image";
import { useEffect } from "react";

const Gameselection = () => {
  const game = useSelector((state) => state.game.value);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.lan.language);

  useEffect(() => {
    const applyDarkModeClass = (isDarkMode) => {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    };

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    applyDarkModeClass(darkModeMediaQuery.matches);

    const handleChange = (e) => applyDarkModeClass(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <div
      id="background-div"
      style={{
        backgroundImage: 'url("/assets/paattern-game-selection-59889447.png")',
        direction: language === "ar" ? "ltr" : "rtl",
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundColor: 'rgba(0, 0, 0, 0.07)'
      }}
      className="imageee bg-[#000] w-full h-[200px] flex items-end flex-col justify-center pt-3"
    >
      <div className="mx-auto flex flex-col w-full max-w-5xl items-end justify-between px-3 md:px-8">
        <p className="font-ar text-2xl font-bold mb-5" style={{ fontSize:"20px" }}>
          {language === "en" ? "Game Selection" : "اختيار اللعبة"}
        </p>
        <div className="flex items-center justify-end gap-8">
          {user.loggedIn ? (
            <>
              {user.game === "deltaforce" ? (
                <div
                  onClick={() => dispatch(toggleToDF())}
                  className="flex items-center gap-2 justify-center flex-col"
                >
                  <Image
                    className={`${
                      game === "deltaforce" && "border-4 rounded-[20px] border-[#d81a0d]"
                    } hover:cursor-pointer rounded-[20px]`}
                    src="https://cdn-gop.garenanow.com/gop/app/0000/100/151/icon.png"
                    alt="selector"
                    height={80}
                    width={80}
                  />
                  <p
                    className={
                      game === "deltaforce"
                        ? "font-custom font-semibold text-[#d81a0d]"
                        : "font-custom font-[500] text-[15px]"
                    }
                    style={{
                      fontSize:"14px"
                    }}
                  >
                    Delta Force
                  </p>
                </div>
              ) : (
                <div
                  onClick={() => dispatch(toggleToFF())}
                  className="flex items-center gap-2 justify-center flex-col"
                >
                  <Image
                    className={`${
                      game === "freefire" && "border-4 rounded-[20px] border-[#d81a0d]"
                    } hover:cursor-pointer`}
                    src="https://cdn-gop.garenanow.com/gop/app/0000/100/067/icon.png"
                    alt="selector"
                    height={80}
                    width={80}
                  />
                  <p
                    className={
                      game === "freefire"
                        ? "font-custom font-semibold text-[#d81a0d]"
                        : "font-custom font-[500] text-[15px]"
                    }
                    style={{
                      fontSize:"14px"
                    }}
                  >
                    Free Fire
                  </p>
                </div>
              )}
            </>
          ) : (
            <>
              <div
                onClick={() => dispatch(toggleToDF())}
                className="flex items-center gap-2 justify-center flex-col relative"
              >
                <Image
                  className={`${
                    game === "deltaforce" && "border-4 rounded-[20px] border-[#d81a0d]"
                  } hover:cursor-pointer rounded-[20px]`}
                  src="https://cdn-gop.garenanow.com/gop/app/0000/100/151/icon.png"
                  alt="selector"
                  height={80}
                  width={80}
                />
                {game === "deltaforce" &&              
                  <div className="bordderr">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 13 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full origin-top-left scale-[45%] text-white rtl:origin-top-right md:scale-[45.714%]"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.683616 3.34767C0.966833 3.06852 1.41058 3.02521 1.74384 3.24419L4.84892 5.28428L11.2468 0.49236C11.5616 0.256548 12.0047 0.286191 12.2843 0.561764C12.5639 0.837337 12.594 1.27411 12.3548 1.58439L6.77224 8.82375C6.70207 8.92749 6.62168 9.02414 6.53224 9.1123C5.82037 9.81394 4.68878 9.84975 3.93408 9.21971L3.77319 9.07952C3.75044 9.05904 3.72815 9.03804 3.70636 9.01656C3.5095 8.82253 3.36114 8.59882 3.26127 8.36003L0.578633 4.39267C0.35646 4.06419 0.4004 3.62682 0.683616 3.34767Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                }
                <p
                  className={
                    game === "deltaforce"
                      ? "font-custom font-semibold text-[#d81a0d]"
                      : "font-custom font-[500] text-[15px]"
                  }
                  style={{
                    fontSize:"14px"
                  }}
                >
                  Delta Force
                </p>
              </div>

              <div
                onClick={() => dispatch(toggleToFF())}
                className="flex items-center gap-2 justify-center flex-col relative"
              >
                <Image
                  className={`${
                    game === "freefire" && "border-4 rounded-[20px] border-[#d81a0d]"
                  } hover:cursor-pointer`}
                  src="https://cdn-gop.garenanow.com/gop/app/0000/100/067/icon.png"
                  alt="selector"
                  height={80}
                  width={80}
                />
                {game === "freefire" &&              
                  <div className="bordderr">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 13 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full origin-top-left scale-[45%] text-white rtl:origin-top-right md:scale-[45.714%]"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.683616 3.34767C0.966833 3.06852 1.41058 3.02521 1.74384 3.24419L4.84892 5.28428L11.2468 0.49236C11.5616 0.256548 12.0047 0.286191 12.2843 0.561764C12.5639 0.837337 12.594 1.27411 12.3548 1.58439L6.77224 8.82375C6.70207 8.92749 6.62168 9.02414 6.53224 9.1123C5.82037 9.81394 4.68878 9.84975 3.93408 9.21971L3.77319 9.07952C3.75044 9.05904 3.72815 9.03804 3.70636 9.01656C3.5095 8.82253 3.36114 8.59882 3.26127 8.36003L0.578633 4.39267C0.35646 4.06419 0.4004 3.62682 0.683616 3.34767Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                }
                <p
                  className={
                    game === "freefire"
                      ? "font-custom font-semibold text-[#d81a0d]"
                      : "font-custom font-[500] text-[15px]"
                  }
                  style={{
                    fontSize:"14px"
                  }}
                >
                  Free Fire
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gameselection;