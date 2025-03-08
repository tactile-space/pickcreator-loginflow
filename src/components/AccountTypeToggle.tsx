
import React from 'react';
import { Briefcase, Star } from 'lucide-react';

type AccountType = 'brand' | 'influencer';

interface AccountTypeToggleProps {
  selectedType: AccountType;
  onChange: (type: AccountType) => void;
}

const AccountTypeToggle: React.FC<AccountTypeToggleProps> = ({
  selectedType,
  onChange,
}) => {
  return (
    <div className="flex gap-3 w-full mb-6">
      <button
        type="button"
        onClick={() => onChange('brand')}
        className={`toggle-btn flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm border border-border/50 shadow-input ${
          selectedType === 'brand' ? 'active' : ''
        }`}
      >
        <Briefcase className="w-4 h-4" />
        <span>Brand</span>
      </button>
      <button
        type="button"
        onClick={() => onChange('influencer')}
        className={`toggle-btn flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm border border-border/50 shadow-input ${
          selectedType === 'influencer' ? 'active' : ''
        }`}
      >
        <Star className="w-4 h-4" />
        <span>Influencer</span>
      </button>
    </div>
  );
};

export default AccountTypeToggle;
