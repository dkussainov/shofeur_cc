import Image from "next/image";

const Bus = ({ post }) => {
  return (
    <div class="prompt_card md:h-[430px]">
      <Image
        class="w-full rounded-lg drop-shadow-md"
        src={post.image}
        alt="Sunset in the mountains"
        width={300}
        height={300}
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 underline">{post.name}</div>
        <p class="text-gray-700 text-base underline">5.0 ⭐️ (7 reviews)</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-90">
          #{post.price}/hr
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-90">
          Capacity: {post.size}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:scale-90">
          #Bus
        </span>
      </div>
    </div>
  );
};

export default Bus;
