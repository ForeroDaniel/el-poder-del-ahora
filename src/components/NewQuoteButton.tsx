import { Button } from '@/components/ui/button';

interface NewQuoteButtonProps {
  onClick: () => void;
}

export default function NewQuoteButton({ onClick }: NewQuoteButtonProps) {
  return (
    <Button
      variant='link'
      className='text-amber-50 text-md text-shadow-lg'
      onClick={onClick}
    >
      ¿Quieres una nueva carta?
    </Button>
  );
}
