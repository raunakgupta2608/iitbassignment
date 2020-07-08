export class User {
    id: string;
    name: string;
    email: string;
    purpose: string;
    programme: string;
    year: string;
    language: string;
    comments: string;
    status: string
}

export const users: User[] =
[
  {
    "id": "1",
    "name": "Safa",
    "email": "neerupeeru@mail.ee",
    "purpose": "thesis",
    "programme": "Software Engineering",
    "year": "2016",
    "language": "Estonian",
    "comments": "In need of correcting a dangling participle.",
    "status": "RECEIVED"
  },
  {
    "id": "2",
    "name": "Vismay",
    "email": "vismay@mail.ee",
    "purpose": "gain knowledge",
    "programme": "Network",
    "year": "2018",
    "language": "Latina",
    "comments": "Looking for network",
    "status": "PENDING"
  },
  {
    "id": "3",
    "name": "Salman",
    "email": "salman@mail.ee",
    "purpose": "student",
    "programme": "OS Developer",
    "year": "2013",
    "language": "Hindi",
    "comments": "Operating with kernel",
    "status": "APPROVED"
  }
];