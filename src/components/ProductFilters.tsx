
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface FilterState {
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
  sortBy: string;
}

interface ProductFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

const ProductFilters = ({ onFilterChange }: ProductFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
    sizes: [],
    colors: [],
    priceRange: [0, 100],
    sortBy: 'featured'
  });

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Black', 'White', 'Gray', 'Navy', 'Red', 'Blue', 'Green'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name A-Z' }
  ];

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleSizeToggle = (size: string) => {
    setFilters(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }));
  };

  const handleColorToggle = (color: string) => {
    setFilters(prev => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color]
    }));
  };

  const clearFilters = () => {
    setFilters({
      sizes: [],
      colors: [],
      priceRange: [0, 100],
      sortBy: 'featured'
    });
  };

  const getColorValue = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'Black': '#000000',
      'White': '#FFFFFF',
      'Gray': '#6B7280',
      'Navy': '#1E3A8A',
      'Red': '#DC2626',
      'Blue': '#2563EB',
      'Green': '#059669'
    };
    return colorMap[color] || color.toLowerCase();
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-gray-500 hover:text-gray-700 flex items-center space-x-1"
        >
          <X className="w-4 h-4" />
          <span>Clear All</span>
        </button>
      </div>

      {/* Sort By */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">Sort By</label>
        <select
          value={filters.sortBy}
          onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
          className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">
          Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
        </label>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="100"
            value={filters.priceRange[0]}
            onChange={(e) => setFilters(prev => ({
              ...prev,
              priceRange: [parseInt(e.target.value), prev.priceRange[1]]
            }))}
            className="w-full"
          />
          <input
            type="range"
            min="0"
            max="100"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters(prev => ({
              ...prev,
              priceRange: [prev.priceRange[0], parseInt(e.target.value)]
            }))}
            className="w-full"
          />
        </div>
      </div>

      {/* Sizes */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">Sizes</label>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => handleSizeToggle(size)}
              className={`p-2 rounded-lg border-2 transition-colors ${
                filters.sizes.includes(size)
                  ? 'border-black bg-black text-white'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-3">Colors</label>
        <div className="grid grid-cols-4 gap-3">
          {colors.map(color => (
            <button
              key={color}
              onClick={() => handleColorToggle(color)}
              className={`w-10 h-10 rounded-full border-4 transition-all ${
                filters.colors.includes(color)
                  ? 'border-black scale-110'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              style={{ backgroundColor: getColorValue(color) }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Active Filters */}
      {(filters.sizes.length > 0 || filters.colors.length > 0) && (
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-3">Active Filters</label>
          <div className="flex flex-wrap gap-2">
            {filters.sizes.map(size => (
              <span
                key={size}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1"
              >
                <span>Size: {size}</span>
                <button onClick={() => handleSizeToggle(size)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            {filters.colors.map(color => (
              <span
                key={color}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1"
              >
                <span>{color}</span>
                <button onClick={() => handleColorToggle(color)}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;
