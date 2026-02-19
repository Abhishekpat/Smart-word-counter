
import React, { useState, useCallback } from 'react';
import { StatsCard } from './components/StatsCard';

interface AnalysisResults {
  words: number;
  chars: number;
  sentences: number;
}

const App: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [results, setResults] = useState<AnalysisResults | null>(null);
  const [error, setError] = useState<string>('');

  const handleAnalyze = useCallback(() => {
    const trimmedText = text.trim();
    
    if (!trimmedText) {
      setError('Please enter some text to analyze.');
      setResults(null);
      return;
    }

    setError('');

    // Word Count: split by any whitespace and filter empty strings
    const words = trimmedText.split(/\s+/).filter(word => word.length > 0).length;

    // Character Count: total length minus any whitespace characters
    const chars = trimmedText.replace(/\s/g, '').length;

    // Sentence Count: split by common punctuation and filter empty strings
    // We handle cases where there might be multiple punctuation marks (e.g., "Hi!!!")
    const sentences = trimmedText.split(/[.!?]+/).filter(s => s.trim().length > 0).length;

    setResults({
      words,
      chars,
      sentences
    });
  }, [text]);

  const handleClear = () => {
    setText('');
    setResults(null);
    setError('');
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Smart Word Counter
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Professional text analysis at your fingertips.
          </p>
        </header>

        <main className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-200">
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <label 
                htmlFor="text-input" 
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Paste your text here
              </label>
              <textarea
                id="text-input"
                className={`w-full h-64 p-4 text-slate-800 bg-slate-50 border-2 rounded-xl focus:ring-4 focus:outline-none transition-all duration-200 resize-none ${
                  error ? 'border-red-300 focus:ring-red-100' : 'border-slate-200 focus:ring-indigo-100 focus:border-indigo-500'
                }`}
                placeholder="Type or paste your content..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              {error && (
                <p className="mt-2 text-sm text-red-600 font-medium">
                  {error}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAnalyze}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-indigo-200 transform transition hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              >
                Analyze Text
              </button>
              <button
                onClick={handleClear}
                className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-600 font-semibold py-3 px-6 rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-slate-100"
              >
                Clear
              </button>
            </div>

            {results && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <StatsCard 
                  label="Words" 
                  value={results.words} 
                  color="indigo" 
                />
                <StatsCard 
                  label="Characters" 
                  subLabel="(No spaces)"
                  value={results.chars} 
                  color="blue" 
                />
                <StatsCard 
                  label="Sentences" 
                  value={results.sentences} 
                  color="emerald" 
                />
              </div>
            )}
          </div>
        </main>

        <footer className="mt-12 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Smart Word Counter. Built for precision.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
