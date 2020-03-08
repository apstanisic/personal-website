import { h } from "preact";
import { useState } from "preact/hooks";
import { T } from "../core/i18n";
import Button from "./ui/Button";
import { ThemeState } from "../core/state";
import Section from "./ui/Section";

const classes = `shadow-xl border-gray-200 appearance-none border rounded w-full
                 py-3 px-4 bg-white text-gray-800 text-lg leading-tight `;

const formUrl = "https://formspree.io/aleksandar@tuta.io";

export default function Contact() {
  const { theme } = ThemeState.useContainer();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: Event) {
    e.preventDefault();
    try {
      const res = await fetch(formUrl, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          Accept: "application/json",
        },
      });
      await res.json();
      alert("Success submiting form");
    } catch (error) {
      alert("Error submiting form");
    }
  }

  function handleChange(e: Event) {
    // @ts-check // Preact doesn't have best types
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
          action={formUrl}
          method="POST"
        >
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
