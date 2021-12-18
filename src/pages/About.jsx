function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This
        project is part of my portfolio.
        <strong>
          <a href='https://www.furkansabaz.com'> Furkan Sabaz</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400 '>
        Version <span className='text-indigo-700'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-indigo-700' href='www.furkansabaz.com'>
          Furkan Sabaz
        </a>
      </p>
    </>
  )
}

export default About