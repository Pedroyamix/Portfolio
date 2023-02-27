import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome < br/>
      My name is Pedro Levy
    </SectionTitle>
    <SectionText>
      My goal is to build and create modern and beautiful designs for all kinds of projects.
    </SectionText>
    <Button onClick={() => window.location = 'https://www.linkedin.com/in/pedro-levy-amorim-de-souza-8b72591a2/' } >Learn More</Button>
  </LeftSection>
 </Section>
);

export default Hero;