import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const RebelLogo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "rebel-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img className={className} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default RebelLogo
