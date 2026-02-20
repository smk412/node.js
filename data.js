const data = `[
  {
    "id": 1,
    "first_name": "Irita",
    "last_name": "Kasbye",
    "email": "ikasbye0@omniture.com",
    "gender": "Female",
    "salary": 3797
  },
  {
    "id": 2,
    "first_name": "Ode",
    "last_name": "Stride",
    "email": "ostride1@domainmarket.com",
    "gender": "Male",
    "salary": 4805
  },
  {
    "id": 3,
    "first_name": "Hirsch",
    "last_name": "Burtonwood",
    "email": "hburtonwood2@amazon.co.uk",
    "gender": "Male",
    "salary": 6597
  },
  {
    "id": 4,
    "first_name": "Lark",
    "last_name": "Lghan",
    "email": "llghan3@geocities.com",
    "gender": "Female",
    "salary": 12470
  },
  {
    "id": 5,
    "first_name": "Granger",
    "last_name": "Sarre",
    "email": "gsarre4@noaa.gov",
    "gender": "Male",
    "salary": 3049
  },
  {
    "id": 6,
    "first_name": "Natale",
    "last_name": "Burgum",
    "email": "nburgum5@furl.net",
    "gender": "Male",
    "salary": 10078
  },
  {
    "id": 7,
    "first_name": "Cassy",
    "last_name": "Cunningham",
    "email": "ccunningham6@weather.com",
    "gender": "Female",
    "salary": 12938
  },
  {
    "id": 8,
    "first_name": "Gery",
    "last_name": "Knagges",
    "email": "gknagges7@cmu.edu",
    "gender": "Male",
    "salary": 3902
  },
  {
    "id": 9,
    "first_name": "Cleve",
    "last_name": "Sommerville",
    "email": "csommerville8@bizjournals.com",
    "gender": "Male",
    "salary": 4255
  },
  {
    "id": 10,
    "first_name": "Homere",
    "last_name": "Hargreaves",
    "email": "hhargreaves9@woothemes.com",
    "gender": "Male",
    "salary": 7663
  },
  {
    "id": 11,
    "first_name": "Jackie",
    "last_name": "Sheepy",
    "email": "jsheepya@ezinearticles.com",
    "gender": "Female",
    "salary": 7440
  },
  {
    "id": 12,
    "first_name": "Norton",
    "last_name": "Magrane",
    "email": "nmagraneb@list-manage.com",
    "gender": "Male",
    "salary": 3118
  },
  {
    "id": 13,
    "first_name": "Ema",
    "last_name": "Botfield",
    "email": "ebotfieldc@infoseek.co.jp",
    "gender": "Female",
    "salary": 5098
  },
  {
    "id": 14,
    "first_name": "Dora",
    "last_name": "Schimoni",
    "email": "dschimonid@livejournal.com",
    "gender": "Female",
    "salary": 9370
  },
  {
    "id": 15,
    "first_name": "Elwyn",
    "last_name": "Menat",
    "email": "emenate@technorati.com",
    "gender": "Male",
    "salary": 8121
  },
  {
    "id": 16,
    "first_name": "Dori",
    "last_name": "Raft",
    "email": "draftf@about.com",
    "gender": "Female",
    "salary": 14166
  },
  {
    "id": 17,
    "first_name": "Burty",
    "last_name": "Hambright",
    "email": "bhambrightg@marriott.com",
    "gender": "Male",
    "salary": 11758
  },
  {
    "id": 18,
    "first_name": "Misha",
    "last_name": "Dunston",
    "email": "mdunstonh@ustream.tv",
    "gender": "Female",
    "salary": 3789
  },
  {
    "id": 19,
    "first_name": "Kesley",
    "last_name": "Fabler",
    "email": "kfableri@imgur.com",
    "gender": "Female",
    "salary": 6565
  },
  {
    "id": 20,
    "first_name": "Wittie",
    "last_name": "Bjerkan",
    "email": "wbjerkanj@slideshare.net",
    "gender": "Male",
    "salary": 10843
  }
]
`;

//JSON -> Object
const ary = JSON.parse(data);
// console.log(ary);

//Object -> JSON
const json = JSON.stringify(ary);
// console.log(json);

// module.exports = { ary };
