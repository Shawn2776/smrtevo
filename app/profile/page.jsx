import { UserProfile } from "@clerk/nextjs";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex justify-center bg-white h-screen">
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
