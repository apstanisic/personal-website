import { h } from 'preact';

const classes = `shadow-xl border-gray-200 appearance-none border rounded w-full
                 py-3 px-4 bg-white text-gray-800 text-lg leading-tight `;

export default function Contact() {
  return (
    <div className="w-full bg-blue-100">
      <div className="container mx-auto lg:w-3/4">
        <div className="text-4xl text-center border-t pt-5">
          Kontaktiraj me{' '}
        </div>
        <form className="flex flex-col p-3">
          <label className="py-2 md:flex ">
            <div class="text-xl p-1 pr-5 md:w-1/3 md:text-right">Ime</div>
            <input
              type="text"
              required
              className={classes}
              placeholder="Petar Petrovic"
            />
          </label>
          <label className="py-2 md:flex ">
            <div className="text-xl p-1 pr-5 md:w-1/3  md:text-right">
              Email
            </div>
            <input
              type="email"
              required
              className={classes}
              placeholder="petar@example.com"
            />
          </label>
          <label className="py-2 md:flex ">
            <div className="text-xl p-1 pr-5 md:w-1/3  md:text-right">
              Poruka
            </div>
            <textarea
              required
              className={classes}
              rows={8}
              placeholder="Vasa poruka..."
            />
          </label>
          <button
            className={`
          bg-green-700 hover:bg-green-800 text-gray-100 my-2 w-64 mx-auto
           font-semibold py-2 px-4 border border-gray-400 rounded shadow
        `}
          >
            Posalji poruku
          </button>
        </form>
      </div>
    </div>
  );
}
