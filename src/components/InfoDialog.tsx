import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function InfoDialog() {
  return (
    <div className='text-center mt-6 text-shadow-lg'>
      <Dialog>
        <DialogTrigger>
          <Button variant='link' className='font-medium text-md'>
            50 CARTAS DE INSPIRACIÓN
          </Button>
        </DialogTrigger>
        <DialogContent className='bg-amber-50'>
          <DialogHeader>
            <DialogTitle className='text-center'>
              <div className='text-cyan-600 mb-4'>
                <p>EL PODER DEL AHORA</p>
                <p>50 CARTAS DE INSPIRACIÓN </p>
              </div>
              <div className='font-serif font-light mb-2'>
                <p>El mejor modo de poner en acción</p>
                <p>El Poder del Ahora</p>
              </div>
            </DialogTitle>
            <DialogDescription className='text-justify'>
              Esta baraja recoge la sabiduría de Eckhart Tolle en 50 cartas
              llenas de inspiración. Las citas de estas cartas han sido
              especialmente seleccionadas por el propio autor para poner en
              práctica el Poder del Ahora de la manera más sencilla y accesible.
              Extrae una carta diariamente y reflexiona sobre ella durante la
              jornada, o bien saca una carta al azar cada vez que te surja una
              duda o una pregunta y necesites inspiración.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
