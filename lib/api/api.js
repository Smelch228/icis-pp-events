export function getStrapiURL(path = "") {
    return `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:8000/api"
    }${path}`
  }
  
  // Helper to make GET requests to Strapi
  export async function getAPI(path) {
    const requestUrl = getStrapiURL(path)
    const response = await fetch(requestUrl)
    const data = await response.json()
    return data
  }

  export async function postAPI(path, payload){
        const requestUrl = getStrapiURL(path)
        const resp = await fetch(
            path, 
            {
                method: 'POST', 
                body: payload ?? {}
            }
        )
        const data = await resp.json()
        return data
  }