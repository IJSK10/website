import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="max-w-4xl mx-auto pt-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      {/* Project 1: Image on Right, Text on Left */}
      <div className="flex flex-col md:flex-row mb-8 items-center">
        <div className="md:w-1/2 md:pr-6">
          <h3 className="text-xl font-semibold">Pinnacle Privacy Platform</h3>
          <p className="text-gray-700 dark:text-gray-400">
            Engineered a Next.js web application and Rust server for the Pinnacle Privacy Platform, enabling secure P2P payments, crypto wallet functionalities, and NFT management. Achieved seamless user experience and enhanced security through a zero-knowledge authentication feature.
          </p>
          <a
            href="https://github.com/yourusername/pinnacle-privacy-platform"
            className="text-blue-500 hover:underline"
            target="_blank" rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img
            src="/images/pinnacle-privacy.png"
            alt="Pinnacle Privacy Platform"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Project 2: Image on Left, Text on Right */}
      <div className="flex flex-col md:flex-row-reverse mb-8 items-center">
        <div className="md:w-1/2 md:pl-6">
          <h3 className="text-xl font-semibold">Greenhouse Monitoring System</h3>
          <p className="text-gray-700 dark:text-gray-400">
            Designed a comprehensive greenhouse monitoring and regulation system with Arduino and sensor integration, using Flutter for the application interface. This resulted in 50% more efficient water usage and enhanced plant health through real-time data analysis via Thingspeak cloud and remote-control options.
          </p>
          <a
            href="https://github.com/yourusername/greenhouse-monitoring"
            className="text-blue-500 hover:underline"
            target="_blank" rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img
            src="/images/greenhouse-monitoring.png"
            alt="Greenhouse Monitoring System"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Project 3: Image on Right, Text on Left */}
      <div className="flex flex-col md:flex-row mb-8 items-center">
        <div className="md:w-1/2 md:pr-6">
          <h3 className="text-xl font-semibold">Blockchain for Physical Assets Ownership</h3>
          <p className="text-gray-700 dark:text-gray-400">
            Developed a blockchain solution using Solidity for smart contracts and MetaMask for secure transactions, with Pinata for IPFS integration. The system enables secure ownership, transaction and management of physical assets. 
          </p>
          <a
            href="https://github.com/yourusername/blockchain-assets-ownership"
            className="text-blue-500 hover:underline"
            target="_blank" rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img
            src="/images/blockchain-assets.png"
            alt="Blockchain Assets Ownership"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects