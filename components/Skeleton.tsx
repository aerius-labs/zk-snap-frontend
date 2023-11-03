const SkeletonLoader = () => {
    return (
      <div
        className="bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 animate-slide text-lg w-full tracking-widest font-good-times p-4 rounded-xl flex justify-center items-center mb-4"
        aria-busy="true"
        aria-live="polite"
      >
        Loading...
      </div>
    );
  };
  
  export default SkeletonLoader;