import React from 'react'

const Education = () => {
  return (
    <section id="education" className="max-w-4xl mx-auto py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Education</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Stony Brook University</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I am currently pursuing a <strong className="font-semibold">Master of Science in Computer Science</strong> 
            at <strong className="font-semibold">Stony Brook University</strong> in 
            <strong className="font-semibold">Stony Brook, New York</strong>, with an expected graduation in 
            <strong className="font-semibold">May 2024</strong>.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Vellore Institute of Technology University</h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Previously, I completed my <strong className="font-semibold">Bachelor of Technology in Computer Science and Engineering</strong> 
            with a specialization in <strong className="font-semibold">Internet of Things</strong> at 
            <strong className="font-semibold">Vellore Institute of Technology University</strong>, Vellore, India. 
            I was awarded a <strong className="font-semibold">scholarship</strong> for being in the top sixth of my program, 
            graduating in <strong className="font-semibold">2024</strong> with a <strong className="font-semibold">CGPA of 9.09</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Education