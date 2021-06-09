import React from "react"
import Layout from "../components/Layout"
import { IconContext } from "react-icons"
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { AiOutlineConsoleSql } from "react-icons/ai"
import { SiPowerbi } from "react-icons/si"
import {BsCode} from "react-icons/bs"
import { DiMongodb, DiNodejsSmall } from "react-icons/di"
import { Container } from "react-bootstrap"
import Slide from 'react-reveal/Slide';

export default function About() {
  return (
    <IconContext.Provider
      value={{ color: "blue", className: "global-class-name", size: "1em" }}
    >
      <Layout>
      <Slide right> 
        <div>
          <h1>About me</h1>
          <p>
            I am a well-balanced individual with interest in software
            development and more specifically Javascript and related
            technologies such as ReactJS. Detailed and focused with expertise in
            full stack web application development to ensure I can contribute to
            any aspect of a project. Exceptionally dedicated professional with
            keen interpersonal and organisational skills, as well as quality
            assurance, personal development, and exceptional technical
            expertise.
          </p>

          <Container>
            <h2>Skills</h2>

            <p>
              <li>
                {" "}
                <FaReact /> ReactJS
              </li>
              <li>
                {" "}
                <FaJsSquare /> JavaScript
              </li>
              <li>
                {" "}
                <DiNodejsSmall /> Node
              </li>
              <li>
                {" "}
                <BsCode /> Express
              </li>
              <li>
                {" "}
                <DiMongodb /> MongoDB
              </li>
              <li>
                {" "}
                <AiOutlineConsoleSql /> SQL
              </li>
              <li>
                {" "}
                <SiPowerbi /> PowerBI
              </li>
              
              <li>
                {" "}
                <FaHtml5 /> HTML
              </li>
              <li>
                {" "}
                <FaCss3Alt /> CSS
              </li>
              
             
            </p>
          </Container>
        </div>
        </Slide>
      </Layout>
    </IconContext.Provider>
  )
}
