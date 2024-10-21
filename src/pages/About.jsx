import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills, Academic, associativeExperiences } from "../constants"; // Import associativeExperiences

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Abderrahmane Zaidi. Student in Cyber Security in ESAIP
        </span>{" "}
        👋
      </h1>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-center text-2xl font-bold'>My Academic Curriculum</h3>
        <div className='mt-16 flex flex-wrap gap-12 justify-center'>
          {Academic.map((item) => (
            <div className='block-container w-72 p-4 bg-white shadow-lg rounded-xl transition-transform duration-300 transform hover:scale-105' key={item.name}>
              <div className='btn-back rounded-xl'>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className='w-24 h-24 object-contain'
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'path/to/placeholder-image.jpg';
                    }}
                  />
                </div>
              </div>
              <h4 className='mt-2 text-lg font-semibold'>{item.name}</h4>
              <p className='text-sm text-gray-600'>{item.type}</p>
              <p className='text-sm text-gray-800 mt-1'>{item.description}</p>
              <p className='text-sm text-gray-500 mt-1'>Dates: {item.dates}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='py-10 flex flex-col'>
    <h3 className='subhead-text text-center text-2xl font-bold'>My Skills</h3>
    
          {/* Frontend Skills */}
          <h4 className='text-lg font-semibold text-center mt-10'>Frontend Skills</h4>
          <div className='mt-16 flex flex-wrap gap-12 justify-center'>
              {skills.filter(skill => skill.type === "Frontend").map((skill) => (
                  <div className='block-container w-20 h-20 flex flex-col items-center' key={skill.name}>
                      <div className='btn-back rounded-xl' />
                      <div className='btn-front rounded-xl flex justify-center items-center'>
                          <img
                              src={skill.imageUrl}
                              alt={skill.name}
                              className='w-1/2 h-1/2 object-contain'
                          />
                      </div>
                      <span className='mt-2 text-center'>{skill.name}</span> {/* Name below image */}
                  </div>
              ))}
          </div>

          {/* Backend Skills */}
          <h4 className='text-lg font-semibold text-center mt-10'>Backend Skills</h4>
          <div className='mt-16 flex flex-wrap gap-12 justify-center'>
              {skills.filter(skill => skill.type === "Backend").map((skill) => (
                  <div className='block-container w-20 h-20 flex flex-col items-center' key={skill.name}>
                      <div className='btn-back rounded-xl' />
                      <div className='btn-front rounded-xl flex justify-center items-center'>
                          <img
                              src={skill.imageUrl}
                              alt={skill.name}
                              className='w-1/2 h-1/2 object-contain'
                          />
                      </div>
                      <span className='mt-2 text-center'>{skill.name}</span> {/* Name below image */}
                  </div>
              ))}
          </div>

          {/* Version Control Skills */}
          <h4 className='text-lg font-semibold text-center mt-10'>Version Control Skills</h4>
          <div className='mt-16 flex flex-wrap gap-12 justify-center'>
              {skills.filter(skill => skill.type === "Version Control").map((skill) => (
                  <div className='block-container w-20 h-20 flex flex-col items-center' key={skill.name}>
                      <div className='btn-back rounded-xl' />
                      <div className='btn-front rounded-xl flex justify-center items-center'>
                          <img
                              src={skill.imageUrl}
                              alt={skill.name}
                              className='w-1/2 h-1/2 object-contain'
                          />
                      </div>
                      <span className='mt-2 text-center'>{skill.name}</span> {/* Name below image */}
                  </div>
              ))}
          </div>

          {/* Networking Skills */}
          <h4 className='text-lg font-semibold text-center mt-10'>Networking Skills</h4>
          <div className='mt-16 flex flex-wrap gap-12 justify-center'>
              {skills.filter(skill => skill.type === "Networking").map((skill) => (
                  <div className='block-container w-20 h-20 flex flex-col items-center' key={skill.name}>
                      <div className='btn-back rounded-xl' />
                      <div className='btn-front rounded-xl flex justify-center items-center'>
                          <img
                              src={skill.imageUrl}
                              alt={skill.name}
                              className='w-1/2 h-1/2 object-contain'
                          />
                      </div>
                      <span className='mt-2 text-center'>{skill.name}</span> {/* Name below image */}
                  </div>
              ))}
          </div>
      </div>
      <h4 className='text-lg font-semibold text-center mt-10'>Framework Skills</h4>
    <div className='mt-16 flex flex-wrap gap-12 justify-center'>
        {skills.filter(skill => skill.type === "Framework").map((skill) => (
            <div className='block-container w-20 h-20 flex flex-col items-center' key={skill.name}>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                    <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className='w-1/2 h-1/2 object-contain'
                    />
                </div>
                <span className='mt-2 text-center'>{skill.name}</span> {/* Name below image */}
            </div>
        ))}
    </div>


        

      <div className='py-16'>
        <h3 className='subhead-text text-center text-2xl font-bold'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I have successfully undertaken multiple projects that align with my internships and academic coursework. These projects encompassed a diverse range of topics, focusing on both networking and development.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[70%] h-[70%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      {/* Associative Work Section */}
      <div className='py-16'>
        <h3 className='subhead-text text-center text-2xl font-bold'>Associative Work</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I have participated in various associative activities where I contributed to community development, environmental sustainability, and health awareness campaigns.
          </p>
        </div>

        <div className='mt-12 flex'>
        <VerticalTimeline>
          {associativeExperiences.map((experience, index) => (
            <VerticalTimelineElement
              key={experience.association_name}
              date={experience.date}
              iconStyle={{ background: experience.iconBg }}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience.iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className='text-black text-xl font-poppins font-semibold'>
                  {experience.title}
                </h3>
                <p className='text-black-500 font-medium text-base' style={{ margin: 0 }}>
                  {experience.association_name}
                </p>
              </div>

              <ul className='my-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className='text-black-500/50 font-normal pl-1 text-sm'
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
