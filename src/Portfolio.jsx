import React from "react";

export default function Portfolio() {
  return (
    <main className="bg-gray-100 text-gray-900 min-h-screen px-6 py-10 font-sans max-w-4xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Abdelrahman Aboghanima</h1>
        <p className="text-sm">Giza, Egypt | (+20) 1556757667 | abdo.aboganima@gmail.com</p>
        <p className="text-sm">
          <a href="https://github.com/abdoaboganima" className="text-blue-600">GitHub</a> |{' '}
          <a href="https://www.linkedin.com/in/abdoaboganima" className="text-blue-600">LinkedIn</a>
        </p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Objective</h2>
        <p>To obtain a challenging position in the field of Embedded Systems in a high-quality engineering environment.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Current Position</h2>
        <h3 className="font-bold">Embedded Software Engineer (Nov 2022 – Present)</h3>
        <p>Valeo Egypt, Cairo</p>
        <ul className="list-disc list-inside">
          <li>Developing Python tools and CI/CD scripts</li>
          <li>Maintaining traceability, integration, peer-review</li>
          <li>Model-based development using SIMULINK and MIL/SIL testing</li>
          <li>Working with Git, Reqtify, Robot Framework, Polyspace</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p className="font-bold">B.S. in Computers and Systems Engineering</p>
        <p>Minya University (2017–2022) – GPA: 3.7/4.0, Excellent with Honor</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>MCAL & HAL Drivers:</strong> AVR drivers for peripherals and sensors – <a className="text-blue-600" href="https://github.com/abdoaboganima/avr">GitHub Link</a>
          </li>
          <li>
            <strong>Line Follower Robot:</strong> ATmega32, DC motors, L293, IR sensors
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Languages</h2>
        <ul className="list-disc list-inside">
          <li>Arabic – Native</li>
          <li>English – Full Professional Proficiency</li>
          <li>German – Intermediate (B1)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Courses & Certifications</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><a href="https://www.coursera.org/account/accomplishments/certificate/W9A79QAQWTAU" className="text-blue-600">Introduction to DevOps</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/certificate/DXM25A5N4KWY" className="text-blue-600">Intro to TDD and BDD</a></li>
          <li><a href="https://credentials.edx.org/credentials/ff9938cc64cf4585be51389464e68438/" className="text-blue-600">C Programming with Linux – edX</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/5AHGQBBNXTD7" className="text-blue-600">Intro to Programming in C Specialization</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/certificate/EEZ9KUAC2SMG" className="text-blue-600">Version Control with Git</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/certificate/VXPDEJGU6VYR" className="text-blue-600">Nand to Tetris</a></li>
          <li><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/74BCCAZCV8KG" className="text-blue-600">Computational Thinking in C</a></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <p><strong>Languages:</strong> C, C++, Python, Bash, MATLAB, Rust</p>
        <p><strong>Tools:</strong> Git, Jenkins, Docker, Reqtify, Polyspace, Robot Framework</p>
        <p><strong>MCUs:</strong> AVR, ARM (TM4C), ESP32</p>
        <p><strong>Protocols:</strong> UART, SPI, I2C, CAN, LIN, UDS</p>
        <p><strong>RTOS:</strong> FreeRTOS</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Training</h2>
        <ul className="list-disc list-inside">
          <li>RTOS and Automotive Tech – NTI (2022)</li>
          <li>Embedded Systems Training – ITI (2021)</li>
        </ul>
      </section>

      <footer className="text-center text-sm mt-10 text-gray-500">
        © {new Date().getFullYear()} Abdelrahman Aboghanima. All rights reserved.
      </footer>
    </main>
  );
}
