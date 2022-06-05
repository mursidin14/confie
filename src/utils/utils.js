function makeCapital(name) {
  let nameArray = name.split(' ');
  if (nameArray.length > 1) {
    let capitalName = '';
    nameArray.forEach((name) => {
      capitalName += name.slice(0, 1).toUpperCase() + name.slice(1) + ' ';
    });
    return capitalName;
  }
  return name.slice(0, 1).toUpperCase() + name.slice(1);
}

const getCity = (data) => {
  let city = [];
  data.forEach((element) => {
    let city_data = {};
    city_data.id = element.kode;
    city_data.name = element.kabkota;
    city.push(city_data);
  });
  return city;
};

const timeEpoch = (time) => {
  let date = new Date(time);
  return date.getTime() / 1000;
};

const getDate = (time) => {
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

const getProfileCompletion = (data) => {
  let profile_completion = 0;
  const total_data = data.length;
  data.forEach((field) => {
    if (field) {
      profile_completion += 1;
    }
  });
  return Math.round((profile_completion / total_data) * 100);
};

const utils = {
  makeCapital,
  getCity,
  timeEpoch,
  getDate,
  getMonthYear,
  getProfileCompletion,
};

export default utils;
