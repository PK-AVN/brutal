"use client";

interface GetStartedButtonProps {
  onClick: () => void;
}

export const GetStartedButton = ({ onClick }: GetStartedButtonProps) => {
  return (
    <button
      className="bg-white text-teal-600 font-semibold py-2 px-4 rounded hover:bg-teal-500 hover:text-white"
      onClick={onClick}
    >
      Get started
    </button>
  );
};
