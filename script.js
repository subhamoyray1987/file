let candidate = {
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Ms",
          "first": "Madalene",
          "last": "Rezende"
        },
        "location": {
          "street": {
            "number": 5505,
            "name": "Rua Mato Grosso "
          },
          "city": "Maricá",
          "state": "Bahia",
          "country": "Brazil",
          "postcode": 14200,
          "coordinates": {
            "latitude": "-81.1393",
            "longitude": "146.3659"
          },
          "timezone": {
            "offset": "+3:00",
            "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
          }
        },
        "email": "madalene.rezende@example.com",
        "login": {
          "uuid": "9dd88682-03d3-4b21-938a-7f7f00f015fe",
          "username": "redkoala984",
          "password": "longhorn",
          "salt": "pZnRje1n",
          "md5": "74a38edbbf9024e536d9752409eaedf9",
          "sha1": "398c03f059eec664c441aecd7d4b776718757460",
          "sha256": "2aad76fab9529020d4abb8301bf7da297e2386731a38f5e07b777a42c868e3a8"
        },
        "dob": {
          "date": "1970-07-07T07:23:00.919Z",
          "age": 53
        },
        "registered": {
          "date": "2021-03-03T03:03:25.249Z",
          "age": 2
        },
        "phone": "(09) 0039-8739",
        "cell": "(88) 8611-7254",
        "id": {
          "name": "CPF",
          "value": "919.981.045-57"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/5.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/5.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/5.jpg"
        },
        "nat": "BR"
      },
      {
        "dish":'Biriyani'
      }
    ],
    "info": {
      "seed": "f22b864f28109d8c",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }

// console.log(member1)

// let keysname = Object.keys(member1);

// console.log(keysname);

// let valuesname =  Object.values(member1)

// console.log(valuesname);

// member1.isdeveloper = true;

// console.log(member1)

console.log(candidate.results.length);

console.log(Object.keys(candidate.results[0].login));

////// EXAMPLE OF OBJECT MERGE:::::::::::

let people1 = {
  id: 1,
  title: "Life Lessons with Katie Zaferes",
  price: 136,
  coverImg: "katie-zaferes.png",
  stats: {
      rating: 5.0,
      reviewCount: 6
  },
  location: "Online",
  openSpots: 0
}

let people2 = {
  id: 2,
  title: "Learn Wedding Photography",
  price: 125,
  coverImg: "wedding-photography.png",
  stats: {
      rating: 5.0,
      reviewCount: 30
  },
  location: "Online",
  openSpots: 27
}


let mergePeople = {...people1, ...people2}

console.log(mergePeople);

// let obj1 = { a: 10, name:'Hello' };
// let obj2 = { b: 20, name:'hi' };
// let obj3 = { c: 30, name:'bye'};
  

// let new_obj = Object.assign({}, obj1, obj2, obj3);

// console.log(new_obj);