import Link from "next/link"
import Image from "next/image"
import SearchForm from "./SearchForm";

const Header = (props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
}) => {
    return (
      <header className="sticky top-0 z-999 flex w-full border-b border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark">
        <div className="flex flex-grow items-center justify-between px-4 py-5 shadow-2 md:px-5 2xl:px-10">
          <div>
            <button
              aria-controls="sidebar"
              onClick={(e) => {}}
              className="z-9999 block rounded-sm border border-stroke bg-white"
            ></button>

            <Link href="/" className="block flex-shrink-0">
              <Image width={32} height={32} src={"/next.svg"} alt="Logo" />
            </Link>
          </div>

          <div>
            <div>
              <h1 className="mb-0.5 text-heading-5 font-bold text-dark dark:text-white">
                Dashboard
              </h1>
            </div>
            <p className="font-medium">Admin Dashboard</p>
          </div>
          <div className="flex items-center justify-normal gap-2 2xsm:gap-4 lg:w-full lg:justify-between xl:w-auto xl:justify-normal">
            <ul className="flex items-center gap-2 2xsm:gap-4s">
              <SearchForm />
            </ul>
          </div>
        </div>
      </header>
    );
}

export default Header;