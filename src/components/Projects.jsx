/* eslint-disable max-len */
import React from 'react';
import SectionTitle from './section_title/SectionTitle';
import SectionContainer from './section_container/SectionContainer';
import SingleProject from './single_project/SingleProject';
import tenoriImage from '../IMG/tenori-refactor.png';
import twentyFourgo from '../IMG/24go.png';
import PandemicGA from '../IMG/pandemicGeorgia.png';
import wizardInTheWoods from '../IMG/wizardInTheWoods.gif';


export const projectList = [
  {
    src: tenoriImage,
    url: "https://tenori-dom.com",
    alt: "tenori DOM project image",
    title: "Tenori-DOM",
    github: "https://github.com/LockettPundt/tenori-dom-refactor-svelte",
    text: (
      <>
        <p>
          A Tenori-On inspired musical instrument created with Svelte, GraphQL, PostgreSQL ( API GitHub
            <a 
            href="https://github.com/LockettPundt/Tenori-API"
            target="_blank"
            rel="noopener noreferrer"
            >
            {' '}
            <em>here</em>
          </a>
           ) and the Web Audio API. The instrument
          is broken down into a 16x16 grid of notes. Each row contains a single note
          and each column contains every note from c2 - d4. You can add notes by clicking on the circles.
          You can alter the sound of of the instrument
          by adjusting the wave form, octave, release, tempo and volume with the corresponding
          control. Enjoy!
        </p>
        <p>
          Currently works best on desktop using Chrome. A more
          mobile friendly version coming soon...
        </p>
      </>
    ),
  },
  {
    src: "https://i.postimg.cc/rF6zWHdT/Screen-Shot-2020-06-18-at-3-23-17-PM.png",
    alt: "WhasssApp room image",
    title: "WhasssApp",
    url: "https://www.dropbox.com/s/kpo5yib6171equ1/WhasssApp-0.1.0.dmg?dl=0",
    github: "https://github.com/LockettPundt/WhasssApp",
    text: (
      <>
        <p>Simple chat app built with React, Electron, Grommet and Socket.io. Users can 
          create or join chat rooms. Once a room is created, the chat history is saved and users
          can revisit the conversation at any time to pick up where they left off.
        </p>
        <p>
          To download the App, visit 
          <a 
          href="https://www.dropbox.com/s/kpo5yib6171equ1/WhasssApp-0.1.0.dmg?dl=0"
          target="_blank"
          rel="noopener noreferrer"
          >
            {' '}
            <em>here</em>
          </a>
        </p>
        </>
    )
  },
  {
    src: "https://i.postimg.cc/W4jkn36Q/Screen-Shot-2020-06-23-at-12-26-14-PM.png",
    alt: "brutality screenshot",
    title: "Brutality Assistant",
    url: "https://brutalityassistant.com",
    github: "https://github.com/LockettPundt/BrutalityAssistant",
    text: 
      (
        <>
        <p>
          Brutality Assistant is a job application tracker App I created to aid me in the, at times, brutal 
          job searching process. Users create an account where you can post, update and delete jobs you've
          applied for. An archive of deleted jobs coming soon.
        </p>
        <p>
          This app was created using React, MongoDB, Node, Express, JSON Web Tokens and Grommet.
        </p>
        </>
      ),
  },
  {
    src: twentyFourgo,
    alt: "24go landing page image",
    title: "24GO",
    url: "http://24go.lpiv.co",
    github: "https://github.com/LockettPundt/Group-Front-End-Project",
    text: (
      <>
        <p>
          I&apos;m a frequent traveller and sometimes you find yourself with an
          unexpected night off in an unfamiliar city. Or perhaps you&apos;re at
          home bored and curious as to what may be happening in your own
          city tonight.
        </p>
        <p>
          The goal of this project was to take a ZIP code or city,
          provided by the user, and generate a list of local events as
          well as cultural sites in the given location. Using various
          APIs, the site would provide local weather, music, sports,
          comedy and film events happening that day. Each event listed has
          a link to their respective page and each cultural site has a link
          to the wikipedia page.
        </p>
      </>
    ),
  },
  {
    src: PandemicGA,
    alt: "Pandemic Georgia game image",
    title: "Pandemic Georgia",
    url: "https://pandemic-georgia.lpiv.co",
    github: "https://github.com/LockettPundt/pandemic-georgia",
    text: (
      <p>
        Based on the board game Pandemic, this was my first full stack group project created
        alonside 3 other developers. The premise for the game was to make a smaller and
        more localized version of the popular game using a database to record the game state
        and inform the board. The game takes place over the course of 19 days and in that time
        you are travelling across the state in search of research. Winning is accomplished with a
        cooperative effort to uncover 4 research breakthroughs before the epidemic becomes untenable.
        Built using Node.js, Express, HTML, CSS, JS and PostgreSQL.
      </p>
    ),
  },
  {
    src: wizardInTheWoods,
    alt: "A wizard in trouble",
    title: "Wizard In The Woods",
    url: "https://github.com/LockettPundt/Pygame-project",
    github: "https://github.com/LockettPundt/Pygame-project",
    text: (
      <p>
        Built in Python, my first project, Wizard In The Woods, is a top
        down shooter game with a nod to 16-bit fantasy RPGs. It starts
        simple enough with our hero finding himself in an unfortunate
        situation, alone in the woods. The rest is up to you...
      </p>
    )
  }
]

const Projects = () => (
  <SectionContainer>
    <SectionTitle title="Projects" />
    {projectList.length > 0 && projectList.map(x => 
      <SingleProject {...x} key={x.title}/>
    )}
  </SectionContainer>
);


export default Projects;
