"use client";
import useAuthStore from "@/store/authStore";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface User {
  name: string;
  email: string;
  image: string;
}

interface HeaderClientProps {
  user: User | null;
}

const HeaderClient = ({ user }: HeaderClientProps) => {
  const router = useRouter();
  const { login, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (user) {
      login({ name: user.name, email: user.email, image: user.image });
    }
  }, [user, login]);

  const handleGetStarted = () => {
    router.push("/dashboard");
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className="hidden md:flex space-x-4">
      {isAuthenticated ? (
        <button
          className="bg-white text-teal-600 font-semibold py-2 px-4 rounded hover:bg-teal-500 hover:text-white"
          onClick={handleLogout}
        >
          Log out
        </button>
      ) : (
        <button
          className="bg-white text-teal-600 font-semibold py-2 px-4 rounded hover:bg-teal-500 hover:text-white"
          onClick={handleGetStarted}
        >
          Get started
        </button>
      )}
    </div>
  );
};

export default HeaderClient;
