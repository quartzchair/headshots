class PublicImage {
  constructor() {
    console.log('PublicImage called')
    // your likeability allows you to get roles that fall outside your typical characteristics
    this.likeability = 1
    this.fame = 1
    // as fame gets higher, it becomes harder to change the following characteristics
    this.characteristics = {
      'energetic': 1,
      'earnestness': 1,
      'profane': 1,
      'absurd': 1,
      'wise': 1,
      'cynical': 1
    }
  }
}

export default PublicImage
