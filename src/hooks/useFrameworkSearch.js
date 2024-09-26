import React from 'react';

const useFrameworkSearch = (items) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filteredItems, setFilteredItems] = React.useState([]);

    const filterFrameworkItems = React.useCallback((input) => {
        if (!input) {
            return setFilteredItems(items);
        };

        const lowercasedInput = input.toLowerCase();
        const results = items.filter(item =>
            item.name.toLowerCase().includes(lowercasedInput) ||
            item.description.toLowerCase().includes(lowercasedInput)
        );

        setFilteredItems(results);
    }, [items]);

    React.useEffect(() => {
        filterFrameworkItems(searchTerm);
    }, [items, searchTerm]);

    return { filteredItems, setSearchTerm, searchTerm };
};

export default useFrameworkSearch;