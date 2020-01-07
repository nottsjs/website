import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const NearformLogo = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "nflogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 192) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img className={className} fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default NearformLogo
