import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
    <Container>
        <Div1>
            {/* Use legacyBehavior here and move style to <a> */}
            <Link href="/" legacyBehavior>
                <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
                    <DiCssdeck size="3rem" />
                    <span>Portfolio</span>
                </a>
            </Link>
        </Div1>

        {/* navigation bar */}
        <Div2>
            <li>
                {/* legacyBehavior + passHref because NavLink is a styled <a> */}
                <Link href="#projects" legacyBehavior passHref>
                    <NavLink>Projects</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#tech" legacyBehavior passHref>
                    <NavLink>Technologies</NavLink>
                </Link>
            </li>
            <li>
                <Link href="#about" legacyBehavior passHref>
                    <NavLink>About</NavLink>
                </Link>
            </li>
        </Div2>

        {/* social links section */}
        <Div3>
            <SocialIcons href="https://github.com/Kalana-indula">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://www.linkedin.com/in/kalana-indula-de-costa1995117/">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
