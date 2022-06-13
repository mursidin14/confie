export function makeCapital(name) {
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

export const getTodayDate = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${date.getFullYear()}-${month < 10 ? `0${month}` : `${month}`}-${day < 10 ? `0${day}` : `${day}`}`;
}

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

const timeEpoch = (time) => {
  if (time === undefined) {
    return 0;
  }
  let date = new Date(time);
  return date.getTime() / 1000;
};
export  function getGender(gender) {
  return gender == 'L' ? 'Laki-laki' : 'Perempuan';
}

export const getDate = (time) => {
  return new Date(time * 1000).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const getMonthYear = (time) => {
  time = parseInt(time);
  return new Date(time * 1000).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'short',
  });
};

const getProfileCompletion = (my_profile) => {
  let profile_completion = 0;
  const profile = [
    'about',
    'certificates',
    'city_name',
    'country',
    'date_of_birth',
    'educations',
    'email',
    'experiences',
    'full_name',
    'gender',
    'internships',
    'phone_number',
    'province_name',
    'skills',
  ];
  const total_data = 14;
  profile.forEach((item) => {
    if (
      (Array.isArray(my_profile[item]) && my_profile[item].length > 0) ||
      (Array.isArray(my_profile[item]) === false && my_profile[item] !== '')
    ) {
      profile_completion += 1;
    }
  });

  return Math.round((profile_completion / total_data) * 100);
};

const isWork = (works_experience) => {
  return works_experience.some((work) => work.is_current == true)
}

const getYearMonthDay = (epoch) => {
  if (epoch === null) {
    return null;
  }
  const date = new Date(epoch * 1000);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${date.getFullYear()}-${month < 10 ? `0${month}` : `${month}`}-${day < 10 ? `0${day}` : `${day}`}`;
};

export const getLength = (word) => {
  if(word == undefined) {
    return true
  }
  return word.length > 24 ? true : false;
}

const utils = {
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
