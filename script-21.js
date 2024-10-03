(function (){'use strict';
angular.module('myApp', ['ngRoute']).config(moduleConfig);
moduleConfig.$inject = ['$routeProvider'];

function moduleConfig($routeProvider) 
{$routeProvider
.when('/', {templateUrl: 'templates/index-skikot16.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/bestemmingen', {templateUrl: 'templates/bestemmingen.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/opstap', {templateUrl: 'templates/opstap.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/extraopstap', {templateUrl: 'templates/extraopstap.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/vertrekdagen', {templateUrl: 'templates/vertrekdagen.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/gmaps', {templateUrl: 'templates/gmaps.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/regels', {templateUrl: 'templates/regels.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/codeshare', {templateUrl: 'templates/codeshare.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/nopluik', {templateUrl: 'templates/nopluik.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/nopbrussel', {templateUrl: 'templates/nopbrussel.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/nopleuven', {templateUrl: 'templates/nopleuven.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/nopantwerpen', {templateUrl: 'templates/nopantwerpen.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mopluik', {templateUrl: 'templates/mopluik.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mopbrussel', {templateUrl: 'templates/mopbrussel.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mopleuven', {templateUrl: 'templates/mopleuven.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mopantwerpen', {templateUrl: 'templates/mopantwerpen.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/xopxaveriabrugge', {templateUrl: 'templates/xopxaveriabrugge.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/xopkinebrugge', {templateUrl: 'templates/xopkinebrugge.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/xopgentpieter', {templateUrl: 'templates/xopgentpieter.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/xopgentkramer', {templateUrl: 'templates/xopgentkramer.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/xopgracehologne', {templateUrl: 'templates/xopgracehologne.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/xophemptine', {templateUrl: 'templates/xophemptine.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/xoplaneuve', {templateUrl: 'templates/xoplaneuve.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/xopnamur', {templateUrl: 'templates/xopnamur.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/xopleuvenincubator', {templateUrl: 'templates/xopleuvenincubator.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mxopleuvenincubator', {templateUrl: 'templates/mxopleuvenincubator.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mxopxaveriabrugge', {templateUrl: 'templates/mxopxaveriabrugge.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mxopkinebrugge', {templateUrl: 'templates/mxopkinebrugge.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mxopgentpieter', {templateUrl: 'templates/mxopgentpieter.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mxopgentkramer', {templateUrl: 'templates/mxopgentkramer.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mxopgracehologne', {templateUrl: 'templates/mxopgracehologne.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mxophemptine', {templateUrl: 'templates/mxophemptine.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mxoplaneuve', {templateUrl: 'templates/mxoplaneuve.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mxopnamur', {templateUrl: 'templates/mxopnamur.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mhuez', {templateUrl: 'templates/mhuez.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mavoriaz', {templateUrl: 'templates/mavoriaz.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mdeuxalpes', {templateUrl: 'templates/mdeuxalpes.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mrisoul', {templateUrl: 'templates/mrisoul.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mlongchamp', {templateUrl: 'templates/mlongchamp.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/msarves', {templateUrl: 'templates/msarves.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mvaltho', {templateUrl: 'templates/mvaltho.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/rhuez', {templateUrl: 'templates/rhuez.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/ravoriaz', {templateUrl: 'templates/ravoriaz.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/rdeuxalpes', {templateUrl: 'templates/rdeuxalpes.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/rrisoul', {templateUrl: 'templates/rrisoul.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/rlongchamp', {templateUrl: 'templates/rlongchamp.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/rsarves', {templateUrl: 'templates/rsarves.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/rvaltho', {templateUrl: 'templates/rvaltho.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/rlaplagne', {templateUrl: 'templates/rlaplagne.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/rvalmeinier', {templateUrl: 'templates/rvalmeinier.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/rvaujany', {templateUrl: 'templates/rvaujany.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mlaplagne', {templateUrl: 'templates/mlaplagne.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mvalmeinier', {templateUrl: 'templates/mvalmeinier.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mvaujany', {templateUrl: 'templates/mvaujany.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mopgentwielersport', {templateUrl: 'templates/mopgentwielersport.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mopbrusseldelta', {templateUrl: 'templates/mopbrusseldelta.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/mopantwpidpa', {templateUrl: 'templates/mopantwpidpa.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/nopgentwielersport', {templateUrl: 'templates/nopgentwielersport.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/nopbrusseldelta', {templateUrl: 'templates/nopbrusseldelta.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/nopantwpidpa', {templateUrl: 'templates/nopantwpidpa.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.when('/coronaregels', {templateUrl: 'templates/coronaregels.html',controller: 'sidemenu2Controller',controllerAs: 'sidemenu2Ctrl'})
.otherwise({redirectTo: '/'})
}

angular.module('myApp')
.controller('sidemenu2Controller', sidemenu2Controller)
.controller('mainController', mainController);
mainController.$inject = ['$location'];

function mainController($location) {var vm = this;vm.isActive = function (path) {if ($location.path().substr(0, path.length) === path) {return true;}return false;}}	

function sidemenu2Controller($scope) { 
$scope.date = new Date();
$scope.d201218="2020-12-18";
$scope.d201225="2020-12-25";
$scope.d210101="2021-01-01";
$scope.d210108="2021-01-08";
$scope.d210115="2021-01-15";
$scope.d210122="2021-01-22";
$scope.d210129="2021-01-29";
$scope.d210205="2021-02-05";
$scope.d210212="2021-02-12";
$scope.d210219="2021-02-19";
$scope.d210226="2021-02-26";
$scope.d210305="2021-03-05";
$scope.d210312="2021-03-12";
$scope.d210319="2021-03-19";
$scope.d210326="2021-03-26";
$scope.d210402="2021-04-02";
$scope.d210409="2021-04-09";
$scope.d210416="2021-04-16";
$scope.d210423="2021-04-23";
$scope.d210430="2021-04-30";

$scope.sidemenu2 = [
{lname:'index',rname:'Startpagina'},
{lname:'bestemmingen',rname:'Bestemmingen'},
{lname:'opstap',rname:'Opstap'},
{lname:'extraopstap',rname:'Extra Opstap'},
{lname:'vertrekdagen',rname:'Vertrekdagen'},
{lname:'gmaps',rname:'Kaarten'},
{lname:'regels',rname:'Regels & Afspraken'},
{lname:'codeshare',rname:'Booking Codes'}
];

$scope.d1812 =[
{rname:'Les Deux Alpes'},
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'Val Thorens'},
{rname:'Risoul'},
{rname:'Alpe d\u2019 Huez'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Vaujany'}
];$scope.orderProp = 'rname';

$scope.d2512 =[
{rname:'Les Deux Alpes'},
{rname:'Alpe d\u2019 Huez'},
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'Val Thorens'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Risoul'},
{rname:'Vaujany'}
];$scope.orderProp = 'rname';

$scope.d0101 =[
{rname:'Les Deux Alpes'},
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Risoul'},
{rname:'Val Thorens'}
];$scope.orderProp = 'rname';

$scope.d0801 =[
{rname:'Les Deux Alpes'},
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Risoul'},
{rname:'Val Thorens'}
];$scope.orderProp = 'rname';

$scope.d1501 =[
{rname:'Les Deux Alpes'},
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Val Thorens'}
];$scope.orderProp = 'rname';

$scope.d2201 =[
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Risoul'},
{rname:'Alpe d\u2019 Huez'},
{rname:'Les Deux Alpes'},
{rname:'Vaujany'},
{rname:'Val Thorens'}
];$scope.orderProp = 'rname';

$scope.d2901 =[
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Risoul'},
{rname:'Alpe d\u2019 Huez'},
{rname:'Les Deux Alpes'},
{rname:'Avoriaz'},
{rname:'Vaujany'},
{rname:'Valmeinier'},
{rname:'La Plagne'}
];$scope.orderProp = 'rname';

$scope.d0502 =[
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Risoul'},
{rname:'Les Deux Alpes'},
{rname:'Val Thorens'},
{rname:'Vaujany'}
];$scope.orderProp = 'rname';

$scope.d1202 =[
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Risoul'},
{rname:'Les Deux Alpes'},
{rname:'Val Thorens'},
{rname:'Alpe d\u2019 Huez'},
{rname:'Vaujany'}
];$scope.orderProp = 'rname';

$scope.d1902 =[
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Risoul'},
{rname:'Les Deux Alpes'},
{rname:'Val Thorens'},
{rname:'Vaujany'}
];$scope.orderProp = 'rname';

$scope.d2602 =[
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Risoul'},
{rname:'Les Deux Alpes'},
{rname:'Alpe d\u2019 Huez'},
{rname:'Val Thorens'},
{rname:'Vaujany'}
];$scope.orderProp = 'rname';

$scope.d0503 =[
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Risoul'},
{rname:'Les Deux Alpes'},
{rname:'Alpe d\u2019 Huez'},
{rname:'Val Thorens'},
{rname:'Vaujany'}
];$scope.orderProp = 'rname';

$scope.d1203 =[
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Risoul'},
{rname:'Les Deux Alpes'},
{rname:'Alpe d\u2019 Huez'},
{rname:'Val Thorens'},
{rname:'Vaujany'}
];$scope.orderProp = 'rname';

$scope.d1903 =[
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Risoul'},
{rname:'Les Deux Alpes'},
{rname:'Val Thorens'},
{rname:'Vaujany'}
];$scope.orderProp = 'rname';

$scope.d2603 =[
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Risoul'},
{rname:'Les Deux Alpes'},
{rname:'Alpe d\u2019 Huez'},
{rname:'Val Thorens'},
{rname:'Vaujany'}
];$scope.orderProp = 'rname';

$scope.d0204 =[
{rname:'St. Fran\u00E7ois Longchamp'},
{rname:'St. Sorlin d\u2019 Arves'},
{rname:'Risoul'},
{rname:'Les Deux Alpes'},
{rname:'Alpe d\u2019 Huez'},
{rname:'Val Thorens'},
{rname:'Vaujany'}
];$scope.orderProp = 'rname';

$scope.d0904 =[
{rname:'Val Thorens'}
];$scope.orderProp = 'rname';

$scope.d1604 =[
{rname:'Val Thorens'}
];$scope.orderProp = 'rname';

$scope.d2304 =[
{rname:'Val Thorens'}
];$scope.orderProp = 'rname';

$scope.d3004 =[
{rname:'Val Thorens'}
];$scope.orderProp = 'rname';


$scope.scopeopstap = [
{lname:'mopantwpidpa',rname:'Antwerpen - Desguinlei'},
{lname:'mopluik',rname:'Luik - Station Angleur'},
{lname:'mopbrusseldelta',rname:'Brussel - Parking Delta'},
{lname:'mopgentwielersport',rname:'Gent - Wielersport'},
{lname:'mopleuven',rname:'Leuven - Texaco E 40'}
]; 
$scope.orderProp = 'rname';

$scope.nopstap = [
{lname:'nopantwpidpa',rname:'Antwerpen - Desguinlei'},
{lname:'nopluik',rname:'Luik - Station Angleur'},
{lname:'nopbrusseldelta',rname:'Brussel - Parking Delta'},
{lname:'nopleuven',rname:'Leuven - Texaco E 40'},
{lname:'nopgentwielersport',rname:'Gent - Wielersport'}
]; 
$scope.orderProp = 'rname';

$scope.scopeextraopstap = [
{lname:'mxopxaveriabrugge',rname:'Brugge Xaverialaan - VIVES'},
{lname:'mxopkinebrugge',rname:'Brugge Kinepolis - Parking'},
{lname:'mxopgentpieter',rname:'Gent - St. Pieterplein'},
{lname:'mxopgentkramer',rname:'Gent - Kramerplein'},
{lname:'mxopgracehologne',rname:'Gr. Hologne - Tankstation'},
{lname:'mxophemptine',rname:'Heverlee - Kaz. Hemptine'},
{lname:'mxopleuvenincubator',rname:'Leuven - Incubator'},
{lname:'mxoplaneuve',rname:'L. La Neuve - Campus'},
{lname:'mxopnamur',rname:'Namur - Rue des Bourgeois'}
]; 
$scope.orderProp = 'rname';

$scope.xopstap = [
{lname:'xopxaveriabrugge',rname:'Brugge Xaverialaan - VIVES'},
{lname:'xopkinebrugge',rname:'Brugge Kinepolis - Parking'},
{lname:'xopgentpieter',rname:'Gent - St. Pieterplein'},
{lname:'xopgentkramer',rname:'Gent - Kramerplein'},
{lname:'xopgracehologne',rname:'Gr. Hologne - Tankstation'},
{lname:'xophemptine',rname:'Heverlee - Kaz. Hemptine'},
{lname:'xopleuvenincubator',rname:'Leuven - Incubator'},
{lname:'xoplaneuve',rname:'L. La Neuve - Campus'},
{lname:'xopnamur',rname:'Namur - Rue des Bourgeois'}
]; 
$scope.orderProp = 'rname';

$scope.scopebestemmingen = [
{lname:'mhuez',rname:'Alpe d\u2019 Huez'},
{lname:'mavoriaz',rname:'Avoriaz'},
{lname:'mdeuxalpes',rname:'Les Deux Alpes'},
{lname:'mrisoul',rname:'Risoul'},
{lname:'mlongchamp',rname:'St. Fran\u00E7ois Longchamp'},
{lname:'msarves',rname:'St. Sorlin d\u2019 Arves'},
{lname:'mvaltho',rname:'Val Thorens'},
{lname:'mlaplagne',rname:'La Plagne'},
{lname:'mvalmeinier',rname:'Valmeinier'},
{lname:'mvaujany',rname:'Vaujany'}
]; 
$scope.orderProp = 'rname';

$scope.rbestemmingen = [
{lname:'rhuez',rname:'Alpe d\u2019 Huez'},
{lname:'ravoriaz',rname:'Avoriaz'},
{lname:'rdeuxalpes',rname:'Les Deux Alpes'},
{lname:'rrisoul',rname:'Risoul'},
{lname:'rlongchamp',rname:'St. Fran\u00E7ois Longchamp'},
{lname:'rsarves',rname:'St. Sorlin d\u2019 Arves'},
{lname:'rvaltho',rname:'Val Thorens '},
{lname:'rlaplagne',rname:'La Plagne'},
{lname:'rvalmeinier',rname:'Valmeinier'},
{lname:'rvaujany',rname:'Vaujany'}
]; 
$scope.orderProp = 'rname';
$scope.bijgewerkt='24-11-2020';
}
})();