import { Link } from "react-router";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to FinTrack
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Your ultimate financial tracking and management solution.
        </p>
      </header>
      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose FinTrack?
        </h2>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Track your expenses effortlessly.</li>
          <li>Set and achieve your financial goals.</li>
          <li>Get detailed insights into your spending habits.</li>
        </ul>
      </section>
      <footer className="flex space-x-4 mt-8">
        <Link
          to="/register"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
        >
          Log In
        </Link>
      </footer>
    </div>
  );
};

export { Landing };
