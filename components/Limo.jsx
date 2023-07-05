import Image from "next/image";

const Limo = ({ post }) => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div>
          <Image src={post.image} alt="limo_image" width={400} height={200} />
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

export default Limo;
