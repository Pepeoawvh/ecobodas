import Image from 'next/image';

const Slide3 = ({ imageUrl, card }) => {
  return (
    <div className="relative h-[70vh] w-full">
      <Image
        src={imageUrl}
        alt="Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center">
        <div className={`max-w-md p-8 rounded-lg ${
          card.position === 'right' ? 'ml-auto mr-12' : 'ml-12'
        } ${card.backgroundColor}`}>
          <h3 className={`text-3xl font-bold mb-4 ${card.textColor}`}>
            {card.title}
          </h3>
          <p className={`${card.textColor} opacity-90`}>
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide3;