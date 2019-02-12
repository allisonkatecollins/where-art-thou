//app token: Kz4LSqMRqLWAeW1Wots3n7zfR
//secret token: KZgVmE_GRT2jXfTnUe-C_Haef4DNTUbuxEaX

export default {
  getOne(title) {
    return fetch(`https://data.nashville.gov/resource/xakp-ess3.json?$$app_token=Kz4LSqMRqLWAeW1Wots3n7zfR&title=${title}`)
    .then(response => response.json())
  }, 
  getAll() {
    return fetch("https://data.nashville.gov/resource/xakp-ess3.json?$$app_token=Kz4LSqMRqLWAeW1Wots3n7zfR")
    .then(response => response.json())
  }
}


  /*   .then(artItems => {
      artItems.forEach(result => {
        let artTitle = result.title
        let artistFirstName = result.first_name
        let artistLastName = result.last_name
        let artLocation = result.location
        let artMedium = result.medium
        let artDescription = result.description
      })
    })
 */