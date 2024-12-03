"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/public/context/LanguageContext";
import { translations } from "@/public/context/translations";
const Page = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const [formEle, setFormEle] = useState({
    name: "",
    email: "",
    number: "",
    title: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormEle({ ...formEle, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formEle),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSuccessMessage(data.message);
          setErrorMessage("");
        } else {
          setErrorMessage(data.message);
          setSuccessMessage("");
        }
      })
      .catch((err) => {
        setErrorMessage("Something went wrong. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="min-h-screen pt-[200px]">
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{
                direction: language === "ar" ? "rtl" : "ltr",
              }}
            >
              {t.contactUs}
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                <span>{t.Location}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-2 text-blue-600" />
                <span>+213 555450155</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-2 text-blue-600" />
                <div className="">contact@visionwebdevs.tech</div>
              </div>
              <div className="flex space-x-4">
                <a
                  href={
                    "https://www.facebook.com/profile.php?id=100089629668542"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href={"https://www.instagram.com/arriache_travels"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
            <p
              className="mt-6 text-gray-700"
              style={{
                direction: language === "ar" ? "rtl" : "ltr",
              }}
            >
              {t.About_Description}
            </p>
          </div>

          {/* Contact Form */}
          <div
            className="bg-white rounded-lg shadow-md p-6"
            style={{
              direction: language === "ar" ? "rtl" : "ltr",
            }}
          >
            <h2 className="text-2xl font-semibold mb-4">{t.sendMessage}</h2>

            {successMessage && (
              <p className="text-green-600 mb-4" aria-live="polite">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="text-red-600 mb-4" aria-live="polite">
                {errorMessage}
              </p>
            )}

            {loading ? (
              <p className="text-blue-600">Sending your message...</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formEle.name}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 block w-full rounded-md border shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formEle.email}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 block w-full rounded-md border shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t.number}
                  </label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={formEle.number}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 block w-full rounded-md border shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t.subject}
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formEle.title}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 block w-full rounded-md border shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formEle.message}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 block w-full rounded-md border shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    {t.send}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="mt-8 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3208.7269371769776!2d5.6464099!3d36.4641548!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f30165a4f531ff%3A0x8b77e9c836842500!2sArRiache%20Travel%20Services!5e0!3m2!1sen!2sdz!4v1733252679153!5m2!1sen!2sdz"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default Page;
