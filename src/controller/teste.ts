import { Pessoa } from "../model/Pessoa";

let pessoa = new Pessoa ('Elma Maria',
                        '02398493232',
                        new Date(1297, 12, 29),
                        '8374982929',
                        'Rua dos nóia',
                        172,
                        12);

pessoa.cadastroPessoa(pessoa);
