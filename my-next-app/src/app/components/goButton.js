// my-next-app\src\app\components\goButton.js

const GoButton = ({ onClick, isDisabled }) => {
  return (
    <div
      onClick={!isDisabled ? onClick : null}
      className={`relative w-10 h-10 cursor-pointer rounded-full border-2 ${
        isDisabled
          ? 'border-gray-300 transparent'
          : 'border-teal-500 bg-white hover:bg-teal-500'
      } flex items-center justify-center transition-colors duration-300 group`}
    >
      <svg
        className={`w-7 h-7 ${isDisabled ? 'text-gray-300' : 'text-teal-500 group-hover:text-white'} transition-colors duration-300`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

export default GoButton;
