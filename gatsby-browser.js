import "./src/styles/app.scss"

const ensureCorrectURL = () => {
  if (window.location.hostname.indexOf('www') === 0) {
    window.location = window.location.href.replace('www.', '')
  }
}

export const onClientEntry = () => {
  window.onload = () => {
    ensureCorrectURL()
  }
}
