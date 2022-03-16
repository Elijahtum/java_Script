// Procedural programming 
let baseSalary = 30_000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate){
    return baseSalary + (overTime * rate);
}

// The above written in OOP Below 

let employee = {
    baseSalary: 30_000,
    overTime: 10,
    rate: 20,
    getWage: function(){
        return this.baseSalary + (this.overTime * this.rate);
    }
};

// Functions are classified as Objects

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

// Building a Stop Watch Object Using a constructor method 

// const sw = new Stopwatch()
function Stopwatch(){
    let startTime, endTime, running, duration = 0;
    
    this.start = function() {
        if (running)
        throw new Error('Stopwatch has already Started!');

        running = true;

        startTime = new Date(); 
    };

    this.stop = function() {
        if (!running)
        throw new Error('Stopwatch is not started.');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration',{
        get: function() {return duration;  }
    });
}

Stopwatch();