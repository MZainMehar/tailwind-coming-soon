// App.js
import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import SignUpForm from './components/SignUpForm';


function App() {
  return (
    <div className="px-8 w-full" style={{backgroundImage:"url('rose-petals.svg')"}}>
      <div className="py-12 flex flex-col justify-between min-h-screen md:max-w-2xl lg:max-w-3xl mx-auto">
        <div>
          <CountdownTimer />
          <div className="mt-12 text-white text-center">
            <h1 className="font-bold text-4xl md:text-5xl">Project Coming Soon</h1>
            <p className="pt-4 text-lg md:text-xl">
              Story Gennie is an AI-powered platform that generates bedtime stories for children. Sign up to get notified when we launch.
            </p>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

export default App;
