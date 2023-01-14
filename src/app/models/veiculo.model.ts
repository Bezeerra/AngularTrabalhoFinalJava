import { Marca } from './marca.model';

export interface Veiculo {
    id?: number;
    placa: string;
    cor: string;
    anoModelo: number;
    marca: Marca;
}