import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const user = [
      {
        id: 1,
        name: 'juan',
        lastName: 'sanchez',
        username: 'juanito',
        pws: '123456',
        countryId: 1
      },
      {
        id: 2,
        name: '',
        lastName: '',
        username: 'camila',
        pws: '123456',
        countryId: 2
      },
      {
        id: 3,
        name: '',
        lastName: '',
        username: 'luis',
        pws: '123456',
        countryId: 3
      }
    ];

    const country = [
      {
        id: 1,
        name: 'Chile'
      },
      {
        id: 2,
        name: 'Peru'
      },
      {
        id: 3,
        name: 'Colombia'
      },
      {
        id: 4,
        name: 'Venezuela'
      }
    ];

    const student = [
      {
        id: 1,
        name: 'clark kent',
      },
      {
        id: 2,
        name: 'diana prince',
      },
      {
        id: 3,
        name: 'bruce wayne',
      }
    ];

    const score = [
      {
        id: 1,
        studentId: 1,
        course: 'java',
        score: 100
      },
      {
        id: 2,
        studentId: 3,
        course: 'angular',
        score: 100
      },
      {
        id: 3,
        studentId: 2,
        course: 'c#',
        score: 100
      }
    ];

    return {
      user,
      country,
      student,
      score
    };
  }
}
