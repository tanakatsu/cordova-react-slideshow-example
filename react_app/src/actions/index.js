export const showLoading = () => {
  return {
    type: 'SHOW_LOADING'
  }
}

export const hideLoading = () => {
  return {
    type: 'HIDE_LOADING'
  }
}

export const setPictures = (pictures) => {
  return {
    type: 'SET_PICTURES',
    pictures
  }
}

export const loadPictures = () => {
  return (dispatch, getState) => {
    console.log('load pictures..')
    dispatch(showLoading())

    const root = getState().home.root
    console.log('root=', root)

    const url = `${root === '/' ? '' : root}/images/slick/pictures.json`

    // fetch(url)
    // .then(response => {
    //   return response.json()
    // })
    // .then(data => {
    //   console.log('loaded')
    //   console.log(data)
    //
    //   if (root !== '/') {
    //     data = data.map(file => {
    //       return `${root}/${file}`
    //     })
    //     console.log(data)
    //   }
    //
    //   dispatch(hideLoading())
    //   dispatch(setPictures(data))
    // })
    // .catch(err => {
    //   console.error(err)
    //   dispatch(hideLoading())
    // })
    //

    // https://github.com/github/fetch/pull/92#issuecomment-140665932
    fetchLocal(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log('loaded')
      console.log(data)

      if (root !== '/') {
        data = data.map(file => {
          return `${root}/${file}`
        })
        console.log(data)
      }

      dispatch(hideLoading())
      dispatch(setPictures(data))
    })
    .catch(err => {
      console.error(err)
      dispatch(hideLoading())
    })
  }
}

export const login = () => {
  return {
    type: 'SIGN_IN'
  }
}

export const logout = () => {
  return {
    type: 'SIGN_OUT'
  }
}

export const setRoot = (path) => {
  return {
    type: 'SET_ROOT',
    path: path
  }
}

// Especially for Android
// https://github.com/github/fetch/pull/92#issuecomment-140665932
const fetchLocal = (url) => {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest
    xhr.onload = () => {
      resolve(new Response(xhr.responseText, {status: xhr.status}))
    }
    xhr.onerror = () => {
      reject(new TypeError('Local request failed'))
    }
    xhr.open('GET', url)
    xhr.send(null)
  })
}
