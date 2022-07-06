import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Svg,
  Path
} from '@react-pdf/renderer'
import utils from 'utils/utils'

// Create styles
let dummyData = {
  name: 'Annas Casmawan Ahmad',
  address: 'Jl. Raya Cikarang No.1',
  phone: '0812-3456-7890',
  email: 'annas@gmail.com',
  username: 'annas',
  job_expereince: [
    {
      company: 'PT. ABC',
      position: 'Senior Software Engineer',
      start_date: 'October 2019',
      end_date: 'Present',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, aspernatur numquam cum quae repellendus nesciunt porro vel consectetur deserunt, non tempore totam debitis veniam cumque dolor molestiae incidunt asperiores unde.'
    },
    {
      company: 'PT. ABC',
      position: 'Senior Software Engineer',
      start_date: 'October 2019',
      end_date: 'Present',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, aspernatur numquam cum quae repellendus nesciunt porro vel consectetur deserunt, non tempore totam debitis veniam cumque dolor molestiae incidunt asperiores unde.'
    },
    {
      company: 'PT. ABC',
      position: 'Senior Software Engineer',
      start_date: 'October 2019',
      end_date: 'Present',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, aspernatur numquam cum quae repellendus nesciunt porro vel consectetur deserunt, non tempore totam debitis veniam cumque dolor molestiae incidunt asperiores unde.'
    }
  ],
  education: [
    {
      school: 'SMA Negeri 1 Cikarang',
      major: 'Teknik Komputer Jaringan',
      start_date: 'September 2019',
      end_date: 'Present',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, aspernatur numquam cum quae repellendus nesciunt porro vel consectetur deserunt, non tempore totam debitis veniam cumque dolor molestiae incidunt asperiores unde.'
    },
    {
      school: 'SMA Negeri 1 Cikarang',
      major: 'Teknik Komputer Jaringan',
      start_date: 'September 2019',
      end_date: 'Present',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, aspernatur numquam cum quae repellendus nesciunt porro vel consectetur deserunt, non tempore totam debitis veniam cumque dolor molestiae incidunt asperiores unde.'
    },
    {
      school: 'SMA Negeri 1 Cikarang',
      major: 'Teknik Komputer Jaringan',
      start_date: 'September 2019',
      end_date: 'Present',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, aspernatur numquam cum quae repellendus nesciunt porro vel consectetur deserunt, non tempore totam debitis veniam cumque dolor molestiae incidunt asperiores unde.'
    }
  ],
  skills: ['Javascript', 'React', 'NodeJS', 'PHP', 'MySQL', 'HTML', 'CSS'],
  awards: [
    {
      title: 'Best Developer',
      date: 'October 2019'
    },
    {
      title: 'Best Developer',
      date: 'October 2019'
    }
  ]
}
const styles = StyleSheet.create({
  body: {
    paddingTop: 36,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  name: {
    fontSize: 25,
    fontWeight: 'extrabold',
    textAlign: 'left'
  },
  breakLine: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  section: {
    marginTop: 10
  },
  sectionInformation: {
    marginTop: 10,
    flexDirection: 'row'
  },
  information: {
    fontSize: 10,
    marginBottom: 5,
    marginLeft: 20
  },
  subHeading: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 5
  },
  itemSection: {
    marginLeft: 15
  },
  itemExperience: {
    marginTop: 5
  },
  position: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 2
  },
  date: {
    fontSize: 9,
    color: '#656b6a'
  },
  description: {
    fontSize: 10,
    marginTop: 5,
    width: '60%'
  },
  text: {
    fontSize: 10,
    textAlign: 'left'
  },
  skillText: {
    fontSize: 10,
    textAlign: 'left',
    marginTop: 5,
    marginBottom: 5
  },
  itemAward: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  },
  award: {
    fontSize: 10,
    textAlign: 'left'
  },
  svgBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1
  },
  descriptionAward: {
    marginLeft: 20
  }
})

// Create Document Component
const CompleteResume = ({
  data: {
    full_name,
    slug,
    phone_number,
    city_name,
    email,
    about,
    experiences,
    internships,
    educations,
    skills,
    certificates
  }
}) => (
  <Document>
    <Page size="A4" style={styles.body}>
      <Text style={styles.name}>{full_name.toUpperCase()}</Text>
      <Text style={styles.breakLine}></Text>
      <View style={styles.sectionInformation}>
        <View>
          <BasicInformation svg={<Person />} text={`confie.id/${slug}`} />
          <BasicInformation svg={<Phone />} text={`${phone_number}`} />
          <BasicInformation svg={<Address />} text={`${city_name}`} />
        </View>
        <View style={{ marginLeft: 50 }}>
          <BasicInformation svg={<Mail />} text={`${email}`} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeading}>TENTANG SAYA</Text>
        <View style={styles.itemSection}>
          <Text style={styles.text}>{about}</Text>
        </View>
      </View>
      <WorkInternExperience item={experiences} title={'WORK EXPERIENCE'} />
      <WorkInternExperience item={internships} title={'INTERN EXPERIENCE'} />
      <EducationHistory item={educations} title={'EDUCATION'} />
      <Skills
        item={skills.map((skill) => {
          return skill.name
        })}
        title={'SKILLS'}
      />
      <Awards item={certificates} title={'AWARDS RECEIVED'}></Awards>
    </Page>
  </Document>
)

export default CompleteResume

function WorkInternExperience({ item, title }) {
  return (
    <View style={styles.section}>
      <Text style={styles.subHeading}>{title}</Text>
      <View style={styles.itemSection}>
        {item.map((item, index) => (
          <View style={styles.itemExperience} key={index}>
            <Text style={styles.position}>{item.position}</Text>
            <Text style={styles.date}>
              {utils.getMonthYear(item.start_date)} -{' '}
              {utils.getMonthYear(item.end_date) === '-'
                ? 'Present'
                : utils.getMonthYear(item.end_date)}
            </Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}
function EducationHistory({ item, title }) {
  return (
    <View style={styles.section}>
      <Text style={styles.subHeading}>{title}</Text>
      <View style={styles.itemSection}>
        {item.map((item, index) => (
          <View style={styles.itemExperience} key={index}>
            <Text style={styles.position}>{item.school}</Text>
            <Text style={styles.date}>
              {item.major} | {item.start_date} - {item.end_date}
            </Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}
function Skills({ item, title }) {
  return (
    <View style={styles.section}>
      <Text style={styles.subHeading}>{title}</Text>
      <View style={styles.itemSection}>
        {item.map((item, index) => (
          <Text style={styles.skillText} key={index}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  )
}
function Awards({ item, title }) {
  return (
    <View style={styles.section}>
      <Text style={styles.subHeading}>{title}</Text>
      {item.map((item, index) => (
        <View key={index} style={styles.itemAward}>
          <Svg width="50" height="50" style={styles.svgBg}>
            <Path
              d="M11.3346 10.1627L11.3333 14.1633C11.3333 14.2549 11.3081 14.3448 11.2606 14.423C11.213 14.5013 11.1448 14.565 11.0635 14.6071C10.9822 14.6493 10.8909 14.6683 10.7995 14.6621C10.7081 14.6559 10.6202 14.6248 10.5453 14.572L7.99998 12.7807L5.45531 14.572C5.38044 14.6246 5.29259 14.6556 5.20131 14.6617C5.11003 14.6678 5.01883 14.6487 4.93763 14.6066C4.85644 14.5644 4.78836 14.5008 4.74082 14.4227C4.69327 14.3445 4.66808 14.2548 4.66798 14.1633L4.66665 10.1633C5.61168 10.9223 6.78791 11.3351 7.99998 11.3333C9.21259 11.3353 10.3893 10.9222 11.3346 10.1627ZM7.99998 1.33333C9.23766 1.33333 10.4246 1.825 11.2998 2.70017C12.175 3.57534 12.6666 4.76232 12.6666 6C12.6666 7.23768 12.175 8.42466 11.2998 9.29983C10.4246 10.175 9.23766 10.6667 7.99998 10.6667C6.7623 10.6667 5.57532 10.175 4.70015 9.29983C3.82498 8.42466 3.33331 7.23768 3.33331 6C3.33331 4.76232 3.82498 3.57534 4.70015 2.70017C5.57532 1.825 6.7623 1.33333 7.99998 1.33333V1.33333Z"
              fill="black"
            />
          </Svg>
          <View style={styles.descriptionAward}>
            <Text style={styles.award}>{item.name}</Text>
            <Text style={styles.award}>{item.year}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}

function Person() {
  return (
    <Svg width="50" height="50" style={styles.svgBg}>
      <Path
        d="M2.25 10.5C2.25 10.5 1.5 10.5 1.5 9.75C1.5 9 2.25 6.75 6 6.75C9.75 6.75 10.5 9 10.5 9.75C10.5 10.5 9.75 10.5 9.75 10.5H2.25ZM6 6C6.59674 6 7.16903 5.76295 7.59099 5.34099C8.01295 4.91903 8.25 4.34674 8.25 3.75C8.25 3.15326 8.01295 2.58097 7.59099 2.15901C7.16903 1.73705 6.59674 1.5 6 1.5C5.40326 1.5 4.83097 1.73705 4.40901 2.15901C3.98705 2.58097 3.75 3.15326 3.75 3.75C3.75 4.34674 3.98705 4.91903 4.40901 5.34099C4.83097 5.76295 5.40326 6 6 6V6Z"
        fill="#212223"
      />
    </Svg>
  )
}
function Phone() {
  return (
    <Svg width="50" height="50" style={styles.svgBg}>
      <Path
        d="M7.78359 2.02324L6.84756 1.08809C6.78153 1.02177 6.70305 0.969147 6.61662 0.933249C6.5302 0.897352 6.43753 0.878884 6.34395 0.878906C6.15322 0.878906 5.97393 0.953613 5.83945 1.08809L4.83223 2.09531C4.76591 2.16134 4.71329 2.23982 4.67739 2.32625C4.64149 2.41267 4.62302 2.50534 4.62305 2.59893C4.62305 2.78965 4.69775 2.96895 4.83223 3.10342L5.56875 3.83994C5.39635 4.21995 5.15665 4.56564 4.86123 4.86035C4.56655 5.15649 4.22088 5.39706 3.84082 5.57051L3.1043 4.83398C3.03827 4.76767 2.95979 4.71505 2.87336 4.67915C2.78694 4.64325 2.69427 4.62478 2.60068 4.6248C2.40996 4.6248 2.23066 4.69951 2.09619 4.83398L1.08809 5.84033C1.02169 5.90648 0.969021 5.98511 0.933122 6.07169C0.897222 6.15827 0.878797 6.2511 0.878907 6.34482C0.878907 6.53555 0.953614 6.71484 1.08809 6.84932L2.02236 7.78359C2.23682 7.99893 2.53301 8.12109 2.83711 8.12109C2.90127 8.12109 2.96279 8.11582 3.02344 8.10527C4.2082 7.91016 5.3833 7.27998 6.33164 6.33252C7.2791 5.38594 7.9084 4.21172 8.10615 3.02344C8.16592 2.66045 8.04551 2.28691 7.78359 2.02324V2.02324Z"
        fill="#212223"
      />
    </Svg>
  )
}
function Mail() {
  return (
    <Svg width="50" height="50" style={styles.svgBg}>
      <Path
        d="M8.10002 3.31785V6.525C8.10002 6.82337 7.9815 7.10952 7.77052 7.32049C7.55954 7.53147 7.27339 7.65 6.97502 7.65H2.02502C1.72666 7.65 1.44051 7.53147 1.22953 7.32049C1.01855 7.10952 0.900024 6.82337 0.900024 6.525V3.31785L4.38572 5.36895C4.42035 5.38937 4.45982 5.40014 4.50002 5.40014C4.54023 5.40014 4.5797 5.38937 4.61432 5.36895L8.10002 3.31785ZM6.97502 1.8C7.25184 1.79996 7.51895 1.90197 7.72527 2.08653C7.93158 2.27109 8.0626 2.52524 8.09327 2.80035L4.50002 4.914L0.906774 2.80035C0.937446 2.52524 1.06847 2.27109 1.27478 2.08653C1.48109 1.90197 1.74821 1.79996 2.02502 1.8H6.97502Z"
        fill="#212223"
      />
    </Svg>
  )
}
function Address() {
  return (
    <Svg width="50" height="50" style={styles.svgBg}>
      <Path
        d="M6 1.2054C4.3428 1.2054 3 2.5428 3 4.1994C3 7.0638 6 10.7994 6 10.7994C6 10.7994 9 7.0632 9 4.1994C9 2.5434 7.6572 1.2054 6 1.2054V1.2054ZM6 5.856C5.57035 5.856 5.1583 5.68532 4.85449 5.38151C4.55068 5.0777 4.38 4.66565 4.38 4.236C4.38 3.80635 4.55068 3.3943 4.85449 3.09049C5.1583 2.78668 5.57035 2.616 6 2.616C6.42965 2.616 6.8417 2.78668 7.14551 3.09049C7.44932 3.3943 7.62 3.80635 7.62 4.236C7.62 4.66565 7.44932 5.0777 7.14551 5.38151C6.8417 5.68532 6.42965 5.856 6 5.856Z"
        fill="#212223"
      />
    </Svg>
  )
}

function BasicInformation({ svg, text }) {
  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
      }}
    >
      {svg}
      <Text style={styles.information}>{text}</Text>
    </View>
  )
}
