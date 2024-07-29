import React from 'react';
import { HeaderPage } from '../styles';

interface HeaderSectionProps {
  text: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ text }: HeaderSectionProps) => {
  return (
    <HeaderPage>
      <h1>{text}</h1>
    </HeaderPage>
  );
};

export default HeaderSection;
