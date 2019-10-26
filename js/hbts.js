var habitants = [
/* habitants secteur 1*/ 75,
/* habitants secteur 2*/ 105,
/* habitants secteur 3*/ 120,
/* habitants secteur 4*/ 80,
/* habitants secteur 5*/ 0,
/* habitants secteur 6*/ 80,
/* habitants secteur 7*/ 70,
/* habitants secteur 8*/ 40,
/* habitants secteur 9*/ 75,
/* habitants secteur 10*/ 265,
/* habitants secteur 11*/ 200,
/* habitants secteur 12*/ 170,
/* habitants secteur 13*/ 150,
/* habitants secteur 14*/ 200,
/* habitants secteur 15*/ 110,
/* habitants secteur 16*/ 110,
/* habitants secteur 17*/ 220,
/* habitants secteur 18*/ 180,
/* habitants secteur 19*/ 120,
/* habitants secteur 20*/ 100,
/* habitants secteur 21*/ 200,
/* habitants secteur 22*/ 175,
/* habitants secteur 23*/ 120,
/* habitants secteur 24*/ 180,
/* habitants secteur 25*/ 100,
/* habitants secteur 26*/ 100,
/* habitants secteur 27*/ 225,
/* habitants secteur 28*/ 225,
/* habitants secteur 29*/ 225,
/* habitants secteur 30*/ 225,
/* habitants secteur 31*/ 175,
/* habitants secteur 32*/ 175,
];

var habitantscampagne = "";
var habitantsville = "";

for (var i = 9; i < habitants.length; i++) {
    habitantsville += (habitants[i]);
};

for (var i = 0; i < 9; i++) {
    habitantscampagne += (habitants[i]);
};

habitants.push(habitantscampagne);
habitants.push(habitantsville);
habitants.push(habitantsville + habitantscampagne);

export var habitants ;
