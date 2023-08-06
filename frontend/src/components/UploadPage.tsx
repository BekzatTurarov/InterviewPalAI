const UploadPage: React.FC = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <header>
        <nav className="bg-white border-white-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="http://localhost:5173/#" className="flex items-center">
              <img
                src="logo.png"
                className="mr-3 h-6 sm:h-9 rounded-full"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                InterviewPal
              </span>
            </a>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="/"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center py-10 px-1">
          <div className="w-full lg:max-w-md">
            <div className="place-self-center mr-auto lg:col-span-7">
              <h1 className="mb-10 max-w-5xl text-5xl font-extrabold leading-none md:text-5xl xl:text-5xl dark:text-white">
                Upload your info
              </h1>
              <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                <h2 className="text-2xl font-semibold mb-2">
                  Your work experience
                </h2>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={4}
                  placeholder="Enter your skills here..."
                ></textarea>
              </div>

              <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                <h2 className="text-2xl font-semibold mb-2">Your skills</h2>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={4}
                  placeholder="Enter your skills here..."
                ></textarea>
              </div>
              <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                <h2 className="text-2xl font-semibold mb-2">Your major</h2>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={3}
                  placeholder="Enter your skills here..."
                ></textarea>
              </div>
              <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                <h2 className="text-2xl font-semibold mb-2">Job description</h2>
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={10}
                  placeholder="Enter your skills here..."
                ></textarea>
              </div>
              <a
                className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 border border-white"
                href="/controller"
              >
                Upload
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadPage;
