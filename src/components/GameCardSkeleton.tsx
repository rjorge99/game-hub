import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import GameCardComponent from './GameCardComponent';

const GameCardSkeleton = () => {
    return (
        <GameCardComponent>
            <Card>
                <Skeleton height='200px' />
                <CardBody>
                    <SkeletonText />
                </CardBody>
            </Card>
        </GameCardComponent>
    );
};

export default GameCardSkeleton;
