import PrimaryText from '../../Dummy/PrimaryText';

const Footer = () => {
    return (
        <p className="py-10 text-center">
            || Design by{' '}
            <a
                href="https://dribbble.com/saaddesigns"
                target="_blank"
                rel="noreferrer"
            >
                <PrimaryText className="hover:underline">Saad</PrimaryText>
            </a>{' '}
            && coded by{' '}
            <a
                href="http://github.com/Chandraprakash-Darji"
                target="_blank"
                rel="noreferrer"
            >
                {' '}
                <PrimaryText className="hover:underline">Chandra</PrimaryText>
            </a>{' '}
            ||
        </p>
    );
};

export default Footer;
