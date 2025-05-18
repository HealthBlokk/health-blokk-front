'use client';

import { useState } from 'react';
import { AllergiesScreen } from '../../components/questionnaire/allergies-screen';
import { AppPurposeScreen } from '../../components/questionnaire/app-purpose-screen';
import { DietaryPreferencesScreen } from '../../components/questionnaire/dietary-preferences-screen';
import { GoalsScreen } from '../../components/questionnaire/goals-screen';
import { HealthConditionsScreen } from '../../components/questionnaire/health-conditions-screen';
import { ProgressIndicator } from '../../components/questionnaire/progress-indicator';
import { WelcomeScreen } from '../../components/questionnaire/welcome-screen';

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-4">
          <h1 className="text-2xl font-bold text-center flex items-center gap-2">
            <span className="text-emerald-500">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="6" />
                <path d="M15,9 C15,9 13,13 12,14 C11,13 9,9 9,9 C9,9 11,8 12,7 C13,8 15,9 15,9 Z" />
              </svg>
            </span>
            HealthBlokk
          </h1>
        </div>

        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />

        {currentStep === 0 && <WelcomeScreen onNext={handleNext} />}

        {currentStep === 1 && (
          <AppPurposeScreen onPrevious={handlePrevious} onNext={handleNext} />
        )}

        {currentStep === 2 && (
          <AllergiesScreen onPrevious={handlePrevious} onNext={handleNext} />
        )}

        {currentStep === 3 && (
          <DietaryPreferencesScreen
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        )}

        {currentStep === 4 && (
          <HealthConditionsScreen
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        )}

        {currentStep === 5 && (
          <GoalsScreen onPrevious={handlePrevious} onNext={handleNext} />
        )}
      </div>
    </main>
  );
}

export default App;
