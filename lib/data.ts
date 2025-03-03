import React from "react";

import tpImg from "@/public/projects/taskPlanner.png";
import etImg from "@/public/projects/expenseTracker.png";
import phImg from "@/public/projects/pythonHunt.png";
import prImg from "@/public/projects/predictipro.png";
import erImg from "@/public/projects/eventsReg.png";

import html from "@/public/tech/html.png";
import css from "@/public/tech/css.png";
import javascript from "@/public/tech/javascript.png";
import cplusplus from "@/public/tech/Cpp.png";  
import python from "@/public/tech/python.png";
import reactjs from "@/public/tech/reactjs.png";
import nextJs from "@/public/tech/nextjs.svg";
import tailwind from "@/public/tech/tailwind.png";
import bootstrap from "@/public/tech/bootstrap.png"

import nodejs from "@/public/tech/nodejs.png";
import typescript from "@/public/tech/typescript.png";
import django from "@/public/tech/django.png";
import expressjs from "@/public/tech/expressjs.svg";
import webpack from "@/public/tech/webpack.png";

// Databases
import firebase from '@/public/tech/firebase.png'
import mongodb from "@/public/tech/mongodb.png";
import mysql from '@/public/tech/mysql.png'
import postgresql from '@/public/tech/postgresql.svg'
import dynamodb from '@/public/tech/aws-dynamodb.svg'

// Other tools
import postman from '@/public/tech/postman.svg'
import docker from "@/public/tech/docker.png";
import git from "@/public/tech/git.png";
import aws from "@/public/tech/aws.svg";

export const links = [
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    location: "CABS, DRDO",
      
    description: ["Developed a logging database system for aircraft with multiple sensors, using MongoDB and C++ and ensure scalability and reliability.", 
                  "Added semaphores and Mutex locks in addition to a simple queue service to optimise read requests by 200%."],
    icon: "/company/drdo.png",
    date: "Nov 2023 - Dec 2023",
  },
  {
    title: "Developer Intern",
    location: "Clinigo",
    description:
      ["Developed RESTful APIs that managed user authentication, data processing, and interfaced with third-party services like ABDM using Express.js and Node.js. Documented all APIs following the OpenAPI specification using Swagger.", 
        "Designed the database schema using MongoDB, ensured the security and performance of the system and led a team to build the application."],
    icon: "/company/clinigo-logo.png",
    date: "May 2023 - Sep 2023",
  },
  {
    title: "Lead and core-commitee member",
    location: "RoboVITics, VIT Vellore",
    description:["Guided juniors in the domain of web development and conducted regular progress checks, and supervised a team to develop a website for the hackathon Vortex360.","Led the documentation team to draft marketing content and technical documentation, and authored MoUs and agreements."
,"Supervised the event arrangements for Robowars, South India's largest combat robotics event and Vortex360, a CAD modelling hackathon, and skillfully coordinated with various members and management to ensure the success of the events."],
    icon: "/company/robovitics.png",
    date: "Jan 2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Expense Tracker",
    description:
      "Developed an expense tracker dashboard where users can add expenses with receipts and dashboard providing insights and analytics.",
    tags: ["Next.js", "Postgres", "Tailwind", "ChartsJS"],
    imageUrl: etImg,
  },
  {
    title: "Python Hunt",
    description:
      "A open-source website for adding concepts and learn about Python. Approved 10+ pull requests as a maintainer and handled Django config.",
    tags: ["HTML", "CSS", "Django", "Bootstrap", "Postgres"],
    imageUrl: phImg,
  },
  {
    title: "Task Planner",
    description:
      "A comprehensive task planner application that allows users to create tasks, repeat tasks and allocate time to complete their work efficiently.",
    tags: ["HTML", "CSS", "JavaScript", "Django", "MySQL"],
    imageUrl: tpImg,
  },
  {
    title: "PredictiPro",
    description:
      "An innovative web application that delivers accurate and actionable demand forecasts to revolutionize retail planning.",
    tags: ["React", "TailwindCSS", "Django", "Numpy", "Pandas"],
    imageUrl: prImg,
  },
  {
    title: "Events registration website",
    description:
      "Contributed to this web-based platform with sign-in using Google function and register for events, generate tickets.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase", "Webpack"],
    imageUrl: erImg,
  }
] as const;

export const skillsData = [
  { name: "HTML", icon: html, stars: 5 },
  { name: "CSS", icon: css, stars: 5 },
  { name: "JavaScript", icon: javascript, stars: 4 },
  { name: "TypeScript", icon: typescript, stars: 3 },
  { name: "Python", icon: python, stars: 4 },
  { name: "C++", icon: cplusplus, stars: 4 },
  { name: "React", icon: reactjs, stars: 5 },
  { name: "Next.js", icon: nextJs, stars: 4 },
  { name: "Tailwind", icon: tailwind, stars: 5 },
  { name: "Bootstrap", icon: bootstrap, stars: 5 },
  { name: "Node.js", icon: nodejs, stars: 5 },
  { name: "Express", icon: expressjs, stars: 5 },
  { name: "Django", icon: django, stars: 5 },


  { name: "MongoDB", icon: mongodb, stars: 4 },
  { name: "DynamoDB", icon: dynamodb, stars: 3 },
  { name: "Firebase", icon: firebase, stars: 4 },
  { name: "PostgreSQL", icon: postgresql, stars: 4 },
  { name: "MySQL", icon: mysql, stars: 5 },

  { name: "Git", icon: git, stars: 5 },
  { name: "Postman", icon: postman, stars: 4 },
  { name: "Webpack ", icon: webpack, stars: 4 },
  { name: "Docker", icon: docker, stars: 4 },
  { name: "AWS", icon: aws, stars: 5 },
  
] as const;


