import React from 'react';

const Blog = () => {
  return (
    <div className='my-5 mx-4' style={{textAlign: 'justify'}}>
      <h4>Distinguish between authorization and authentication</h4>
      <ul>
        <li>Authentication corroborates the user. Meanwhile, Authorization decides what resources a user can access.</li>
        <li>Authentication performs through passwords, one-time pins, biometric information, and the other information delivered by the user. Whereas, The organization implements and maintains settings that allow for authorization.</li>
        <li>Authentication is the first step of a good identity and access management process. On contrary, Authorization always takes place after authentication.</li>
        <li>The user may make some in authentication as it is visible. In contrast, Authorization isn't visible to or changeable by the user.</li>
        <li>In case of authentication, Employees can access an HR application that contains information about their personal pay and vacation time by ascretaining their identity. On the other hand, Employees and HR managers can access various levels of data based on the permissions given by the company once their level of access has been allowed.</li>
      </ul>

      <h4>Why are we using firebase? What other options do you have to implement authentication?</h4>
      <p>To authenticate users for your project, Firebase Authentication offers ready-made UI libraries, simple SDKs, and backend services. It supports federated identity providers like Google, Facebook, and Twitter, as well as passwords, phone numbers, and other methods.</p>
      <p>The competitors of firebase are given below.</p>
      <ul>
        <li>Back4App</li>
        <li>Backendless</li>
        <li>Kuzzle</li>
        <li>Pubnub</li>
        <li>Kumulos</li>
        <li>Appwrite</li>
        <li>Deployd</li>
        <li>NHost</li>
        <li>AWS Amplify</li>
        <li>Heroku</li>
      </ul>

      <h4>What other services does firebase provide other than authentication</h4>
      <p>The most userful services firebase provides except authentication are as following.</p>
      <ul>
        <li>Cloud Firestore</li>
        <li>Cloud Functions</li>
        <li>Hosting</li>
        <li>Cloud Storage</li>
        <li>Google Analytics</li>
        <li>Predictions</li>
        <li>Cloud Messaging</li>
        <li>Dynamic Links</li>
        <li>Remote Config</li>
        <li>Cloud Firestore</li>
      </ul>

    </div>
  );
};

export default Blog;