import { Card, CardContent } from '@/components/ui/card';

interface QuoteCardProps {
  quote: string;
  isFading: boolean;
}

export default function QuoteCard({ quote, isFading }: QuoteCardProps) {
  return (
    <Card
      className={`bg-gradient-to-r from-amber-200 to-amber-100 w-80 min-h-110 shadow-gray-600 shadow-2xl transition-opacity duration-1000 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <CardContent className='text-center m-auto '>
        <p className='font-sans text-lg p-4 flex text-shadow-sm'>{quote}</p>
      </CardContent>
    </Card>
  );
}
