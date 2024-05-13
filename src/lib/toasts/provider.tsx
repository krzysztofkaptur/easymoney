// docs: https://react-hot-toast.com/

import { Toaster } from 'react-hot-toast'

export const ToasterProvider = () => {
  return (
    <Toaster
      position='top-right'
      reverseOrder={false}
      gutter={8}
      containerClassName=''
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: '',
        duration: 5000,
        style: {
          background: '#363636',
          color: '#fff',
        },
      }}
    />
  )
}
