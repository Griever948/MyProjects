import { Documento } from './documento';

export class Fascicolo {
    id: number;
    name: string;
    documenti: Documento[];
    fascicoli: Fascicolo[];
}
