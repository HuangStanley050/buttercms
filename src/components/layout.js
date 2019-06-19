/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.css";
import Header from "./header";
import Footer from "./footer";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "butter-y.png" }) {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      file2: file(relativePath: { eq: "butter-w.png" }) {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <main>
      <Header image={data.file.childImageSharp.fluid} />
      {children}
      <Footer image={data.file2.childImageSharp.fluid} />
    </main>
  );
};

export default Layout;
