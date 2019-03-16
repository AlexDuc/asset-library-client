import { Dialog, noop, openURL } from 'quasar'

export default ({ Vue }) => {
  /**
   * Open the same URL in the same window
   * @param {String} url
   */
  Vue.prototype.goto = function (url) {
    document.location.assign(url)
  }

  Vue.prototype.confirm = function (message, yes, no) {
    Dialog.create({
      title: 'Confirm',
      message,
      ok: 'Yes',
      cancel: 'No'
    })
      .then(yes)
      .catch(no || noop)
  }

  Vue.prototype.todo = function (feature) {
    return Dialog.create({
      title: 'To be implemented',
      message: feature
    })
      .then(noop)
      .catch(noop)
  }

  Vue.prototype.openURL = function (url) {
    return openURL(url, function () {
      return Dialog.create({
        color: 'negative',
        title: 'Cannot open a new window',
        message: 'Please allow pop-ups from this site.'
      })
        .then(noop)
        .catch(noop)
    })
  }
}
