import { SignIn } from '@stackframe/stack';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md space-y-8">
        <SignIn />
        <Link className="text-gray-900 mt-4 hover:underline" href="/">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
