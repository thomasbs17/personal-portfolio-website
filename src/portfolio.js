// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import {CiDatabase} from "react-icons/ci";
import {DiGoogleCloudPlatform, DiPostgresql, DiRedis} from "react-icons/di";
import {
  FaAngular,
  FaAws,
  FaDocker,
  FaEthereum,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRegSnowflake
} from "react-icons/fa";
import {GiArtificialIntelligence, GiParrotHead} from "react-icons/gi";
import {IoLogoJavascript} from "react-icons/io";
import {IoLogoFirebase} from "react-icons/io5";
import {RiFileExcel2Line} from "react-icons/ri";
import {
  SiKubernetes,
  SiPytorch,
  SiScikitlearn,
  SiStreamlit,
  SiTensorflow
} from "react-icons/si";

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Thomas Bouamoud",
  title: "Hi all, I'm Thomas Bouamoud",
  subTitle: emoji(
    "A passionate French 🇫🇷 Full Stack Software Developer 🚀, currenlly based in London UK 🇬🇧, having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1lgv26WK1YiE6Yim8v8tWesISdLKOReEg/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/thomasbs17",
  linkedin: "https://www.linkedin.com/in/thomas-bouamoud-s%C3%A9osse-55467aab/",
  yahoo: "thomasbs17@yahoo.fr",
  gmail: "thomas.bouamoud@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Stack",
  subTitle: "AMBITIOUS DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    {
      title: "💻 Full Stack Expertise",
      description:
        "Proficient in managing end-to-end project development, seamlessly navigating through backend, front-end, infrastructure, cloud services and database management to deliver comprehensive solutions with efficiency and excellence."
    },
    {
      title: "📈 Strategic Business Acumen",
      description:
        "Possess extensive experience collaborating with diverse stakeholders across multifaceted industries, adept at understanding and addressing business needs, ensuring alignment between technology solutions and organizational objectives for optimal results."
    },
    {
      title: "🤖 Cutting-Edge AI Integration",
      description:
        "Proven ability to leverage advanced machine learning and AI methodologies, including Language Models (LLMs), to tackle intricate business challenges, driving innovation and delivering tailored solutions that drive growth and competitiveness in dynamic market landscapes."
    },
    {
      title: "💹 Specialized Financial Expertis",
      description:
        "Demonstrated proficiency in high-stakes environments, having contributed to ultralow latency financial trading projects, showcasing a keen understanding of the intricacies and demands of the financial sector while consistently delivering robust and reliable solutions."
    }
  ],

  softwareSkills: [
    // ADD: Airflow, PowerApps, PowerBI, Tableau, Photoshop, Figma, Jenkins, GitHib, BitBucket
    {
      stackType: "Back-End",
      stackName: "Python",
      proficiency: 1,
      icon: <FaPython />,
      link: "https://www.python.org/"
    },
    {
      stackType: "Back-End",
      stackName: "nodejs",
      proficiency: 0.6,
      icon: <FaNodeJs />,
      link: "https://nodejs.org/en"
    },
    {
      stackType: "Back-End",
      stackName: "Java",
      proficiency: 0.3,
      icon: <FaJava />,
      link: "https://www.java.com/en/"
    },
    {
      stackType: "Back-End",
      stackName: "VBA",
      proficiency: 0.8,
      icon: <RiFileExcel2Line />,
      link: "https://learn.microsoft.com/en-us/office/vba/library-reference/concepts/getting-started-with-vba-in-office"
    },
    {
      stackType: "Front-End",
      stackName: "JavaScript",
      proficiency: 0.8,
      icon: <IoLogoJavascript />,
      link: "https://www.javascript.com/"
    },
    {
      stackType: "Front-End",
      stackName: "ReactJS",
      proficiency: 0.9,
      icon: <FaReact />,
      link: "https://react.dev/"
    },
    {
      stackType: "Front-End",
      stackName: "Angular",
      proficiency: 0.2,
      icon: <FaAngular />,
      link: "https://angular.io/"
    },
    {
      stackType: "Front-End",
      stackName: "Streamlit",
      proficiency: 1,
      icon: <SiStreamlit />,
      link: "https://streamlit.io/"
    },
    {
      stackType: "Database",
      stackName: "Oracle",
      proficiency: 0.95,
      icon: <CiDatabase />,
      link: "https://www.oracle.com/uk/database/"
    },
    {
      stackType: "Database",
      stackName: "Snowflake",
      proficiency: 0.93,
      icon: <FaRegSnowflake />,
      link: "https://www.snowflake.com/en/"
    },
    {
      stackType: "Database",
      stackName: "PostgreSQL",
      proficiency: 0.91,
      icon: <DiPostgresql />,
      link: "https://www.postgresql.org/"
    },
    {
      stackType: "Database",
      stackName: "Redis",
      proficiency: 0.9,
      icon: <DiRedis />,
      link: "https://redis.io/"
    },
    {
      stackType: "Database",
      stackName: "Firebase",
      proficiency: 0.2,
      icon: <IoLogoFirebase />,
      link: "https://firebase.google.com/"
    },
    {
      stackType: "Cloud/CI-CD",
      stackName: "aws",
      proficiency: 0.7,
      icon: <FaAws />,
      link: "https://aws.amazon.com/"
    },
    {
      stackType: "Cloud/CI-CD",
      stackName: "GCP",
      proficiency: 0.4,
      icon: <DiGoogleCloudPlatform />,
      link: "https://cloud.google.com/gcp"
    },
    {
      stackType: "Cloud/CI-CD",
      stackName: "docker",
      proficiency: 0.88,
      icon: <FaDocker />,
      link: "https://www.docker.com/"
    },
    {
      stackType: "Cloud/CI-CD",
      stackName: "Kubernetes",
      proficiency: 0.3,
      icon: <SiKubernetes />,
      link: "https://kubernetes.io/"
    },
    {
      stackType: "AI",
      stackName: "Scikit-learn",
      proficiency: 0.84,
      icon: <SiScikitlearn />,
      link: "https://scikit-learn.org/"
    },
    {
      stackType: "AI",
      stackName: "TensorFlow",
      proficiency: 0.7,
      icon: <SiTensorflow />,
      link: "https://www.tensorflow.org/"
    },
    {
      stackType: "AI",
      stackName: "LangChain",
      proficiency: 0.82,
      icon: <GiParrotHead />,
      link: "https://www.langchain.com/"
    },
    {
      stackType: "AI",
      stackName: "PyTorch",
      proficiency: 0.5,
      icon: <SiPytorch />,
      link: "https://pytorch.org/"
    },
    {
      stackType: "AI",
      stackName: "SageMaker",
      proficiency: 0.4,
      icon: <GiArtificialIntelligence />,
      link: "https://aws.amazon.com/pm/sagemaker/"
    },
    {
      stackType: "Web3",
      stackName: "Solidity",
      proficiency: 0.1,
      icon: <FaEthereum />,
      link: "https://docs.soliditylang.org/en/v0.8.25/s"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kedge Business School",
      url: "https://student.kedge.edu/",
      logo: require("./assets/images/kedgeLogo.png"),
      subHeader: emoji("MSc in Finance | Bordeaux, France 🇫🇷"),
      duration: "2012 - 2017",
      desc: "Main courses:",
      descBullets: [
        "Financial Risk Management & Derivative Markets",
        "Econometrics & Financial Modelling",
        "Advanced Corporate Finance"
      ]
    },
    {
      schoolName: "Unversidad de Belgrano",
      url: "https://www.ub.edu.ar/",
      logo: require("./assets/images/BelgranoLogo.png"),
      subHeader: emoji("MBA IN FINANCE | Buenos Aires, Argentina 🇦🇷"),
      duration: "2016",
      desc: (
        <>
          Projects
          <ul>
            <li>
              <>Tulane University (Burkenroad Report Latin America):</>
              <i>
                {" "}
                Issued a DCF-based firm valuation of the Argentine chain of
                supermarkets
              </i>{" "}
              <a
                href="https://supermercado.laanonimaonline.com/"
                rel="noreferrer"
                target="_blank"
              >
                ”La Anónima”
              </a>
            </li>
            <li>
              <a
                href="https://prodibur.sba.com.ar/"
                rel="noreferrer"
                target="_blank"
              >
                PRO.DI.BUR:
              </a>
              <i>
                {" "}
                Stock exchange trading simulation operated on the MERVAL (Buenos
                Aires Stock Exchange) with portfolio restrictions of 50% private
                assets and 50% public bonds.
              </i>
            </li>
          </ul>
          <p>Main courses</p>
        </>
      ),
      descBullets: [
        "Portfolio Management",
        "Derivatives",
        "Firm Valuation",
        "International Financial Structure",
        "Capital Markets"
      ]
    },
    {
      schoolName: "Unversidad Rey Juan Carlos",
      url: "https://www.urjc.es/",
      logo: require("./assets/images/URJClogo.png"),
      subHeader: emoji("Bachelor's degree in Marketing | Madrid, Spain 🇪🇸"),
      duration: "September 2013 - April 2017",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: (
        <>
          Principal* Software Engineer
          <br />
          <i style={{fontSize: 12}}>*(Principal since 2023)</i>
        </>
      ),
      company: "Fidelity Investments",
      url: "https://www.fidelity.com/",
      companylogo: require("./assets/images/fidelityLogo.png"),
      date: "April 2022 – Present",
      desc: "Fidelity Investments offers Financial Planning and Advice, Retirement Plans, Wealth Management Services, Trading and Brokerage services, and a wide range of investment products including Mutual Funds, ETFs, Fixed income Bonds and CDs and much more.",
      descBullets: [
        "Led an international team of 4 data and software engineers across 3 cities (London, Boston & Chicago)",
        "Interfaced with Business Leaders and SMEs to articulate complex business logics and identify key challenges",
        "Design optimal software architectures with a three-layer focus: Security, Scalability and Cost-Control (FinOps)",
        "Full-stack implementation (Back/Front-End, Infra & DevOps, Databases & ETL)",
        "Support the Data Scientist team by maintaining modern stack (e.g., tailored Python packages) and CI/CD pipelines",
        "Led the Citizen Developer program by developing a governance, support, and report framework & by offering highly curated low-code solutions to help unleash efficiency across Asset Management"
      ]
    },
    {
      role: "Data Scientist",
      company: "Hadada Financial",
      url: "https://www.linkedin.com/company/hadada-financial/",
      companylogo: require("./assets/images/hadadaLogo.jpeg"),
      date: "May 2017 – May 2018",
      desc: "Hadada offers banking solutions in Africa using a fintech framework to optimize banking workflows for customers.",
      descBullets: [
        "Close collaboration with key stakeholders including the engineering department architects, sales and the leadership team",
        "Implemented ETL pipelines for web data collection using Selenium and reverse engineering techniques",
        "Developed machine learning algorithms for financial forecasting and fraud detection management"
      ]
    },
    {
      role: "Risk & Compliance",
      company: "H2O AM LLP",
      url: "https://www.h2o-am.com/",
      companylogo: require("./assets/images/h2oLogo.png"),
      date: "May 2017 – May 2018",
      desc: (
        <>
          Founded in 2010 and with offices in Paris, Monaco, London, Geneva and
          Singapore, H2O AM is an independent asset management company, mainly
          specialising in Global Macro strategies. Based on an investment
          process developed over more than thirty years and on solid
          quantitative engineering, the teams implement a discretionary
          investment process based on a Top-Down and Value approach. Through
          relative value strategies in bonds, currencies and equities, H2O AM
          offers its clients the benefits of diversified alpha with assumed and
          controlled risk over a defined time horizon.
        </>
      ),
      descBullets: [
        "Design & Implementation of automated Trade Surveillance solutions",
        "Ops Lead on various projects: firm acquisitions, subsidiaries launch, funds full lifecycle (launch, mergers, liquidations, and cross-border registrations)",
        "International regulatory filings (SEC/FINRA, FCA, MiFID II, EMIR, NFA/CFTC)"
      ]
    },
    {
      role: "Economic Cooperation Intern",
      company: "French-Chilean Chamber of Commerce",
      url: "https://www.camarafrancochilena.cl/",
      companylogo: require("./assets/images/cciLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "The French-Chilean Chamber of Commerce and Industry brings together key stakeholders and business leaders from both sides of the ocean to engage in constructive dialogue and identify common challenges and solutions that will benefit both economies. Its primary objective is to  promote economic growth, and stimulate employment and innovation in the Franco-Chilean business community."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "thomasbs17@yahoo.fr"
};

// Twitter Section

const twitterDetails = {
  userName: "TotoshBouams",
  display: false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection,
  bigProjects,
  blogSection,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  isHireable,
  openSource,
  podcastSection,
  skillsSection,
  socialMediaLinks,
  splashScreen,
  talkSection,
  techStack,
  twitterDetails,
  workExperiences
};
