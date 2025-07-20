import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: `
            !(function (a, b, c, d, e, f) {
              a.ddjskey = e;
              a.ddoptions = f || null;
              var m = b.createElement(c),
                n = b.getElementsByTagName(c)[0];
              (m.async = 1), (m.src = d), n.parentNode.insertBefore(m, n);
            })(
              window,
              document,
              'script',
              'https://dd.garena.com/tags.js',
              'AE3F04AD3F0D3A462481A337485081',
              {
                ajaxListenerPath: false,
                ajaxListenerPathExclusion: [
                  'https://www.google-analytics.com',
                  'api-js.datadome.co',
                  'dd.garena.com',
                ],
                exposeCaptchaFunction: true,
                disableAutoRefreshOnCaptchaPassed: true,
                enableTagEvents: true,
                endpoint: 'https://dd.garena.com/js/',
              },
            );
          ` }} />
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/x-icon" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/static/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100..900&family=Noto+Sans+Arabic:wght@100..900&display=swap"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
          <script dangerouslySetInnerHTML={{ __html: `
            window.__CLIENT_IP__ = "41.235.218.246"; 
            window.__SERVICE_VERSION__ = "mshop_frontend_20240716"; 
            window.__SPLIT_GROUP__ = "treatment2"; 
            window.__SOURCE__ = "pc"; 
            window.__COUNTRY__ = "EG";
          ` }} />
          <link rel="modulepreload" crossOrigin="" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/adyen-index-1ce50738.js" />
          <link rel="modulepreload" crossOrigin="" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/react-9a80e49f.js" />
          <link rel="modulepreload" crossOrigin="" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/images-5666f7d6.js" />
          <link rel="stylesheet" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/style-fd247e95.css" />
          <script type="module" dangerouslySetInnerHTML={{ __html: `
            import.meta.url; 
            import("_").catch(() => 1); 
            async function* g() { }; 
            if (location.protocol != "file:") { window.__vite_is_modern_browser = true }
          ` }} />
          <script type="module" dangerouslySetInnerHTML={{ __html: `
            !function () { 
              if (window.__vite_is_modern_browser) return; 
              console.warn("vite: loading legacy chunks, syntax error above and the same error below should be ignored"); 
              var e = document.getElementById("vite-legacy-polyfill"), 
                  n = document.createElement("script"); 
              n.src = e.src, n.onload = function () { 
                System.import(document.getElementById('vite-legacy-entry').getAttribute('data-src')) 
              }, 
              document.body.appendChild(n) 
            }();
          ` }} />
          <style>
            {`
      .b200794__DaXa7.b200794__Kt1BS {
        margin: 8px 0;
        margin-bottom: 16px
      }
  
      .b200794__3iSY_.b200794__2hYep .b200794__33pC0 {
        display: flex;
        flex-wrap: wrap;
        gap: 8px
      }
  
      .b200794__3iSY_.b200794__2hYep .b200794__33pC0 .b200794__3xV21 {
        height: 26px;
        padding: 0px 10px;
        font-weight: 600
      }
  
      .b200794__3iSY_.b200794__2hYep .b200794__1XZT4 {
        font-size: 10px;
        display: inline-flex;
        align-items: center;
        color: #bfbfbf;
        white-space: nowrap;
        cursor: pointer;
        text-decoration: underline
      }
  
      .b200794__3iSY_.b200794__2hYep .b200794__1XZT4 .b200794__2KkbW {
        width: 16px;
        height: 16px;
        background-size: contain;
        margin-left: 5px;
        cursor: pointer
      }
  
      .b200794__3iSY_.b200794__2hYep .b200794__1XZT4:hover {
        color: #2f9cc3
      }
  
      .b200794__3iSY_.b200794__2hYep .b200794__3DW-- {
        width: 16px;
        height: 16px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain
      }
  
      .b200794__2ByTX.b200794__2q_66 {
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 36px;
        border: solid 1px #e0e1e2;
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
        padding: 6px 16px;
        color: rgba(0, 0, 0, .6);
        background-color: #e0e1e2
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-size=small] {
        height: 28px
      }
  
      .b200794__2ByTX.b200794__2q_66 * {
        cursor: pointer;
        user-select: none
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-btn-loading=true],
      .b200794__2ByTX.b200794__2q_66[data-ah-btn-disabled=true] {
        pointer-events: none
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-btn-loading=true] *,
      .b200794__2ByTX.b200794__2q_66[data-ah-btn-disabled=true] * {
        pointer-events: none
      }
  
      .b200794__2ByTX.b200794__2q_66:not([data-ah-color=primary]):not([data-ah-color=secondary]) {
        color: rgba(0, 0, 0, .8)
      }
  
      .b200794__2ByTX.b200794__2q_66:not([data-ah-color=primary]):not([data-ah-color=secondary]) [data-ah-spin-color] {
        border-color: #f3f3f3 #d6d6d6 #0076f1 !important
      }
  
      .b200794__2ByTX.b200794__2q_66:not([data-ah-color=primary]):not([data-ah-color=secondary]):hover {
        border-color: #cacbcd;
        background-color: #cacbcd
      }
  
      .b200794__2ByTX.b200794__2q_66:not([data-ah-color=primary]):not([data-ah-color=secondary]):active {
        border-color: #babbbc;
        background-color: #babbbc
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=primary] {
        border: solid 1px #db2828;
        color: #db2828;
        background-color: rgba(0, 0, 0, 0)
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=primary] [data-ah-spin-color=primary] {
        border-color: #f3f3f3 #f94f4f #db2828 !important
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=primary] svg path {
        fill: #db2828
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=primary]:hover {
        border-color: #d01919;
        color: #d01919
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=primary]:hover svg path {
        fill: #d01919
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=primary]:active {
        border-color: #b21e1e;
        color: #b21e1e
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=primary]:active svg path {
        fill: #b21e1e
      }
  
      .b200794__2q_66[data-ah-color=primary][data-ah-variant=contained] {
        border: solid 1px #db2828;
        background-color: #db2828;
        color: #fff
      }
  
      .b200794__2q_66[data-ah-color=primary][data-ah-variant=contained] svg path {
        fill: #fff
      }
  
      .b200794__2q_66[data-ah-color=primary][data-ah-variant=contained]:hover {
        border-color: #d01919;
        background-color: #d01919;
        color: #fff
      }
  
      .b200794__2q_66[data-ah-color=primary][data-ah-variant=contained]:hover svg path {
        fill: #fff
      }
  
      .b200794__2q_66[data-ah-color=primary][data-ah-variant=contained]:active {
        border-color: #b21e1e;
        background-color: #b21e1e;
        color: #fff
      }
  
      .b200794__2q_66[data-ah-color=primary][data-ah-variant=contained]:active svg path {
        fill: #fff
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=secondary] {
        border: solid 1px #2c65f1;
        color: #2c65f1;
        background-color: rgba(0, 0, 0, 0)
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=secondary] svg path {
        fill: #2c65f1
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=secondary]:hover {
        border-color: #2154d2;
        color: #2154d2
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=secondary]:hover svg path {
        fill: #2154d2
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=secondary]:active {
        border-color: #1d4bbd;
        color: #1d4bbd
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=secondary]:active svg path {
        fill: #1d4bbd
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=secondary][data-ah-variant=contained] {
        border: solid 1px #2c65f1;
        background-color: #2c65f1;
        color: #fff
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=secondary][data-ah-variant=contained] svg path {
        fill: #fff
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=secondary][data-ah-variant=contained]:hover {
        border-color: #2154d2;
        background-color: #2154d2;
        color: #fff
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=secondary][data-ah-variant=contained]:hover svg path {
        fill: #fff
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=secondary][data-ah-variant=contained]:active {
        border-color: #1d4bbd;
        background-color: #1d4bbd;
        color: #fff
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=secondary][data-ah-variant=contained]:active svg path {
        fill: #fff
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=success] {
        border: solid 1px #1fbb60;
        color: #1fbb60;
        background-color: rgba(0, 0, 0, 0)
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=success] svg path {
        fill: #1fbb60
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=success]:hover {
        border-color: #1aaf58;
        color: #1aaf58
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=success]:hover svg path {
        fill: #1aaf58
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=success]:active {
        border-color: #159e4e;
        color: #159e4e
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=success]:active svg path {
        fill: #159e4e
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=success][data-ah-variant=contained] {
        border: solid 1px #1fbb60;
        background-color: #1fbb60;
        color: #fff
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=success][data-ah-variant=contained] svg path {
        fill: #fff
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=success][data-ah-variant=contained]:hover {
        border-color: #1aaf58;
        background-color: #1aaf58;
        color: #fff
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=success][data-ah-variant=contained]:hover svg path {
        fill: #fff
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=success][data-ah-variant=contained]:active {
        border-color: #159e4e;
        background-color: #159e4e;
        color: #fff
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=success][data-ah-variant=contained]:active svg path {
        fill: #fff
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=warning][data-ah-variant=contained] {
        border: solid 1px #fdcc0d;
        background-color: #fdcc0d;
        color: #7d6506
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=warning][data-ah-variant=contained] svg path {
        fill: #7d6506
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=warning][data-ah-variant=contained]:hover {
        border-color: #ffd100;
        background-color: #ffd100;
        color: #7d6506
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=warning][data-ah-variant=contained]:hover svg path {
        fill: #7d6506
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=warning][data-ah-variant=contained]:active {
        border-color: #ecbe0b;
        background-color: #ecbe0b;
        color: #7d6506
      }
  
      .b200794__2ByTX.b200794__2q_66[data-ah-color=warning][data-ah-variant=contained]:active svg path {
        fill: #7d6506
      }
  
      .b200794__33Q8c {
        display: inline-flex !important
      }
  
      .b200794__33Q8c .b200794__2WZ5J {
        display: inline-flex;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        -webkit-animation: b200794__1FlgJ .8s linear infinite;
        animation: b200794__1FlgJ .8s linear infinite
      }
  
      @-webkit-keyframes b200794__1FlgJ {
        0% {
          -webkit-transform: rotate(0deg)
        }
  
        100% {
          -webkit-transform: rotate(360deg)
        }
      }
  
      @keyframes b200794__1FlgJ {
        0% {
          transform: rotate(0deg)
        }
  
        100% {
          transform: rotate(360deg)
        }
      }
  
      .b200794__31ZbF.b200794__38geD {
        align-items: center;
        display: flex
      }
  
      .b200794__31ZbF.b200794__38geD .b200794__2Zkk1 {
        width: 20px;
        height: 20px;
        cursor: pointer;
        user-select: none;
        background-position: center;
        background-size: contain
      }
  
      .b200794__2CIyB {
        overflow: hidden !important
      }
  
      .b200794__3zwmj.b200794__ZFemA {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .7607843137);
        z-index: 9999999;
        overflow-y: auto;
        align-items: center;
        justify-content: center;
        display: flex
      }
  
      .b200794__3zwmj.b200794__ZFemA * {
        font-size: 13px
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__mXV07 {
        max-width: 1000px;
        margin: 30px auto;
        margin-top: 60px;
        padding: 24px;
        background-color: #fff;
        border-radius: 4px;
        min-height: 500px;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, .4196078431);
        position: relative
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__291z- {
        display: flex;
        gap: 6px
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__291z- .b200794__1LTYq {
        width: 100%
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__356f5 {
        height: 100%;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__2PEbI {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 32px;
        white-space: nowrap;
        gap: 12px
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__7rycn {
        display: flex;
        align-items: center;
        gap: 16px
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__193Qq {
        margin-top: 24px
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__2JgjE {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 16px
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3yVkD {
        display: flex;
        align-items: center;
        gap: 8px
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3yVkD input {
        height: 30px;
        border: solid 1px #ccc;
        border-radius: 0px;
        width: 85px;
        padding: 0 10px
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__1Nva6 {
        display: flex;
        gap: 20px;
        margin-top: 40px
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__1s9kh {
        display: grid;
        grid-template-columns: 1fr 1fr
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3EzNY {
        padding-left: 30px;
        margin-bottom: 16px
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3EzNY .b200794__6wLjm {
        width: 20px;
        height: 20px;
        background-position: center;
        background-size: contain
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3EzNY input {
        display: none
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3EzNY .b200794__1IX9o {
        width: 20px;
        height: 20px;
        background-position: center;
        background-size: contain
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3EzNY .b200794__360ui {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3EzNY .b200794__360ui .b200794__1Ej2e {
        max-width: 100px;
        overflow: hidden;
        white-space: nowrap
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3EzNY label {
        height: 30px;
        border: solid 1px #ccc;
        border-radius: 30px;
        padding: 0 40px;
        user-select: none;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3EzNY label * {
        user-select: none;
        cursor: pointer
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3EzNY label:hover {
        background-color: #e0e1e2
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3EzNY label:active {
        background-color: #babbbc
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__1oACy {
        padding-right: 32px;
        margin-left: 30px
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__1oACy .b200794__1d389 {
        width: 30px;
        height: 30px;
        border: solid 1px #ccc;
        padding: 0px 2px
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__1oACy input {
        height: 30px;
        border: solid 1px #ccc;
        border-radius: 0px;
        padding: 0 10px
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__2-YyH {
        position: absolute;
        content: "";
        right: 0;
        top: -25px;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 35px;
        cursor: pointer;
        user-select: none;
        padding-bottom: 12px;
        color: #afafaf
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__2-YyH:hover {
        color: #ccc
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__2-YyH:active {
        color: #fff
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__2xXhA {
        height: 30px;
        border: solid 1px #ccc;
        border-radius: 0px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: capitalize
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__29iVg {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 24px;
        user-select: none
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__29iVg * {
        user-select: none
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__29iVg input {
        opacity: 0;
        width: 0;
        height: 0
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3gAsc {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 30px
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3gAsc:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 3px;
        top: 50%;
        transform: translate(0px, -50%);
        background-color: #fff;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%
      }
  
      .b200794__3zwmj.b200794__ZFemA input:checked+.b200794__3gAsc {
        background-color: #2c65f1
      }
  
      .b200794__3zwmj.b200794__ZFemA input:focus+.b200794__3gAsc {
        box-shadow: 0 0 1px #2c65f1
      }
  
      .b200794__3zwmj.b200794__ZFemA input:checked+.b200794__3gAsc:before {
        transform: translate(20px, -50%)
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__36PYJ {
        display: inline-flex;
        align-items: center;
        position: relative;
        padding-left: 30px;
        margin-bottom: 12px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__36PYJ input {
        position: absolute;
        opacity: 0;
        cursor: pointer
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3te9V {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 18px;
        width: 18px;
        background-color: #eee;
        border-radius: 50%
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__36PYJ:hover input~.b200794__3te9V {
        background-color: #ccc
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__36PYJ input:checked~.b200794__3te9V {
        background-color: #2c65f1
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__3te9V:after {
        content: "";
        position: absolute;
        display: none
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__36PYJ input:checked~.b200794__3te9V:after {
        display: block
      }
  
      .b200794__3zwmj.b200794__ZFemA .b200794__36PYJ .b200794__3te9V:after {
        top: 50%;
        left: 50%;
        width: 8px;
        transform: translate(-50%, -50%);
        height: 8px;
        border-radius: 50%;
        background: #fff
      }
  
      .b200794__-xtSL.b200794__qletl .b200794__2R3xp {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999999;
        background-color: rgba(0, 0, 0, .7607843137);
        width: 100%;
        height: 100%;
        padding: 40px 30px;
        overflow-y: auto;
        display: flex;
        align-items: center;
        justify-content: center
      }
  
      .b200794__-xtSL.b200794__qletl .b200794__2Qj_- {
        max-width: 1000px;
        max-height: 700px;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 8px;
        margin: auto;
        position: relative;
        padding-bottom: 8px
      }
  
      .b200794__-xtSL.b200794__qletl .b200794__2CSWd {
        position: absolute;
        top: -35px;
        right: 0px;
        width: 30px;
        height: 30px;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: center
      }
  
      .b200794__-xtSL.b200794__qletl .b200794__2CSWd:hover {
        color: #ccc
      }
  
      .b200794__-xtSL.b200794__qletl .b200794__2CSWd:active {
        color: #a09f9f
      }
  
      .b200794__3Gr4v {
        overflow: hidden !important
      }
  
      .b200794__29xiz.b200794__Lt01Q {
        height: 100%;
        overflow: hidden
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__1Suip {
        height: 100%;
        overflow: hidden;
        display: grid;
        grid-template-rows: 66px 1fr
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__2oUOX {
        position: relative
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__1_8lk {
        border-radius: 4px;
        transition: .15s;
        box-shadow: 0 0 0 0px #db2828;
        cursor: pointer;
        user-select: none;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        padding-bottom: 100%
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__1_8lk:hover {
        box-shadow: 0 0 0 2px #db2828
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__2lEYT {
        opacity: 0
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__2oUOX:hover .b200794__2lEYT {
        opacity: 1
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__2E3AQ {
        padding: 24px;
        padding-top: 3px;
        height: 100%;
        overflow-y: auto
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__2E3AQ.b200794__3sjhl {
        visibility: hidden
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__2E3AQ.b200794__3sjhl * {
        visibility: hidden
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__3_GNP {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__e3hlU {
        display: flex;
        gap: 12px;
        align-items: center;
        padding: 0 24px;
        justify-content: space-between
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__e3hlU .b200794__3Zxtq {
        display: flex;
        gap: 12px;
        align-items: center
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__e3hlU .b200794__3Zxtq .b200794__rf7mU {
        height: 30px;
        white-space: nowrap
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__e3hlU .b200794__3Zxtq .b200794__1huuK {
        font-size: 16px;
        font-weight: 600;
        color: #000;
        display: flex;
        align-items: center;
        gap: 8px
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__e3hlU .b200794__3Zxtq .b200794__1huuK div {
        display: flex
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__e3hlU .b200794__3Zxtq .b200794__1huuK svg {
        color: #000
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__e3hlU .b200794__2sqmf {
        display: flex
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__e3hlU .b200794__2sqmf .b200794__2nEl8 {
        height: 30px;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        color: #2c65f1;
        padding-right: 0
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__e3hlU .b200794__2sqmf .b200794__2nEl8:hover {
        text-decoration: underline
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__e3hlU .b200794__2sqmf .b200794__2nEl8:active {
        color: #1d4bbd
      }
  
      .b200794__29xiz.b200794__Lt01Q .b200794__e3hlU .b200794__2sqmf .b200794__2nEl8[data-ah-btn-loading=true] {
        color: #ccc
      }
  
      .b200794__2jSsF.b200794__3BRsN {
        transition: .15s;
        position: absolute;
        top: 8px;
        left: 8px;
        width: 24px;
        height: 24px
      }
  
      .b200794__2jSsF.b200794__3BRsN.b200794__8JyHr {
        opacity: 1
      }
  
      .b200794__2jSsF.b200794__3BRsN .b200794__2sZ2z {
        display: inline-flex;
        padding: 0;
        width: 24px;
        height: 24px;
        transition: .15s
      }
  
      .b200794__2jSsF.b200794__3BRsN .b200794__2sZ2z.b200794__S6E3Z {
        border-radius: 50%
      }
  
      .b200794__3ZSUY.b200794__3DTl7 {
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 36px;
        border: solid 1px #e0e1e2;
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
        padding: 6px 16px;
        color: rgba(0, 0, 0, .6);
        background-color: #e0e1e2
      }
  
      .b200794__3ZSUY.b200794__3DTl7 .b200794__2I9yy {
        width: 100% !important;
        height: 100% !important
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-size=small] {
        height: 28px
      }
  
      .b200794__3ZSUY.b200794__3DTl7 * {
        cursor: pointer;
        user-select: none
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-btn-loading=true],
      .b200794__3ZSUY.b200794__3DTl7[data-ah-btn-disabled=true] {
        pointer-events: none
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-btn-loading=true] *,
      .b200794__3ZSUY.b200794__3DTl7[data-ah-btn-disabled=true] * {
        pointer-events: none
      }
  
      .b200794__3ZSUY.b200794__3DTl7:not([data-ah-color=primary]):not([data-ah-color=secondary]) {
        color: rgba(0, 0, 0, .8)
      }
  
      .b200794__3ZSUY.b200794__3DTl7:not([data-ah-color=primary]):not([data-ah-color=secondary]) [data-ah-spin-color] {
        border-color: #f3f3f3 #d6d6d6 #0076f1 !important
      }
  
      .b200794__3ZSUY.b200794__3DTl7:not([data-ah-color=primary]):not([data-ah-color=secondary]):hover {
        border-color: #cacbcd;
        background-color: #cacbcd
      }
  
      .b200794__3ZSUY.b200794__3DTl7:not([data-ah-color=primary]):not([data-ah-color=secondary]):active {
        border-color: #babbbc;
        background-color: #babbbc
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=primary] {
        border: solid 1px #db2828;
        color: #db2828;
        background-color: rgba(0, 0, 0, 0)
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=primary] [data-ah-spin-color=primary] {
        border-color: #f3f3f3 #f94f4f #db2828 !important
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=primary] svg path {
        fill: #db2828
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=primary]:hover {
        border-color: #d01919;
        color: #d01919
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=primary]:hover svg path {
        fill: #d01919
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=primary]:active {
        border-color: #b21e1e;
        color: #b21e1e
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=primary]:active svg path {
        fill: #b21e1e
      }
  
      .b200794__3DTl7[data-ah-color=primary][data-ah-variant=contained] {
        border: solid 1px #db2828;
        background-color: #db2828;
        color: #fff
      }
  
      .b200794__3DTl7[data-ah-color=primary][data-ah-variant=contained] svg path {
        fill: #fff
      }
  
      .b200794__3DTl7[data-ah-color=primary][data-ah-variant=contained]:hover {
        border-color: #d01919;
        background-color: #d01919;
        color: #fff
      }
  
      .b200794__3DTl7[data-ah-color=primary][data-ah-variant=contained]:hover svg path {
        fill: #fff
      }
  
      .b200794__3DTl7[data-ah-color=primary][data-ah-variant=contained]:active {
        border-color: #b21e1e;
        background-color: #b21e1e;
        color: #fff
      }
  
      .b200794__3DTl7[data-ah-color=primary][data-ah-variant=contained]:active svg path {
        fill: #fff
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=success] {
        border: solid 1px #1fbb60;
        color: #1fbb60;
        background-color: rgba(0, 0, 0, 0)
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=success] svg path {
        fill: #1fbb60
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=success]:hover {
        border-color: #1aaf58;
        color: #1aaf58
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=success]:hover svg path {
        fill: #1aaf58
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=success]:active {
        border-color: #159e4e;
        color: #159e4e
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=success]:active svg path {
        fill: #159e4e
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=success][data-ah-variant=contained] {
        border: solid 1px #1fbb60;
        background-color: #1fbb60;
        color: #fff
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=success][data-ah-variant=contained] svg path {
        fill: #fff
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=success][data-ah-variant=contained]:hover {
        border-color: #1aaf58;
        background-color: #1aaf58;
        color: #fff
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=success][data-ah-variant=contained]:hover svg path {
        fill: #fff
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=success][data-ah-variant=contained]:active {
        border-color: #159e4e;
        background-color: #159e4e;
        color: #fff
      }
  
      .b200794__3ZSUY.b200794__3DTl7[data-ah-color=success][data-ah-variant=contained]:active svg path {
        fill: #fff
      }
  
      .b200794__1JeIo.b200794__1nudi {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
        height: 100%;
        align-items: center;
        padding: 0px;
        padding-top: 45px;
        position: relative
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__PvhH8 {
        color: #333;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__PvhH8 svg {
        width: 16px !important;
        margin: 5px;
        color: #db2828
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__1mIrz {
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 20px;
        position: relative
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__1mIrz .b200794__2JXHN {
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-color: #000
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__a3Vq2 {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 0;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: space-between
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__a3Vq2 .b200794__1YaQv {
        width: 40px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__a3Vq2 .b200794__1YaQv.b200794__1XhYC {
        pointer-events: none;
        opacity: .3
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__a3Vq2 .b200794__1YaQv.b200794__1XhYC * {
        pointer-events: none
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__a3Vq2 .b200794__1YaQv svg {
        width: 24px !important;
        color: #ccc
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__a3Vq2 .b200794__1YaQv.b200794__39hkY {
        margin-left: 5px;
        transform: translateX(5px);
        transition: .15s
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__a3Vq2 .b200794__1YaQv.b200794__39hkY:hover {
        transform: translateX(0)
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__a3Vq2 .b200794__1YaQv.b200794__JFPnf {
        transform: translateX(-5px);
        transition: .15s
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__a3Vq2 .b200794__1YaQv.b200794__JFPnf:hover {
        transform: translateX(0)
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__a3Vq2 .b200794__1YaQv:hover svg {
        color: #555
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__a3Vq2 .b200794__1YaQv:active svg {
        color: #000
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__3UZKq {
        position: absolute;
        top: 15px;
        left: 15px;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        gap: 8px;
        color: #2c65f1
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__3UZKq svg {
        width: 15px !important
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__3UZKq:hover {
        color: #3a6eec
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__3UZKq:active {
        color: #1b49b9
      }
  
      .b200794__1JeIo.b200794__1nudi .b200794__DX2SR {
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 9;
        color: #b7b7b7
      }
  
      .b200794__Rq7RY .b200794__1_SrY {
        background: rgba(0, 0, 0, .12);
        border-radius: 2px;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        z-index: 1;
        height: 100%;
        width: 100%
      }
  
      .b200794__Rq7RY .b200794__-Qhl3 {
        border-radius: 50%
      }
  
      .b200794__Rq7RY .b200794__1_SrY:before {
        content: " "
      }
  
      .b200794__Rq7RY .b200794__1_SrY:after {
        background-color: #e0e1e2;
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0
      }
  
      @keyframes b200794__3OxXK {
        0% {
          transform: translateX(-100%)
        }
  
        100% {
          transform: translateX(100%)
        }
      }
  
      .b200794__21ppu.b200794__8LhfA {
        background-color: #f6ffed;
        border: 1px solid #b7eb8f;
        margin-bottom: 16px;
        color: rgba(0, 0, 0, .85);
        font-size: 14px;
        display: grid;
        padding: 8px 15px;
        grid-template-columns: auto 1fr auto;
        border-radius: 4px;
        gap: 12px
      }
  
      .b200794__21ppu.b200794__8LhfA .b200794__1Lb24 {
        display: flex
      }
  
      .b200794__21ppu.b200794__8LhfA .b200794__3Zwb3 {
        width: 14px;
        height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none
      }
  
      .b200794__21ppu.b200794__8LhfA .b200794__3Zwb3 * {
        cursor: pointer;
        user-select: none
      }
  
      .b200794__21ppu.b200794__8LhfA .b200794__3Zwb3:hover svg {
        color: #000
      }
  
      .b200794__21ppu.b200794__8LhfA.b200794__3riHD .b200794__1Lb24 svg {
        color: #52c41a
      }
  
      .b200794__21ppu.b200794__8LhfA.b200794__3XoDE {
        background-color: #fff2f0;
        border: 1px solid #ffccc7
      }
  
      .b200794__21ppu.b200794__8LhfA.b200794__3XoDE .b200794__1Lb24 svg {
        color: #ff4d4f
      }
  
      .b200794__21ppu.b200794__8LhfA.b200794__lrenr {
        background-color: #e6f7ff;
        border: 1px solid #91d5ff
      }
  
      .b200794__21ppu.b200794__8LhfA.b200794__lrenr .b200794__1Lb24 svg {
        color: #1890ff
      }
  
      .b200794__21ppu.b200794__8LhfA.b200794__1RKFe {
        background-color: #fffbe6;
        border: 1px solid #ffe58f
      }
  
      .b200794__21ppu.b200794__8LhfA.b200794__1RKFe .b200794__1Lb24 svg {
        color: #faad14
      }
  
      .b200794__1ammv.b200794__10Fwt .b200794__3jLxj {
        height: 26px;
        padding: 0px 10px;
        font-weight: 600
      }
  
      .b200794__1ammv.b200794__10Fwt .b200794__3-vnu {
        width: 16px;
        height: 16px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain
      }
  
      .b200794__3HN7f.b200794__JWGrl {
        margin: 8px 0;
        margin-bottom: 16px
      }
  
      .b200794__1Sg2l.b200794__3ebj0 .b200794__2biAG {
        display: flex;
        flex-wrap: wrap;
        gap: 8px
      }
  
      .b200794__1Sg2l.b200794__3ebj0 .b200794__2biAG .b200794__3JE1Q {
        height: 26px;
        padding: 0px 10px;
        font-weight: 600
      }
  
      .b200794__1Sg2l.b200794__3ebj0 .b200794__37GKm {
        font-size: 10px;
        display: inline-flex;
        align-items: center;
        color: #bfbfbf;
        white-space: nowrap;
        cursor: pointer;
        text-decoration: underline
      }
  
      .b200794__1Sg2l.b200794__3ebj0 .b200794__37GKm .b200794__3jRYU {
        width: 16px;
        height: 16px;
        background-size: contain;
        margin-left: 5px;
        cursor: pointer
      }
  
      .b200794__1Sg2l.b200794__3ebj0 .b200794__37GKm:hover {
        color: #2f9cc3
      }
  
      .b200794__1Sg2l.b200794__3ebj0 .b200794__jArDW {
        width: 16px;
        height: 16px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain
      }
  
      .b200794__3cyGA.b200794__1XnLK {
        display: inline-flex;
        align-items: center;
        justify-content: center
      }
  
      .b200794__3cyGA.b200794__1XnLK .b200794__3jDW- {
        font-size: 10px;
        display: inline-flex;
        align-items: center;
        color: #bfbfbf;
        white-space: nowrap;
        cursor: pointer;
        text-decoration: underline
      }
  
      .b200794__3cyGA.b200794__1XnLK .b200794__3jDW- .b200794__2hWkC {
        width: 16px;
        height: 16px;
        background-size: contain;
        margin-left: 5px;
        cursor: pointer
      }
  
      .b200794__3cyGA.b200794__1XnLK .b200794__3jDW-:hover {
        color: #2f9cc3
      }
  
      .b200794__1ZsX_.b200794__FUR-Y .b200794__3UME6 {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999999;
        background-color: rgba(0, 0, 0, .7607843137);
        width: 100%;
        height: 100%;
        padding: 40px 30px;
        overflow-y: auto;
        display: flex;
        align-items: center;
        justify-content: center
      }
  
      .b200794__1ZsX_.b200794__FUR-Y .b200794__2qMVB {
        max-width: 1000px;
        max-height: 700px;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 8px;
        margin: auto;
        position: relative;
        padding-bottom: 8px
      }
  
      .b200794__1ZsX_.b200794__FUR-Y .b200794__2WeQ_ {
        position: absolute;
        top: -35px;
        right: 0px;
        width: 30px;
        height: 30px;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: center
      }
  
      .b200794__1ZsX_.b200794__FUR-Y .b200794__2WeQ_:hover {
        color: #ccc
      }
  
      .b200794__1ZsX_.b200794__FUR-Y .b200794__2WeQ_:active {
        color: #a09f9f
      }
  
      .b200794__1Xr_I {
        overflow: hidden !important
      }
  
      .b200794__Rks26.b200794__3Woxo {
        height: 100%;
        overflow: hidden
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__29nyS {
        height: 100%;
        overflow: hidden;
        display: grid;
        grid-template-rows: 66px 1fr
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__2EknD {
        position: relative
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__2pV0d {
        padding-bottom: 100%;
        border-radius: 4px;
        transition: .15s;
        box-shadow: 0 0 0 0px #db2828;
        cursor: pointer;
        user-select: none;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__2pV0d:hover {
        box-shadow: 0 0 0 2px #db2828
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__YNeyk {
        opacity: 0
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__2EknD:hover .b200794__YNeyk {
        opacity: 1
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__flnSW {
        padding: 24px;
        padding-top: 3px;
        height: 100%;
        overflow-y: auto
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__flnSW.b200794__2ph6f {
        visibility: hidden
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__flnSW.b200794__2ph6f * {
        visibility: hidden
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__Y0kxf {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__3WPZ_ {
        display: flex;
        gap: 12px;
        align-items: center;
        padding: 0 24px;
        justify-content: space-between
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__3WPZ_ .b200794__3sYFd {
        display: flex;
        gap: 12px;
        align-items: center
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__3WPZ_ .b200794__3sYFd .b200794__2A-m6 {
        height: 30px;
        white-space: nowrap
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__3WPZ_ .b200794__3sYFd .b200794__17yf9 {
        font-size: 16px;
        font-weight: 600;
        color: #000;
        display: flex;
        align-items: center;
        gap: 8px
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__3WPZ_ .b200794__3sYFd .b200794__17yf9 div {
        display: flex
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__3WPZ_ .b200794__3sYFd .b200794__17yf9 svg {
        color: #000
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__3WPZ_ .b200794__2LxV8 {
        display: flex
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__3WPZ_ .b200794__2LxV8 .b200794__oJK9j {
        height: 30px;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        color: #2c65f1;
        padding-right: 0
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__3WPZ_ .b200794__2LxV8 .b200794__oJK9j:hover {
        text-decoration: underline
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__3WPZ_ .b200794__2LxV8 .b200794__oJK9j:active {
        color: #1d4bbd
      }
  
      .b200794__Rks26.b200794__3Woxo .b200794__3WPZ_ .b200794__2LxV8 .b200794__oJK9j[data-ah-btn-loading=true] {
        color: #ccc
      }
  
      .b200794__oiVnS.b200794__1-p4Q {
        transition: .15s;
        position: absolute;
        top: 8px;
        left: 8px;
        width: 24px;
        height: 24px
      }
  
      .b200794__oiVnS.b200794__1-p4Q.b200794__8P77I {
        opacity: 1
      }
  
      .b200794__oiVnS.b200794__1-p4Q .b200794__Of3Mw {
        display: inline-flex;
        padding: 0;
        width: 24px;
        height: 24px;
        transition: .15s
      }
  
      .b200794__oiVnS.b200794__1-p4Q .b200794__Of3Mw.b200794__20dL8 {
        border-radius: 50%
      }
  
      .b200794__2ppFt.b200794__ae21- {
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
        height: 100%;
        align-items: center;
        padding: 0px;
        padding-top: 45px;
        position: relative
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__1R8Xm {
        color: #333;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__1R8Xm svg {
        width: 16px !important;
        margin: 5px;
        color: #db2828
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__2XD0x {
        height: 100%;
        display: grid;
        grid-template-rows: 1fr 20px;
        position: relative
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__2XD0x .b200794__2AWqe {
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-color: #000
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__2fqEf {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 0;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        justify-content: space-between
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__2fqEf .b200794__27P75 {
        width: 40px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__2fqEf .b200794__27P75.b200794__31h0_ {
        pointer-events: none;
        opacity: .3
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__2fqEf .b200794__27P75.b200794__31h0_ * {
        pointer-events: none
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__2fqEf .b200794__27P75 svg {
        width: 24px !important;
        color: #ccc
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__2fqEf .b200794__27P75.b200794__1HEYY {
        margin-left: 5px;
        transform: translateX(5px);
        transition: .15s
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__2fqEf .b200794__27P75.b200794__1HEYY:hover {
        transform: translateX(0)
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__2fqEf .b200794__27P75.b200794__J1UqD {
        transform: translateX(-5px);
        transition: .15s
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__2fqEf .b200794__27P75.b200794__J1UqD:hover {
        transform: translateX(0)
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__2fqEf .b200794__27P75:hover svg {
        color: #555
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__2fqEf .b200794__27P75:active svg {
        color: #000
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__3_cE0 {
        position: absolute;
        top: 15px;
        left: 15px;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        gap: 8px;
        color: #2c65f1
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__3_cE0 svg {
        width: 15px !important
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__3_cE0:hover {
        color: #3a6eec
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__3_cE0:active {
        color: #1b49b9
      }
  
      .b200794__2ppFt.b200794__ae21- .b200794__3mM6m {
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 9;
        color: #b7b7b7
      }
            `}
          </style>
          <link rel="modulepreload" as="script" crossOrigin="" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/ViewMain-09506db2.js" />
          <link rel="modulepreload" as="script" crossOrigin="" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/assets-b20e619c.js" />
          <link rel="modulepreload" as="script" crossOrigin="" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/FormItem-dbb4bd8e.js" />
          <link rel="modulepreload" as="script" crossOrigin="" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/usePost-b47408a9.js" />
          <link rel="modulepreload" as="script" crossOrigin="" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/radio-group-cc84db45.js" />
          <link rel="modulepreload" as="script" crossOrigin="" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/BotBar-ce6d9de4.js" />
          <link rel="modulepreload" as="script" crossOrigin="" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/promo-21bea62d.js" />
          <link rel="modulepreload" as="script" crossOrigin="" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/useEvents-8f65d415.js" />
          <link rel="modulepreload" as="script" crossOrigin="" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/GarenaPrepaidCard-f4c0aeee.js" />
          <link rel="modulepreload" as="script" crossOrigin="" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/BackButton-66c6bbe4.js" />
          <link rel="modulepreload" as="script" crossOrigin="" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/error-c39a5745.js" />
          <link rel="modulepreload" as="script" crossOrigin="" href="https://cdn-gop.garenanow.com/gop/mshop/www/live/assets/tabs-a9dfdd39.js" />
          <title>Shop2game.com - خدمة شحن موثوقة للعبة فري فاير الشرق الأوسط وشمال أفريقيا</title>
          <meta name="description" content="قناة الشحن الرسمية والموثوقة لفري فاير" data-rh="true" />
          <meta name="keywords"
            content="فري فاير ، جواهر فري فاير ، شحن فري فاير ، شحن جواهر فري فاير ، كودات فري فاير ، اكواد فري فاير ، شحن فري فاير مجانا ، فري فاير عروض ، فري فاير تخفيضات ، فري فاير كودات مجانية ، فري فاير عروض جديدة ، فري فاير جواهر رخيصة ، فري فاير كودات جواهر ، بيع جواهر فري فاير ، فري فاير شحن بالبريد ، فري فاير طرق شحن ، فري فاير شراء جواهر ، فري فاير بطاقات شحن ، فري فاير كوبونات ، فري فاير خصومات ، فري فاير رصيد مجاني ، فري فاير متجر ، فري فاير شراء، جواهر حبيبي ، مجاني ، طريقة شحن جواهر فري فاير ، فري فاير مينا ، اشتري جواهر، جواهر فري فاير المغرب ، جواهر فري فاير الجزائر ، جواهر فري فاير تونس ، المغرب ، الجزائر ، تونس ، اشحن الجواهر المغرب ، اشحن الجواهر الجزائر ، اشحن الجواهر تونس"
            data-rh="true" />
          <meta name="twitter:title" content="Shop2game.com - خدمة شحن موثوقة للعبة فري فاير الشرق الأوسط وشمال أفريقيا"
            data-rh="true" />
          <meta name="twitter:description" content="قناة الشحن الرسمية والموثوقة لفري فاير" data-rh="true" />
          <meta property="og:title" content="Shop2game.com - خدمة شحن موثوقة للعبة فري فاير الشرق الأوسط وشمال أفريقيا"
            data-rh="true" />
          <meta property="og:type" content="website" data-rh="true" />
          <meta property="og:image" content="https://cdn-gop.garenanow.com/webmain/static/payment_center/common/garena-logo.png"
            data-rh="true" />
          <meta property="og:url" content="https://shop2game.com" data-rh="true" />
          <meta property="og:description" content="قناة الشحن الرسمية والموثوقة لفري فاير" data-rh="true" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
