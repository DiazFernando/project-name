import { Injectable } from '@nestjs/common';
import { PersonaEntity } from './persona.entity/persona.entity';

@Injectable()
export class PersonaService {

    private personas : PersonaEntity[] = [
        {
            id:1,
            nombre:"Fernando",
            apellido:"Diaz"
        },
        {
            id:2,
            nombre:"Dario",
            apellido:"Lopez"
        },
        {
            id:3,
            nombre:"Marcos",
            apellido:"Farias"
        },
    ]


}
