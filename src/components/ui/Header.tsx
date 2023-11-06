import React from 'react';
import '../styles/header.css';

export interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps): React.ReactElement => (
  <div className="header">{text}</div>
);

export default Header;