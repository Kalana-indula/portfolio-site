import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
      <FooterWrapper>
          <LinkList>
              <LinkColumn>
                  <LinkTitle>Call</LinkTitle>
                  <LinkItem href="tel:314-343-3432">+94 710 754 343</LinkItem>
              </LinkColumn>
              <LinkColumn>
                  <LinkTitle>Email</LinkTitle>
                  <LinkItem href="mailto:contact@jsmastery.com">
                      kalanaindula@outlook.com
                  </LinkItem>
              </LinkColumn>
          </LinkList>
          <SocialIconsContainer>
              <CompanyContainer>
                  <Slogan>Engineering solutions that scale with purpose.</Slogan>
              </CompanyContainer>
              <SocialContainer>
                  <SocialIcons href="https://github.com/Kalana-indula">
                      <AiFillGithub size="3rem" />
                  </SocialIcons>
                  <SocialIcons href="https://www.linkedin.com/in/kalana-indula-de-costa1995117/">
                      <AiFillLinkedin size="3rem" />
                  </SocialIcons>
              </SocialContainer>
          </SocialIconsContainer>
      </FooterWrapper>
  );
};

export default Footer;
