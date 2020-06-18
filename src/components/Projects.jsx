/* eslint-disable max-len */
import React from 'react';
import SectionTitle from './section_title/SectionTitle';
import SectionContainer from './section_container/SectionContainer';
import SingleProject from './single_project/SingleProject';
import tenoriImage from '../IMG/tenoriDOM.png';
import twentyFourgo from '../IMG/24go.png';
import PandemicGA from '../IMG/pandemicGeorgia.png';
import wizardInTheWoods from '../IMG/wizardInTheWoods.gif';

const Projects = () => (
  <SectionContainer>
    <SectionTitle title="Projects" />
    <SingleProject
      src={tenoriImage}
      alt="tenori DOM project image"
      title="Tenori-DOM"
      url="https://tenori-dom.com"
      github="https://github.com/LockettPundt/Tenori-DOM"
      text={(
        <>
          <p>
            A Tenori-On inspired musical instrument created with React and the Web Audio API. The instrument
            is broken down into a 16x16 grid of notes. Each row contains a single note
            and each column contains every note from c2 - d4. You can add notes by clicking on the circles
            and they will turn green once activated. You can alter the sound of of the instrument
            by adjusting the wave form, octave, release, tempo and volume with the corresponding
            control. Enjoy!
          </p>
          <p>
            Some features of the Web Audio API used are not
            yet fully supported by Firefox. Currently works best on desktop using Chrome or Edge. A more
            mobile friendly version coming soon...
          </p>
        </>
      )}
    />
    <SingleProject
      src="https://i.postimg.cc/XYW2j3y9/Screen-Shot-2020-06-15-at-2-54-51-PM.png"
      alt="WhasssApp room image"
      title="WhasssApp"
      url="https://github.com/LockettPundt/WhasssApp"
      github="https://github.com/LockettPundt/WhasssApp"
      text={(
        <>
        <p>Simple chat app built with React, Electron, Grommet and Socket.io. Users can 
          create or join chat rooms. Once a room is created, the chat history is saved and users
          can revisit the conversation at any time to pick up where they left off.
        </p>
        </>
      )}
    />
    <SingleProject
      src="https://i.postimg.cc/QxWMTQrF/Screen-Shot-2020-05-03-at-2-30-55-PM.png"
      alt="Landing page of the drinkcast App"
      title="drinkcast"
      url="https://drinkcast.live"
      github="https://github.com/LockettPundt/drinkcast-client"
      text={(
        <>
          <p>
            Drinkcast is a web App that uses WebRTC to connect friends in virtual &quot;bars&quot; where they can
            hang out over video chat and play games. Users can create their own bar, choosing the name of the bar or allowing
            the random name generator to choose for them, and invite friends to join via the bar&apos;s name and password.
          </p>
          <p>
            This project, created alonside 3 other talented developers, utilizes React, OpenTok React WebRTC, PostgreSQL, Node.js and
            Express. Additional tools/modules used include Styled Components for stlying in React, React Select Menu and FortAwesome
            for icons.
          </p>
        </>
      )}
    />
    <SingleProject
      src={twentyFourgo}
      alt="24go landing page image"
      title="24GO"
      url="http://24go.lpiv.co"
      github="https://github.com/LockettPundt/Group-Front-End-Project"
      text={(
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
    )}
    />
    <SingleProject
      src={PandemicGA}
      alt="Pandemic Georgia game image"
      title="Pandemic Georgia"
      url="https://pandemic-georgia.lpiv.co"
      github="https://github.com/LockettPundt/pandemic-georgia"
      text={(
        <p>
          Based on the board game Pandemic, this was my first full stack group project created
          alonside 3 other developers. The premise for the game was to make a smaller and
          more localized version of the popular game using a database to record the game state
          and inform the board. The game takes place over the course of 19 days and in that time
          you are travelling across the state in search of research. Winning is accomplished with a
          cooperative effort to uncover 4 research breakthroughs before the epidemic becomes untenable.
          Built using Node.js, Express, HTML, CSS, JS and PostgreSQL.
        </p>
      )}
    />
    <SingleProject
      src={wizardInTheWoods}
      alt="A wizard in trouble"
      title="Wizard In The Woods"
      url="https://github.com/LockettPundt/Pygame-project"
      github="https://github.com/LockettPundt/Pygame-project"
      text={(
        <p>
          Built in Python, my first project, Wizard In The Woods, is a top
          down shooter game with a nod to 16-bit fantasy RPGs. It starts
          simple enough with our hero finding himself in an unfortunate
          situation, alone in the woods. The rest is up to you...
        </p>
      )}
    />
  </SectionContainer>
);


export default Projects;
