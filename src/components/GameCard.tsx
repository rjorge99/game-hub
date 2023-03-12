import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import getCroppedImageUrl from '../services/imageUrl';
import CriticScore from './CriticScore';
import Container from './GameCardContainer';
import PlatformIconList from './PlatformIconList';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <Container>
            <Card>
                <Image src={getCroppedImageUrl(game.background_image)} />
                <CardBody>
                    <Heading fontSize='2xl'>{game.name}</Heading>
                    <HStack justifyContent='space-between'>
                        <PlatformIconList
                            platforms={game.parent_platforms.map((p) => p.platform)}
                        />
                        <CriticScore score={game.metacritic} />
                    </HStack>
                </CardBody>
            </Card>
        </Container>
    );
};

export default GameCard;
