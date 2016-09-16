export default {
  "layers": [
    {
      "id": "background",
      "type": "background",
      "paint": {
        "background-color": "#cfcfd4"
      }
    },
    {
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-color": "#ededed"
      },
      "id": "Land",
      "minzoom": 0,
      "type": "fill",
      "source-layer": "Land"
    },
    {
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-color": "#e8e8e8"
      },
      "id": "Urban area",
      "minzoom": 5,
      "type": "fill",
      "source-layer": "Urban area",
      "maxzoom": 12
    },
    {
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-color": "#e4e8e4"
      },
      "id": "Openspace or forest",
      "minzoom": 12,
      "type": "fill",
      "source-layer": "Openspace or forest"
    },
    {
      "source": "esri",
      "source-layer": "Admin0 forest or park",
      "paint": {
        "fill-color": "#e4e8e4"
      },
      "id": "Admin0 forest or park",
      "minzoom": 9,
      "type": "fill",
      "layout": {}
    },
    {
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-color": "#e4e8e4"
      },
      "id": "Admin1 forest or park",
      "minzoom": 9,
      "type": "fill",
      "source-layer": "Admin1 forest or park"
    },
    {
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-color": "#e6e6e6",
        "fill-outline-color": "#e6e6e6"
      },
      "id": "Airport/Airport property",
      "minzoom": 9,
      "type": "fill",
      "source-layer": "Airport"
    },
    {
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-color": "#ededed"
      },
      "id": "Airport/Airport runway",
      "minzoom": 11,
      "type": "fill",
      "source-layer": "Airport"
    },
    {
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-color": "#e4e8e4"
      },
      "id": "Park or farming",
      "minzoom": 11,
      "type": "fill",
      "source-layer": "Park or farming"
    },
    {
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-color": "#cfcfd4"
      },
      "id": "Water area large scale/Lake or river",
      "minzoom": 7,
      "type": "fill",
      "source-layer": "Water area large scale",
      "maxzoom": 11
    },
    {
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-pattern": "Water area large scale/Lake intermittent"
      },
      "id": "Water area large scale/Lake intermittent",
      "minzoom": 7,
      "type": "fill",
      "source-layer": "Water area large scale",
      "maxzoom": 11
    },
    {
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-color": "#cfcfd4"
      },
      "id": "Water area medium scale/Lake or river",
      "minzoom": 5,
      "type": "fill",
      "source-layer": "Water area medium scale",
      "maxzoom": 7
    },
    {
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-pattern": "Water area medium scale/Lake intermittent"
      },
      "id": "Water area medium scale/Lake intermittent",
      "minzoom": 5,
      "type": "fill",
      "source-layer": "Water area medium scale",
      "maxzoom": 7
    },
    {
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-color": "#cfcfd4",
        "fill-outline-color": "#cfcfd4"
      },
      "id": "Water area small scale",
      "minzoom": 1,
      "type": "fill",
      "source-layer": "Water area small scale",
      "maxzoom": 5
    },
    {
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-color": "#dfe0e2",
        "fill-outline-color": "#ededed"
      },
      "id": "Water area/Dam or weir",
      "minzoom": 15,
      "type": "fill",
      "source-layer": "Water area"
    },
    {
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-color": "#cfcfd4",
        "fill-outline-color": "#cfcfd4"
      },
      "id": "Water area/Lake, river or bay",
      "minzoom": 11,
      "type": "fill",
      "source-layer": "Water area"
    },
    {
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-pattern": "Water area/Lake or river intermittent"
      },
      "id": "Water area/Lake or river intermittent",
      "minzoom": 10,
      "type": "fill",
      "source-layer": "Water area"
    },
    {
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              1,
              0.5
            ],
            [
              5,
              1.33
            ]
          ]
        },
        "line-color": "#d6d6de"
      },
      "id": "Water line small scale",
      "minzoom": 5,
      "type": "line",
      "source-layer": "Water line small scale",
      "maxzoom": 5
    },
    {
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              5,
              0.5
            ],
            [
              7,
              1.33
            ]
          ]
        },
        "line-color": "#cfcfd4"
      },
      "id": "Water line medium scale",
      "minzoom": 5,
      "type": "line",
      "source-layer": "Water line medium scale",
      "maxzoom": 7
    },
    {
      "filter": [
        "in",
        "_symbol",
        0,
        2,
        3
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              7,
              1
            ],
            [
              11,
              1.33
            ]
          ]
        },
        "line-color": "#cfcfd4"
      },
      "id": "Water line large scale/Stream river canal or ditch",
      "minzoom": 7,
      "type": "line",
      "source-layer": "Water line large scale",
      "maxzoom": 11
    },
    {
      "filter": [
        "in",
        "_symbol",
        0,
        2
      ],
      "source": "esri",
      "layout": {
        "line-cap": "round"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              11,
              1
            ],
            [
              14,
              1.33
            ],
            [
              17,
              2.66
            ]
          ],
          "base": 1.2
        },
        "line-color": "#cfcfd4"
      },
      "id": "Water line/Stream river canal or ditch",
      "minzoom": 10,
      "type": "line",
      "source-layer": "Water line"
    },
    {
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "source": "esri",
      "layout": {},
      "paint": {
        "line-dasharray": [
          8,
          3
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1
            ],
            [
              14,
              1.3333
            ],
            [
              17,
              2
            ]
          ]
        },
        "line-color": "#cfcfd4"
      },
      "id": "Water line/Stream or river intermittent",
      "minzoom": 10,
      "type": "line",
      "source-layer": "Water line"
    },
    {
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-color": "#ededed"
      },
      "id": "Special area of interest/Bike, walk or pedestrian",
      "minzoom": 17,
      "type": "fill",
      "source-layer": "Special area of interest"
    },
    {
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-color": "#dfe0e2",
        "fill-outline-color": "#ededed"
      },
      "id": "Building",
      "minzoom": 15,
      "type": "fill",
      "source-layer": "Building"
    },
    {
      "source": "esri",
      "layout": {},
      "paint": {
        "fill-color": "#cfcfd4"
      },
      "id": "Marine area/1",
      "minzoom": 5,
      "type": "fill",
      "source-layer": "Marine area"
    },
    {
      "filter": [
        "==",
        "_symbol",
        11
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-dasharray": [
          3,
          2
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              1.6
            ],
            [
              17,
              1.6
            ]
          ]
        },
        "line-color": "#c8c8c8"
      },
      "id": "Boundary line/Disputed admin5",
      "minzoom": 16,
      "type": "line",
      "source-layer": "Boundary line"
    },
    {
      "filter": [
        "==",
        "_symbol",
        10
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-dasharray": [
          3,
          2
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              1.6
            ],
            [
              17,
              1.6
            ]
          ]
        },
        "line-color": "#c8c8c8"
      },
      "id": "Boundary line/Disputed admin4",
      "minzoom": 16,
      "type": "line",
      "source-layer": "Boundary line"
    },
    {
      "filter": [
        "==",
        "_symbol",
        9
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-dasharray": [
          4,
          2
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              1.6
            ],
            [
              17,
              1.6
            ]
          ]
        },
        "line-color": "#c8c8c8"
      },
      "id": "Boundary line/Disputed admin3",
      "minzoom": 16,
      "type": "line",
      "source-layer": "Boundary line"
    },
    {
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-dasharray": [
          4,
          2
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              10,
              1.33
            ],
            [
              14,
              1.6
            ],
            [
              17,
              1.6
            ]
          ]
        },
        "line-color": "#c8c8c8"
      },
      "id": "Boundary line/Disputed admin2",
      "minzoom": 10,
      "type": "line",
      "source-layer": "Boundary line"
    },
    {
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-dasharray": [
          4,
          2
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              4,
              1.33
            ],
            [
              14,
              1.6
            ],
            [
              17,
              1.6
            ]
          ]
        },
        "line-color": "#c8c8c8"
      },
      "id": "Boundary line/Disputed admin1",
      "minzoom": 4,
      "type": "line",
      "source-layer": "Boundary line"
    },
    {
      "filter": [
        "!in",
        "DisputeID",
        80,
        0
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-dasharray": [
          6,
          2
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              1,
              1.33
            ],
            [
              14,
              1.6
            ],
            [
              17,
              1.6
            ]
          ]
        },
        "line-color": "#c8c8c8"
      },
      "id": "Boundary line/Disputed admin0",
      "minzoom": 1,
      "type": "line",
      "source-layer": "Boundary line"
    },
    {
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-dasharray": [
          4,
          2
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              1.33
            ],
            [
              17,
              1.33
            ]
          ]
        },
        "line-color": "#9C9C9C"
      },
      "id": "Boundary line/Admin5",
      "minzoom": 16,
      "type": "line",
      "source-layer": "Boundary line"
    },
    {
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-dasharray": [
          4,
          2
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              1.33
            ],
            [
              17,
              1.33
            ]
          ]
        },
        "line-color": "#9C9C9C"
      },
      "id": "Boundary line/Admin4",
      "minzoom": 16,
      "type": "line",
      "source-layer": "Boundary line"
    },
    {
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-dasharray": [
          4,
          2
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              1.33
            ],
            [
              17,
              1.33
            ]
          ]
        },
        "line-color": "#9C9C9C"
      },
      "id": "Boundary line/Admin3",
      "minzoom": 16,
      "type": "line",
      "source-layer": "Boundary line"
    },
    {
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.3333
            ],
            [
              14,
              2.67
            ],
            [
              17,
              2.67
            ]
          ]
        },
        "line-color": "#e6e6e6"
      },
      "id": "Boundary line/Admin2/1",
      "minzoom": 8,
      "type": "line",
      "source-layer": "Boundary line"
    },
    {
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-width": {
          "base": 1,
          "stops": [
            [
              6,
              1.2
            ],
            [
              9,
              2.5
            ],
            [
              14,
              7
            ],
            [
              17,
              7
            ]
          ]
        },
        "line-color": "#dbdbdb"
      },
      "id": "Boundary line/Admin1/1",
      "minzoom": 6,
      "type": "line",
      "source-layer": "Boundary line"
    },
    {
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              1,
              0.665
            ],
            [
              14,
              9.33
            ],
            [
              17,
              9.33
            ]
          ]
        },
        "line-color": "#d4d4d4"
      },
      "id": "Boundary line/Admin0/1",
      "minzoom": 1,
      "type": "line",
      "source-layer": "Boundary line"
    },
    {
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-dasharray": [
          5,
          3
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              0.5
            ],
            [
              14,
              1.33
            ],
            [
              17,
              1.33
            ]
          ]
        },
        "line-color": "#b9b9b9"
      },
      "id": "Boundary line/Admin2/0",
      "minzoom": 8,
      "type": "line",
      "source-layer": "Boundary line"
    },
    {
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-dasharray": [
          8,
          6
        ],
        "line-width": {
          "base": 1,
          "stops": [
            [
              4,
              0.5
            ],
            [
              14,
              1.33
            ],
            [
              17,
              1.33
            ]
          ]
        },
        "line-color": "#b9b9b9"
      },
      "id": "Boundary line/Admin1/0",
      "minzoom": 8,
      "type": "line",
      "source-layer": "Boundary line"
    },
    {
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-dasharray": [
          12,
          4
        ],
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              1,
              0.665
            ],
            [
              14,
              1.33
            ],
            [
              17,
              1.33
            ]
          ]
        },
        "line-color": "#aaaaaa"
      },
      "id": "Boundary line/Admin0/0",
      "minzoom": 8,
      "type": "line",
      "source-layer": "Boundary line"
    },
    {
      "source": "esri",
      "source-layer": "Railroad",
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              3.33
            ],
            [
              14,
              3.33
            ],
            [
              17,
              3.33
            ]
          ]
        },
        "line-color": "#efefef"
      },
      "id": "Railroad/2",
      "minzoom": 13,
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "source": "esri",
      "source-layer": "Railroad",
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1.33
            ],
            [
              14,
              1.33
            ],
            [
              17,
              1.33
            ]
          ]
        },
        "line-color": "#dedede"
      },
      "id": "Railroad/1",
      "minzoom": 13,
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "source": "esri",
      "source-layer": "Railroad",
      "paint": {},
      "id": "Railroad/0",
      "minzoom": 13,
      "type": "symbol",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Railroad/0",
        "icon-allow-overlap": true,
        "symbol-placement": "line",
        "icon-padding": 1
      }
    },
    {
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              1.6
            ],
            [
              17,
              1.6
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Trail or path",
      "minzoom": 15,
      "type": "line",
      "source-layer": "Trail or path"
    },
    {
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              3.33
            ],
            [
              14,
              4
            ],
            [
              17,
              4
            ]
          ]
        },
        "line-color": "#cfcfd4"
      },
      "id": "Ferry/Rail ferry/2",
      "minzoom": 11,
      "type": "line",
      "source-layer": "Ferry"
    },
    {
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1.33
            ],
            [
              14,
              1.33
            ],
            [
              17,
              1.33
            ]
          ]
        },
        "line-color": "#cfcfd4"
      },
      "id": "Ferry/Rail ferry/1",
      "minzoom": 11,
      "type": "line",
      "source-layer": "Ferry"
    },
    {
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "visibility": "none"
      },
      "paint": {
        "line-color": "#cfcfd4",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1.33
            ],
            [
              14,
              1.47
            ],
            [
              17,
              1.47
            ]
          ]
        },
        "line-dasharray": [
          6.06061,
          3.63636
        ]
      },
      "id": "Ferry/Ferry",
      "minzoom": 11,
      "type": "line",
      "source-layer": "Ferry"
    },
    {
      "filter": [
        "==",
        "_symbol",
        10
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              3.33
            ],
            [
              17,
              4.33
            ]
          ]
        },
        "line-color": "#dcdcdc"
      },
      "id": "Road/4WD/1",
      "minzoom": 14,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              3.33
            ],
            [
              17,
              4.33
            ]
          ]
        },
        "line-color": "#dcdcdc"
      },
      "id": "Road/Service/1",
      "minzoom": 14,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              4.67
            ],
            [
              17,
              8.67
            ]
          ]
        },
        "line-color": "#dcdcdc"
      },
      "id": "Road/Local/1",
      "minzoom": 14,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        10
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              1
            ],
            [
              14,
              1
            ],
            [
              17,
              2
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road/4WD/0",
      "minzoom": 12,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.75
            ],
            [
              14,
              1.33
            ],
            [
              17,
              2.33
            ]
          ]
        },
        "line-color": "#fdfdfd"
      },
      "id": "Road/Service/0",
      "minzoom": 12,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              0.63
            ],
            [
              14,
              2.67
            ],
            [
              17,
              4.67
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road/Local/0",
      "minzoom": 12,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              13,
              1.5
            ],
            [
              14,
              4.67
            ],
            [
              17,
              8.67
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road/Minor/1",
      "minzoom": 13,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              13,
              1.5
            ],
            [
              14,
              4
            ],
            [
              17,
              8
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road/Minor, ramp or traffic circle/1",
      "minzoom": 13,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              13,
              1.5
            ],
            [
              14,
              7.33
            ],
            [
              17,
              14.33
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road/Major/1",
      "minzoom": 13,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              13,
              1.5
            ],
            [
              14,
              4.67
            ],
            [
              17,
              7.67
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road/Major, ramp or traffic circle/1",
      "minzoom": 13,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.75
            ],
            [
              14,
              2.67
            ],
            [
              17,
              4.67
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road/Minor/0",
      "minzoom": 11,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              10,
              0.75
            ],
            [
              14,
              5.33
            ],
            [
              17,
              10.33
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road/Major/0",
      "minzoom": 10,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1.2
            ],
            [
              14,
              7.33
            ],
            [
              17,
              14.33
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road/Highway/1",
      "minzoom": 9,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1.2
            ],
            [
              14,
              7.33
            ],
            [
              17,
              14.33
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road/Freeway Motorway/1",
      "minzoom": 9,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1.5
            ],
            [
              14,
              4.67
            ],
            [
              17,
              8.67
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road/Freeway Motorway, ramp or traffic circle/1",
      "minzoom": 11,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              4,
              0.75
            ],
            [
              14,
              5.33
            ],
            [
              17,
              10.33
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road/Highway/0",
      "minzoom": 8,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              4,
              0.75
            ],
            [
              14,
              5.33
            ],
            [
              17,
              10.33
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road/Freeway Motorway/0",
      "minzoom": 8,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.75
            ],
            [
              14,
              2
            ],
            [
              17,
              4
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road/Minor, ramp or traffic circle/0",
      "minzoom": 11,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              10,
              0.75
            ],
            [
              14,
              2.67
            ],
            [
              17,
              4.67
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road/Major, ramp or traffic circle/0",
      "minzoom": 10,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              0.75
            ],
            [
              14,
              2.67
            ],
            [
              17,
              4.67
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road/Freeway Motorway, ramp or traffic circle/0",
      "minzoom": 8,
      "type": "line",
      "source-layer": "Road"
    },
    {
      "filter": [
        "==",
        "_symbol",
        10
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              3.33
            ],
            [
              17,
              4.33
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road tunnel/4WD/1",
      "minzoom": 14,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              3.33
            ],
            [
              17,
              4.33
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road tunnel/Service/1",
      "minzoom": 14,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              4.67
            ],
            [
              17,
              8.67
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road tunnel/Local/1",
      "minzoom": 14,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        10
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              1
            ],
            [
              17,
              1
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road tunnel/4WD/0",
      "minzoom": 14,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              1.33
            ],
            [
              17,
              1.33
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road tunnel/Service/0",
      "minzoom": 14,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              0.63
            ],
            [
              14,
              2.67
            ],
            [
              17,
              2.67
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road tunnel/Local/0",
      "minzoom": 11,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              13,
              1.5
            ],
            [
              14,
              4.67
            ],
            [
              17,
              8.67
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road tunnel/Minor/1",
      "minzoom": 13,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              3.33
            ],
            [
              14,
              4
            ],
            [
              17,
              4
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road tunnel/Minor, ramp or traffic circle/1",
      "minzoom": 9,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              3.33
            ],
            [
              14,
              7.33
            ],
            [
              17,
              7.33
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road tunnel/Major/1",
      "minzoom": 9,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              3.33
            ],
            [
              14,
              4.67
            ],
            [
              17,
              4.67
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road tunnel/Major, ramp or traffic circle/1",
      "minzoom": 9,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1.33
            ],
            [
              14,
              2.67
            ],
            [
              17,
              2.67
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road tunnel/Minor/0",
      "minzoom": 9,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.33
            ],
            [
              14,
              5.33
            ],
            [
              17,
              5.33
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road tunnel/Major/0",
      "minzoom": 9,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              3.33
            ],
            [
              14,
              4.67
            ],
            [
              17,
              4.67
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road tunnel/Freeway Motorway, ramp or traffic circle/1",
      "minzoom": 9,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              4,
              3.33
            ],
            [
              14,
              7.33
            ],
            [
              17,
              7.33
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road tunnel/Highway/1",
      "minzoom": 9,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "source": "esri",
      "layout": {
        "line-join": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              4,
              3.33
            ],
            [
              14,
              7.33
            ],
            [
              17,
              7.33
            ]
          ]
        },
        "line-color": "#cccccc"
      },
      "id": "Road tunnel/Freeway Motorway/1",
      "minzoom": 9,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              4,
              1.33
            ],
            [
              14,
              5.33
            ],
            [
              17,
              5.33
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road tunnel/Highway/0",
      "minzoom": 9,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              4,
              1.33
            ],
            [
              14,
              5.33
            ],
            [
              17,
              5.33
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road tunnel/Freeway Motorway/0",
      "minzoom": 9,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1.33
            ],
            [
              14,
              2
            ],
            [
              17,
              2
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road tunnel/Minor, ramp or traffic circle/0",
      "minzoom": 9,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1.33
            ],
            [
              14,
              2.67
            ],
            [
              17,
              2.67
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road tunnel/Major, ramp or traffic circle/0",
      "minzoom": 9,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "source": "esri",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      },
      "paint": {
        "line-opacity": 0.5,
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1.33
            ],
            [
              14,
              2.67
            ],
            [
              17,
              2.67
            ]
          ]
        },
        "line-color": "#ffffff"
      },
      "id": "Road tunnel/Freeway Motorway, ramp or traffic circle/0",
      "minzoom": 9,
      "type": "line",
      "source-layer": "Road tunnel"
    },
    {
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 5,
        "text-padding": 1,
        "text-font": [
          "Arial Italic"
        ],
        "text-letter-spacing": 0.3,
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              1,
              12
            ],
            [
              5,
              15
            ],
            [
              8,
              17
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#a2a2a6"
      },
      "id": "Marine waterbody/label/2x large",
      "minzoom": 1,
      "type": "symbol",
      "source-layer": "Marine waterbody/label",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 5,
        "text-padding": 1,
        "text-font": [
          "Arial Italic"
        ],
        "text-letter-spacing": 0.2,
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              1,
              10
            ],
            [
              5,
              12
            ],
            [
              8,
              17
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#a2a2a6"
      },
      "id": "Marine waterbody/label/x large",
      "minzoom": 1,
      "type": "symbol",
      "source-layer": "Marine waterbody/label",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 5,
        "text-padding": 1,
        "text-font": [
          "Arial Italic"
        ],
        "text-letter-spacing": 0.2,
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              1,
              10
            ],
            [
              5,
              12
            ],
            [
              8,
              17
            ]
          ]
        }
      },
      "paint": {
        "text-color": "#a2a2a6"
      },
      "id": "Marine waterbody/label/large",
      "minzoom": 1,
      "type": "symbol",
      "source-layer": "Marine waterbody/label",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 5,
        "text-padding": 1,
        "text-font": [
          "Arial Italic"
        ],
        "text-letter-spacing": 0.15,
        "text-allow-overlap": false,
        "text-size": 10
      },
      "paint": {
        "text-color": "#a2a2a6"
      },
      "id": "Marine waterbody/label/medium",
      "minzoom": 1,
      "type": "symbol",
      "source-layer": "Marine waterbody/label",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 5,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.1,
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10,
        "text-padding": 1
      },
      "paint": {
        "text-color": "#a2a2a6"
      },
      "id": "Marine waterbody/label/small",
      "minzoom": 1,
      "type": "symbol",
      "source-layer": "Marine waterbody/label",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_label_class",
        8
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-font": [
          "Arial Italic"
        ],
        "text-letter-spacing": 0.1,
        "text-padding": 1,
        "text-size": 10
      },
      "paint": {
        "text-color": "#a2a2a6"
      },
      "id": "Water area/label/Dam or weir",
      "minzoom": 11,
      "type": "symbol",
      "source-layer": "Water area/label"
    },
    {
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-font": [
          "Arial Italic"
        ],
        "text-letter-spacing": 0.15,
        "text-allow-overlap": false,
        "text-size": 10,
        "text-padding": 1
      },
      "paint": {
        "text-color": "#a2a2a6"
      },
      "id": "Marine area/label/Default",
      "minzoom": 11,
      "type": "symbol",
      "source-layer": "Marine area/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Italic"
        ],
        "text-letter-spacing": 0.1,
        "text-allow-overlap": false,
        "text-size": 10
      },
      "paint": {
        "text-color": "#969696"
      },
      "id": "Water area large scale/label/Lake or lake intermittent",
      "minzoom": 7,
      "type": "symbol",
      "source-layer": "Water area large scale/label",
      "maxzoom": 11
    },
    {
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.1,
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      },
      "paint": {
        "text-color": "#969696"
      },
      "id": "Water area large scale/label/River",
      "minzoom": 7,
      "type": "symbol",
      "source-layer": "Water area large scale/label",
      "maxzoom": 11
    },
    {
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": false,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Italic"
        ],
        "text-allow-overlap": false,
        "text-size": 10
      },
      "paint": {
        "text-color": "#969696"
      },
      "id": "Water area medium scale/label/Default",
      "minzoom": 5,
      "type": "symbol",
      "source-layer": "Water area medium scale/label",
      "maxzoom": 7
    },
    {
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Italic"
        ],
        "text-letter-spacing": 0.1,
        "text-allow-overlap": false,
        "text-size": 10
      },
      "paint": {
        "text-color": "#969696"
      },
      "id": "Water area small scale/label/Default",
      "minzoom": 5,
      "maxzoom": 5,
      "source-layer": "Water area small scale/label",
      "type": "symbol"
    },
    {
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Italic"
        ],
        "text-letter-spacing": 0.1,
        "text-allow-overlap": false,
        "text-size": 10
      },
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#efefef",
        "text-color": "#828282"
      },
      "id": "Water area/label/Small island",
      "minzoom": 11,
      "type": "symbol",
      "source-layer": "Water area/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Italic"
        ],
        "text-letter-spacing": 0.15,
        "text-allow-overlap": false,
        "text-size": 10
      },
      "paint": {
        "text-color": "#969696"
      },
      "id": "Water area/label/Bay or inlet",
      "minzoom": 11,
      "type": "symbol",
      "source-layer": "Water area/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.15,
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      },
      "paint": {
        "text-color": "#969696"
      },
      "id": "Water area/label/Canal or ditch",
      "minzoom": 11,
      "type": "symbol",
      "source-layer": "Water area/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Italic"
        ],
        "text-letter-spacing": 0.15,
        "text-allow-overlap": false,
        "text-size": 10
      },
      "paint": {
        "text-color": "#969696"
      },
      "id": "Water area/label/Large lake or reservoir",
      "minzoom": 11,
      "type": "symbol",
      "source-layer": "Water area/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.15,
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      },
      "paint": {
        "text-color": "#969696"
      },
      "id": "Water area/label/Large river",
      "minzoom": 11,
      "type": "symbol",
      "source-layer": "Water area/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Italic"
        ],
        "text-letter-spacing": 0.1,
        "text-allow-overlap": false,
        "text-size": 10
      },
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#efefef",
        "text-color": "#828282"
      },
      "id": "Water area/label/Large island",
      "minzoom": 11,
      "type": "symbol",
      "source-layer": "Water area/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        6
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Italic"
        ],
        "text-letter-spacing": 0.15,
        "text-allow-overlap": false,
        "text-size": 10
      },
      "paint": {
        "text-color": "#969696"
      },
      "id": "Water area/label/Small lake or reservoir",
      "minzoom": 11,
      "type": "symbol",
      "source-layer": "Water area/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        7
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.15,
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      },
      "paint": {
        "text-color": "#969696"
      },
      "id": "Water area/label/Small river",
      "minzoom": 11,
      "type": "symbol",
      "source-layer": "Water area/label"
    },
    {
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-font": [
          "Arial Italic"
        ],
        "text-field": "{_name}",
        "text-letter-spacing": 0.1,
        "text-padding": 1,
        "text-offset": [
          0,
          -0.5
        ],
        "text-size": 9.333
      },
      "paint": {
        "text-color": "#969696"
      },
      "id": "Water line large scale/label/Default",
      "minzoom": 11,
      "maxzoom": 10,
      "source-layer": "Water line large scale/label",
      "type": "symbol"
    },
    {
      "source": "esri",
      "source-layer": "Water line/label",
      "paint": {
        "text-color": "#969696"
      },
      "id": "Water line/label/Default",
      "minzoom": 15,
      "type": "symbol",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-font": [
          "Arial Italic"
        ],
        "text-field": "{_name_global}",
        "text-letter-spacing": 0.1,
        "text-padding": 1,
        "text-offset": [
          0,
          -0.5
        ],
        "text-size": 10.667
      }
    },
    {
      "source": "esri",
      "source-layer": "Trail or path/label",
      "paint": {
        "text-halo-width": 0.933,
        "text-halo-color": "#FDFDFD",
        "text-color": "#666666"
      },
      "id": "Trail or path/label/Default",
      "minzoom": 18,
      "type": "symbol",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-padding": 1,
        "text-field": "{_name_global}",
        "text-letter-spacing": 0.05,
        "text-font": [
          "Arial Bold"
        ],
        "text-size": 9.333
      }
    },
    {
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-padding": 1,
        "text-field": "{_name_global}",
        "text-letter-spacing": 0.1,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.667
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-width": 0.667,
        "text-halo-color": "#ffffff"
      },
      "id": "Road/label/Freeway Motorway",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-padding": 1,
        "symbol-placement": "line",
        "text-letter-spacing": 0.1,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.667
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-width": 0.667,
        "text-halo-color": "#ffffff"
      },
      "id": "Road/label/Freeway Motorway, alt name",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        75
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name_global}",
        "text-letter-spacing": 0.09,
        "text-padding": 1,
        "text-size": 10.667
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-width": 0.667,
        "text-halo-color": "#ffffff"
      },
      "id": "Road/label/Highway",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "symbol-placement": "line",
        "text-letter-spacing": 0.1,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.667
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-width": 0.667,
        "text-halo-color": "#ffffff"
      },
      "id": "Road/label/Major",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-padding": 1,
        "symbol-placement": "line",
        "text-letter-spacing": 0.1,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.667
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-width": 0.667,
        "text-halo-color": "#ffffff"
      },
      "id": "Road/label/Major, alt name",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "symbol-placement": "line",
        "text-letter-spacing": 0.1,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.667
      },
      "paint": {
        "text-halo-width": 0.66700000000001,
        "text-halo-color": "#ffffff",
        "text-color": "#666666"
      },
      "id": "Road/label/Minor",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "symbol-placement": "line",
        "text-letter-spacing": 0.1,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.667
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-color": "#ffffff",
        "text-halo-width": 0.667
      },
      "id": "Road/label/Local",
      "minzoom": 15,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        6
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "symbol-placement": "line",
        "text-letter-spacing": 0.05,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 9.3329999999997
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-color": "#FDFDFD",
        "text-halo-width": 0.667
      },
      "id": "Road/label/Pedestrian",
      "minzoom": 16,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        31
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle white black/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle white black",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        32
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle white black (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle white black (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        15
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Secondary Hwy red white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Secondary Hwy red white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        16
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Secondary Hwy red white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Secondary Hwy red white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        23
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/U-shaped yellow black/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/U-shaped yellow black",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        24
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/U-shaped yellow black (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/U-shaped yellow black (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        25
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/U-shaped red white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/U-shaped red white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        26
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/U-shaped red white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/U-shaped red white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        27
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/U-shaped blue white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/U-shaped blue white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        28
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/U-shaped blue white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/U-shaped blue white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        29
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/V-shaped white black/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/V-shaped white black",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        30
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/V-shaped white black (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/V-shaped white black (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        17
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/U-shaped white black/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/U-shaped white black",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        18
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/U-shaped white black (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/U-shaped white black (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        19
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/U-shaped white green/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/U-shaped white green",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        20
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/U-shaped white green (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/U-shaped white green (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        21
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/U-shaped green leaf/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/U-shaped green leaf",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        22
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/U-shaped green leaf (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/U-shaped green leaf (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        37
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle yellow black/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle yellow black",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        38
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle yellow black (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle yellow black (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        35
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle red white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle red white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        36
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle red white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle red white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        33
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle blue white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle blue white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        34
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle blue white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle blue white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        39
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle green white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle green white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        40
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle green white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle green white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        41
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle green yellow/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle green yellow",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        42
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle green yellow (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle green yellow (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        43
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Pentagon inverse white black/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Pentagon inverse white black",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        44
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Pentagon inverse white black (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Pentagon inverse white black (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        45
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Pentagon white black/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Pentagon white black",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        46
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Pentagon white black (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Pentagon white black (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        49
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Pentagon yellow black/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Pentagon yellow black",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        50
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Pentagon yellow black (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Pentagon yellow black (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        51
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Pentagon green white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Pentagon green white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        52
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Pentagon green white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Pentagon green white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        53
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Pentagon green yellow/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Pentagon green yellow",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        54
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Pentagon green yellow (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Pentagon green yellow (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        47
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Pentagon blue white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Pentagon blue white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        48
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Pentagon blue white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Pentagon blue white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        55
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Hexagon white black/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Hexagon white black",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        56
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Hexagon white black (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Hexagon white black (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        57
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Hexagon blue white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Hexagon blue white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        58
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Hexagon blue white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Hexagon blue white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        59
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Hexagon red white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Hexagon red white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        60
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Hexagon red white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Hexagon red white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        61
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Hexagon green white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Hexagon green white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        62
      ],
      "source": "esri",
      "layout": {
        "icon-image": "Road/Hexagon green white (Alt)/{_len}",
        "text-field": "{_name}",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1,
        "text-offset": [
          0,
          0.3
        ],
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-rotation-alignment": "viewport",
        "text-letter-spacing": 0.03,
        "text-optional": true,
        "text-size": 8.667
      },
      "paint": {
        "text-color": "#FDFDFD"
      },
      "id": "Road/label/Hexagon green white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        63
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Hexagon orange black/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Hexagon orange black",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        64
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Hexagon orange black (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Hexagon orange black (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        65
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle hexagon blue white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle hexagon blue white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        66
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle hexagon blue white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle hexagon blue white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        67
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle hexagon red white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle hexagon red white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        68
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle hexagon red white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle hexagon red white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        69
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle hexagon green white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle hexagon green white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        70
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle hexagon green white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle hexagon green white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        71
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle hexagon brown white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle hexagon brown white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        72
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Rectangle hexagon brown white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Rectangle hexagon brown white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        73
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Octagon green white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Octagon green white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        74
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Octagon green white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Octagon green white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        9
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Shield white black/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Shield white black",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        10
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Shield white black (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Shield white black (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        13
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Secondary Hwy green white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Secondary Hwy green white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        14
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Secondary Hwy green white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Secondary Hwy green white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        11
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Secondary Hwy white black/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Secondary Hwy white black",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        12
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Secondary Hwy white black (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Secondary Hwy white black (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        7
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Shield blue white/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Shield blue white",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        8
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Road/Shield blue white (Alt)/{_len}",
        "symbol-placement": "line",
        "text-max-width": 8,
        "icon-rotation-alignment": "viewport",
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name}",
        "text-padding": 50,
        "text-offset": [
          0,
          0.3
        ],
        "text-size": 9.333,
        "text-rotation-alignment": "viewport"
      },
      "paint": {
        "text-color": "#4c4c4c"
      },
      "id": "Road/label/Shield blue white (Alt)",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-field": "{_name_global}",
        "text-letter-spacing": 0.1,
        "text-padding": 50,
        "text-size": 10.667
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-width": 0.667,
        "text-halo-color": "#ffffff"
      },
      "id": "Road tunnel/label/Freeway Motorway",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road tunnel/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "symbol-placement": "line",
        "text-letter-spacing": 0.1,
        "text-padding": 50,
        "text-size": 10.667
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-width": 0.667,
        "text-halo-color": "#ffffff"
      },
      "id": "Road tunnel/label/Freeway Motorway, alt name",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road tunnel/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "symbol-placement": "line",
        "text-letter-spacing": 0.1,
        "text-padding": 50,
        "text-size": 10.667
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-width": 0.667,
        "text-halo-color": "#ffffff"
      },
      "id": "Road tunnel/label/Major",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road tunnel/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "symbol-placement": "line",
        "text-letter-spacing": 0.1,
        "text-padding": 50,
        "text-size": 10.667
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-width": 0.667,
        "text-halo-color": "#ffffff"
      },
      "id": "Road tunnel/label/Major, alt name",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road tunnel/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "symbol-placement": "line",
        "text-letter-spacing": 0.1,
        "text-padding": 50,
        "text-size": 10.667
      },
      "paint": {
        "text-halo-width": 0.66700000000001,
        "text-halo-color": "#ffffff",
        "text-color": "#666666"
      },
      "id": "Road tunnel/label/Minor",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Road tunnel/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "symbol-placement": "line",
        "text-letter-spacing": 0.1,
        "text-padding": 50,
        "text-size": 10.667
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-width": 0.667,
        "text-halo-color": "#ffffff"
      },
      "id": "Road tunnel/label/Local, service, 4WD",
      "minzoom": 15,
      "type": "symbol",
      "source-layer": "Road tunnel/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        10
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "symbol-placement": "line",
        "text-letter-spacing": 0.05,
        "text-padding": 50,
        "text-size": 9.3329999999997
      },
      "paint": {
        "text-color": "#666666",
        "text-halo-width": 0.667,
        "text-halo-color": "#ffffff"
      },
      "id": "Road tunnel/label/Pedestrian",
      "minzoom": 16,
      "type": "symbol",
      "source-layer": "Road tunnel/label"
    },
    {
      "source": "esri",
      "source-layer": "Openspace or forest/label",
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#e6ede6",
        "text-color": "#8ca18c"
      },
      "id": "Openspace or forest/label/Default",
      "minzoom": 14,
      "type": "symbol",
      "layout": {
        "symbol-avoid-edges": false,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.05,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10,
        "text-padding": 25
      }
    },
    {
      "source": "esri",
      "source-layer": "Park or farming/label",
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#e6ede6",
        "text-color": "#8ca18c"
      },
      "id": "Park or farming/label/Default",
      "minzoom": 14,
      "type": "symbol",
      "layout": {
        "symbol-avoid-edges": false,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.05,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10,
        "text-padding": 25
      }
    },
    {
      "source": "esri",
      "source-layer": "Zoo/label",
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#e6ede6",
        "text-color": "#8ca18c"
      },
      "id": "Zoo/label/Default",
      "minzoom": 14,
      "type": "symbol",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.05,
        "text-padding": 1,
        "text-size": 10
      }
    },
    {
      "source": "esri",
      "source-layer": "Airport/label",
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#efefef",
        "text-color": "#969696"
      },
      "id": "Airport/label/Airport property",
      "minzoom": 12,
      "type": "symbol",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.05,
        "text-allow-overlap": false,
        "text-size": 10.667
      }
    },
    {
      "source": "esri",
      "source-layer": "Admin1 forest or park/label",
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#e6ede6",
        "text-color": "#8ca18c"
      },
      "id": "Admin1 forest or park/label/Default",
      "minzoom": 14,
      "type": "symbol",
      "layout": {
        "symbol-avoid-edges": false,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.05,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10,
        "text-padding": 25
      }
    },
    {
      "source": "esri",
      "source-layer": "Admin0 forest or park/label",
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#e6ede6",
        "text-color": "#8ca18c"
      },
      "id": "Admin0 forest or park/label/Default",
      "minzoom": 14,
      "type": "symbol",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.05,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10,
        "text-padding": 25
      }
    },
    {
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.08,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 10,
        "text-padding": 1
      },
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#F5F2DC",
        "text-color": "#5C7533"
      },
      "id": "Point of interest/Park",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Point of interest"
    },
    {
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-allow-overlap": false,
        "text-size": 12
      },
      "paint": {
        "text-color": "#9c9c9c",
        "text-halo-width": 0.933,
        "text-halo-color": "#efefef"
      },
      "id": "Admin2 area/label/small",
      "minzoom": 10,
      "type": "symbol",
      "source-layer": "Admin2 area/label",
      "maxzoom": 11
    },
    {
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-allow-overlap": false,
        "text-size": 13.333
      },
      "paint": {
        "text-color": "#9c9c9c",
        "text-halo-width": 0.933,
        "text-halo-color": "#efefef"
      },
      "id": "Admin2 area/label/large",
      "minzoom": 10,
      "type": "symbol",
      "source-layer": "Admin2 area/label",
      "maxzoom": 11
    },
    {
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-transform": "uppercase",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.1,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 9.33,
        "text-padding": 1
      },
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#efefef",
        "text-color": "#a5a5a5"
      },
      "id": "Admin1 area/label/x small",
      "minzoom": 7,
      "type": "symbol",
      "source-layer": "Admin1 area/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-transform": "uppercase",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.1,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.667,
        "text-padding": 1
      },
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#efefef",
        "text-color": "#a5a5a5"
      },
      "id": "Admin1 area/label/small",
      "minzoom": 7,
      "type": "symbol",
      "source-layer": "Admin1 area/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-transform": "uppercase",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.1,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 12,
        "text-padding": 1
      },
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#efefef",
        "text-color": "#a5a5a5"
      },
      "id": "Admin1 area/label/medium",
      "minzoom": 7,
      "type": "symbol",
      "source-layer": "Admin1 area/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-transform": "uppercase",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.1,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 13.333,
        "text-padding": 1
      },
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#efefef",
        "text-color": "#a5a5a5"
      },
      "id": "Admin1 area/label/large",
      "minzoom": 7,
      "type": "symbol",
      "source-layer": "Admin1 area/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-transform": "uppercase",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.1,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 14.667,
        "text-padding": 1
      },
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#efefef",
        "text-color": "#a5a5a5"
      },
      "id": "Admin1 area/label/x large",
      "minzoom": 7,
      "type": "symbol",
      "source-layer": "Admin1 area/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-transform": "uppercase",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.1,
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 16,
        "text-padding": 1
      },
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#efefef",
        "text-color": "#a5a5a5"
      },
      "id": "Admin1 area/label/2x large",
      "minzoom": 6,
      "type": "symbol",
      "source-layer": "Admin1 area/label"
    },
    {
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.15,
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              3,
              10
            ],
            [
              5,
              14
            ],
            [
              8,
              20
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#efefef",
        "text-color": "#828282"
      },
      "id": "Admin0 point/x small",
      "minzoom": 5,
      "type": "symbol",
      "source-layer": "Admin0 point",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.15,
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              3,
              10
            ],
            [
              5,
              14
            ],
            [
              8,
              20
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#efefef",
        "text-color": "#828282"
      },
      "id": "Admin0 point/small",
      "minzoom": 4,
      "type": "symbol",
      "source-layer": "Admin0 point",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.2,
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              3,
              10
            ],
            [
              5,
              14
            ],
            [
              8,
              20
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#efefef",
        "text-color": "#828282"
      },
      "id": "Admin0 point/medium",
      "minzoom": 2,
      "type": "symbol",
      "source-layer": "Admin0 point",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.2,
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              3,
              10
            ],
            [
              5,
              14
            ],
            [
              8,
              20
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#efefef",
        "text-color": "#828282"
      },
      "id": "Admin0 point/large",
      "minzoom": 2,
      "type": "symbol",
      "source-layer": "Admin0 point",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.2,
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              3,
              10
            ],
            [
              5,
              14
            ],
            [
              8,
              20
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#efefef",
        "text-color": "#828282"
      },
      "id": "Admin0 point/x large",
      "minzoom": 2,
      "type": "symbol",
      "source-layer": "Admin0 point",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.2,
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              3,
              10
            ],
            [
              5,
              14
            ],
            [
              8,
              20
            ]
          ]
        },
        "text-transform": "uppercase"
      },
      "paint": {
        "text-halo-width": 0.93,
        "text-halo-color": "#efefef",
        "text-color": "#828282"
      },
      "id": "Admin0 point/2x large",
      "minzoom": 1,
      "type": "symbol",
      "source-layer": "Admin0 point",
      "maxzoom": 10
    },
    {
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "Neighborhood",
        "icon-allow-overlap": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-padding": 1,
        "text-anchor": "bottom-left",
        "icon-padding": 1,
        "text-size": 10
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "Neighborhood",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "Neighborhood",
      "maxzoom": 17
    },
    {
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-letter-spacing": 0.1,
        "text-font": [
          "Arial Regular"
        ],
        "text-anchor": "center",
        "text-size": 10,
        "text-padding": 1
      },
      "paint": {
        "text-halo-width": 1.3,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City large scale/town small",
      "minzoom": 14,
      "type": "symbol",
      "source-layer": "City large scale",
      "maxzoom": 17
    },
    {
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 10.667
      },
      "paint": {
        "text-halo-width": 1.3,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City large scale/town large",
      "minzoom": 10,
      "type": "symbol",
      "source-layer": "City large scale",
      "maxzoom": 17
    },
    {
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 12
      },
      "paint": {
        "text-halo-width": 1.3,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City large scale/small",
      "minzoom": 10,
      "type": "symbol",
      "source-layer": "City large scale",
      "maxzoom": 17
    },
    {
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-padding": 1,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 12
      },
      "paint": {
        "text-halo-width": 1.3,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City large scale/medium",
      "minzoom": 10,
      "type": "symbol",
      "source-layer": "City large scale",
      "maxzoom": 17
    },
    {
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 12,
        "text-padding": 1
      },
      "paint": {
        "text-halo-width": 1.3,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City large scale/large",
      "minzoom": 10,
      "type": "symbol",
      "source-layer": "City large scale",
      "maxzoom": 17
    },
    {
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "text-field": "{_name_global}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.1,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 13.3333,
        "text-padding": 1
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City large scale/x large",
      "minzoom": 10,
      "type": "symbol",
      "source-layer": "City large scale",
      "maxzoom": 17
    },
    {
      "filter": [
        "==",
        "_symbol",
        17
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/town small non capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1,
        "text-letter-spacing": 0.05,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 10,
        "icon-padding": 1
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/town small non capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        15
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/town large non capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1,
        "text-letter-spacing": 0.05,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 10.667,
        "icon-padding": 1
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/town large non capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        12
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/small non capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1,
        "text-letter-spacing": 0.05,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 10.667,
        "icon-padding": 1
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/small non capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        9
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/medium non capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.05,
        "text-padding": 1,
        "text-anchor": "center",
        "icon-padding": 1,
        "text-size": 10.667
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/medium non capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/large non capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.05,
        "text-padding": 1,
        "text-anchor": "center",
        "icon-padding": 1,
        "text-size": 10.667
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/large non capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/x large non capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.05,
        "text-padding": 1,
        "text-anchor": "center",
        "icon-padding": 1,
        "text-size": 12
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/x large non capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        18
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/other capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1,
        "text-letter-spacing": 0.05,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 10,
        "icon-padding": 1
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/other capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        14
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/town large other capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1,
        "text-letter-spacing": 0.05,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 10.667,
        "icon-padding": 1
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/town large other capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        11
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/small other capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1,
        "text-letter-spacing": 0.05,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 10.667,
        "icon-padding": 1
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/small other capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/medium other capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.05,
        "text-padding": 1,
        "text-anchor": "center",
        "icon-padding": 1,
        "text-size": 10.667
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/medium other capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/large other capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.05,
        "text-padding": 1,
        "text-anchor": "center",
        "icon-padding": 1,
        "text-size": 10.667
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/large other capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/x large admin2 capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.05,
        "text-padding": 1,
        "text-anchor": "center",
        "icon-padding": 1,
        "text-size": 12
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/x large admin2 capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/x large admin1 capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.05,
        "text-padding": 1,
        "text-anchor": "center",
        "icon-padding": 1,
        "text-size": 12
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/x large admin1 capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        16
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/town small admin0 capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1,
        "text-letter-spacing": 0.05,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 10,
        "icon-padding": 1
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/town small admin0 capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        13
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/town large admin0 capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1,
        "text-letter-spacing": 0.05,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 10.667,
        "icon-padding": 1
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/town large admin0 capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        10
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/small admin0 capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1,
        "text-letter-spacing": 0.05,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 10.667,
        "icon-padding": 1
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/small admin0 capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/medium admin0 capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.05,
        "text-padding": 1,
        "text-anchor": "center",
        "icon-padding": 1,
        "text-size": 10.667
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/medium admin0 capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/large admin0 capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.05,
        "text-padding": 1,
        "text-anchor": "center",
        "icon-padding": 1,
        "text-size": 10.667
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/large admin0 capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-image": "City small scale/x large admin0 capital",
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-allow-overlap": false,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.05,
        "text-padding": 1,
        "text-anchor": "center",
        "icon-padding": 1,
        "text-size": 12
      },
      "paint": {
        "text-halo-width": 1.33,
        "text-halo-color": "#efefef",
        "text-color": "#323232"
      },
      "id": "City small scale/x large admin0 capital",
      "type": "symbol",
      "source-layer": "City small scale",
      "maxzoom": 10
    },
    {
      "source": "esri",
      "layout": {
        "symbol-avoid-edges": true,
        "icon-allow-overlap": true,
        "text-field": "{_name}",
        "text-max-width": 8,
        "text-font": [
          "Arial Regular"
        ],
        "text-letter-spacing": 0.05,
        "text-allow-overlap": false,
        "text-anchor": "center",
        "text-size": 12,
        "text-padding": 1
      },
      "paint": {
        "text-halo-width": 1.333,
        "text-halo-color": "#efefef",
        "text-color": "#828282"
      },
      "id": "Continent",
      "maxzoom": 1,
      "source-layer": "Continent",
      "type": "symbol"
    }
  ],
  "sources": {
    "esri": {
      "url": "https://basemaps.arcgis.com/b2/arcgis/rest/services/World_Basemap/VectorTileServer",
      "type": "vector"
    }
  },
  "glyphs": "https://www.arcgis.com/sharing/rest/content/items/0e02e6f86d02455091796eaae811d9b5/resources/styles/../fonts/{fontstack}/{range}.pbf",
  "sprite": "https://www.arcgis.com/sharing/rest/content/items/0e02e6f86d02455091796eaae811d9b5/resources/styles/../sprites/sprite",
  "version": 8
};
