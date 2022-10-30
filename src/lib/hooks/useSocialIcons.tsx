import {
  GithubIcon,
  Instagramicon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from '../../Icons';

const useSocialIcons = () => {
  const Icons = {
    instagram: <Instagramicon />,
    github: <GithubIcon />,
    linkedin: <LinkedInIcon />,
    mail: <MailIcon />,
    twitter: <TwitterIcon />,
  };
  return Icons;
};

export default useSocialIcons;
