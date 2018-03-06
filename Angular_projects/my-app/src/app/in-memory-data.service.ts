import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const documenti = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const fascicoli = [
      {
        id: 0, name: 'root', documenti: [{ id: 11, name: 'Mr. Nice' }, { id: 12, name: 'Narco' }], fascicoli: [
          {
            id: 2, name: 'dir2', documenti: [{ id: 13, name: 'Bombasto' }, { id: 14, name: 'Celeritas' }], fascicoli: [
              { id: 3, name: 'dir3', documenti: [{ id: 15, name: 'Magneta' }, { id: 16, name: 'RubberMan' }] }]
          }
        ]
      },
      {
        id: 2, name: 'dir2', documenti: [{ id: 13, name: 'Bombasto' }, { id: 14, name: 'Celeritas' }],
        fascicoli: [{ id: 3, name: 'dir3', documenti: [{ id: 15, name: 'Magneta' }, { id: 16, name: 'RubberMan' }] }]
      },
      { id: 3, name: 'dir3', documenti: [{ id: 15, name: 'Magneta' }, { id: 16, name: 'RubberMan' }] }
    ];
    return { documenti, fascicoli };
  }
}
