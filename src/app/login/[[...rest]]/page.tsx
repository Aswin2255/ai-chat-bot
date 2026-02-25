import PublicHeader from "@/components/PublicHeader";
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <PublicHeader />

      <div className="flex flex-1 justify-center items-center p-4">

          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md",
                card: "shadow-none border border-gray-200",
              },
            }}
            path="/login"
            routing="path"
            signUpUrl="/login"
          />
        
      </div>
    </div>
  );
}
