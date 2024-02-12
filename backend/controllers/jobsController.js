

const jobs = [
    {
        "_id": 1,
        "company": "Google",
        "position": "Software Engineer",
        "location": "Mountain View, CA",
        "salary": "$120,000",
        "duties": {
            "desc": "As a Software Engineer at Google, you will be part of a dynamic team responsible for developing cutting-edge software solutions.",
            "list": [
                "Designing and implementing scalable and efficient software applications.",
                "Collaborating with cross-functional teams to define, design, and ship new features.",
                "Troubleshooting, debugging, and optimizing software for maximum performance.",
                "Staying up-to-date with the latest industry trends and technologies."
            ]
        }
    },
    {
        "_id": 2,
        "company": "Microsoft",
        "position": "Data Scientist",
        "location": "Redmond, WA",
        "salary": "$110,000",
        "duties": {
            "desc": "Join Microsoft's data science team and contribute to the development of innovative data-driven solutions.",
            "list": [
                "Analyzing large datasets to extract valuable insights and inform business decisions.",
                "Building and deploying machine learning models for predictive analytics.",
                "Collaborating with cross-functional teams to _identify data-driven opportunities.",
                "Presenting findings and recommendations to stakeholders."
            ]
        }
    },
    {
        "_id": 3,
        "company": "Amazon",
        "position": "UX/UI Designer",
        "location": "Seattle, WA",
        "salary": "$95,000",
        "duties": {
            "desc": "As a UX/UI Designer at Amazon, you will shape the user experience for a variety of digital products and services.",
            "list": [
                "Creating wireframes, prototypes, and user flows to communicate design concepts.",
                "Collaborating with product managers and developers to bring designs to life.",
                "Conducting user research and usability testing to inform design decisions.",
                "Staying current with design trends and tools."
            ]
        }
    },
    {
        "_id": 4,
        "company": "Tesla",
        "position": "Mechanical Engineer",
        "location": "Palo Alto, CA",
        "salary": "$115,000",
        "duties": {
            "desc": "Join Tesla's engineering team and contribute to the development of cutting-edge electric vehicles.",
            "list": [
                "Designing and analyzing mechanical components for electric vehicles.",
                "Collaborating with cross-functional teams to optimize vehicle performance.",
                "Using CAD software to create detailed engineering drawings.",
                "Participating in prototype testing and val_idation."
            ]
        }
    },
    {
        "_id": 5,
        "company": "Facebook",
        "position": "Product Manager",
        "location": "Menlo Park, CA",
        "salary": "$130,000",
        "duties": {
            "desc": "As a Product Manager at Facebook, you will lead the development of new features and products for the platform.",
            "list": [
                "Defining product strategy and roadmap based on user needs and market trends.",
                "Collaborating with engineering and design teams to deliver high-quality products.",
                "Analyzing user data and feedback to make informed product decisions.",
                "Communicating product vision and updates to stakeholders."
            ]
        }
    },
    {
        "_id": 6,
        "company": "IBM",
        "position": "Cybersecurity Analyst",
        "location": "Armonk, NY",
        "salary": "$105,000",
        "duties": {
            "desc": "Join IBM's cybersecurity team and play a crucial role in safeguarding digital assets and information.",
            "list": [
                "Monitoring and analyzing security alerts and inc_idents.",
                "Implementing and maintaining security measures to protect systems and data.",
                "Conducting vulnerability assessments and penetration testing.",
                "Prov_iding expertise and gu_idance on cybersecurity best practices."
            ]
        }
    },
    {
        "_id": 7,
        "company": "Netflix",
        "position": "Content Writer",
        "location": "Los Gatos, CA",
        "salary": "$85,000",
        "duties": {
            "desc": "As a Content Writer at Netflix, you will craft compelling narratives for a variety of marketing and promotional materials.",
            "list": [
                "Creating engaging and concise copy for advertisements, social media, and website content.",
                "Collaborating with marketing and design teams to ensure brand consistency.",
                "Adapting writing style to target different audience segments.",
                "Staying informed about industry trends and pop culture to create relevant content."
            ]
        }
    },
    {
        "_id": 8,
        "company": "Apple",
        "position": "iOS Developer",
        "location": "Cupertino, CA",
        "salary": "$110,000",
        "duties": {
            "desc": "Join Apple's iOS development team and contribute to the creation of innovative and user-friendly mobile applications.",
            "list": [
                "Designing and developing iOS applications using Swift and Xcode.",
                "Collaborating with cross-functional teams to deliver high-quality app experiences.",
                "Troubleshooting and optimizing code for performance and user experience.",
                "Staying current with iOS development trends and best practices."
            ]
        }
    },
    {
        "_id": 9,
        "company": "Twitter",
        "position": "Social Media Manager",
        "location": "San Francisco, CA",
        "salary": "$95,000",
        "duties": {
            "desc": "As a Social Media Manager at Twitter, you will be responsible for developing and implementing social media strategies to engage users.",
            "list": [
                "Creating and curating content for various social media platforms.",
                "Monitoring social media trends and audience engagement.",
                "Collaborating with marketing and communication teams to align social media efforts.",
                "Analyzing social media metrics to measure and improve campaign effectiveness."
            ]
        }
    },
    {
        "_id": 10,
        "company": "Adobe",
        "position": "Graphic Designer",
        "location": "San Jose, CA",
        "salary": "$90,000",
        "duties": {
            "desc": "Join Adobe's design team and contribute to the creation of visually stunning and impactful graphics for various digital platforms.",
            "list": [
                "Designing graphics for marketing materials, websites, and digital campaigns.",
                "Collaborating with cross-functional teams to understand design requirements.",
                "Using industry-standard design software to bring creative concepts to life.",
                "Staying updated on design trends and incorporating innovative elements into designs."
            ]
        }
    },
    {
        "_id": 11,
        "company": "Uber",
        "position": "Data Analyst",
        "location": "San Francisco, CA",
        "salary": "$100,000",
        "duties": {
            "desc": "As a Data Analyst at Uber, you will analyze and interpret complex data sets to inform business decisions and strategies.",
            "list": [
                "Collecting and processing large volumes of data from diverse sources.",
                "Creating visualizations and reports to communicate data-driven insights.",
                "Collaborating with cross-functional teams to _identify opportunities for optimization.",
                "Developing and maintaining data models for analysis."
            ]
        }
    },
    {
        "_id": 12,
        "company": "Cisco",
        "position": "Network Engineer",
        "location": "San Jose, CA",
        "salary": "$105,000",
        "duties": {
            "desc": "Join Cisco's network engineering team and contribute to the design and maintenance of secure and scalable networks.",
            "list": [
                "Configuring and optimizing network infrastructure.",
                "Troubleshooting network issues and implementing solutions.",
                "Collaborating with IT teams to ensure network security and reliability.",
                "Staying current with networking technologies and best practices."
            ]
        }
    },
    {
        "_id": 13,
        "company": "Airbnb",
        "position": "Customer Experience Specialist",
        "location": "Portland, OR",
        "salary": "$80,000",
        "duties": {
            "desc": "As a Customer Experience Specialist at Airbnb, you will prov_ide exceptional support to users and contribute to a positive customer experience.",
            "list": [
                "Responding to customer inquiries and resolving issues via various channels.",
                "_identifying and escalating complex customer concerns to appropriate teams.",
                "Collaborating with cross-functional teams to improve customer support processes.",
                "Prov_iding feedback to enhance the overall user experience."
            ]
        }
    },
    {
        "_id": 14,
        "company": "LinkedIn",
        "position": "HR Specialist",
        "location": "Sunnyvale, CA",
        "salary": "$90,000",
        "duties": {
            "desc": "Join LinkedIn's Human Resources team and contribute to talent acquisition, employee relations, and HR processes.",
            "list": [
                "Managing the recruitment process, including sourcing and interviewing cand_idates.",
                "Assisting in employee onboarding and orientation programs.",
                "Addressing employee relations issues and prov_iding gu_idance.",
                "Contributing to the development and implementation of HR policies."
            ]
        }
    },
    {
        "_id": 15,
        "company": "Intel",
        "position": "Hardware Engineer",
        "location": "Santa Clara, CA",
        "salary": "$110,000",
        "duties": {
            "desc": "Join Intel's hardware engineering team and contribute to the design and development of cutting-edge computer hardware.",
            "list": [
                "Designing and testing hardware components for computer systems.",
                "Collaborating with cross-functional teams to ensure hardware compatibility.",
                "Troubleshooting and optimizing hardware performance.",
                "Staying current with hardware technology trends."
            ]
        }
    },
    {
        "_id": 16,
        "company": "Spotify",
        "position": "Data Engineer",
        "location": "New York City, NY",
        "salary": "$95,000",
        "duties": {
            "desc": "As a Data Engineer at Spotify, you will contribute to the development and maintenance of data pipelines for analytics and insights.",
            "list": [
                "Building and maintaining scalable data infrastructure.",
                "Collaborating with data scientists and analysts to define data requirements.",
                "Implementing ETL processes to transform and load data from various sources.",
                "Ensuring data quality and integrity across the organization."
            ]
        }
    },
    {
        "_id": 17,
        "company": "Oracle",
        "position": "Database Administrator",
        "location": "Austin, TX",
        "salary": "$100,000",
        "duties": {
            "desc": "Join Oracle's database administration team and contribute to the management and optimization of database systems.",
            "list": [
                "Installing and configuring database software.",
                "Monitoring and optimizing database performance.",
                "Implementing security measures to protect data integrity.",
                "Prov_iding support for database-related issues."
            ]
        }
    },
    {
        "_id": 18,
        "company": "Square",
        "position": "Financial Analyst",
        "location": "San Francisco, CA",
        "salary": "$85,000",
        "duties": {
            "desc": "As a Financial Analyst at Square, you will analyze financial data and contribute to strategic decision-making.",
            "list": [
                "Preparing financial reports and forecasts.",
                "Analyzing trends and prov_iding insights on financial performance.",
                "Collaborating with finance and accounting teams to ensure accuracy.",
                "Assisting in budgeting and financial planning processes."
            ]
        }
    },
    {
        "_id": 19,
        "company": "Reddit",
        "position": "Community Manager",
        "location": "San Francisco, CA",
        "salary": "$75,000",
        "duties": {
            "desc": "As a Community Manager at Reddit, you will engage with users, moderate content, and foster a positive online community.",
            "list": [
                "Monitoring and moderating user-generated content.",
                "Facilitating discussions and addressing user concerns.",
                "Collaborating with marketing teams to promote community engagement.",
                "Implementing and enforcing community gu_idelines."
            ]
        }
    },
    {
        "_id": 20,
        "company": "NASA",
        "position": "Aerospace Engineer",
        "location": "Houston, TX",
        "salary": "$120,000",
        "duties": {
            "desc": "Join NASA's aerospace engineering team and contribute to the design and development of spacecraft and aerospace systems.",
            "list": [
                "Conducting research and analysis to improve aerospace technologies.",
                "Designing and testing components for space missions.",
                "Collaborating with mult_idisciplinary teams to achieve project goals.",
                "Staying current with advancements in aerospace engineering."
            ]
        }
    }



];

const postedJobs = (req, res) => {
    res.send(jobs);
}

export { postedJobs,  };