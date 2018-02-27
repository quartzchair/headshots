class PublicImage {
  constructor() {
    console.log('PublicImage called')
    // your likeability allows you to get roles that fall outside your characteristics
    this.likeability = 1
    // as fame gets higher, it becomes harder to change your characteristics
    this.fame = 1
    this.characteristics = {
      'energetic': 1,
      'earnest': 1,
      'profane': 1,
      'absurd': 1,
      'wise': 1,
      'cynical': 1
    }
  }
}

export default PublicImage
