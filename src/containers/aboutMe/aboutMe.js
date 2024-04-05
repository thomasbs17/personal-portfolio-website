import React, {useContext, useState} from "react";
import {Zoom} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import "./aboutMe.scss";

import worldMap from "@highcharts/map-collection/custom/world.topo.json";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highmaps";

function AnimatedMap() {
  // useEffect(() => {
  //     Highcharts.charts.forEach(chart => {
  //         if (chart && chart.title.textStr === '🌎 My experiences around the World') {
  //             chart.mapView.fitToGeometry
  //         }
  //     })
  // }, []);

  const data = [
    {
      "hc-key": "fr",
      color: "#c0ffd5"
    },
    {
      "hc-key": "es",
      color: "#c0ffd5"
    },
    {
      "hc-key": "cl",
      color: "#c0ffd5"
    },
    {
      "hc-key": "ar",
      color: "#c0ffd5"
    },
    {
      "hc-key": "gb",
      color: "#c0ffd5"
    }
  ];

  const [options] = useState({
    title: {
      text: "🌎 My experiences around the World",
      style: {
        color: "white"
      }
    },
    subtitle: {
      text: "Scroll to zoom in/out and hover the points to see more info",
      style: {
        fontSize: 15
      }
    },
    credits: {enabled: false},
    chart: {
      map: worldMap,
      backgroundColor: "transparent",
      // height: 800,
      width: 1000
    },
    plotOptions: {
      series: {
        allAreas: false
      }
    },
    legend: {
      enabled: false
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: "spacingBox"
      }
    },
    mapView: {
      projection: {
        name: "Equal Earth"
      },
      fitToGeometry: {
        type: "MultiPoint",
        coordinates: [
          [0, 60],
          [0, -60]
        ]
      }
    },
    tooltip: {
      useHTML: true,
      headerFormat: "<b>{point.key}</b>:<br/>",
      pointFormat: "{point.info}"
    },
    series: [
      {
        data,
        keys: ["hc-key", "color", "info"],
        name: "Coffee"
      },
      {
        type: "mappoint",
        data: [
          {
            lon: 2.3522,
            lat: 48.8566,
            name: "Paris",
            info: "Born and raised until I was 18"
          },
          {
            lon: 0.5792,
            lat: 44.8378,
            name: "Bordeaux",
            info: "I moved to Bordeaux in 2012 to undertake my Master's degree at Kedge Business School"
          },
          {
            lon: -3.70379,
            lat: 40.416775,
            name: "Madrid",
            info: "I moved to Madrid in 2013 to complete my Bachelor's degree in Marketing at Universidad Rey Juan Carlos"
          },
          {
            lon: -70.645348,
            lat: -33.459229,
            name: "Santiago",
            info: "I lived in Santiago for 7 months, working as an Intern in the French-Chilean Chamber of Commerce"
          },
          {
            lon: -58.381592,
            lat: -34.603722,
            name: "Buenos Aires",
            info: "I then decided to onboard an MBA in Finance at Universidad Belgrano"
          },
          {
            lon: -0.118092,
            lat: 51.509865,
            name: "London",
            info: "I moved to London in 2017 to kick start my carreer"
          }
        ]
      },
      {
        type: "mapline",
        data: [
          {
            geometry: {
              type: "LineString",
              coordinates: [
                [2.3522, 48.8566], // Paris
                [0.5792, 44.8378] // Bordeaux
              ]
            },
            className: "animated-line",
            color: "#ff0000"
          },
          {
            geometry: {
              type: "LineString",
              coordinates: [
                [0.5792, 44.8378], // Bordeaux
                [-3.70379, 40.416775] // Madrid
              ]
            },
            className: "animated-line",
            color: "#ff0000"
          },
          {
            geometry: {
              type: "LineString",
              coordinates: [
                [-3.70379, 40.416775], // Madrid
                [-70.645348, -33.459229] // Santiago, Chile
              ]
            },
            className: "animated-line",
            color: "#ff0000"
          },
          {
            geometry: {
              type: "LineString",
              coordinates: [
                [-70.645348, -33.459229], // Santiago, Chile
                [-58.381592, -34.603722] // Buenos Aires
              ]
            },
            className: "animated-line",
            color: "#ff0000"
          },
          {
            geometry: {
              type: "LineString",
              coordinates: [
                [-58.381592, -34.603722], // Buenos Aires
                [0.1276, 51.5072] // London
              ]
            },
            className: "animated-line",
            color: "#ff0000"
          }
        ],
        lineWidth: 2,
        enableMouseTracking: false
      }
    ]
  });

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"mapChart"}
      options={options}
    />
  );
}

export default function AboutMe() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className="about-main" id="greeting">
      <div className="about-me-main">
        <div className="about-me-text-div">
          <div>
            <h1
              className={isDark ? "dark-mode about-me-text" : "about-me-text"}
            >
              About Me
            </h1>
            <Zoom bottom duration={1000} distance="40px">
              <iframe
                title="my-international-experience"
                src="https://uploads.knightlab.com/storymapjs/3330b7db611d6e61ed30c87f21850b4b/my-international-experiences/index.html"
                frameborder="0"
                width="90%"
                height="600"
              ></iframe>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
}
