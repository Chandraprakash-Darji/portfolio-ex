import { ReactElement } from 'react';
import {
  GithubIcon,
  Instagramicon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from '../../Icons';

interface IconsType {
  [key: string]: ReactElement;
}

const useSocialIcons = (): IconsType => {
  const Icons: IconsType = {
    instagram: <Instagramicon />,
    github: <GithubIcon />,
    linkedin: <LinkedInIcon />,
    mail: <MailIcon />,
    twitter: <TwitterIcon />,
  };
  return Icons;
};

export default useSocialIcons;
