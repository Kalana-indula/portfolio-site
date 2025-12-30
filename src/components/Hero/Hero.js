import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => {
    const handleLearnMoreClick = () => {
        const aboutSection = document.getElementById('about');

        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Hello, Welcome To <br />
                    My Personal Portfolio
                </SectionTitle>

                <SectionText>
                    Hi, I’m Kalana Indula, a full-stack software developer who builds secure, scalable web apps with Spring
                    Boot, Node/Express, and Next.js. I turn complex ideas into clean, user friendly experiences, from simple
                    websites to enterprise grade backends. I’m passionate about quality over quantity, and I love
                    collaborating with fellow developers, sharing ideas, and helping solve real problems with practical
                    solutions.
                </SectionText>

                <Button onClick={handleLearnMoreClick}>Learn More</Button>
            </LeftSection>
        </Section>
    );
};

export default Hero;
