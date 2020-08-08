import { h } from "preact";
import { useEffect } from "react";
import { useAlert } from "../../core/alert";

let timeout: any = null;

export function Alert() {
  const alert = useAlert();

  // Hide alert after 8 seconds
  useEffect(() => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      alert.hide();
      timeout = null;
    }, 8000);
  }, [alert]);

  let alertColor = "bg-blue-500";
  if (alert.data.type === "success") alertColor = "bg-green-500";
  if (alert.data.type === "error") alertColor = "bg-red-600";

  return (
    <div
      style={{ zIndex: 4 }}
      className={` ${
        alert.data.show ? "" : "hidden"
      } text-center right-0  fixed top-0 mt-8 mr-8 justify-center flex
    `}
    >
      <div className={`${alertColor} py-4 pl-5 pr-16 rounded-lg text-white`}>
        <span className="text-lg">{alert.data.text}</span>
        <button
          className="absolute top-0 bottom-0 right-0 flex items-center pr-2"
          onClick={() => alert.hide()}
        >
          <svg
            className="fill-current h-6 w-6 text-white"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
