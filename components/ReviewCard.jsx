const ReviewCard = ({ image, name, description }) => {
  return (
    <div className="p-[16px] flex flex-col gap-[16px] border rounded-xl bg-white">
      <div className="flex gap-8 items-center">
        <img src={image} alt={name} className="w-14 h-14 rounded-full" />
        <div>
          <h2 className="text-xl">{name}</h2>
          <div className="text-main">4.7 stars</div>
        </div>
      </div>
      <div className="font-light">{description}</div>
    </div>
  );
};

export default ReviewCard;
