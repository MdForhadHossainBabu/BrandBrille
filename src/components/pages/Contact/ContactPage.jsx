import ContactButton from "./ContactButton";

export const ContactPage = () => {
  return (
    <div className="bg-black text-white/90 py-24 lg:pl-52 pl-24 lg:pr-36 pr-16 h-full">
      {/* heading */}
      <h1 className="text-7xl py-4">Contact</h1>

      <div className="grid grid-cols-4 gap-2 mb-12">
        <div className="w-36 h-24 rounded-full mx-auto bg-gradient-to-r from-[#EBCEB5] to-yellow-400"></div>
        <div className="col-span-3 p-2">
          <h1 className="text-4xl mb-10">
            Napište nám a společně <br /> necháme vaši značku zazářit.
          </h1>

          {/* form input field */}
          <div>
            {/* name field */}
            <div className="flex flex-col space-y-1 font-aeonik">
              <label htmlFor="name">Jméno a příjmení</label>
              <input
                type="text"
                placeholder="Klara"
                className="w-full border-0 border-b-2 border-gray-500 bg-transparent focus:border-white py-2 focus:outline-none text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-0 my-5 font-aeonik">
              <div className="flex flex-col space-y-1">
                <label htmlFor="name">Název vaší společnosti</label>
                <input
                  type="text"
                  placeholder="Ex. Tesla Inc"
                  className="w-full border-0 border-b-2 border-gray-500 bg-transparent focus:border-white py-2 focus:outline-none text-white"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="name">E-mail</label>
                <input
                  type="text"
                  placeholder="you@example.com"
                  className="w-full border-0 border-b-2 border-gray-500 bg-transparent focus:border-white py-2 focus:outline-none text-white"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="message">Text vaší zprávy</label>
              <textarea className="w-full border-0 border-b-2 border-gray-500 bg-transparent focus:border-white py-2 focus:outline-none text-white resize-none"></textarea>
       </div>
       <div className="my-12">
        <ContactButton/>
       </div>
          </div>
        </div>
      </div>
    </div>
  );
}
