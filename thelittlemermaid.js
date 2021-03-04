class TvSeries
{
  constructor(props)
    {
    this.title = props.title;
    this.yearCreated = props.yearCreated;
    this.director = props.director;
    this.featuring = props.featuring;
    this.releaseDate = props.releaseDate;
    this.genre = props.genre;
    }
}
const miraculousLadybugProps =
{
    title: "Miraculous: Tales of Ladybug and Chat Noir",
    yearCreated: 2015,
    director: "Thomas Astruc",
    featuring: "Cristina Vee, Bryce Papenbrook",
    releaseDate: "September 15, 2015",
    genre: "Family"
};
const miraculousLadybug = new TvSeries(miraculousLadybugProps);
class Movie extends TvSeries
{
    constructor(props)
    {
        this.rottenTomatoes = props.rottenTomatoes;
        this.duration = props.duration;
        super(props);
    }
}
const theLittleMermaidProps =
{
    title: "The Little Mermaid",
    yearCreated: 1989,
    director: " Ron Clements, John Musker",
    featuring: "Jodi Benson",
    releaseDate: "November 13, 1989",
    rottenTomatoes: 93,
    duration: "1 hour and 25 minutes",
    genre: "Family/Musical"
};
const theLittleMermaid = new Movie(theLittleMermaidProps);
class AugmentedReality extends Movie 
{
    constructor(props)
    {
        this.realTimeInteraction = props.realTimeInteraction;
        this.camera = props.camera;
        this.motionSensors = props.motionSensors;
        this.processingPower = props.processingPower;
        this.deviceBeingUsed = props.deviceBeingUsed;
        super(props)

        const timeIdleOnApp = .30;

        findingActualTime(()=>
        {
            const timeUserSpentOnApp = totalTimeOnApp * timeIdleOnApp;
            this.findingOutHowMuchTimeSpentInApp(timeUserSpentOnApp);
        } );
    }
}

const pokemonGoProps =
{
    title: "Pokemon GO",
    yearCreated: 2016,
    director: " Niantic, Nintendo",
    // More like publishers and such...
    featuring: "You, every and all pokemons!",
    releaseDate: "July 6, 2016",
    rottenTomatoes: 80,
    duration: "For as long as you would like!",
    genre: "Mobile Game",
    realTimeInteraction: timeUserSpentOnApp,
    camera: "Ultra-wide camera",
    motionSensors: "Activated",
    processingPower: "1.4 GHZ",
    deviceBeingUsed: "Smartphone"
};

const pokemonGo = new movie(pokemonGoProps);

pokemonGo.findingActualTime();