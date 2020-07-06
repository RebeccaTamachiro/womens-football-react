import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer mx-2 my-2 row">
      <div className="col-md-4">
        <h5>Other websites you can check out</h5>
        <ul className="externalLinks">
          <li>
            <a
              href="https://www.womeninfootball.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Women in Footbal
            </a>
          </li>
          <li>
            <a
              href="https://www.womenssoccerunited.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Women's Soccer United
            </a>
          </li>
          <li>
            <a
              href="https://www.fifa.com/womens-football/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FIFA Women's Football
            </a>
          </li>
          <li>
            <a
              href="https://shekicks.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SheKicks Magazine
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-8 description">
        <p>
          This website is open-sourced and has been coded mainly for practice by
          Rebecca Tamachiro. Please feel free to check out other projects on
          <a
            href="https://github.com/RebeccaTamachiro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          , reach out to talk about those and, of course, spread the good word
          about women who rock, playing the sport that they love.
        </p>
      </div>
    </footer>
  );
}
