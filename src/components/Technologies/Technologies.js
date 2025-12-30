import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
    <Section id="tech">
        <SectionDivider divider />
        <SectionTitle>Technologies</SectionTitle>
        <SectionText>
            From scalable back-end architectures to elegant user interfaces, I build end-to-end web solutions.
        </SectionText>
        <List>
            <ListItem>
                <picture>
                    <DiReact size="3rem" />
                </picture>
                <ListContainer>
                    <ListTitle>Front-End</ListTitle>
                    <ListParagraph>
                        Experiece with <br />
                        React.js , Next.js and Styling libraries like Tailwind CSS <br/>
                        and CSS frameworks like Bootstrap
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <picture>
                    <DiFirebase size="3rem" />
                </picture>
                <ListContainer>
                    <ListTitle>Back-End</ListTitle>
                    <ListParagraph>
                        Experience with <br />
                        Node,Express, Spring Boot and Both NoSQL and SQL Databases. <br/>
                        And ORM tools like Hibernate. <br/>
                        Containerization tools like Docker .
                    </ListParagraph>
                </ListContainer>
            </ListItem>
            {/*<ListItem>*/}
            {/*    <picture>*/}
            {/*        <DiZend size="3rem" />*/}
            {/*    </picture>*/}
            {/*    <ListContainer>*/}
            {/*        <ListTitle>UI/UX</ListTitle>*/}
            {/*        <ListParagraph>*/}
            {/*            Experience with <br />*/}
            {/*            tools like Figma*/}
            {/*        </ListParagraph>*/}
            {/*    </ListContainer>*/}
            {/*</ListItem>*/}
        </List>
        <SectionDivider colorAlt />
    </Section>
);

export default Technologies;
