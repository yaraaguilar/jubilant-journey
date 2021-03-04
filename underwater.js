class Planet 
{
    degreesAroundSun = 0;
    degreesAroundSelf = 0;

    constructor(opts)
    {
        this.name = opts.name;
        this.diameter = opts.diameter;
        this.galaxy = opts.galaxy;
        this.proximityToStar = opts.proximityToStar;
        this.daysToRotateAroundSun = opts.daysToRotateAroundSun;
        this.rotationDays = opts.rotationDays;
        this.lengthOfDay = opts.lengthOfDay;
        
        const intervalTime = 5000;
        const degreesPerDay = 360 / this.rotationDays;

        setInterval(() =>
        {
            const updatedDegrees = degreesAroundSun + degreesPerDay;
            this.rotateAroundSun(updatedDegrees);
        }, intervalTime);

        setInterval(f, t)
    }
    getPositionAroundSun()
    {
        return this.degreesAroundSun;
    }
    getPositionAroundSelf()
    {
        return this.degreesAroundSelf;
    }
    setPositionAroundSun(degrees)
    {
        this.degreesAroundSun = degrees;
    }
    setPositionAroundSelf(degrees)
    {
        this.degreesAroundSelf = degrees;
    }
    rotateAroundSun(degrees)
    {
        this.degreesAroundSun = degrees;
    }
    rotateAroundAxis(degrees)
    {
        this.degreesAroundSelf = degrees;
    }
  
}
const earthOpts = {
    name: "Earth",
    diameter: 6000,
    galaxy: "Milky Way",
    distanceFromSun: 10000,
    rotationDays: 365,
    lengthOfDay: 24
}
const earth = new Planet(earthOpts);

console.log(earth.name); --> "Earth"