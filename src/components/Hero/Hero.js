import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
          {/*Hero section main title*/}
          <SectionTitle main center>
              Hello, Welcome To <br/>
              My Personal Portfolio
          </SectionTitle>

      {/*some description*/}
          <SectionText>
              Hi, I’m Kalana Indula, a full-stack software developer who builds secure, scalable web apps with Spring Boot, Node/Express, and Next.js. I turn complex ideas into clean, user friendly experiences, from simple websites to enterprise grade backends. I’m passionate about quality over quantity, and I love collaborating with fellow developers, sharing ideas, and helping solve real problems with practical solutions.
          </SectionText>
          <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;