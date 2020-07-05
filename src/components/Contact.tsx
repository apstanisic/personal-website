/**
 * Used for netlify forms.
 * Taken from
 * https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-a-stateful-react-form
 * Most of form handling in this file is from that url.
 *
 */
import { h } from "preact";
import { useContext, useState } from "preact/hooks";
import { Tr } from "../core/i18n";
import { ThemeContext } from "../core/theme";
import { UiContext } from "../core/ui";
import Alert from "./ui/Alert";
import Button from "./ui/Button";
import Section from "./ui/Section";

/**
 * Netlify does not accept json. Pass pojo to this function
 */
const encode = (data: Record<string, any>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

/**
 * Contact section
 * @Todo Optional chaining not working with preact build. Try again in couple of
 * months if it's fixed. Last checked on March 2020.
 */
export function Contact() {
  const { theme } = useContext(ThemeContext);
  const { changeAlert } = useContext(UiContext);

  /** Css classes for input fields */
  const classes = `shadow-xl border-gray-200 appearance-none border rounded w-full
                       py-3 px-4 bg-white text-gray-800 text-lg leading-tight `;

  /** Form state */
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  /** @Todo When optional chaining works in preact build, improve this function */
  async function handleSubmit(e: Event) {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      // Success alert
      .then(() =>
        changeAlert({
          show: true,
          type: "success",
          text: Tr("contact.sentSuccess"),
        }),
      )
      // Error alert
      .catch((error) => {
        changeAlert({
          show: true,
          type: "error",
          text: Tr("contact.sentError"),
        });
        console.error(error);
      })
      .finally(() => setForm({ email: "", name: "", message: "" }));
  }

  function handleChange(e: Event) {
    const { name, value } = e.currentTarget as any;
    setForm({ ...form, ...{ [name]: value } });
  }

  return (
    <Section bg={theme === "light" ? "bg-gray-200" : ""} id="contact">
      <div className=" mx-auto">
        <div className="text-3xl text-center">
          <span>{Tr("contact.title")}</span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col px-3 pb-3 pt-2"
          method="POST"
          data-netlify="true"
          name="contact"
          netlify-honeypot="bot-protection"
        >
          <p class="hidden">
            <label>
              {Tr("contact.honeypot")}
              <input name="bot-protection" />
            </label>
          </p>
          {/* For netlify forms */}
          <input name="form-name" value="contact" hidden />
          <label className="py-2 md:flex justify-around">
            <div className="text-xl p-1 pr-5 md:w-1/4 lg:w-1/5 md:text-right">
              <span>{Tr("contact.name")}</span>
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
              <span>{Tr("contact.mail")}</span>
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
              <span>{Tr("contact.message")}</span>
            </div>
            <textarea
              name="message"
              required
              value={form.message}
              className={classes}
              onChange={handleChange}
              rows={8}
              placeholder={Tr("contact.placeholder")}
              style={{ resize: "none" }}
            />
            <div className="lg:w-1/5" />
          </label>
          <Button className={`text-xl `} type="submit">
            <span>{Tr("contact.send")}</span>
          </Button>
        </form>
        <Alert />
      </div>
    </Section>
  );
}
