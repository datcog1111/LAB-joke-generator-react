import { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';
import Jokes from '../components/Joke';

function Home() {
  // allowing button to change text with useState, the initial set state is "get a joke"
  const [btnText, setBtnText] = useState('Get A Joke');
  // setting an empty use state for the joke API call
  const [joke, setJoke] = useState({});

  const buttonText = (text) => {
    setBtnText(text);
  };

  const jokies = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      buttonText('Get Punchline');
    });
  };

  return (
    <>
      <Jokes joke={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get Another Joke' ? (
        <Button type="button" onClick={jokies}>
          {btnText}
        </Button>
      ) : (
        <Button type="button" onClick={() => buttonText('Get Another Joke')}>
          {btnText}
        </Button>
      )}

    </>
  );
}

export default Home;
