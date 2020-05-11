var g = new JustGage( {
    id: "gauge",
    value: 50,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6,
    pointer: true,
    pointerOptions: {
        toplength: 8,
        bottomlength: 60
    }
});

//updating the value randomly
setInterval(() => {
    g.refresh(Math.random() * 100);
}, 1000);
