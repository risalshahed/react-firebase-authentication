import React from 'react';

const About = () => {
  return (
    <div className='checkout my-5 '>
      <h1 className='text-center mb-4'>About Me</h1>
      <p style={{textAlign: 'justify'}}>
        I am Risal, A business lawyer, focus on issues that affect businesses, including taxation, business transactions and intellectual properties. I negotiate settlement terms, write legal documents, argue my clients' cases in courts as well. I work full-time from an office as well as I have a personal chamber.
      </p>
      <h3>The Fields where I am expert</h3>
      <ul>
        <li>Settle contract disputes</li>
        <li>Write contracts</li>
        <li>Navigate acquisitions and mergers</li>
        <li>Resolve business claims and issues</li>
        <li>Resolve property and real estate disputes</li>
        <li>Manage risk and compliance</li>
      </ul>

      <h3>How have I become a business lawyer</h3>
      <ol>
        <li>Apply to law school</li>
        <li>Take the law school admission test (LSAT)</li>
        <li>Earn a bachelor's degree</li>
        <li>Get more practical experience</li>
        <li>Pass the bar exam</li>
      </ol>
      <h3>Career Goal</h3>
      <p style={{textAlign: 'justify'}}>I will keep continuing my hands on practice. After a few years, I will apply for the jruish doctorate degree. And that's my ultimate dream, to become a barrister.</p>

    </div>
  );
};

export default About;