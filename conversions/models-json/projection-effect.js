var models_library = models_library || {};
models_library.projection_effect = {
  "model": {
    "timestep": 500.0,
    "measurement_interval": 100,
    "viewupdate_interval": 20,
    "sunny": true,
    "sun_angle": 1.5707964,
    "solar_power_density": 2000.0,
    "solar_ray_count": 24,
    "solar_ray_speed": 0.0010,
    "photon_emission_interval": 1,
    "z_heat_diffusivity": 0.0,
    "convective": false,
    "thermal_buoyancy": 2.5E-4,
    "buoyancy_approximation": 1,
    "boundary": {
      "temperature_at_border": {
        "upper": 0.0,
        "lower": 0.0,
        "left": 0.0,
        "right": 0.0
      }
    },
    "structure": {
      "part": {
        "rectangle": {
          "x": -0.099999905,
          "y": 8.0,
          "width": 10.2,
          "height": 2.0
        },
        "thermal_conductivity": 0.0010,
        "specific_heat": 1300.0,
        "density": 25.0,
        "transmission": 0.0,
        "reflection": 0.0,
        "absorption": 1.0,
        "emissivity": 0.0,
        "temperature": 0.0,
        "constant_temperature": false,
        "texture": {
          "texture_fg": -0x7f7f80,
          "texture_bg": -0x1000000,
          "texture_style": 15,
          "texture_width": 12,
          "texture_height": 12
        },
        "label": "Surface"
      }
    }
  },
  "sensor": {
    "thermometer": {
      "x": 5.0,
      "y": 7.0
    }
  },
  "view": {
    "grid_size": 10,
    "ruler": true,
    "isotherm": true,
    "color_palette_type": 0,
    "color_palette_x": 0.0,
    "color_palette_y": 0.0,
    "color_palette_w": 0.0,
    "color_palette_h": 0.0,
    "minimum_temperature": 0.0,
    "maximum_temperature": 20.0,
    "graph_xlabel": "Time",
    "text": {
      "string": "Press 'Q' or 'W' to change the sun angle",
      "name": "Arial",
      "size": 14,
      "style": 0,
      "color": 0xffffff,
      "x": 0.5,
      "y": 9.5
    }
  }
};