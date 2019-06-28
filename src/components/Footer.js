import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; David Starr  2019. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a>. <a href="http://github.com/dstarrtrey/dstarrtrey.github.io">This Site's GitHub Repo</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
