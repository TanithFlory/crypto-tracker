import * as d3 from "d3";
import SCoinLineGraph from "./CoinLineGraph.styles";
import { useEffect, useState } from "react";
import { ICoinPrice } from "../../types";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";

interface IProps {
  graphData: ICoinPrice[];
}

const CoinLineGraph = (props: IProps) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [width, height] = useWindowDimensions();
  useEffect(() => {
    console.log(props.graphData);
    const margin = { top: 10, right: 30, bottom: 30, left: 60 };
    const svg = d3
      .select(ref)
      .append("svg")
      .attr("width", width + margin.left)
      .attr("height", height + margin.top + margin.bottom)
      .append("g");

    if (props.graphData) {
      const x = d3
        .scaleTime()
        .domain(
          d3.extent(props.graphData, (d) => new Date(d[0])) as [Date, Date]
        )
        .range([0, width]);
      svg
        .append("g")
        .attr("stroke-width", 0)
        .attr("transform", `translate(${margin.top + 5},${height})`)
        .call(
          d3.axisBottom(x).tickFormat((d, i) => {
            const date = new Date(d.toString()).toLocaleString("default", {
              day: "numeric",
            });
            const month = new Date(d.toString()).toLocaleString("default", {
              month: "short",
            });
            if (!i || Number(date) % 7 === 0) return `${month}`;
            if (i % 3 === 0) return `${date}`;
            return "";
          })
        );

      const max = d3.max(props.graphData, (d) => d[1])!;
      const min = d3.min(props.graphData, (d) => d[1])!;
      const y = d3.scaleLinear().domain([min, max]).range([height, 0]);

      svg
        .append("g")
        .attr("stroke-width", 0)
        .attr("transform", `translate(${width + 5},0)`)
        .call(d3.axisRight(y));
      svg
        .append("rect")
        .attr("width", width + 10)
        .attr("height", height)
        .attr("class", "dotted-lines-rect");

      svg.append("line").attr("class", "x-dotted-line");
      svg.append("line").attr("class", "y-dotted-line");

      svg
        .append("linearGradient")
        .attr("id", "line-gradient")
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", 0)
        .attr("y1", y(props.graphData[0]?.[1]))
        .attr("x2", 0)
        .attr("y2", y(max))
        .selectAll("stop")
        .data([{ color: "#E93842" }, { color: "#16C784" }])
        .enter()
        .append("stop")
        .attr("stop-color", (d) => d.color);

      svg
        .append("path")
        .datum(props.graphData)
        .attr("fill", "none")
        .attr("stroke", "url(#line-gradient)")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .line<[Date, number]>()
            .x((d) => x(d[0]))
            .y((d) => y(d[1]))
        );

      svg
        .append("circle")
        .attr("class", "end-circle")
        .attr("cx", x(props.graphData[props.graphData.length - 1]?.[0]))
        .attr("cy", y(props.graphData[props.graphData.length - 1]?.[1]))
        .attr("r", 4)
        .style("fill", "url(#line-gradient");

      svg
        .append("circle")
        .attr("class", "graph-circle")
        .attr("r", 6)
        .style("fill", "url(#line-gradient)");

      svg
        .append("rect")
        .attr("width", width + 10)
        .attr("height", height)
        .attr("fill", "transparent")
        .on("mouseover", () => {
          svg
            .selectAll(".x-dotted-line, .y-dotted-line, .graph-circle")
            .classed("visible", true);
        })
        .on("mousemove", (event) => {
          const xPosition = d3.pointer(event)[0];
          const yPosition = d3.pointer(event)[1];
          svg
            .select(".x-dotted-line")
            .attr("x1", xPosition)
            .attr("x2", xPosition)
            .attr("y2", height);
          svg
            .select(".y-dotted-line")
            .attr("x2", width + 10)
            .attr("y1", yPosition - 10)
            .attr("y2", yPosition - 10);

          const bisect = d3.bisector<[Date, number], Date>((d) => d[0]).left;
          const index = bisect(props.graphData, x.invert(xPosition));
          const [xData, yData] = !index
            ? props.graphData[index]
            : props.graphData[index - 1];
          const xValue = x(new Date(xData));
          const yValue = y(yData);
          svg
            .select(".graph-circle")
            .datum(props.graphData)
            .attr("cx", xValue)
            .attr("cy", yValue)
            .style("fill", "url(#line-gradient)");
        })
        .on("mouseout", () => {
          svg
            .selectAll(".x-dotted-line, .y-dotted-line, .graph-circle")
            .classed("visible", false);
        });
    }
    return () => {
      d3.select(ref).select("svg").remove();
    };
  }, [ref, props.graphData, width]);
  return (
    <SCoinLineGraph ref={setRef}>
      <div>
        <h1>Coin Chart</h1>
      </div>
      <div>
        <div>
          <h3>Price</h3>
          <h2>$11,000</h2>
        </div>
        <div className="coin_24h-status">
          <div>
            <h4>24h% change</h4>
            <span>1.64%</span>
          </div>
          <div>
            <h4>Volume 24h</h4>
            <span>47B</span>
          </div>
          <div>
            <h4>Market Cap</h4>
            <span>21B</span>
          </div>
        </div>
      </div>
      <div className="circle" />
    </SCoinLineGraph>
  );
};

export default CoinLineGraph;