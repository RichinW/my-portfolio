"use client"
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
    message: ""
  })
  const [locale, setLocale] = useState<"en" | "pt">("en");
  const [isFading, setIsFading] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = dict[locale];
  const to = "richardwcamargo@gmail.com";
  const subject = encodeURIComponent(formEmail.subject);
  const body = encodeURIComponent(
    `Olá, meu nome é ${formEmail.name}.\nEmail: ${formEmail.email}\n\n${formEmail.message}\n\n(enviado pelo seu portfólio)`
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
      <div className={`fixed px-10 z-10 top-0 transition-all left-0 w-screen h-20 flex justify-between font-google-sans items-center duration-300
    ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
        <p className="text-white text-2xl">RichardWOC</p>
        <div className="flex items-center gap-8 text-xl text-white">
          <a className="bg-transparent text-lg hover:bg-transparent font-medium px-3" href="#hero">{t.header[0]}</a>
          <a className="bg-transparent text-lg hover:bg-transparent font-medium px-3" href="#about">{t.header[1]}</a>
          <a className="bg-transparent text-lg hover:bg-transparent font-medium px-3" href="#case">{t.header[2]}</a>
          <a className="bg-transparent text-lg hover:bg-transparent font-medium px-3" href="#contact">{t.header[3]}</a>
          <Button onClick={() => toggleLanguage()} className="bg-transparent cursor-pointer hover:bg-transparent text-lg flex items-center gap-2"><p>{t.header[4]}</p>{locale === "pt" ? <img className="w-6" src="/flags/br.svg" alt="Brazil Flag" /> : <img className="w-6" src="/flags/us.svg" alt="US Flag" />}</Button>
          <a href="https://github.com/RichinW" className="border-2 bg-transparent hover:bg-[#111]/50 border-white/30 cursor-pointer p-2 flex items-center text-lg justify-center gap-2 rounded-md">
            <i className="fa-brands fa-github"></i>
            <p>{t.header[5]}</p>
          </a>
        </div>
      </div>
      <div id="hero" className={`flex scroll-mt-20 min-h-screen flex-col transition-all items-center justify-center font-google-sans bg-[#111] overflow-x-hidden ${isFading ? "opacity-90 blur-in-2xl" : "opacity-100"
        }`}>
        <div className="w-full h-screen relative justify-between flex items-center">
          <div className="absolute inset-0 bg-linear-to-r from-[#111111] to-[#111111]/90 z-0"></div>
          <div className="max-w-4xl pl-32 flex flex-col gap-5 z-10">
            <div className="flex flex-col w-full text-white">
              <p className="text-7xl">
                {t.hero.title1.start}{" "}
                <span className="text-[#6983F7]">
                  {t.hero.title1.highlight}
                </span>
                {t.hero.title1.end}
              </p>
              <p className="text-7xl">
                {t.hero.title2.start}{" "}
                <span className="text-[#6983F7]">
                  {t.hero.title2.highlight}
                </span>{" "}
                {t.hero.title2.end}
              </p>
            </div>
            <p className="text-xl text-white/80">{t.hero.description}</p>
            <div className="mt-4 flex items-center gap-4">
              <Button className="p-6 bg-[#6983F7] hover:bg-[#5a70e0] text-lg">
                {t.hero.button1}
              </Button>
              <Button className="text-white text-lg bg-transparent">
                {t.hero.button2}
              </Button>
            </div>
          </div>
          <img
            src="/programming-vibes.jpg"
            alt="Programming Vibes"
            className="h-screen object-cover"
          />
        </div>
        <div id="about" className="h-screen scroll-mt-20 flex justify-between items-center pl-32 pr-52 w-full bg-[#111] relative">
          <div className="bg-white/60 size-60 rounded-full blur-3xl absolute top-1/2 right-0 transform translate-x-32 -translate-y-1/2"></div>
          <div className="text-white">
            <p className="text-7xl border-b-2 border-[#6983F7] inline-block p-2">
              {t.about.title}
            </p>
            <div className="max-w-xl text-xl text-white/80 flex flex-col gap-4 mt-8">
              {t.about.texts.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
          <div className="h-full relative">
            <div className="h-full bg-[#111111]/50 absolute inset-0 "></div>
            <img className="h-full" src="/foto-minha-v2.jpeg" alt="" />
          </div>
        </div>
        <div id="case" className="h-screen scroll-mt-20 flex justify-center flex-col items-center pl-32 pr-52 w-full bg-linear-to-br from-[#282828] to-[#111] relative">
          <div className="text-white">
            <p className="text-[200px] font-black italic bg-linear-to-r from-white/30 to-[#242424]/50 bg-clip-text text-transparent">
              Viva Pay
            </p>
            <div className="text-xl text-white/80 flex justify-between items-center gap-8">
              <div className="w-2/10 h-0.5 bg-linear-to-r from-white/30 to-[#242424]/50" />
              <p className="italic text-3xl bg-linear-to-r from-white/30 to-[#333333]/50 bg-clip-text text-transparent">
                {t.case.title}
              </p>
              <div className="w-2/10 h-0.5 bg-linear-to-r from-white/20 to-[#242424]/50" />
            </div>
          </div>
          <div className="bg-linear-to-r pt-30 flex justify-center items-center gap-4 from-white/30 to-[#3a3a3a]/60 bg-clip-text text-transparent italic text-xl">
            <p>Bauru</p>
            <div className="w-4 h-0.5 bg-linear-to-r from-white/30 to-[#242424]/50" />
            <p>2024</p>
          </div>
        </div>
        <div className="h-auto flex flex-col px-32 py-20 gap-20 justify-center items-center w-full bg-[#111] relative">
          <div className="flex-1 flex justify-between">
            <div className="flex max-w-3/10 flex-col justify-between">
              <div className="flex flex-col gap-8">
                <p className="text-white text-6xl font-medium">
                  {t.project.options[0].title.start}{" "}
                  <span className="text-[#6983F7]">
                    {t.project.options[0].title.highlight}
                  </span>
                </p>
                <p className="text-white/80 text-xl">
                  {t.project.options[0].text}
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-white text-6xl font-medium">
                  {t.project.options[1].title.start}{" "}
                  <span className="text-[#6983F7]">
                    {t.project.options[1].title.highlight}
                  </span>
                </p>
                <p className="text-white/80 text-xl">
                  {t.project.options[1].text}
                </p>
              </div>
            </div>
            <div className="flex max-w-3/10 flex-col gap-6">
              <div className="flex flex-col gap-8">
                <p className="text-white text-6xl font-medium">
                  {t.project.architecture.title}
                </p>
                <p className="text-white/80 text-xl">
                  {t.project.architecture.description}
                </p>
              </div>
              {t.project.architecture.texts.map((text, index) => (
                <p key={index} className="block text-white/80 text-xl">
                  {text}
                </p>
              ))}
            </div>
            <div className="flex max-w-3/10 flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p className="text-white text-6xl font-medium">
                  {t.project.stack.title}
                </p>
              </div>
              {t.project.stack.technologies.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <i className={`fa-solid ${item.icon} text-[#6983F7]`}></i>
                    <p className="text-white text-xl">[ {item.name} ]</p>
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
            <div className="flex flex-col gap-8 max-w-1/3">
              <div className="text-white flex items-center gap-3 text-6xl font-medium">
                <p>{t.project.options[2].title.start}</p>
                <i className="fa-solid fa-star text-[#6983F7] text-5xl"></i>
              </div>
              <p className="text-white/80 text-xl">
                {t.project.options[2].text}
              </p>
            </div>
          </div>
          <p className="absolute right-0 bottom-5 text-[250px] translate-x-25 font-black italic bg-linear-to-r from-white/20 to-[#262626]/20 bg-clip-text text-transparent">
            Viva Pay
          </p>
        </div>
        <div id="contact" className="flex scroll-mt-20 h-screen px-32 overflow-hidden py-20 gap-20 justify-between items-start w-full bg-[#111] relative">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-8">
              <p className="text-white text-3xl">{t.contact.contact_info.title}</p>
              <div className="flex justify-start items-start gap-3">
                <div className="size-20 bg-linear-to-tr flex justify-center items-center from-[#282828] to-[#191919] rounded-md shadow-md">
                  <i className="fa-regular fa-envelope text-[#6983F7] text-3xl"></i>
                </div>
                <div className="flex flex-col">
                  <p className="text-white/40 text-xl">{t.contact.contact_info.infos[0]}</p>
                  <p className="text-white/80 text-xl">
                    richardwcamargo@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-3">
                <div className="size-20 bg-linear-to-tr flex justify-center items-center from-[#282828] to-[#191919] rounded-md shadow-md">
                  <i className="fa-solid fa-phone text-[#6983F7] text-3xl"></i>
                </div>
                <div className="flex flex-col">
                  <p className="text-white/40 text-xl">{t.contact.contact_info.infos[1]}</p>
                  <p className="text-white/80 text-xl">+55 (14) 99646-3458</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <p className="text-white text-3xl">{t.contact.social_info}</p>
              <div className="flex justify-start items-start gap-4">
                <a href="https://github.com/RichinW">
                  <div className="size-20 bg-linear-to-br flex justify-center rounded-full items-center from-[#282828] to-[#191919] shadow-md">
                    <i className="fa-brands fa-github text-[#6983F7] text-3xl"></i>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/richard-camargo-483079328/">
                  <div className="size-20 bg-linear-to-br flex justify-center rounded-full items-center from-[#282828] to-[#191919] shadow-md">
                    <i className="fa-brands fa-linkedin-in text-[#6983F7] text-3xl"></i>
                  </div>
                </a>
                <a href="https://www.instagram.com/walacerichard/">
                  <div className="size-20 bg-linear-to-br flex justify-center rounded-full items-center from-[#282828] to-[#191919] shadow-md">
                    <i className="fa-brands fa-instagram text-[#6983F7] text-3xl"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-2/3 h-full bg-linear-to-r from-[#282828] to-[#191919] rounded-lg py-8 px-12 flex flex-col gap-4">
            <p className="text-white text-5xl">
              {t.contact.form.title.start}{" "}
              <span className="text-[#6983F7]">
                {t.contact.form.title.highlight}
              </span>
            </p>
            <Input
              className="outline-none border-none rounded-sm h-12 bg-linear-to-r from-[#383838] to-[#212121] p-4 text-white text-lg placeholder:text-lg"
              placeholder={t.contact.form.inputs[0]}
              value={formEmail.name}
              onChange={(e) => setFormEmail(prev => ({ ...prev, name: e.target.value }))}
            />
            <Input
              className="outline-none border-none rounded-sm h-12 bg-linear-to-r from-[#383838] to-[#212121] p-4 text-white text-lg placeholder:text-lg"
              placeholder={t.contact.form.inputs[1]}
              value={formEmail.email}
              onChange={(e) => setFormEmail(prev => ({ ...prev, email: e.target.value }))}
              type="email"
            />
            <Input
              className="outline-none border-none rounded-sm h-12 bg-linear-to-r from-[#383838] to-[#212121] p-4 text-white text-lg placeholder:text-lg"
              placeholder={t.contact.form.inputs[2]}
              value={formEmail.subject}
              onChange={(e) => setFormEmail(prev => ({ ...prev, subject: e.target.value }))}
            />
            <Textarea
              className="border-none bg-linear-to-r from-[#383838] to-[#212121] text-lg placeholder:text-lg p-4 h-full text-white"
              placeholder={t.contact.form.inputs[3]}
              value={formEmail.message}
              onChange={(e) => setFormEmail(prev => ({ ...prev, message: e.target.value }))}
            ></Textarea>
            <a href={`mailto:${to}?subject=${subject}&body=${body}`} className="bg-[#6983F7] flex justify-center items-center p-3 transition-colors hover:bg-[#5a70e0] text-white rounded-sm h-12 w-full">
              {t.contact.form.button}
            </a>
          </div>
          <div className="bg-white/60 size-60 rounded-full blur-3xl absolute bottom-0 left-2/12 transform -translate-x-32 translate-y-30"></div>
        </div>
      </div>
    </>
  );
}
