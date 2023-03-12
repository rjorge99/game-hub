import { Button, Divider, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';

const PlatformSelector = () => {
    const { data, error } = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Platforms
            </MenuButton>
            <MenuList>
                {data.map((platforms) => (
                    <MenuItem key={platforms.id}>{platforms.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
