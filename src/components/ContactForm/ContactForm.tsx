function ContactForm() {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="text-3xl text-gray-500 my-10">Contact us</h2>
      </div>
      <div className="bg-green-400 flex justify-center px-4 py-10">
        <form className="w-full max-w-3xl">
          <div className="flex w-full">
            <div className="flex flex-col flex-1 m-3">
              <label
                htmlFor="first_name"
                className="uppercase text-xs text-gray-700 font-bold"
              >
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="Jane"
                className="bg-white rounded px-3 py-4 my-2 w-full"
              />
              <p className="text-sm italic text-green-700">
                Please fill out this filed
              </p>
            </div>
            <div className="flex flex-col flex-1 m-3">
              <label
                htmlFor="last_name"
                className="uppercase text-xs text-gray-700 font-bold"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Ford"
                className="bg-white rounded px-3 py-4 my-2 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 m-3">
            <label
              htmlFor="email"
              className="uppercase text-xs text-gray-700 font-bold"
            >
              e-mail
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="123@123.com"
              className="bg-white rounded px-3 py-4 my-2 w-full"
            />
          </div>
          <div className="flex flex-col flex-1 m-3">
            <label
              htmlFor="email"
              className="uppercase text-xs text-gray-700 font-bold"
            >
              message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="message"
              className="bg-white rounded px-3 py-4 my-2 w-full h-48"
            />
          </div>
          <button className="m-3 px-5 py-2 bg-green-700 w-max rounded text-white shadow-2xl">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
