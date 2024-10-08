
import './home.scss'
import {GithubIcon,TelegramIcon} from '../Icon/indexIcon'





export default function Home() {
  
  return (
 
    <div className='section home'>
    <div className="container-home">
    <div className='content-home'>
    <div className='hero-main'>
          <div className='hero-text'>
            <div className='hero-text-h1'>
            <h1>
              Front-End React <br/> Developer
            </h1>
          <div className="hi-icon"></div>
            </div>
            <p>
            Hi, I'm Hoang Bao Quan. A passionate Front-end React Developer based in QuangTri, VietNam. 📍
            </p>
            <span>
              <a> <GithubIcon className='icon' /></a>
              <a > <TelegramIcon className='icon'/></a>
            </span>
          </div>
          <div className='hero-img'></div>
          <div className='hero-skill'>
              <p>Tech Stack</p>  
              <ul>
                <li>
                  <img src="https://skillicons.dev/icons?i=html,css" />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=js,ts" />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=react,next" />
                </li>
                <li>
                  <img src="https://skillicons.dev/icons?i=tailwind,scss" />
                </li>
              </ul>
          </div>
    </div>
  </div>
    </div>
    </div>
  );
}

