import React from 'react';

interface SkillCategory {
    category: string;
    skills: string[];
}

const skillsData: SkillCategory[] = [
    {
        category: "Programming Languages",
        skills: ["Java", "JavaScript*", "HTML*", "CSS*", "C/C++"],
    },
    {
        category: "Web Development",
        skills: ["ReactJS*", "Tailwind CSS*", "Node.js", "Express.js", "RESTful APIs*"],
    },
    {
        category: "Database Management",
        skills: ["MongoDB", "Mongoose", "PostgreSQL", "Prisma ORM", "MySQL"],
    },
    {
        category: "Cloud Services",
        skills: ["AWS EC2*", "S3", "CloudFront", "Vercel", "Render"],
    },
    {
        category: "Version Control",
        skills: ["Git*", "GitHub*"],
    },
];

const Skills: React.FC = () => {
    return (
        <div className="mt-8 p-4 rounded text-white"> {/* Main container with white text */}
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <ul className="list-none p-0">
                {skillsData.map((categoryData, index) => (
                    <li key={index} className="mb-4">
                        <div className="flex flex-row items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2 text-gray-400" // Keep icon gray for contrast
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-xl font-semibold">{categoryData.category}</h3>
                        </div>
                        <div className="flex flex-wrap mt-2">
                            {categoryData.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="mr-2 mb-2 text-sm rounded-md px-2 py-1" // Added border for visibility
                                >
                  {skill.endsWith("*") ? (
                      <>
                          {skill.slice(0, -1)}{" "}
                          <span className="text-xs text-gray-400"></span> {/* Adjusted proficient text color */}
                      </>
                  ) : (
                      skill
                  )}
                </span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;