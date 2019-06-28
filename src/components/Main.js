import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { images } from '../images.json';
import foodQImage from '../images/food-q.png';
import chess from '../images/chess.gif';
import kcrmccoy from '../images/kcrmccoy.gif';
import dinnerAndAShow from '../images/dinner-and-a-show.gif';
import sendNewEmail, { validateEmail, validateTextExists } from '../email-req';

const Download = styled.p`
  text-align: center;
  padding: 0;
`;

const Carousel = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  justify-items: center;
  align-items: top;
  grid-column-gap: 7px;
  background-color: transparent;
  width: 100%;
  overflow: hidden;
  span {
    font-weight: bold;
    font-size: 40px;
    &:hover{
      cursor: pointer;
    }
    user-select: none;
  }

  img {
    width: 100%;
    max-width: 50vh;
    overflow: hidden;
    margin: auto;
  }
`;

const PortfolioItem = styled.div`
  margin-top: 60px;
  .port-heading {
    margin: 10px 0 8px 0;
    padding: 20px 0;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    h3 {
      display: inline-block;
    }
    &.smaller {
      font-size: 0.55rem;
    }
  }
  .image-container {
    position: relative;
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    margin-top: 10px;
    border: 2px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    img, svg {
      position: absolute;
      top: 2px;
      overflow: hidden;
      opacity: 0.4;
      background-color: rgba(255,255,255,0.075);
      width: 100%;
      height: calc(100% -2px);
    }
    div {
      position: absolute;
      top: 8%;
      left: 2.5%;
      width: 95%;
      p {
        background-color: rgba(0,0,0,0.4);
        padding: 7px 8px;
      }
      .italic {
        font-size: 1.3rem;
        font-style: italic;
        font-weight: bold;
      }
    }
  }
`;

const Icon = styled.svg`
    width: 100%;
    height: 100%;
`;

class Main extends React.Component {
  state = {
    index: 0,
    name: '',
    email: '',
    message: '',
    emailValid: true,
    nameValid: true,
    messageValid: true
  }

  nextImage = dir => {
    const { index } = this.state
    const prev = index === 0
      ? images.length - 1
      : index - 1;
    const next = index === images.length - 1
      ? 0
      : index + 1;
    dir === 'left' 
      ? this.setState({ index: prev }) 
      : this.setState({ index: next });
  }

  sendEmail = event => {
    event.preventDefault();
    const {name, email, message} = this.state;
    if (validateEmail(email) && validateTextExists(name) && validateTextExists(message)) {
      const data = {name, email, message};
      console.log('input:', data);
      const url = `https://portfolio-emailer.herokuapp.com/email`;
      sendNewEmail(url, data)

      this.setState({
        name: '',
        email: '',
        message: '',
        emailValid: true,
        nameValid: true,
        messageValid: true
      });
    } else {
      if (!validateEmail(email)) {
        this.setState({ emailValid: false });
      }
      if (!validateTextExists(name)) {
        this.setState({ nameValid: false });
      }
      if (!validateTextExists(message)) {
        this.setState({ messageValid: false });
      }
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    const isValid = name + 'Valid';
    this.setState({[name]: value});
    if (!this.state[isValid]) {
      switch (name) {
        case 'name':
          if (validateTextExists(value)) {
            this.setState({ nameValid: true });
          }
          break;
        case 'email':
            if (validateEmail(value)) {
              this.setState({ emailValid: true });
            }
          break;
        case 'message':
          if (validateTextExists(value)) {
            this.setState({ messageValid: true });
          }
          break;
        default: 
          return;
      }
    }
  }

  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <Download><b><a href="David_Starr_Resume.pdf" download="David Starr Resume">Download My Resume</a></b></Download>
          <Carousel>
            <span onClick={() => this.nextImage('left')}>&lsaquo;</span>
            <img src={images[this.state.index].image} alt="David Starr, sleeping with his physics homework" />
            <span onClick={() => this.nextImage('right')}>&rsaquo;</span>
          </Carousel>
          <h3 className="align-center">I am David Starr.</h3>
          <p>I have ridden a bike across Europe, Been in the opening act for a <a href="https://www.nicoandvinz.com/">Nico & Vinz</a> concert (in a <a href="http://walkitoff.bandcamp.com/">pop punk band</a>), fallen in love, and become enamored with web development—in that chronological order.</p>
          <h4>I like to have fun with what I do.</h4>
          <p>Whether I'm writing music or code, I am challenging myself to improve at every opportunity. Whether it's an unfamiliar library or a ridiculous time change (drummers love me), I find enjoyment in a challenge and overcoming it.</p>
          <h4>I am a self-starter.</h4>
          <p>I inadvertantly started coding in 2014 for a school project in Python. I gradually started learning C++ as well—and decided neither were totally for me. I was very excited to start developing websites, and JavaScript was very intuitive to start with as I could see exactly what I was doing. Eventually it became clear that I could get a lot from a boot camp. I relocated to California, and learned what it takes to be a Web Developer. I began freelancing for a couple local businesses, and am also open to opportunities. Feel free to reach out! <span role="img" aria-label="boy smiling">👦</span></p>
          {close}
        </article>

        <article id="portfolio" className={`${this.props.article === 'portfolio' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Portfolio</h2>
          <Download><b><a href="David_Starr_Resume.pdf" download="David Starr Resume">Download My Resume</a></b></Download>
          <PortfolioItem>
            <span className="port-heading"><h3>Food Q</h3> — <a href="https://github.com/dstarrtrey/Food-Q">GitHub</a> | <a href="https://foodq-react-prod.herokuapp.com">Demo</a></span>
            <div className="image-container">
              <img src={foodQImage} alt="Food Q" />
              <div>
                <p className="italic align-center">Customer and restaurant-facing waitlist application</p>
                <p>For this project, I worked with two developers and built a back end using Prisma and GraphQL Yoga which interacted with a React/Apollo Client front end. A lot of my work consisted in working with WebSockets and Apollo's GraphQL queries to create a realtime app that a restaurant can use to track its waiting customers.</p>
                <p>I also enabled a customer-facing page that allows the customer to track their progress toward being seated (ie. there are three parties ahead, and the page will update in realtime as those parties are seated.)</p> 
                <p>Additionally I helped to set up the ability to send automatically-generated texts to a customer in order to receive their unique link to track their progress. This was done through the Twilio API, and using React Router wildcards to responsively generate a page based on the customer's ID in the database.</p>
              </div>
            </div>
          </PortfolioItem>
          <PortfolioItem>
            <span className="port-heading"><h3>2 Player Online Chess</h3> — <a href="http://github.com/dstarrtrey/Chess-Board-2Player">GitHub</a> | <a href="http://dstarrtrey.github.io/Chess-Board-2Player">Demo</a></span>
            <div className="image-container">
              <img src={chess} alt="2 Player Online Chess Game"/>
              <div>
                <p className="italic align-center">Online app that allows two remote users to play chess with one another</p>
                <p>I made this app for fun one week using Firebase, jQuery, and a WHOLE lot of conceptual thinking—much more than I've ever put into an actual game of chess.</p>
                <p>In general, the process went from creating the game board, putting the pieces onto the board, then getting the pieces to move. Once movement was possible, I had to make algorithms for each type of piece with conditions for each—whether they could capture another piece, whether there was one of their own or the opponent's pieces blocking the path, or if there is an edge-case possible (Castle move, En Passant, being in Check, etc.).</p>
              </div>
            </div>
          </PortfolioItem>
          <PortfolioItem>
            <span className="port-heading"><h3>KCRMCCOY.COM</h3> — <a href="http://github.com/dstarrtrey/kcrmccoy">GitHub</a> | <a href="http://www.kcrmccoy.com/">Demo</a></span>
            <div className="image-container">
              <img src={kcrmccoy} alt="KCRMCCOY.COM"/>
              <div>
                <p className="italic align-center">Static portfolio website commission for LEGO animator and designer.</p>
                <p>As this was a commission, I spent the majority of this project proposing designs and adapting them in tandem with Casey using Figma and CSS for easy mockups. The development itself was done with vanilla HTML, CSS, and JavaScript.</p>
                <p>Manually set up fetching without loading each page individually, cutting load times and making a freaky smooth UX. Additionally homemade a slideshow that calls the Flickr API and will take every picture from a gallery (can be modified at Casey's heart's content) and periodically cycle through them.</p>
              </div>
            </div>
          </PortfolioItem>
          <PortfolioItem>
            <span className="port-heading"><h3>Dinner and a Show</h3> — <a href="http://github.com/dstarrtrey/dinner-and-a-show">GitHub</a> | <a href="/Dinner-and-a-Show">Demo</a></span>
            <div className="image-container">
              <img src={dinnerAndAShow} alt="Dinner and a Show"/>
              <div>
                <p className="italic align-center">Location-based concert finder—finds nearby food options as well for pre/mid/post-concert cravings</p>
                <p>I acted as the primary JavaScript Developer for a team of three. Collaborated using GitHub version control, slack, and in-person meetups for major decisions. This app takes a user's location (or specified location, keyword, or date) and returns music events with food venues nearby, providing dinner—and a show—for the end user.</p>
                <p>I used the ticketmaster and mapquest APIs for this application, and utilized geolocation to automatically find a few options for the user.</p>
              </div>
            </div>
          </PortfolioItem>
          <PortfolioItem>
            <span className="port-heading"><h3>Coming Soon</h3></span>
            <div className="image-container">
              <Icon viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="800" height="800" fill="white"/>
                <path d="M0 0H800V800H0V0Z" fill="#F0DB4F"/>
                <path d="M163.724 731H275.539C387.889 731 467.069 656.635 467.069 549.1C467.069 441.565 387.354 367.2 275.539 367.2H163.724V731ZM238.624 665.195V433.005H271.794C352.579 433.005 389.494 481.155 389.494 549.1C389.494 617.045 352.579 665.195 271.794 665.195H238.624Z" fill="#323330"/>
                <path d="M613.491 735.815C684.646 735.815 737.611 698.9 737.611 631.49C737.611 568.895 701.766 541.075 638.101 513.79L619.376 505.765C587.276 491.855 573.366 482.76 573.366 460.29C573.366 442.1 587.276 428.19 609.211 428.19C630.611 428.19 644.521 437.285 657.361 460.29L715.676 422.84C691.066 379.505 656.826 362.92 609.211 362.92C542.336 362.92 499.536 405.72 499.536 461.895C499.536 522.885 535.381 551.775 589.416 574.78L608.141 582.805C642.381 597.785 662.711 606.88 662.711 632.56C662.711 653.96 642.916 669.475 611.886 669.475C574.971 669.475 554.106 650.215 538.056 624L477.066 659.31C499.001 702.645 543.941 735.815 613.491 735.815Z" fill="#323330"/>
              </Icon>
              <div>
                <strong>I am always working on something and I'm also a huge fan of collaborating—right now I have a few things going on:</strong> 
                <ul>
                  <li>I am working with a fledgling business, a gaming cafe, to start their internet presence and build their website as well as set up their tournaments and database structure. I have a large amount of sway in the digital marketing side for this company, and I am working hard to establish a design system that will last well beyond my time working with them.</li>
                  <li>I am working with a couple friends to put together a mobile app (using React Native) that will be using the device's camera and Amazon Textract to read the ingredients from any recipe you can take a picture of and put together a shopping list for it. So far this is a lot of fun, and I am working with some new tech that I am excited for!</li>
                </ul>
              </div>
            </div>
          </PortfolioItem>
          <PortfolioItem>
            <h3 className="smaller port-heading align-center">You can find many more projects on my <a href="http://dstarrtrey.github.io/portfolio">complete portfolio</a> or my <a href="http://www.github.com/dstarrtrey">GitHub</a>.</h3>
          </PortfolioItem>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form onSubmit={this.sendEmail}>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input className={this.state.nameValid ? '' : 'input-error'} type="text" name="name" value={this.state.name} id="name" onChange={this.handleChange}  />
              {this.state.nameValid || <small>Please enter a name.</small>}
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input className={this.state.emailValid ? '' : 'input-error'} type="text" name="email" value={this.state.email} id="email" onChange={this.handleChange}  />
              {this.state.emailValid || <small>Please enter a valid email.</small>}
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea className={this.state.messageValid ? '' : 'input-error'} name="message" id="message" value={this.state.message} rows="4" onChange={this.handleChange}></textarea>
              {this.state.messageValid || <small>Please enter a message.</small>}
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="http://www.linkedin.com/in/david-l-starr" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="http://www.instagram.com/flavorxdave" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="http://www.github.com/dstarrtrey" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="http://www.twitter.com/whoisdavidstarr" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main