import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto w-full mb-96">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Feel free to reach out to me via the following contact methods:
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          <strong>Email:</strong> 
          <a href="mailto:saravana.41.5@gmail.com" className="text-blue-500 dark:text-blue-300 hover:underline">
          {" "}saravana.41.5@gmail.com
          </a>
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          <strong>Phone:</strong> +1 934 255 9036
        </p>
      </div>
    </section>
  )
}

export default Contact