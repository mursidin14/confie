import { getCurrentUser } from "services/Auth/AuthService"

export function authHeader() {
  const metadata = JSON.parse(localStorage.getItem('metadata'))
  if (metadata && metadata.access_token) {
    return {
      Authorization: 'Bearer ' + metadata.access_token
    }
  } else {
    return {}
  }
}
export function makeCapital(name = '') {
  name = name.toLowerCase()
  const nameArray = name.split(' ')
  if (nameArray.length > 1) {
    let capitalName = ''
    nameArray.forEach((name) => {
      capitalName += name.slice(0, 1).toUpperCase() + name.slice(1) + ' '
    })
    return capitalName
  }
  return name.slice(0, 1).toUpperCase() + name.slice(1)
}
export function getQuarter() {
  let today = new Date()
  let month = today.getMonth()
  let quarter
  if (month < 3) {
    quarter = 1
  } else if (month < 6) {
    quarter = 2
  } else if (month < 9) {
    quarter = 3
  } else {
    quarter = 4
  }
  return quarter
}

export const getTodayDate = () => {
  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${date.getFullYear()}-${month < 10 ? `0${month}` : `${month}`}-${
    day < 10 ? `0${day}` : `${day}`
  }`
}

const getCity = (data) => {
  const city = []
  data.forEach((element) => {
    const city_data = {}
    city_data.id = element.kode
    city_data.name = element.kabkota
    city.push(city_data)
  })
  return city
}

const timeEpoch = (time) => {
  if (time === undefined) {
    return 0
  }
  let date = new Date(time)
  return date.getTime() / 1000
}
export function getGender(gender) {
  return gender === 'L' ? 'Laki-laki' : 'Perempuan'
}

export const getDate = (time) => {
  return new Date(time * 1000).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getMonthYear = (time) => {
  if (time === null) {
    return '-'
  }
  time = parseInt(time)
  return new Date(time * 1000).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'short'
  })
}

const getProfileCompletion = (my_profile) => {
  let profile_completion = 0
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
    'url_photo_profile'
  ]
  const total_data = profile.length
  profile.forEach((item) => {
    if (Array.isArray(my_profile[item]) && my_profile[item].length > 0) {
      profile_completion += 1
    }
    if (
      Array.isArray(my_profile[item]) === false &&
      my_profile[item] !== '' &&
      my_profile[item] !== null &&
      my_profile[item] !== undefined
    ) {
      profile_completion += 1
    }
  })
  return Math.round((profile_completion / total_data) * 100)
}

const isWork = (works_experience) => {
  return works_experience.some((work) => work.is_current === true)
}

const getYearMonthDay = (epoch) => {
  if (epoch === null) {
    return null
  }
  const date = new Date(epoch * 1000)
  let month = date.getMonth() + 1
  return `${date.getFullYear()}-${month < 10 ? `0${month}` : `${month}`}`
}
export const getFullDate = (epoch) => {
  if (epoch === null) {
    return null
  }
  const date = new Date(epoch * 1000)
  let month = date.getMonth() + 1
  return `${date.getFullYear()}-${month < 10 ? `0${month}` : `${month}`}-${
    date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
  }`
}

export const getLength = (word) => {
  if (word === undefined) {
    return true
  }
  return word?.length > 24 ? true : false
}
export const isEmpty = (fields) => {
  return fields.some((field) => field.length === 0)
}
export const getModelCV = () => {
  if (!localStorage.getItem('modelCV')) {
    localStorage.setItem(
      'modelCV',
      JSON.stringify({
        model: 'simple'
      })
    )
    return 'simple'
  }
  return JSON.parse(localStorage.getItem('modelCV')).model
}
export const getYear = (epoch = null) => {
  if (epoch === null) {
    return null
  }
  const date = new Date(epoch * 1000)
  return date.getFullYear()
}
export const getRoles = () => {
  const user = getCurrentUser()
  console.log(user)
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
  getYearMonthDay
}

export default utils
