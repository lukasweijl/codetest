export interface Insurance {
  title: string;
  link: string;
  image: string;
  text: string;
  description: string;
  bulletPoints: KeyPoints[];
}

interface KeyPoints {
  title: string;
  value: number;
}

export interface ButtonInfo {
  name: string;
  href: string;
}

export interface Statistics {
  id: number;
  points: string;
  text: string;
}

export interface WorldTimeApiResponse {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: string;
  dst_offset: number;
  dst_until: string;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}
