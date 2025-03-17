export interface StaffList {
  title: string;
  fullName: string;
  role: string;
}

export interface HeroProps {
  title: string;
  description: string;
}

export interface Project {
  name: string;
  fullName: string;
  department: string;
  address: string;

  page: {
    homepage: HeroProps;
    about: HeroProps;
    oit: HeroProps;
    staff: HeroProps;
    contact: HeroProps;
    game: HeroProps;
  };

  social: {
    fb: number;
  };

  staffList: StaffList[];
}
