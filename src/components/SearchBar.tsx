import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FormEvent, useRef } from 'react';

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
    const searchRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (searchRef.current) onSearch(searchRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup>
                <InputLeftElement pointerEvents='none' children={<SearchIcon />} />
                <Input
                    ref={searchRef}
                    borderRadius={20}
                    placeholder='Search games...'
                    variant='outline'
                />
            </InputGroup>
        </form>
    );
};

export default SearchBar;
