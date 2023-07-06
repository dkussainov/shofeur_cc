import { FcSearch, FcOk, FcAddressBook } from "react-icons/fc";

const HowItWorks = () => {
  return (
    <div class="w-2/3 bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 mt-5">
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            How it works?
          </h5>
        </a>
        <p class="mb-3 font-satoshi text-gray-700 dark:text-gray-400 text-lg">
          <FcSearch style={{ width: 50, height: 50 }} />
          Search for a party bus, limousine, or any other group vehicle.
          <FcAddressBook style={{ width: 50, height: 50 }} />
          Message the host directly and book securely online.
          <FcOk style={{ width: 50, height: 50 }} />
          Enjoy your chauffeured experience then share your review!
        </p>
        <a
          href="#"
          class="inline-flex px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Start Now
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="/"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HowItWorks;
