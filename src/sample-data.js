import { v4 as uuidv4 } from "uuid";

const sample = {
  personalInfo: {
    fullName: "John Smith",
    email: "sampleemail@gmail.com",
    phoneNumber: "(123)456-7890",
    address: "Los Angeles, CA",
    portfolio: "https://github.com/byoung22",
  },
  education: [
    {
      id: uuidv4(),
      degree: "Mechanical Engineering B.S.",
      school: "California State University, Fullerton",
      startDate: "August 2018",
      endDate: "May 2022",
    },
    {
      id: uuidv4(),
      degree: "Mechanical Engineering M.S.",
      school: "University of Southern California",
      startDate: "January 2024",
      endDate: "December 2026",
    },
  ],
  technicalSkills: [
    { id: uuidv4(), skill: "Solidworks" },
    { id: uuidv4(), skill: "CATIA V5" },
    { id: uuidv4(), skill: "Bilingual: Mandarin" },
    { id: uuidv4(), skill: "Manufacturing" },
    { id: uuidv4(), skill: "GD&T Drafting" },
    { id: uuidv4(), skill: "ASME Standards" },
    { id: uuidv4(), skill: "MATBAB" },
    { id: uuidv4(), skill: "Microsoft Office" },
  ],
  workExperience: [
    {
      id: uuidv4(),
      department: "Engineering",
      organization: "Aerojet Rocketdyne",
      position: "Propulsion Engineer II",
      startDate: "September 2022",
      endDate: "Present",
      description:
        "• Modeled and verified designs for phone accessories such as phone cases and screen protectors.\n• Utilized Solidworks, Creo, and AutoCAD to design the products. Operated Stratasys 3D printer and cloud point data via laser scanner to validify designs.\n• Managed multiple projects at once, following each project from design to mass production.\n• Held meetings with product and marketing managers. Communicated with customers and China vendors to push products to mass production.\n• Self-taught Python for batch programming to automate a couple simple, but tedious tasks via the command line.",
    },
    {
      id: uuidv4(),
      department: "Warehouse",
      organization: "Amazon",
      position: "Fulfilment Center Associate I",
      startDate: "July 2020",
      endDate: "September 2020",
      description:
        "• Experienced working in a fast-paced environment by delivering packages to meet quotas",
    },
  ],
  projectExperience: [
    {
      id: uuidv4(),
      department: "CSUF",
      organization: "Titan Rocket",
      position: "Treasurer",
      startDate: "January 2021",
      endDate: "June 2022",
      description:
        "• Won ESC Showcase 2022 for Best Legacy team out of over 40 engineering/cs clubs. Won 3rd place in intercollegiate competition for Friends of Amateur Rocketry in the 10,000ft competition.\n• Control cashflow for senior design rocketry parts and personal projects for active members\n• Mentor junior classmates for senior design class with educational workshops",
    },
    {
      id: uuidv4(),
      department: "CSUF",
      organization: "Baja SAE",
      position: "Chasis Team",
      startDate: "September 2020",
      endDate: "June 2021",
      description:
        "• Designed roll cage of car that meets the Baja SAE® Rules 2021 parameters\n• Developed a 3D model of tubing and welds with SolidWorks\n• Analyzed stress simulations with Fusion 360",
    },
    {
      id: uuidv4(),
      department: "Computational Fluid Dynamics",
      organization: "Simvascular",
      position: "Fluid Dynamics Lab Tester",
      startDate: "January 2022",
      endDate: "May 2022",
      description:
        "• Pathed, segmented, lofted and meshed a model of a 67-year-old Male patient’s aortalfemoral system\n• Set up parameters and boundary conditions based on researched values and patient file\n• Ran CFD simulation on a 127-core supercomputer via SimVascular\n• Diagnosed the patient’s health in a comprehensive report based on the pressure & wall shear stress",
    },
  ],
};

export default sample;
