import { DateObj } from './DateObj';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class EventEntry {
    id?: string;
    type?: string;
    name?: string;
    date?: string;
    timeUploaded?: number;
}