//app token: Kz4LSqMRqLWAeW1Wots3n7zfR
//secret token: KZgVmE_GRT2jXfTnUe-C_Haef4DNTUbuxEaX

const url = "https://data.nashville.gov/resource/xakp-ess3.json?$$app_token=Kz4LSqMRqLWAeW1Wots3n7zfR"

export default {
  getAll() {
    return fetch(`${url}`).then(response => response.json())
  }
}


    .then(artItems => {
      artItems.forEach(result => {
        let artTitle = result.title
        let artistFirstName = result.first_name
        let artistLastName = result.last_name
        let artLocation = result.location
        let artMedium = result.medium
        let artDescription = result.description
      })
    })
