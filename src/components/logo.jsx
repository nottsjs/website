import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Logo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 240) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img className={className} fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default Logo
