document.addEventListener("DOMContentLoaded", () => {
  const tokenInput = document.getElementById("token-input") as HTMLInputElement
  const tokenLink = document.getElementById("token-link") as HTMLAnchorElement
  const tokenMessage = document.getElementById("vt-token-input-message") as HTMLParagraphElement
  const URL = "https://vertical-tabs-prod.oxdc.dev/api/v1/user/builds/latest"

  if (tokenInput && tokenLink && tokenMessage) {
    const updateLink = async () => {
      const token = tokenInput.value.replace(/-/g, "").toUpperCase().trim()
      const isTokenValid = token.length === 16
      if (isTokenValid) {
        const downloadURL = `${URL}/download?token=${encodeURIComponent(token)}`
        const dataURL = `${URL}?token=${encodeURIComponent(token)}`
        tokenLink.href = downloadURL
        tokenLink.classList.toggle("is-disabled", false)
        try {
          const response = await fetch(dataURL)
          const data = await response.json()
          if (data.success) {
            tokenMessage.textContent = `The latest beta build is ${data.data.tag}`
            if (data.data.short_summary) {
              tokenMessage.textContent += `: ${data.data.short_summary}`
            }
          } else {
            tokenMessage.textContent = `Error: ${data.error}`
          }
        } catch (error) {
          tokenMessage.textContent = "Something went wrong while fetching the build data"
        }
      } else {
        tokenLink.href = URL
        tokenLink.classList.toggle("is-disabled", true)
        tokenMessage.textContent = "Please enter a valid token"
      }
    }

    tokenInput.addEventListener("input", updateLink)
    updateLink() // Initialize on load
  }
})
