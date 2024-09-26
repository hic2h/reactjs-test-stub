import React from 'react';
import FrameworkCard from '../components/FrameworkCard';
import items from './items';
import useFrameworkSearch from '../hooks/useFrameworkSearch';

const FrameworksPage = () => {
    const {
        filteredItems,
        setSearchTerm,
        searchTerm,
    } = useFrameworkSearch(items);

    return (
        <>
            <h1>Frameworks</h1>
            <input
                className='search'
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Type to search..."
            />
            {filteredItems.length === 0 && <p>No results found!</p>}
            {filteredItems.length > 0 && filteredItems.map(({ name, description }, index) => (
                <FrameworkCard key={index} name={name} description={description} />
            ))}
        </>
    );
};

export default FrameworksPage;