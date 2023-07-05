import Image from "next/image";

const Bus = ({ post }) => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div>
          <Image src={post.image} alt="bus_image" width={400} height={200} />
          <div>
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.name}
            </h3>
            <p>5.0 ⭐️ (7 reviews) </p>
            <p>{post.size} people</p>
            <p>{post.price}/hour</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bus;
