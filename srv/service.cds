using db.v3 as db from '../db/schema';

service PeopleService {
    entity PeopleNames as projection on db.PeopleNames;
}
