import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const DropdownUser = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
      <Link
        href="#"
        className="flex items-center gap-4"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="">
          <Image src="/" />
        </span>

        <span>
          <span>Jhon Doe</span>
          <svg
            className={`fill-current duration-200 ease-in ${
              dropdownOpen && "rotate-180"
            }`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.6921 7.09327C3.91674 6.83119 4.3113 6.80084 4.57338 7.02548L9.99997 11.6768L15.4266 7.02548C15.6886 6.80084 16.0832 6.83119 16.3078 7.09327C16.5325 7.35535 16.5021 7.74991 16.24 7.97455L10.4067 12.9745C10.1727 13.1752 9.82728 13.1752 9.59322 12.9745L3.75989 7.97455C3.49781 7.74991 3.46746 7.35535 3.6921 7.09327Z"
              fill=""
            />
          </svg>
        </span>
      </Link>
    );
}