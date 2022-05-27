export async function makeCapital(name) {
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
