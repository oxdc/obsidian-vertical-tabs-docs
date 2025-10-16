// Wait for DOM to be ready and elements to be available
function initializeTokenInput() {
  const tokenInput = document.getElementById("token-input") as HTMLInputElement
  const tokenLink = document.getElementById("token-link") as HTMLAnchorElement
  const tokenMessage = document.getElementById("vt-token-input-message") as HTMLParagraphElement
  const URL = "https://vertical-tabs-prod.oxdc.dev/api/v1/user/builds/latest"

  if (tokenInput && tokenLink && tokenMessage) {
    let debounceTimer: number

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
        if (token.length > 0) {
          tokenMessage.textContent = "Please enter a valid token"
        } else {
          tokenMessage.textContent = "Please paste your access token above"
        }
      }
    }

    const debouncedUpdateLink = () => {
      clearTimeout(debounceTimer)
      debounceTimer = window.setTimeout(updateLink, 500)
    }

    tokenInput.addEventListener("input", debouncedUpdateLink)
    updateLink() // Initialize on load
    return true // Successfully initialized
  }
  return false // Elements not found
}

// Try to initialize immediately if DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeTokenInput)
} else {
  // DOM is already ready, try to initialize
  if (!initializeTokenInput()) {
    // If elements aren't found, use MutationObserver to watch for them
    const observer = new MutationObserver(() => {
      if (initializeTokenInput()) {
        observer.disconnect() // Stop observing once initialized
      }
    })
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })
    
    // Fallback: stop observing after 10 seconds
    setTimeout(() => observer.disconnect(), 10000)
  }
}
