const validateInputs = () => {};

export default function SignUpForm() {
  return (
    <div className="md:max-w-2xl mx-auto md:grid md:grid-cols-1 md:gap-6">
      <div className="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="First name"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Last name"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="given-name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Username"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <input
                    type="email"
                    name="email-address"
                    id="email-address"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address..."
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    required
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-left sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
