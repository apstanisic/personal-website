/**
 * Used for netlify forms.
 * Taken from
 * https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-a-stateful-react-form
 * Most of form handling in this file is from that url.
 *
 */
import { h } from "preact";
import { useState } from "preact/hooks";
import { T } from "../core/i18n";
import Button from "./ui/Button";
import { ThemeState } from "../core/state";
import Section from "./ui/Section";

/**
 * Netlify does not accept json. Pass pojo to this function
 */
const encode = (data: Record<string, any>) =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

/**
 * Contact section
 * @Todo Optional chaining not working with preact build. Try again in couple of
 * months if it's fixed. Last checked on March 2020.
 */
export default function Contact() {
  const { theme } = ThemeState.useContainer();
  /** Css classes for input fields */
  const classes = `shadow-xl border-gray-200 appearance-none border rounded w-full
                       py-3 px-4 bg-white text-gray-800 text-lg leading-tight `;

  /** Form state */
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: Event) {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => alert("success form submit"))
      .catch(error => alert("error form submit"));
  }

  function handleChange(e: Event) {
    const { name, value } = e.currentTarget as any;
    setForm({ ...form, ...{ [name]: value } });
  }

  return (
    <Section bg={theme === "light" ? "bg-gray-200" : ""} id="contact">
      <div className=" mx-auto">
        <div className="text-3xl text-center">
          <T.span text="contact.title" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col px-3 pb-3 pt-2"
          method="POST"
          data-netlify="true"
          name="contact"
        >
          {/* For netlify forms */}
          <input name="form-name" value="contact" hidden />
          <label className="py-2 md:flex justify-around">
            <div className="text-xl p-1 pr-5 md:w-1/4 lg:w-1/5 md:text-right">
              <T.span text="contact.name" />
            </div>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              value={form.name}
              className={classes}
              placeholder="Petar Petrovic"
            />
            <div className="lg:w-1/5" />
          </label>
          <label className="py-2 md:flex ">
            <div className="text-xl p-1 pr-5 md:w-1/4 lg:w-1/5  md:text-right">
              <T.span text="contact.email" />
            </div>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={form.email}
              className={classes}
              placeholder="petar@example.com"
            />
            <div className="lg:w-1/5" />
          </label>
          <label className="py-2 md:flex ">
            <div className="text-xl p-1 pr-5 md:w-1/4 lg:w-1/5  md:text-right">
              <T.span text="contact.message" />
            </div>
            <textarea
              name="message"
              required
              value={form.message}
              className={classes}
              onChange={handleChange}
              rows={8}
              placeholder={T.translate("contact.placeholder")}
              style={{ resize: "none" }}
            />
            <div className="lg:w-1/5" />
          </label>
          <Button className="text-xl" type="submit">
            <T.span text="contact.send" />
          </Button>
        </form>
      </div>
    </Section>
  );
}
