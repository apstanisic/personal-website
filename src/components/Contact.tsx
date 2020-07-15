/**
 * Used for netlify forms.
 * Taken from
 * https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-a-stateful-react-form
 * Most of form handling in this file is from that url.
 *
 */
import { h } from "preact";
import { useContext, useState } from "preact/hooks";
import { useT } from "../core/i18n";
import { ThemeContext } from "../core/theme";
import { UiContext } from "../core/ui";
import Alert from "./common/Alert";
import Button from "./common/Button";
import Section from "./common/Section";

/**
 * Netlify does not accept json. Pass pojo to this function
 */
const encode = (data: Record<string, any>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

/**
 * Contact section
 */
export function Contact() {
  const { theme } = useContext(ThemeContext);
  const { changeAlert } = useContext(UiContext);
  const t = useT();

  // css classes for input fields
  const classes = `shadow-xl border-gray-200 appearance-none border rounded w-full
                       py-3 px-4 bg-white text-gray-800 text-lg leading-tight `;

  // Form fields
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: Event) {
    e.preventDefault();

    const res = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Contact form", ...form }),
    });
    try {
      if (res.status > 299 || res.status < 200) throw new Error();

      changeAlert({
        show: true,
        type: "success",
        text: t("contact.sentSuccess"),
      });
    } catch (error) {
      changeAlert({
        show: true,
        type: "error",
        text: t("contact.sentError"),
      });

      console.error(error);
    } finally {
      setForm({ email: "", name: "", message: "" });
    }
  }

  function handleChange(e: Event) {
    const { name, value } = e.currentTarget as any;
    setForm({ ...form, ...{ [name]: value } });
  }

  return (
    <Section bg={theme === "light" ? "bg-gray-200" : ""} id="contact">
      <div className=" mx-auto">
        <div className="text-3xl text-center">
          <span>{t("contact.title")}</span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col px-3 pb-3 pt-2"
          method="POST"
          data-netlify="true"
          name="Contact form"
          data-netlify-honeypot="bot-protection"
        >
          <div className="h-0 w-0 overflow-hidden">
            <label>
              {t("contact.honeypot")}
              <input name="bot-protection" />
            </label>
          </div>
          {/* For netlify forms */}
          <input name="form-name" value="Contact form" hidden />
          <label className="py-2 md:flex justify-around">
            <div className="text-xl p-1 pr-5 md:w-1/4 lg:w-1/5 md:text-right">
              <span>{t("contact.name")}</span>
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
              <span>{t("contact.email")}</span>
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
              <span>{t("contact.message")}</span>
            </div>
            <textarea
              name="message"
              required
              value={form.message}
              className={classes}
              onChange={handleChange}
              rows={8}
              placeholder={t("contact.placeholder")}
              style={{ resize: "none" }}
            />
            <div className="lg:w-1/5" />
          </label>
          <Button className={`text-xl `} type="submit">
            <span>{t("contact.send")}</span>
          </Button>
        </form>
        <Alert />
      </div>
    </Section>
  );
}
