class Movie
{
  constructor(opts)
    {
    this.title = opts.title;
    this.yearCreated = opts.yearCreated;
    this.director = opts.director;
    this.featuring = opts.featuring;
    this.releaseDate = opts.releaseDate;
    this.rottenTomatoes = opts.rottenTomatoes;
    this.duration = opts.duration;
    this.genre = opts.genre;
    }
}

const theLittleMermaidOpts =
{
    movieTitle: "The Little Mermaid",
    yearCreated: 1989,
    director: " Ron Clements, John Musker",
    featuring: "Jodi Benson",
    releaseDate: "November 13, 1989",
    rottenTomatoes: 93,
    duration: "1 hour and 25 minutes",
    genre: "Family/Musical"
};

const theLittleMermaid = new movie(theLittleMermaidOpts);

class AugmentedReality extends Movie 
{
    constructor(opts)
    {
        this.realTimeInteraction = opts.realTimeInteraction
        this.
        super(opts)
    }
}