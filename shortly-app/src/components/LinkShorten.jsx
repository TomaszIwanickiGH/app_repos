import { useState, useEffect } from 'react';
import { images } from '../constants';
import Button from './Button';

const LinkShorten = () => {
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [error, setError] = useState({
    hasAccoured: false,
    message: 'Shorten a link here...',
  });
  const [link, setLink] = useState({
    before: '',
    after: '',
  });

  const generateRandomString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * 62));
    }
    return result;
  };

  let random;
  useEffect(() => {
    random = generateRandomString();
    setLink({ ...link, after: `https://rel.ink/${random}` });
  }, [shortenedLinks]);

  const shortenLink = () => {
    if (link.before !== '') {
      setShortenedLinks([...shortenedLinks, link]);
      setError({
        hasAccoured: false,
        message: 'Shorten a link here...',
      });
    } else {
      setError({
        hasAccoured: true,
        message: 'Please add a link',
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 paddings">
      <div className="relative md:flex-row flex-col flex justify-between items-center bg-darkViolet rounded-lg">
        <img
          src={images.bgShortenDektop}
          alt="header"
          className="lg:flex hidden w-full rounded-lg max-h-[130px]"
        />
        <img
          src={images.bgShortenMobile}
          alt="header"
          className="lg:hidden flex w-full rounded-lg max-h-[150px]"
        />
        <div className="absolute md:flex-row flex-col flex md:items-center justify-between md:gap-6 gap-4 px-16 py-4 w-full">
          <input
            type="text"
            value={link.before}
            onChange={(e) => {
              setLink({ ...link, before: e.target.value });
              setError({ ...error, hasAccoured: false });
            }}
            placeholder={error.message}
            className={`flex-1 rounded-md px-6 py-3 ${error.hasAccoured ? 'border-2 border-red placeholder:text-red' : 'border-none'} focus:outline-[1px] focus:outline-grayishViolet hover:cursor-pointer text-gray font-medium`}
          />
          <div>
            <Button
              onClick={shortenLink}
              label="Shorten It!"
              classes="md:w-[170px] w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {shortenedLinks.length > 0 &&
          shortenedLinks.map((link, index) => (
            <div
              key={index}
              className="sm:flex-row flex-col flex justify-between sm:items-center px-6 py-3 bg-white rounded-md"
            >
              <p>{link.before}</p>
              <div className="flex items-center gap-4">
                <p className=" text-cyan">{link.after}</p>
                <Button
                  label="Copy"
                  small
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
{
}

export default LinkShorten;
