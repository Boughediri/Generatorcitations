/*-----------------Selection of elements on the dom-----------------*/

const typeCitationValue = document.querySelector("#dropdownCitationType");
const numberCitationValue = document.querySelector("#dropdownNbCitationValue");
const encoreCitaBtn = document.querySelector("#encoreCitat");
const stopCitatBtn = document.querySelector("#stopBtn");
const textZone = document.querySelector("#textZone");

/*---------------Data citations--------------*/


/*-----------------"Blablatron" Class-----------------*/

  // quote display



const dataCitationsDieu = [
  // debut
  [
    "Tu vois ce vide", 
    "au-dessus de nos têtes",
    "C'est Dieu...Le silence",
    "c'est Dieu",
    "l'absence c'est Dieu", 
    "Dieu, c'est la solitude des hommes",
  ],
  // milieu
  [
    "Quand les hommes politiques",
    "ouvrent leur parapluie",
    "leur niveau de",
    "précipitation",
    "à réformer",
    "devientnettement",
    
    ],
    // 2iemilieu
    [
    "Les marques d’estime sont",
    "comme les promesses",
    "elles n’engagent",
    "que ceux qui",
    "en font cas ",
  
    ],
    // fin
    [

    "gonflé de vent",
    "il se pare de belles",
    "couleurs pour ",
    "séduire, et lorsqu’il",
    "vole il est en général",
    "manipulé par",
    "quelqu’un qui",
 
    ]
];

// Array "leshommes"

const dataCitationsLeshommes = [
  // Begin
  [
    "Mesdames, Messieurs,",
    "Je reste fondamentalement persuadé que",
    "Dès lors, sachez que ",
    "C’est en toute connaissance de cause ",
    "Je tiens à vous dire ici ma",
    "J’ai depuis longtemps défendu l’idée que",
    "C’est en toute conscience que "
    ],
    // milieu
    [
    "la conjoncture actuelle",
    "la situation d’exclusion que",
    "l’acuité des problèmes de la vie quotidienne",
    "notre pays de la crise",
    "l’effort prioritaire en faveur ",
    "le particularisme dû à notre histoire unique",
    "l’aspiration plus que légitime de chacun au renouveau"
    ],
    // 2ieme milieu
    [
    "doit s’intégrer à la finalisation globale",
    "oblige à la prise ne compte encore plus effective",
    "de l’avant dans la voie",
    "a pour conséquence obligatoire l’urgente nécessité",
    "conforte mon désir incontestable d’aller dans le sens",
    "doit nous amener au choix réellement impératif",
    "doit prendre en compte les besoins"
    ],
    // fin
    [
    "d’un processus allant vers plus d’égalité!",
    "vers plus de progrès et plus de justice.",
    "d’une restructuration dans laquelle !",
    "d’une valorisation sans concession .",
    "d’un plan correspondant veritablement.",
    "de solutions rapides .",
    "d’un programme plus humain!"
    ]
];

/*-----------------Variables globales-----------------*/

let typeCitation = null;
let numberCitation = null;

/*-----------------"Blablatron" Class-----------------*/

class Generator {
  constructor(begin, middle, next, end) {
    this._begin = begin;
    this._middle = middle;
    this._next = next;
    this._end = end;
  }

  // Quote generator
  generateCitation() {
    const start = this._begin[Math.floor(Math.random() * this._begin.length)];
    //console.log(this._begin.length);

    const middle = this._middle[
      Math.floor(Math.random() * this._middle.length)
    ];
    console.log(this._middle.length);
    const next = this._next[Math.floor(Math.random() * this._next.length)];
    //console.log(this._next.length);
    const end = this._end[Math.floor(Math.random() * this._end.length)];
    //console.log(this._end.length);

    const citation = start + " " + middle + " " + next + " " + end;
    return citation;
  }

  // quote display
  displayCitation(citation) {
    textZone.innerHTML = citation;
  }
}

/*-----------------Instantiation-----------------*/

const citationsDeDieu = new Generator(
  dataCitationsDieu[[0]],
  dataCitationsDieu[[1]],
  dataCitationsDieu[[2]],
  dataCitationsDieu[[3]]
);

const citationsLeshommes = new Generator(
  dataCitationsLeshommes[[0]],
  dataCitationsLeshommes[[1]],
  dataCitationsLeshommes[[2]],
  dataCitationsLeshommes[[3]]
);


/*-----------------Event listeners-----------------*/

// Replace the title of the dropdown button with the selected selection
$(".dropdown-menu li a").click(function() {
  $(this)
    .parents(".dropdown")
    .find(".btn")
    .html($(this).text() + ' <span class="caret"></span>');
  $(this)
    .parents(".dropdown")
    .find(".btn")
    .val($(this).data("value"));
});

// Listening the button type choice

typeCitationValue.addEventListener("click", function(type) {
  typeCitation = type.target.innerHTML;
});

// Listening the button number choice

numberCitationValue.addEventListener("click", function(number) {
  numberCitation = number.target.innerHTML;
});
/**
 * 
 */
// Listening the button Tell me more
encoreCitaBtn.addEventListener("click", function() {
  let generatedCitation = "";

  if (typeCitation === "le bon Dieu") {
    if (numberCitation === null) {
      alert(
        "Maintenant que tu as choisi le type de citation, sélectionne le nombre de citations que tu veux générer, puis clique sur Tell Me More !"
      );
    } else {
      for (let i = 0; i < numberCitation; i++) {
        generatedCitation += citationsDeDieu.generateCitation();
        generatedCitation += "<br />";
        generatedCitation += " <br />";
      }
      citationsDeDieu.displayCitation(generatedCitation);
    }
  } else if (typeCitation === "LES HOMMES") {
    if (numberCitation === null) {
      alert(
        "Maintenant que tu as choisi le type de citation, sélectionne le nombre de citations que tu veux générer, puis clique sur Tell Me More !"
      );
    } else {
      for (let i = 0; i < numberCitation; i++) {
        generatedCitation += citationsLeshommes.generateCitation();
        generatedCitation += "<br />";
        generatedCitation += "<br />";
      }
      citationsLeshommes.displayCitation(generatedCitation);
    }
  } else {
    alert(
      "Choisis le type de blabla et le nombre de citations que tu veux générer, puis clique sur Tell Me More !"
    );
  }
});

// Listening the button Stop it please
stopCitatBtn.addEventListener("click", function() {
  textZone.innerHTML = "";
});
