import { getCurrentUser } from 'services/Auth/AuthService';

export function authHeader() {
  const metadata = JSON.parse(localStorage.getItem('metadata'));
  if (metadata && metadata.access_token) {
    return {
      Authorization: 'Bearer ' + metadata.access_token,
    };
  } else {
    return {};
  }
}
export function makeCapital(name = '') {
  name = name.toLowerCase();
  const nameArray = name.split(' ');
  if (nameArray.length > 1) {
    let capitalName = '';
    nameArray.forEach((name) => {
      capitalName += name.slice(0, 1).toUpperCase() + name.slice(1) + ' ';
    });
    return capitalName;
  }
  return name.slice(0, 1).toUpperCase() + name.slice(1);
}
export function getQuarter() {
  let today = new Date();
  let month = today.getMonth();
  let quarter;
  if (month < 3) {
    quarter = 1;
  } else if (month < 6) {
    quarter = 2;
  } else if (month < 9) {
    quarter = 3;
  } else {
    quarter = 4;
  }
  return quarter;
}

export const getTodayDate = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${date.getFullYear()}-${month < 10 ? `0${month}` : `${month}`}-${
    day < 10 ? `0${day}` : `${day}`
  }`;
};

const getCity = (data) => {
  const city = [];
  data.forEach((element) => {
    const city_data = {};
    city_data.id = element.kode;
    city_data.name = element.kabkota;
    city.push(city_data);
  });
  return city;
};
export const getLocalStringRupiah = (rupiah) => {
  return rupiah.toLocaleString('id-ID');
};
const timeEpoch = (time) => {
  if (time === undefined) {
    return 0;
  }
  let date = new Date(time);
  return date.getTime() / 1000;
};
export function getGender(gender) {
  return gender === 'L' ? 'Laki-laki' : 'Perempuan';
}

export const getDate = (time) => {
  return new Date(time * 1000).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const getMonthYear = (time) => {
  if (time === null) {
    return '-';
  }
  time = parseInt(time);
  return new Date(time * 1000).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'short',
  });
};

const getProfileCompletion = (my_profile) => {
  let profile_completion = 0;
  const profile = [
    'full_name',
    'date_of_birth',
    'email',
    'phone_number',
    'gender',
    'country',
    'province_name',
    'city_name',
    'about',
    'skills',
    'educations',
    'experiences',
    'certificates',
    'internships',
    'volunteers',
    'url_photo_profile',
  ];
  const total_data = profile.length;
  profile.forEach((item) => {
    if (Array.isArray(my_profile[item]) && my_profile[item].length > 0) {
      profile_completion += 1;
    }
    if (
      Array.isArray(my_profile[item]) === false &&
      my_profile[item] !== '' &&
      my_profile[item] !== null &&
      my_profile[item] !== undefined
    ) {
      profile_completion += 1;
    }
  });
  return Math.round((profile_completion / total_data) * 100);
};

export const getProfileCompletionBusiness = (my_profile) => {
  let profile_completion = 0;
  const profile = [
    'full_name',
    'date_of_birth',
    'email',
    'phone_number',
    'gender',
    'country',
    'province_name',
    'city_name',
    'about',
    'volunteers',
    'businessData',
    'galleries',
    'email_verified_at',
    'businessFields',
    'url_photo_profile',
  ];
  profile.forEach((item) => {
    if (Array.isArray(my_profile[item]) && my_profile[item].length > 0) {
      profile_completion += 1;
    }
    if (
      Array.isArray(my_profile[item]) === false &&
      my_profile[item] !== '' &&
      my_profile[item] !== null &&
      my_profile[item] !== undefined
    ) {
      profile_completion += 1;
    }
  });
  const total_data = profile.length;
  return Math.round((profile_completion / total_data) * 100);
}

const isWork = (works_experience) => {
  return works_experience.some((work) => work.is_current === true);
};

const getYearMonthDay = (epoch) => {
  if (epoch === null) {
    return null;
  }
  const date = new Date(epoch * 1000);
  let month = date.getMonth() + 1;
  return `${date.getFullYear()}-${month < 10 ? `0${month}` : `${month}`}`;
};
export const getFullDate = (epoch) => {
  if (epoch === null) {
    return null;
  }
  const date = new Date(epoch * 1000);
  let month = date.getMonth() + 1;
  return `${date.getFullYear()}-${month < 10 ? `0${month}` : `${month}`}-${
    date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
  }`;
};

export const getLength = (word) => {
  if (word === undefined) {
    return true;
  }
  return word?.length > 24 ? true : false;
};
export const isEmpty = (fields) => {
  return fields.some((field) => field.length === 0);
};
export const getModelCV = () => {
  if (!localStorage.getItem('modelCV')) {
    localStorage.setItem(
      'modelCV',
      JSON.stringify({
        model: 'simple',
      }),
    );
    return 'simple';
  }
  return JSON.parse(localStorage.getItem('modelCV')).model;
};
export const getYear = (epoch = null) => {
  if (epoch === null) {
    return null;
  }
  const date = new Date(epoch * 1000);
  return date.getFullYear();
};
export const getRoles = () => {
  const user = getCurrentUser();
  console.log(user);
};
export const getStatusApplication = (status) => {
  switch (status) {
    case '1':
      return 'Lamaran Diterima';
    case '2':
      return 'Seleksi Berkas';
    case '3':
      return 'Tes Online';
      case '4':
        return 'Wawancara';
        case '5':
          return 'Selesai'
    default:
      return 'Lamaran Ditolak';
  }
};
// formating function
// sorting function
export function sortWorkExperience(items) {
  return items.sort((a, b) => {
    if (a.is_current === b.is_current) {
      return a.time - b.time;
    }
    return a.is_current ? -1 : 1;
  });
}

export function sortItems(items) {
  return items.sort((a, b) => {
    if (a.end_date === b.end_date) {
      return a.end_date - b.end_date;
    }
    return a.end_date > b.end_date ? -1 : 1;
  });
}

export function sortYear(items) {
  items.sort((a, b) => {
    return a.year - b.year;
  })
  return items.reverse();
}
// filter time 
export const getTimeToday = () => {
  const midnight = new Date();
  midnight.setHours(0, 0, 0, 0);
  const epoch = midnight.getTime() / 1000;
  return epoch;
};
export const getTimeLastWeek = () => {
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 7);
  const epoch = lastWeek.getTime() / 1000;
  return epoch;
}
export const getTimeLastMonth = () => {
  const lastMonth = new Date();
  lastMonth.setMonth(lastMonth.getMonth() - 1);
  const epoch = lastMonth.getTime() / 1000;
  return epoch;
}
export const getEpochTime = (time) => {
  const date = new Date(time);
  return date.getTime() / 1000;
}
export const getLocalTime = (time) => {
  const date = new Date(time);
  return date.toLocaleString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
const utils = {
  authHeader,
  makeCapital,
  getCity,
  timeEpoch,
  getDate,
  getMonthYear,
  getProfileCompletion,
  isWork,
  getYearMonthDay,
};

export default utils;
