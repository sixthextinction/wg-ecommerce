import Link from "next/link";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="sticky top-0 z-50 h-12 shadow-2xl  w-full bg-amber-500  ">
      {/* <span className="ml-4 text-2xl font-bold text-zinc-100  ">
        My Header
      </span> */}
      <ul className="list-none m-0 overflow-hidden p-0 fixed top-0 w-full ">
        <li className="float-left ">
          <Link href="/">
            <span className="cursor-pointer block py-3 px-4 text-center text-white no-underline text-lg text-black">
              Home
            </span>
          </Link>
        </li>

        <li className="float-left">
          <a
            className="block py-3 px-4 text-center text-white no-underline text-lg text-black "
            href="#offers"
          >
            Offers
          </a>
        </li>
        <li className="float-left">
          <a
            className="block py-3 px-4 text-center text-white no-underline text-lg text-black "
            href="#refunds"
          >
            Refund Policy
          </a>
        </li>
        <li className="float-right">
          <a
            className="block py-3 px-4 text-center text-white no-underline"
            href="#cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </a>
        </li>
        <li className="float-right">
          <a
            className="block py-3 px-4 text-center text-white no-underline"
            href="#wishlist"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="w-6 h-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
