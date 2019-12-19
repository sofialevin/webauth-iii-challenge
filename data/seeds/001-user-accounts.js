exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      return knex('users').insert([
        {
          "username": "tprimak0",
          "department": "Research and Development",
          "password": "pass"
        }, {
          "username": "jmuzzall1",
          "department": "Marketing",
          "password": "pass"
        }, {
          "username": "oworstall2",
          "department": "Legal",
          "password": "pass"
        }, {
          "username": "mpoyzer3",
          "department": "Training",
          "password": "pass"
        }, {
          "username": "atreadway4",
          "department": "Support",
          "password": "pass"
        }, {
          "username": "nmelliard5",
          "department": "Sales",
          "password": "pass"
        }, {
          "username": "shindrich6",
          "department": "Business Development",
          "password": "pass"
        }, {
          "username": "mnegri7",
          "department": "Human Resources",
          "password": "pass"
        }, {
          "username": "sfeatherstonhalgh8",
          "department": "Marketing",
          "password": "pass"
        }, {
          "username": "lturk9",
          "department": "Product Management",
          "password": "pass"
        }, {
          "username": "vleminga",
          "department": "Product Management",
          "password": "pass"
        }, {
          "username": "wschruursb",
          "department": "Product Management",
          "password": "pass"
        }, {
          "username": "aorryc",
          "department": "Research and Development",
          "password": "pass"
        }, {
          "username": "ahenrotd",
          "department": "Services",
          "password": "pass"
        }, {
          "username": "pbexone",
          "department": "Business Development",
          "password": "pass"
        }, {
          "username": "apalfreemanf",
          "department": "Sales",
          "password": "pass"
        }, {
          "username": "mniblettg",
          "department": "Product Management",
          "password": "pass"
        }, {
          "username": "sleblondh",
          "department": "Business Development",
          "password": "pass"
        }, {
          "username": "hinksteri",
          "department": "Legal",
          "password": "pass"
        }, {
          "username": "sattridej",
          "department": "Services",
          "password": "pass"
        }
      ]);
    });
};
