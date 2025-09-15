import React from "react";

const CommentCard = ({ image, name, role, comment }) => {
  return (
    <div className="w-full max-w-[610px] mx-auto py-6 sm:py-8 px-6 sm:px-12 rounded-3xl sm:rounded-[85px] bg-white shadow-md">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
        {/* الصورة */}
        <div className="w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] rounded-full overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* الاسم والدور */}
        <div className="flex flex-col justify-center text-center sm:text-left gap-1">
          <h2 className="text-xl sm:text-2xl font-bold">{name}</h2>
          <p className="text-base sm:text-xl font-semibold text-gray-600">
            {role}
          </p>
        </div>
      </div>

      {/* التعليق */}
      <div className="mt-4 sm:mt-5 max-h-60 overflow-y-auto">
        <p className="text-base sm:text-2xl leading-7 sm:leading-10 text-gray-500">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default CommentCard;
