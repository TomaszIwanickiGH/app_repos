import Boost from './Boost';
import { images, data } from '../constants';

const Footer = () => {
  return (
    <div className="flex flex-col mt-8">
      <Boost />
      <div className="flex md:flex-row flex-col justify-between md:items-start items-center paddingsX bg-veryDarkViolet py-12 gap-8">
        <img
          src={images.logoLight}
          alt="logo"
        />
        {data.footerLinks.map((link, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 md:text-start text-center"
          >
            <h4 className="text-white font-semibold">{link.name}</h4>
            <ul className="flex flex-col gap-3">
              {link.links.map((l) => (
                <li
                  key={l.link}
                  className="text-grayishViolet hover:text-cyan hover:cursor-pointer"
                >
                  {l.link}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex gap-4">
          {data.socials.map((social, index) => (
            <img
              key={index}
              src={social.icon}
              alt="social"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
