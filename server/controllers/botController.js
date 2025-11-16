import User from '../models/userModel.js';
import Bot from '../models/botModel.js';


export const Message = async (req, res) => {
    try{
        const { text } = req.body;
        if(!text?.trim()){
            return res.status(400).json({ error: 'Message text is required' });
        }

        const user= await User.create({
            sender:"user",
            text
        })
        //data
        const botResponses = {
            "hello": "Hi there! How can I assist you today?",
            "help": "Sure! What do you need help with?",
            "how are you": "I'm just a bot, but I'm here to help you!",
            "who are you": "I'm your friendly chatbot assistant.",
            "default": "I'm sorry, I didn't understand that. Can you please rephrase?",
            "what is your name": "I am ChatBot, your virtual assistant.",
            "tell me a joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "what is mern stack": "MERN stack is a combination of MongoDB, Express.js, React.js, and Node.js used for building web applications.",
            "thank you": "You're welcome! If you have any more questions, feel free to ask.",
            "bye": "Goodbye! Have a great day!",
            "what can you do": "I can assist you with various tasks, answer questions, and provide information on a wide range of topics.",
            "tell me a fun fact": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
            "what is ai": "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans.",
            "what is javascript": "JavaScript is a versatile programming language commonly used for web development to create interactive and dynamic web pages.",
            "define bot": "A bot is a software application designed to automate tasks, often simulating human behavior, such as chatting or performing repetitive actions online.",
            "what is node js": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript on the server side to build scalable network applications.",
            "what is react js": "React.js is a popular JavaScript library for building user interfaces, particularly single-page applications, by creating reusable UI components.",
            "what is mongodb": "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it easy to work with unstructured data and scale applications.",
            "what is express js": "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.",
            "what is full stack development": "Full stack development refers to the practice of working on both the front-end and back-end aspects of web applications, encompassing everything from user interfaces to server-side logic and databases.",
            "what is api": "An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate and interact with each other.",
            "what is http": "HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web, enabling the transfer of hypertext documents between clients and servers.",
            "what is css": "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and layout of web pages, allowing developers to control the visual appearance of HTML elements.",
            "what is html": "HTML (Hypertext Markup Language) is the standard markup language used to create and structure content on the web, defining elements such as headings, paragraphs, links, and images.",
            "what is programming": "Programming is the process of designing, writing, testing, and maintaining code that instructs computers to perform specific tasks or functions.",
            "what is software development": "Software development is the process of creating, designing, deploying, and maintaining software applications through various methodologies and programming languages.",
            "what is debugging": "Debugging is the process of identifying, analyzing, and fixing errors or bugs in software code to ensure that the application functions correctly and efficiently.",
            "what is version control": "Version control is a system that tracks changes to files and code over time, allowing developers to collaborate, manage revisions, and revert to previous versions when needed.",
            "what is git": "Git is a distributed version control system that allows developers to track changes in source code during software development, enabling collaboration and efficient management of code repositories.",
            "what is github": "GitHub is a web-based platform that uses Git for version control and provides hosting for software development projects, enabling collaboration, code sharing, and project management among developers.",
            "what is cloud computing": "Cloud computing is the delivery of computing services, including storage, processing power, and software, over the internet, allowing users to access and use resources on-demand without owning physical infrastructure.",
            "what is ai": "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans.",
            "what is machine learning": "Machine learning is a subset of AI that focuses on developing algorithms and statistical models that enable computers to learn from and make predictions or decisions based on data.",
            "what is data science": "Data science is an interdisciplinary field that combines statistics, computer science, and domain knowledge to extract insights and knowledge from structured and unstructured data."
            
        };
        const normalizedText = text.toLowerCase().trim();

        const botReply = botResponses[normalizedText] || botResponses["default"];
        const bot= await Bot.create({
            text:botReply
        })
        return res.status(200).json({
            userMessage: user.text,
            botMessage: bot.text
        })
    
    } catch (error) {
        console.log("Error in Message controller:", error);
        return res.status(500).json({ error: 'Internal Server Error' });

    }
};
