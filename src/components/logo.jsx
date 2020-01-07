import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Logo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 304, maxHeight: 304) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img className={className} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Logo
