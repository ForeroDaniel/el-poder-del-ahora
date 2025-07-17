import { useState } from 'react';
import quotes from './quotes.json';
import Header from './components/Header';
import QuoteCard from './components/QuoteCard';
import InfoDialog from './components/InfoDialog';
import NewQuoteButton from './components/NewQuoteButton';

function App() {
  const [currentQuote, setCurrentQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );
  const [isFading, setIsFading] = useState(false);

  const getRandomQuote = () => {
    setIsFading(true); // Start fade out
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
      setIsFading(false); // Start fade in
    }, 500); // Adjust this duration to match your desired fade-out time
  };

  return (
    <div className='flex flex-col min-h-screen justify-center items-center bg-gradient-to-r from-emerald-400 to-cyan-400 py-24'>
      <Header />
      <QuoteCard quote={currentQuote.quote} isFading={isFading} />
      <InfoDialog />
      <NewQuoteButton onClick={getRandomQuote} />
    </div>
  );
}

export default App;
