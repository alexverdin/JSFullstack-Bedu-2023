const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
      web: {
        blog: 'https://johndoe.com'
      }, 
      social: {
        facebook: 'https://facebook.com/john.doe',
        instagram: 'https://instagram.com/john.doe'
      } 
    }
  }

  const {links:{social:{facebook: fb, instagram: ig}}} = person;

  console.log(`FB: ${fb}\nIG: ${ig}`);