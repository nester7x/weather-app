type Condition = {
  text: string;
  icon: string;
};

type Current = {
  condition: Condition;
  temp_c: number;
  feelslike_c: number;
  pressure_mb: number;
  vis_km: number;
  wind_kph: number;
  wind_dir: string;
};

type Location = {
  name: string;
  country: string;
  localtime: string;
};

type Error = {
  message: string;
};

type weatherDataProps = {
  current: Current;
  location: Location;
  error: Error;
};

export type { weatherDataProps };
