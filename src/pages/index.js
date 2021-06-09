import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { StaticImage } from "gatsby-plugin-image"
import Slide from 'react-reveal/Slide';

export default function Home(data) {

  return (
    <Layout>
      <Slide right> 
        <section className={styles.header}>
      
        <div>
        
          <h3>Develop & Deploy</h3>
             <p>Cathy Makinde | Web Developer </p>
          <Link className={styles.btn} to="/portfolio">My Portfolio</Link>
   
        </div>
    

        
         <StaticImage src="../images/banner.png" alt="Banner" /> 
         
      </section>
      </Slide>
    </Layout>
  )
}

export const query = graphql `
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    
    childImageSharp {
      fluid{
    
   
      ...GatsbyImageSharpFluid
    }
  }
  }
}
  `

 