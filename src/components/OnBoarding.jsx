import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { useUser } from '../context/userContext';
import { useAuth } from '../context/authContext';

const OnBoarding = () => {
  const [name, setName] = useState('');
  const [currentInterest, setCurrentInterest] = useState('');
  const [interests, setInterests] = useState([]);
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const {updateUser} = useUser();
  const {user} = useAuth();

  if (user.interests && user.name){
    navigate("/dashboard")
  }

  // Predefined interest suggestions
  const interestSuggestions = [
    'Photography', 'Cooking', 'Hiking', 'Reading',
    'Music', 'Gaming', 'Travel', 'Art',
    'Technology', 'Fitness', 'Movies', 'Writing'
  ];

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim()) setError('');
  };

  const handleNextStep = () => {
    if (name.trim() === '') {
      setError('Please enter your name');
      return;
    }
    setStep(2);
  };

  const handleAddInterest = () => {
    if (currentInterest.trim() === '') return;
    
    if (!interests.includes(currentInterest)) {
      setInterests([...interests, currentInterest]);
    }
    
    setCurrentInterest('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddInterest();
    }
  };

  const handleRemoveInterest = (interestToRemove) => {
    setInterests(interests.filter(interest => interest !== interestToRemove));
  };

  const selectSuggestion = (suggestion) => {
    if (!interests.includes(suggestion)) {
      setInterests([...interests, suggestion]);
    }
  };

  const handleComplete = () => {
    if (interests.length === 0) {
      setError('Please add at least one interest');
      return;
    }
    // Here you would typically send the data to your backend
    updateUser({name, interests})
    console.log(user)
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        
        {/* Progress indicator */}
        <progress 
          className="progress progress-secondary w-full"
          value={step === 3 ? 100 : step === 2 ? 66 : 0} 
          max="100"
        ></progress>
        
        <div className="card-body">
          {/* Step 1: Name input */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Welcome!</h1>
                <p className="text-base-content text-opacity-70">Let's start with your name</p>
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                />
                {error && <label className="label">
                  <span className="label-text-alt text-error">{error}</span>
                </label>}
              </div>
              
              <button
                onClick={handleNextStep}
                className="btn btn-secondary w-full"
              >
                Continue
              </button>
            </div>
          )}
          
          {/* Step 2: Interests selection */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Hi, {name}!</h1>
                <p className="text-base-content text-opacity-70">Tell us about your interests</p>
              </div>
              
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your interests</span>
                </label>
                <div className="join w-full">
                  <input
                    type="text"
                    value={currentInterest}
                    onChange={(e) => setCurrentInterest(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="input input-bordered join-item w-full"
                    placeholder="Add an interest"
                  />
                  <button
                    onClick={handleAddInterest}
                    className="btn btn-secondary join-item"
                  >
                    Add
                  </button>
                </div>
                {error && <label className="label">
                  <span className="label-text-alt text-error">{error}</span>
                </label>}
              </div>
              
              {/* Interest tags */}
              <div className="flex flex-wrap gap-2 min-h-16">
                {interests.map((interest, index) => (
                  <div key={index} className="badge badge-lg badge-secondary gap-1">
                    <span>{interest}</span>
                    <button
                      onClick={() => handleRemoveInterest(interest)}
                      className="btn btn-xs btn-circle btn-ghost"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Suggested interests */}
              <div>
                <label className="label">
                  <span className="label-text">Suggested interests:</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {interestSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => selectSuggestion(suggestion)}
                      className={`badge ${
                        interests.includes(suggestion) 
                          ? 'badge-secondary p-3' 
                          : 'badge-outline p-3'
                      }`}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="btn btn-outline flex-1"
                >
                  Back
                </button>
                <button
                  onClick={handleComplete}
                  className="btn btn-secondary flex-1"
                >
                  Complete
                </button>
              </div>
            </div>
          )}
          
          {/* Step 3: Completion */}
          {step === 3 && (
            <div className="space-y-6 text-center">
              <div className="flex justify-center">
                <div className="avatar placeholder">
                  <div className="bg-green-100 text-green-600 rounded-full w-16">
                    <span className="text-3xl">✓</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h1 className="text-2xl font-bold mb-2">All set, {name}!</h1>
                <p className="text-base-content text-opacity-70">
                  We've noted your interests:
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {interests.map((interest, index) => (
                    <div key={index} className="badge badge-secondary p-3">{interest}</div>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => {navigate("/dashboard")}}
                className="btn btn-secondary w-full"
              >
                Start Learning
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;