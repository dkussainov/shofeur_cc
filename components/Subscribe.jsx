const Subscribe = () => {
  return (
    <div class="bg-white rounded-2xl border shadow-xl p-10 w-2/3 mb-5">
      <div class="flex flex-col items-center space-y-4">
        <h1 class="font-bold text-2xl text-gray-700 w-4/6 text-center">
        Join our mailing list
        </h1>
        <p class="text-sm text-gray-500 text-center w-5/6">
        and never miss an update
        </p>
        <input
          type="text"
          placeholder="Email"
          class="border-2 rounded-lg w-full h-12 px-4"
        />
        <button class="bg-gray-700 hover:bg-gray-800 text-white rounded-md font-semibold px-4 py-3 w-full">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
