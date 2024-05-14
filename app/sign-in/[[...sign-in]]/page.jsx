import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center w-full h-screen items-center bg-sky-500">
      <SignIn path="/sign-in" />
    </div>
  );
}
