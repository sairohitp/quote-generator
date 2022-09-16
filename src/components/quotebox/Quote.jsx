import React, { useState, useEffect } from "react";

const Quote = () => {
    
  let [quote, setQuote] = useState("");
  let [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let quote = data.quotes;

        global.randnom = Math.floor(Math.random() * quote.length);
        
        let randquote = quote[global.randnom];
        console.log(global.randnom);

        setQuote(randquote.quote);
        setAuthor(randquote.author);
      });
  };

  const generateQuote = () => {
    getQuote();
  };
  

  return (
    <div>
      <div className="classicflex buttonsys">
      <div>
        <button>&larr;</button>
      </div>
        <div>
          <button>Reset</button>
        </div>
        <div>
          <button onClick={generateQuote}>Generate</button>
        </div>
        <div>
          <button>Copy</button>
        </div>
        <div>
          <a>About</a>
        </div>
        <div>
        <button>&rarr;</button>
      </div>
      </div>

      <div className="quotefather">
        <div className="quotebox">
          <p id="text">{quote}</p>
        </div>
        <div className="authorbox">
          <p id="author">~ {author}</p>
        </div>
      </div>

      <div id = "length">
        <p>{global.randnom} / 102</p>
      </div>
    </div>
  );
};

export default Quote;
