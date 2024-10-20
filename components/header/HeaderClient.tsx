"use client";
import useAuthStore from "@/store/authStore";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { GetStartedButton } from "./GetStarted";

// interface User {
//   name: string;
//   email: string;
//   image: string;
// }

// interface HeaderClientProps {
//   user: User | null;
// }

const HeaderClient = () => {
  const router = useRouter();
  const session = useSession();
  const { login } = useAuthStore();
  const { data, status } = session;

  useEffect(() => {
    if (data) {
      login({
        name: data?.user?.name || "",
        email: data?.user?.email || "",
        image: data?.user?.image || "",
      });
    }
  }, [data, login]);

  const handleGetStarted = () => {
    router.push("/dashboard");
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className="hidden md:flex space-x-4">
      {status === "authenticated" ? (
        <button
          className="bg-white text-teal-600 font-semibold py-2 px-4 rounded hover:bg-teal-500 hover:text-white"
          onClick={handleLogout}
        >
          Log out
        </button>
      ) : (
        <div className="md:hidden lg:hidden">
          <GetStartedButton onClick={handleGetStarted} />
        </div>
      )}
    </div>
  );
};

export default HeaderClient;
