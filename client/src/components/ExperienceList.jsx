import { NavLink } from "react-router-dom";

// Demo pictures
import portfolio_demo_pic from "../assets/portfolio_demo_pic.png";
import icebreaker_demo_pic_1 from "../assets/IceBreaker/demo_pic_1.png";
import icebreaker_demo_pic_2 from "../assets/IceBreaker/demo_pic_2.png";
import icebreaker_demo_pic_3 from "../assets/IceBreaker/demo_pic_3.png";
import icebreaker_demo_pic_4 from "../assets/IceBreaker/demo_pic_4.png";
import icebreaker_demo_pic_5 from "../assets/IceBreaker/demo_pic_5.png";
import icebreaker_demo_pic_6 from "../assets/IceBreaker/demo_pic_6.png";
import icebreaker_demo_pic_7 from "../assets/IceBreaker/demo_pic_7.png";
import icebreaker_demo_pic_8 from "../assets/IceBreaker/demo_pic_8.png";
import icebreaker_demo_pic_9 from "../assets/IceBreaker/demo_pic_9.png";
import syncup_demo_pic_1 from "../assets/SyncUp/demo_pic_1.png";
import syncup_demo_pic_2 from "../assets/SyncUp/demo_pic_2.png";
import syncup_demo_pic_3 from "../assets/SyncUp/demo_pic_3.png";
import syncup_demo_pic_4 from "../assets/SyncUp/demo_pic_4.png";

// Swiper for slideshow
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components
import { Pagination, Navigation } from "swiper/modules"; // Additional components
import "swiper/css"; // Swiper styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/navigation"; // Navigation styles

const experiences = [
  {
    title: "Coding Portfolio Web Application w/ MERN Technology Stack (current site)",
    images: [portfolio_demo_pic],
    description: [
      "Designed a digital portfolio with an intuitive and responsive user interface for seamless browsing on all devices.",
      "Implemented React components to display project details and skills.",
      "Integrated back-end services with Node.js and Express.js.",
      "Followed Agile development practices for structured and iterative project completion.",
    ],
  },
  {
    title: "Social Networking Mobile Android Application",
    images: [icebreaker_demo_pic_1, icebreaker_demo_pic_2, icebreaker_demo_pic_3,
    icebreaker_demo_pic_4, icebreaker_demo_pic_5, icebreaker_demo_pic_6,
    icebreaker_demo_pic_7, icebreaker_demo_pic_8, icebreaker_demo_pic_9],
    description: [
      "Developed mobile application using Android Studio, Kotlin/Java, Jetpack Compose, and object-oriented principles",
      "Implemented Google Firebase to utilize several cloud-based development tools and services for various app features",
      "Utilized Scrum methodology to distribute workload between sprints and ensure deliverables meet deadlines",
    ],
  },
  {
    title: "Calendar/Availability Web-Based Application",
    images: [syncup_demo_pic_1, syncup_demo_pic_2, syncup_demo_pic_3, syncup_demo_pic_4],
    description: [
      "Built web-based application using Java, JavaFX, Spring Boot, Maven, and object-oriented principles",
      "Documented project through producing Software Requirements Specification and Software Design Document",
      "Distributed the workload evenly to groupmates and monitored project progress",
    ],
  },
];

export default function ExperienceList() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
      </nav>
      {/* Render each experience */}
      {experiences.map((experience, index) => (
        <div key={index} className="mb-12">
          {/* Title and Description */}
          <div className="flex justify-center mb-4">
            <div className="max-w-4xl text-left">
              <h2 className="text-xl font-semibold">{experience.title}</h2>
              <ul className="text-sm text-gray-500 list-disc list-inside mt-2">
                {experience.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Swiper for Images */}
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className="swiper-container mt-8"
          >
            {experience.images.map((image, i) => (
              <SwiperSlide key={i}>
                <img
                  src={image}
                  alt={`${experience.title} demo ${i + 1}`}
                  className="w-1/2 h-auto object-cover rounded mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Divider Line */}
          {index < experiences.length - 1 && (
            <hr className="my-8 border-t-2 border-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
}

