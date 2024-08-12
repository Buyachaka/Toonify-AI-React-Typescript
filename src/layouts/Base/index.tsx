import github from '../../assets/github-mark.svg'
interface BaseLayoutProps {
    children: React.ReactNode
}

export default function BaseLayout({children}: BaseLayoutProps) {
    return (
        <>
          <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full left-0">
            <div className="w-full flex flex-wrap items-center justify-between  p-4">
              <a className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Toonify</span>
              </a>
              <button data-collapse-toggle="navbar-default" type="button"
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </button>
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a target="_blank" href="https://github.com/Buyachaka/Toonify-React-Typescript"
                       className="flex flex-row items-center  py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      <img className={"h-8 mr-2"} src={github} alt="A github logo"/>
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className=" flex flex-col">

            {children}

          </div>

        </>


    )
}
