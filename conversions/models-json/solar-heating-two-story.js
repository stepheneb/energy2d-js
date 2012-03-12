var solar_heating_two_story = {
  "model": {
    "timestep": "50.0",
    "measurement_interval": "100",
    "viewupdate_interval": "20",
    "sunny": "true",
    "sun_angle": "1.5707964",
    "solar_power_density": "20000.0",
    "solar_ray_count": "24",
    "solar_ray_speed": "0.0010",
    "photon_emission_interval": "5",
    "convective": "false",
    "background_conductivity": "0.1",
    "thermal_buoyancy": "2.5E-4",
    "buoyancy_approximation": "1",
    "boundary": {
      "temperature_at_border": {
        "upper": "0.0",
        "lower": "0.0",
        "left": "0.0",
        "right": "0.0"
      }
    },
    "structure": {
      "part": [
        {
          "polygon": {
            "count": "4",
            "vertices": "4.75, 8.0, 5.25, 8.0, 5.25, 7.0, 4.75, 7.0"
          },
          "thermal_conductivity": "0.08",
          "specific_heat": "1300.0",
          "density": "25.0",
          "transmission": "0.0",
          "reflection": "1.0",
          "absorption": "1.0",
          "emissivity": "0.0",
          "temperature": "0.0",
          "constant_temperature": "false",
          "color": "22ccff"
        },
        {
          "polygon": {
            "count": "6",
            "vertices": "1.5, 3.5, 5.5, 1.0, 9.5, 3.5, 8.5, 3.5, 5.5, 1.6499996, 2.5, 3.5"
          },
          "thermal_conductivity": "0.0010",
          "specific_heat": "1300.0",
          "density": "25.0",
          "transmission": "0.0",
          "reflection": "0.0",
          "absorption": "1.0",
          "emissivity": "0.0",
          "temperature": "0.0",
          "constant_temperature": "false"
        },
        {
          "rectangle": {
            "x": "-0.099999905",
            "y": "8.0",
            "width": "10.2",
            "height": "2.0"
          },
          "thermal_conductivity": "0.0010",
          "specific_heat": "1300.0",
          "density": "25.0",
          "transmission": "0.0",
          "reflection": "0.0",
          "absorption": "1.0",
          "emissivity": "0.0",
          "temperature": "0.0",
          "constant_temperature": "false",
          "color": "333333",
          "label": "Ground"
        },
        {
          "rectangle": {
            "x": "2.0",
            "y": "7.25",
            "width": "0.5",
            "height": "0.75"
          },
          "thermal_conductivity": "0.0010",
          "specific_heat": "1300.0",
          "density": "25.0",
          "transmission": "0.0",
          "reflection": "0.0",
          "absorption": "1.0",
          "emissivity": "0.0",
          "temperature": "0.0",
          "constant_temperature": "false"
        },
        {
          "rectangle": {
            "x": "2.0",
            "y": "4.75",
            "width": "0.5",
            "height": "1.0"
          },
          "thermal_conductivity": "0.0010",
          "specific_heat": "1300.0",
          "density": "25.0",
          "transmission": "0.0",
          "reflection": "0.0",
          "absorption": "1.0",
          "emissivity": "0.0",
          "temperature": "0.0",
          "constant_temperature": "false"
        },
        {
          "rectangle": {
            "x": "2.0",
            "y": "3.5",
            "width": "0.5",
            "height": "0.25"
          },
          "thermal_conductivity": "0.0010",
          "specific_heat": "1300.0",
          "density": "25.0",
          "transmission": "0.0",
          "reflection": "0.0",
          "absorption": "1.0",
          "emissivity": "0.0",
          "temperature": "0.0",
          "constant_temperature": "false"
        },
        {
          "rectangle": {
            "x": "2.15",
            "y": "5.75",
            "width": "0.2",
            "height": "1.5"
          },
          "thermal_conductivity": "0.0010",
          "specific_heat": "1300.0",
          "density": "25.0",
          "transmission": "1.0",
          "reflection": "0.0",
          "absorption": "0.0",
          "emissivity": "0.0",
          "temperature": "0.0",
          "constant_temperature": "false",
          "color": "ffffff"
        },
        {
          "rectangle": {
            "x": "2.15",
            "y": "3.75",
            "width": "0.2",
            "height": "1.0"
          },
          "thermal_conductivity": "0.0010",
          "specific_heat": "1300.0",
          "density": "25.0",
          "transmission": "1.0",
          "reflection": "0.0",
          "absorption": "0.0",
          "emissivity": "0.0",
          "temperature": "0.0",
          "constant_temperature": "false",
          "color": "ffffff"
        },
        {
          "rectangle": {
            "x": "8.5",
            "y": "7.25",
            "width": "0.5",
            "height": "0.75"
          },
          "thermal_conductivity": "0.0010",
          "specific_heat": "1300.0",
          "density": "25.0",
          "transmission": "0.0",
          "reflection": "0.0",
          "absorption": "1.0",
          "emissivity": "0.0",
          "temperature": "0.0",
          "constant_temperature": "false"
        },
        {
          "rectangle": {
            "x": "8.5",
            "y": "4.75",
            "width": "0.5",
            "height": "1.0"
          },
          "thermal_conductivity": "0.0010",
          "specific_heat": "1300.0",
          "density": "25.0",
          "transmission": "0.0",
          "reflection": "0.0",
          "absorption": "1.0",
          "emissivity": "0.0",
          "temperature": "0.0",
          "constant_temperature": "false"
        },
        {
          "rectangle": {
            "x": "8.5",
            "y": "3.5",
            "width": "0.5",
            "height": "0.25"
          },
          "thermal_conductivity": "0.0010",
          "specific_heat": "1300.0",
          "density": "25.0",
          "transmission": "0.0",
          "reflection": "0.0",
          "absorption": "1.0",
          "emissivity": "0.0",
          "temperature": "0.0",
          "constant_temperature": "false"
        },
        {
          "rectangle": {
            "x": "8.65",
            "y": "5.75",
            "width": "0.2",
            "height": "1.5"
          },
          "thermal_conductivity": "0.0010",
          "specific_heat": "1300.0",
          "density": "25.0",
          "transmission": "1.0",
          "reflection": "0.0",
          "absorption": "0.0",
          "emissivity": "0.0",
          "temperature": "0.0",
          "constant_temperature": "false",
          "color": "ffffff"
        },
        {
          "rectangle": {
            "x": "8.65",
            "y": "3.75",
            "width": "0.2",
            "height": "1.0"
          },
          "thermal_conductivity": "0.0010",
          "specific_heat": "1300.0",
          "density": "25.0",
          "transmission": "1.0",
          "reflection": "0.0",
          "absorption": "0.0",
          "emissivity": "0.0",
          "temperature": "0.0",
          "constant_temperature": "false",
          "color": "ffffff"
        },
        {
          "rectangle": {
            "x": "2.5",
            "y": "5.0",
            "width": "5.0",
            "height": "0.25"
          },
          "thermal_conductivity": "0.0010",
          "specific_heat": "1300.0",
          "density": "25.0",
          "transmission": "0.0",
          "reflection": "0.0",
          "absorption": "1.0",
          "emissivity": "0.0",
          "temperature": "0.0",
          "constant_temperature": "false",
          "label": "Floor"
        },
        {
          "rectangle": {
            "x": "5.3",
            "y": "1.0",
            "width": "0.4",
            "height": "7.0"
          },
          "thermal_conductivity": "0.0010",
          "specific_heat": "1300.0",
          "density": "25.0",
          "transmission": "0.0",
          "reflection": "0.0",
          "absorption": "1.0",
          "emissivity": "0.0",
          "temperature": "0.0",
          "constant_temperature": "false",
          "label": "Wall"
        }
      ]
    }
  },
  "sensor": {
    "thermometer": [
      {
        "label": "T1",
        "x": "1.625",
        "y": "6.25"
      },
      {
        "label": "T2",
        "x": "3.125",
        "y": "6.25"
      },
      {
        "label": "T3",
        "x": "8.125",
        "y": "6.25"
      }
    ]
  },
  "view": {
    "grid_size": "10",
    "ruler": "true",
    "isotherm": "true",
    "rainbow_x": "0.0",
    "rainbow_y": "0.0",
    "rainbow_w": "0.0",
    "rainbow_h": "0.0",
    "minimum_temperature": "0.0",
    "maximum_temperature": "40.0",
    "text": [
      {
        "string": "Two-story",
        "name": "Arial",
        "size": "12",
        "style": "0",
        "color": "ffffff",
        "x": "1.0",
        "y": "1.0"
      },
      {
        "string": "Press 'Q' or 'W' to change the sun angle",
        "name": "Arial",
        "size": "14",
        "style": "0",
        "color": "ffffff",
        "x": "0.5",
        "y": "9.5"
      }
    ]
  }
};