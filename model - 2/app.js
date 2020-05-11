function createDashboard() {
    $("#rpm").kendoRadialGauge({
        theme: "black",

        pointer: {
            value: 5, 
            color: "blue"
        },

        scale: {
            startAngle: -45,
            endAngle: 120,

            min: 0,
            max: 7,

            majorUnit: 1,
            majorTicks: {
                width: 1,
                size: 7
            },

            minorUnit: 0.2,
            minorTicks: {
                size: 5,
            },
        },

        //not working
        ranges: [{
            from: 4,
            to: 5,
            color: "yellow"
        }, {
            from: 5, 
            to: 6,
            color: "red"
        }],

        labels: {
            font: "11px Arial, sans-serif"
        }
    });

    $("#kmh").kendoRadialGauge({
        theme: "black",

        pointer: {
            value: 0,
            color: "blue"
        },

        scale: {
            startAngle: -60,
            endAngle: 240,

            min: 0,
            max: 250,

            majorTicks: {
                width: 1,
                size: 15
            },
            majorUnit: 30,

            minorTicks: {
                size: 10
            },
            minorUnit: 2,
            
            //not working.
            // ranges: [{
            //     from: 60,
            //     end: 60,
            //     color: "green",
            // }],
        }
    });

    $("#fuel").kendoRadialGauge({
        theme: "black", 

        pointer: {
            value: 0.5,
            color: "#ea7001",
        },

        scale: {
            startAngle: 90,
            endAngle: 180,
            
            min: 0,
            max: 1,

            majorUnit: 0.5,
            majorTicks: {
                width: 2,
                size: 6
            },

            minorUnit: 0.25,
            minorTicks: {
                size: 3
            },

            ranges: [{
                from: 0,
                to: 0.3,
                color: "red"
            }],
        }
    })
}

$("#water-temp").kendoRadialGauge({
    theme: "black",

    pointer: {
        value: 90,
        color: "#ea7001"
    },

    scale: {
        startAngle: 180,
        endAngle: 270,

        min: 60,
        max: 120,

        majorUnit: 30,
        majorTicks: {
            width: 2,
            size: 6
        },

        minorUnit: 10,
        minorTicks: {
            size: 3
        },

        ranges: [{
            from: 100,
            to: 120,
            color: "red"
        }],
    }
})

var animateInterval;
function animateDashboard() {
    if(animateInterval) return;

    // var Gears = [0.14, 0.06, 0.035, 0.027, 0.]
}

function update() {
    $("#kmh").data("kendoRadialGauge").value(speed);
}

//trying to accelearate when the user will hover over acc btn else the speed should decrease
// if the user clicks on brake then the speed should raplidly goes to zero.

var speed = 0;
$(".speed").on("click", () => {
    speed += 3;
    update();
    // deacc();
});

// $(".speed").click(()=> {
//     $(this).data("clicked", true);
// })

// if($(".speed").data("clicked")) {
//     speed += 3;
//     update();
// } else {
//     speed -= 2;
//     update();
// }

// function deacc() {
//         var v = setInterval(()=> {
//             speed -= 2;
//             update();
//             if(speed === 0) clearInterval(v);
//         })
// }

$(document).ready(() => {
    animateInterval = null;

    createDashboard();
    // animateDashboard();
})