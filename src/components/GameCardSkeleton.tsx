import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
import Container from './GameCardContainer';

const GameCardSkeleton = () => {
    return (
        <Container>
            <Card>
                <Skeleton height='200px' />
                <CardBody>
                    <SkeletonText />
                </CardBody>
            </Card>
        </Container>
    );
};

export default GameCardSkeleton;
