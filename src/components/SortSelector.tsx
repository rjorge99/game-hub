import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string | null;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
    const sortOrders = [
        { label: 'Relevance', value: '' },
        { label: 'Date added', value: '-added' },
        { label: 'Name', value: 'name' },
        { label: 'Release date', value: '-released' },
        { label: 'Popularity', value: '-metacritic' },
        { label: 'Average rating', value: '-rating' }
    ];

    const currentSortOrder = sortOrders.find((order) => order.value === sortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Sort by: {currentSortOrder?.label || 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrders.map((sortOrder) => (
                    <MenuItem
                        key={sortOrder.label}
                        value={sortOrder.value}
                        onClick={() => onSelectSortOrder(sortOrder.value)}>
                        {sortOrder.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
