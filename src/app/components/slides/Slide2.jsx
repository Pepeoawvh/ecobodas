import Image from 'next/image';

const Slide2 = ({ imageUrl, overlayTitle, overlayPosition, overlayGradient, imageStyles }) => {
  return (
    <div className="relative h-[70vh] w-full">
      <Image
        src={imageUrl}
        alt="Background"
        fill
        priority
        className={imageStyles}
      />
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayGradient}`}>
        <div className={`h-full flex items-center ${
          overlayPosition === 'left' ? 'justify-start' : 'justify-end'
        }`}>
          <div className={`max-w-2xl px-8 ${
            overlayPosition === 'left' ? 'ml-8' : 'mr-8'
          }`}>
            <h2 className="text-5xl font-bold text-white">
              {overlayTitle}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;