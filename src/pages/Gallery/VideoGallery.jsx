import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import paper from "/assets/grid-1.webp";

const videos = [
  {
    title:
      "Dushyanth Gunashekar, co-founder Crea Play",
      description:"Dushyanth shares his experience collaborating with APL to bring the power of storytelling and performance into the heart of learning. At APL, an inclusive approach to shows and performances ensures that no child is left behind—every grade level nurtures scriptwriters, directors, crew members, and performers. The curriculum, specially designed for APL, helps create a safe and supportive space where students can produce original work with confidence. Crea Play uses theatre and the performing arts as a vehicle for holistic learning, meeting each child at their level while fostering group collaboration without compromising individual growth.",
     src: "https://www.youtube.com/embed/HFOhxE0B_F4",
  },
  {
    title:
      "Mallika Ganapathy, Consultant Educator",
      description:"Mallika shares her long term association and experience working with the special educators and mainstream teachers. She reminisces on how APL forged ahead with their belief in inclusion that manifested into action through customised programmes to suit the strengths and challenges of their students where every learner feels inspired to realize and celebrate their unique potential.",
     src: "https://www.youtube.com/embed/PW6RFyUbPA8",
  },
  {
    title:
      "Save Our Nature",
       description:"Through their Global Perspectives sessions, the students undertook sustainability projects to demonstrate how small, consistent actions can create meaningful and lasting change. They took responsibility for collecting paper waste from classrooms and transformed it into handmade paper sheets. They also gathered pencil shavings and converted them into compost, showcasing how simple efforts can lead to remarkable outcomes. The project deepened their environmental awareness, encouraged mindful decision-making, and strengthened teamwork as they worked together toward building a greener and more sustainable future.",
    src: "https://www.youtube.com/embed/UDQO2TTrlCI",
  },
  {
    title: "Global Cultures",
    description:`This NIOS Grade 10 collaborative Meraki project is a celebration of global cultures expressed through art, music, and photography. Students explored the diversity of world traditions by creating cultural masks inspired by regions such as Africa, Spain, the Aztec civilisation, Bengal, India, and Japan. Each mask was handcrafted using air-dry clay on a base form and then uniquely painted to reflect the colours, symbols, and aesthetics of its culture.

    To deepen their understanding, students also designed soundscapes using foley techniques to capture the mood and rhythm associated with each region. These original sound effects were then combined with photographs and videos of their masks and their foley explorations. The final work brings together clay craft, visual storytelling, and audio design, showcasing the students’ creativity, teamwork, and appreciation of cultural diversity.`,
    src: "https://www.youtube.com/embed/WkzkeyT_hBo",
  },
  {
    title:
      "Mrs Sarija Santhosh & Mrs Asha Porayath on Teacher training and mentorship",
    src: "https://www.youtube.com/embed/cjpbRXpO5qY",
  },
  {
    title: "Our founder, Ms Gita on teachers as holistic educators.",
    src: "https://www.youtube.com/embed/Rn0_jX2derE",
  },
  {
    title: "Our founder, Ms Gita on counselling and support",
    src: "https://www.youtube.com/embed/2RNAvLSQGto",
  },
  {
    title: "Ms Sarija Santhosh – more on Inclusivity",
    src: "https://www.youtube.com/embed/A8BbtppP4PU",
  },
  {
    title: "Ms Sarija Santhosh on the need for a Teacher-Mentor",
    src: "https://www.youtube.com/embed/ees2OCBVh6k",
  },
  {
    title: "Ms Sarija Santhosh on flexi time for teachers",
    src: "https://www.youtube.com/embed/hKStTWTi_Pg",
  },
  {
    title: "Ms Mala Rao on the Good citizenship programme (GCP)",
    src: "https://www.youtube.com/embed/Ugb2u_rMm2c",
  },
  {
    title: "A timelapse video – A fundraiser on autism awareness",
    src: "https://www.youtube.com/embed/cDMMoavadg4",
  },
  {
    title:
      "APL awarded ‘Most innovational learning pedagogy award 2021’ by CEII",
    src: "https://www.youtube.com/embed/1pOqrxeg65w",
  },
];

export default function VideoGallery() {
  return (
    <>
      <section
        className=" px-6 md:px-16 py-12 font-sans"
        style={{ backgroundImage: `url(${paper})`, backgroundSize: "cover" }}
      >
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl font-primary font-semibold text-primary uppercase mb-12 underline underline-offset-4 decoration-secondary">
          Video Gallery
        </h2>

        {/* Alternating layout */}
        <div className="space-y-16">
          {videos.map((video, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-top gap-6 md:gap-12`}
            >
              {/* Text Block */}
              {/* Text Block */}
              <div className="md:w-1/2 text-primary font-secondary">
                <h3 className="text-lg font-semibold leading-snug mb-2">
                  {video.title}
                </h3>

                <p className="text-sm md:text-base text-primary/80 leading-relaxed">
                  {video.description}
                </p>
              </div>

              {/* Video Block */}
              <div className="md:w-1/2 aspect-video w-full rounded overflow-hidden shadow">
                <iframe
                  className="w-full h-full"
                  src={video.src}
                  title={`YouTube video ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
