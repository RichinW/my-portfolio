"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { en } from "@/data/i18n/en";
import { pt } from "@/data/i18n/pt";
import { useEffect, useState } from "react";

const dict = { en, pt };

export default function Home() {
  const [formEmail, setFormEmail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [locale, setLocale] = useState<"en" | "pt">("en");
  const [isFading, setIsFading] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = dict[locale];
  const to = "richardwcamargo@gmail.com";
  const subject = encodeURIComponent(formEmail.subject);
  const body = encodeURIComponent(
    `Olá, meu nome é ${formEmail.name}.\nEmail: ${formEmail.email}\n\n${formEmail.message}\n\n(enviado pelo seu portfólio)`,
  );

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  function toggleLanguage() {
    setIsFading(true);

    setTimeout(() => {
      setLocale(locale === "pt" ? "en" : "pt");
      setIsFading(false);
    }, 200);
  }

  return (
    <>
      <div
        className={`fixed px-3 md:px-6 lg:px-10 z-100 top-0 flex bg-[#111]/10 transition-all left-0 w-screen h-12 lg:h-20 justify-between font-google-sans items-center duration-300
    ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
      >
        <p className="text-white text-lg md:text-xl lg:text-2xl">RichardWOC</p>
        <div className="flex items-center gap-8 text-xl text-white">
          <a
            className="bg-transparent lg:block hidden text-lg hover:bg-transparent font-medium px-3"
            href="#hero"
          >
            {t.header[0]}
          </a>
          <a
            className="bg-transparent lg:block hidden text-lg hover:bg-transparent font-medium px-3"
            href="#about"
          >
            {t.header[1]}
          </a>
          <a
            className="bg-transparent lg:block hidden text-lg hover:bg-transparent font-medium px-3"
            href="#case"
          >
            {t.header[2]}
          </a>
          <a
            className="bg-transparent lg:block hidden text-lg hover:bg-transparent font-medium px-3"
            href="#contact"
          >
            {t.header[3]}
          </a>
          <Button
            onClick={() => toggleLanguage()}
            className="bg-transparent cursor-pointer hover:bg-transparent lg:text-lg text-sm flex items-center gap-2"
          >
            <p>{t.header[4]}</p>
            {locale === "pt" ? (
              <img className="lg:w-6 w-4" src="/flags/br.svg" alt="Brazil Flag" />
            ) : (
              <img className="lg:w-6 w-4" src="/flags/us.svg" alt="US Flag" />
            )}
          </Button>
          <a
            href="https://github.com/RichinW"
            className="border-2 bg-transparent lg:flex hidden hover:bg-[#111]/50 border-white/30 cursor-pointer p-2 items-center text-lg justify-center gap-2 rounded-md"
          >
            <i className="fa-brands fa-github"></i>
            <p>{t.header[5]}</p>
          </a>
        </div>
      </div>
      <div
        id="hero"
        className={`flex scroll-mt-20 min-h-screen flex-col transition-all items-center justify-center font-google-sans bg-[#111] overflow-x-hidden ${
          isFading ? "opacity-90 blur-in-2xl" : "opacity-100"
        }`}
      >
        <div className="w-full h-screen relative justify-between flex items-center">
          <div className="absolute inset-0 bg-linear-to-r from-[#111111] to-[#111111]/90 z-0"></div>
          <div className="max-w-4xl pl-6 md:pl-16 lg:pl-32 flex flex-col gap-5 z-10">
            <div className="flex flex-col w-full text-white">
              <p className="text-4xl md:text-6xl lg:text-7xl">
                {t.hero.title1.start}{" "}
                <span className="text-[#6983F7]">
                  {t.hero.title1.highlight}
                </span>
                {t.hero.title1.end}
              </p>
              <p className="text-4xl md:text-6xl lg:text-7xl">
                {t.hero.title2.start}{" "}
                <span className="text-[#6983F7]">
                  {t.hero.title2.highlight}
                </span>{" "}
                {t.hero.title2.end}
              </p>
            </div>
            <p className="lg:text-xl md:text-lg text-sm text-white/80">
              {t.hero.description}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="#case"
                className="lg:px-6 md:px-4 px-2 md:py-3 py-2 lg:py-4 lg:rounded-md rounded-sm text-white font-medium bg-[#6983F7] hover:bg-[#5a70e0] lg:text-lg md:text-md text-sm"
              >
                {t.hero.button1}
              </a>
              <a
                href="#contact"
                className="text-white font-medium lg:text-lg md:text-md text-sm"
              >
                {t.hero.button2}
              </a>
            </div>
          </div>
          <img
            src="/programming-vibes.jpg"
            alt="Programming Vibes"
            className="h-screen object-cover w-1/4 lg:blur-sm blur-md"
          />
        </div>
        <div
          id="about"
          className="h-screen scroll-mt-20 flex justify-between items-center lg:pl-32 md:pl-16 lg:pr-52 w-full bg-[#111] relative"
        >
          <div className="bg-white/60 md:block hidden size-60 rounded-full blur-3xl absolute top-1/2 right-0 transform translate-x-32 -translate-y-1/2"></div>
          <div className="text-white lg:z-0 z-10 pl-6 lg:max-w-full max-w-72">
            <p className="text-4xl md:text-6xl lg:text-7xl border-b-2 border-[#6983F7] inline-block p-2">
              {t.about.title}
            </p>
            <div className="max-w-xl lg:text-xl md:text-lg text-sm text-white/80 flex flex-col gap-4 mt-8">
              {t.about.texts.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
          <div className="lg:h-full lg:w-auto size-full inset-0 absolute lg:relative">
            <div className="h-full lg:from-[#111]/70 lg:to-[#111]/70 bg-linear-to-r from-[#111111]/90 to-[#111111]/80 absolute inset-0 "></div>
            <img className="h-full object-cover" src="/foto-minha-v2.jpeg" alt="" />
          </div>
        </div>
        <div
          id="case"
          className="h-screen scroll-mt-20 flex justify-center flex-col items-center w-full bg-linear-to-br from-[#282828] to-[#111] relative"
        >
          <div className="text-white">
            <p className="lg:text-[200px] md:text-8xl text-7xl text-center font-black italic bg-linear-to-r from-white/30 to-[#242424]/50 bg-clip-text text-transparent">
              Viva Pay
            </p>
            <div className="text-white/80 flex justify-between items-center">
              <div className="w-1/10 lg:w-1/4 h-0.5 bg-linear-to-r from-white/30 to-[#242424]/50" />
              <p className="italic lg:text-3xl md:text-xl text-md bg-linear-to-r from-white/30 to-[#333333]/50 bg-clip-text text-transparent">
                {t.case.title}
              </p>
              <div className="w-1/10 lg:w-1/4 h-0.5 bg-linear-to-r from-white/20 to-[#242424]/50" />
            </div>
          </div>
          <div className="bg-linear-to-r lg:pt-30 md:pt-20 pt-10 flex justify-center items-center gap-4 from-white/30 to-[#3a3a3a]/60 bg-clip-text text-transparent italic lg:text-xl md:text-lg text-sm">
            <p>Bauru</p>
            <div className="w-4 md:h-0.5 h-[0.1px]  bg-linear-to-r from-white/30 to-[#242424]/50" />
            <p>2024</p>
          </div>
        </div>
        <div className="h-auto flex flex-col px-6 md:px-16 lg:px-32 lg:py-20 md:py-10 py-4 gap-20 justify-center items-center w-full bg-[#111] relative">
          <div className="flex-1 md:flex-row flex-col  flex justify-between">
            <div className="flex lg:max-w-3/10  flex-col justify-between">
              <div className="flex flex-col lg:gap-8 gap-4 lg:mb-0 mb-10">
                <p className="text-white lg:text-6xl md:text-5xl text-4xl font-medium">
                  {t.project.options[0].title.start}{" "}
                  <span className="text-[#6983F7]">
                    {t.project.options[0].title.highlight}
                  </span>
                </p>
                <p className="text-white/80 lg:text-xl md:text-lg text-sm">
                  {t.project.options[0].text}
                </p>
              </div>
              <div className="flex flex-col lg:gap-8 gap-4 lg:mb-0 mb-10">
                <p className="text-white lg:text-6xl md:text-5xl text-4xl font-medium">
                  {t.project.options[1].title.start}{" "}
                  <span className="text-[#6983F7]">
                    {t.project.options[1].title.highlight}
                  </span>
                </p>
                <p className="text-white/80 lg:text-xl md:text-lg text-sm">
                  {t.project.options[1].text}
                </p>
              </div>
            </div>
            <div className="flex lg:max-w-3/10 flex-col gap-6 lg:mb-0 mb-10">
              <div className="flex flex-col lg:gap-8 gap-4">
                <p className="text-white lg:text-6xl md:text-5xl text-4xl font-medium">
                  {t.project.architecture.title}
                </p>
                <p className="text-white/80 lg:text-xl md:text-lg text-sm">
                  {t.project.architecture.description}
                </p>
              </div>
              {t.project.architecture.texts.map((text, index) => (
                <p
                  key={index}
                  className="block text-white/80 lg:text-xl md:text-lg text-sm"
                >
                  {text}
                </p>
              ))}
            </div>
            <div className="flex lg:max-w-3/10 flex-col gap-8 lg:mb-0 mb-10">
              <div className="flex flex-col gap-3">
                <p className="text-white lg:text-6xl md:text-5xl text-4xl font-medium">
                  {t.project.stack.title}
                </p>
              </div>
              {t.project.stack.technologies.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center lg:gap-3 gap-1">
                    <i className={`fa-solid ${item.icon} text-[#6983F7]`}></i>
                    <p className="text-white lg:text-xl md:text-lg text-sm">[ {item.name} ]</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-white/80 text-lg">
                        {tech}{" "}
                        {techIndex < item.technologies.length - 1 ? "+" : ""}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-8 lg:max-w-1/3">
              <div className="text-white flex items-center gap-3 lg:text-6xl md:text-5xl text-4xl font-medium">
                <p>{t.project.options[2].title.start}</p>
                <i className="fa-solid fa-star text-[#6983F7] lg:text-5xl md:text-4xl text-3xl"></i>
              </div>
              <p className="text-white/80 lg:text-xl md:text-lg text-sm">
                {t.project.options[2].text}
              </p>
            </div>
          </div>
          <p className="absolute right-0 lg:bottom-5 bottom-55 lg:text-[250px] md:text-[200px] text-[80px] md:translate-x-25 translate-x-8 font-black italic bg-linear-to-r from-white/20 to-[#262626]/20 bg-clip-text text-transparent">
            Viva Pay
          </p>
        </div>
        <div
          id="contact"
          className="flex md:flex-row flex-col-reverse scroll-mt-20 md:h-screen lg:px-32 md:px-16 px-6 overflow-hidden lg:py-20 md:py-10 py-6 lg:gap-20 gap-10 justify-between items-start w-full bg-[#111] relative"
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-8">
              <p className="text-white lg:text-3xl md:text-2xl text-xl">
                {t.contact.contact_info.title}
              </p>
              <div className="flex justify-start items-start gap-3">
                <div className="lg:size-20 size-12 bg-linear-to-tr flex justify-center items-center from-[#282828] to-[#191919] rounded-md shadow-md">
                  <i className="fa-regular fa-envelope text-[#6983F7] lg:text-3xl md:text-2xl text-xl"></i>
                </div>
                <div className="flex flex-col">
                  <p className="text-white/40 lg:text-xl md:text-lg text-sm">
                    {t.contact.contact_info.infos[0]}
                  </p>
                  <p className="text-white/80 lg:text-xl md:text-lg text-sm">
                    richardwcamargo@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-3">
                <div className="lg:size-20 size-12 bg-linear-to-tr flex justify-center items-center from-[#282828] to-[#191919] rounded-md shadow-md">
                  <i className="fa-solid fa-phone text-[#6983F7] lg:text-3xl md:text-2xl text-xl"></i>
                </div>
                <div className="flex flex-col">
                  <p className="text-white/40 lg:text-xl md:text-lg text-sm">
                    {t.contact.contact_info.infos[1]}
                  </p>
                  <p className="text-white/80 lg:text-xl md:text-lg text-sm">+55 (14) 99646-3458</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-white lg:text-3xl md:text-2xl text-xl">{t.contact.social_info}</p>
              <div className="flex justify-start items-start gap-4">
                <a href="https://github.com/RichinW">
                  <div className="lg:size-20 size-12 bg-linear-to-br flex justify-center rounded-full items-center from-[#282828] to-[#191919] shadow-md">
                    <i className="fa-brands fa-github text-[#6983F7] lg:text-3xl md:text-2xl text-xl"></i>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/richard-camargo-483079328/">
                  <div className="lg:size-20 size-12 bg-linear-to-br flex justify-center rounded-full items-center from-[#282828] to-[#191919] shadow-md">
                    <i className="fa-brands fa-linkedin-in text-[#6983F7] lg:text-3xl md:text-2xl text-xl"></i>
                  </div>
                </a>
                <a href="https://www.instagram.com/walacerichard/">
                  <div className="lg:size-20 size-12 bg-linear-to-br flex justify-center rounded-full items-center from-[#282828] to-[#191919] shadow-md">
                    <i className="fa-brands fa-instagram text-[#6983F7] lg:text-3xl md:text-2xl text-xl"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 w-full h-full bg-linear-to-r from-[#282828] to-[#191919] rounded-lg lg:py-8 py-4 lg:px-12 px-6 flex flex-col lg:gap-4 gap-2">
            <p className="text-white lg:text-5xl md:text-4xl text-2xl font-medium">
              {t.contact.form.title.start}{" "}
              <span className="text-[#6983F7]">
                {t.contact.form.title.highlight}
              </span>
            </p>
            <Input
              className="outline-none border-none rounded-sm lg:h-12 h-10 bg-linear-to-r from-[#383838] to-[#212121] lg:p-4 p-2 text-white text-md lg:text-lg lg:placeholder:text-lg placeholder:text-md"
              placeholder={t.contact.form.inputs[0]}
              value={formEmail.name}
              onChange={(e) =>
                setFormEmail((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <Input
              className="outline-none border-none rounded-sm lg:h-12 h-10 bg-linear-to-r from-[#383838] to-[#212121] lg:p-4 p-2 text-white text-md lg:text-lg lg:placeholder:text-lg placeholder:text-md"
              placeholder={t.contact.form.inputs[1]}
              value={formEmail.email}
              onChange={(e) =>
                setFormEmail((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
            />
            <Input
              className="outline-none border-none rounded-sm lg:h-12 h-10 bg-linear-to-r from-[#383838] to-[#212121] lg:p-4 p-2 text-white text-md lg:text-lg lg:placeholder:text-lg placeholder:text-md"
              placeholder={t.contact.form.inputs[2]}
              value={formEmail.subject}
              onChange={(e) =>
                setFormEmail((prev) => ({ ...prev, subject: e.target.value }))
              }
            />
            <Textarea
              className="outline-none border-none rounded-sm lg:h-12 lg:flex-1 bg-linear-to-r from-[#383838] to-[#212121] lg:p-4 p-2 text-white text-md lg:text-lg lg:placeholder:text-lg placeholder:text-md"
              placeholder={t.contact.form.inputs[3]}
              value={formEmail.message}
              onChange={(e) =>
                setFormEmail((prev) => ({ ...prev, message: e.target.value }))
              }
            ></Textarea>
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${to}&su=${subject}&body=${body}`}
              className="bg-[#6983F7] flex justify-center items-center lg:p-3 transition-colors hover:bg-[#5a70e0] text-white rounded-sm lg:h-12 h-10 w-full"
            >
              {t.contact.form.button}
            </a>
          </div>
          <div className="bg-white/60 md:block hidden size-60 rounded-full blur-3xl absolute bottom-0 left-2/12 transform -translate-x-32 translate-y-30"></div>
        </div>
      </div>
    </>
  );
}
