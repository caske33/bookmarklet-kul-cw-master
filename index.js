(function(){
/* 
 * USAGE:
 *
 * Pas het script aan zodat de variable `courses` al de vakcodes bevat van de 
 * vakken die ge volgt. 
 * Een aantal algemene vakken zijn al toegekend aan variabelen, pull requests 
 * welkom voor anderen.
 * Kopieer de inhoud van het scriptje en voeg er `javascript: ` vanvoor aan toe 
 * en plak dat dan als de url van een bookmark.
 * Ga naar de uurrooster pagina en klik op de bookmark om enkel de lessen die 
 * voor jou van toepassing zijn te zien.
 * 
 * By: Jens Claes
*/

/* Bachelor Verbredend Pakket ingenieurs */
var BS = 'H04G1B'; /* Besturingssystemen */
var DECL = 'H0N03A'; /* Studie van declaratieve talen (H04H5B) */
var OSS = 'H0N00A'; /* Ontwerp van softwaresystemen (H04J9B) */
var FUND = 'H04H0B'; /* Fundamenten voor de computerwetenschappen */
var ENG = [BS,DECL,OSS,FUND];

/* Verplicht deel */
var DIST = 'H0N08A'; /* Distributed Systems (H04I4A) */
var MODEL = 'H0N05A'; /* Modelling of complex systems (G0B23A) */
var SWARCH = 'H09B5A'; /* Software architectuur */
var CPL = 'H0S01AE'; /* Comparative Programming Languages */
var VERPLICHT = [DIST,MODEL,SWARCH,CPL];

/* AI */
var ML = 'H02C1A'; /* Machine Learning and Inductive Inference */
var APLAI = 'H02A8A'; /* Advanced Programming Languages for AI */
var CSAI = 'H05N0A'; /* Capita Selecta AI */

/* AVO */
var EAE = 'H09P4A'; /* Engineering & Entrepreneurship */
var PM = 'H04X2A'; /* Project Management */
var UD = 'S0C78B'; /* Usability Design */
var EE = 'H00K1A'; /* Engineering Economy */
var BECW = 'H04G0A'; /* Bedrijfservaring CW */
var STAA = 'D0R19A'; /* Simulation Theory and Applications */
var IPDC = 'S0E06A'; /* Interdisciplinary Perspectives on Development And Cultures */
var LXXIE = 'W0AE0A'; /* Lessen voor de 21e Eeuw */
var GS = 'S0B88A'; /* Gender Studies */
var EBO = 'H04B3A'; /* Engels in de Bedrijfsomgeving */
var FBO = 'H04B4A'; /* Frans in de Bedrijfsomgeving */
var WETCOM = 'G0Q91A'; /* Wetenschapscommunicatie */

var courses = VERPLICHT.concat(ENG).concat([ML]);

Array.prototype.forEach.call(document.getElementsByTagName('a'), function( link ){
  var hide = true;
  courses.forEach(function(course){
    if(link.href.indexOf(course) != -1)
      hide = false;
  });
  if(hide)
    link.parentNode.parentNode.style.display = "none";
});
})();
