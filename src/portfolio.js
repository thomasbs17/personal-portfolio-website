// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import {CiDatabase} from "react-icons/ci";
import {DiGoogleCloudPlatform, DiPostgresql, DiRedis} from "react-icons/di";
import {
  FaAngular,
  FaAws,
  FaBitbucket,
  FaDocker,
  FaEthereum,
  FaGithub,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRegSnowflake
} from "react-icons/fa";
import {GiArtificialIntelligence, GiParrotHead} from "react-icons/gi";
import {GoCopilot} from "react-icons/go";
import {IoLogoJavascript} from "react-icons/io";
import {IoLogoFirebase} from "react-icons/io5";
import {RiFileExcel2Line} from "react-icons/ri";
import {
  SiAdobephotoshop,
  SiApacheairflow,
  SiFigma,
  SiGoogleanalytics,
  SiJenkins,
  SiKubernetes,
  SiPowerapps,
  SiPowerbi,
  SiPycharm,
  SiPytorch,
  SiScikitlearn,
  SiStreamlit,
  SiTableau,
  SiTensorflow
} from "react-icons/si";
import {TbBrandVscode} from "react-icons/tb";
import ai from "./assets/lottie/ai.json";
import businessAcumen from "./assets/lottie/businessAcumen.json";
import financialExpertise from "./assets/lottie/financialExpertise.json";
import fullStack from "./assets/lottie/fullStack.json";
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
        "Proficient in managing end-to-end project development, seamlessly navigating through backend, front-end, infrastructure, cloud services and database management to deliver comprehensive solutions with efficiency and excellence.",
      lottieAnimation: fullStack
    },
    {
      title: "📈 Strategic Business Acumen",
      description:
        "Possess extensive experience collaborating with diverse stakeholders across multifaceted industries, adept at understanding and addressing business needs, ensuring alignment between technology solutions and organizational objectives for optimal results.",
      lottieAnimation: businessAcumen
    },
    {
      title: "🤖 Cutting-Edge AI Integration",
      description:
        "Proven ability to leverage advanced machine learning and AI methodologies, including Language Models (LLMs), to tackle intricate business challenges, driving innovation and delivering tailored solutions that drive growth and competitiveness in dynamic market landscapes.",
      lottieAnimation: ai
    },
    {
      title: "💹 Expert Financial Knowledge",
      description:
        "Demonstrated proficiency in high-stakes environments, having contributed to ultralow latency financial trading projects, showcasing a keen understanding of the intricacies and demands of the financial sector while consistently delivering robust and reliable solutions.",
      lottieAnimation: financialExpertise
    }
  ],

  softwareSkills: [
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
      proficiency: 0.68,
      icon: <FaNodeJs />,
      link: "https://nodejs.org/en"
    },
    {
      stackType: "Back-End",
      stackName: "Java",
      proficiency: 0.29,
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
      stackType: "Dev Ops",
      stackName: "Apache Airflow",
      proficiency: 0.88,
      icon: <SiApacheairflow />,
      link: "https://airflow.apache.org/"
    },
    {
      stackType: "Database",
      stackName: "Firebase",
      proficiency: 0.2,
      icon: <IoLogoFirebase />,
      link: "https://firebase.google.com/"
    },
    {
      stackType: "Dev Ops",
      stackName: "AWS",
      proficiency: 0.7,
      icon: <FaAws />,
      link: "https://aws.amazon.com/"
    },
    {
      stackType: "Dev Ops",
      stackName: "GCP",
      proficiency: 0.4,
      icon: <DiGoogleCloudPlatform />,
      link: "https://cloud.google.com/gcp"
    },
    {
      stackType: "Dev Ops",
      stackName: "docker",
      proficiency: 0.88,
      icon: <FaDocker />,
      link: "https://www.docker.com/"
    },
    {
      stackType: "Dev Ops",
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
      link: "https://docs.soliditylang.org/en/"
    },
    {
      stackType: "Business Intelligence",
      stackName: "PowerApps",
      proficiency: 0.77,
      icon: <SiPowerapps />,
      link: "https://www.microsoft.com/en-us/power-platform/products/power-apps"
    },
    {
      stackType: "Business Intelligence",
      stackName: "PowerBI",
      proficiency: 0.43,
      icon: <SiPowerbi />,
      link: "https://www.microsoft.com/en-us/power-platform/products/power-bi"
    },
    {
      stackType: "Business Intelligence",
      stackName: "Tableau",
      proficiency: 0.54,
      icon: <SiTableau />,
      link: "https://www.tableau.com/"
    },
    {
      stackType: "Front-End",
      stackName: "Figma",
      proficiency: 0.14,
      icon: <SiFigma />,
      link: "https://www.figma.com/"
    },
    {
      stackType: "Dev Ops",
      stackName: "Jenkins",
      proficiency: 0.65,
      icon: <SiJenkins />,
      link: "https://www.jenkins.io/"
    },
    {
      stackType: "Version Control",
      stackName: "GitHub",
      proficiency: 1,
      icon: <FaGithub />,
      link: "https://github.com/"
    },
    {
      stackType: "Version Control",
      stackName: "BitBucket",
      proficiency: 1,
      icon: <FaBitbucket />,
      link: "https://bitbucket.org/product"
    },
    {
      stackType: "Dev Ops",
      stackName: "GitHub Copilot",
      proficiency: 0.49,
      icon: <GoCopilot />,
      link: "https://github.com/features/copilot"
    },
    {
      stackType: "IDE",
      stackName: "PyCharm",
      proficiency: 1,
      icon: <SiPycharm />,
      link: "https://www.jetbrains.com/pycharm/"
    },
    {
      stackType: "IDE",
      stackName: "VS Code",
      proficiency: 0.87,
      icon: <TbBrandVscode />,
      link: "https://code.visualstudio.com/"
    },
    {
      stackType: "Front-End",
      stackName: "Adobe Photoshop",
      proficiency: 0.08,
      icon: <SiAdobephotoshop />,
      link: "https://www.adobe.com/products/photoshop.html"
    },
    {
      stackType: "Front-End",
      stackName: "Google Analytics",
      proficiency: 0.62,
      icon: <SiGoogleanalytics />,
      link: "https://marketingplatform.google.com/"
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
        "As a principal software engineer, co-led an international team of 4 data and software engineers spanning 3 cities (London, Boston, & Chicago).",
        "Interfaced with Business Leaders and SMEs to articulate complex business logics and identify key challenges",
        "Design optimal software architectures with a three-layer focus: Security, Scalability and Cost-Control (FinOps)",
        "Full-stack implementation (Back/Front-End, Infra & DevOps, Databases & ETL)",
        "Support the Data Scientist team by maintaining modern stack (e.g., tailored Python packages) and CI/CD pipelines",
        "Led the Citizen Developer program by developing a governance, support, and report framework & by offering highly curated low-code solutions to help unleash efficiency across Asset Management"
      ]
    },
    {
      role: "Compliance Advisor - Trade Monitoring",
      company: "Fidelity Investments",
      url: "https://www.fidelity.com/",
      companylogo: require("./assets/images/fidelityLogo.png"),
      date: "October 2019 – April 2022",
      desc: "Fidelity Investments offers Financial Planning and Advice, Retirement Plans, Wealth Management Services, Trading and Brokerage services, and a wide range of investment products including Mutual Funds, ETFs, Fixed income Bonds and CDs and much more.",
      descBullets: [
        "Monitoring of trade activities for equity and fixed income portfolios to ensure that their investment limits are followed",
        "Communicating client, regulatory, prospectus, Board, and internal policies to portfolio managers and traders",
        "Implementing automated mechanisms to provide timely reporting and monitoring of complex investment strategies",
        "Provided senior management with information on current market trends and issues identified during assignments and recommend plans for improvementes.",
        "Ensure ongoing partnership with local and global regulators and support regulatory change projects"
      ]
    },
    {
      role: "Risk & Compliance",
      company: "H2O AM LLP",
      url: "https://www.h2o-am.com/",
      companylogo: require("./assets/images/h2oLogo.png"),
      date: "May 2017 – May 2018",
      desc: "H2O AM, established in 2010 with offices in major financial hubs, specializes in Global Macro strategies, employing a top-down and value-based investment approach to offer clients diversified alpha with controlled risk.",
      descBullets: [
        "Developed comprehensive trade monitoring platform: modules include Volatility, VaR (absolute and relative), TrackingError, Commitment, leverage computations, and more.",
        "Managed international regulatory reporting for various authorities: FCA, SEC/FINRA, NFA/CFTC, EMIR, and more.",
        "Oversaw audits on investment strategies, risks, and ISAE 3402 compliance.",
        "Engaged with multiple regulators globally: CBI, AMF, FCA, CSSF, and others.",
        "Led product initiatives: created new investment vehicles, managed mergers and liquidations, facilitated cross-border registrations, and handled updates to fund documentation."
      ]
    },
    {
      role: "Economic Cooperation Intern",
      company: "French-Chilean Chamber of Commerce",
      url: "https://www.camarafrancochilena.cl/",
      companylogo: require("./assets/images/cciLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "The French-Chilean Chamber of Commerce and Industry brings together key stakeholders and business leaders from both sides of the ocean to engage in constructive dialogue and identify common challenges and solutions that will benefit both economies. Its primary objective is to  promote economic growth, and stimulate employment and innovation in the Franco-Chilean business community.",
      descBullets: [
        "Offered specialized economic support to French and Chilean companies entering each other's markets, crafting detailed industry reports to facilitate strategic decision-making.",
        "Cultivated an active entrepreneurial community in Santiago through event organization.",
        "Played a key role in the development of a new database.",
        "Assisted in shaping the marketing strategy of the Chamber to enhance its visibility and impact."
      ]
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
      image: require("./assets/images/c-metrics-high-resolution-logo-transparent.png"),
      projectName: "C-Metrics",
      projectDesc:
        "Introducing C-Metrics, an ambitious coding project tailored for cryptocurrency trading enthusiasts. Leveraging Python, Postgres, Django, and Django Channels on the backend, and React on the frontend, this platform offers a sophisticated trading experience. Hosted on AWS with SageMaker integration for machine learning capabilities, C-Metrics provides access to over a hundred exchanges and thousands of trading pairs, including spot, futures, perpetuals, and options. With ElastiCache for caching, ECS and EKS for container orchestration, and Docker for seamless containerization, C-Metrics ensures scalability and reliability. Redis Stream is implemented for efficient data streaming, enabling ultra-low latency data access for real-time insights.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/thomasbs17/C-Metrics"
        }
      ]
    },
    {
      image: require("./assets/images/hadadaLogo.jpeg"),
      projectName: "Hadada Financial",
      projectDesc: (
        <div>
          <span>
            Hadada leverages a fintech framework to enhance banking operations
            across Africa, optimizing workflows to better serve customers.
            During my tenure as a Data Scientist at Hadada, I played a pivotal
            role in various aspects of the company's operations:"
          </span>
          <p>
            Working closely with essential stakeholders such as engineering
            architects, sales teams, and company leadership.
          </p>
          <p>
            Developing and implementing ETL pipelines to collect web data using
            Selenium and reverse engineering techniques.
          </p>
          <p>
            Utilizing machine learning algorithms to forecast financial trends
            and manage fraud detection effectively.
          </p>
        </div>
      ),
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.linkedin.com/company/hadada-financial/"
        }
      ]
    },
    {
      image: require("./assets/images/bet365-logo.png"),
      projectName: "BetXpert Bets Optimization",
      projectDesc:
        "Crafted using Python, MySQL, and Selenium, this project scours international basketball games for comprehensive data including odds, live scores, and player details, storing them in a dedicated database. Logistic Regression, KNeighborsClassifier, DecisionTreeClassifier, RandomForestClassifier, XGBoost, and Artificial Neural Network models were trained and rigorously assessed, favoring the 'precision' metric to address false positives. The final model, XGBoost, achieved 79% precision, deployed for real-time betting suggestions.",
      footerLink: [
        {
          name: "Project was discontinued to comply with Bet365 anti-scraping policy"
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
      title: "Google Cloud Skills Boost",
      subtitle: "Introduction to Generative AI Learning Path",
      image: require("./assets/images/Introduction to Generative AI Learning Path.png"),
      imageAlt: "Google Cloud Skills Boost Logo",
      footerLink: [
        {
          name: "Introduction to Generative AI",
          url: "https://www.cloudskillsboost.google/public_profiles/02cacd84-c95c-47c0-978a-01733732fbb3/badges/4192036?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        },
        {
          name: "Attention Mechanism",
          url: "https://www.google.com/url?q=https://www.cloudskillsboost.google/public_profiles/02cacd84-c95c-47c0-978a-01733732fbb3/badges/4137131?utm_medium%3Dsocial%26utm_source%3Dlinkedin%26utm_campaign%3Dql-social-share&sa=D&source=apps-viewer-frontend&ust=1712361613283760&usg=AOvVaw23Kw05RKN6RpvO03kuRA6F&hl=en-GB"
        },
        {
          name: "Create Image Captioning Models",
          url: "https://www.cloudskillsboost.google/public_profiles/02cacd84-c95c-47c0-978a-01733732fbb3/badges/4170924?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        },
        {
          name: "Encode-Decoder Architecture",
          url: "https://www.cloudskillsboost.google/public_profiles/02cacd84-c95c-47c0-978a-01733732fbb3/badges/4137064?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        },
        {
          name: "Generative AI Fundamentals",
          url: "https://www.cloudskillsboost.google/public_profiles/02cacd84-c95c-47c0-978a-01733732fbb3/badges/4136688?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        },
        {
          name: "Introduction to Generative AI",
          url: "https://www.cloudskillsboost.google/public_profiles/02cacd84-c95c-47c0-978a-01733732fbb3/badges/3938078?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        },
        {
          name: "Introduction to Image Generation",
          url: "https://www.cloudskillsboost.google/public_profiles/02cacd84-c95c-47c0-978a-01733732fbb3/badges/4136762?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        },
        {
          name: "Introduction to LLMs",
          url: "https://www.cloudskillsboost.google/public_profiles/02cacd84-c95c-47c0-978a-01733732fbb3/badges/3938338?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        },
        {
          name: "Introduction to Responsible AI",
          url: "https://www.cloudskillsboost.google/public_profiles/02cacd84-c95c-47c0-978a-01733732fbb3/badges/4136594?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        },
        {
          name: "Transformer Models and BERT Model",
          url: "https://www.cloudskillsboost.google/public_profiles/02cacd84-c95c-47c0-978a-01733732fbb3/badges/4137300?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        }
      ]
    },
    {
      title: "Stanford Online (Coursera)",
      link: "https://www.coursera.org/specializations/machine-learning-introduction",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/stanfordDeepLearning.png"),
      imageAlt: "Stanford Online (Coursera) Logo",
      footerLink: [
        {
          name: "Unsupervised Learning, Recommenders, Reinforcement Learning",
          url: "https://www.coursera.org/account/accomplishments/certificate/MPBM5923V8LF"
        },
        {
          name: "Advanced Learning Algorithms",
          url: "https://www.coursera.org/account/accomplishments/certificate/2EA8NQ26AZUJ"
        },
        {
          name: "Supervised Machine Learning: Regression and Classification",
          url: "https://www.coursera.org/account/accomplishments/certificate/9H9E7ATBZPN3"
        }
      ]
    },
    {
      title: "AMF Certification",
      link: "https://www.amf-france.org/fr",
      subtitle:
        "Received French and European Capital Market Regulation. “Autorité des Marchés Financiers” is the Financial Markets regulator in France",
      image: "https://www.amf-france.org/themes/amf/logo.svg",
      imageAlt: "AMF Logo",
      footerLink: []
    },
    {
      title: "Tulane University (Burkenroad Report Latin America)",
      link: "https://freeman.tulane.edu/burkenroad-reports",
      subtitle:
        "Issued a DCF-based firm valuation of the Argentine chain of supermarkets ”La Anónima”",
      image:
        "https://freeman.tulane.edu/sites/default/files/burkenroad.logo.jpg",
      imageAlt: "Burkenroad Logo",
      footerLink: []
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
