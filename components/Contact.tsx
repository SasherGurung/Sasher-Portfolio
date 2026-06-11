"use client";

import { dm_mono } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import { LuMail, LuMapPin, LuSend } from "react-icons/lu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import { platforms } from "@/src/data/platforms";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill all the required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(
        "https://formspree.io/f/mkoavwqk",
        {
          name,
          email,
          message,
        },
        {
          headers: {
            Accept: "application/json",
          },
        },
      );

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Try again.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`scroll-mt-30 bg-black mt-30 text-white ${dm_mono.className} min-h-screen`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-center text-3xl font-extrabold tracking-[0.4em] text-gray-400">
            CONTACT ME
          </h1>
          <h2 className="text-2xl mt-2 font-semibold">
            Let&apos;s build something great together
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/40 backdrop-blur">
            <h3 className="text-2xl font-semibold text-white">
              Let&apos;s Connect
            </h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
              I&apos;m an aspiring frontend developer looking for meaningful
              opportunities to create beautiful, user-focused experiences.
            </p>

            <div className="mt-3 space-y-1">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/70 p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
                <LuMail className="h-5 w-5 text-cyan-400 font-bold" />
                <span className="text-sm text-zinc-300 hover:text-white">
                  sashergrg602@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/70 p-4 hover:scale-105 transition-all duration-300 cursor-pointer">
                <LuMapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-sm text-zinc-300 hover:text-white">
                  Nepal, Pokhara
                </span>
              </div>
            </div>

            <h1 className="text-xl font-semibold text-white p-3">
              Connect With Me
            </h1>

            <div className="flex flex-wrap gap-3 pt-2">
              {platforms.map((platform, index) => (
                <Link
                  href={platform.link}
                  key={index}
                  className={`flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:bg-white/10 hover:scale-[1.03] transition ${platform.hoverColor}`}
                >
                  <span className="text-lg">
                    <platform.icon />
                  </span>
                  <span>{platform.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <Card className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 shadow-2xl shadow-black/40">
            <CardHeader className="px-0 pb-4">
              <CardTitle className="text-2xl font-semibold text-white">
                Send a Message
              </CardTitle>
            </CardHeader>

            <CardContent className="px-0">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-zinc-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-gray-200 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-zinc-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-gray-200 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here"
                    className="min-h-36 w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-gray-200 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer gap-2 rounded-xl bg-white p-5 text-sm font-semibold text-black hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <LuSend className="h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
