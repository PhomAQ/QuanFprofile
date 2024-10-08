
import './about.scss'

export default function About() {

    return (
        <div className='section about'>
          <div className="container-about">
            <div className="content-about">
              <h2 className="heading-main">
                <span className="heading-top">About me</span>
                <span className="heading-bottom">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</span>
              </h2>
              <div className="about-content">
                <div className="about-left">
                  <h3>Get to know me!</h3>
                  <div className="left-detail">
                    <p>I'm a <strong>Frontend Focused Web Developer</strong> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                    <p>I follow content related to web development and programming to stay updated and informed. Feel free to connect with me on <a href="">Tiktok</a> and <a href="">Instagram </a>  for more insights and discussions in the developer community</p>
                    <p>I'm open to <strong>Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.</p>
                  </div>
                  <div>
                    <a className='btn'  href="">My CV</a>    
                  </div>
                </div>
                <div className="about-right">
                   <h3>My skills progresss</h3>
                   <div className="right-detail">
                      <li><h2>markup/styling language</h2>
                      <span className='bar'><span className='html'></span></span>
                      </li>
                      <li><h2>css framewors</h2>
                      <span className='bar'><span className='css'></span></span>
                      </li>
                      <li><h2>javascript framworks</h2>
                      <span className='bar'><span className='javascript'></span></span>
                      </li>
                      <li><h2>programming language</h2>
                      <span className='bar'><span className='react'></span></span>
                      </li>
                      <li><h2>tools</h2>
                      <span className='bar'><span className='nodejs'></span></span>
                      </li>
                   </div>
                </div>
              </div>
            </div>
          </div>
          </div>
    )
  }

