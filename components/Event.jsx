import Image from "next/image";

const Event = ({ event }) => {
  return (
    <div class="prompt_card">
      <Image
        class="w-full rounded-lg drop-shadow-md"
        src={event?.image}
        alt="Sunset in the mountains"
        width={300}
        height={300}
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 underline">{event?.title}</div>
      </div>
    </div>
  );
};

export default Event;
