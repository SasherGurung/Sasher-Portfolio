import { dm_mono } from "@/app/fonts";
import { Button } from "@/components/ui/button";
import { LuMail, LuMapPin, LuSend } from "react-icons/lu";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, type ChangeEvent, type FormEvent } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { platforms } from "@/src/data/platforms";
import { useContactStore } from "@/lib/stores/contactStore";
import { contactSchema } from "@/app/schemas/contactSchema";

function ContactPage() {
  const { postContact } = useContactStore();
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

    const result = contactSchema.safeParse({
      name,
      email,
      message,
    });

    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }

    setIsSubmitting(true);

    try {
      await postContact({ name, email, message });
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`bg-black text-white ${dm_mono.className} min-h-screen flex justify-center items-center px-4 sm:px-6 md:px-10 py-10`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="text-center">
          <h1 className="text-center text-2xl sm:text-3xl font-extrabold tracking-[0.3em] sm:tracking-[0.4em] text-gray-400">
            CONTACT ME
          </h1>
          <h2 className="text-lg sm:text-2xl mt-2 font-semibold">
            Let&apos;s build something great together
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-2xl shadow-black/40 backdrop-blur">
            <h3 className="text-xl sm:text-2xl font-semibold text-white text-center">
              Let&apos;s Connect
            </h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
              I&apos;m an aspiring frontend developer looking for meaningful
              opportunities to create beautiful, user-focused experiences.
            </p>

            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/70 p-4 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <LuMail className="h-5 w-5 text-cyan-400 font-bold" />
                <span className="text-sm sm:text-base text-zinc-300 hover:text-white">
                  sashergrg602@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/70 p-4 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                <LuMapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-sm sm:text-base text-zinc-300 hover:text-white">
                  Nepal, Pokhara
                </span>
              </div>
            </div>

            <h1 className="text-lg sm:text-xl font-semibold text-white p-3 text-center">
              Connect With Me
            </h1>

            <div className="flex flex-wrap gap-3 pt-2 justify-center sm:justify-start">
              {platforms.map((platform, index) => (
                <Link
                  href={platform.link}
                  key={index}
                  className={`flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm sm:text-base text-gray-300 hover:bg-white/10 hover:scale-[1.03] transition ${platform.hoverColor}`}
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
              <CardTitle className="text-xl sm:text-2xl font-semibold text-white">
                Send a Message
              </CardTitle>
            </CardHeader>

            <CardContent className="px-0">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="mb-2 block text-sm text-zinc-300">
                      Your Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm sm:text-base text-white outline-none transition focus:border-gray-200 focus:ring-2 focus:ring-cyan-400/20"
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
                      className="w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm sm:text-base text-white outline-none transition focus:border-gray-200 focus:ring-2 focus:ring-cyan-400/20"
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
                    placeholder="Write your message here..."
                    className="min-h-36 w-full rounded-xl border border-white/10 bg-zinc-900/80 px-4 py-3 text-sm sm:text-base text-white outline-none transition focus:border-gray-200 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer gap-2 rounded-xl bg-white p-4 sm:p-5 text-sm sm:text-base font-semibold text-black hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-70"
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
