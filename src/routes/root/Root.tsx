import useSmoothiesStore from "@/store/store";
import { Link, Outlet } from "react-router-dom";
import facebook from "@/assets/icons/facebook.svg";
import twitter from "@/assets/icons/twitter.svg";
import instagram from "@/assets/icons/instagram.svg";
import SidebarMenu from "@/features/header-menu/SidebarMenu";
import useShoppingCartStore from "@/store/cartConfirmation";

export default function Root() {
  const selectedSmoothie = useSmoothiesStore((state) => state.selectedSmoothie);
  const totalNumberOfItems = useShoppingCartStore(
    (state) => state.totalNumberItems,
  );

  function displayActiveCart() {
    if (totalNumberOfItems > 0) {
      return (
        <span className="relative -top-2 right-1 flex h-2 w-2 lg-desktop:-top-3 lg-desktop:right-2 lg-desktop:h-4 lg-desktop:w-4">
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full ${selectedSmoothie.backgroundColor} opacity-75`}
          ></span>
          <span
            className={`relative inline-flex h-2 w-2 rounded-full ${selectedSmoothie.backgroundColor} lg-desktop:h-4 lg-desktop:w-4`}
          ></span>
        </span>
      );
    }
  }

  return (
    <div className="relative flex flex-col md-phone:h-screen">
      <header className="relative z-20 flex items-center justify-between shadow-headerShadow s-phone:pl-4 s-phone:pr-4 lg-phone:pr-6 md-tablet:px-12 md-tablet:pt-8 md-laptop:px-32 lg-desktop:pb-8">
        <Link to="/">
          <svg
            viewBox="0 0 203 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`s-phone:w-24 s-laptop:w-28 md-desktop:w-36 lg-desktop:w-48 ${selectedSmoothie.logoFill}`}
          >
            <path
              d="M76.6 17C77.4667 23.4667 82 29.3334 86.0667 29.3334C88.5333 29.3334 88.5333 28 85.9333 24.2667C83.2667 20.4667 84.9333 20.4667 89.1333 24.3334L92.4 27.3334L91.4 23.3334C90.2667 18.6 87.3333 15.0667 82.4 12.5334C76.4 9.40004 75.6 10 76.6 17Z"
              fill="#12A34E"
            />
            <path
              d="M98.8 17C96.6667 19 94.4667 22.1334 93.9333 24L93 27.3334L95.9333 24.7334L98.8667 22.0667L97.9333 25.7334C97.4667 27.6667 97.4667 29.3334 97.9333 29.3334C100.6 29.3334 103.867 26.2 105.2 22.4667C108.533 13 105.667 10.5334 98.8 17Z"
              fill="#12A34E"
            />
            <path d="M135 19.5333C132.867 20.4 132.6 59.4 134.733 60.7333C138 62.7333 140 58.4 139.667 49.8667C139.267 39.5333 143.267 33.4 147.6 37.6667C149.667 39.7333 149.733 40.8667 148.2 49C145.6 62.6 145.6 63.2667 148.867 63.7333C152.4 64.2667 154.467 57 154.867 43C155.067 32.7333 148.933 28.3333 142.4 34.2C138.933 37.3333 138.333 35.9333 140 28.6C142 19.7333 140.667 17.2667 135 19.5333Z" />
            <path d="M162.667 24C162.667 29.2667 167.4 29.6667 169.333 24.6C171.133 19.9334 171.2 20 166.667 20C163.133 20 162.667 20.4667 162.667 24Z" />
            <path d="M114 28C113.533 30.2 112.267 32 111.2 32C110.2 32 109.333 32.8667 109.333 33.9334C109.333 35.1334 110.133 35.6 111.333 35.1334C113.067 34.4667 113.333 35.9334 113.2 44.4667C113.067 51.9334 113.6 55.5334 115.2 58C119.267 64.1334 128.6 60.8667 127.733 53.6C127.2 49.2 124.333 48.2667 123.8 52.2667C122.667 60.0667 119.333 55.3334 119.333 46V36.6667L123.667 36.2667C129.333 35.7334 129.667 32 124.067 32C120.333 32 120.133 31.7334 120.867 28C121.6 24.4 121.333 24 118.267 24C115.6 24 114.667 24.8 114 28Z" />
            <path d="M61.6666 29.4C60 30.0667 58.2666 31.4667 57.8666 32.6C57.2666 34.1334 55.7333 34.4 51.4 33.8C47.8 33.3334 45.3333 33.6 44.7333 34.5334C43.3333 36.8667 41.2 36.2667 41.6 33.6667C41.8666 31.9334 41.1333 31.3334 38.6666 31.3334H35.3333L35.8 47.3334C36.4 65.2 36.2666 64.7334 39.4666 62.9334C41.3333 61.8667 41.7333 60 41.4666 52.2667C41.2 44.3334 41.6 42.4 43.8666 40.1334C48.8666 35.1334 51 37.8 49.9333 47.6C49.4 52.3334 48.9333 57.2667 48.8 58.4667C48.7333 59.7334 49.8 60.8 51.4666 61.0667C54.8 61.5334 55.9333 58.5334 56 48.9334C56 41.7334 59 34.6667 62.0666 34.6667C65.3333 34.6667 65.7333 37.9334 64 50.1334C62.2666 62.3334 63.3333 66.7334 67.1333 62.6C69.5333 60 72.2666 40.3334 70.9333 35.4667C69.5333 30.4 65.6666 27.8667 61.6666 29.4Z" />
            <path d="M17.3333 30.3333C9.99998 33.2 10.3333 40.9333 18 47.7333C24.1333 53.1333 25.8 58.0667 22 59.5333C19.3333 60.5333 16 57.6667 16 54.3333C16 52.4667 15.4 51.9333 13.8667 52.5333C12.7333 53 11.5333 53.3333 11.2 53.3333C9.39998 53.3333 11.1333 58.6667 13.7333 61.1333C17.8667 64.9333 24.0667 64.8667 27.8 60.9333C32.4667 55.9333 31.5333 51.5333 24.6667 45.8C20.7333 42.5333 18.6667 39.7333 18.6667 37.7333C18.6667 33.8 23.4667 33.5333 24.6667 37.4C25.6 40.2 29.4 40.5333 30.2667 37.8667C31.8 33.2 23.0667 28.0667 17.3333 30.3333Z" />
            <path d="M177.733 33.8667C167.667 42.3334 169.933 62.6667 180.933 62.6667C187.467 62.6667 194.8 56.7334 192.6 53.2C191.467 51.3334 188.4 51.8 187.533 53.9334C185.133 60.1334 177.333 58.1334 177.333 51.3334C177.333 48.4 177.933 48.1334 184.333 47.7334L191.333 47.3334L191.667 41.3334C192.267 31.0667 185.4 27.4 177.733 33.8667ZM186.667 40C186.667 43.6667 186.267 44 182 44C176.8 44 176.4 43.2667 179.4 38.9334C182.533 34.4667 186.667 35.0667 186.667 40Z" />
            <path d="M82.3333 33.4667C75.4666 37.4 73.8 51.8 79.3333 58.4667C84.1333 64.0667 95.6 64.2 101.8 58.6667C107.333 53.7333 108.733 39.4 104.133 34.8C101 31.6667 86.8666 30.8 82.3333 33.4667ZM88 35.2C88 35.4667 87.1333 37.8 86 40.4667C83.6 46.2 83.4 52.2 85.6 54.4C86.4666 55.2667 86.6666 56.4 86.1333 57C82.2666 60.8667 80 47 83.2666 39.2667C84.8 35.6 88 32.8 88 35.2ZM101.333 43.1333C101.333 49.5333 98.8666 57 96.4666 57.8667C94.8666 58.5333 94.6 58.1333 95.3333 56.3333C97.2666 51.7333 98.4666 43.2667 97.6666 39.3333C96.9333 35.7333 97.0666 35.5333 99.1333 37.1333C100.333 38.2 101.333 40.8667 101.333 43.1333ZM93.3333 44.5333C93.3333 50.1333 92.1333 53.6 90.5333 52.6C89.1333 51.7333 88.8666 42.2 90.2 40.8667C92.2 38.9333 93.3333 40.2667 93.3333 44.5333Z" />
            <path d="M162.867 33.2C159.333 35.4667 160 61.9334 163.667 62.4C166.533 62.8667 166.667 62.4667 166.667 52.4C166.667 46.6667 167.067 39.7334 167.533 37C168.4 31.8 166.933 30.6 162.867 33.2Z" />
          </svg>
        </Link>
        <div className="flex place-items-center justify-center">
          <SidebarMenu />
          <Link to={"/shopping-cart"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 lg-desktop:size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>
          <div>{displayActiveCart()}</div>
        </div>
      </header>
      <main id="detail" className="relative z-20 pt-4">
        <Outlet />
      </main>
      <footer className="shadow-footerShadow s-phone:grid s-phone:gap-8 s-phone:px-4 s-phone:py-8 md-tablet:grid-cols-2 md-tablet:px-12 md-laptop:px-32 lg-desktop:pb-20 lg-desktop:pt-12">
        <div className="md-tablet:grid md-tablet:gap-24">
          <svg
            viewBox="0 0 216 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${selectedSmoothie.logoFill} s-phone:max-w-32 lg-desktop:max-w-52`}
          >
            <path
              d="M72.2192 0.134123C71.3495 0.730396 72.4366 10.6683 73.7579 14.1267C74.4436 15.9354 75.3133 17.4459 76.2499 18.4397C78.1901 20.5068 81.0501 21.9776 83.1407 21.9776C84.2111 21.9776 84.2947 21.9378 84.2947 21.5602C84.2947 20.6459 81.9365 15.6571 79.411 11.1851C78.8089 10.1316 78.6918 9.45586 79.0765 9.45586C79.2772 9.45586 80.1804 10.3701 82.6724 13.1329C84.5122 15.1403 85.4822 16.3726 86.9206 18.4795C87.8405 19.831 87.7401 15.6372 86.7701 12.3378C84.9972 6.35524 80.3476 1.94282 74.2262 0.432259C73.5405 0.253376 72.8547 0.0744953 72.7377 0.0148678C72.6039 -0.0248833 72.3697 0.0148678 72.2192 0.134123Z"
              fill="#12A34E"
            />
            <path
              d="M99.0965 4.12917C98.5446 4.34781 97.8756 4.64594 97.5912 4.78507C97.3236 4.9242 96.8219 5.18259 96.5041 5.34159C94.7312 6.19625 92.741 8.26333 91.6204 10.39C90.182 13.0931 89.8141 14.3254 89.697 16.8298C89.5966 18.9963 89.7472 19.3739 90.3158 18.3205C90.4998 17.9428 90.9346 17.2472 91.2859 16.79C92.0218 15.7764 94.6811 12.6161 95.0323 12.3379C95.4504 12 96.0024 11.6422 96.0024 11.7018C96.0024 12.2186 94.9487 14.6037 93.4769 17.4062C93.0755 18.1615 92.2894 20.3478 92.2057 20.9043C92.0887 21.6994 92.373 21.8385 93.6107 21.5602C95.5006 21.1428 97.7919 19.4534 98.8958 17.6646C100.184 15.5577 100.986 12.0994 101.354 6.91178C101.555 3.93041 101.505 3.67203 100.618 3.71178C100.334 3.73166 99.6484 3.93041 99.0965 4.12917Z"
              fill="#12A34E"
            />
            <path
              d="M7.60994 23.9056C6.10468 24.0844 3.99731 25.277 3.04398 26.5093C1.85649 28.0199 1.23766 30.2857 1.38819 32.5515C1.67251 36.8049 3.1945 38.8521 9.41626 43.3242C10.1354 43.8211 10.8546 44.4174 11.0386 44.636C11.2226 44.8546 11.44 45.0335 11.5404 45.0335C11.8414 45.0335 13.9153 47.4981 14.2666 48.2931C14.5342 48.9093 14.6345 49.5851 14.6847 50.9962C14.7516 52.6857 14.7014 53.0037 14.3335 53.9776C13.4805 56.2633 11.7578 57.5751 9.41626 57.7143C7.57649 57.8335 6.45591 57.4757 4.93392 56.2633C3.94713 55.4882 3.67953 55.1304 2.9938 53.6795C2.14082 51.8708 1.35474 51.5329 0.485029 52.5664C0.0334503 53.123 0 53.2422 0 54.8323V56.5018L0.802807 57.754C2.69275 60.7751 5.36877 62.3056 8.74725 62.3254C10.5703 62.3254 12.2763 61.8882 13.815 61.0136C15.337 60.159 17.0931 58.0323 17.9126 56.0447L18.4813 54.6733V51.2944V47.9155L17.9461 46.5838C17.2771 44.8745 16.4408 43.6025 15.2701 42.4099C14.2498 41.3962 11.9585 39.4683 11.7578 39.4683C11.6742 39.4683 11.3229 39.19 10.9717 38.872C10.6037 38.5341 10.2358 38.2758 10.1689 38.2758C9.85111 38.2758 7.55977 36.3677 6.72351 35.4136C5.40222 33.9031 5.03427 32.0745 5.68655 30.3851C6.25521 28.8546 7.92772 28.0994 9.56678 28.6161C10.0685 28.7751 10.7208 29.0335 10.9884 29.1925C11.4735 29.4907 12.7613 31.041 13.2129 31.8758C13.3968 32.2335 13.631 32.3329 14.1996 32.3726C15.3035 32.4124 15.5544 31.9354 15.5544 29.7888C15.5544 28.8745 15.4708 27.9205 15.3704 27.682C15.1363 27.1453 14.0324 25.754 13.8484 25.754C13.7648 25.754 13.3968 25.5155 13.0122 25.2372C11.6909 24.2435 9.44971 23.6869 7.60994 23.9056Z"
              fill="black"
            />
            <path
              d="M204.181 23.9851C202.859 24.2037 201.287 25.118 200.233 26.2509C197.641 29.0335 197.557 34.4795 200.049 37.8782C200.902 39.0509 202.408 40.482 203.796 41.4559C205.853 42.9068 208.797 45.3317 209.683 46.3056C211.122 47.8758 211.64 49.2074 211.64 51.2944C211.64 53.1826 211.322 54.1764 210.252 55.6074C209.165 57.0584 207.71 57.754 205.803 57.754C203.16 57.7341 201.12 56.3031 199.782 53.5205C199.029 51.9702 198.31 51.6124 197.457 52.4074C197.039 52.805 197.022 52.8845 197.022 54.9515V57.0782L198.21 58.5292C199.615 60.2385 200.718 61.113 202.291 61.7491C203.294 62.1466 203.779 62.2261 205.636 62.2261C208.278 62.2261 209.867 61.7491 211.607 60.3776C212.945 59.3441 213.764 58.2907 214.45 56.6609C215.353 54.5739 215.587 53.4807 215.587 51.513C215.587 48.1143 214.667 45.3913 212.794 43.2248C212.175 42.5093 211.473 41.7739 211.239 41.595C209.081 39.8261 205.485 37.0832 205.351 37.0832C205.284 37.0832 205.05 36.8845 204.799 36.6261C202.625 34.4994 202.374 34.0025 202.374 31.9553C202.374 30.8422 202.441 30.4646 202.742 30.0074C203.277 29.1925 203.528 28.9938 204.448 28.6161C205.151 28.3379 205.402 28.318 206.204 28.5366C207.793 28.954 208.345 29.4112 209.951 31.6174C210.436 32.2733 210.62 32.3925 211.155 32.3727C212.125 32.3329 212.476 31.7963 212.543 30.1267C212.593 29.0136 212.543 28.5764 212.242 27.841C211.874 26.9466 210.586 25.5751 209.482 24.9192C208.044 24.0646 205.92 23.6869 204.181 23.9851Z"
              fill="black"
            />
            <path d="M77.2702 24.0844C73.9586 24.7999 71.6505 26.0521 68.9076 28.6558C67.4023 30.0869 66.2149 31.9552 65.1779 34.4993C64.1075 37.1428 63.7563 38.554 63.5221 40.8993C63.0538 45.8285 64.4754 51.7515 66.9173 55.0708C67.0846 55.2894 67.4191 55.7664 67.6532 56.1242C68.4226 57.2372 70.6972 59.2447 72.1356 60.0794C74.9788 61.7291 76.0827 62.0273 79.5281 62.0273C82.6891 62.0273 83.977 61.749 85.9673 60.6757C87.3053 59.9204 87.7736 59.9403 89.1283 60.7155C89.7137 61.0534 90.6168 61.4111 91.1353 61.5503C91.6538 61.6695 92.4566 61.8683 92.9082 61.9676C93.3932 62.0869 94.8149 62.1267 96.2532 62.067C99.1299 61.9478 100.568 61.5105 103.027 60.0397C104.298 59.2844 107.041 56.9192 107.041 56.6012C107.041 56.5217 107.375 56.0645 107.777 55.5676C108.697 54.4347 110.319 51.1751 110.654 49.7838C111.573 45.8683 111.59 45.749 111.607 43.0459C111.624 40.3428 111.607 40.1838 110.771 36.9838C110.219 34.877 108.764 31.7366 107.877 30.7229C107.543 30.3453 107.191 29.8881 107.108 29.7291C107.024 29.5701 106.69 29.1925 106.372 28.8745C106.054 28.5763 105.419 27.9801 104.95 27.5428C103.445 26.1117 100.2 24.5018 98.1264 24.1838C96.4874 23.9055 94.2295 23.9055 92.8915 24.1639C92.3228 24.2832 91.0851 24.6807 90.1318 25.0782C87.4558 26.1912 87.2551 26.1912 84.7129 24.9391C83.5254 24.3627 82.3379 24.144 80.1135 24.0645C78.7754 24.0248 77.5043 24.0248 77.2702 24.0844ZM82.3044 28.8745C83.5421 29.3316 83.7595 29.5701 83.4083 30.1664C83.0236 30.7826 81.418 33.6844 81.1671 34.2012C80.8159 34.9167 80.4145 35.9701 80.264 36.5863C79.5783 39.508 79.5448 39.8062 79.5448 43.1453C79.5448 46.2062 79.5783 46.6832 79.9797 48.313C80.5985 50.7975 80.933 51.831 81.2842 52.2881C81.4515 52.5068 81.7023 52.9838 81.8529 53.3217C82.0034 53.6794 82.455 54.4546 82.8731 55.0708C83.2912 55.667 83.6257 56.2832 83.6257 56.4223C83.6257 56.5813 83.308 56.8794 82.9233 57.0782C82.3212 57.3962 81.8194 57.4558 79.6953 57.4558C77.22 57.4558 76.8353 57.3962 74.9287 56.6012C73.2561 55.9055 70.5299 53.2621 69.4763 51.354C67.7536 48.1937 67.3354 46.385 67.4525 42.549C67.5194 40.0844 67.5863 39.5875 68.0212 38.1565C69.1585 34.4993 71.3997 31.5975 74.3433 29.9279C76.2332 28.8745 77.3036 28.5962 79.6284 28.5565C80.8661 28.5366 81.6856 28.636 82.3044 28.8745ZM99.0129 29.1329C99.5146 29.3714 100.083 29.6099 100.267 29.6695C100.451 29.7291 100.719 29.8881 100.853 30.0074C100.986 30.1267 101.455 30.4248 101.873 30.6832C102.743 31.1999 105.034 33.7838 105.803 35.0956C106.255 35.8906 106.506 36.5068 106.974 37.9776C107.409 39.349 107.559 40.4422 107.66 42.5888C107.76 45.1726 107.559 46.6832 106.84 48.6111C106.656 49.0881 106.439 49.6844 106.372 49.9229C105.954 51.195 102.893 55.1701 102.324 55.1701C102.258 55.1701 101.873 55.4285 101.505 55.7664C101.137 56.0844 100.217 56.6012 99.4645 56.8993C98.1933 57.4161 97.909 57.4558 95.417 57.4558C93.1925 57.4558 92.6406 57.3962 92.1221 57.0981C91.7207 56.8794 91.4866 56.6012 91.4866 56.3826C91.4866 56.1838 91.9214 55.349 92.4566 54.554C93.4601 53.0235 93.7612 52.4869 93.9284 51.99C93.9953 51.831 94.2295 51.195 94.4469 50.5987C95.4002 48.0745 95.718 45.8086 95.6177 42.1515C95.5173 39.2894 95.4002 38.4347 94.8985 37.2223C94.7647 36.9043 94.6643 36.5267 94.6643 36.3676C94.6643 35.6919 92.8747 32.0546 91.8545 30.6037C91.5535 30.2062 91.4698 29.59 91.6873 29.3714C91.8043 29.272 92.2894 29.0335 92.7409 28.8546C94.0121 28.3776 97.7585 28.5366 99.0129 29.1329ZM87.9743 32.5117C88.1248 32.5117 89.6802 34.7975 89.8642 35.2944C89.9311 35.4534 90.1318 35.8509 90.3158 36.1888C90.4998 36.5068 90.6837 36.9242 90.7506 37.0832C90.8008 37.2422 90.9179 37.5403 91.0015 37.7192C91.1521 38.0968 91.4029 39.1701 91.6873 40.7602C91.9214 42.1117 91.7542 45.6496 91.4029 47.1204C91.2357 47.7763 90.9513 48.631 90.7506 49.0086C90.5499 49.3863 90.2154 50.1416 89.9813 50.6583C89.3792 52.0298 88.0244 53.7788 87.5729 53.7788C86.9206 53.7788 85.2983 51.4732 84.4954 49.4062C83.4418 46.6832 83.3749 46.3453 83.3749 43.1453C83.3749 40.5813 83.425 40.0049 83.7428 38.9714C84.4118 36.7652 84.6627 36.1888 85.6662 34.559C86.7032 32.8298 87.2384 32.2335 87.6063 32.4124C87.7401 32.472 87.8906 32.5117 87.9743 32.5117Z" />
            <path
              d="M25.1044 25.0782C24.7532 25.6148 24.7532 25.7142 24.7532 43.0658C24.7532 52.6459 24.8034 60.6558 24.8536 60.8347C25.0208 61.3515 25.8571 61.7291 26.8439 61.7291C27.6132 61.7291 27.8474 61.6496 28.1819 61.2322L28.6 60.7552V48.313C28.6 41.4757 28.6502 35.8906 28.7338 35.8906C29.0349 35.9105 29.269 36.3279 30.0885 38.3751C30.5736 39.5676 31.7443 42.4297 32.6977 44.7353C34.4204 48.9093 35.173 50.7776 38.0664 57.8732C38.9863 60.1788 39.7557 61.8086 39.9898 62.0074C40.5083 62.4447 41.0101 62.4049 41.5285 61.9279C41.9132 61.5502 45.1244 54.077 50.6605 40.6608C52.1657 36.9838 52.818 35.6919 52.8682 36.2881C52.8849 36.4471 52.9016 42.0124 52.9184 48.6509L52.9351 60.7155L53.303 61.1527C53.7546 61.6894 55.2766 61.908 56.0125 61.5304C57.0829 61.0136 57.0495 61.749 56.9993 42.7478L56.9491 25.5155L56.4808 25.0384C56.0627 24.6211 55.8453 24.5614 54.6076 24.5614C53.2696 24.5614 53.2027 24.5813 52.8013 25.1378C52.5839 25.4558 51.965 26.7875 51.4298 28.0794C43.385 47.6968 41.0937 53.0832 40.7592 53.0832C40.3912 53.0832 40.4916 53.3018 37.6985 46.4248C35.6246 41.3366 34.1026 37.5801 30.2725 28.2583C29.5868 26.6285 28.9011 25.1179 28.7338 24.9192C28.4829 24.6211 28.1651 24.5614 26.9442 24.5614C25.5226 24.5614 25.4222 24.5813 25.1044 25.0782Z"
              fill="black"
            />
            <path
              d="M113.597 25.0186C113.296 25.3963 113.229 25.7143 113.229 26.7677C113.229 27.9006 113.279 28.1391 113.664 28.5565C114.066 29.0137 114.199 29.0335 116.742 29.0932C118.615 29.1329 119.451 29.2323 119.568 29.4112C119.685 29.5702 119.769 34.7379 119.786 45.2124L119.836 60.7751L120.304 61.2522C120.689 61.6497 120.956 61.7292 121.776 61.7292C122.679 61.7292 122.846 61.6696 123.281 61.1528L123.766 60.5764V45.0932C123.766 33.3068 123.816 29.5503 123.967 29.3714C124.101 29.2124 124.903 29.1329 126.476 29.1329C129.369 29.1329 129.854 28.954 130.122 27.7217C130.373 26.6286 130.239 25.6348 129.77 25.0385L129.402 24.5615H121.675H113.948L113.597 25.0186Z"
              fill="black"
            />
            <path
              d="M136.059 25.0584L135.641 25.5354V43.1453V60.7553L136.059 61.2323C136.41 61.6696 136.611 61.7292 137.564 61.7292C138.518 61.7292 138.718 61.6696 139.07 61.2323L139.488 60.7553V54.9913C139.488 50.0224 139.521 49.1876 139.755 48.9292C139.989 48.6509 140.96 48.6112 148.001 48.6112C153.988 48.6112 156.029 48.6708 156.179 48.8497C156.33 49.0286 156.38 50.5988 156.38 54.7329C156.38 58.2112 156.447 60.5168 156.547 60.7553C156.815 61.3515 157.618 61.7292 158.588 61.7292C159.675 61.7292 160.16 61.3714 160.394 60.3776C160.494 59.9006 160.561 53.7988 160.561 42.8869C160.561 24.8994 160.578 25.2969 159.742 24.7602C159.374 24.5416 157.384 24.5019 157.133 24.7205C156.464 25.2969 156.464 25.2969 156.38 34.7776L156.296 43.9404L148.118 44C142.214 44.0199 139.872 43.9801 139.722 43.8211C139.521 43.6422 139.488 41.9329 139.488 34.5192V25.4161L139.103 24.9987C138.785 24.641 138.518 24.5615 137.581 24.5615C136.611 24.5615 136.41 24.6211 136.059 25.0584Z"
              fill="black"
            />
            <path
              d="M168.606 24.9391C168.422 25.1578 168.222 25.6348 168.171 25.9925C168.121 26.3503 168.104 34.3205 168.121 43.7019L168.171 60.7751L168.64 61.2522C169.008 61.6298 169.292 61.7292 170.011 61.7292C171.165 61.7292 171.65 61.4509 172.001 60.6161C172.236 60 172.269 58.2708 172.269 43.0261C172.269 28.3379 172.236 26.0522 172.018 25.5553C171.667 24.7404 171.299 24.5615 170.028 24.5615C169.158 24.5615 168.857 24.641 168.606 24.9391Z"
              fill="black"
            />
            <path
              d="M180.28 25.0783L179.879 25.595V43.1851V60.7751L180.347 61.2522L180.816 61.7292H186.335H191.871L192.356 61.1528C192.757 60.6559 192.841 60.4174 192.841 59.5429C192.841 58.9863 192.724 58.2708 192.59 57.9528L192.322 57.3565H188.576C186.519 57.3565 184.646 57.277 184.395 57.1578L183.977 56.959L184.01 53.0435L184.06 49.1081L187.154 49.0087C188.86 48.9491 190.382 48.8298 190.55 48.7304C191.386 48.2534 191.637 45.8683 190.934 44.8944L190.533 44.3379L187.288 44.2385L184.06 44.1391L184.01 36.9043C183.977 31.7366 184.027 29.5901 184.161 29.4112C184.311 29.1925 185.097 29.1329 187.857 29.1329C192.557 29.1329 192.975 28.9143 192.791 26.3702C192.674 24.5019 192.891 24.5615 186.335 24.5615H180.682L180.28 25.0783Z"
              fill="black"
            />
          </svg>

          <div className="hidden gap-4 md-tablet:flex">
            <img
              src={facebook}
              alt="facebook"
              className="s-laptop:w-4 md-laptop:w-4 lg-desktop:w-8"
            />
            <img
              src={twitter}
              alt="twitter"
              className="s-laptop:w-4 md-laptop:w-4 lg-desktop:w-8"
            />
            <img
              src={instagram}
              alt="instagram"
              className="s-laptop:w-4 md-laptop:w-4 lg-desktop:w-8"
            />
          </div>
        </div>
        <div className="s-phone:grid s-phone:gap-4 md-tablet:flex md-tablet:gap-24 s-laptop:justify-end">
          <div className="flex-col s-phone:flex s-phone:gap-4 lg-desktop:text-2xl">
            <Link to={"/about"}>
              <h2 className="font-semibold">About:</h2>
            </Link>
            <p>Yismel Rodriguez</p>
          </div>
          <div className="flex-col s-phone:flex s-phone:gap-4 lg-desktop:text-2xl">
            <Link to={"/contact-us"}>
              <h2 className="font-semibold">Contact Us:</h2>
            </Link>
            <p>MyPage</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
