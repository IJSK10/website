import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="max-w-4xl mx-auto pt-12">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold">Kone Elevators India Pvt. Ltd.</h3>
        <p className="text-gray-600 dark:text-gray-400">Chennai, India | Automation Tester</p>
        <p className="text-gray-600 dark:text-gray-400">June 2022</p>
        <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-400">
          Developed and executed automated test scripts using the Robot Framework, resulting in a 25% increase in test coverage.
          Utilized Selenium with integrated lift simulation software, reducing manual testing effort by 30%, improving overall testing efficiency and accuracy.
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold">
          Analysing Classification and Feature Selection Strategies for Diabetes Prediction
        </h3>
        <p className="text-gray-600 dark:text-gray-400" >Frontier (Publication Approved)</p>
        <p className="text-gray-600 dark:text-gray-400">November 2023 – May 2024</p>
        <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-400">
          Analysed classification and feature selection strategies for diabetes prediction across diverse datasets.
          Utilized Explainable AI to uncover and interpret key feature contributions.
          Developed insights to enhance predictive model accuracy and reliability.
        </ul>
      </div>
    </section>
  )
}

export default Experience