import React from "react";
import Image1 from "../../public/jha/jha1.jpg";
import Image from "next/image";

const About = () => {
  function CalendarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    );
  }

  function Music2Icon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="18" r="4" />
        <path d="M12 18V2l7 4" />
      </svg>
    );
  }
  return (
    <div className="w-full text-black bg-gray-300 font-serif">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="rounded-full bg-muted p-1">
              <Image
                src={Image1}
                width="160"
                height="160"
                alt="Musician Profile"
                className="h-100 w-100 rounded-full object-cover"
              />
            </div>
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Soni Chaudhary Jha{" "}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Soni Chaudhary Jha is a multi-talented musician known for his unique blend
                of rock, blues, and folk influences. With a career spanning over
                two decades, he has captivated audiences worldwide with his
                powerful vocals, skilled guitar work, and heartfelt songwriting.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                About Soni Chaudhary Jha
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed">
                Born and raised in a small town, John Doe's passion for music
                began at a young age. He picked up the guitar as a teenager and
                quickly developed a unique style, blending the raw energy of
                rock with the soulful expression of the blues. Over the years,
                he has honed his craft, earning a reputation as a dynamic
                performer and a storyteller whose songs resonate deeply with his
                audience.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Career Highlights
              </h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <CalendarIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">2010 - 2015</h3>
                    <p className="text-muted-foreground">
                      Signed with a major record label and released three
                      critically acclaimed albums, earning multiple award
                      nominations and establishing himself as a rising star in
                      the music industry.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <CalendarIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">2016 - 2020</h3>
                    <p className="text-muted-foreground">
                      Went on a successful world tour, performing in sold-out
                      venues across Europe, North America, and Asia. During this
                      time, he also released two live albums and a critically
                      acclaimed studio album.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[40px_1fr] items-start gap-4">
                  <div className="rounded-full bg-primary p-2 text-primary-foreground">
                    <CalendarIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">2021 - Present</h3>
                    <p className="text-muted-foreground">
                      Continued to tour and perform, while also focusing on
                      songwriting and collaborating with other artists. In 2022,
                      he released his most recent album, which has been praised
                      for its innovative sound and emotional depth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Notable Performances and Releases
              </h2>
              <ul className="grid gap-2">
                <li className="flex items-center gap-2">
                  <Music2Icon className="h-5 w-5 text-muted-foreground" />
                  <span>Headlined the Coachella Music Festival (2015)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2Icon className="h-5 w-5 text-muted-foreground" />
                  <span>Performed at the Grammy Awards (2018)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2Icon className="h-5 w-5 text-muted-foreground" />
                  <span>Released the album "Soulful Echoes" (2020)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2Icon className="h-5 w-5 text-muted-foreground" />
                  <span>
                    Collaborated with renowned producer on new album (2022)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;