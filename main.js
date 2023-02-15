    // Declare constants
    const FRAME_HEIGHT = 500;
    const FRAME_WIDTH = 500;
    const MARGINS = {left: 50, right: 50, top: 50, bottom: 50}

    const FRAME1 = d3.select("#vis1")
                    .append("svg")
                    .attr("height", FRAME_HEIGHT)
                    .attr("width", FRAME_WIDTH)
                    .attr("class", "frame");

    // data
    const DATA = [55000, 48000, 27000, 66000, 90000];

    // y-axis scale
    const YSCALE = d3.scaleLinear()
      .domain([0, d3.max(DATA)])
      .range([FRAME_HEIGHT, 0]);


    // appends points to svg
    FRAME1.selectAll("circle")
      .data(DATA)
      .enter()
      .append("circle")
      .attr("cx", FRAME_WIDTH / 2)
      .attr("cy", d => YSCALE(d))
      .attr("r", 5)
      .attr("fill", "black");

    // y-axis
    const YAXIS = d3.axisLeft(YSCALE);
    FRAME1.append("g")
      .attr("class", "y axis")
      .call(YAXIS);
