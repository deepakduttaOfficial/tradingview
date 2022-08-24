import React from "react";
import { LogoIcon } from "../icons";
import {
  Discord,
  Facebook,
  Instagram,
  Linkedin,
  Telegram,
  Twitter,
  Youtube,
} from "./Footericon";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-2 mt-32">
      <div className="py-10 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col md:px-8 px-4">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10 px-5">
          <a
            href="/"
            className="flex items-center md:justify-start justify-center text-gray-900"
          >
            <LogoIcon />
          </a>
          <p className="mt-2 text-base font-bold text-black ">
            Look first /Then leap
          </p>
          <div className="flex mt-2 flex-wrap justify-center md:justify-start">
            <a
              href="/"
              className="h-10 p-[6px] rounded-md hover:bg-[#e0e3eb] mr-1 mb-2"
            >
              <Twitter />
            </a>
            <a
              href="/"
              className="h-10 p-[6px] rounded-md hover:bg-[#e0e3eb] mr-1 mb-2"
            >
              <Facebook />
            </a>
            <a
              href="/"
              className="h-10 p-[6px] rounded-md hover:bg-[#e0e3eb] mr-1 mb-2"
            >
              <Youtube />
            </a>
            <a
              href="/"
              className="h-10 p-[6px] rounded-md hover:bg-[#e0e3eb] mr-1 mb-2"
            >
              <Instagram />
            </a>
            <a
              href="/"
              className="h-10 p-[6px] rounded-md hover:bg-[#e0e3eb] mr-1 mb-2"
            >
              <Telegram />
            </a>
            <a
              href="/"
              className="h-10 p-[6px] rounded-md hover:bg-[#e0e3eb] mr-1 mb-2"
            >
              <Discord />
            </a>
            <a
              href="/"
              className="h-10 p-[6px] rounded-md hover:bg-[#e0e3eb] mr-1 mb-2"
            >
              <Linkedin />
            </a>
          </div>
        </div>

        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first justify-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-[#000] tracking-widest text-base mb-3">
              Products
            </h2>
            <nav className="list-none mb-10 -ml-2">
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Chart
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Stock Screener
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Forex Screener
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Crypto Screener
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-[#000] tracking-widest text-base mb-3">
              Company
            </h2>
            <nav className="list-none mb-10 -ml-2">
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Chart
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Stock Screener
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Forex Screener
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Crypto Screener
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-[#000] tracking-widest text-base mb-3">
              Community
            </h2>
            <nav className="list-none mb-10 -ml-2">
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Chart
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Stock Screener
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Forex Screener
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Crypto Screener
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-[#000] tracking-widest text-base mb-3">
              For business
            </h2>
            <nav className="list-none mb-10 -ml-2">
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Chart
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Stock Screener
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Forex Screener
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="text-black text-sm hover:bg-gray-300 px-2 py-1 rounded-md"
                  href="/"
                >
                  Crypto Screener
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="mx-auto py-4 md:px-8 px-4 flex flex-wrap flex-col sm:flex-row justify-center space-y-2 md:space-y-0 md:justify-between items-center">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2020 TradingView —
            <a
              href="/"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @XYZ Name
            </a>
          </p>

          <div>
            <p className="text-gray-500 text-sm text-center sm:text-left">
              Select market data provided by
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-[#2962ff] ml-1"
                target="_blank"
              >
                ICE Data Services
              </a>
            </p>
            <p className="text-gray-500 text-sm text-right ">
              © 2020 TradingView —
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
