const TestimonialCard = ({ name, content, date }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 italic mb-4">"{content}"</p>
        <div className="flex items-center">
          <div>
            <h4 className="font-semibold text-gray-800">{name}</h4>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default TestimonialCard;