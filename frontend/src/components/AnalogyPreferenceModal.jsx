import { useState } from 'react';
import { X, Check } from 'lucide-react';

const ANALOGY_OPTIONS = [
  { id: 'general', label: 'General / Simple', icon: '🌍' },
  { id: 'football', label: 'Football', icon: '⚽' },
  { id: 'gaming', label: 'Gaming', icon: '🎮' },
  { id: 'movies', label: 'Movies & TV', icon: '🎬' },
  { id: 'fashion', label: 'Fashion', icon: '👗' },
  { id: 'cooking', label: 'Cooking', icon: '🍳' },
  { id: 'music', label: 'Music', icon: '🎵' }
];

const AnalogyPreferenceModal = ({ isOpen, onClose, onSelect }) => {
  const [selected, setSelected] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (selected) {
      onSelect(selected);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Choose Your Learning Style</h3>
            <p className="text-sm text-gray-500 mt-1">How should the AI explain things to you?</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 gap-3">
            {ANALOGY_OPTIONS.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelected(option.id)}
                className={`flex items-center p-4 rounded-xl border-2 transition-all ${
                  selected === option.id
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                    : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-700'
                }`}
              >
                <span className="text-2xl mr-3">{option.icon}</span>
                <span className="font-semibold text-sm">{option.label}</span>
                {selected === option.id && (
                  <div className="ml-auto">
                    <Check className="w-4 h-4 text-indigo-600" />
                  </div>
                )}
              </button>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!selected}
            className={`mt-6 w-full py-3 rounded-xl font-bold text-white transition-all ${
              selected
                ? 'bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalogyPreferenceModal;

