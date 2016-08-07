export default {
  "glyphs": "http://www.arcgis.com/sharing/rest/content/items/850db44b9eb845d3bd42b19e8aa7a024/resources/styles/../fonts/{fontstack}/{range}.pbf",
  "version": 8,
  "sources": {
    "esri": {
      "type": "vector",
      "url": "https://basemaps.arcgis.com/b2/arcgis/rest/services/World_Basemap/VectorTileServer"
    }
  },
  "layers": [
    {
      "paint": {
        "background-color": "#222326"
      },
      "type": "background",
      "id": "background"
    },
    {
      "minzoom": 0,
      "source": "esri",
      "id": "Land",
      "source-layer": "Land",
      "type": "fill",
      "paint": {
        "fill-color": "#474648"
      },
      "layout": {}
    },
    {
      "minzoom": 5,
      "source": "esri",
      "id": "Urban area",
      "source-layer": "Urban area",
      "type": "fill",
      "paint": {
        "fill-color": "#4e4d4f"
      },
      "maxzoom": 12,
      "layout": {}
    },
    {
      "minzoom": 12,
      "source": "esri",
      "id": "Openspace or forest",
      "source-layer": "Openspace or forest",
      "type": "fill",
      "paint": {
        "fill-color": "#494b4a"
      },
      "layout": {}
    },
    {
      "paint": {
        "fill-color": "#494b4a"
      },
      "source": "esri",
      "minzoom": 9,
      "id": "Admin0 forest or park",
      "source-layer": "Admin0 forest or park",
      "layout": {},
      "type": "fill"
    },
    {
      "minzoom": 9,
      "source": "esri",
      "id": "Admin1 forest or park",
      "source-layer": "Admin1 forest or park",
      "type": "fill",
      "paint": {
        "fill-color": "#494b4a"
      },
      "layout": {}
    },
    {
      "minzoom": 9,
      "source": "esri",
      "id": "Airport/Airport property",
      "source-layer": "Airport",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "type": "fill",
      "paint": {
        "fill-color": "#424143",
        "fill-outline-color": "#424143"
      },
      "layout": {}
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Airport/Airport runway",
      "source-layer": "Airport",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "type": "fill",
      "paint": {
        "fill-color": "#4a494b"
      },
      "layout": {}
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Park or farming",
      "source-layer": "Park or farming",
      "type": "fill",
      "paint": {
        "fill-color": "#494b4a"
      },
      "layout": {}
    },
    {
      "minzoom": 7,
      "source": "esri",
      "id": "Water area large scale/Lake or river",
      "source-layer": "Water area large scale",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "type": "fill",
      "paint": {
        "fill-color": "#222326"
      },
      "maxzoom": 11,
      "layout": {}
    },
    {
      "minzoom": 7,
      "source": "esri",
      "id": "Water area large scale/Lake intermittent",
      "source-layer": "Water area large scale",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "type": "fill",
      "paint": {
        "fill-pattern": "Water area large scale/Lake intermittent"
      },
      "maxzoom": 11,
      "layout": {}
    },
    {
      "minzoom": 5,
      "source": "esri",
      "id": "Water area medium scale/Lake or river",
      "source-layer": "Water area medium scale",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "type": "fill",
      "paint": {
        "fill-color": "#222326"
      },
      "maxzoom": 7,
      "layout": {}
    },
    {
      "minzoom": 5,
      "source": "esri",
      "id": "Water area medium scale/Lake intermittent",
      "source-layer": "Water area medium scale",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "type": "fill",
      "paint": {
        "fill-pattern": "Water area medium scale/Lake intermittent"
      },
      "maxzoom": 7,
      "layout": {}
    },
    {
      "minzoom": 1,
      "source": "esri",
      "id": "Water area small scale",
      "source-layer": "Water area small scale",
      "type": "fill",
      "paint": {
        "fill-color": "#222326",
        "fill-outline-color": "#222326"
      },
      "maxzoom": 5,
      "layout": {}
    },
    {
      "minzoom": 15,
      "source": "esri",
      "id": "Water area/Dam or weir",
      "source-layer": "Water area",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "type": "fill",
      "paint": {
        "fill-color": "#222426",
        "fill-outline-color": "#222426"
      },
      "layout": {}
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Water area/Lake, river or bay",
      "source-layer": "Water area",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "type": "fill",
      "paint": {
        "fill-color": "#222426",
        "fill-outline-color": "#222426"
      },
      "layout": {}
    },
    {
      "minzoom": 10,
      "source": "esri",
      "id": "Water area/Lake or river intermittent",
      "source-layer": "Water area",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "type": "fill",
      "paint": {
        "fill-pattern": "Water area/Lake or river intermittent"
      },
      "layout": {}
    },
    {
      "minzoom": 5,
      "source": "esri",
      "id": "Water line small scale",
      "source-layer": "Water line small scale",
      "type": "line",
      "paint": {
        "line-color": "#222426",
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
        }
      },
      "maxzoom": 5,
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 5,
      "source": "esri",
      "id": "Water line medium scale",
      "source-layer": "Water line medium scale",
      "type": "line",
      "paint": {
        "line-color": "#222426",
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
        }
      },
      "maxzoom": 7,
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 7,
      "source": "esri",
      "id": "Water line large scale/Stream river canal or ditch",
      "source-layer": "Water line large scale",
      "filter": [
        "in",
        "_symbol",
        0,
        2,
        3
      ],
      "type": "line",
      "paint": {
        "line-color": "#222426",
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
        }
      },
      "maxzoom": 11,
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "minzoom": 10,
      "source": "esri",
      "id": "Water line/Stream river canal or ditch",
      "source-layer": "Water line",
      "filter": [
        "in",
        "_symbol",
        0,
        2
      ],
      "type": "line",
      "paint": {
        "line-color": "#222426",
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
        }
      },
      "layout": {
        "line-cap": "round"
      }
    },
    {
      "minzoom": 10,
      "source": "esri",
      "id": "Water line/Stream or river intermittent",
      "source-layer": "Water line",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "type": "line",
      "paint": {
        "line-color": "#2d2c2e",
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
        "line-dasharray": [
          8,
          3
        ]
      },
      "layout": {}
    },
    {
      "minzoom": 17,
      "source": "esri",
      "id": "Special area of interest/Bike, walk or pedestrian",
      "source-layer": "Special area of interest",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "type": "fill",
      "paint": {
        "fill-color": "#474648"
      },
      "layout": {}
    },
    {
      "minzoom": 15,
      "source": "esri",
      "id": "Building",
      "source-layer": "Building",
      "type": "fill",
      "paint": {
        "fill-color": "#4e4d4f",
        "fill-outline-color": "#474648"
      },
      "layout": {}
    },
    {
      "minzoom": 5,
      "source": "esri",
      "id": "Marine area/1",
      "source-layer": "Marine area",
      "type": "fill",
      "paint": {
        "fill-color": "#222326"
      },
      "layout": {}
    },
    {
      "minzoom": 16,
      "source": "esri",
      "id": "Boundary line/Disputed admin5",
      "source-layer": "Boundary line",
      "filter": [
        "==",
        "_symbol",
        111
      ],
      "type": "line",
      "paint": {
        "line-color": "#49484a",
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
        "line-dasharray": [
          3,
          2
        ]
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 16,
      "source": "esri",
      "id": "Boundary line/Disputed admin4",
      "source-layer": "Boundary line",
      "filter": [
        "==",
        "_symbol",
        10
      ],
      "type": "line",
      "paint": {
        "line-color": "#49484a",
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
        "line-dasharray": [
          3,
          2
        ]
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 16,
      "source": "esri",
      "id": "Boundary line/Disputed admin3",
      "source-layer": "Boundary line",
      "filter": [
        "==",
        "_symbol",
        9
      ],
      "type": "line",
      "paint": {
        "line-color": "#49484a",
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
        "line-dasharray": [
          4,
          2
        ]
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 10,
      "source": "esri",
      "id": "Boundary line/Disputed admin2",
      "source-layer": "Boundary line",
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "type": "line",
      "paint": {
        "line-color": "#5b5a5c",
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
        "line-dasharray": [
          4,
          2
        ]
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "paint": {
        "line-color": "#5b5a5c",
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
        "line-dasharray": [
          4,
          2
        ]
      },
      "source": "esri",
      "minzoom": 4,
      "id": "Boundary line/Disputed admin1",
      "source-layer": "Boundary line",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 1,
      "source": "esri",
      "id": "Boundary line/Disputed admin0",
      "source-layer": "Boundary line",
      "filter": [
        "!in",
        "DisputeID",
        80,
        0
      ],
      "type": "line",
      "paint": {
        "line-color": "#5b5a5c",
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
        "line-dasharray": [
          6,
          2
        ]
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 16,
      "source": "esri",
      "id": "Boundary line/Admin5",
      "source-layer": "Boundary line",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "type": "line",
      "paint": {
        "line-color": "#9C9C9C",
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
        "line-dasharray": [
          4,
          2
        ]
      },
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "minzoom": 16,
      "source": "esri",
      "id": "Boundary line/Admin4",
      "source-layer": "Boundary line",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "type": "line",
      "paint": {
        "line-color": "#9C9C9C",
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
        "line-dasharray": [
          4,
          2
        ]
      },
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "minzoom": 16,
      "source": "esri",
      "id": "Boundary line/Admin3",
      "source-layer": "Boundary line",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "type": "line",
      "paint": {
        "line-color": "#9C9C9C",
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
        "line-dasharray": [
          4,
          2
        ]
      },
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "paint": {
        "line-color": "#3f3e40",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              8,
              1.3333
            ],
            [
              14,
              2.47
            ],
            [
              17,
              2.47
            ]
          ]
        }
      },
      "source": "esri",
      "minzoom": 8,
      "id": "Boundary line/Admin2/1",
      "source-layer": "Boundary line",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "type": "line",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "paint": {
        "line-color": "#3b3a3c",
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
        }
      },
      "source": "esri",
      "minzoom": 6,
      "id": "Boundary line/Admin1/1",
      "source-layer": "Boundary line",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "type": "line",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "minzoom": 1,
      "source": "esri",
      "id": "Boundary line/Admin0/1",
      "source-layer": "Boundary line",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "type": "line",
      "paint": {
        "line-color": "#323133",
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
        }
      },
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "paint": {
        "line-color": "#6e6d6f",
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
        "line-dasharray": [
          5,
          3
        ]
      },
      "source": "esri",
      "minzoom": 8,
      "id": "Boundary line/Admin2/0",
      "source-layer": "Boundary line",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "paint": {
        "line-color": "#6e6d6f",
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
        "line-dasharray": [
          8,
          6
        ]
      },
      "source": "esri",
      "minzoom": 8,
      "id": "Boundary line/Admin1/0",
      "source-layer": "Boundary line",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "type": "line",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "paint": {
        "line-color": "#6e6d6f",
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
        "line-dasharray": [
          12,
          4
        ]
      },
      "source": "esri",
      "minzoom": 8,
      "id": "Boundary line/Admin0/0",
      "source-layer": "Boundary line",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "type": "line",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "paint": {
        "line-color": "#4e4d4f",
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
        }
      },
      "source": "esri",
      "minzoom": 13,
      "id": "Railroad/2",
      "source-layer": "Railroad",
      "layout": {
        "line-join": "round"
      },
      "type": "line"
    },
    {
      "paint": {
        "line-color": "#373638",
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
        }
      },
      "source": "esri",
      "minzoom": 13,
      "id": "Railroad/1",
      "source-layer": "Railroad",
      "layout": {
        "line-join": "round"
      },
      "type": "line"
    },
    {
      "paint": {},
      "source": "esri",
      "minzoom": 13,
      "id": "Railroad/0",
      "source-layer": "Railroad",
      "layout": {
        "icon-image": "Railroad/0",
        "icon-allow-overlap": true,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "icon-padding": 1
      },
      "type": "symbol"
    },
    {
      "minzoom": 15,
      "source": "esri",
      "id": "Trail or path",
      "source-layer": "Trail or path",
      "type": "line",
      "paint": {
        "line-color": "#5a595b",
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
        }
      },
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Ferry/Rail ferry/2",
      "source-layer": "Ferry",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "type": "line",
      "paint": {
        "line-color": "#cfcfd4",
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
        }
      },
      "layout": {
        "line-join": "round",
        "visibility": "none"
      }
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Ferry/Rail ferry/1",
      "source-layer": "Ferry",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "type": "line",
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
              1.33
            ],
            [
              17,
              1.33
            ]
          ]
        }
      },
      "layout": {
        "line-join": "round",
        "visibility": "none"
      }
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Ferry/Ferry",
      "source-layer": "Ferry",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "type": "line",
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
              1.46667
            ],
            [
              17,
              1.46667
            ]
          ]
        },
        "line-dasharray": [
          6.06061,
          3.63636
        ]
      },
      "layout": {
        "line-join": "round",
        "visibility": "none"
      }
    },
    {
      "paint": {
        "line-color": "#414042",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              2
            ],
            [
              17,
              4
            ]
          ]
        }
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Road/4WD/1",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        10
      ],
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "paint": {
        "line-color": "#414042",
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
        }
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Road/Service/1",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "paint": {
        "line-color": "#414042",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              4.47
            ],
            [
              17,
              8.47
            ]
          ]
        }
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Road/Local/1",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "paint": {
        "line-color": "#59585a",
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
        }
      },
      "source": "esri",
      "minzoom": 12,
      "id": "Road/4WD/0",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        10
      ],
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "paint": {
        "line-color": "#59585a",
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
        }
      },
      "source": "esri",
      "minzoom": 12,
      "id": "Road/Service/0",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "paint": {
        "line-color": "#59585a",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              0.63
            ],
            [
              14,
              2.47
            ],
            [
              17,
              4.47
            ]
          ]
        }
      },
      "source": "esri",
      "minzoom": 12,
      "id": "Road/Local/0",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "type": "line",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "paint": {
        "line-color": "#414042",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              13,
              1.5
            ],
            [
              14,
              4.47
            ],
            [
              17,
              8.47
            ]
          ]
        }
      },
      "source": "esri",
      "minzoom": 13,
      "id": "Road/Minor/1",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "paint": {
        "line-color": "#414042",
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
        }
      },
      "source": "esri",
      "minzoom": 13,
      "id": "Road/Minor, ramp or traffic circle/1",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "paint": {
        "line-color": "#414042",
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
        }
      },
      "source": "esri",
      "minzoom": 13,
      "id": "Road/Major/1",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "paint": {
        "line-color": "#414042",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              13,
              1.5
            ],
            [
              14,
              4.47
            ],
            [
              17,
              7.47
            ]
          ]
        }
      },
      "source": "esri",
      "minzoom": 13,
      "id": "Road/Major, ramp or traffic circle/1",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "paint": {
        "line-color": "#5d5c5e",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              11,
              0.75
            ],
            [
              14,
              2.47
            ],
            [
              17,
              4.47
            ]
          ]
        }
      },
      "source": "esri",
      "minzoom": 11,
      "id": "Road/Minor/0",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "type": "line",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "paint": {
        "line-color": "#5d5c5e",
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
        }
      },
      "source": "esri",
      "minzoom": 10,
      "id": "Road/Major/0",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "type": "line",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "minzoom": 9,
      "source": "esri",
      "id": "Road/Highway/1",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "type": "line",
      "paint": {
        "line-color": "#414042",
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
        }
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "paint": {
        "line-color": "#414042",
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
        }
      },
      "source": "esri",
      "minzoom": 9,
      "id": "Road/Freeway Motorway/1",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "paint": {
        "line-color": "#414042",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1.5
            ],
            [
              14,
              4.47
            ],
            [
              17,
              8.47
            ]
          ]
        }
      },
      "source": "esri",
      "minzoom": 11,
      "id": "Road/Freeway Motorway, ramp or traffic circle/1",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 8,
      "source": "esri",
      "id": "Road/Highway/0",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "type": "line",
      "paint": {
        "line-color": "#5f5e60",
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
        }
      },
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "paint": {
        "line-color": "#5f5e60",
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
        }
      },
      "source": "esri",
      "minzoom": 8,
      "id": "Road/Freeway Motorway/0",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "type": "line",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "paint": {
        "line-color": "#5d5c5e",
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
        }
      },
      "source": "esri",
      "minzoom": 11,
      "id": "Road/Minor, ramp or traffic circle/0",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "type": "line",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "paint": {
        "line-color": "#5d5c5e",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              10,
              0.75
            ],
            [
              14,
              2.47
            ],
            [
              17,
              4.47
            ]
          ]
        }
      },
      "source": "esri",
      "minzoom": 10,
      "id": "Road/Major, ramp or traffic circle/0",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "type": "line",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "paint": {
        "line-color": "#5f5e60",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              0.75
            ],
            [
              14,
              2.47
            ],
            [
              17,
              4.47
            ]
          ]
        }
      },
      "source": "esri",
      "minzoom": 8,
      "id": "Road/Freeway Motorway, ramp or traffic circle/0",
      "source-layer": "Road",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "type": "line",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road tunnel/4WD/1",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        10
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#414042",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              2
            ],
            [
              17,
              4
            ]
          ]
        }
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road tunnel/Service/1",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#414042",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              3.33
            ],
            [
              17,
              3.33
            ]
          ]
        }
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road tunnel/Local/1",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#414042",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              14,
              4.47
            ],
            [
              17,
              4.47
            ]
          ]
        }
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road tunnel/4WD/0",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        10
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#ffffff",
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
        }
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road tunnel/Service/0",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#59585a",
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
        }
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Road tunnel/Local/0",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#59585a",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              12,
              1.63
            ],
            [
              14,
              2.47
            ],
            [
              17,
              2.47
            ]
          ]
        }
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 9,
      "source": "esri",
      "id": "Road tunnel/Minor/1",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#414042",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              3.33
            ],
            [
              14,
              4.47
            ],
            [
              17,
              4.47
            ]
          ]
        }
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 9,
      "source": "esri",
      "id": "Road tunnel/Minor, ramp or traffic circle/1",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#414042",
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
        }
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#414042",
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
        }
      },
      "source": "esri",
      "minzoom": 9,
      "id": "Road tunnel/Major/1",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 9,
      "source": "esri",
      "id": "Road tunnel/Major, ramp or traffic circle/1",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#414042",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              3.33
            ],
            [
              14,
              4.47
            ],
            [
              17,
              4.47
            ]
          ]
        }
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 9,
      "source": "esri",
      "id": "Road tunnel/Minor/0",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#5d5c5e",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1.33
            ],
            [
              14,
              2.47
            ],
            [
              17,
              2.47
            ]
          ]
        }
      },
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#5d5c5e",
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
        }
      },
      "source": "esri",
      "minzoom": 9,
      "id": "Road tunnel/Major/0",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "type": "line",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "minzoom": 9,
      "source": "esri",
      "id": "Road tunnel/Freeway Motorway, ramp or traffic circle/1",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#414042",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              3.33
            ],
            [
              14,
              4.47
            ],
            [
              17,
              4.47
            ]
          ]
        }
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 9,
      "source": "esri",
      "id": "Road tunnel/Highway/1",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#414042",
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
        }
      },
      "layout": {
        "line-join": "round"
      }
    },
    {
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#414042",
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
        }
      },
      "source": "esri",
      "minzoom": 9,
      "id": "Road tunnel/Freeway Motorway/1",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "type": "line",
      "layout": {
        "line-join": "round"
      }
    },
    {
      "minzoom": 9,
      "source": "esri",
      "id": "Road tunnel/Highway/0",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#5f5e60",
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
        }
      },
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#5f5e60",
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
        }
      },
      "source": "esri",
      "minzoom": 9,
      "id": "Road tunnel/Freeway Motorway/0",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "type": "line",
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "minzoom": 9,
      "source": "esri",
      "id": "Road tunnel/Minor, ramp or traffic circle/0",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#5d5c5e",
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
        }
      },
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "minzoom": 9,
      "source": "esri",
      "id": "Road tunnel/Major, ramp or traffic circle/0",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#5d5c5e",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1.33
            ],
            [
              14,
              2.47
            ],
            [
              17,
              2.47
            ]
          ]
        }
      },
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "minzoom": 9,
      "source": "esri",
      "id": "Road tunnel/Freeway Motorway, ramp or traffic circle/0",
      "source-layer": "Road tunnel",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "type": "line",
      "paint": {
        "line-opacity": 0.5,
        "line-color": "#5f5e60",
        "line-width": {
          "base": 1.2,
          "stops": [
            [
              9,
              1.33
            ],
            [
              14,
              2.47
            ],
            [
              17,
              2.47
            ]
          ]
        }
      },
      "layout": {
        "line-join": "round",
        "line-cap": "round"
      }
    },
    {
      "paint": {
        "text-color": "#a2a2a6"
      },
      "source": "esri",
      "minzoom": 1,
      "id": "Marine waterbody/label/2x large",
      "source-layer": "Marine waterbody/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 5,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.3,
        "text-field": "{_name}",
        "text-font": [
          "Arial Italic"
        ],
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
      }
    },
    {
      "paint": {
        "text-color": "#a2a2a6"
      },
      "source": "esri",
      "minzoom": 1,
      "id": "Marine waterbody/label/x large",
      "source-layer": "Marine waterbody/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 5,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.2,
        "text-field": "{_name}",
        "text-font": [
          "Arial Italic"
        ],
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
      }
    },
    {
      "paint": {
        "text-color": "#a2a2a6"
      },
      "source": "esri",
      "minzoom": 1,
      "id": "Marine waterbody/label/large",
      "source-layer": "Marine waterbody/label",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 5,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.2,
        "text-field": "{_name}",
        "text-font": [
          "Arial Italic"
        ],
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
      }
    },
    {
      "paint": {
        "text-color": "#a2a2a6"
      },
      "source": "esri",
      "minzoom": 1,
      "id": "Marine waterbody/label/medium",
      "source-layer": "Marine waterbody/label",
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 5,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.15,
        "text-field": "{_name}",
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      }
    },
    {
      "paint": {
        "text-color": "#a2a2a6"
      },
      "source": "esri",
      "minzoom": 1,
      "id": "Marine waterbody/label/small",
      "source-layer": "Marine waterbody/label",
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "text-allow-overlap": false,
        "symbol-avoid-edges": true,
        "text-padding": 1,
        "text-max-width": 5,
        "text-size": 10,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Italic"
        ]
      }
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Water area/label/Dam or weir",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        8
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#a2a2a6"
      },
      "layout": {
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Italic"
        ]
      }
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Marine area/label/Default",
      "source-layer": "Marine area/label",
      "type": "symbol",
      "paint": {
        "text-color": "#a2a2a6"
      },
      "layout": {
        "text-allow-overlap": false,
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10,
        "text-letter-spacing": 0.15,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Italic"
        ],
        "text-padding": 1
      }
    },
    {
      "minzoom": 7,
      "source": "esri",
      "id": "Water area large scale/label/Lake or lake intermittent",
      "source-layer": "Water area large scale/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#969696"
      },
      "maxzoom": 11,
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      }
    },
    {
      "minzoom": 7,
      "source": "esri",
      "id": "Water area large scale/label/River",
      "source-layer": "Water area large scale/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#969696"
      },
      "maxzoom": 11,
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      }
    },
    {
      "minzoom": 5,
      "source": "esri",
      "id": "Water area medium scale/label/Default",
      "source-layer": "Water area medium scale/label",
      "type": "symbol",
      "paint": {
        "text-color": "#969696"
      },
      "maxzoom": 7,
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": false,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10
      }
    },
    {
      "paint": {
        "text-color": "#969696"
      },
      "source": "esri",
      "minzoom": 5,
      "id": "Water area small scale/label/Default",
      "source-layer": "Water area small scale/label",
      "type": "symbol",
      "maxzoom": 5,
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      }
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Water area/label/Small island",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#868587",
        "text-halo-color": "#474648"
      },
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      }
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Water area/label/Bay or inlet",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#969696"
      },
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.15,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      }
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Water area/label/Canal or ditch",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#969696"
      },
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.15,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      }
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Water area/label/Large lake or reservoir",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#969696"
      },
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.15,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      }
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Water area/label/Large river",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#969696"
      },
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.15,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      }
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Water area/label/Large island",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#868587",
        "text-halo-color": "#474648"
      },
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      }
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Water area/label/Small lake or reservoir",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        6
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#969696"
      },
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.15,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      }
    },
    {
      "minzoom": 11,
      "source": "esri",
      "id": "Water area/label/Small river",
      "source-layer": "Water area/label",
      "filter": [
        "==",
        "_label_class",
        7
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#969696"
      },
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.15,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Italic"
        ],
        "text-size": 10
      }
    },
    {
      "paint": {
        "text-color": "#969696"
      },
      "source": "esri",
      "minzoom": 11,
      "id": "Water line large scale/label/Default",
      "source-layer": "Water line large scale/label",
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Italic"
        ],
        "text-offset": [
          0,
          -0.5
        ]
      }
    },
    {
      "paint": {
        "text-color": "#969696"
      },
      "source": "esri",
      "minzoom": 15,
      "id": "Water line/label/Default",
      "source-layer": "Water line/label",
      "layout": {
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Italic"
        ],
        "text-offset": [
          0,
          -0.5
        ]
      },
      "type": "symbol"
    },
    {
      "paint": {
        "text-halo-width": 0.933,
        "text-color": "#666666",
        "text-halo-color": "#FDFDFD"
      },
      "source": "esri",
      "minzoom": 18,
      "id": "Trail or path/label/Default",
      "source-layer": "Trail or path/label",
      "layout": {
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-letter-spacing": 0.05,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Bold"
        ]
      },
      "type": "symbol"
    },
    {
      "paint": {
        "text-halo-width": 0.647,
        "text-color": "#aeadaf",
        "text-halo-color": "#474648"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Road/label/Freeway Motorway",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "type": "symbol",
      "layout": {
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ]
      }
    },
    {
      "paint": {
        "text-halo-width": 0.647,
        "text-color": "#aeadaf",
        "text-halo-color": "#474648"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Road/label/Freeway Motorway, alt name",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "type": "symbol",
      "layout": {
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Highway",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        75
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.647,
        "text-color": "#aeadaf",
        "text-halo-color": "#474648"
      },
      "layout": {
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.09,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ]
      }
    },
    {
      "paint": {
        "text-halo-width": 0.647,
        "text-color": "#aeadaf",
        "text-halo-color": "#474648"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Road/label/Major",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "type": "symbol",
      "layout": {
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ]
      }
    },
    {
      "paint": {
        "text-halo-width": 0.647,
        "text-color": "#aeadaf",
        "text-halo-color": "#474648"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Road/label/Major, alt name",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "type": "symbol",
      "layout": {
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ]
      }
    },
    {
      "paint": {
        "text-halo-width": 0.66,
        "text-color": "#aeadaf",
        "text-halo-color": "#474648"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Road/label/Minor",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "type": "symbol",
      "layout": {
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ]
      }
    },
    {
      "paint": {
        "text-halo-width": 0.647,
        "text-color": "#aeadaf",
        "text-halo-color": "#474648"
      },
      "source": "esri",
      "minzoom": 15,
      "id": "Road/label/Local",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "type": "symbol",
      "layout": {
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ]
      }
    },
    {
      "paint": {
        "text-halo-width": 0.647,
        "text-color": "#aeadaf",
        "text-halo-color": "#474648"
      },
      "source": "esri",
      "minzoom": 16,
      "id": "Road/label/Pedestrian",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        6
      ],
      "type": "symbol",
      "layout": {
        "text-padding": 1,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.3329999999997,
        "text-letter-spacing": 0.05,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle white black",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        31
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle white black/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle white black (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        32
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle white black (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Secondary Hwy red white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        15
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Secondary Hwy red white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Secondary Hwy red white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        16
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Secondary Hwy red white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/U-shaped yellow black",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        23
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/U-shaped yellow black/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/U-shaped yellow black (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        24
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/U-shaped yellow black (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/U-shaped red white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        25
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/U-shaped red white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/U-shaped red white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        26
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/U-shaped red white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/U-shaped blue white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        27
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/U-shaped blue white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/U-shaped blue white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        28
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/U-shaped blue white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/V-shaped white black",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        29
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/V-shaped white black/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/V-shaped white black (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        30
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/V-shaped white black (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/U-shaped white black",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        17
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/U-shaped white black/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/U-shaped white black (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        18
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/U-shaped white black (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/U-shaped white green",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        19
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/U-shaped white green/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/U-shaped white green (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        20
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/U-shaped white green (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/U-shaped green leaf",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        21
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/U-shaped green leaf/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/U-shaped green leaf (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        22
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/U-shaped green leaf (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle yellow black",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        37
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle yellow black/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle yellow black (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        38
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle yellow black (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle red white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        35
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle red white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle red white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        36
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle red white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle blue white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        33
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle blue white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle blue white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        34
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle blue white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle green white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        39
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle green white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle green white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        40
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle green white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle green yellow",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        41
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle green yellow/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle green yellow (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        42
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle green yellow (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Pentagon inverse white black",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        43
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Pentagon inverse white black/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Pentagon inverse white black (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        44
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Pentagon inverse white black (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Pentagon white black",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        45
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Pentagon white black/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Pentagon white black (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        46
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Pentagon white black (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Pentagon yellow black",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        49
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Pentagon yellow black/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Pentagon yellow black (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        50
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Pentagon yellow black (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Pentagon green white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        51
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Pentagon green white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Pentagon green white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        52
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Pentagon green white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Pentagon green yellow",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        53
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Pentagon green yellow/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Pentagon green yellow (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        54
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Pentagon green yellow (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Pentagon blue white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        47
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Pentagon blue white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Pentagon blue white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        48
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Pentagon blue white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Hexagon white black",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        55
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Hexagon white black/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Hexagon white black (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        56
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Hexagon white black (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Hexagon blue white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        57
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Hexagon blue white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Hexagon blue white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        58
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Hexagon blue white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Hexagon red white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        59
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Hexagon red white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Hexagon red white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        60
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Hexagon red white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Hexagon green white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        62
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Hexagon green white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 8.647,
        "text-field": "{_name}",
        "text-optional": true,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.03,
        "text-padding": 1,
        "text-font": [
          "Arial Regular"
        ],
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Hexagon green white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        61
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Hexagon green white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Hexagon orange black",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        63
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Hexagon orange black/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Hexagon orange black (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        64
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Hexagon orange black (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle hexagon blue white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        65
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle hexagon blue white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle hexagon blue white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        66
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle hexagon blue white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle hexagon red white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        67
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle hexagon red white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle hexagon red white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        68
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle hexagon red white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle hexagon green white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        69
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle hexagon green white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle hexagon green white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        70
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle hexagon green white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle hexagon brown white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        71
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle hexagon brown white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Rectangle hexagon brown white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        72
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Rectangle hexagon brown white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Octagon green white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        73
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Octagon green white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Octagon green white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        74
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Octagon green white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Shield white black",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        9
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Shield white black/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Shield white black (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        10
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Shield white black (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Secondary Hwy green white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        13
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Secondary Hwy green white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Secondary Hwy green white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        14
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Secondary Hwy green white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Secondary Hwy white black",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        11
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Secondary Hwy white black/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Secondary Hwy white black (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        12
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Secondary Hwy white black (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Shield blue white",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        7
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Shield blue white/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Road/label/Shield blue white (Alt)",
      "source-layer": "Road/label",
      "filter": [
        "==",
        "_label_class",
        8
      ],
      "type": "symbol",
      "paint": {
        "text-color": "#939294"
      },
      "layout": {
        "icon-image": "Road/Shield blue white (Alt)/{_len}",
        "text-rotation-alignment": "viewport",
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.333,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 50,
        "icon-rotation-alignment": "viewport",
        "text-offset": [
          0,
          0.3
        ]
      }
    },
    {
      "paint": {
        "text-halo-width": 0.647,
        "text-color": "#aeadaf",
        "text-halo-color": "#474648"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Road tunnel/label/Freeway Motorway",
      "source-layer": "Road tunnel/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "type": "symbol",
      "layout": {
        "text-padding": 50,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ]
      }
    },
    {
      "paint": {
        "text-halo-width": 0.647,
        "text-color": "#aeadaf",
        "text-halo-color": "#474648"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Road tunnel/label/Freeway Motorway, alt name",
      "source-layer": "Road tunnel/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "type": "symbol",
      "layout": {
        "text-padding": 50,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ]
      }
    },
    {
      "paint": {
        "text-halo-width": 0.647,
        "text-color": "#aeadaf",
        "text-halo-color": "#474648"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Road tunnel/label/Major",
      "source-layer": "Road tunnel/label",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "type": "symbol",
      "layout": {
        "text-padding": 50,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ]
      }
    },
    {
      "paint": {
        "text-halo-width": 0.647,
        "text-color": "#aeadaf",
        "text-halo-color": "#474648"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Road tunnel/label/Major, alt name",
      "source-layer": "Road tunnel/label",
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "type": "symbol",
      "layout": {
        "text-padding": 50,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ]
      }
    },
    {
      "paint": {
        "text-halo-width": 0.66,
        "text-color": "#aeadaf",
        "text-halo-color": "#474648"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Road tunnel/label/Minor",
      "source-layer": "Road tunnel/label",
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "type": "symbol",
      "layout": {
        "text-padding": 50,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ]
      }
    },
    {
      "paint": {
        "text-halo-width": 0.647,
        "text-color": "#aeadaf",
        "text-halo-color": "#474648"
      },
      "source": "esri",
      "minzoom": 15,
      "id": "Road tunnel/label/Local, service, 4WD",
      "source-layer": "Road tunnel/label",
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "type": "symbol",
      "layout": {
        "text-padding": 50,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ]
      }
    },
    {
      "paint": {
        "text-halo-width": 0.647,
        "text-color": "#aeadaf",
        "text-halo-color": "#474648"
      },
      "source": "esri",
      "minzoom": 16,
      "id": "Road tunnel/label/Pedestrian",
      "source-layer": "Road tunnel/label",
      "filter": [
        "==",
        "_label_class",
        10
      ],
      "type": "symbol",
      "layout": {
        "text-padding": 50,
        "symbol-avoid-edges": true,
        "symbol-placement": "line",
        "text-max-width": 8,
        "text-size": 9.3329999999997,
        "text-letter-spacing": 0.05,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ]
      }
    },
    {
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#808781",
        "text-halo-color": "#464748"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Openspace or forest/label/Default",
      "source-layer": "Openspace or forest/label",
      "layout": {
        "text-allow-overlap": false,
        "symbol-avoid-edges": false,
        "text-max-width": 8,
        "text-size": 10,
        "text-letter-spacing": 0.05,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 25
      },
      "type": "symbol"
    },
    {
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#808781",
        "text-halo-color": "#464748"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Park or farming/label/Default",
      "source-layer": "Park or farming/label",
      "layout": {
        "text-allow-overlap": false,
        "symbol-avoid-edges": false,
        "text-max-width": 8,
        "text-size": 10,
        "text-letter-spacing": 0.05,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 25
      },
      "type": "symbol"
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#808781",
        "text-halo-color": "#464748"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Zoo/label/Default",
      "source-layer": "Zoo/label",
      "layout": {
        "text-allow-overlap": false,
        "symbol-avoid-edges": true,
        "text-padding": 1,
        "text-max-width": 8,
        "text-size": 10,
        "text-letter-spacing": 0.05,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ]
      },
      "type": "symbol"
    },
    {
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#99989a",
        "text-halo-color": "#474648"
      },
      "source": "esri",
      "minzoom": 12,
      "id": "Airport/label/Airport property",
      "source-layer": "Airport/label",
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.05,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 10.647
      },
      "type": "symbol"
    },
    {
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#808781",
        "text-halo-color": "#464748"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Admin1 forest or park/label/Default",
      "source-layer": "Admin1 forest or park/label",
      "layout": {
        "text-allow-overlap": false,
        "symbol-avoid-edges": false,
        "text-max-width": 8,
        "text-size": 10,
        "text-letter-spacing": 0.05,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 25
      },
      "type": "symbol"
    },
    {
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#808781",
        "text-halo-color": "#464748"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "Admin0 forest or park/label/Default",
      "source-layer": "Admin0 forest or park/label",
      "layout": {
        "text-allow-overlap": false,
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10,
        "text-letter-spacing": 0.05,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 25
      },
      "type": "symbol"
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Point of interest/Park",
      "source-layer": "Point of interest",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#808781",
        "text-halo-color": "#464748"
      },
      "layout": {
        "text-allow-overlap": false,
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10,
        "text-letter-spacing": 0.08,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ],
        "text-anchor": "center",
        "text-padding": 1
      }
    },
    {
      "minzoom": 10,
      "source": "esri",
      "id": "Admin2 area/label/small",
      "source-layer": "Admin2 area/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.933,
        "text-color": "#787779",
        "text-halo-color": "#474648"
      },
      "maxzoom": 11,
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 12
      }
    },
    {
      "minzoom": 10,
      "source": "esri",
      "id": "Admin2 area/label/large",
      "source-layer": "Admin2 area/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.933,
        "text-color": "#787779",
        "text-halo-color": "#474648"
      },
      "maxzoom": 11,
      "layout": {
        "text-allow-overlap": false,
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-size": 13.333
      }
    },
    {
      "minzoom": 7,
      "source": "esri",
      "id": "Admin1 area/label/x small",
      "source-layer": "Admin1 area/label",
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#787779",
        "text-halo-color": "#474648"
      },
      "layout": {
        "text-allow-overlap": false,
        "text-transform": "uppercase",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 9.3329999999997,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1
      }
    },
    {
      "minzoom": 7,
      "source": "esri",
      "id": "Admin1 area/label/small",
      "source-layer": "Admin1 area/label",
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#787779",
        "text-halo-color": "#474648"
      },
      "layout": {
        "text-allow-overlap": false,
        "text-transform": "uppercase",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1
      }
    },
    {
      "minzoom": 7,
      "source": "esri",
      "id": "Admin1 area/label/medium",
      "source-layer": "Admin1 area/label",
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#787779",
        "text-halo-color": "#474648"
      },
      "layout": {
        "text-allow-overlap": false,
        "text-transform": "uppercase",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 12,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1
      }
    },
    {
      "minzoom": 7,
      "source": "esri",
      "id": "Admin1 area/label/large",
      "source-layer": "Admin1 area/label",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#787779",
        "text-halo-color": "#474648"
      },
      "layout": {
        "text-allow-overlap": false,
        "text-transform": "uppercase",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 13.333,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1
      }
    },
    {
      "minzoom": 7,
      "source": "esri",
      "id": "Admin1 area/label/x large",
      "source-layer": "Admin1 area/label",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#787779",
        "text-halo-color": "#474648"
      },
      "layout": {
        "text-allow-overlap": false,
        "text-transform": "uppercase",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 14.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1
      }
    },
    {
      "minzoom": 6,
      "source": "esri",
      "id": "Admin1 area/label/2x large",
      "source-layer": "Admin1 area/label",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#787779",
        "text-halo-color": "#474648"
      },
      "layout": {
        "text-allow-overlap": false,
        "text-transform": "uppercase",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 16,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "text-padding": 1
      }
    },
    {
      "minzoom": 5,
      "source": "esri",
      "id": "Admin0 point/x small",
      "source-layer": "Admin0 point",
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#abaaac",
        "text-halo-color": "#474648"
      },
      "maxzoom": 10,
      "layout": {
        "text-allow-overlap": false,
        "text-transform": "uppercase",
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.15,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
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
        }
      }
    },
    {
      "minzoom": 4,
      "source": "esri",
      "id": "Admin0 point/small",
      "source-layer": "Admin0 point",
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#abaaac",
        "text-halo-color": "#474648"
      },
      "maxzoom": 10,
      "layout": {
        "text-allow-overlap": false,
        "text-transform": "uppercase",
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.15,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
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
        }
      }
    },
    {
      "minzoom": 2,
      "source": "esri",
      "id": "Admin0 point/medium",
      "source-layer": "Admin0 point",
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#abaaac",
        "text-halo-color": "#474648"
      },
      "maxzoom": 10,
      "layout": {
        "text-allow-overlap": false,
        "text-transform": "uppercase",
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.2,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
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
        }
      }
    },
    {
      "minzoom": 2,
      "source": "esri",
      "id": "Admin0 point/large",
      "source-layer": "Admin0 point",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#abaaac",
        "text-halo-color": "#474648"
      },
      "maxzoom": 10,
      "layout": {
        "text-allow-overlap": false,
        "text-transform": "uppercase",
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.2,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
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
        }
      }
    },
    {
      "minzoom": 2,
      "source": "esri",
      "id": "Admin0 point/x large",
      "source-layer": "Admin0 point",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#abaaac",
        "text-halo-color": "#474648"
      },
      "maxzoom": 10,
      "layout": {
        "text-allow-overlap": false,
        "text-transform": "uppercase",
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.2,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
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
        }
      }
    },
    {
      "minzoom": 1,
      "source": "esri",
      "id": "Admin0 point/2x large",
      "source-layer": "Admin0 point",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 0.93,
        "text-color": "#abaaac",
        "text-halo-color": "#474648"
      },
      "maxzoom": 10,
      "layout": {
        "text-allow-overlap": false,
        "text-transform": "uppercase",
        "text-padding": 1,
        "text-max-width": 8,
        "symbol-avoid-edges": true,
        "text-letter-spacing": 0.2,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
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
        }
      }
    },
    {
      "minzoom": 14,
      "source": "esri",
      "id": "Neighborhood",
      "source-layer": "Neighborhood",
      "type": "symbol",
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "maxzoom": 17,
      "layout": {
        "icon-image": "Neighborhood",
        "icon-padding": 1,
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10,
        "text-letter-spacing": 0.1,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-allow-overlap": true,
        "text-padding": 1,
        "text-anchor": "bottom-left"
      }
    },
    {
      "paint": {
        "text-halo-width": 1.3,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "minzoom": 14,
      "id": "City large scale/town small",
      "source-layer": "City large scale",
      "filter": [
        "==",
        "_label_class",
        5
      ],
      "type": "symbol",
      "maxzoom": 17,
      "layout": {
        "text-allow-overlap": false,
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ],
        "text-anchor": "center",
        "text-padding": 1
      }
    },
    {
      "minzoom": 10,
      "source": "esri",
      "id": "City large scale/town large",
      "source-layer": "City large scale",
      "filter": [
        "==",
        "_label_class",
        4
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 1.3,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "maxzoom": 17,
      "layout": {
        "text-allow-overlap": false,
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ],
        "text-anchor": "center",
        "text-padding": 1
      }
    },
    {
      "minzoom": 10,
      "source": "esri",
      "id": "City large scale/small",
      "source-layer": "City large scale",
      "filter": [
        "==",
        "_label_class",
        3
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 1.3,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "maxzoom": 17,
      "layout": {
        "text-allow-overlap": false,
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 12,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ],
        "text-anchor": "center",
        "text-padding": 1
      }
    },
    {
      "minzoom": 10,
      "source": "esri",
      "id": "City large scale/medium",
      "source-layer": "City large scale",
      "filter": [
        "==",
        "_label_class",
        2
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 1.3,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "maxzoom": 17,
      "layout": {
        "text-allow-overlap": false,
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 12,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ],
        "text-anchor": "center",
        "text-padding": 1
      }
    },
    {
      "minzoom": 10,
      "source": "esri",
      "id": "City large scale/large",
      "source-layer": "City large scale",
      "filter": [
        "==",
        "_label_class",
        1
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 1.3,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "maxzoom": 17,
      "layout": {
        "text-allow-overlap": false,
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 12,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ],
        "text-anchor": "center",
        "text-padding": 1
      }
    },
    {
      "minzoom": 10,
      "source": "esri",
      "id": "City large scale/x large",
      "source-layer": "City large scale",
      "filter": [
        "==",
        "_label_class",
        0
      ],
      "type": "symbol",
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "maxzoom": 17,
      "layout": {
        "text-allow-overlap": false,
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 13.3333,
        "text-letter-spacing": 0.1,
        "text-field": "{_name_global}",
        "text-font": [
          "Arial Regular"
        ],
        "text-anchor": "center",
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/town small non capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        17
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/town small non capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/town large non capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        15
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/town large non capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/small non capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        12
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/small non capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/medium non capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        9
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/medium non capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/large non capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        6
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/large non capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/x large non capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        3
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/x large non capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 12,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/other capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        18
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/other capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/town large other capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        14
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/town large other capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/small other capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        11
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/small other capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/medium other capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        8
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/medium other capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/large other capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        5
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/large other capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/x large admin2 capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        2
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/x large admin2 capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 12,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/x large admin1 capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        1
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/x large admin1 capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 12,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/town small admin0 capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        16
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/town small admin0 capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/town large admin0 capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        13
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/town large admin0 capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/small admin0 capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        10
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/small admin0 capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/medium admin0 capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        7
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/medium admin0 capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/large admin0 capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        4
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/large admin0 capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 10.647,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.33,
        "text-color": "#dddcde",
        "text-halo-color": "#414042"
      },
      "source": "esri",
      "id": "City small scale/x large admin0 capital",
      "source-layer": "City small scale",
      "filter": [
        "==",
        "_symbol",
        0
      ],
      "type": "symbol",
      "maxzoom": 10,
      "layout": {
        "icon-image": "City small scale/x large admin0 capital",
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 12,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-padding": 1,
        "text-padding": 1
      }
    },
    {
      "paint": {
        "text-halo-width": 1.333,
        "text-color": "#828282",
        "text-halo-color": "#F5F2DC"
      },
      "source": "esri",
      "id": "Continent",
      "source-layer": "Continent",
      "type": "symbol",
      "maxzoom": 1,
      "layout": {
        "text-allow-overlap": false,
        "text-anchor": "center",
        "symbol-avoid-edges": true,
        "text-max-width": 8,
        "text-size": 12,
        "text-letter-spacing": 0.05,
        "text-field": "{_name}",
        "text-font": [
          "Arial Regular"
        ],
        "icon-allow-overlap": true,
        "text-padding": 1
      }
    }
  ],
  "sprite": "http://www.arcgis.com/sharing/rest/content/items/850db44b9eb845d3bd42b19e8aa7a024/resources/styles/../sprites/sprite"
};
