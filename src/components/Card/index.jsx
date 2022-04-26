import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

import { FcBullish, FcBearish, FcMoneyTransfer } from 'react-icons/fc';

function StatsCard(data) {
  const { title, stat, icon, cor } = data;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} fontSize={'2xl'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'3xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>

        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Card() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
      >
        Gestão Financeira
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Entrada'}
          stat={'2700'}
          icon={<FcBullish size={'3em'} />}
        />
        <StatsCard
          title={'Saida'}
          stat={'3054.9'}
          icon={<FcBearish size={'3em'} />}
        />
        <StatsCard
          title={'Total'}
          stat={'354.9'}
          icon={<FcMoneyTransfer size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  );
}
