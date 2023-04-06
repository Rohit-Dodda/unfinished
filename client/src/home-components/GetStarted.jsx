import React, { useState, useEffect } from 'react';
import cheerio from 'cheerio';

const GetStarted = () => {
  const [aiWebsites, setAiWebsites] = useState([]);

  useEffect(() => {
    const scrapeWebsites = async () => {
      const response = await fetch('https://www.google.com/search?q=.ai', { mode: 'cors' });
      const html = await response.text();
      const $ = cheerio.load(html);
      const links = $('a[href$=".ai"]').map((i, link) => $(link).attr('href')).toArray();
      setAiWebsites(links);
    };
    scrapeWebsites();
  }, []);

  return (
    <div>
      {aiWebsites.map((website, index) => (
        <Card key={index} website={website} />
      ))}
    </div>
  );
};

const Card = ({ website }) => {
  return <div>{website}</div>;
};

export default GetStarted;
